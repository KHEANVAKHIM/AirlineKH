<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Mail\WelcomeGoogleUserMail;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Laravel\Sanctum\PersonalAccessToken;
use Symfony\Component\HttpFoundation\Cookie;
use Throwable;

class AuthController extends Controller
{
    /**
     * Tạo cookie chứa Refresh Token (HttpOnly, Secure, SameSite=Lax)
     */
    private function createRefreshCookie(string $refreshToken, Request $request): Cookie
    {
        $isSecure = $request->secure() || str_starts_with(env('FRONTEND_URL', ''), 'https://');
        
        return cookie(
            'refreshToken',
            $refreshToken,
            60 * 24 * 7, // 7 ngày (tính theo phút)
            '/',
            null,
            $isSecure,
            true, // HttpOnly: Chặn 100% JavaScript (XSS) đọc trộm
            false,
            'Lax' // Chống CSRF
        );
    }

    /**
     * Đăng ký tài khoản mới bằng Email/Mật khẩu
     */
    public function register(RegisterRequest $request): JsonResponse
    {
        $validated = $request->validated();

        $user = User::create([
            'name'            => $validated['name'],
            'email'           => $validated['email'],
            'password'        => Hash::make($validated['password']),
            'membership_tier' => 'standard',
            'email_verified_at' => now(),
        ]);

        $memberRole = Role::where('name', 'member')->first();
        if ($memberRole) {
            $user->roles()->attach($memberRole);
        }

        // Gửi email chào mừng kích hoạt tài khoản
        try {
            Mail::to($user->email)->send(new WelcomeGoogleUserMail($user));
            Log::info('Welcome email sent to newly registered user: ' . $user->email);
        } catch (Throwable $mailEx) {
            Log::warning('Could not send welcome email to ' . $user->email . ': ' . $mailEx->getMessage());
        }

        $user->load('roles');

        // 1. Access Token ngắn hạn (15 phút) lưu trong RAM (Zustand)
        $accessToken = $user->createToken('access_token', ['*'], now()->addMinutes(15))->plainTextToken;

        // 2. Refresh Token dài hạn (7 ngày) lưu trong HttpOnly Cookie
        $refreshToken = $user->createToken('refresh_token', ['issue-access-token'], now()->addDays(7))->plainTextToken;

        return response()->json([
            'status'       => 'success',
            'user'         => $user,
            'access_token' => $accessToken,
            'token_type'   => 'Bearer',
            'expires_in'   => 900, // 15 phút
        ], 201)->withCookie($this->createRefreshCookie($refreshToken, $request));
    }

    /**
     * Đăng nhập thông thường
     */
    public function login(LoginRequest $request): JsonResponse
    {
        $validated = $request->validated();

        if (!Auth::attempt($validated)) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Sai email hoặc mật khẩu',
            ], 401);
        }

        $user = User::with('roles')
            ->where('email', $validated['email'])
            ->firstOrFail();

        // 1. Access Token ngắn hạn (15 phút)
        $accessToken = $user->createToken('access_token', ['*'], now()->addMinutes(15))->plainTextToken;

        // 2. Refresh Token dài hạn (7 ngày)
        $refreshToken = $user->createToken('refresh_token', ['issue-access-token'], now()->addDays(7))->plainTextToken;

        return response()->json([
            'status'       => 'success',
            'user'         => $user,
            'access_token' => $accessToken,
            'token_type'   => 'Bearer',
            'expires_in'   => 900,
        ])->withCookie($this->createRefreshCookie($refreshToken, $request));
    }

    /**
     * Silent Refresh: Tự động cấp mới Access Token từ HttpOnly Refresh Token
     */
    public function refresh(Request $request): JsonResponse
    {
        $refreshToken = $request->cookie('refreshToken');

        if (!$refreshToken) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.',
            ], 401);
        }

        $tokenModel = PersonalAccessToken::findToken($refreshToken);

        if (!$tokenModel || ($tokenModel->expires_at && $tokenModel->expires_at->isPast()) || $tokenModel->name !== 'refresh_token') {
            return response()->json([
                'status'  => 'error',
                'message' => 'Refresh token không hợp lệ hoặc đã hết hạn.',
            ], 401)->withCookie(cookie()->forget('refreshToken'));
        }

        $user = $tokenModel->tokenable;

        if (!$user) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Không tìm thấy người dùng.',
            ], 401)->withCookie(cookie()->forget('refreshToken'));
        }

        // Xóa các access token đã hết hạn của user
        $user->tokens()->where('name', 'access_token')->where('expires_at', '<', now())->delete();

        // Cấp Access Token mới (15 phút)
        $newAccessToken = $user->createToken('access_token', ['*'], now()->addMinutes(15))->plainTextToken;

        return response()->json([
            'status'       => 'success',
            'user'         => $user->load('roles'),
            'access_token' => $newAccessToken,
            'token_type'   => 'Bearer',
            'expires_in'   => 900,
        ]);
    }

    /**
     * Lấy thông tin user hiện tại
     */
    public function me(Request $request): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'data'   => $request->user()->load('roles'),
        ]);
    }

    /**
     * Đăng xuất và thu hồi Refresh Token trong Cookie
     */
    public function logout(Request $request): JsonResponse
    {
        if ($request->user()) {
            $request->user()->currentAccessToken()?->delete();
        }

        $refreshToken = $request->cookie('refreshToken');
        if ($refreshToken) {
            $tokenModel = PersonalAccessToken::findToken($refreshToken);
            $tokenModel?->delete();
        }

        return response()->json([
            'status'  => 'success',
            'message' => 'Đã đăng xuất an toàn.',
        ])->withCookie(cookie()->forget('refreshToken'));
    }
}
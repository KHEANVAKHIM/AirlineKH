import { create } from "zustand";
import axios from "axios";

const envBase = import.meta.env.VITE_API_BASE_URL || "/api";
const isProdHost =
  typeof window !== "undefined" &&
  !window.location.hostname.includes("localhost") &&
  !window.location.hostname.includes("127.0.0.1");
const resolvedBaseURL =
  isProdHost && envBase.includes("127.0.0.1") ? "/api" : envBase;

export const useAuthStore = create((set, get) => ({
  user: null,
  accessToken: null, // Lưu trực tiếp trong RAM - Chống XSS an toàn 100%
  isInitialized: false,
  isLoading: false,

  // Cập nhật trạng thái sau khi Đăng nhập / Đăng ký / Google Auth
  setAuth: ({ user, token }) => {
    set({
      user: user || null,
      accessToken: token || null,
      isInitialized: true,
    });
    // Đồng bộ user cơ bản (chỉ UI hiển thị) nếu cần, TUYỆT ĐỐI không lưu access_token vào localStorage
    if (user) {
      localStorage.setItem("user_profile_cache", JSON.stringify(user));
    } else {
      localStorage.removeItem("user_profile_cache");
    }
  },

  // Đăng xuất và xóa sạch RAM & Cookie
  clearAuth: async () => {
    try {
      await axios.post(
        `${resolvedBaseURL}/auth/logout`,
        {},
        { withCredentials: true }
      );
    } catch {
      // Bỏ qua lỗi mạng khi logout
    }
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    localStorage.removeItem("user_profile_cache");
    set({
      user: null,
      accessToken: null,
      isInitialized: true,
    });
  },

  // Silent Refresh: Tự động khôi phục phiên đăng nhập từ HttpOnly Cookie khi reload trang
  checkAuth: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.post(
        `${resolvedBaseURL}/auth/refresh`,
        {},
        {
          withCredentials: true,
          headers: { Accept: "application/json" },
        }
      );

      if (response.data?.status === "success" && response.data?.access_token) {
        set({
          user: response.data.user,
          accessToken: response.data.access_token,
          isInitialized: true,
          isLoading: false,
        });
        localStorage.setItem(
          "user_profile_cache",
          JSON.stringify(response.data.user)
        );
        return true;
      }
    } catch {
      // Không có Refresh Token hoặc hết hạn ➜ trạng thái khách (guest)
    }

    set({
      user: null,
      accessToken: null,
      isInitialized: true,
      isLoading: false,
    });
    return false;
  },
}));

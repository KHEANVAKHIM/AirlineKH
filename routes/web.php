<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any?}', function () {
    $indexPath = public_path('index.html');
    if (file_exists($indexPath)) {
        return response()->file($indexPath);
    }
    return response('Frontend chưa được build. Vui lòng chạy `npm run build` trong thư mục client.', 404);
})->where('any', '^(?!api).*$');

<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $indexPath = public_path('index.html');
    if (file_exists($indexPath)) {
        return response()->file($indexPath, [
            'Content-Type' => 'text/html; charset=UTF-8'
        ]);
    }
    return response('Frontend chưa được build. Vui lòng kiểm tra dist.', 404);
});

Route::get('/{any}', function () {
    $indexPath = public_path('index.html');
    if (file_exists($indexPath)) {
        return response()->file($indexPath, [
            'Content-Type' => 'text/html; charset=UTF-8'
        ]);
    }
    return response('Frontend chưa được build.', 404);
})->where('any', '^(?!api).*$');

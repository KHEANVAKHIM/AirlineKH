#!/bin/sh
set -e

# Đảm bảo file database.sqlite tồn tại và có dữ liệu
if [ ! -f /var/www/database/database.sqlite ] || [ ! -s /var/www/database/database.sqlite ]; then
    touch /var/www/database/database.sqlite
    php artisan migrate:fresh --force --seed || true
fi

# Đồng bộ trực tiếp tất cả các biến môi trường thực tế từ Render vào .env
if [ -n "$GOOGLE_CLIENT_ID" ]; then
    sed -i '/^GOOGLE_CLIENT_ID=/d' /var/www/.env 2>/dev/null || true
    echo "GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID" >> /var/www/.env
fi

if [ -n "$GOOGLE_CLIENT_SECRET" ]; then
    sed -i '/^GOOGLE_CLIENT_SECRET=/d' /var/www/.env 2>/dev/null || true
    echo "GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET" >> /var/www/.env
fi

if [ -n "$GOOGLE_REDIRECT_URI" ]; then
    sed -i '/^GOOGLE_REDIRECT_URI=/d' /var/www/.env 2>/dev/null || true
    echo "GOOGLE_REDIRECT_URI=$GOOGLE_REDIRECT_URI" >> /var/www/.env
fi

if [ -n "$FRONTEND_URL" ]; then
    sed -i '/^FRONTEND_URL=/d' /var/www/.env 2>/dev/null || true
    echo "FRONTEND_URL=$FRONTEND_URL" >> /var/www/.env
fi

if [ -n "$GEMINI_API_KEY" ]; then
    sed -i '/^GEMINI_API_KEY=/d' /var/www/.env 2>/dev/null || true
    echo "GEMINI_API_KEY=$GEMINI_API_KEY" >> /var/www/.env
fi

if [ -n "$GEMINI_MODEL" ]; then
    sed -i '/^GEMINI_MODEL=/d' /var/www/.env 2>/dev/null || true
    echo "GEMINI_MODEL=$GEMINI_MODEL" >> /var/www/.env
fi

if [ -n "$APP_KEY" ]; then
    sed -i '/^APP_KEY=/d' /var/www/.env 2>/dev/null || true
    echo "APP_KEY=$APP_KEY" >> /var/www/.env
fi

# Đảm bảo quyền truy cập Database SQLite, Storage và .env
chmod -R 777 /var/www/database /var/www/storage /var/www/bootstrap/cache /var/www/.env 2>/dev/null || true

# Xóa cache config để nạp đúng toàn bộ biến môi trường từ Render
php artisan config:clear || true
php artisan route:clear || true
php artisan cache:clear || true

# Khởi động Web Server
echo "🚀 SkyLink Airline is running on port 10000 with preloaded Database and AI..."
exec php artisan serve --host=0.0.0.0 --port=10000

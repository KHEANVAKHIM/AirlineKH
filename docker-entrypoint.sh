#!/bin/sh
set -e

# Đảm bảo file database.sqlite tồn tại và có dữ liệu
if [ ! -f /var/www/database/database.sqlite ] || [ ! -s /var/www/database/database.sqlite ]; then
    touch /var/www/database/database.sqlite
    php artisan migrate:fresh --force --seed || true
fi

# Đảm bảo quyền truy cập Database SQLite và Storage
chmod -R 777 /var/www/database /var/www/storage /var/www/bootstrap/cache 2>/dev/null || true

# Xóa cache config để nạp đúng toàn bộ biến môi trường từ Render
php artisan config:clear || true
php artisan route:clear || true

# Khởi động Web Server
echo "🚀 SkyLink Airline is running on port 10000 with preloaded Database and AI..."
exec php artisan serve --host=0.0.0.0 --port=10000

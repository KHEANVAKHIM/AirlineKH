#!/bin/sh
set -e

# 1. Tự động khởi tạo Database SQLite nếu chưa có MySQL ngoài
if [ "$DB_CONNECTION" = "sqlite" ] || [ "$DB_HOST" = "127.0.0.1" ] || [ -z "$DB_HOST" ]; then
    export DB_CONNECTION=sqlite
    export DB_DATABASE=/var/www/database/database.sqlite
    touch /var/www/database/database.sqlite
    chmod 777 /var/www/database/database.sqlite
fi

# 2. Tự động nạp toàn bộ Bảng & Dữ liệu Chuyến bay, Sân bay, Admin mẫu
php artisan migrate --force --seed || true
php artisan storage:link 2>/dev/null || true
php artisan config:cache || true

# 3. Khởi động Web Server trên cổng Render
echo "🚀 SkyLink Airline is running with Database and AI on port 10000..."
exec php artisan serve --host=0.0.0.0 --port=10000

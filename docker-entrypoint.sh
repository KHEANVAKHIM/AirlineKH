#!/bin/sh
set -e

# 1. Tạo và phân quyền file Database SQLite tích hợp sẵn
mkdir -p /var/www/database
touch /var/www/database/database.sqlite
chmod 777 /var/www/database/database.sqlite

export DB_CONNECTION=sqlite
export DB_DATABASE=/var/www/database/database.sqlite

# 2. Tự động nạp dữ liệu Bảng, Sân bay, Chuyến bay, Tài khoản Admin
php artisan migrate --force --seed || true
php artisan storage:link 2>/dev/null || true
php artisan route:clear 2>/dev/null || true
php artisan view:clear 2>/dev/null || true
php artisan config:clear 2>/dev/null || true

# 3. Khởi động Web Server
echo "🚀 SkyLink Airline is running on port 10000 with SQLite Database..."
exec php artisan serve --host=0.0.0.0 --port=10000

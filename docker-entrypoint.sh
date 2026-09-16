#!/bin/sh
set -e

# Đảm bảo quyền truy cập Database SQLite và Storage
chmod -R 777 /var/www/database /var/www/storage /var/www/bootstrap/cache 2>/dev/null || true

# Khởi động Web Server
echo "🚀 SkyLink Airline is running on port 10000 with preloaded Database and AI..."
exec php artisan serve --host=0.0.0.0 --port=10000

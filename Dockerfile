# Multi-stage Dockerfile cho SkyLink Airline (Laravel 12 + React Vite)
FROM php:8.2-fpm-alpine

# Cài đặt các extension hệ thống cần thiết
RUN apk add --no-cache \
    nginx \
    supervisor \
    curl \
    git \
    nodejs \
    npm \
    libpng-dev \
    libxml2-dev \
    libzip-dev \
    zip \
    unzip \
    sqlite-dev \
    oniguruma-dev

# Cài đặt PHP extensions
RUN docker-php-ext-install pdo_mysql pdo_sqlite mbstring exif pcntl bcmath gd zip

# Cài đặt Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Thiết lập thư mục làm việc
WORKDIR /var/www

# Copy toàn bộ source code
COPY . /var/www

# Cài đặt PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Build Frontend React
WORKDIR /var/www/client
RUN npm install && npm run build

# Quay lại thư mục gốc và sao chép Frontend vào public
WORKDIR /var/www
RUN cp -rf /var/www/client/dist/* /var/www/public/ 2>/dev/null || true
RUN cp -f /var/www/client/public/hero.mp4 /var/www/public/hero.mp4 2>/dev/null || true

# Tạo và nạp sẵn toàn bộ Database Chuyến bay & Admin vào Docker Image
ENV DB_CONNECTION=sqlite
ENV DB_DATABASE=/var/www/database/database.sqlite
RUN touch /var/www/database/database.sqlite && chmod 777 /var/www/database/database.sqlite
RUN php artisan key:generate --force
RUN php artisan migrate:fresh --force --seed

RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache /var/www/public /var/www/database
RUN chmod -R 777 /var/www/storage /var/www/bootstrap/cache /var/www/public /var/www/database

RUN chmod +x /var/www/docker-entrypoint.sh

# Expose port HTTP & HTTPS
EXPOSE 80 443 10000

CMD ["/var/www/docker-entrypoint.sh"]

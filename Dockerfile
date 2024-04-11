# Sử dụng một hình ảnh cơ sở
FROM php:latest

# Cài đặt các gói cần thiết
RUN apt-get update && apt-get install -y \
    git \
    curl \
    zip \
    unzip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Cài đặt Composer (một trình quản lý gói PHP)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Thiết lập thư mục làm việc mặc định
WORKDIR /var/www/html

# Sao chép mã nguồn ứng dụng vào hình ảnh
COPY . /var/www/html

# Mở cổng mặc định để chạy ứng dụng PHP (thông thường là cổng 80)
EXPOSE 80

# Lệnh để chạy ứng dụng PHP khi container được khởi chạy
CMD ["php", "-S", "0.0.0.0:80"]

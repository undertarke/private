# Sử dụng hình ảnh cơ bản từ nginx
FROM nginx:alpine

# Cài đặt git trong container (nếu cần sử dụng git để kéo mã nguồn)
RUN apk add --no-cache git

# Tạo thư mục làm việc, không cần thiết bởi vì nginx đã có thư mục /usr/share/nginx/html
# WORKDIR /usr/share/nginx/html

# Sao chép các tệp mã nguồn HTML và CSS vào thư mục phục vụ nội dung tĩnh của Nginx
COPY . /usr/share/nginx/html

# Cấu hình Nginx được định nghĩa sẵn trong image nginx, bạn có thể bỏ qua bước cấu hình
# nếu không có yêu cầu cấu hình đặc biệt. Nếu cần cấu hình đặc biệt, có thể thêm các file cấu hình:
# COPY config/nginx.conf /etc/nginx/nginx.conf

# Mở cổng 80 để truy cập web từ bên ngoài
EXPOSE 80

# Khởi chạy Nginx và giữ cho nó chạy dưới nền
CMD ["nginx", "-g", "daemon off;"]

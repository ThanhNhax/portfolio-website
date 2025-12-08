Hướng dẫn thiết lập Vercel cho CI/CD (GitHub Actions)

1) Tạo Personal Token trên Vercel
- Đăng nhập vào https://vercel.com
- Vào **Settings** (Account) -> **Tokens** -> **Create Token**
- Ghi nhớ token (sẽ hiển thị 1 lần). Đây sẽ là giá trị `VERCEL_TOKEN`.

2) Lấy `VERCEL_ORG_ID` và `VERCEL_PROJECT_ID` (tùy chọn nhưng hữu ích)
- Mở project trên Vercel -> **Settings** -> **General**
- Kéo xuống để tìm `Project ID` và `Org ID` (hoặc copy từ API/URL nếu cần).

3) Thêm secrets vào GitHub repository
- Vào repository trên GitHub -> **Settings** -> **Secrets and variables** -> **Actions** -> **New repository secret**
- Thêm các secret sau:
  - `VERCEL_TOKEN` : (giá trị token bạn tạo ở bước 1)
  - `VERCEL_ORG_ID` : (nếu có)
  - `VERCEL_PROJECT_ID` : (nếu có)

4) Kích hoạt CI/CD
- Workflow được cấu hình để chạy khi có `push` lên nhánh `master`.
- Sau khi bạn thêm secret, push một commit lên `master` để kích hoạt workflow.

5) Gợi ý / phương án thay thế
- Bạn có thể dùng Vercel GitHub App (tích hợp trực tiếp) để triển khai tự động mà không cần token.
- Nếu `vercel pull` không lấy được biến môi trường, kiểm tra `VERCEL_ORG_ID` và `VERCEL_PROJECT_ID` đã chính xác chưa.

Nếu cần, tôi có thể cập nhật workflow để sử dụng `vercel/action` thay vì gọi CLI trực tiếp.

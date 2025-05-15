// script.js

// Chạy đoạn mã sau khi DOM đã sẵn sàng
document.addEventListener("DOMContentLoaded", function() {
  console.log("Website đã load thành công!");

  // Thêm hiệu ứng cuộn mượt cho các liên kết nội bộ
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
  scrollLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

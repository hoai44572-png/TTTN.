import React from 'react';

const AdminBannerSenHong = ({
  // 1. Cấu hình nền phía sau (Hỗ trợ 'color', 'image' cho cả png, jpg, gif, hoặc 'gradient')
  backgroundType = 'gradient', 
  backgroundValue = 'linear-gradient(135deg, #1e40af 0%, #3b82f6 40%, #a78bfa 75%, #f472b6 100%)',
  
  // 2. Cấu hình vị trí nguyên cụm ('flex-start' = Trái, 'center' = Giữa, 'flex-end' = Phải)
  alignment = 'flex-start', 
  
  // 3. Cấu hình bo góc của Box nội dung
  boxRadius = '40px 0px 40px 0px', 
  
  // 4. CẤU HÌNH NÚT BẤM (Trạng thái bình thường)
  buttonText = 'Tham gia cộng đồng',
  buttonBg = 'linear-gradient(to right, #00cbfe 0%, #0060ff 100%)', 
  buttonTextColor = '#ffffff',
  buttonRadius = '999px',

  // CẤU HÌNH KHI HOVER NÚT (Thêm mới theo yêu cầu)
  buttonHoverBg = 'linear-gradient(to right, #0060ff 0%, #00cbfe 100%)', // Đảo ngược dải màu hoặc thay màu mới tùy ý
  buttonHoverTextColor = '#facc15', // Ví dụ: đổi chữ sang màu vàng sáng khi hover (hoặc giữ nguyên màu tuỳ bạn chỉnh)
  
  // 5. Cấu hình chữ và kích thước
  topText = 'LAN TỎA GIÁ TRỊ ĐẤT',
  topTextColor = '#e2e8f0',
  title = 'Sen Hồng',
  titleColor = '#facc15', 
  titleSize = '56px',
  description = 'CLB Doanh nhân Đồng Tháp tại TPHCM quy tụ những người con quê hương Đất Sen Hồng. Với tinh thần Hợp tác - Đổi mới - Phát triển, CLB đóng vai trò là cầu nối chiến lược, hợp tác, thúc đẩy giá trị kinh doanh và lan tỏa sẻ chia nghĩa tình quê hương.',
  descColor = '#ffffff',
  descSize = '14px'
}) => {

  // Logic xử lý nền động
  let bgStyle = {};
  if (backgroundType === 'image') {
    bgStyle = { backgroundImage: `url(${backgroundValue})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' };
  } else if (backgroundType === 'gradient') {
    bgStyle = { background: backgroundValue };
  } else {
    bgStyle = { backgroundColor: backgroundValue };
  }

  return (
    <section style={{ 
      ...bgStyle, 
      padding: '100px 60px', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      boxSizing: 'border-box',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: alignment 
      }}>
        
        {/* Box chứa nội dung chính */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.12)', 
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: boxRadius,
          padding: '50px 45px',
          maxWidth: '480px',
          width: '100%',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxSizing: 'border-box',
          textAlign: 'left'
        }}>
          
          <p style={{ color: topTextColor, fontSize: '12px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 12px 0', opacity: 0.9 }}>
            {topText}
          </p>

          <h1 style={{ color: titleColor, fontSize: titleSize, fontWeight: '700', margin: '0 0 20px 0', lineHeight: '1.1', letterSpacing: '-0.5px' }}>
            {title}
          </h1>

          <p style={{ color: descColor, fontSize: descSize, fontWeight: '400', lineHeight: '1.6', margin: '0 0 35px 0', opacity: 0.95, textAlign: 'justify' }}>
            {description}
          </p>
          
          {/* NÚT BẤM XỬ LÝ HOVER ĐỔI MÀU NỀN & MÀU CHỮ */}
          <button style={{
            background: buttonBg,
            color: buttonTextColor,
            borderRadius: buttonRadius,
            padding: '12px 32px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '14px',
            boxShadow: '0 8px 20px rgba(0, 96, 255, 0.3)',
            transition: 'all 0.4s ease', // Tăng thời gian chuyển đổi lên 0.4s để hiệu ứng mượt hơn
            outline: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = buttonHoverBg;
            e.currentTarget.style.color = buttonHoverTextColor;
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 96, 255, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = buttonBg;
            e.currentTarget.style.color = buttonTextColor;
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 96, 255, 0.3)';
          }}
          >
            {buttonText}
          </button>
        </div>

      </div>
    </section>
  );
};

export default AdminBannerSenHong;
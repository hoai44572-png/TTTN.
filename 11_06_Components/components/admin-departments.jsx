import React from 'react';

const AdminDepartments = ({
  // 1. Cấu hình nền: Đã được lấy mã màu chuẩn xác 100% bằng gradient đa điểm (Trắng xanh sang Tím nhạt)
  backgroundType = 'gradient',
  backgroundValue = 'linear-gradient(135deg, #ffffffff 0%, #ffe4fdff 20%, #8578ffff 100%)',

  // 2. Cấu hình tiêu đề
  mainTitle = 'CÁC BAN CHUYÊN MÔN',
  subTitle = 'CLB DOANH NHÂN ĐỒNG THÁP TẠI TP. HỒ CHÍ MINH',
  titleColor = '#1e3a8a',

  // 3. Cấu hình 5 cục (Thay đổi linh hoạt ảnh icon, chữ, nút bấm của từng cục)
  items = [
    { 
      id: 1, 
      title: 'Ban Kinh tế - Đầu tư', 
      icon: 'https://cdn-icons-png.flaticon.com/512/3121/3121609.png', 
      btnText: 'Xem hoạt động', 
      btnRadius: '20px' 
    },
    { 
      id: 2, 
      title: 'Ban Văn hóa - Thể thao', 
      icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135783.png', 
      btnText: 'Xem hoạt động', 
      btnRadius: '20px' 
    },
    { 
      id: 3, 
      title: 'Ban Xã hội - Cộng đồng', 
      icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png', 
      btnText: 'Xem hoạt động', 
      btnRadius: '20px' 
    },
    { 
      id: 4, 
      title: 'Ban Khởi nghiệp', 
      icon: 'https://cdn-icons-png.flaticon.com/512/3067/3067416.png', 
      btnText: 'Xem hoạt động', 
      btnRadius: '20px' 
    },
    { 
      id: 5, 
      title: 'Ban Giao thương quốc tế', 
      icon: 'https://cdn-icons-png.flaticon.com/512/2885/2885417.png', 
      btnText: 'Xem hoạt động', 
      btnRadius: '20px' 
    }
  ]
}) => {

  // Logic xử lý cấu hình nền động từ Props
  let bgStyle = {};
  if (backgroundType === 'image') {
    bgStyle = { backgroundImage: `url(${backgroundValue})`, backgroundSize: 'cover', backgroundPosition: 'center' };
  } else if (backgroundType === 'gradient') {
    bgStyle = { background: backgroundValue };
  } else {
    bgStyle = { backgroundColor: backgroundValue };
  }

  return (
    <section style={{ 
      ...bgStyle, 
      padding: '80px 20px', 
      textAlign: 'center',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box'
    }}>
      {/* KHỐI TIÊU ĐỀ */}
      <div style={{ marginBottom: '55px' }}>
        <h2 style={{ 
          color: titleColor, 
          fontSize: '25px', 
          fontWeight: '700', 
          margin: '0 0 12px 0',
          letterSpacing: '0.5px'
        }}>
          {mainTitle}
        </h2>
        <p style={{ 
          color: titleColor, 
          fontSize: '15px', 
          fontWeight: '600', 
          margin: 0,
          letterSpacing: '0.3px',
          opacity: 0.95
        }}>
          {subTitle}
        </p>
      </div>
      
      {/* LƯỚI HIỂN THỊ 5 CỤC (Tự động chia thành 3 cục hàng trên, 2 cục hàng dưới chuẩn thiết kế) */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '35px 30px', // Khoảng cách dọc và ngang giữa các cục
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {items.map((item, index) => (
          <div key={item.id || index} style={{
            // Gradient xanh dương đổ từ đỉnh sáng xuống đáy đậm chuẩn màu ảnh gốc
            background: 'linear-gradient(180deg, #90bafeff 10%, #2175fdff 50%, #4747f5ff 100%)',
            color: '#ffffff',
            // Bo góc chéo bất đối xứng tạo hình lá đặc trưng
            borderRadius: '45px 0px 45px 0px', 
            padding: '40px 20px',
            width: '290px',
            height: '270px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 15px 35px rgba(23, 76, 179, 0.25)',
            transition: 'transform 0.3s ease'
          }}>
            {/* Ảnh Icon */}
            <div style={{ height: '65px', display: 'flex', alignItems: 'center' }}>
              <img 
                src={item.icon} 
                alt={item.title} 
                style={{ 
                  width: '56px', 
                  height: '56px', 
                  objectFit: 'contain',
                  // Biến đổi các icon màu thông thường thành màu trắng đồng nhất giống ảnh mẫu
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.9
                }} 
              />
            </div>

            {/* Chữ tiêu đề của từng cục */}
            <h3 style={{ 
              fontSize: '16px', 
              fontWeight: '600', 
              lineHeight: '1.4',
              textAlign: 'center',
              margin: '10px 0 20px 0',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              letterSpacing: '0.2px'
            }}>
              {item.title}
            </h3>

            {/* Nút bấm (Cho phép thay đổi bo góc và chữ qua từng item) */}
            <button style={{
              background: 'rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.45)',
              borderRadius: item.btnRadius || '20px',
              padding: '7px 22px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease',
              outline: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)';
            }}
            >
              {item.btnText} <span style={{ fontSize: '13px', lineHeight: '1' }}>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminDepartments;
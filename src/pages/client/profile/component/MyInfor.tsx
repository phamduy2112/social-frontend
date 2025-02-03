import React from 'react'

function MyInfor() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Thông tin cá nhân</h2>
      <div className="bg-zinc-600 p-4 rounded-md">
        <h3 className="text-xl">Thông tin cơ bản</h3>
        <p><strong>Tên:</strong> Phạm Duy</p>
        <p><strong>Tuổi:</strong> 25</p>
        <p><strong>Email:</strong> duy@example.com</p>
        <p><strong>Số điện thoại:</strong> 0123456789</p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl">Giới thiệu</h3>
        <p>Tôi là một lập trình viên đam mê công nghệ và thích khám phá những điều mới mẻ.</p>
      </div>
    </div>
  );
}

export default MyInfor
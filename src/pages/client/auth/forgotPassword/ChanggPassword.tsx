import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra xem mật khẩu và xác nhận mật khẩu có khớp không
    if (password !== confirmPassword) {
      setMessage('Mật khẩu và xác nhận mật khẩu không khớp.');
      return;
    }

    // Gọi API để thay đổi mật khẩu
    // Ví dụ:
    // fetch('/api/change-password', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ password }),
    // })
    // .then(response => {
    //   if (response.ok) {
    //     setMessage('Mật khẩu đã được thay đổi thành công!');
    //   } else {
    //     setMessage('Có lỗi xảy ra. Vui lòng thử lại.');
    //   }
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    //   setMessage('Có lỗi xảy ra. Vui lòng thử lại.');
    // });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <div className="bg-zinc-800 p-10 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Đổi Mật Khẩu</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300" htmlFor="password">Mật Khẩu Mới</label>
            <Input
              type="password"
              id="password"
              className='text-white'
              placeholder="Nhập mật khẩu mới"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300" htmlFor="confirmPassword">Xác Nhận Mật Khẩu</label>
            <Input
              type="password"
              id="confirmPassword"
              className='text-white'
              placeholder="Nhập lại mật khẩu mới"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Đổi Mật Khẩu
          </Button>
        </form>

        {message && <p className="mt-4 text-center text-sm text-gray-400">{message}</p>}
      </div>
    </div>
  );
};

export default ChangePassword;
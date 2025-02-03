import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi mã OTP đến email
    // Bạn có thể gọi API ở đây để gửi mã OTP
    console.log('Gửi mã OTP đến:', email);
    setMessage('Mã OTP đã được gửi đến email của bạn.');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <div className="bg-zinc-800 p-10 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Quên Mật Khẩu</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300" htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              className='text-white'
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Gửi Mã OTP
          </Button>
        </form>

        {message && <p className="mt-4 text-center text-sm text-gray-400">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
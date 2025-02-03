import React, { useState } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot, REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { Button } from '@/components/ui/button';

const OtpInput = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Mảng để lưu trữ giá trị OTP
  const [message, setMessage] = useState('');

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpString = otp.join(''); // Chuyển mảng OTP thành chuỗi
    console.log('Mã OTP:', otpString);
    
    // Gọi API để xác thực mã OTP
    // Ví dụ:
    // fetch('/api/verify-otp', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ otp: otpString }),
    // })
    // .then(response => {
    //   if (response.ok) {
    //     setMessage('Mã OTP hợp lệ!');
    //   } else {
    //     setMessage('Mã OTP không hợp lệ. Vui lòng thử lại.');
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
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Nhập Mã OTP</h2>
        
        <form onSubmit={handleSubmit}>
          <InputOTP
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            onChange={handleChange}
          >
            <InputOTPGroup>
              {otp.map((value, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  value={value}
                  onChange={(value) => handleChange(value, index)}
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
          
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200 mt-4"
          >
            Gửi Mã OTP
          </Button>
        </form>

        {message && <p className="mt-4 text-center text-sm text-gray-400">{message}</p>}
      </div>
    </div>
  );
};

export default OtpInput;
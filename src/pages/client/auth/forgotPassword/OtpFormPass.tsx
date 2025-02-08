import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';

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
      <div className="bg-zinc-800 p-10 rounded-lg shadow-lg w-[30rem]">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Nhập Mã OTP</h2>
        
        <form onSubmit={handleSubmit} className='w-[100%]'>
        <InputOTP
  maxLength={6}
  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
  onChange={handleChange}
  className="w-full" // Thêm class này để full width
>
  <InputOTPGroup className="w-full flex justify-between"> 
    {otp.map((value, index) => (
      <InputOTPSlot
        key={index}
        index={index}
        value={value}
        onChange={(value) => handleChange(value, index)}
        className="w-full text-center text-white h-[3rem]" // Đảm bảo mỗi ô full width
      />
    ))}
  </InputOTPGroup>
</InputOTP>
          <div className='flex justify-between mt-[.5rem] text-[.9rem]'>
          <p className='text-white'>Gửi lại</p>
          <p className='text-white'>Thời gian: <span>180s</span></p>
         

          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200 mt-3"
          >
            Gửi Mã OTP
          </Button>
        </form>

        {message && <p className="mt-4 text-center text-sm text-gray-400">{message}</p>}
      </div>
  );
};

export default OtpInput;
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { verifyEmail, verifyOTP } from '@/service/auth/auth.service';
import { toast } from '@/hooks/use-toast';
import { useAppSelector } from '@/redux/hooks';

const OtpInput = (props) => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 180 giây

  // Đếm ngược thời gian
  useEffect(() => {
    console.log('Thời gian còn lại:', timeLeft);
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
  
      return () => clearInterval(timer);
    }
  }, [timeLeft]);
  

  // Cập nhật giá trị OTP khi người dùng nhập
  const handleChange = (value: string) => {
    setOtp(value);
  };
  
  const email=useAppSelector((state)=>state.auth.email)

  // Xử lý khi nhấn nút gửi OTP
  const handleSubmit = async(e) => {
    e.preventDefault();

    if (otp.length < 6) {
      setMessage('Vui lòng nhập đủ mã OTP');
      return;
    }
    setLoading(true);
    console.log('Mã OTP:', otp);
    const resp:any=await verifyOTP(otp);
    toast({
           
                 description: resp?.data?.message,

                })
    if(resp.data.message=='Thành công') 
      { 
     
        props.handleSetNumber(2)             }
    setTimeout(() => {
      setMessage('Mã OTP đã được xác nhận!');
      setLoading(false);
    }, 1000);
  };

  // Xử lý khi nhấn "Gửi lại"
  const handleResend = async () => {
    console.log('Email hiện tại:', email);
    if (!email) {
      toast({
        description: 'Không tìm thấy email!',
      });
      return;
    }
  
    setOtp('');
    setTimeLeft(0);
    setTimeout(() => setTimeLeft(180), 100);
  
    setMessage('Mã OTP mới đã được gửi!');
    
    try {
      const resp: any = await verifyEmail(email);
      console.log('Phản hồi API:', resp);
      
      if (resp) {
        toast({
          description: 'Mã OTP mới đã được gửi!',
        });
      }
    } catch (error) {
      console.error('Lỗi khi gửi OTP:', error);
      toast({
        description: 'Lỗi khi gửi OTP, vui lòng thử lại!',
      });
    }
  };
  

  return (
    <div className="bg-zinc-800 p-10 rounded-lg shadow-lg w-[30rem]">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">Nhập Mã OTP</h2>

      <form onSubmit={handleSubmit} className="w-full">
        <InputOTP
          value={otp}
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          onChange={handleChange}
          className="w-full"
        >
          <InputOTPGroup className="w-full flex justify-between">
            {Array(6)
              .fill('')
              .map((_, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  value={otp[index] || ''}
                  className="w-full text-center text-white h-[3rem]"
                />
              ))}
          </InputOTPGroup>
        </InputOTP>

        <div className="flex justify-between mt-2 text-sm text-white">
          <p
            className={`cursor-pointer hover:underline ${timeLeft > 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={timeLeft === 0 ? handleResend : undefined}
          >
            Gửi lại
          </p>
          <p>
            Thời gian: <span>{timeLeft}s</span>
          </p>
        </div>

        <Button
          type="submit"
          disabled={loading || timeLeft === 0}
          className={`w-full p-3 rounded-md transition duration-200 mt-3 ${
            loading || timeLeft === 0 ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Đang gửi...' : 'Gửi Mã OTP'}
        </Button>
      </form>

      {message && <p className="mt-4 text-center text-sm text-gray-400">{message}</p>}
    </div>
  );
};

export default OtpInput;

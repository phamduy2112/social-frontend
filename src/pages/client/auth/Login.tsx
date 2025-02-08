import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { AiOutlineFacebook, AiOutlineGoogle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-zinc-900">
        <div className="bg-zinc-800 p-10 rounded-lg shadow-lg w-[30rem]">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Đăng Nhập</h2>
          
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">Email</label>
              <Input
                type="email"
                id="email"
                className='text-white '

                placeholder="Nhập email của bạn"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="password">Mật Khẩu</label>
              <Input
                type="password"
                id="password"
                className='text-white '

                placeholder="Nhập mật khẩu của bạn"
                required
              />
            </div>
            <div className='mb-2'>
              <Link to="/" className="text-zinc-400 hover:underline text-[.9rem] flex justify-end">Quên mật khẩu?</Link>
            </div>
            <Button
              type="submit"
              className="w-full h-[2.5rem] bg-zinc-900 text-white p-3 rounded-md hover:bg-zinc-700 transition duration-200"
            >
              Đăng Nhập
            </Button>
          </form>
  
          <div className="flex items-center justify-between mt-4">
            <hr className="w-full border-gray-600" />
            <span className="text-gray-400 mx-2">Hoặc</span>
            <hr className="w-full border-gray-600" />
          </div>
  
          <div className="mt-4">
            <Button className="flex items-center justify-center w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition duration-200 mb-2">
              <AiOutlineGoogle className="mr-2" /> Đăng Nhập với Google
            </Button>
            <Button className="flex items-center justify-center w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200">
              <AiOutlineFacebook className="mr-2" /> Đăng Nhập với Facebook
            </Button>
          </div>
  
          <p className="mt-4 text-center text-sm text-gray-400">
            Bạn chưa có tài khoản? <a href="#" className="text-blue-500 hover:underline">Đăng ký</a>
          </p>
        </div>
      </div>
    );
  };
  export default Login;

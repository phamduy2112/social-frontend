import React, { useState } from 'react';
import { FaHeart, FaPen, FaPhoneAlt, FaRegUser } from 'react-icons/fa';
import { FaEarthAfrica } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from 'react-icons/md';

function MyInfor() {
  const [activeTab, setActiveTab] = useState('overview'); // Mặc định là 'overview'

  return (
    <div className="p-4 h-[100vh] flex">
      {/* Sidebar */}
      <div className="w-[22rem] h-[30rem] border-transparent border-r border-red-600 p-[1rem]">
        <h3 className="text-[1.6rem] text-white">Giới thiệu</h3>
        <nav>
          <ul className="flex flex-col gap-[.5rem]">
            <li 
              className={`cursor-pointer rounded-md ${activeTab === 'overview' ? 'bg-blue-500' : ''} text-white`}
              onClick={() => setActiveTab('overview')}
            >
              <p className="py-[.3rem] px-[.7rem] mt-[.2rem]">Tổng quan</p>
            </li>
            <li 
              className={`cursor-pointer rounded-md ${activeTab === 'basic' ? 'bg-blue-500' : ''} text-white`}
              onClick={() => setActiveTab('basic')}
            >
              <p className="py-[.3rem] px-[.7rem] mt-[.2rem]">Thông tin cơ bản</p>
            </li>
            <li 
              className={`cursor-pointer rounded-md ${activeTab === 'relationships' ? 'bg-blue-500' : ''} text-white`}
              onClick={() => setActiveTab('relationships')}
            >
              <p className="py-[.3rem] px-[.7rem] mt-[.2rem]">Gia đình và các mối quan hệ</p>
            </li>
          </ul>
        </nav>
      </div>

      {/* Nội dung bên phải */}
      <div className="w-[80%] h-[30rem] flex flex-col gap-[2rem] border-transparent border border-red-600 p-[1rem]">
        {activeTab === 'overview' && (
          <div>
           <div>
            <h4 className="text-[1.2rem] text-white mb-3">Trình trạng</h4>
            <div className="flex justify-between items-center text-[1rem] text-white">
              <p className="flex items-center gap-[1rem]">
                <FaHeart /> Độc thân
              </p>
              <div className="flex gap-[1rem]">
                <FaEarthAfrica /> 
                <FaPen />
              </div>
            </div>
          </div> 
          <div>
        <h4 className='text-[1.2rem] text-white mb-3'>Thông tin liên lạc</h4>
       <div className='flex justify-between items-center text-[1rem]  text-white'>
          <p className='flex items-center gap-[1rem] '>
            
            <FaRegUser   />
            <div>
            Duy Phạm
            <p className='text-[.8rem] text-zinc-500'>Tên</p>
            </div>
          </p>
          <div className='flex gap-[1rem]'>
            <FaEarthAfrica /> 
            <FaPen />
          </div>
        </div>
       <div className='flex justify-between items-center text-[1rem]  text-white'>
          <p className='flex items-center gap-[1rem] '>
            
            <FaPhoneAlt  />
            <div>
            0334491141
            <p className='text-[.8rem] text-zinc-500'>Số điện thoại</p>
            </div>
          </p>
          <div className='flex gap-[1rem]'>
            <FaEarthAfrica /> 
            <FaPen />
          </div>
        </div>
        <div className='flex justify-between items-center text-[1rem]  text-white'>
          <p className='flex items-center gap-[1rem] '>
            
            <MdOutlineMarkEmailUnread   />
            <div>
            duyp7484@gmail.com
            <p className='text-[.8rem] text-zinc-500'>Email</p>
            </div>
          </p>
          <div className='flex gap-[1rem]'>
            <FaEarthAfrica /> 
            <FaPen />
          </div>
        </div>
       </div>
          </div>
          
        )}

        {activeTab === 'basic' && (
          <div>
            <h4 className="text-[1.2rem] text-white mb-3">Thông tin liên lạc</h4>
            <div className="flex justify-between items-center text-[1rem] text-white">
              <p className="flex items-center gap-[1rem]">
                <FaRegUser />
                <div>
                  Duy Phạm
                  <p className="text-[.8rem] text-zinc-500">Tên</p>
                </div>
              </p>
              <div className="flex gap-[1rem]">
                <FaEarthAfrica /> 
                <FaPen />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'relationships' && (
          <div>
            <h4 className="text-[1.2rem] text-white mb-3">Gia đình và các mối quan hệ</h4>
            <p className="text-white">Chưa cập nhật thông tin gia đình.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyInfor;

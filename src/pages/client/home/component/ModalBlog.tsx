import React from 'react'
import { FaRegCommentDots } from 'react-icons/fa'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from '@/components/ui/button';
import { BsThreeDots } from 'react-icons/bs';
import { IoCloseOutline } from 'react-icons/io5';
import { AiOutlineLike } from 'react-icons/ai';
import Blog from './Blog';

function ModalBlog() {
  return (
    <Dialog>
      <DialogTrigger className="w-[30%]">
        <div className="flex gap-[.5rem] items-center justify-center text-[1.1rem] text-zinc-400 cursor-pointer">
          <FaRegCommentDots />
          Bình luận
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[800px] w-full h-[90vh] bg-zinc-800 text-white overflow-y-auto"> {/* Thay đổi chiều rộng ở đây */}
        <DialogHeader>
          <DialogTitle className='text-center pb-3 text-[1.2rem]'>Bài viết của Duy</DialogTitle>

          {/* Đường kẻ ngang */}
          <div className="my-4 border-t border-gray-300" />
        </DialogHeader>

        {/* Body của modal */}
        <Blog/>

        {/* Đường kẻ ngang giữa Body và Footer */}
      </DialogContent>
    </Dialog>
  )
}

export default ModalBlog;
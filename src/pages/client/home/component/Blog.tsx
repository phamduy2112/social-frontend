import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaLocationArrow, FaRegCommentDots, FaRegHeart, FaRegSmile } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from "@/components/ui/button";
import ModalBlog from "./ModalBlog";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CiFaceSmile } from "react-icons/ci";
import { PiSmileySadBold } from "react-icons/pi";

function Blog() {
  return (
    <div>
      <div className="flex justify-between items-center px-4 ">
        <div className="flex gap-3">
          <div className="rounded-full w-[50px]">
            <Avatar className="w-4 h-4 cursor-pointer rounded-full mb-[1rem]">
              <AvatarImage src="https://github.com/shadcn.png" alt="asdas" />
              <AvatarFallback>Duy</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <p>Phạm Duy</p>
            <p className="text-[.8rem]">2 phút</p>
          </div>
        </div>
        <div className="flex gap-[1rem] text-[1.2rem]">
          <BsThreeDots />
          <IoCloseOutline />
        </div>
      </div>
      <div>
        <p className="py-[1rem] px-4">
          Điện thoại của ai đem về dùm đi , để nó đứng bơ vơ một mình mỏi chân
          lắm rồi =)))
        </p>
        <img
          width="100%"
          style={{ height: "500px" }}
          className="object-contain"
          src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/473970633_3696832523866904_758678437992717420_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=sQDLTmoeYjkQ7kNvgHYsseM&_nc_oc=Adii1MZNmZyI1W8h5mlsRe3AfocM0NZENJvEZQVg9CHRaG_2N85dVxUkkeCgSFDCqujEQsTDjFZkQiWD196Kc7uQ&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AlRrfbQpF1Mc7KIP0tlsqm8&oh=00_AYA4TgnFbKMEg13moKxtoayoODKxXHMY1hXzrWX9dwcb6w&oe=67998516"
          alt=""
        />
      </div>
      <div className="flex justify-between items-center py-[.5rem] border border-b-zinc-600 border-transparent">
       
        <Dialog>
        <DialogTrigger className="">
        <div className="flex gap-[.5rem] items-center px-4">
          
          <AiOutlineLike />
          10
        </div>
        </DialogTrigger>
        <DialogContent className="bg-zinc-800 border border-zinc-700 text-white">
          <DialogHeader>
            <DialogTitle>Tất cả</DialogTitle>

            {/* Đường kẻ ngang */}
            <div className="my-4 border-t border-gray-300" />

          </DialogHeader>

          {/* Body của modal */}
          <div className=" flex justify-between items">
         <div className='flex gap-3'>
      
         <div className="w-[50px] rounded-full">
        <Avatar className="w-8 h-8 cursor-pointer rounded-full">
          <AvatarImage src="https://github.com/shadcn.png" alt="asdas" />
          <AvatarFallback>Duy</AvatarFallback>
        </Avatar>
      </div>
    
      <p>Phạm Duy</p>
         </div>

<Button className="text-white">Thêm bạn bè</Button>
          
          </div>

          {/* Đường kẻ ngang giữa Body và Footer */}

       
        </DialogContent>
      </Dialog>
      <div className="flex gap-[1rem] text-zinc-400 text-[.9rem] px-4">
          <div>
           6,9k bình luận
          </div>
          <div>
        501 lượt chia sẻ
          </div>
        </div>
      </div>
      <div className="flex items-center py-[.5rem] justify-center  border border-b-zinc-600 border-transparent">
      <div className="flex gap-[.5rem] items-center justify-center w-[30%] text-[1.1rem] text-zinc-400 cursor-pointer" >
      <TooltipProvider>
  <Tooltip >
    <TooltipTrigger className="flex gap-[.5rem] items-center justify-center w-[30%] text-[1.1rem] text-zinc-400 cursor-pointer ">
    <AiOutlineLike />
    Thích
    </TooltipTrigger>
    <TooltipContent className="bg-zinc-800 border border-zinc-700 rounded-[3rem] flex gap-[.5rem]">
    <Button className="bg-blue-600 w-[2.5rem] h-[2.5rem] text-white rounded-full">
      
       
        <AiFillLike />
     </Button>
    <Button className="bg-red-600 w-[2.5rem] h-[2.5rem] text-white rounded-full"><FaRegHeart  /></Button>
    <Button className="bg-orange-600 w-[2.5rem] h-[2.5rem] text-white rounded-full
    text-[1.5rem]
    "><FaRegSmile    /></Button>
    <Button className="bg-orange-600 w-[2.5rem] h-[2.5rem] text-white rounded-full
    text-[1.5rem]
    "><PiSmileySadBold     /></Button>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
          
        </div>
        <ModalBlog/>
        <div className="flex gap-[.5rem] items-center justify-center w-[30%] text-[1.1rem] text-zinc-400 cursor-pointer" >
        <IoMdShare />
        Chia sẻ
        </div>
      </div>
      {/* bình luận */}

      <div className="flex gap-[1rem] px-4 py-3">
  <div className="w-[40] h-[40px] overflow-hidden rounded-full">
    <Avatar className="w-full h-full cursor-pointer">
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="Avatar of Duy"
        className="object-cover w-full h-full"
      />
      <AvatarFallback className="flex items-center justify-center w-full h-full">
        Duy
      </AvatarFallback>
    </Avatar>
  </div>

  <div className="w-[80%]">
    <h5 className="text-[.9rem]">Phạm Duy</h5>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing esadasdasdasdasdasdasdasdasdasdlit. Id harum, eiusasdasd
 

    </p>
    <div className="flex gap-[.8rem] mt-1">
        <p className="text-[.9rem] text-zinc-400">4 giờ</p>
        <p className="text-[.9rem] text-zinc-300">Thích</p>
        <p className="text-[.9rem] text-zinc-400">Phản hồi</p>
    </div>
  </div>
</div>
      <div className="flex gap-[1rem] px-4 py-1">
      <Avatar className="w-8 h-8 cursor-pointer">
        <AvatarImage src="https://github.com/shadcn.png" alt="Avatar of Duy" />
        <AvatarFallback>Duy</AvatarFallback>
      </Avatar>
      <div className="flex w-full items-center space-x-2 relative pb-4">
  <Input
    type="text"
    placeholder="Bình luận"
    height={10}
  />
  <button className="absolute right-5 top-[1.2rem] transform -translate-y-1/2 bg-transparent border-none cursor-pointer">
   <FaLocationArrow />
  </button>
</div>
          
      </div>
  

    </div>
  );
}

export default Blog;

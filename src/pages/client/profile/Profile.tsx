import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Header from "@/layout/component/header/Header";
import React from "react";
import { FaPen } from "react-icons/fa";
import CreateBlog from "../home/component/CreateBlog";
import Blog from "../home/component/Blog";
import { IoSchoolSharp } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import { GrPrevious } from "react-icons/gr";

function Profile() {
  const  isMobile=false
  return (
    <div>
      <div className="h-screeno bg-black text-white flex flex-col  ">
        <div className="sm:w-[100%] 2xl:w-[95%] mx-auto mt">
          <div className=" bg-zinc-500 h-[30rem] relative">
            <div className="w-[30px] h-[30px] cursor-pointer bg-black flex justify-center rounded-full items-center absolute top-2 left-3">
               <GrPrevious />
            </div>
           

          </div>
          <div className="relative bg-transparent    bottom-[2rem]  ">
            <div className="flex items-center justify-between gap-[1rem] border border-transparent border-b-zinc-600">
            <div className="flex items-center gap-[1rem]">
           <div className="rounded-full ">
              <Avatar className="w-[10rem] h-[10rem] cursor-pointer rounded-full mb-[1rem]">
                <AvatarImage src="https://github.com/shadcn.png" alt="asdas" />
                <AvatarFallback>Duy</AvatarFallback>
              </Avatar>
            </div>
            <div className="">
              <h4 className="text-[1.6rem]">Phạm Duy</h4>
              <p className="text-[.9rem] text-zinc-400 pb-2">145 người bạn</p>
              <div className="flex gap-2">
                <Avatar className="w-8 h-8 cursor-pointer rounded-full mb-[1rem]">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="asdas"
                  />
                  <AvatarFallback>Duy</AvatarFallback>
                </Avatar>
              </div>
            </div>
           </div>
           
           <div>
            <Button>
            <FaPen />
            Chỉnh sửa thông tin
</Button>   
          
           </div>
            </div>
        
         
           <div className="pt-4 flex gap-3 items-center">
                <p className="text-[1rem] cursor-pointer text-zinc-300">Bài viết</p>
                <p className="text-[1rem] cursor-pointer text-zinc-300">Giới thiệu</p>
                <p className="text-[1rem] cursor-pointer text-zinc-300">Bạn bè</p>
                <p className="text-[1rem] cursor-pointer text-zinc-300">Ảnh</p>
                <p className="text-[1rem] cursor-pointer text-zinc-300">Video</p>
                <p className="text-[1rem] cursor-pointer text-zinc-300">Xem thêm</p>
           
            </div>
          </div>
          {/*  */}
        <div>
            <Outlet/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Textarea } from '@/components/ui/textarea'
import Header from '@/layouts/components/header/Header'
import { Label } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { CiClock2 } from "react-icons/ci";

import { FaArrowLeft, FaFileImage } from 'react-icons/fa'

function CreateAlbum() {
    const isMobile=false

  return (
    <div className='relative'>
        
        <div className='h-screen overflow-y-auto bg-zinc-800 text-white flex flex-col '>

<div className='w-[100%] mx-auto'>
    <div className="flex">
    
    <div className='w-[30rem] bg-zinc-800 h-[100vh] border p-4 flex flex-col'>
    <div className='h-[4rem] flex  gap-[1rem]'>
        <div className="w-[2.5rem] h-[2.5rem] bg-zinc-600 flex justify-center items-center rounded-full cursor-pointer">
            <FaArrowLeft />
        </div>
        <span className='text-[1.3rem] mt-[.3rem]'>
            DuyBooks
        </span>
    </div>
    <h3 className='text-[1.5rem] font-semibold'>Tạo album</h3>
    <div className='flex-grow'> {/* Sử dụng flex-grow để chiếm không gian còn lại */}
        <Input type="text" placeholder="Tên album" className='py-6 mt-[1rem]' />
        <Button className='w-[100%] flex justify-center items-center mt-[1rem] py-6 bg-zinc-700'>
            <FaFileImage className='text-[1.2rem]' />
            <span className='text-[1.1rem]'>Tải ảnh lên</span>
        </Button>
    </div>
    <div className='border-t'>
        <Button className='w-[100%] flex justify-center items-center mt-[1rem] py-6 bg-blue-700 hover:bg-blue-800 text-[1.2rem]'>Đăng</Button>
    </div>
</div>
        <div className='w-[100%]'>
            <div className='bg-zinc-800 border-b h-[4rem] px-4'>
                <div>
                    asdasd
                </div>
            </div>
            <div className='px-5 py-5 grid grid-cols-5'>
                <div className='w-[100%] bg-zinc-700 h-[25.5rem] '>
                    <div className='w-[100%] h-[280px] px-12 bg-black relative'>
                        <img 
                        className='w-[100%] h-[100%] object-cover'
                        src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54" alt="" />
                                       <DropdownMenu >
  <DropdownMenuTrigger  className='absolute top-[1rem] right-[1rem] text-[1.2rem] '>
  <BsThreeDots/>

  </DropdownMenuTrigger>
  <DropdownMenuContent className="bg-zinc-800 text-white border-none left-[10rem]">

    <DropdownMenuItem className='hover:bg-zinc-800'>Gỡ ảnh</DropdownMenuItem>

  </DropdownMenuContent>
</DropdownMenu>
                    </div>
                    <div className="grid w-full gap-1.5 mt-[1rem] px-2">
      <Textarea placeholder="Type your message here." id="message" />
      <div className='flex gap-[.5rem] mt-[.6rem] text-[1.2rem] font-bold'>
      <CiClock2 />
      <CiClock2 />
      <CiClock2 />
      </div>
    </div>

                </div>
            </div>
        </div>
    </div>
</div>

</div>
    </div>

  )
}

export default CreateAlbum
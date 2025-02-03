import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import React from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import { LuUserRoundX } from "react-icons/lu";

function MyFriends() {
  return (
    <div className="bg-zinc-700/60 w-[100%] py-[1rem]">
      <div>
        <h3 className="text-white text-[1.3rem] py-[.5rem] px-[1.2rem]">
          Bạn bè
        </h3>
        <div className="py-[1rem] text-[1.1rem] px-[2rem]">
          <div className="flex gap-[1.5rem]">
            <p>Tất cả bạn bè</p>
            <p>Tất cả bạn bè</p>
            <p>Tất cả bạn bè</p>
            <p>Tất cả bạn bè</p>
          </div>
          <div className="grid grid-cols-2 mt-[2rem] gap-[3rem]">
            <div className="flex justify-between">
              <div className="flex gap-[1rem] justify-center items-center">
                <div className="w-[100px] rounded-md overflow-hidden">
                  
                  
                  <img
                  className="w-[100%] h-[100%] object-cover"
                    src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54"
                    alt=""
                  />
                </div>
                <div>
                  <h4>Quang Quang</h4>
                  <p className="text-[.9rem] text-zinc-400">16 bạn chung</p>
                </div>
           
              </div>
              <div>
              <DropdownMenu>
            <DropdownMenuTrigger>
              <RxDotsHorizontal />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-zinc-800 text-white">
       
             
              <DropdownMenuItem className="hover:bg-zinc-700 cursor-pointer">
                <LuUserRoundX />
                Hủy kết bạn</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

       
                </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-[1rem] justify-center items-center">
                <div className="w-[100px] rounded-md overflow-hidden">
                  <img
                  className="w-[100%] h-[100%] object-cover"
                    src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54"
                    alt=""
                  />
                </div>
                <div>
                  <h4>Quang Quang</h4>
                  <p className="text-[.9rem] text-zinc-400">16 bạn chung</p>
                </div>
           
              </div>
              <div>
          <RxDotsHorizontal />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyFriends;

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import React from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import { LuUserRoundX } from "react-icons/lu";
import { optionsDataFriends } from "@/utils/data/DataUser";

function MyFriends() {
  return (
    <div className="bg-zinc-700/60 w-[100%] h-[100vh] py-[1rem] text-white">
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
    {optionsDataFriends.map((user) => (
      <div key={user.id} className="flex justify-between">
        <div className="flex gap-[1rem] justify-center items-center">
          <div className="w-[100px] rounded-md overflow-hidden">
            <img className="w-[100%] h-[100%] object-cover" src="https://scontent.fhan4-4.fna.fbcdn.net/v/t39.30808-6/480816026_3722212301328926_8576528358840974159_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4tDyM9HFwUMQ7kNvgHwDZHp&_nc_oc=AdiaehlR5IuXlqMiryE0S5NiEBY7QFqJ7W4v9x7ijhsbj3uAa--NK7UENv3zMtFCvmY&_nc_zt=23&_nc_ht=scontent.fhan4-4.fna&_nc_gid=A-j2dFlBZkoPbqW3ph44Nq0&oh=00_AYAqz7AJeF80xnMrj_8NHgqMsyn9f2VdlFbCrPqKVWOBpw&oe=67C1A619" alt={user.name} />
          </div>
          <div>
            <h4>{user.name}</h4>
            <p className="text-[.9rem] text-zinc-400">{user.mutualFriends} bạn chung</p>
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
                Hủy kết bạn
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    ))}
  </div>

        </div>
      </div>
    </div>
  );
}

export default MyFriends;

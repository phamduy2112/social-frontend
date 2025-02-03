import { AvatarFallback } from '@/components/ui/avatar'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import { FaUserFriends } from 'react-icons/fa'

function LeftLayout() {
  return (
    <div>
     <div >
          <div className="p-2 rounded hover:bg-zinc-700 cursor-pointer flex gap-[.8rem] items-center">
          <Avatar className="w-8 h-8 cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>Phạm Duy</span>

              </div>
          <div className="p-2 rounded hover:bg-zinc-700 cursor-pointer flex gap-[.8rem] items-center">
                <FaUserFriends size={35} />
                <span>Bạn Bè</span>
              </div>
          <div className="p-2 rounded hover:bg-zinc-700 cursor-pointer flex gap-[.8rem] items-center">
                <FaUserFriends size={35} />
                <span>Bạn Bè</span>
              </div>
          <div className="p-2 rounded hover:bg-zinc-700 cursor-pointer flex gap-[.8rem] items-center">
                <FaUserFriends size={35} />
                <span>Bạn Bè</span>
              </div>
          <div className="p-2 rounded hover:bg-zinc-700 cursor-pointer flex gap-[.8rem] items-center">
                <FaUserFriends size={35} />
                <span>Bạn Bè</span>
              </div>
          <div className="p-2 rounded hover:bg-zinc-700 cursor-pointer flex gap-[.8rem] items-center">
                <FaUserFriends size={35} />
                <span>Bạn Bè</span>
              </div>
     </div>
    </div>
  )
}

export default LeftLayout
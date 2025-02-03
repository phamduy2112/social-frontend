import { AvatarImage,Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import React from 'react'

function ListSearchFriends() {
  return (
    <div className="flex justify-between items-center rp">
    <div className="flex gap-[1rem] justify-center">
    <Avatar className="w-[4rem] h-[4rem] cursor-pointer">
        <AvatarImage src="https://github.com/shadcn.png" alt="Avatar of Duy" />
        <AvatarFallback>Duy</AvatarFallback>
      </Avatar>
      <div>
        <h4>Quang Quang</h4>
        <p className="text-[.9rem] text-zinc-400">16 bạn chung</p>
        <div className='flex gap-[.5rem] mt-[.5rem] items-center'>
        <Avatar className="w-[1.7rem] h-[1.7rem] cursor-pointer">
        <AvatarImage src="https://github.com/shadcn.png" alt="Avatar of Duy" />
        <AvatarFallback>Duy</AvatarFallback>
      </Avatar>
        <Avatar className="w-[1.7rem] h-[1.7rem] cursor-pointer">
        <AvatarImage src="https://github.com/shadcn.png" alt="Avatar of Duy" />
        <AvatarFallback>Duy</AvatarFallback>
      </Avatar>
      <p className='text-zinc-400 text-[.9rem]'>16 bạn chung</p>
        </div>
      </div>
 
    </div>
    <Button>
    Thêm Bạn Bè


      </Button>
  </div>
  )
}

export default ListSearchFriends
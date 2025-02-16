import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import Header from '@/layouts/components/header/Header'
import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import ListSearchFriends from './component/ListSearchFriends'

function SearchFriends() {
    const  isMobile=false

  return (
    <div className='relative'>
              <Header />
              <div className="h-screen overflow-y-auto bg-black text-white flex flex-col ">
        <div className="w-[100%] mx-auto mt-[3.2rem]  ">
       
          {/*  */}
         <div className='relative'>
         <ResizablePanelGroup direction='horizontal' className='flex-1 flex  h-full overflow-hidden  gap-6'>
         <ResizablePanel defaultSize={20} minSize={isMobile ? 0 : 10} maxSize={40} className="bg-zinc-800 h-[100vh]">

    <div className=' w-[95%] mx-auto '>
        <h3 className=' text-[1.3rem] px-12 py-[1rem]'>Bạn Bè</h3>
        <div>
             <div className="p-2 px-12 rounded bg-zinc-700  hover:bg-zinc-700 cursor-pointer flex gap-[.8rem] items-center">
                            <FaUserFriends size={35} />
                            <span>Bạn Bè</span>
                          </div>
             <div className="p-2 px-12 rounded hover:bg-zinc-700 cursor-pointer flex gap-[.8rem] items-center">
                            <FaUserFriends size={35} />
                            <span>Bạn Bè</span>
                          </div>
             <div className="p-2 px-12 rounded hover:bg-zinc-700 cursor-pointer flex gap-[.8rem] items-center">
                            <FaUserFriends size={35} />
                            <span>Bạn Bè</span>
                          </div>
        </div>
        
    </div>
</ResizablePanel>
<ResizablePanel defaultSize={80} className="mt-[1rem]">
<div className='w-[50rem] mx-auto bg-zinc-700 py-[1rem] px-[1.5rem] mt-[1rem] rounded-lg'>
<ListSearchFriends/>
</div>
<div className='w-[50rem] mx-auto bg-zinc-700 py-[1rem] px-[1.5rem] mt-[1.5rem] rounded-lg'>
<ListSearchFriends/>
</div>

</ResizablePanel>

    </ResizablePanelGroup>
         </div>
        </div>
      </div>
             

    </div>

)
}

export default SearchFriends
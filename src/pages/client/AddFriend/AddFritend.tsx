import { Button } from '@/components/ui/button'
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import React from 'react'
import { IoSchoolSharp } from 'react-icons/io5'
import CreateBlog from '../home/component/CreateBlog'
import Blog from '../home/component/Blog'
import { Link } from 'lucide-react'
import Header from '@/layout/component/header/Header'
import { FaUserFriends } from 'react-icons/fa'
import ItemFriend from './component/ItemFriend'

function AddFriend() {
    const  isMobile=false

  return (
    <div className='relative'>
              <Header />
              <div className="h-screen overflow-y-auto bg-black text-white flex flex-col">
        <div className="w-[100%] mx-auto mt-[3.2rem]  ">
       
          {/*  */}
         <div className='relative'>
         <ResizablePanelGroup direction='horizontal' className='flex-1 flex  h-full overflow-hidden  gap-6'>
         <ResizablePanel defaultSize={20} minSize={isMobile ? 0 : 10} maxSize={40} className="bg-zinc-800 h-[100vh] hidden lg:block">

    <div className=' w-[100%] mx-auto '>
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
<ResizablePanel defaultSize={80} className="m-auto">
<h3 className='pt-8 pb-[1rem] text-[1.3rem] font-bold px-4'>Lời mời kết bạn</h3>
     
<div className="grid ssm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[1rem] overflow-hidden lg:pr-12 px-4">
    
<ItemFriend/>
<ItemFriend/>
<ItemFriend/>
<ItemFriend/>
<ItemFriend/>
<ItemFriend/>
<ItemFriend/>
<ItemFriend/>
<ItemFriend/>
<ItemFriend/>
<ItemFriend/>
</div>

</ResizablePanel>

    </ResizablePanelGroup>
         </div>
        </div>
      </div>
             

    </div>

)
}

export default AddFriend
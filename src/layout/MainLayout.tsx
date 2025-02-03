import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './component/header/Header'
import LeftLayout from './component/LeftLayout'
import RightLayout from './component/RightLayout'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import CreateBlog from '@/pages/client/home/component/CreateBlog'
import Blog from '@/pages/client/home/component/Blog'

function MainLayout() {
    const isMobile=false
    const contacts = [
      { id: 1, name: 'Phạm Duy', avatar: 'https://github.com/shadcn.png' },


    ];
    
  return (
    <div className='relative'>
        <Header/>
        <div className='h-screen overflow-y-auto bg-black text-white flex flex-col '>

<div className='w-[95%] mx-auto mt-[5rem]'>
<ResizablePanelGroup direction='horizontal' className='flex-1 flex  h-full overflow-hidden p-2 '>

<ResizablePanel defaultSize={20} minSize={isMobile ? 0 : 10} maxSize={30} className='hidden lg:block'>
  
  <LeftLayout/>
</ResizablePanel>
<ResizablePanel defaultSize={isMobile ? 80 : 60} className="w-full ">
<Outlet/>
    
</ResizablePanel>
<ResizablePanel defaultSize={20} minSize={ 0 } maxSize={25} collapsedSize={0} className='hidden lg:block'>
<RightLayout/>
</ResizablePanel>
</ResizablePanelGroup>
</div>

</div>
    </div>

  )
}

export default MainLayout
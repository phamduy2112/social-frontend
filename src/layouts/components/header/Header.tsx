import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import React, { useEffect, useState } from 'react'
import HeaderMiddle from './HeaderMiddle';
import { FiHome } from 'react-icons/fi';
import { FaBars, FaBell, FaFacebookMessenger, FaGamepad, FaUserFriends } from 'react-icons/fa';
import { MdOndemandVideo } from 'react-icons/md';
import { PiDotsNineBold } from 'react-icons/pi';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { IoIosSearch } from 'react-icons/io';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';
import SearchWithInput from './component/SearchInput';

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isFixed,setIsFixed] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  console.log(isMobile);
  
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsFixed(window.scrollY > 50);
    }
		checkMobile();
		window.addEventListener("resize", checkMobile);
		window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    }
	}, []);


  return (
    <div className={`w-full h-[3.6rem] bg-zinc-800 border-b border-zinc-500 transition-all duration-300 ${isFixed ? 'fixed top-0 left-0 z-30 shadow-lg' : ''}`} style={{ top: isFixed ? '0' : `${Math.max(0, 50 - scrollY)}px`, transition: 'top 0.3s ease' }}>

      <div className='flex justify-between items-center h-full w-[95%] m-auto'>

      <ResizablePanelGroup direction='horizontal' className='flex-1 flex h-full overflow-hidden p-2'>

<ResizablePanel defaultSize={20} minSize={isMobile ? 0 : 10} maxSize={30}>
<div className='text-[1.2rem] font-bold flex gap-[1rem] items-center flex-none'>
          <a href='#' className='text-white hover:text-zinc-400 duration-300'>DuyBooks</a>
          {isMobile ? <SearchWithInput /> :     <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Tìm kiếm theo tên duybooks"  height={10}/>
          </div>} 
      
        </div>
 
</ResizablePanel>
{
  isMobile ? '' : <ResizablePanel defaultSize={isMobile ? 80 : 60} className="w-full">
  <div className="flex items-center justify-center w-full">
    <div className='flex justify-evenly items-center gap-4 w-full'>
      <div className="p-2 rounded hover:bg-zinc-700 cursor-pointer">
        <FiHome size={20} />
      </div>
      <div className="p-2 rounded hover:bg-zinc-700 cursor-pointer">
        <FaUserFriends size={20} />
      </div>
      <div className="p-2 rounded hover:bg-zinc-700 cursor-pointer">
        <MdOndemandVideo size={20} />
      </div>
      <div className="p-2 rounded hover:bg-zinc-700 cursor-pointer">
        <FaGamepad size={20} />
      </div>
    </div>
  </div>
</ResizablePanel>
}

<ResizablePanel defaultSize={20} minSize={0} maxSize={25} collapsedSize={0} className="w-full">
{isMobile ?<>
  <div className="flex items-center justify-end gap-4 pr-4 h-full">
  <Sheet>
  <SheetTrigger><FaBars /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetDescription>
        <Link to={""}>Trang chủ</Link>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

        {/* Dropdown Menu */}
        <div className="p-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="w-8 h-8 cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-zinc-800 text-white">
              <DropdownMenuLabel className="text-zinc-400">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-zinc-600" />
              <DropdownMenuItem className="hover:bg-zinc-700 cursor-pointer">Profile</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-zinc-700 cursor-pointer">Billing</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-zinc-700 cursor-pointer">Team</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-zinc-700 cursor-pointer">Đăng xuất</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
</> :   
 <div className="flex items-center justify-end gap-4 pr-4 h-full">
        {/* Icon 1: Dots */}
        
        <div className="p-2 rounded hover:bg-zinc-700 cursor-pointer">
          <PiDotsNineBold size={20} />
        </div>

        {/* Icon 2: Bell */}
        <div className="p-2 rounded hover:bg-zinc-700 cursor-pointer">
          <FaBell size={20} />
        </div>

        {/* Icon 3: Messenger */}
        <div className="p-2 rounded hover:bg-zinc-700 cursor-pointer">
          <FaFacebookMessenger size={20} />
        </div>

        {/* Dropdown Menu */}
        <div className="p-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="w-8 h-8 cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-zinc-800 text-white">
              <DropdownMenuLabel className="text-zinc-400">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-zinc-600" />
              <DropdownMenuItem className="hover:bg-zinc-700 cursor-pointer">Profile</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-zinc-700 cursor-pointer">Billing</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-zinc-700 cursor-pointer">Team</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-zinc-700 cursor-pointer">Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      }
  
    </ResizablePanel>
</ResizablePanelGroup>
        {/* Logo Section */}
    

        {/* Search/Subscribe Section */}
      
        {/* Right Section */}
      
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default Header;
import { Button } from '@/components/ui/button'
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Link } from 'lucide-react'
import React from 'react'
import { IoSchoolSharp } from 'react-icons/io5'
import CreateBlog from '../../home/component/CreateBlog'
import Blog from '../../home/component/Blog'

function MyProfile() {
    const isMobile=true
  return (
    <div>
         <ResizablePanelGroup direction='horizontal' className=' flex   h-full overflow-hidden  gap-6'>
         <ResizablePanel defaultSize={40} minSize={isMobile ? 0 : 10} maxSize={40} className="">
    <div className="py-[1rem] px-[1.5rem] bg-zinc-800">
        <div>
            <h5 className="text-[1.3rem] font-semibold mb-[1rem]">Giới thiệu            </h5>
            <Button className="w-[100%] mb-[.5rem]">Thêm tiểu sử</Button>
        </div>
        <div className="mt-[1rem]">
            <div className="flex gap-2 items-center text-[1rem] font-light mt-[1rem]" >
                <IoSchoolSharp className="text-[1.5rem]"/>
                Học tại trường Trung Mỹ Tay
            </div>
            <div className="flex gap-2 items-center text-[1rem] font-light mt-[1rem]" >
                <IoSchoolSharp className="text-[1.5rem]"/>
                Học tại trường Trung Mỹ Tay
            </div>
            <Button className="w-[100%] mb-[.5rem] mt-[1rem]">Chỉnh sửa chi tiết</Button>

        </div>
    </div>
    <div className="py-[1rem] px-[1.5rem] bg-zinc-800 mt-[2rem]">
    <h5 className="text-[1.3rem] font-semibold mb-[1rem]">Hình ảnh            </h5>

       <div className="grid grid-cols-3 gap-[1rem]">
        <div>
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGeatEgvWtBYCjbbPhBzX0prI3zkXIX9tKsjfORchf20l_1P1Id8W-pk5P0pmXWdC2vdARhLEHYtp32Fy4DdxD8&_nc_ohc=9XAgUkL-1-UQ7kNvgErRuFX&_nc_oc=Adigv0AfAHKO2ji7CyUHhA3lBUZdr6a0mwR8GdYldv8hYHNzOq37a9_PPjNZuC4cr3Kw8uYhcdGKiIS-WMS8oSUW&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AS86BIxf-WqOHvRm0Kv9Nsx&oh=00_AYDhvboA8m_VpycVju3lpLFYQIbSLl3lt-QK8v0EbiCd1g&oe=6792BF34" alt="" />
        </div>
        <div>
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGeatEgvWtBYCjbbPhBzX0prI3zkXIX9tKsjfORchf20l_1P1Id8W-pk5P0pmXWdC2vdARhLEHYtp32Fy4DdxD8&_nc_ohc=9XAgUkL-1-UQ7kNvgErRuFX&_nc_oc=Adigv0AfAHKO2ji7CyUHhA3lBUZdr6a0mwR8GdYldv8hYHNzOq37a9_PPjNZuC4cr3Kw8uYhcdGKiIS-WMS8oSUW&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AS86BIxf-WqOHvRm0Kv9Nsx&oh=00_AYDhvboA8m_VpycVju3lpLFYQIbSLl3lt-QK8v0EbiCd1g&oe=6792BF34" alt="" />
        </div>
        <div>
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGeatEgvWtBYCjbbPhBzX0prI3zkXIX9tKsjfORchf20l_1P1Id8W-pk5P0pmXWdC2vdARhLEHYtp32Fy4DdxD8&_nc_ohc=9XAgUkL-1-UQ7kNvgErRuFX&_nc_oc=Adigv0AfAHKO2ji7CyUHhA3lBUZdr6a0mwR8GdYldv8hYHNzOq37a9_PPjNZuC4cr3Kw8uYhcdGKiIS-WMS8oSUW&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AS86BIxf-WqOHvRm0Kv9Nsx&oh=00_AYDhvboA8m_VpycVju3lpLFYQIbSLl3lt-QK8v0EbiCd1g&oe=6792BF34" alt="" />
        </div>
        <div>
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGeatEgvWtBYCjbbPhBzX0prI3zkXIX9tKsjfORchf20l_1P1Id8W-pk5P0pmXWdC2vdARhLEHYtp32Fy4DdxD8&_nc_ohc=9XAgUkL-1-UQ7kNvgErRuFX&_nc_oc=Adigv0AfAHKO2ji7CyUHhA3lBUZdr6a0mwR8GdYldv8hYHNzOq37a9_PPjNZuC4cr3Kw8uYhcdGKiIS-WMS8oSUW&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AS86BIxf-WqOHvRm0Kv9Nsx&oh=00_AYDhvboA8m_VpycVju3lpLFYQIbSLl3lt-QK8v0EbiCd1g&oe=6792BF34" alt="" />
        </div>
        <div>
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGeatEgvWtBYCjbbPhBzX0prI3zkXIX9tKsjfORchf20l_1P1Id8W-pk5P0pmXWdC2vdARhLEHYtp32Fy4DdxD8&_nc_ohc=9XAgUkL-1-UQ7kNvgErRuFX&_nc_oc=Adigv0AfAHKO2ji7CyUHhA3lBUZdr6a0mwR8GdYldv8hYHNzOq37a9_PPjNZuC4cr3Kw8uYhcdGKiIS-WMS8oSUW&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AS86BIxf-WqOHvRm0Kv9Nsx&oh=00_AYDhvboA8m_VpycVju3lpLFYQIbSLl3lt-QK8v0EbiCd1g&oe=6792BF34" alt="" />
        </div>
        <div>
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGeatEgvWtBYCjbbPhBzX0prI3zkXIX9tKsjfORchf20l_1P1Id8W-pk5P0pmXWdC2vdARhLEHYtp32Fy4DdxD8&_nc_ohc=9XAgUkL-1-UQ7kNvgErRuFX&_nc_oc=Adigv0AfAHKO2ji7CyUHhA3lBUZdr6a0mwR8GdYldv8hYHNzOq37a9_PPjNZuC4cr3Kw8uYhcdGKiIS-WMS8oSUW&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AS86BIxf-WqOHvRm0Kv9Nsx&oh=00_AYDhvboA8m_VpycVju3lpLFYQIbSLl3lt-QK8v0EbiCd1g&oe=6792BF34" alt="" />
        </div>
        <div>
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGeatEgvWtBYCjbbPhBzX0prI3zkXIX9tKsjfORchf20l_1P1Id8W-pk5P0pmXWdC2vdARhLEHYtp32Fy4DdxD8&_nc_ohc=9XAgUkL-1-UQ7kNvgErRuFX&_nc_oc=Adigv0AfAHKO2ji7CyUHhA3lBUZdr6a0mwR8GdYldv8hYHNzOq37a9_PPjNZuC4cr3Kw8uYhcdGKiIS-WMS8oSUW&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AS86BIxf-WqOHvRm0Kv9Nsx&oh=00_AYDhvboA8m_VpycVju3lpLFYQIbSLl3lt-QK8v0EbiCd1g&oe=6792BF34" alt="" />
        </div>
        <div>
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGeatEgvWtBYCjbbPhBzX0prI3zkXIX9tKsjfORchf20l_1P1Id8W-pk5P0pmXWdC2vdARhLEHYtp32Fy4DdxD8&_nc_ohc=9XAgUkL-1-UQ7kNvgErRuFX&_nc_oc=Adigv0AfAHKO2ji7CyUHhA3lBUZdr6a0mwR8GdYldv8hYHNzOq37a9_PPjNZuC4cr3Kw8uYhcdGKiIS-WMS8oSUW&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AS86BIxf-WqOHvRm0Kv9Nsx&oh=00_AYDhvboA8m_VpycVju3lpLFYQIbSLl3lt-QK8v0EbiCd1g&oe=6792BF34" alt="" />
        </div>
        <div>
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGeatEgvWtBYCjbbPhBzX0prI3zkXIX9tKsjfORchf20l_1P1Id8W-pk5P0pmXWdC2vdARhLEHYtp32Fy4DdxD8&_nc_ohc=9XAgUkL-1-UQ7kNvgErRuFX&_nc_oc=Adigv0AfAHKO2ji7CyUHhA3lBUZdr6a0mwR8GdYldv8hYHNzOq37a9_PPjNZuC4cr3Kw8uYhcdGKiIS-WMS8oSUW&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AS86BIxf-WqOHvRm0Kv9Nsx&oh=00_AYDhvboA8m_VpycVju3lpLFYQIbSLl3lt-QK8v0EbiCd1g&oe=6792BF34" alt="" />
        </div>
       </div>
    </div>
    <div className="py-[1rem] px-[1.5rem] bg-zinc-800 mt-[2rem]">
    <div className="flex justify-between items-center">
        <div>
        <h5 className="text-[1.3rem] font-semibold ">Bạn bè            </h5>
        <p className="mb-[1rem] mt-[.2rem] text-[.9rem] text-zinc-400">145 người bạn</p>
        </div>
        <Link to={""} className="font-extralight">Xem tất cả bạn bè</Link>

    </div>
       <div className="grid grid-cols-3 gap-[.5rem]">
        <div>
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGeatEgvWtBYCjbbPhBzX0prI3zkXIX9tKsjfORchf20l_1P1Id8W-pk5P0pmXWdC2vdARhLEHYtp32Fy4DdxD8&_nc_ohc=9XAgUkL-1-UQ7kNvgErRuFX&_nc_oc=Adigv0AfAHKO2ji7CyUHhA3lBUZdr6a0mwR8GdYldv8hYHNzOq37a9_PPjNZuC4cr3Kw8uYhcdGKiIS-WMS8oSUW&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AS86BIxf-WqOHvRm0Kv9Nsx&oh=00_AYDhvboA8m_VpycVju3lpLFYQIbSLl3lt-QK8v0EbiCd1g&oe=6792BF34" alt="" />
            <h5 className="text-center mt-[.2rem] text-[1rem]">Hải vinh</h5>
        </div>
        <div>
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGeatEgvWtBYCjbbPhBzX0prI3zkXIX9tKsjfORchf20l_1P1Id8W-pk5P0pmXWdC2vdARhLEHYtp32Fy4DdxD8&_nc_ohc=9XAgUkL-1-UQ7kNvgErRuFX&_nc_oc=Adigv0AfAHKO2ji7CyUHhA3lBUZdr6a0mwR8GdYldv8hYHNzOq37a9_PPjNZuC4cr3Kw8uYhcdGKiIS-WMS8oSUW&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AS86BIxf-WqOHvRm0Kv9Nsx&oh=00_AYDhvboA8m_VpycVju3lpLFYQIbSLl3lt-QK8v0EbiCd1g&oe=6792BF34" alt="" />
            <h5 className="text-center mt-[.2rem] text-[1rem]">Hải vinh</h5>
        </div>
        <div>
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGeatEgvWtBYCjbbPhBzX0prI3zkXIX9tKsjfORchf20l_1P1Id8W-pk5P0pmXWdC2vdARhLEHYtp32Fy4DdxD8&_nc_ohc=9XAgUkL-1-UQ7kNvgErRuFX&_nc_oc=Adigv0AfAHKO2ji7CyUHhA3lBUZdr6a0mwR8GdYldv8hYHNzOq37a9_PPjNZuC4cr3Kw8uYhcdGKiIS-WMS8oSUW&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AS86BIxf-WqOHvRm0Kv9Nsx&oh=00_AYDhvboA8m_VpycVju3lpLFYQIbSLl3lt-QK8v0EbiCd1g&oe=6792BF34" alt="" />
            <h5 className="text-center mt-[.2rem] text-[1rem]">Hải vinh</h5>
        </div>
        <div>
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGeatEgvWtBYCjbbPhBzX0prI3zkXIX9tKsjfORchf20l_1P1Id8W-pk5P0pmXWdC2vdARhLEHYtp32Fy4DdxD8&_nc_ohc=9XAgUkL-1-UQ7kNvgErRuFX&_nc_oc=Adigv0AfAHKO2ji7CyUHhA3lBUZdr6a0mwR8GdYldv8hYHNzOq37a9_PPjNZuC4cr3Kw8uYhcdGKiIS-WMS8oSUW&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AS86BIxf-WqOHvRm0Kv9Nsx&oh=00_AYDhvboA8m_VpycVju3lpLFYQIbSLl3lt-QK8v0EbiCd1g&oe=6792BF34" alt="" />
            <h5 className="text-center mt-[.2rem] text-[1rem]">Hải vinh</h5>
        </div>
        <div>
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGeatEgvWtBYCjbbPhBzX0prI3zkXIX9tKsjfORchf20l_1P1Id8W-pk5P0pmXWdC2vdARhLEHYtp32Fy4DdxD8&_nc_ohc=9XAgUkL-1-UQ7kNvgErRuFX&_nc_oc=Adigv0AfAHKO2ji7CyUHhA3lBUZdr6a0mwR8GdYldv8hYHNzOq37a9_PPjNZuC4cr3Kw8uYhcdGKiIS-WMS8oSUW&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AS86BIxf-WqOHvRm0Kv9Nsx&oh=00_AYDhvboA8m_VpycVju3lpLFYQIbSLl3lt-QK8v0EbiCd1g&oe=6792BF34" alt="" />
            <h5 className="text-center mt-[.2rem] text-[1rem]">Hải vinh</h5>
        </div>
        <div>
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGeatEgvWtBYCjbbPhBzX0prI3zkXIX9tKsjfORchf20l_1P1Id8W-pk5P0pmXWdC2vdARhLEHYtp32Fy4DdxD8&_nc_ohc=9XAgUkL-1-UQ7kNvgErRuFX&_nc_oc=Adigv0AfAHKO2ji7CyUHhA3lBUZdr6a0mwR8GdYldv8hYHNzOq37a9_PPjNZuC4cr3Kw8uYhcdGKiIS-WMS8oSUW&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AS86BIxf-WqOHvRm0Kv9Nsx&oh=00_AYDhvboA8m_VpycVju3lpLFYQIbSLl3lt-QK8v0EbiCd1g&oe=6792BF34" alt="" />
            <h5 className="text-center mt-[.2rem] text-[1rem]">Hải vinh</h5>
        </div>
        <div>
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGeatEgvWtBYCjbbPhBzX0prI3zkXIX9tKsjfORchf20l_1P1Id8W-pk5P0pmXWdC2vdARhLEHYtp32Fy4DdxD8&_nc_ohc=9XAgUkL-1-UQ7kNvgErRuFX&_nc_oc=Adigv0AfAHKO2ji7CyUHhA3lBUZdr6a0mwR8GdYldv8hYHNzOq37a9_PPjNZuC4cr3Kw8uYhcdGKiIS-WMS8oSUW&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AS86BIxf-WqOHvRm0Kv9Nsx&oh=00_AYDhvboA8m_VpycVju3lpLFYQIbSLl3lt-QK8v0EbiCd1g&oe=6792BF34" alt="" />
            <h5 className="text-center mt-[.2rem] text-[1rem]">Hải vinh</h5>
        </div>
        <div>
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGeatEgvWtBYCjbbPhBzX0prI3zkXIX9tKsjfORchf20l_1P1Id8W-pk5P0pmXWdC2vdARhLEHYtp32Fy4DdxD8&_nc_ohc=9XAgUkL-1-UQ7kNvgErRuFX&_nc_oc=Adigv0AfAHKO2ji7CyUHhA3lBUZdr6a0mwR8GdYldv8hYHNzOq37a9_PPjNZuC4cr3Kw8uYhcdGKiIS-WMS8oSUW&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AS86BIxf-WqOHvRm0Kv9Nsx&oh=00_AYDhvboA8m_VpycVju3lpLFYQIbSLl3lt-QK8v0EbiCd1g&oe=6792BF34" alt="" />
            <h5 className="text-center mt-[.2rem] text-[1rem]">Hải vinh</h5>
        </div>
        <div>
            <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/344545748_790878529303490_7633109599983804039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGeatEgvWtBYCjbbPhBzX0prI3zkXIX9tKsjfORchf20l_1P1Id8W-pk5P0pmXWdC2vdARhLEHYtp32Fy4DdxD8&_nc_ohc=9XAgUkL-1-UQ7kNvgErRuFX&_nc_oc=Adigv0AfAHKO2ji7CyUHhA3lBUZdr6a0mwR8GdYldv8hYHNzOq37a9_PPjNZuC4cr3Kw8uYhcdGKiIS-WMS8oSUW&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AS86BIxf-WqOHvRm0Kv9Nsx&oh=00_AYDhvboA8m_VpycVju3lpLFYQIbSLl3lt-QK8v0EbiCd1g&oe=6792BF34" alt="" />
            <h5 className="text-center mt-[.2rem] text-[1rem]">Hải vinh</h5>
        </div>
       
       </div>
    </div>

</ResizablePanel>
<ResizablePanel defaultSize={60} className="w-full ">
<div className=" items-center w-[full] m-auto bg-zinc-800 py-[1rem] px-[1.5rem] ">
         <CreateBlog/>
   
        </div>
        <div className="items-center w-[full] m-auto bg-zinc-800 pt-[1rem] mt-[1rem] ">
        <Blog/>

   
        </div>
</ResizablePanel>

    </ResizablePanelGroup>
         </div>
  )
}

export default MyProfile
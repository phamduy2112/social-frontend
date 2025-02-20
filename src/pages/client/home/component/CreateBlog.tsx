import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
import { FaLock } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import { Navigation, Pagination } from 'swiper/modules'
import ModalUserPrivate from '@/components/modal/ModalUserPrivate'

function CreateBlog() {
  const [images, setImages] = useState<string[]>([]) // Lưu danh sách ảnh
  const [title, setTitle] = useState('')
  const [privacy, setPrivacy] = useState('private')

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files) // Lấy danh sách file
      const imageUrls = files.map(file => URL.createObjectURL(file)) // Tạo URL cho ảnh
      setImages(prev => [...prev, ...imageUrls]) // Thêm vào danh sách ảnh
    }
  }

  const handleSubmit = () => {
    console.log('Title:', title)
    console.log('Privacy:', privacy)
    console.log('Images:', images)
    // Gửi dữ liệu lên backend tại đây
  }

  return (
    <div className="flex gap-[1rem] border border-transparent pb-4 border-b-zinc-500">
      <div className="w-[50px] rounded-full">
        <Avatar className="w-8 h-8 cursor-pointer rounded-full">
          <AvatarImage src="https://github.com/shadcn.png" alt="asdas" />
          <AvatarFallback>Duy</AvatarFallback>
        </Avatar>
      </div>

      <Dialog>
        <DialogTrigger className="w-full">
          <div className="flex w-full items-center space-x-2">
            <Input type="text" placeholder="Bạn đang nghĩ gì?" className="rounded-full" />
          </div>
        </DialogTrigger>
        <DialogContent className="bg-zinc-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-center pb-2">Tạo bài viết</DialogTitle>
            <div className="my-4 border-t border-gray-300" />
          </DialogHeader>

          <div>
            <div className="flex gap-3">
              <Avatar className="w-12 h-12 cursor-pointer rounded-full">
                <AvatarImage src="https://github.com/shadcn.png" alt="asdas" />
                <AvatarFallback>Duy</AvatarFallback>
              </Avatar>
            <ModalUserPrivate/>
            </div>

            <Textarea
              placeholder="Mời bạn nhập bài viết"
              className="h-[5rem]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <div className="mt-4">
              <label className="block text-sm font-semibold">Chọn ảnh:</label>
              <input
                type="file"
                accept="image/*"
                multiple // Cho phép chọn nhiều ảnh
                onChange={handleImageChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="inline-block mt-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 cursor-pointer transition duration-200"
              >
                Chọn file
              </label>

              {images.length > 0 && (
                <div className="mt-4 rounded-lg overflow-hidden shadow-lg">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-[450px] h-[300px]"
                  >
                    {images.map((img, index) => (
                      <SwiperSlide key={index} className='w-[100%]'>
                        <img src={img} alt={`Uploaded preview ${index}`} className="w-[100%] h-full object-cover" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>
          </div>

          <div className="my-4 border-t border-gray-300" />
          <Button onClick={handleSubmit}>Đăng bài</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CreateBlog

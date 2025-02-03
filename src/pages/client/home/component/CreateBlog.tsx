import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'

function CreateBlog() {
  const [image, setImage] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(URL.createObjectURL(file)) // Hiển thị ảnh ngay khi người dùng chọn
    }
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
            <Input
              type="email"
              placeholder="Tìm kiếm theo tên duybooks"
              className="rounded-full"
              height={10}
            />
          </div>
        </DialogTrigger>
        <DialogContent className='bg-zinc-800 text-white'>
          <DialogHeader>
            <DialogTitle className="text-center pb-2">Tạo bài viết</DialogTitle>

            {/* Đường kẻ ngang */}
            <div className="my-4 border-t border-gray-300" />

          </DialogHeader>

          {/* Body của modal */}
          <div className="">
         <div className='flex gap-3'>
         <div className="rounded-full">
        <Avatar className="w-12 h-12 cursor-pointer rounded-full mb-[1rem]">
          <AvatarImage src="https://github.com/shadcn.png" alt="asdas" />
          <AvatarFallback>Duy</AvatarFallback>
        </Avatar>
      </div>
      <p>Phạm Duy</p>
         </div>

            <Textarea placeholder='Mời bạn nhập bài viết' className='h-[5rem]' />

            {/* Thêm input ảnh */}
            <div className="mt-4">
              <label className="block text-sm font-semibold">Chọn ảnh:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden" // Ẩn input file gốc
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="inline-block mt-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 cursor-pointer transition duration-200"
              >
                Chọn file
              </label>
              {image && (
                <div className="mt-4 h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <img src={image} alt="Uploaded preview" className="w-full h-full object-cover transition-transform duration-200 hover:scale-105" />
                </div>
              )}
            </div>
          </div>

          {/* Đường kẻ ngang giữa Body và Footer */}
          <div className="my-4 border-t border-gray-300" />

          <Button>Đăng bài</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CreateBlog
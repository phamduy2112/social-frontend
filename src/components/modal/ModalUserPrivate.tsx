import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { FaLock } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'

function ModalUserPrivate() {
  return (
    <div><Dialog>
    <DialogTrigger>
        <div>
                        <p>Phạm Duy</p>
                        <div className="flex gap-[.5rem] items-center justify-center bg-zinc-900/90 rounded-sm px-2 py-[.2rem]">
                          <FaLock />
                          <p className="mt-[3px]">Riêng tư</p>
                          <MdArrowDropDown />
                        </div>
                      </div>
    </DialogTrigger>
    <DialogContent className='bg-zinc-800 h-[50vh] overflow-auto text-white p-0 m-0'>
      <DialogHeader>
        <DialogTitle className='text-center pb-3 text-[1.2rem]'>Đối tượng bài viết</DialogTitle>
        <div className="my-4 border-t border-gray-300" />

        <div className='py-1 px-4 '>
        <h4 className='text-[1.1rem]'>
            Ai có thể xem bài viết của bạn?

            </h4>
        <p className='text-[.9rem] my-3'>
        Bài viết của bạn sẽ hiển thị trên Bảng feed, trang cá nhân và trong kết quả tìm kiếm.

        </p>
        <p className='text-[.9rem] mb-3'>
            Tuy đối tượng mặc định là Chỉ mình tôi, nhưng bạn có thể thay đổi đối tượng của riêng bài viết này.
        </p>
        </div>

        
        <div>
      
        <RadioGroup defaultValue="option-one">
  <div className="flex py-1 px-4 items-center space-x-2 justify-between hover:bg-zinc-400">
    <label htmlFor="private">
      <div className='flex gap-2 items-center justify-center'>
        <div className='w-[3.5rem] h-[3.5rem] flex justify-center items-center text-[1.5rem] bg-zinc-900/90 rounded-full px-2 py-[.2rem]'>
          <FaLock />
        </div>
        <div>
          <p className='mt-[6px] text-[1.1rem]'>Chỉ mình tôi</p>
        </div>
      </div>
    </label>
    <RadioGroupItem value="private" id="private" className='border-white ' />
  </div>

  <div className="flex py-1 px-4 items-center space-x-2 justify-between hover:bg-zinc-400">
    <label htmlFor="public">
      <div className='flex gap-2 items-center justify-center'>
        <div className='w-[3.5rem] h-[3.5rem] flex justify-center items-center text-[1.5rem] bg-zinc-900/90 rounded-full px-2 py-[.2rem]'>
          <FaLock />
        </div>
        <div>
          <p className='mt-[6px] text-[1.1rem]'>Công khai</p>
        </div>
      </div>
    </label>
    <RadioGroupItem value="public" id="public" className='border-white ' />
  </div>
</RadioGroup>
        </div>
      </DialogHeader>
    </DialogContent>
  </Dialog></div>
  )
}

export default ModalUserPrivate
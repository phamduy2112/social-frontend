import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { FaGlobeAsia, FaLock } from 'react-icons/fa'
import { MdArrowDropDown } from 'react-icons/md'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { optionsDataUser } from '@/utils/data/DataUser'


function ModalUserPrivate(props) {

  return (
    <div>
      <Dialog>
    <DialogTrigger>
        <div>
                        <p className='text-left'>Phạm Duy</p>
                        <div className="flex gap-2 items-center justify-center bg-zinc-900/90 rounded-sm px-2 py-1 mb-3 text-[.8rem]">
            {props.selectedOption.icon}
            <p>{props.selectedOption.label}</p>
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
      
        <RadioGroup
              value={props.selectedOption.value}
              onValueChange={(value) =>
                props.setSelectedOption(optionsDataUser.find((option) => option.value === value))
              }
            >
              {optionsDataUser.map((option) => (
                <div
                  key={option.value}
                  className="flex py-2 px-4 items-center justify-between hover:bg-zinc-400 cursor-pointer"
                >
                  <label htmlFor={option.value} className="flex gap-2 items-center">
                    <div className="w-14 h-14 flex justify-center items-center text-xl bg-zinc-900/90 rounded-full">
                      {option.icon}
                    </div>
                    <p className="text-[1.1rem]">{option.label}</p>
                  </label>
                  <RadioGroupItem value={option.value} id={option.value} className="border-white" />
                </div>
              ))}
            </RadioGroup>
 
        </div>
      </DialogHeader>
    </DialogContent>
  </Dialog></div>
  )
}

export default ModalUserPrivate
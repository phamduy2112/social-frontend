import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'
import { TableManangeBlog } from './component/TableBlog'

function AdminBlog() {
  return (
    <div>
        <div className="flex gap-[1rem] items-center">
            <h3 className="text-[1.5rem] text-white">Quản lí bình luận</h3>
            <Select>
      <SelectTrigger className="w-[150px] text-white">
        <SelectValue placeholder="Chọn Ngày" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Ngày mới nhất</SelectItem>
          <SelectItem value="banana">Ngày cũ nhất</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        <TableManangeBlog/>
    </div>
  )
}

export default AdminBlog
import React from 'react'
import TableItem from '../Dashboard/component/TableItem'
import { Button } from '@/components/ui/button'
import FormTableUser from './component/FormTableUser'
import { TableUser } from './component/TableUser'

function AdminUser() {
  return (
    <div>
        <div className='flex justify-between items-center'>
        <h3 className='text-white text-[1.5rem]'>Khách hàng</h3>

            <div className='flex items-center gap-[1rem]'>
<FormTableUser/>
            <Button className='text-white bg-red-600 hover:bg-red-500'>Tải PDF</Button>

            </div>
        </div>
        <TableUser/>
        
    </div>
  )
}

export default AdminUser
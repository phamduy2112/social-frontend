import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'

function FormTableUser() {
  return (
    <div><Dialog>
    <DialogTrigger>            <Button className='text-white bg-neutral-600 hover:bg-neutral-500'>Lọc khách hàng</Button>
    </DialogTrigger>
    <DialogContent className='bg-zinc-800'>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog></div>
  )
}

export default FormTableUser
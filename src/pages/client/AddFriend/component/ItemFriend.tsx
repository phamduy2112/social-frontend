import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

function ItemFriend() {
  return (
    <div>
    
<Card className='w-[full] overflow-hidden'>
<CardHeader className='p-0 '>
<div className="w-full h-[240px] overflow-hidden">
  <img
    className="w-full h-full object-cover "
    src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/473970633_3696832523866904_758678437992717420_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=GJerZuFYeuwQ7kNvgHc0Pcj&_nc_oc=Adiw3d671GZF_vSYPDBS746xYRpGQ8ecKNBv5VQ8-feBON3LGpyhpm5poV2TzSKsyvBrDcQHRjOc8554CgVLB-0X&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=Au3uCFgMD6yKfRLYLyVm9ck&oh=00_AYANVssALbEG8I9Dh4DD7kl1JfZwf1z0HcxxrQaSoln5IA&oe=679325D6"
    alt=""
  />
</div>

</CardHeader>
<CardContent className='p-3'>
    <CardTitle className='text-lg font-bold'>Friend 1</CardTitle>

</CardContent>
  <CardFooter className='flex flex-col gap-2 w-[100%] p-3'>
  <Button className="w-full bg-blue-700 hover:bg-blue-600 text-white">Xác nhận</Button>
  <Button className="w-full bg-zinc-600 hover:bg-zinc-500 text-white">Xóa</Button>
  </CardFooter>
</Card>
    </div>
  )
}

export default ItemFriend
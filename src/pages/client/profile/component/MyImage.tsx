import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import Blog from '../../home/component/Blog'
import { Button } from '@/components/ui/button'
import { FaPen } from 'react-icons/fa'
import Album from './MyAlbum'

function MyPhotos() {
  const image=[
    {
    image:'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54',
  
  },
    {
    image:'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54',
  
  },
    {
    image:'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54',
  
  },
    {
    image:'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54',
  
  },
    {
    image:'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54',
  
  },
    {
    image:'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54',
  
  },
    {
    image:'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54',
  
  },
    {
    image:'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54',
  
  },
    {
    image:'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54',
  
  },
    {
    image:'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54',
  
  },
]


  return (
    <div className="bg-zinc-700/60 w-[100%] py-[1rem] px-4">
        <div className="flex justify-between">
        <div>
        <h3 className="text-white text-[1.3rem] py-[.5rem] px-[1.2rem]">
         Ảnh
        </h3>
        </div>
        <Button>
            <FaPen />
            Thêm hình ảnh
</Button>   
        </div>
        <div className='flex gap-[1rem] mt-[1rem]'>
          <h5>Ảnh của bạn</h5>
          <h5>Album</h5>
        </div>
                <div className="grid grid-cols-6 mt-[1rem] gap-[1rem]">
            
                {image.map((item,index)=>{
                  return(
                    <Dialog>
      <DialogTrigger className="w-[100%]">
      <div className="rounded-md overflow-hidden w-[200xp]">
                    <img src={item.image} className='w-[100%]'/>
                    </div>
      </DialogTrigger>
      <DialogContent className="max-w-[800px] w-full h-[90vh] bg-zinc-800 text-white overflow-y-auto"> {/* Thay đổi chiều rộng ở đây */}
        <DialogHeader>
          <DialogTitle className='text-center pb-3 text-[1.2rem]'>Bài viết của Duy</DialogTitle>

          {/* Đường kẻ ngang */}
          <div className="my-4 border-t border-gray-300" />
        </DialogHeader>

        {/* Body của modal */}
   
        {/* Đường kẻ ngang giữa Body và Footer */}
      </DialogContent>
    </Dialog>
            
                  )
                })}
           
</div>
<Album />

    </div>
  )
}

export default MyPhotos
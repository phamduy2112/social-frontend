import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

const Album = () => {
  const [albums, setAlbums] = useState([
    {
      title: 'Album 1',
      cover: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54',
    },
    {
      title: 'Album 1',
      cover: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54',
    },
    {
      title: 'Album 1',
      cover: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54',
    },
    {
      title: 'Album 1',
      cover: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54',
    },
    {
      title: 'Album 1',
      cover: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54',
    },
    {
      title: 'Album 1',
      cover: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54',
    },
    {
      title: 'Album 1',
      cover: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54',
    },
    {
      title: 'Album 1',
      cover: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=2KYKHuMkaXsQ7kNvgGPE7DL&_nc_oc=AdglR8n15cNTeEyruPz-XBpBiAN1F3t0JQCef_uN_2-A2rSe0rpC26HEhupZTRGH5ZQSW2H77_n95gtfx0Q-k-yY&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AWtcAfwyoSXWCOb4cQ4go6e&oh=00_AYD1BunQzZewXisdWF1vRv1bh86fzAR0M5YQMDVkNc9XFg&oe=67941E54',
    },

  ]);

  const [newAlbumTitle, setNewAlbumTitle] = useState('');
  const [newAlbumCover, setNewAlbumCover] = useState('');

  const handleAddAlbum = (e) => {
    e.preventDefault();
    if (newAlbumTitle && newAlbumCover) {
      const newAlbum = {
        title: newAlbumTitle,
        cover: newAlbumCover,
      };
      setAlbums((prevAlbums) => [...prevAlbums, newAlbum]);
      setNewAlbumTitle('');
      setNewAlbumCover('');
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-white text-[1.3rem] py-[.5rem] px-[1.2rem]">Album của bạn</h3>
      
      {/* Form để thêm album mới */}
      

      <div className="grid grid-cols-5 gap-[1rem]">
        <div className=' border-dotted border-[2px] flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center gap-[.1rem] items-center'>
            <FiPlusCircle className='text-4xl' /> {/* Sử dụng class để điều chỉnh kích thước */}
            <h4>Thêm album</h4>
                <p className='text-[.9rem] text-zinc-400'>Thêm album chỉ sau ít phút</p>
            </div>
        </div>
        {albums.map((album, index) => (
  <div key={index} className="rounded-md overflow-hidden relative">
    <div className="rounded-md overflow-hidden w-[100%] relative">
      <img src={album.cover} className='w-[100%]' alt={`Album ${album.title}`} />
    </div>
    <h5 className="text-center text-white mt-2 absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
      {album.title}
    </h5>
  </div>
))}
      </div>
    </div>
  );
};

export default Album;
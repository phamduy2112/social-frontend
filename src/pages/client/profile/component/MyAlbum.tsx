import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

const Album = () => {
  const [albums, setAlbums] = useState([
    {
      title: 'Album 1',
      cover: 'https://scontent.fhan4-4.fna.fbcdn.net/v/t39.30808-6/480816026_3722212301328926_8576528358840974159_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4tDyM9HFwUMQ7kNvgHwDZHp&_nc_oc=AdiaehlR5IuXlqMiryE0S5NiEBY7QFqJ7W4v9x7ijhsbj3uAa--NK7UENv3zMtFCvmY&_nc_zt=23&_nc_ht=scontent.fhan4-4.fna&_nc_gid=AKFrq_wZYnJsaLslGh0w8yu&oh=00_AYDdjagfUOFHus32p56I5N1saiwFqnj74GaoT6fFwGpYfQ&oe=67C1A619',
    },
    {
      title: 'Album 1',
      cover: 'https://scontent.fhan4-4.fna.fbcdn.net/v/t39.30808-6/480816026_3722212301328926_8576528358840974159_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4tDyM9HFwUMQ7kNvgHwDZHp&_nc_oc=AdiaehlR5IuXlqMiryE0S5NiEBY7QFqJ7W4v9x7ijhsbj3uAa--NK7UENv3zMtFCvmY&_nc_zt=23&_nc_ht=scontent.fhan4-4.fna&_nc_gid=AKFrq_wZYnJsaLslGh0w8yu&oh=00_AYDdjagfUOFHus32p56I5N1saiwFqnj74GaoT6fFwGpYfQ&oe=67C1A619',
    },
    {
      title: 'Album 1',
      cover: 'https://scontent.fhan4-4.fna.fbcdn.net/v/t39.30808-6/480816026_3722212301328926_8576528358840974159_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4tDyM9HFwUMQ7kNvgHwDZHp&_nc_oc=AdiaehlR5IuXlqMiryE0S5NiEBY7QFqJ7W4v9x7ijhsbj3uAa--NK7UENv3zMtFCvmY&_nc_zt=23&_nc_ht=scontent.fhan4-4.fna&_nc_gid=AKFrq_wZYnJsaLslGh0w8yu&oh=00_AYDdjagfUOFHus32p56I5N1saiwFqnj74GaoT6fFwGpYfQ&oe=67C1A619',
    },
    {
      title: 'Album 1',
      cover: 'https://scontent.fhan4-4.fna.fbcdn.net/v/t39.30808-6/480816026_3722212301328926_8576528358840974159_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4tDyM9HFwUMQ7kNvgHwDZHp&_nc_oc=AdiaehlR5IuXlqMiryE0S5NiEBY7QFqJ7W4v9x7ijhsbj3uAa--NK7UENv3zMtFCvmY&_nc_zt=23&_nc_ht=scontent.fhan4-4.fna&_nc_gid=AKFrq_wZYnJsaLslGh0w8yu&oh=00_AYDdjagfUOFHus32p56I5N1saiwFqnj74GaoT6fFwGpYfQ&oe=67C1A619',
    },
    {
      title: 'Album 1',
      cover: 'https://scontent.fhan4-4.fna.fbcdn.net/v/t39.30808-6/480816026_3722212301328926_8576528358840974159_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4tDyM9HFwUMQ7kNvgHwDZHp&_nc_oc=AdiaehlR5IuXlqMiryE0S5NiEBY7QFqJ7W4v9x7ijhsbj3uAa--NK7UENv3zMtFCvmY&_nc_zt=23&_nc_ht=scontent.fhan4-4.fna&_nc_gid=AKFrq_wZYnJsaLslGh0w8yu&oh=00_AYDdjagfUOFHus32p56I5N1saiwFqnj74GaoT6fFwGpYfQ&oe=67C1A619',
    },
    {
      title: 'Album 1',
      cover: 'https://scontent.fhan4-4.fna.fbcdn.net/v/t39.30808-6/480816026_3722212301328926_8576528358840974159_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4tDyM9HFwUMQ7kNvgHwDZHp&_nc_oc=AdiaehlR5IuXlqMiryE0S5NiEBY7QFqJ7W4v9x7ijhsbj3uAa--NK7UENv3zMtFCvmY&_nc_zt=23&_nc_ht=scontent.fhan4-4.fna&_nc_gid=AKFrq_wZYnJsaLslGh0w8yu&oh=00_AYDdjagfUOFHus32p56I5N1saiwFqnj74GaoT6fFwGpYfQ&oe=67C1A619',
    },
    {
      title: 'Album 1',
      cover: 'https://scontent.fhan4-4.fna.fbcdn.net/v/t39.30808-6/480816026_3722212301328926_8576528358840974159_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4tDyM9HFwUMQ7kNvgHwDZHp&_nc_oc=AdiaehlR5IuXlqMiryE0S5NiEBY7QFqJ7W4v9x7ijhsbj3uAa--NK7UENv3zMtFCvmY&_nc_zt=23&_nc_ht=scontent.fhan4-4.fna&_nc_gid=AKFrq_wZYnJsaLslGh0w8yu&oh=00_AYDdjagfUOFHus32p56I5N1saiwFqnj74GaoT6fFwGpYfQ&oe=67C1A619',
    },
    {
      title: 'Album 1',
      cover: 'https://scontent.fhan4-4.fna.fbcdn.net/v/t39.30808-6/480816026_3722212301328926_8576528358840974159_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4tDyM9HFwUMQ7kNvgHwDZHp&_nc_oc=AdiaehlR5IuXlqMiryE0S5NiEBY7QFqJ7W4v9x7ijhsbj3uAa--NK7UENv3zMtFCvmY&_nc_zt=23&_nc_ht=scontent.fhan4-4.fna&_nc_gid=AKFrq_wZYnJsaLslGh0w8yu&oh=00_AYDdjagfUOFHus32p56I5N1saiwFqnj74GaoT6fFwGpYfQ&oe=67C1A619',
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
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FaPen } from 'react-icons/fa';
import Album from './MyAlbum';

function MyPhotos() {
  const [activeTab, setActiveTab] = useState<'photos' | 'album'>('photos');

  const images = [
    { image: 'https://scontent.fhan4-4.fna.fbcdn.net/v/t39.30808-6/480816026_3722212301328926_8576528358840974159_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4tDyM9HFwUMQ7kNvgHwDZHp&_nc_oc=AdiaehlR5IuXlqMiryE0S5NiEBY7QFqJ7W4v9x7ijhsbj3uAa--NK7UENv3zMtFCvmY&_nc_zt=23&_nc_ht=scontent.fhan4-4.fna&_nc_gid=A1Us3CJrXgA106l9zldcy-w&oh=00_AYDLA6qJfCkzVej5W8Rz-oAderKS1X3_XARF0XU0gdDtcA&oe=67C1A619' },
    { image: 'https://scontent.fhan4-4.fna.fbcdn.net/v/t39.30808-6/480816026_3722212301328926_8576528358840974159_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4tDyM9HFwUMQ7kNvgHwDZHp&_nc_oc=AdiaehlR5IuXlqMiryE0S5NiEBY7QFqJ7W4v9x7ijhsbj3uAa--NK7UENv3zMtFCvmY&_nc_zt=23&_nc_ht=scontent.fhan4-4.fna&_nc_gid=A1Us3CJrXgA106l9zldcy-w&oh=00_AYDLA6qJfCkzVej5W8Rz-oAderKS1X3_XARF0XU0gdDtcA&oe=67C1A619' },
    { image: 'https://scontent.fhan4-4.fna.fbcdn.net/v/t39.30808-6/480816026_3722212301328926_8576528358840974159_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4tDyM9HFwUMQ7kNvgHwDZHp&_nc_oc=AdiaehlR5IuXlqMiryE0S5NiEBY7QFqJ7W4v9x7ijhsbj3uAa--NK7UENv3zMtFCvmY&_nc_zt=23&_nc_ht=scontent.fhan4-4.fna&_nc_gid=A1Us3CJrXgA106l9zldcy-w&oh=00_AYDLA6qJfCkzVej5W8Rz-oAderKS1X3_XARF0XU0gdDtcA&oe=67C1A619' },
  ];

  return (
    <div className="p-4 h-[100vh]">
      {/* Tab Menu */}
      <div className="flex space-x-4 mb-4">
        <Button
          variant={activeTab === 'photos' ? 'secondary' : 'default'}
          onClick={() => setActiveTab('photos')}
        >
          Ảnh của bạn
        </Button>
        <Button
          variant={activeTab === 'album' ? 'secondary' : 'default'}
          onClick={() => setActiveTab('album')}
        >
          Album
        </Button>
      </div>

      {/* Nội dung */}
      {activeTab === 'photos' ? (
        <div className="grid grid-cols-6 gap-4">
          {images.map((img, index) => (
            <img key={index} src={img.image} alt={`Ảnh ${index + 1}`} className="w-full rounded-lg" />
          ))}
        </div>
      ) : (
        <Album />
      )}
    </div>
  );
}

export default MyPhotos;

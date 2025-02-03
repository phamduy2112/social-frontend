import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import React from 'react';

const contacts = [
  { id: 1, name: 'Phạm Duy', avatar: 'https://github.com/shadcn.png' },
  { id: 2, name: 'Nguyễn Văn A', avatar: 'https://github.com/shadcn.png'},
  { id: 3, name: 'Trần Thị B', avatar: 'https://github.com/shadcn.png'},
  { id: 4, name: 'Lê Văn C', avatar: 'https://github.com/shadcn.png'},
  { id: 5, name: 'Ngô Thị D', avatar: 'https://github.com/shadcn.png'},
  // Thêm nhiều người liên hệ vào đây
];

function RightLayout() {
  return (
    <div className="w-full h-full">
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-white">Người liên hệ</h4>
      </div>

      {/* Container với cuộn dọc */}
      <div className="h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="p-2 rounded hover:bg-zinc-700 cursor-pointer flex gap-[0.8rem] items-center"
          >
            <Avatar className="w-8 h-8 cursor-pointer">
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-white">{contact.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightLayout;

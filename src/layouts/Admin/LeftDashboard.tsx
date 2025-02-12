// Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Nếu bạn sử dụng React Router

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white">
      <h2 className="text-xl font-bold p-4">Dashboard</h2>
      <ul>
        <li>
          <Link to="/" className="block p-4 hover:bg-gray-700">Home</Link>
        </li>
        <li>
          <Link to="/about" className="block p-4 hover:bg-gray-700">About</Link>
        </li>
        <li>
          <Link to="/contact" className="block p-4 hover:bg-gray-700">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
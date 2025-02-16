import React, { useState, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={inputRef}>
      <button
        onClick={() => setIsVisible((prev) => !prev)}
        className="p-2 text-xl text-gray-600 hover:text-blue-600 focus:outline-none"
      >
        <IoIosSearch />
      </button>
      {isVisible && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-md rounded-md p-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
    </div>
  );
};

export default SearchInput;

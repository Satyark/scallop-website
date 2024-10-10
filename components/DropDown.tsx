"use client";

import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({title}: {title:string}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLInputElement>(null); // Create a ref for the dropdown container

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    // Ensure event.target is a Node (e.g., Element) and dropdownRef.current is not null
    if (dropdownRef.current && event.target instanceof Node && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  
  

  useEffect(() => {
    // Add event listener for clicks outside of the dropdown
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Remove event listener when the component is unmounted
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        type="button"
        className="inline-flex justify-center w-full px-4 py-2 bg-white text-[16px] font-manrope text-[#000000] focus:outline-none"
        id="options-menu"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={toggleDropdown}
      >
        {title}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 2
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

import React, { useState } from 'react';

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden`}>
      {/* Sidebar Overlay */}
      <div
        onClick={toggleSidebar}
        className={`absolute inset-0 bg-black opacity-50 transition-opacity ${isOpen ? 'block' : 'hidden'}`}
      ></div>

      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 flex-shrink-0 w-64 bg-primeColor overflow-y-auto transition-transform transform ease-in-out duration-300">
        {/* Sidebar Content */}
        <div className="flex items-center justify-between p-4">
          {/* Your sidebar header content */}
          {/* <span className="text-white text-2xl font-semibold">Sidebar</span> */}
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">Gaming Arena</span>
  </a>
          <button onClick={toggleSidebar} className="text-gray-500 hover:text-white focus:outline-none">
            {/* Close icon, you can replace it with your own */}
            &#x2715;
          </button>
        </div>

        {/* Your sidebar links */}
        <div className="p-4">
          <a href="#" className="block py-2 px-3 text-white hover:bg-gray-700 flex justify-center">
            Dashboard
          </a>
          <a href="#" className="block py-2 px-3 text-white hover:bg-gray-700 flex justify-center">
            Settings
          </a>
          {/* Add more links as needed */}
        </div>
      </div>
    </div>
  );
}

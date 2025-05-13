import React, { useState } from 'react';
import {
  MdAdd,
  MdChat,
  MdHelp,
  MdHistory,
  MdMenu,
  MdSettings,
} from 'react-icons/md';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`min-h-screen bg-[#f0f4f9] transition-all duration-300 ease-in-out
        ${isOpen ? 'w-72 px-4' : 'w-16 px-2'} pt-6 flex flex-col justify-between`}
      >
        {/* Top Section */}
        <div className="flex flex-col gap-6">
          {/* Logo & Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MdMenu
                className="w-6 h-6 cursor-pointer text-gray-700"
                onClick={toggleSidebar}
              />
              {isOpen && <p className="text-xl font-semibold">GForce</p>}
            </div>
          </div>

          {/* New Chat Button */}
          <div
            className={`inline-flex items-center gap-3 cursor-pointer rounded-xl bg-[#e6eaf5] p-3
              hover:bg-[#dbe2f0] transition-all duration-300 ease-in-out hover:shadow-md
              ${!isOpen && 'justify-center'}`}
          >
            <MdAdd className="w-5 h-5 text-gray-700" />
            {isOpen && <p className="text-lg text-gray-800">New Chat</p>}
          </div>

          {/* Chat Preview */}
          <div
            className={`inline-flex items-center gap-3 cursor-pointer rounded-xl hover:bg-[#e6eaf5] p-3
              transition-all duration-300 ease-in-out hover:shadow-md
              ${!isOpen && 'justify-center'}`}
          >
            <MdChat className="w-5 h-5 text-gray-700" />
            {isOpen && <p className="text-lg text-gray-800">Hello User...</p>}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 pb-6">
          <SidebarItem icon={<MdHelp className="w-5 h-5" />} label="Help" isOpen={isOpen} />
          <SidebarItem icon={<MdHistory className="w-5 h-5" />} label="Activity" isOpen={isOpen} />
          <SidebarItem icon={<MdSettings className="w-5 h-5" />} label="Settings" isOpen={isOpen} />
        </div>
      </div>

      {/* Main content placeholder */}
      {/* <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Main Content</h1>
      </div> */}
    </div>
  );
};

// Sub-component for sidebar items
const SidebarItem = ({ icon, label, isOpen }) => {
  return (
    <div
      className={`flex items-center gap-3 text-gray-700 cursor-pointer hover:bg-[#e6eaf5] p-2 rounded-md
        transition-all duration-300 ease-in-out hover:shadow-sm
        ${!isOpen && 'justify-center'}`}
    >
      {icon}
      {isOpen && <span className="text-sm">{label}</span>}
    </div>
  );
};

export default Sidebar;

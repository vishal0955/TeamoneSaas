import React, { useState, useRef } from 'react';
import { Search, Bell, User, Settings, Activity, CreditCard, HelpCircle, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ toggleSidebar, collapsed }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    console.log("logout clicked");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    navigate('/');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-30 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        {/* Left section - Logo and toggle button */}
        <div className="flex items-center">
          <div className="flex items-center justify-between">
            {collapsed ? (
              <span className="text-indigo-600 font-bold text-2xl">H</span>
            ) : (
              <span className="text-indigo-600 font-bold text-2xl">HRMS</span>
            )}
            <button
              onClick={toggleSidebar}
              className="ml-4 p-1.5 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
            >
              {collapsed ? "→" : "←"}
            </button>
          </div>
        </div>

        {/* Middle section - Search (hidden on mobile) */}
        <div className="hidden md:flex flex-1 mx-4 max-w-md">
          <div className="relative w-full">
            <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 w-full">
              <Search size={16} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search in HRMS"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-sm w-full"
              />
            </div>
          </div>
        </div>

        {/* Right section - Icons and profile */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Mobile search button (hidden on desktop) */}
          <button className="md:hidden text-gray-500 hover:text-gray-700">
            <Search size={20} />
          </button>

          {/* Notification icon */}
          <div className="relative">
            <button className="text-gray-500 hover:text-gray-700">
              <Bell size={20} />
            </button>
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </div>

          {/* Profile dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden border-2 border-gray-200 focus:outline-none"
            >
              <img
                src="https://i.ibb.co/dJ68VsWW/image.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                {/* Profile Info */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-gray-300">
                      <img
                        src="https://i.ibb.co/dJ68VsWW/image.png"
                        alt="Kevin Larry"
                        className="h-full w-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-800">Kevin Larry</h3>
                      <p className="text-sm text-gray-500">warren@example.com</p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="py-1">
                  <a href="#profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <User size={18} className="mr-3 text-gray-500" />
                    <span>My Profile</span>
                  </a>
                  <a href="#settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Settings size={18} className="mr-3 text-gray-500" />
                    <span>Settings</span>
                  </a>
                  <a href="#status" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Activity size={18} className="mr-3 text-gray-500" />
                    <span>Status</span>
                  </a>
                  <a href="#account" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <CreditCard size={18} className="mr-3 text-gray-500" />
                    <span>My Account</span>
                  </a>
                  <a href="#knowledge" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <HelpCircle size={18} className="mr-3 text-gray-500" />
                    <span>Knowledge Base</span>
                  </a>
                </div>

                {/* Logout */}
                <div className="py-1 border-t border-gray-200" onClick={handleLogout}>
                  <a href="#logout" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <LogOut size={18} className="mr-3 text-gray-500" />
                    <span>Logout</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile search bar (shown only on mobile when activated) */}
      {/* You would need to implement the state and toggle for this */}
      {/* <div className="md:hidden px-4 py-2 bg-gray-100">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 rounded-md border border-gray-300"
        />
      </div> */}
    </div>
  );
};

export default Navbar;
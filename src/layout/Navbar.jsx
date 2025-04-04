
// import React, { useState, useRef, useEffect } from 'react';
// import { Search, Grid, Settings, Maximize, Bell, Mail, ChevronLeft, User, Activity, CreditCard, HelpCircle, LogOut, Sun, Moon } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

// const Navbar = ({ toggleSidebar,collapsed}) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const darkMode = useSelector((state) => state.theme.isDarkMode); 

//   const handleLogout = () => {
//     console.log("logout clicked")
//     localStorage.removeItem("userRole");
//     localStorage.removeItem("userEmail");
//     navigate('/');
//   }
  

//   // Close dropdown when clicking outside
//   // useEffect(() => {
//   //   const handleClickOutside = (event) => {
//   //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//   //       setIsDropdownOpen(false);
//   //     }
//   //   };
    
//   //   document.addEventListener('mousedown', handleClickOutside);
//   //   return () => {
//   //     document.removeEventListener('mousedown', handleClickOutside);
//   //   };
//   // }, []);
  
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };
  
// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };
  //  const toggleTheme = () => {
  //   dispatch(toggleTheme());
  
//   return (
//     <>
//     <div className="container top-0 z-50" style={{position:"fixed",width:"100%",padding:"0px"}}>
//       {/* Navbar */}
      
//       <div className={ ` ${darkMode ? dark-mode : bg-white }  border-b border-gray-200 px-4  flex items-center justify-between`}>


//       {/* icon */}

      
//       <div className="h-16 flex-shrink-0 flex items-center justify-between px-4 border-b border-gray-100">
//           {collapsed ? (
//             <span className="text-indigo-600 font-bold text-2xl">H</span>
//           ) : (
//             <span className="text-indigo-600 font-bold text-2xl">HRMS</span>
//           )}
//           <button
//             onClick={toggleSidebar}
//             className="p-1.5 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
//           >
//             {collapsed ? "→" : "←"}
//           </button>
//         </div>
//       {/* icon */}


//         {/* Left section */}
//         <div className='flex '>
//         <div className="flex items-center space-x-3 me-3">
//           {/* <button 
//             onClick={toggleSidebar} 
//             className="text-gray-500 hover:text-gray-700 focus:outline-none"
            
//           >
//             <ChevronLeft size={20} />
//           </button> */}
          
//           <div className="relative">
//             <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 nav-search-btn">
//               <Search size={16} className="text-gray-500 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Search in HRMS"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="bg-transparent border-none outline-none text-sm w-40 md:w-52"
//               />
//               {/* <div className="hidden md:flex text-xs text-gray-500 border-l border-gray-300 pl-2 ml-2">
//                 <span>CTRL</span>
//                 <span className="mx-1">+</span>
//                 <span>/</span>
//               </div> */}
//             </div>
//           </div>
//         </div>
        
//         {/* Right section */}
//         <div className="flex items-center space-x-4">
//           {/* <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
//             <Grid size={20} />
//           </button>
//           <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
//             <Settings size={20} />
//           </button>
//           <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
//             <Maximize size={20} />
//           </button> */}
          
          

//           {/* Notification icons with badges */}
//           <div className="relative">
//             <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
//               <Bell size={20} />
//             </button>
//             <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//               2
//             </span>
//           </div>
          
//           {/* <div className="relative">
//             <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
//               <Mail size={20} />
//             </button>
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//               3
//             </span>
//           </div> */}

            // <button className="px-2 py-1 ml-2" onClick={toggleTheme}>
            //           {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            //         </button>
          
//           {/* Profile avatar with dropdown */}
//           <div className="relative" ref={dropdownRef}>
//             <button 
//               onClick={toggleDropdown}
//               className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden border-2 border-gray-200 focus:outline-none"
//             >
//               <img
//                  src="https://i.ibb.co/dJ68VsWW/image.png"
//                 alt="Profile"
//                 className="h-full w-full object-cover"
//               />
//             </button>
//           </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Profile Dropdown Menu */}
//       {isDropdownOpen && (
//         <div className="absolute right-4 top-11 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
//           {/* Profile Info */}
//           <div className="p-4 border-b border-gray-200">
//             <div className="flex items-center space-x-3">
//               <div className="h-12 w-12 rounded-full bg-gray-300">
//                 <img
//                   src="https://i.ibb.co/dJ68VsWW/image.png"
//                   alt="Kevin Larry"
//                   className="h-full w-full object-cover rounded-full"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-base font-medium text-gray-800">Kevin Larry</h3>
//                 <p className="text-sm text-gray-500">warren@example.com</p>
//               </div>
//             </div>
//           </div>
          
//           {/* Menu Items */}
//           <div className="py-1">
//             <a href="#profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//               <User size={18} className="mr-3 text-gray-500" />
//               <span>My Profile</span>
//             </a>
//             <a href="#settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//               <Settings size={18} className="mr-3 text-gray-500" />
//               <span>Settings</span>
//             </a>
//             <a href="#status" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//               <Activity size={18} className="mr-3 text-gray-500" />
//               <span>Status</span>
//             </a>
//             <a href="#account" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//               <CreditCard size={18} className="mr-3 text-gray-500" />
//               <span>My Account</span>
//             </a>
//             <a href="#knowledge" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//               <HelpCircle size={18} className="mr-3 text-gray-500" />
//               <span>Knowledge Base</span>
//             </a>
//           </div>
          
//           {/* Logout */}
//           <div className="py-1 border-t border-gray-200" onClick={handleLogout}>
//             <a href="#logout" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >
//               <LogOut size={18} className="mr-3 text-gray-500" />
//               <span>Logout</span>
//             </a>
//           </div>
//         </div>
//       )}
      
//       {/* Calendar content would go below the navbar */}
//     </div>
//     </>
//   );};
// }

// export default Navbar;


import React, { useState, useRef, useEffect } from 'react';
import { Search, Grid, Settings, Maximize, Bell, Mail, ChevronLeft, User, Activity, CreditCard, HelpCircle, LogOut, Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/slices/ThemeSlice';

const Navbar = ({ toggleSidebar,collapsed}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const darkMode = useSelector((state) => state.theme.isDarkMode);
   console.log(darkMode)

  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDarkMode = () => {
    console.log("darkmode")
    dispatch(toggleTheme());
  }



  const handleLogout = () => {
    console.log("logout clicked")
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    navigate('/');
  }
  

  // Close dropdown when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsDropdownOpen(false);
  //     }
  //   };
    
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
  
  return (
    <>
    <div className="container top-0 z-30" style={{position:"fixed",width:"100%",padding:"0px"}}>
      {/* Navbar */}
      
      <div className={`${darkMode ? 
        'dark-mode': "bg-white"  } border-b border-gray-200 px-4  flex items-center justify-between` }>


      {/* icon */}

      
      <div className="h-16 flex-shrink-0 flex items-center justify-between px-4 border-b border-gray-100">
          {collapsed ? (
            <span className="text-indigo-600 font-bold text-2xl">H</span>
          ) : (
            <span className="text-indigo-600 font-bold text-2xl">HRMS</span>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
          >
            {collapsed ? "→" : "←"}
          </button>
        </div>
      {/* icon */}


        {/* Left section */}
        <div className='flex '>
        <div className="flex items-center space-x-3 me-3">
          {/* <button 
            onClick={toggleSidebar} 
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            
          >
            <ChevronLeft size={20} />
          </button> */}
          
          <div className="relative">
            <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 nav-search-btn">
              <Search size={16} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search in HRMS"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-sm w-40 md:w-52"
              />
              {/* <div className="hidden md:flex text-xs text-gray-500 border-l border-gray-300 pl-2 ml-2">
                <span>CTRL</span>
                <span className="mx-1">+</span>
                <span>/</span>
              </div> */}
            </div>
          </div>
        </div>
        
        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <Grid size={20} />
          </button>
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <Settings size={20} />
          </button>
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <Maximize size={20} />
          </button> */}
          
          {/* Notification icons with badges */}
          <div className="relative">
          <button className="px-2 py-1 ml-2" onClick={toggleDarkMode}>
                      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <Bell size={20} />
            </button>
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </div>
          
          {/* <div className="relative">
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <Mail size={20} />
            </button>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </div> */}
          
          {/* Profile avatar with dropdown */}
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
          </div>
          </div>
        </div>
      </div>
      
      {/* Profile Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-4 top-11 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
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
            <a href="#logout" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >
              <LogOut size={18} className="mr-3 text-gray-500" />
              <span>Logout</span>
            </a>
          </div>
        </div>
      )}
      
      {/* Calendar content would go below the navbar */}
    </div>
    </>
  );};

export default Navbar;
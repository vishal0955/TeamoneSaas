import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const SuperAdminLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };
  const darkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    // <div className="flex" >
    //     <Sidebar  toggleSidebar={toggleSidebar}  collapsed={isSidebarCollapsed}/>
    //     <div className="w-full">
    //         <Navbar toggleSidebar={toggleSidebar} />
    //         <Outlet />
    //     </div>
    // </div>
    <>
      <div className="main-content-nav">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex">
          <Sidebar
            toggleSidebar={toggleSidebar}
            collapsed={isSidebarCollapsed}
          />
          <div className="flex-1"  style={{overflow:"hidden",paddingTop:"65px"}}>
            <div className={`${darkMode ? "card-dark" : "bg-white" } container h-100 p-0`}>
            <Outlet className={`${darkMode ? "card-dark" : "bg-white" }`}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminLayout;

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const SuperAdminLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

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
            <div className="container">
            <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminLayout;

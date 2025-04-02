import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarCollapsed((prev) => !prev);
    };

    return (
        <div className="flex" >
            <Sidebar  toggleSidebar={toggleSidebar}  collapsed={isSidebarCollapsed}/>
            <div className="flex-1">
                <Navbar toggleSidebar={toggleSidebar} className="" />
                
               
            </div>
                <Outlet />
        </div>
    );
};

export default Layout;

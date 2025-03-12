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
        <div className="layout" style={{ display: "flex" }}>
            <Sidebar  toggleSidebar={toggleSidebar}  collapsed={isSidebarCollapsed}/>
            <div className="main-content" style={{ flex: 1, padding: "20px" }}>
                <Navbar toggleSidebar={toggleSidebar} />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;

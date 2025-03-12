import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="layout" style={{ display: "flex" }}>
            <Sidebar />
            <div className="main-content" style={{ flex: 1, padding: "20px" }}>
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;

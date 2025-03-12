import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("userRole");
        localStorage.removeItem("userEmail");
        navigate("/login");
    };

    return (
        <nav className="bg-black flex justify-end">
            <button className="text-white" onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;

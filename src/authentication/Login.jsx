// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [role, setRole] = useState("");

//     const navigate = useNavigate();

//     // Predefined Credentials for Testing (You can replace this with API call)
//     const predefinedUsers = {
//         admin: { email: "admin@example.com", password: "admin123", role: "admin" },
//         superAdmin: { email: "superadmin@example.com", password: "superadmin123", role: "superAdmin" },
//         client: { email: "client@example.com", password: "client123", role: "client" },
//         manager: { email: "manager@example.com", password: "manager123", role: "manager" },
//         employee: { email: "employee@example.com", password: "employee123", role: "employee" }
//     };

//     // Function to Autofill Credentials
//     const handleRoleSelect = (selectedRole) => {
//         setEmail(predefinedUsers[selectedRole].email);
//         setPassword(predefinedUsers[selectedRole].password);
//         setRole(predefinedUsers[selectedRole].role);
//     };

//     // Function to Handle Login
//     const handleLogin = () => {
//         if (!email || !password || !role) {
//             alert("Please enter credentials or select a role.");
//             return;
//         }

//         localStorage.setItem("userRole", role);
//         localStorage.setItem("userEmail", email);
//         navigate(`/${role}`);
//     };

//     return (
//         <div  style={{ textAlign: "center", marginTop: "50px" }}>
//             <h2>Login</h2>
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 style={{ display: "block", margin: "10px auto", padding: "10px", width: "250px" }}
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 style={{ display: "block", margin: "10px auto", padding: "10px", width: "250px" }}
//             />

//             <button onClick={handleLogin} style={{ padding: "10px 20px", marginTop: "10px" }}>Login</button>

//             <h3>Select Role</h3>
//             <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
//                 <button onClick={() => handleRoleSelect("admin")}>Admin</button>
//                 <button onClick={() => handleRoleSelect("superAdmin")}>SuperAdmin</button>
//                 <button onClick={() => handleRoleSelect("client")}>Client</button>
//                 <button onClick={() => handleRoleSelect("manager")}>Manager</button>
//                 <button onClick={() => handleRoleSelect("employee")}>Employee</button>
//             </div>
//         </div>
//     );
// };

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    // Predefined Credentials for Testing (You can replace this with API call)
    const predefinedUsers = {
        admin: { email: "admin@example.com", password: "admin123", role: "admin" },
        superAdmin: { email: "superadmin@example.com", password: "superadmin123", role: "superadmin" },
        client: { email: "client@example.com", password: "client123", role: "client" },
        manager: { email: "manager@example.com", password: "manager123", role: "manager" },
        employee: { email: "employee@example.com", password: "employee123", role: "employee" }
    };

    // Function to Autofill Credentials
    const handleRoleSelect = (selectedRole) => {
        setEmail(predefinedUsers[selectedRole].email);
        setPassword(predefinedUsers[selectedRole].password);
        setRole(predefinedUsers[selectedRole].role);
    };

    // Function to Handle Login
    const handleLogin = () => {
        if (!email || !password || !role) {
            alert("Please enter credentials or select a role.");
            return;
        }

        localStorage.setItem("userRole", role);
        localStorage.setItem("userEmail", email);
        navigate(`/${role}`);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-[#8D41C1]">Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg mt-4 focus:outline-none focus:ring-2 focus:ring-[#8D41C1]"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#8D41C1]"
                />
                <button 
                    onClick={handleLogin} 
                    className="w-full bg-[#8D41C1] text-white py-2 mt-4 rounded-lg hover:bg-[#762E9B] transition"
                >
                    Login
                </button>

                <h3 className="text-lg font-medium text-center mt-4">Select Role</h3>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {Object.keys(predefinedUsers).map((userRole) => (
                        <button 
                            key={userRole} 
                            onClick={() => handleRoleSelect(userRole)} 
                            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-[#8D41C1] hover:text-white transition"
                        >
                            {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Login;


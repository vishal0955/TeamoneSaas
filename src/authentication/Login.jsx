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
        superAdmin: { email: "superadmin@example.com", password: "superadmin123", role: "superAdmin" },
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
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ display: "block", margin: "10px auto", padding: "10px", width: "250px" }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ display: "block", margin: "10px auto", padding: "10px", width: "250px" }}
            />

            <button onClick={handleLogin} style={{ padding: "10px 20px", marginTop: "10px" }}>Login</button>

            <h3>Select Role</h3>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <button onClick={() => handleRoleSelect("admin")}>Admin</button>
                <button onClick={() => handleRoleSelect("superAdmin")}>SuperAdmin</button>
                <button onClick={() => handleRoleSelect("client")}>Client</button>
                <button onClick={() => handleRoleSelect("manager")}>Manager</button>
                <button onClick={() => handleRoleSelect("employee")}>Employee</button>
            </div>
        </div>
    );
};

export default Login;

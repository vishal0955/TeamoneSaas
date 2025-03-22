import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const determineRole = (email) => {
    if (email === "admin@gmail.com") return "admin";
    if (email === "superadmin@gmail.com") return "superadmin";
    return "client";
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Example role-based credentials (in real app, this would be handled by backend)
    const credentials = {
      admin: { email: "admin@gmail.com", password: "admin123" },
      superadmin: { email: "superadmin@gmail.com", password: "super123" },
      client: { email: "client@gmail.com", password: "client123" },
    };

    const role = determineRole(email);
    const roleCredentials = credentials[role];

    if (
      email === roleCredentials.email &&
      password === roleCredentials.password
    ) {
      // Successful login
      const roleRoutes = {
        admin: "/admin",
        superadmin: "/superadmin",
        client: "/client-dashboard",
      };

      // Store role in localStorage for persistence
      localStorage.setItem("userRole", role);
      localStorage.setItem("userEmail", email);

      // Redirect to role-specific dashboard
      navigate(roleRoutes[role]);
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="auth-container">
      <main className="w-100 mt-5">
        {isLogin ? (
          <div className="login-container bg-light">
            <h4 className="text-center mb-4">Welcome Back</h4>
            <button className="social-login">
              <i className="fab fa-google" />
              Continue with Google
            </button>
            <button className="social-login">
              <i className="fab fa-github" />
              Continue with Facebook
            </button>
            <div className="divider">
              <span>or</span>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember"
                  />
                  <label
                    className="form-check-label text-secondary"
                    htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <a href="#" className="signup-link">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="inv-new-button login-btn w-100"
                >
                Log In
              </button>
              <p className="text-center mb-0 mt-3">
                <span className="text-secondary">Don't have an account?</span>
                <a href="#" className="signup-link ms-1" onClick={toggleForm}>
                  Sign up
                </a>
              </p>
            </form>
          </div>
        ) : (
          <div className="signup-container">
            <h4 className="text-center mb-4">Create Account</h4>
            <button className="social-signup">
              <i className="fab fa-google" />
              Continue with Google
            </button>
            <button className="social-signup">
              <i className="fab fa-github" />
              Continue with Facebook
            </button>
            <div className="divider">
              <span>or</span>
            </div>
            <form>
              <div className="row g-3 mb-3">
                <div className="col-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First name"
                      required
                    />
                    <label htmlFor="firstName">First name</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last name"
                      required
                    />
                    <label htmlFor="lastName">Last name</label>
                  </div>
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="signupEmail"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="signupEmail">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="signupPassword"
                  placeholder="Password"
                  required
                />
                <label htmlFor="signupPassword">Password</label>
                <div className="form-text mt-2">
                  Password must be at least 8 characters long
                </div>
              </div>
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="terms"
                  required
                />
                <label
                  className="form-check-label text-secondary"
                  htmlFor="terms">
                  I agree to the{" "}
                  <a href="#" className="login-link">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="login-link">
                    Privacy Policy
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="inv-new-button mb-3 w-100 text-center"
                >
                Create Account
              </button>
              <p className="text-center mb-0">
                <span className="text-secondary">Already have an account?</span>
                <a href="#" className="signup-link ms-1" onClick={toggleForm}>
                  Sign in
                </a>
              </p>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default Login;

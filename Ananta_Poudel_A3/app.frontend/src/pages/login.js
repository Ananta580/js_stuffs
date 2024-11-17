import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5500/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        onLogin(data.token);
        navigate("/");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr flex justify-center items-center">
      <div className="flex gap-5">
        <div className="w-1/2 flex justify-center">
          <img src="./login.svg" alt="register" className="w-4/5 h-full" />
        </div>
        <div className="w-1/2 flex justify-center">
          <form onSubmit={handleSubmit} className="p-6 rounded-md w-3/4">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            {error && <div className="text-red-500 mb-2">{error}</div>}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full p-2 mb-4 border outline-none focus:ring-2 focus:ring-indigo-700"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 mb-4 border outline-none focus:ring-2 focus:ring-indigo-700"
            />
            <button
              type="submit"
              className="w-full p-2 mt-6 bg-gradient-to-tr from-indigo-800 to-indigo-900 text-white rounded"
            >
              Login
            </button>
            <p className="mt-3">
              Not Registered yet?
              <Link to="/register" className="text-emerald-700 font-semibold">
                {" "}
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

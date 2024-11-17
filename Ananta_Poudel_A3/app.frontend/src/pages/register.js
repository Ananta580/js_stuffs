import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccees] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Username, email, and password are required");
      return;
    }

    const response = await fetch("http://localhost:5500/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, address, phone, password }),
    });
    const data = await response.json();
    if (response.ok) {
      setError("");
      setSuccees(data.message);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setError(data.error || "Registration failed");
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
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            {error && <div className="text-red-500 mb-2">{error}</div>}
            {success && <div className="text-emerald-500 mb-2">{success}</div>}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full p-2 mb-4 border outline-none focus:ring-2 focus:ring-indigo-700"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 mb-4 border outline-none focus:ring-2 focus:ring-indigo-700"
              required
            />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="w-full p-2 mb-4 border outline-none focus:ring-2 focus:ring-indigo-700"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="w-full p-2 mb-4 border outline-none focus:ring-2 focus:ring-indigo-700"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 mb-4 border outline-none focus:ring-2 focus:ring-indigo-700"
              required
            />
            <button
              type="submit"
              className="w-full p-2 mt-6 bg-gradient-to-tr from-indigo-800 to-indigo-900 text-white rounded"
            >
              Register
            </button>
            <p className="mt-3">
              Already have an account ?
              <Link to="/login" className="text-emerald-700 font-semibold">
                {" "}
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

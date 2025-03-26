import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import NavbarLand from "../Components/Navbar";
import Footer from "../Components/Footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to handle login with API integration
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (username && password) {
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("token", data.token);
          navigate("/success");
        } else {
          setError(data.message || "Login failed. Please try again.");
        }
      } catch (err) {
        setError("An error occurred. Please try again later.");
      }
    } else {
      setError("Please enter both username and password.");
    }
  };

  return (
    <>
      <NavbarLand />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 md:p-14 mb-7 sm:mb-2">
        <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl w-full">
          {/* Left Section */} 
          <div className="p-6 md:p-8 md:w-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">Hire top talent in 48 hours with Civilhubs.</h1>
            <p className="mt-2 md:mt-4 text-base md:text-lg">Streamline your recruitment with AI-driven precision. Single solution from fresher to experienced hiring.</p>
            <div className="mt-4 md:mt-6">
              <p className="text-yellow-300 font-semibold text-lg">5 crore+ <span className="text-gray-300 font-normal">Qualified candidates</span></p>
              <p className="text-yellow-300 font-semibold text-lg">7 lakhs+ <span className="text-gray-300 font-normal">Employers use Civilhubs</span></p>
              <p className="text-yellow-300 font-semibold text-lg">900+ <span className="text-gray-300 font-normal">Available cities</span></p>
            </div>  
          </div>
          {/* Right Section */}
          <div className="p-6 md:p-8 bg-gray-50 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Let's get started</h2>
            <p className="text-base md:text-lg text-gray-600 mt-2">Hire top talent faster with Civilhubs</p>
  
            {/* Username and Password Input with API */}
            <form onSubmit={handleLogin} className="mt-4 md:mt-6 space-y-4">
              {error && <div className="text-red-600 text-sm">{error}</div>}
              <div>
                <label className="text-lg text-gray-700 font-medium">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Enter your username"
                  required
                />
              </div>
  
              <div>
                <label className="text-lg text-gray-700 font-medium">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Enter your password"
                  required
                />
              </div>
  
              <Link to={'/freelancehome'}>
                <button
                  type="submit"
                  className="mt-4 bg-[#427aa1] text-white px-6 py-3 rounded-lg w-full transition duration-300 ease-in-out hover:bg-green-700"
                >
                  Login
                </button>
              </Link>
            </form>
  
            <div className="my-4 text-center text-gray-600">OR</div>
  
            {/* Continue with Google and LinkedIn buttons */}
            <div className="flex flex-col space-y-4">

              <button className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-lg py-3 text-gray-700 hover:bg-gray-100 transition duration-300">
                <FcGoogle className="text-2xl mr-2" /> Continue with Google
              </button>
              <button className="flex items-center justify-center w-full bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700 transition duration-300">
                <FaLinkedin className="text-2xl mr-2" /> Continue with LinkedIn

              </button>
            </div>
  
            <div className="my-4 text-center text-gray-600">OR</div>
            <div className="text-center text-gray-600">
              Don't have an account?
              <Link to="/signup" className="p-2 text-teal-500 hover:underline mt-2">
                Sign up
              </Link>
            </div>
            <p className="mt-4 text-xs text-gray-500 text-center">
              By clicking continue, you agree to the Civilhubs {" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of service
              </a>{" "}
              & {" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;






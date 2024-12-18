import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import { login, register } from "../services/authService";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); // New field for signup
  const [profilePicUrl, setProfilePicUrl] = useState(''); // New field for signup
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleAuth = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      if (isLogin) {
        const response = await login(email, password);
        setMessage('Login successful!');
        navigate('/dashboard');
      } else {
        await register(username, email, password);
        setMessage('Registration successful! Please login.');
        setIsLogin(true);
      }
    } catch (error) {
      setMessage(error.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition-all duration-300`}>
      {/* Your header, sidebar, and other sections here... */}
      
      {/* Auth Form */}
      <section className={`form-container ${darkMode ? 'text-white' : 'text-gray-900'} flex-grow flex justify-center items-center`}>
        <form onSubmit={handleAuth} className={`shadow-md p-8 rounded-lg max-w-md w-full ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>{isLogin ? "Login Now" : "Sign Up"}</h3>

          {!isLogin && (
            <>
              <label className={`block mb-2 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                maxLength="50"
                className={`box w-full p-2 border rounded-lg mb-4 ${darkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-700 border-gray-300'}`}
              />
            </>
          )}

          <label className={`block mb-2 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            maxLength="50"
            className={`box w-full p-2 border rounded-lg mb-4 ${darkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-700 border-gray-300'}`}
          />

          <label className={`block mb-2 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            maxLength="20"
            className={`box w-full p-2 border rounded-lg mb-4 ${darkMode ? 'bg-gray-700 text-gray-100 border-gray-600' : 'bg-white text-gray-700 border-gray-300'}`}
          />

          <input 
            type="submit" 
            value={isLogin ? "Login Now" : "Sign Up"} 
            className={`btn bg-green-600 text-white py-2 px-4 rounded-lg w-full ${darkMode ? 'hover:bg-green-500' : 'hover:bg-green-700'}`} 
          />

          {message && (
            <p className={`mt-4 text-center ${message.includes('error') || message.includes('failed') ? 'text-red-500' : 'text-green-500'}`}>
              {message}
            </p>
          )}

          <button 
            type="button" 
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage('');
            }} 
            className="mt-4 text-blue-500 w-full text-center"
          >
            {isLogin ? "Create an account" : "Already have an account? Login"}
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className={`py-4 text-center ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-800 text-white'}`}>
        &copy; Copyright 2024 by <span className="font-bold">Mr.Sumit</span> | All rights reserved!
      </footer>
    </div>
  );
};

export default Auth;

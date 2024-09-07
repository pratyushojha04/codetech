import React, { useState } from 'react';
import { FaBars, FaSearch, FaUser, FaSun, FaTimes, FaHome, FaQuestion, FaGraduationCap, FaChalkboardTeacher, FaHeadset } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <section className="flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <Link to="/home" className="text-4xl font-bold text-gray-900">LearnX</Link>

          {/* Search Form */}
          <form action="search.html" method="post" className="hidden md:flex items-center bg-gray-200 rounded-lg p-3 w-1/2">
            <input
              type="text"
              name="search_box"
              required
              placeholder="Search courses..."
              maxLength="100"
              className="flex-grow bg-transparent text-gray-800 text-lg focus:outline-none"
            />
            <button type="submit" className="text-gray-700 text-xl">
              <FaSearch />
            </button>
          </form>

          {/* Icons for Menu, Search, User, Theme */}
          <div className="flex space-x-4 text-2xl text-gray-700">
            <FaBars onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer" />
            <FaSearch className="cursor-pointer" />
            <FaUser onClick={() => setUserDropdownOpen(!userDropdownOpen)} className="cursor-pointer" />
            <FaSun className="cursor-pointer" />
          </div>

          {/* User Dropdown */}
          {userDropdownOpen && (
            <div className="absolute top-16 right-8 bg-white rounded-lg shadow-lg p-4 text-center">
              <img src="images/pic-1.jpg" alt="Profile" className="w-24 h-24 rounded-full mb-3" />
              <h3 className="text-xl font-semibold text-gray-900">Pratyush ji</h3>
              <p className="text-gray-500">student</p>
              <Link to="profile.html" className="block bg-green-600 text-white py-2 mt-3 rounded-lg">
                View Profile
              </Link>
              <div className="flex space-x-2 justify-center mt-2">
                <Link to="/login" className="bg-orange-500 text-white py-2 px-4 rounded-lg">Login</Link>
                <Link to="/register" className="bg-orange-500 text-white py-2 px-4 rounded-lg">Register</Link>
              </div>
            </div>
          )}
        </section>
      </header>

      {/* Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black opacity-50" onClick={() => setMenuOpen(false)}></div>
          <div className="fixed left-0 top-0 w-80 h-full bg-white shadow-lg z-50 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Menu</h3>
              <FaTimes className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
            </div>

            <div className="text-center py-6">
              <img src="images/pic-1.jpg" alt="Profile" className="w-24 h-24 rounded-full mb-3 mx-auto" />
              <h3 className="text-xl text-gray-900 font-semibold">Pratyush ji</h3>
              <p className="text-gray-500">student</p>
              <Link to="profile.html" className="block bg-green-600 text-white py-2 mt-3 rounded-lg w-3/4 mx-auto">
                View Profile
              </Link>
            </div>

            <nav className="mt-6 space-y-4">
              <Link to="home.html" className="flex items-center px-6 py-3 hover:bg-gray-100">
                <FaHome className="mr-3 text-green-600" />
                <span>Home</span>
              </Link>
              <Link to="about.html" className="flex items-center px-6 py-3 hover:bg-gray-100">
                <FaQuestion className="mr-3 text-green-600" />
                <span>About</span>
              </Link>
              <Link to="courses.html" className="flex items-center px-6 py-3 hover:bg-gray-100">
                <FaGraduationCap className="mr-3 text-green-600" />
                <span>Courses</span>
              </Link>
              <Link to="teachers.html" className="flex items-center px-6 py-3 hover:bg-gray-100">
                <FaChalkboardTeacher className="mr-3 text-green-600" />
                <span>Teachers</span>
              </Link>
              <Link to="contact.html" className="flex items-center px-6 py-3 hover:bg-gray-100">
                <FaHeadset className="mr-3 text-green-600" />
                <span>Contact Us</span>
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Register Form */}
      <section className="form-container flex-grow flex justify-center items-center">
        <form action="" method="post" enctype="multipart/form-data" className="bg-white shadow-md p-8 rounded-lg max-w-md w-full">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Register Now</h3>

          <label className="block mb-2 text-lg text-gray-700">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            maxLength="50"
            className="box w-full p-2 border rounded-lg mb-4 text-gray-700"
          />

          <label className="block mb-2 text-lg text-gray-700">
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            maxLength="50"
            className="box w-full p-2 border rounded-lg mb-4 text-gray-700"
          />

          <label className="block mb-2 text-lg text-gray-700">
            Your Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="pass"
            placeholder="Enter your password"
            required
            maxLength="20"
            className="box w-full p-2 border rounded-lg mb-4 text-gray-700"
          />

          <label className="block mb-2 text-lg text-gray-700">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="c_pass"
            placeholder="Confirm your password"
            required
            maxLength="20"
            className="box w-full p-2 border rounded-lg mb-4 text-gray-700"
          />

          <label className="block mb-2 text-lg text-gray-700">
            Select Profile <span className="text-red-500">*</span>
          </label>
          <input type="file" accept="image/*" required className="box w-full p-2 border rounded-lg mb-4 text-gray-700" />

          <input type="submit" value="Register Now" name="submit" className="btn bg-green-600 text-white py-2 px-4 rounded-lg w-full" />
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        &copy; Copyright 2024 by <span className="font-bold">Mr.sumit</span> | All rights reserved!
      </footer>
    </div>
  );
};

export default Register;

import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch, FaUser, FaSun, FaHome, FaQuestion, FaGraduationCap, FaChalkboardTeacher, FaHeadset } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UpdateProfile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header Section */}
      <header className="bg-white shadow py-4">
        <section className="flex justify-between items-center max-w-6xl mx-auto px-4">
          
          {/* Logo */}
          <Link to="/home" className="text-3xl font-bold text-gray-900">LearnX</Link>

          {/* Search Form */}
          <form action="/search" method="post" className={`hidden md:flex items-center bg-gray-200 rounded-lg p-2 w-1/2 ${searchOpen ? 'block' : 'hidden'}`}>
            <input
              type="text"
              name="search_box"
              required
              placeholder="Search courses..."
              maxLength="100"
              className="flex-grow bg-transparent text-gray-800 text-lg focus:outline-none"
            />
            <button type="submit">
              <FaSearch className="text-gray-700 text-xl" />
            </button>
          </form>

          {/* Icons */}
          <div className="flex space-x-4 text-2xl text-gray-700">
            <FaBars onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer" />
            <FaSearch onClick={() => setSearchOpen(!searchOpen)} className="cursor-pointer" />
            <FaUser onClick={() => setUserDropdownOpen(!userDropdownOpen)} className="cursor-pointer" />
            <FaSun className="cursor-pointer" />
          </div>

          {/* User Dropdown */}
          {userDropdownOpen && (
            <div className="absolute top-16 right-8 bg-white rounded-lg shadow-lg p-4 text-center z-50">
              <img src="images/pic-1.jpg" alt="Profile" className="w-24 h-24 rounded-full mb-3" />
              <h3 className="text-xl text-gray-900 font-semibold">Shaikh Anas</h3>
              <p className="text-gray-500">Student</p>
              <Link to="/profile" className="block bg-green-600 text-white py-2 mt-3 rounded-lg">
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
        <>
          <div className="fixed top-0 left-0 w-80 h-full bg-white shadow-lg z-40">
            <div className="flex justify-between items-center p-4">
              <h2 className="text-2xl font-bold">Menu</h2>
              <FaTimes onClick={() => setMenuOpen(false)} className="text-xl text-gray-700 cursor-pointer" />
            </div>

            <div className="text-center py-6">
              <img src="images/pic-1.jpg" alt="Profile" className="w-24 h-24 rounded-full mb-3 mx-auto" />
              <h3 className="text-xl text-gray-900 font-semibold">Shaikh Anas</h3>
              <p className="text-gray-500">Student</p>
              <Link to="/profile" className="block bg-green-600 text-white py-2 mt-3 rounded-lg w-3/4 mx-auto">
                View Profile
              </Link>
            </div>

            <nav className="mt-6">
              <Link to="/home" className="flex items-center px-6 py-3 hover:bg-gray-100">
                <FaHome className="mr-3 text-green-600" />
                <span>Home</span>
              </Link>
              <Link to="/about" className="flex items-center px-6 py-3 hover:bg-gray-100">
                <FaQuestion className="mr-3 text-green-600" />
                <span>About</span>
              </Link>
              <Link to="/courses" className="flex items-center px-6 py-3 hover:bg-gray-100">
                <FaGraduationCap className="mr-3 text-green-600" />
                <span>Courses</span>
              </Link>
              <Link to="/teachers" className="flex items-center px-6 py-3 hover:bg-gray-100">
                <FaChalkboardTeacher className="mr-3 text-green-600" />
                <span>Teachers</span>
              </Link>
              <Link to="/contact" className="flex items-center px-6 py-3 hover:bg-gray-100">
                <FaHeadset className="mr-3 text-green-600" />
                <span>Contact Us</span>
              </Link>
            </nav>
          </div>

          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={() => setMenuOpen(false)}
          />
        </>
      )}

      {/* Update Profile Section */}
      <section className="py-8 max-w-4xl mx-auto px-4">
        <form action="" method="post" encType="multipart/form-data" className="bg-white shadow-md rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Update Profile</h3>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Update Name</label>
            <input
              type="text"
              name="name"
              placeholder="Shaikh Anas"
              maxLength="50"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Update Email</label>
            <input
              type="email"
              name="email"
              placeholder="shaikh@gmail.com"
              maxLength="50"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Previous Password</label>
            <input
              type="password"
              name="old_pass"
              placeholder="Enter your old password"
              maxLength="20"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              name="new_pass"
              placeholder="Enter your new password"
              maxLength="20"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              name="c_pass"
              placeholder="Confirm your new password"
              maxLength="20"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Update Picture</label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-lg">
            Update Profile
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        &copy; copyright @ 2022 by <span className="text-green-500">Mr. Web Designer</span> | All rights reserved!
      </footer>
    </div>
  );
};

export default UpdateProfile;

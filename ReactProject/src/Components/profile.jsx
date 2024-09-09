import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaUser, FaSun, FaTimes,FaComment, FaHome,FaHeart, FaQuestion, FaGraduationCap, FaChalkboardTeacher, FaHeadset,FaBookmark } from 'react-icons/fa';
import profilePic from '../images/pic-1.jpg';

const Profile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Sidebar Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40">
          <div className="flex justify-end p-4">
            <FaTimes onClick={() => setMenuOpen(false)} className="text-2xl text-gray-700 cursor-pointer" />
          </div>

          <div className="text-center py-6">
            <img src={profilePic} alt="Profile" className="w-20 h-20 rounded-full mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900">Shaikh Anas</h3>
            <p className="text-gray-500">Student</p>
            <Link to="/profile" className="block bg-green-500 text-white py-2 mt-3 rounded-lg mx-auto w-3/4 text-center">
              View Profile
            </Link>
          </div>

          <nav className="mt-6 space-y-4">
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
      )}

      {/* Overlay */}
      {menuOpen && <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={() => setMenuOpen(false)} />}

      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <section className="flex justify-between items-center py-4 px-6">
          <Link to="/" className="text-3xl font-bold text-gray-900">LearnX</Link>

          <form action="/search" method="post" className="flex items-center bg-gray-200 rounded-lg px-3 py-2 w-1/2">
            <input
              type="text"
              name="search_box"
              required
              placeholder="Search courses..."
              className="flex-grow bg-transparent text-gray-800 focus:outline-none"
            />
            <button type="submit">
              <FaSearch className="text-gray-600" />
            </button>
          </form>

          <div className="flex space-x-4 text-2xl text-gray-600">
            <FaBars onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer" />
            <FaUser onClick={() => setUserDropdownOpen(!userDropdownOpen)} className="cursor-pointer" />
            <FaSun className="cursor-pointer" />
          </div>

          {userDropdownOpen && (
            <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg p-4 z-50">
              <img src={profilePic} alt="Profile" className="w-20 h-20 rounded-full mb-2" />
              <h3 className="text-lg font-semibold text-gray-900">Pratyush ji</h3>
              <p className="text-gray-500">Student</p>
              <Link to="/profile" className="block bg-green-500 text-white py-2 mt-3 rounded-lg text-center">
                View Profile
              </Link>
              <div className="flex space-x-2 justify-center mt-3">
                <Link to="/login" className="bg-orange-500 text-white px-3 py-2 rounded-lg">Login</Link>
                <Link to="/register" className="bg-orange-500 text-white px-3 py-2 rounded-lg">Register</Link>
              </div>
            </div>
          )}
        </section>
      </header>

      {/* Profile Section */}
      <section className="user-profile p-8">
        <h1 className="text-3xl font-semibold mb-6">Your Profile</h1>
        <div className="info">
          <div className="user flex flex-col items-center">
            <img src={profilePic} alt="Shaikh Anas" className="w-24 h-24 rounded-full" />
            <h3 className="text-xl font-semibold">Pratyush ji</h3>
            <p className="text-gray-500">Student</p>
            <Link to="/update" className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">Update Profile</Link>
          </div>

          <div className="box-container mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="box bg-white shadow p-4 text-center">
              <div className="flex items-center justify-center mb-4">
                <FaBookmark className="text-green-600 text-2xl" />
                <div className="ml-4">
                  <span className="text-2xl font-semibold">4</span>
                  <p className="text-gray-600">Saved Playlists</p>
                </div>
              </div>
              <Link to="/playlists" className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block">View Playlists</Link>
            </div>

            <div className="box bg-white shadow p-4 text-center">
              <div className="flex items-center justify-center mb-4">
                <FaHeart className="text-red-600 text-2xl" />
                <div className="ml-4">
                  <span className="text-2xl font-semibold">33</span>
                  <p className="text-gray-600">Videos Liked</p>
                </div>
              </div>
              <Link to="/liked" className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block">View Liked</Link>
            </div>

            <div className="box bg-white shadow p-4 text-center">
              <div className="flex items-center justify-center mb-4">
                <FaComment className="text-yellow-600 text-2xl" />
                <div className="ml-4">
                  <span className="text-2xl font-semibold">12</span>
                  <p className="text-gray-600">Videos Commented</p>
                </div>
              </div>
              <Link to="/comments" className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block">View Comments</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
        &copy; 2022 by <span className="text-green-500">Mr. Web Designer</span> | All rights reserved!
      </footer>
    </div>
  );
};

export default Profile;

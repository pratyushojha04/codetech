// src/components/WatchPage.js
import React, { useState } from 'react';
import { FaHeart, FaCalendar, FaUser, FaBars, FaSearch, FaSun, FaTimes,FaHome,FaQuestion,FaGraduationCap,FaChalkboardTeacher,FaHeadset } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WatchPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-gray-100 ${menuOpen ? 'blur-background' : ''}`}>
      {/* Sidebar Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-40">
          <div className="flex justify-end p-4">
            <FaTimes onClick={() => setMenuOpen(false)} className="text-2xl text-gray-700 cursor-pointer" />
          </div>
          <div className="text-center py-6">
            <img src="images/pic-1.jpg" alt="Profile" className="w-24 h-24 rounded-full mb-3 mx-auto" />
            <h3 className="text-xl text-gray-900 font-semibold">Pratyush Ji</h3>
            <p className="text-gray-500">Student</p>
            <Link to="/profile" className="block bg-green-600 text-white py-2 mt-3 rounded-lg w-3/4 mx-auto text-center">
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
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Header Section */}
      <header className="bg-white shadow sticky top-0 z-50">
        <section className="flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <Link to="/" className="text-4xl text-gray-900 font-bold">LearnX</Link>

          {/* Search Form */}
          <form action="search.html" method="post" className="flex items-center bg-gray-200 rounded-lg p-3 w-1/2">
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

          {/* Icons for Menu, User, Theme */}
          <div className="flex items-center space-x-4 text-2xl text-gray-700">
            <FaBars onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer" />
            <div className="relative">
              <FaUser
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="cursor-pointer"
              />
              {/* User Dropdown */}
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg text-center z-50">
                  <img src="images/pic-1.jpg" alt="Profile" className="w-24 h-24 rounded-full mx-auto mt-2" />
                  <h3 className="text-xl text-gray-900 font-semibold mt-2">Pratyush Ji</h3>
                  <p className="text-gray-500">Student</p>
                  <Link to="/profile" className="block bg-green-600 text-white py-2 mt-2 rounded-lg">
                    View Profile
                  </Link>
                  <div className="flex flex-col mt-2">
                    <Link to="/login" className="bg-orange-500 text-white py-2 px-4 rounded-lg mb-2">Login</Link>
                    <Link to="/register" className="bg-orange-500 text-white py-2 px-4 rounded-lg">Register</Link>
                  </div>
                </div>
              )}
            </div>
            <FaSun className="cursor-pointer" />
          </div>
        </section>
      </header>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-8">
        <div className="bg-white shadow-md p-6 rounded-lg mb-8">
          <div className="relative">
            <video
              src="images/vid-1.mp4"
              controls
              poster="images/post-1-1.png"
              className="w-full h-auto rounded-lg"
            ></video>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mt-4">
            Complete HTML Tutorial (Part 01)
          </h3>
          <div className="flex items-center mt-2 space-x-4 text-sm text-gray-600">
            <p>
              <FaCalendar className="inline mr-1" /> <span>22-10-2022</span>
            </p>
            <p>
              <FaHeart className="inline mr-1" /> <span>44 likes</span>
            </p>
          </div>
          <div className="flex items-center mt-4">
            <img src="images/pic-2.jpg" alt="Profile" className="w-12 h-12 rounded-full" />
            <div className="ml-4">
              <h3 className="font-semibold">John Deo</h3>
              <span className="text-sm text-gray-600">Developer</span>
            </div>
          </div>
          <form action="" method="post" className="flex items-center space-x-4 mt-4">
            <Link to="playlist.html" className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
              View Playlist
            </Link>
            <button className="flex items-center bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition">
              <FaHeart className="mr-2" />
              <span>Like</span>
            </button>
          </form>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque labore ratione, hic exercitationem mollitia obcaecati culpa dolor placeat provident porro. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure autem non fugit sint. A, sequi rerum architecto dolor fugiat illo, iure velit nihil laboriosam cupiditate voluptatum facere cumque nemo!
          </p>
        </div>
      </section>

      {/* Comments Section */}
      <section className="max-w-6xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">5 Comments</h1>
        <form action="" className="bg-white shadow-md p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-2">Add Comments</h3>
          <textarea
            name="comment_box"
            placeholder="Enter your comment"
            required
            maxLength="1000"
            cols="30"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          ></textarea>
          <input
            type="submit"
            value="Add Comment"
            className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
          />
        </form>
        <h1 className="text-2xl font-bold mb-4">User Comments</h1>
        <div className="space-y-4">
          {/* Repeat this block for each comment */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <div className="flex items-center mb-2">
              <img src="images/pic-1.jpg" alt="Profile" className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h3 className="font-semibold">Shaikh Anas</h3>
                <span className="text-sm text-gray-600">22-10-2022</span>
              </div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg mb-4">
              This is a comment from Shaikh Anas.
            </div>
            <form action="" className="flex space-x-2">
              <input
                type="text"
                name="reply_box"
                placeholder="Enter your reply"
                maxLength="500"
                required
                className="flex-1 p-2 border border-gray-300 rounded-lg"
              />
              <input
                type="submit"
                value="Reply"
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
              />
            </form>
          </div>
          {/* End of comment block */}
        </div>
      </section>
    </div>
  );
};

export default WatchPage;

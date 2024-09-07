import React, { useState } from "react";
import { FaChartBar, FaBars, FaSearch, FaUser, FaSun, FaTimes, FaHome, FaQuestion, FaGraduationCap, FaChalkboardTeacher, FaHeadset, FaCode, FaChartLine, FaPen, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <div className={`min-h-screen ${menuOpen ? 'blur-background' : ''} transition-all duration-300`}>
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
            <Link to="profile.html" className="block bg-green-600 text-white py-2 mt-3 rounded-lg w-3/4 mx-auto text-center">
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
          <div className="flex space-x-4 text-2xl text-gray-700">
            <FaBars onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer" />
            <FaUser onClick={() => setUserDropdownOpen(!userDropdownOpen)} className="cursor-pointer" />
            <FaSun className="cursor-pointer" />
          </div>

          {/* User Dropdown */}
          {userDropdownOpen && (
            <div className="absolute top-20 right-8 bg-white rounded-lg shadow-lg p-4 text-center z-50">
              <img src="images/pic-1.jpg" alt="Profile" className="w-24 h-24 rounded-full mb-3" />
              <h3 className="text-xl text-gray-900 font-semibold">Pratyush Ji</h3>
              <p className="text-gray-500">Student</p>
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

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b pb-4">Quick Options</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Likes and Comments</h3>
            <p className="text-lg text-gray-500 mb-2">Total likes: <span className="text-green-600">25</span></p>
            <Link to="#" className="inline-block bg-green-600 text-white py-2 px-6 rounded-lg">View Likes</Link>
            <p className="text-lg text-gray-500 mt-4">Total comments: <span className="text-green-600">12</span></p>
            <Link to="#" className="inline-block bg-green-600 text-white py-2 px-6 rounded-lg">View Comments</Link>
            <p className="text-lg text-gray-500 mt-4">Saved playlists: <span className="text-green-600">4</span></p>
            <Link to="#" className="inline-block bg-green-600 text-white py-2 px-6 rounded-lg">View Playlists</Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Top Categories</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="#" className="flex items-center bg-gray-200 py-2 px-4 rounded-lg">
                <FaCode className="text-green-600 mr-2" />
                <span>Development</span>
              </Link>
              <Link to="#" className="flex items-center bg-gray-200 py-2 px-4 rounded-lg">
                <FaChartBar className="text-green-600 mr-2" />
                <span>Business</span>
              </Link>
              <Link to="#" className="flex items-center bg-gray-200 py-2 px-4 rounded-lg">
                <FaPen className="text-green-600 mr-2" />
                <span>Design</span>
              </Link>
              <Link to="#" className="flex items-center bg-gray-200 py-2 px-4 rounded-lg">
                <FaChartLine className="text-green-600 mr-2" />
                <span>Marketing</span>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Popular Topics</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="#" className="flex items-center bg-gray-200 py-2 px-4 rounded-lg">
                <FaHtml5 className="text-green-600 mr-2" />
                <span>HTML</span>
              </Link>
              <Link to="#" className="flex items-center bg-gray-200 py-2 px-4 rounded-lg">
                <FaCss3 className="text-green-600 mr-2" />
                <span>CSS</span>
              </Link>
              <Link to="#" className="flex items-center bg-gray-200 py-2 px-4 rounded-lg">
                <FaJs className="text-green-600 mr-2" />
                <span>JS</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

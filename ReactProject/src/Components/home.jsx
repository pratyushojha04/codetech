import React, { useState } from "react";
import { FaChartBar, FaBars, FaSearch, FaUser, FaSun, FaTimes, FaHome, FaQuestion, FaGraduationCap, FaChalkboardTeacher, FaHeadset, FaCode, FaChartLine, FaPen, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white sticky top-0 z-50 shadow-md">
      {/* Sidebar Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-md">
          <div className="flex justify-end p-4">
            <FaTimes onClick={() => setMenuOpen(false)} className="text-2xl text-white bg-red-500 p-2 rounded cursor-pointer" />
          </div>

          <div className="text-center py-6">
            <img src="images/pic-1.jpg" alt="Profile" className="w-24 h-24 rounded-full mb-3" />
            <h3 className="text-xl text-gray-900 font-semibold">Pratyush Ji</h3>
            <p className="text-gray-500">Student</p>
            <Link to="profile.html" className="block bg-green-600 text-white py-2 mt-3 rounded-lg">View Profile</Link>
          </div>

          <nav className="flex flex-col space-y-4 text-lg">
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
            <div className="absolute top-20 right-8 bg-white rounded-lg shadow-lg p-4 text-center">
              <img src="images/pic-1.jpg" alt="Profile" className="w-24 h-24 rounded-full mb-3" />
              <h3 className="text-xl text-gray-900 font-semibold">Pratyush Ji</h3>
              <p className="text-gray-500">Student</p>
              <Link to="profile.html" className="block bg-green-600 text-white py-2 mt-3 rounded-lg">View Profile</Link>
              <div className="flex space-x-2 justify-center mt-2">
                <Link to="login.html" className="bg-orange-500 text-white py-2 px-4 rounded-lg">Login</Link>
                <Link to="register.html" className="bg-orange-500 text-white py-2 px-4 rounded-lg">Register</Link>
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
              <img src="../images/post-1-1.png" alt="description" className="w-6 h-6 mr-2" />
              <FaHtml5 className="text-green-600 mr-2" />
              <span>HTML</span>
            </Link>
            <Link to="#" className="flex items-center bg-gray-200 py-2 px-4 rounded-lg">
              <img src="your-image-url-here" alt="description" className="w-6 h-6 mr-2" />
              <FaCss3 className="text-green-600 mr-2" />
              <span>CSS</span>
            </Link>
            <Link to="#" className="flex items-center bg-gray-200 py-2 px-4 rounded-lg">
              <img src="your-image-url-here" alt="description" className="w-6 h-6 mr-2" />
              <FaJs className="text-green-600 mr-2" />
              <span>JS</span>
            </Link>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b pb-4">More Categories</h1>

        <div className="flex gap-6 flex-wrap">
          <Link to="#" className="flex items-center justify-center w-full sm:w-auto bg-gray-200 text-xl text-gray-800 font-medium py-3 px-8 rounded-lg hover:bg-green-600 hover:text-white">
            Web Development
          </Link>
          <Link to="#" className="flex items-center justify-center w-full sm:w-auto bg-gray-200 text-xl text-gray-800 font-medium py-3 px-8 rounded-lg hover:bg-green-600 hover:text-white">
            Graphic Design
          </Link>
          <Link to="#" className="flex items-center justify-center w-full sm:w-auto bg-gray-200 text-xl text-gray-800 font-medium py-3 px-8 rounded-lg hover:bg-green-600 hover:text-white">
            Marketing
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
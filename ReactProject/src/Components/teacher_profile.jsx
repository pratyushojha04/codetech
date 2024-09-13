import React, { useState } from 'react';
import { FaBars, FaSearch, FaUser, FaSun, FaTimes, FaHome, FaQuestion, FaGraduationCap, FaChalkboardTeacher, FaHeadset } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TeacherProfile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header Section */}
      <header className="bg-white shadow py-4">
        <section className="flex justify-between items-center max-w-6xl mx-auto px-4">
          
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-gray-900">LearnX</Link>

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
            <button type="submit">
              <FaSearch className="text-gray-700 text-xl" />
            </button>
          </form>

          {/* Icons */}
          <div className="flex space-x-4 text-2xl text-gray-700">
            <FaBars onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer" />
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

      {/* Profile Details Section */}
      <section className="py-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b pb-4">Profile Details</h1>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <div className="flex items-center space-x-4">
            <img src="images/pic-2.jpg" alt="John Doe" className="w-24 h-24 rounded-full" />
            <div>
              <h3 className="text-2xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Developer</p>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <p>Total Playlists: <span className="font-semibold">4</span></p>
            <p>Total Videos: <span className="font-semibold">18</span></p>
            <p>Total Likes: <span className="font-semibold">1208</span></p>
            <p>Total Comments: <span className="font-semibold">52</span></p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b pb-4">Our Courses</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Complete HTML Tutorial', videos: 10, image: 'thumb-1.png' },
            { title: 'Complete CSS Tutorial', videos: 10, image: 'thumb-2.png' },
            { title: 'Complete JavaScript Tutorial', videos: 10, image: 'thumb-3.png' },
            { title: 'Complete Bootstrap Tutorial', videos: 10, image: 'thumb-4.png' },
          ].map((course, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg">
              <div className="relative">
                <img src={`images/${course.image}`} alt={course.title} className="w-full h-48 object-cover rounded-t-lg" />
                <span className="absolute bottom-2 right-2 bg-gray-800 text-white text-sm px-2 py-1 rounded-lg">{course.videos} Videos</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <Link to="/playlist" className="block bg-green-600 text-white py-2 mt-3 text-center rounded-lg">View Playlist</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        &copy; 2022 by <span className="font-semibold">Mr. Web Designer</span> | All rights reserved!
      </footer>
    </div>
  );
};

export default TeacherProfile;

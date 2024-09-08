import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaUser, FaSun, FaTimes, FaHome, FaQuestion, FaGraduationCap, FaChalkboardTeacher, FaHeadset } from 'react-icons/fa';

import profilePic from '../images/pic-1.jpg';
// import thumbImages from '../images/'; 

const CourseCard = ({ imgSrc, tutorImg, tutorName, date, title, link }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="flex items-center p-4">
      <img src={tutorImg} alt="Tutor" className="w-12 h-12 rounded-full" />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{tutorName}</h3>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
    </div>
    <div className="relative">
      <img src={imgSrc} alt="Course Thumbnail" className="w-full h-48 object-cover" />
      <span className="absolute bottom-2 right-2 bg-black text-white text-sm px-2 py-1 rounded">10 videos</span>
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <Link to={link} className="inline-block mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        View Playlist
      </Link>
    </div>
  </div>
);

const Courses = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <Link to="/home" className="text-3xl font-bold text-gray-900">Educa.</Link>

          {/* Search Form */}
          <form action="search.html" method="post" className="relative hidden md:flex items-center bg-gray-200 rounded-lg p-2 w-1/2">
            <input
              type="text"
              name="search_box"
              required
              placeholder="Search courses..."
              maxLength="100"
              className="p-2 border border-gray-300 rounded-md focus:outline-none bg-transparent text-gray-800 flex-grow"
            />
            <button type="submit" className="absolute right-2 top-2 text-gray-500">
              <FaSearch />
            </button>
          </form>

          {/* Icons for Menu, Search, User, Theme */}
          <div className="flex items-center space-x-4 text-2xl text-gray-700">
            <FaBars id="menu-btn" className="cursor-pointer" />
            <FaSearch id="search-btn" className="cursor-pointer" />
            <FaUser id="user-btn" className="cursor-pointer" />
            <FaSun id="toggle-btn" className="cursor-pointer" />
          </div>
        </div>

        {/* Profile Dropdown */}
        <div className="absolute top-16 right-8 bg-white rounded-lg shadow-lg p-4 text-center hidden" id="profile-dropdown">
          <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full mb-3 mx-auto" />
          <h3 className="text-xl font-semibold text-gray-900">Pratyush ji</h3>
          <p className="text-gray-500">Student</p>
          <Link to="/profile" className="block bg-green-600 text-white py-2 mt-3 rounded-lg">
            View Profile
          </Link>
          <div className="flex space-x-2 justify-center mt-2">
            <Link to="/login" className="bg-orange-500 text-white py-2 px-4 rounded-lg">Login</Link>
            <Link to="/register" className="bg-orange-500 text-white py-2 px-4 rounded-lg">Register</Link>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="fixed inset-0 z-40 flex hidden" id="sidebar">
        <div className="fixed inset-0 bg-black opacity-50" id="overlay"></div>
        <div className="fixed left-0 top-0 w-80 h-full bg-white shadow-lg z-50 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Menu</h3>
            <FaTimes id="close-btn" className="text-2xl cursor-pointer" />
          </div>

          <div className="text-center py-6">
            <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full mb-3 mx-auto" />
            <h3 className="text-xl text-gray-900 font-semibold">Pratyush ji</h3>
            <p className="text-gray-500">Student</p>
            <Link to="/profile" className="block bg-green-600 text-white py-2 mt-3 rounded-lg w-3/4 mx-auto">
              View Profile
            </Link>
          </div>

          <nav className="mt-6 space-y-4">
            <Link to="/home" className="flex items-center px-6 py-3 hover:bg-gray-100">
              <FaHome className="mr-3 text-blue-600" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center px-6 py-3 hover:bg-gray-100">
              <FaQuestion className="mr-3 text-blue-600" />
              <span>About</span>
            </Link>
            <Link to="/courses" className="flex items-center px-6 py-3 hover:bg-gray-100">
              <FaGraduationCap className="mr-3 text-blue-600" />
              <span>Courses</span>
            </Link>
            <Link to="/teachers" className="flex items-center px-6 py-3 hover:bg-gray-100">
              <FaChalkboardTeacher className="mr-3 text-blue-600" />
              <span>Teachers</span>
            </Link>
            <Link to="/contact" className="flex items-center px-6 py-3 hover:bg-gray-100">
              <FaHeadset className="mr-3 text-blue-600" />
              <span>Contact Us</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Courses Section */}
      <section className="p-8">
        <h1 className="text-3xl font-semibold mb-8">Our Courses</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CourseCard
            // imgSrc={thumbImages[0]}
            tutorImg={profilePic}
            tutorName="John Deo"
            date="21-10-2022"
            title="Complete HTML Tutorial"
            link="/playlist"
          />
          <CourseCard
            // imgSrc={thumbImages[1]}
            tutorImg={profilePic}
            tutorName="John Deo"
            date="21-10-2022"
            title="Complete CSS Tutorial"
            link="/playlist"
          />
          <CourseCard
            // imgSrc={thumbImages[2]}
            tutorImg={profilePic}
            tutorName="John Deo"
            date="21-10-2022"
            title="Complete JS Tutorial"
            link="/playlist"
          />
          <CourseCard
            // imgSrc={thumbImages[3]}
            tutorImg={profilePic}
            tutorName="John Deo"
            date="21-10-2022"
            title="Complete Bootstrap Tutorial"
            link="/playlist"
          />
          <CourseCard
            // imgSrc={thumbImages[4]}
            tutorImg={profilePic}
            tutorName="John Deo"
            date="21-10-2022"
            title="Complete JQuery Tutorial"
            link="/playlist"
          />
          <CourseCard
            // imgSrc={thumbImages[5]}
            tutorImg={profilePic}
            tutorName="John Deo"
            date="21-10-2022"
            title="Complete SASS Tutorial"
            link="/playlist"
          />
          <CourseCard
            // imgSrc={thumbImages[6]}
            tutorImg={profilePic}
            tutorName="John Deo"
            date="21-10-2022"
            title="Complete PHP Tutorial"
            link="/playlist"
          />
          <CourseCard
            // imgSrc={thumbImages[7]}
            tutorImg={profilePic}
            tutorName="John Deo"
            date="21-10-2022"
            title="Complete MySQL Tutorial"
            link="/playlist"
          />
          <CourseCard
            // imgSrc={thumbImages[8]}
            tutorImg={profilePic}
            tutorName="John Deo"
            date="21-10-2022"
            title="Complete React Tutorial"
            link="/playlist"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        &copy; Copyright 2022 by <span className="text-blue-500">Mr. Web Designer</span> | All rights reserved!
      </footer>
    </div>
  );
};

export default Courses;

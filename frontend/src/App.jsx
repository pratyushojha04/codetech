import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './Components/login';
import Register from './Components/register';
import Home from './Components/home';
import About from './Components/about';
import Contact from './Components/contact';
import Courses from './Components/courses';
import Teachers from './Components/teachers';
import Profile from './Components/profile';
import TeacherProfile from './Components/teacher_profile';
import Playlist from './Components/playlist';
import WatchVideo from './Components/watch-video';
import { getCurrentUser } from './services/authService';

function App() {
  const PrivateRoute = ({ children }) => {
    const user = getCurrentUser();
    return user ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/about" element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        } />
        <Route path="/courses" element={
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        } />
        <Route path="/teachers" element={
          <PrivateRoute>
            <Teachers />
          </PrivateRoute>
        } />
        <Route path="/contact" element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        } />
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
        <Route path="/teacher/profile" element={
          <PrivateRoute>
            <TeacherProfile />
          </PrivateRoute>
        } />
        <Route path="/playlist" element={
          <PrivateRoute>
            <Playlist />
          </PrivateRoute>
        } />
        <Route path="/watch" element={
          <PrivateRoute>
            <WatchVideo />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;

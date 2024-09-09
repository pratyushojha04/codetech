import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';


import Home from './Components/home';
import Login from './Components/login';
import Register from './Components/register';
import About from './Components/about';
import Contact from './Components/contact';
import Courses from './Components/courses';
import Profile from './Components/profile';

const App = () => {
  return (
    <div>
    <BrowserRouter >
        <Routes>
        <Route exact path="/" element={<Home/>} /> 
        <Route exact path="/login" element={<Login/>} /> 
        <Route exact path="/register" element={<Register/>} /> 
        <Route exact path="/about" element={<About/>} /> 
        <Route exact path="/Contact" element={<Contact/>} /> 
        <Route exact path="/Courses" element={<Courses/>} /> 
        <Route exact path="/profile" element={<Profile/>} /> 
        </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;



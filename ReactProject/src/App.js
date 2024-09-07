import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';


import Home from './Components/home';
import Login from './Components/login';
import Register from './Components/register';

const App = () => {
  return (
    <div>
    <BrowserRouter >
        <Routes>
        <Route exact path="/" element={<Home/>} /> 
        <Route exact path="/login" element={<Login/>} /> 
        <Route exact path="/register" element={<Register/>} /> 
        </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;



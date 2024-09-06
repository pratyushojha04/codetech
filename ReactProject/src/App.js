import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';


import Home from './Components/home';

const App = () => {
  return (
    <div>
    <BrowserRouter >
        <Routes>
        <Route exact path="/" element={<Home/>} /> 
        </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;



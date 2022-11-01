import React, {Component} from 'react';
import {BrowserRouter
        as Router,
        Route,
        Routes} from 'react-router-dom';
import InsideCart from './pages/InsideCart';
import InsideProfile from './pages/InsideProfile';
import Login from './pages/Login';
import Shopping from './pages/Shopping';

const Directions = () => { 
    return (
<Router>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/Shopping" element={<Shopping />} />
    <Route path="/InsideCart" element={<InsideCart />} />
    <Route path="/InsideProfile" element={<InsideProfile />} />
  </Routes>
 </Router>
    ) }
    export default Directions;
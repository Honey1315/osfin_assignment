import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Booking from './pages/booking/Booking';
import Review from './components/Review';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="flex">
      <Sidebar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/review' element={<Review/>}/>
          <Route path='/sidebar' element={<Sidebar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

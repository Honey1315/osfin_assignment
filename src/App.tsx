import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Booking from './pages/booking/Booking';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/booking' element={<Booking/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

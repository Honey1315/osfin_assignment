import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Booking from './pages/booking/Booking';
import Sidebar from './components/Sidebar';
import Confirmation from './pages/confirmation/Confirmation';

function App() {
  return (
    <div className="flex">
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/booking/*' element={<Booking/>}/>
          <Route path='/sidebar' element={<Sidebar/>}/>
          <Route path='/success' element={<Confirmation/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

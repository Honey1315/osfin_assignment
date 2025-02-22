import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Booking from './pages/booking/Booking';
import Sidebar from './components/Sidebar';
import Confirmation from './pages/confirmation/Confirmation';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isLoginOrConfirmationPage = location.pathname === '/login' || location.pathname === '/success';

  return (
    <div className={`flex ${isLoginOrConfirmationPage ? '' : 'with-sidebar'}`}>
      {!isLoginOrConfirmationPage && <Sidebar />}
      <div className={`${isLoginOrConfirmationPage ? 'w-full' : 'flex-grow'}`}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/booking/*' element={<Booking/>}/>
          <Route path='/success' element={<Confirmation/>}/>
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

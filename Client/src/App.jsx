import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import HomePage from './pages/Home';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Colleges from './pages/Colleges';
import EventCalendar from './pages/EventCalendar';
import FAQs from './pages/FAQs';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setUserLoggedIn={setUserLoggedIn} setUserId={setUserId} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path='/colleges' element={<Colleges />} />
          <Route path='/eventcalendar' element={<EventCalendar />} />
          <Route path='/faqs' element={<FAQs></FAQs>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

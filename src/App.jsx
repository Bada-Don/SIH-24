import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/signup';
import Home from './pages/home';
import Login from './pages/LoginPage';
import Jobs from './components/profile page/jobListing';
import Profile from './pages/profile';
import JobAppStat from './pages/application status';
import TestPage from './pages/testPage'; 
import TalentForm from './pages/Talentform';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/courses" element={<Navigate to="/profile" state={{ activeTab: 'courses' }} />} />
        <Route path="/application" element={<JobAppStat />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/talent" element={<TalentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
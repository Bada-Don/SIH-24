import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Home from './pages/Home';  
import Login from './pages/LoginPage';  
import Jobs from './pages/jobListing';
import TalentForm from './pages/Talentform';
import JobApplicationStatus from './pages/application status';
import Courses from './pages/coursepage';
import Profile from './pages/profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/talentform" element={<TalentForm />} />
        <Route path="/application status" element={<JobApplicationStatus />} />
        <Route path="/courses" element={<Courses/>} />
        {/* Add other routes as needed */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

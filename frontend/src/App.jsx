
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutUsPage from '../pages/AboutUsPage';
import AdminPage from '../pages/AdminPage';
import ContactUsPage from '../pages/ContactUsPage';
import PollsPage from '../pages/PollsPage';
import PostPollPage from '../pages/PostPollPage';
import ProfilePage from '../pages/profilePage';
import SearchPage from '../pages/SearchPage';
import SigninPage from '../pages/Signinpage';
import SignupPage from '../pages/Signuppage';

// import {
//   HomePage,
//   AboutUsPage,
//   AdminPage,
//   ContactUsPage,
//   PollsPage,
//   PostPollPage,
//   ProfilePage,
//   SearchPage,
//   SigninPage,
//   SignupPage
// } from '../pages';

import Navbar from '../components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/polls" element={<PollsPage />} />
        <Route path="/post-poll" element={<PostPollPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;

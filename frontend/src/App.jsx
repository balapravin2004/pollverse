
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  HomePage,
  AboutUsPage,
  AdminPage,
  ContactUsPage,
  PollsPage,
  PostPollPage,
  ProfilePage,
  SearchPage,
  SigninPage,
  SignupPage
} from "../pages/index";

import Navbar from '../components/Navbar/Navbar';
import BottomNavbar from '../components/BottomNavbar/BottomNavbar';

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <BottomNavbar/>
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

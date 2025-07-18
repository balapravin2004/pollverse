import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [hoverIcon, setHoverIcon] = useState(false);
  const loggedIn = true; // Replace with actual auth logic
  const anonymousMode = false; // Replace with actual anonymous logic
  const currentUser = {
    username: "User",
    icon: "https://cdn-icons-png.flaticon.com/512/4123/4123763.png",
    admin: true,
    uicon: null,
  };
  const currentUserId = 1;
  const navigate = useNavigate();

  const handleSidebarToggle = () => {
    console.log('Sidebar open');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar" id="mainNav">
      {/* Sidebar Toggle Button */}
      <button
        className="sidebar-toggle-btn"
        onClick={handleSidebarToggle}
        onMouseOver={() => setHoverIcon(true)}
        onMouseOut={() => setHoverIcon(false)}
        aria-label="Toggle sidebar"
      >
        {hoverIcon ? '➤' : '►'}
      </button>

      {/* User Dropdown */}
      <div className="navbar-brand">
        <div className="nav-item dropdown">
          <a
            className="nav-link px-lg-3 py-3 py-lg-4"
            href="#!"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {loggedIn ? (
              anonymousMode ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png"
                  className="user-icon"
                  alt="User Icon"
                />
              ) : currentUser.uicon ? (
                <img
                  src={`data:image/jpeg;base64,${currentUser.uicon}`}
                  height="50"
                  width="50"
                  className="rounded-circle"
                  alt="User Icon"
                />
              ) : (
                <img
                  src={currentUser.icon}
                  alt="Profile"
                  height="50"
                  width="50"
                  className="rounded-circle"
                />
              )
            ) : (
              <>
                <img
                  src="/static/assets/icons/user.svg"
                  height="50"
                  width="50"
                  className="rounded-circle"
                  alt="User Icon"
                />{' '}
                User
              </>
            )}
          </a>

          <ul className="dropdown-menu animated" aria-labelledby="navbarDropdown" id="nav_bar123">
            {loggedIn ? (
              <>
                <li><Link className="dropdown-item" to="/logout">Log Out</Link></li>
                <li><Link className="dropdown-item" to="/register">Register here</Link></li>
                <li><Link className="dropdown-item" to="/profile">View {currentUser.username}</Link></li>
                {!anonymousMode ? (
                  <li><Link className="dropdown-item" to="/anonymous">Go Incognito</Link></li>
                ) : (
                  <li><Link className="dropdown-item" to="/anonymous">Reveal</Link></li>
                )}
              </>
            ) : (
              <li><button className="dropdown-item" id="indexLogin" onClick={() => navigate('/signin')}>Log In</button></li>
            )}
          </ul>
        </div>
      </div>

      {/* Navbar Toggle (Mobile) */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Search Bar */}
      <form className="d-flex align-items-center" action="/search" method="POST">
        <input type="text" className="form-control search-input me-2" placeholder="Search..." name="searchText" />
        <button className="btn btn-outline-primary" type="submit" aria-label="Search">
          <i className="fas fa-search"></i>
        </button>
      </form>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse above_link_container" id="navbarResponsive">
        <ul className="navbar-nav ms-auto py-4 py-lg-0 all_links_container">
          <li className="nav-item">
            <Link className="nav-link px-lg-3 py-3 py-lg-4 navbar_links123" to="/polls">Polls</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-lg-3 py-3 py-lg-4 navbar_links123" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link px-lg-3 py-3 py-lg-4 navbar_links123"
              to={`/contact?user_id=${currentUserId}`}
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-lg-3 py-3 py-lg-4 navbar_links123" to="/developer">Developer</Link>
          </li>
          {(currentUserId === 1 || currentUser.admin) && (
            <li className="nav-item">
              <Link className="nav-link px-lg-3 py-3 py-lg-4 navbar_links123" to="/admin">Admin</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

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

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar" id="mainNav">
      {/* Sidebar Toggle Button */}
      <button
        className="sidebar-toggle-btn"
        onClick={() => console.log('Sidebar open')}
        onMouseOver={() => setHoverIcon(true)}
        onMouseOut={() => setHoverIcon(false)}
      >
        {hoverIcon ? '➤' : '►'}
      </button>

      {/* User Dropdown */}
      <div className="navbar-brand">
        <div className="nav-item dropdown">
          <a
            className="nav-link px-lg-3 py-3 py-lg-4"
            href="#"
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
                <li><a className="dropdown-item" href="/logout">Log Out</a></li>
                <li><a className="dropdown-item" href="/register">Register here</a></li>
                <li><a className="dropdown-item" href="/profile">View {currentUser.username}</a></li>
                {!anonymousMode ? (
                  <li><a className="dropdown-item" href="/anonymous">Go Incognito</a></li>
                ) : (
                  <li><a className="dropdown-item" href="/anonymous">Reveal</a></li>
                )}
              </>
            ) : (
              <li><a className="dropdown-item" id="indexLogin">Log In</a></li>
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
        <input type="text" className="form-control search-input me-2" placeholder="Search..." />
        <button className="btn btn-outline-primary" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse above_link_container" id="navbarResponsive">
        <ul className="navbar-nav ms-auto py-4 py-lg-0 all_links_container">
          <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4 navbar_links123" href="/">Polls</a></li>
          <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4 navbar_links123" href="/about">About Us</a></li>
          <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4 navbar_links123" href={`/contact?user_id=${currentUserId}`}>Contact Us</a></li>
          <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4 navbar_links123" href="/developer">Developer</a></li>
          {(currentUserId === 1 || currentUser.admin) && (
            <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4 navbar_links123" href="/for_admin">Admin</a></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

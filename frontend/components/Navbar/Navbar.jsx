import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [hoverIcon, setHoverIcon] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Placeholder logic for user
  const loggedIn = true;
  const anonymousMode = false;
  const currentUser = {
    username: 'User',
    icon: 'https://cdn-icons-png.flaticon.com/512/4123/4123763.png',
    admin: true,
    uicon: null,
  };
  const currentUserId = 1;
  return (
    <nav className="glass px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50 max-w-[1400px] m-auto ">
      {/* Left: Sidebar + Brand */}
      <div className="flex items-center gap-4">
        

        <Link to="/" className="text-2xl font-bold text-white">
          Pollverse
        </Link>
      </div>

      {/* Middle: Nav Links */}
      <div className="hidden md:flex space-x-6 text-white font-medium">
        <Link to="/polls" className="hover:underline">Polls</Link>
        <Link to="/about" className="hover:underline">About Us</Link>
        <Link to={`/contact?user_id=${currentUserId}`} className="hover:underline">Contact</Link>
        <Link to="/developer" className="hover:underline">Developer</Link>
        {(currentUser.admin || currentUserId === 1) && (
          <Link to="/admin" className="hover:underline">Admin</Link>
        )}
      </div>

      {/* Right: User + Mobile */}
      <div className="flex items-center gap-4">
        {/* Search form */}
        <form action="/search" method="POST" className="hidden lg:flex items-center">
          <input
            type="text"
            name="searchText"
            placeholder="Search..."
            className="px-3 py-1 rounded-l-md text-sm outline-none bg-white/20 backdrop-blur-md text-white placeholder-white"
          />
          <button
            type="submit"
            className="bg-blue-500 px-3 py-1 rounded-r-md text-white"
            aria-label="Search"
          >
            🔍
          </button>
        </form>

        {/* Dropdown */}
        <div className="relative">
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="User menu"
          >
            <img
              src={currentUser.uicon ? `data:image/jpeg;base64,${currentUser.uicon}` : currentUser.icon}
              alt="User Icon"
              className="h-10 w-10 rounded-full border border-white"
            />
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <ul className="absolute right-0 mt-2 w-48 glass rounded-md overflow-hidden shadow-lg z-50 text-sm text-white">
              {loggedIn ? (
                <>
                  <li>
                    <Link to="/logout" className="block px-4 py-2 hover:bg-white/20">Log Out</Link>
                  </li>
                  <li>
                    <Link to="/register" className="block px-4 py-2 hover:bg-white/20">Register</Link>
                  </li>
                  <li>
                    <Link to="/profile" className="block px-4 py-2 hover:bg-white/20">View {currentUser.username}</Link>
                  </li>
                  <li>
                    <Link to="/anonymous" className="block px-4 py-2 hover:bg-white/20">
                      {anonymousMode ? 'Reveal' : 'Go Incognito'}
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={() => navigate('/signin')}
                    className="block w-full text-left px-4 py-2 hover:bg-white/20"
                  >
                    Log In
                  </button>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

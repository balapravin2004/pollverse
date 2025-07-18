import React from 'react';

const HomePage = () => {
  return (
    <>
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to Pollverse
        </h1>
        <p className="text-lg max-w-xl mb-8">
          Discover, create, and share polls with ease. Engage your audience and gather insights instantly.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/* Bottom Section */}
      <footer className="bg-gray-100 text-gray-700 py-6 text-center">
        <p className="text-sm">
          © 2025 Pollify. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default HomePage;

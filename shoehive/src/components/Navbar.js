import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-700 px-4 py-2 flex justify-between items-center">
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">Shop</a></li>
        <li><a href="#" className="hover:text-gray-300">About</a></li>
        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
      </ul>

      {/* Search Bar and User Authentication Links */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input type="text" placeholder="Search" className="bg-gray-600 text-white rounded-full px-4 py-2 focus:outline-none focus:bg-gray-500" />
          <button className="absolute right-0 top-0 mt-3 mr-4 focus:outline-none">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l6 6m0 0l-6-6m6 6L4 8m6 6l6-6" />
            </svg>
          </button>
        </div>
        <div>
          <a href="#" className="hover:text-gray-300">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

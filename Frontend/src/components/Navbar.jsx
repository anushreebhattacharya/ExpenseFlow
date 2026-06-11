import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircle } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <nav className="h-20 bg-white border-b border-gray-200 shadow-sm px-12 lg:px-16 flex items-center justify-between">

      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-3">
        <img
          src={logo}
          alt="ExpenseFlow Logo"
          className="w-12 h-12 object-contain"
        />

        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          ExpenseFlow
        </h1>
      </Link>

      {/* Right Section */}
      <div className="flex items-center">
        {isLoggedIn ? (
          <Link to="/profile">
            <UserCircle
              size={42}
              className="text-purple-600 hover:text-purple-700 transition"
            />
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="px-6 py-3 rounded-xl border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition h-10 w-20 flex items-center justify-center ml-3"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition h-10 w-20 flex items-center justify-center ml-3"
            >
              Register
            </Link>
          </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
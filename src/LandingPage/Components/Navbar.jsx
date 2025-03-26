import React, { useState } from "react";
import { Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarLand = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-2 bg-[#f9fafe] shadow-sm border-teal-800">
      {/* Logo Section */}
      <div className="flex items-center justify-between w-full md:w-auto gap-2">
        <div className="flex items-center gap-2">
          <Link to={'/'}>
            <img src="/assets/Civilhubs/logo.png" alt="Ziro Logo" className="w-26 h-10" />
          </Link>
        </div>
        {/* Hamburger Menu for Mobile */}
        <button className="md:hidden" onClick={toggleMenu}>
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`flex-col md:flex-row  md:gap-7 mr-2 text-gray-700 font-medium mt-2 md:mt-0 ${isMenuOpen ? 'flex' : 'hidden'} md:flex w-full  md:w-auto items-end md:items-start ml-auto `}>
        <Link to={'/'} className="hover:text-teal-500 py-2 md:py-0">Home</Link>
        {/* <Link to="/" className="hover:text-teal-500 py-2 md:py-0">Service</Link> */}
        <Link to="/detailblog" className="hover:text-teal-500 py-2 md:py-0">Blogs</Link>
        {/* <Link to="/" className="hover:text-teal-500 py-2 md:py-0">About Us</Link> */}
      </div>

      {/* Search and Auth Buttons */}
      <div className={`flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0  w-full md:w-auto ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search here..."
            className="rounded-full pl-6 pr-10 py-2 w-full shadow-inner"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto">
          <Link to={'/login'} className="w-full md:w-auto">
            <button variant="outline" className="rounded-full px-4 md:px-6 py-1 md:py-2 bg-teal-500  hover:bg-teal-600 text-white w-full">
              Log In
            </button>
          </Link>

          <Link to={'/signup'} className="w-full md:w-auto">
            <button className="rounded-full px-4 md:px-6 py-1 md:py-2 bg-teal-500 hover:bg-teal-600
             text-white w-full">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLand;
// export default Navbar; 
import React, { useState } from "react";
import { Search, Menu, User } from "lucide-react"; // Import User icon for profile
import { Link, useNavigate } from "react-router-dom";
const logoImg = "/assets/Civilhubs/logo.png";




const NavbarProperty = () => {
    const navigate=useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    // Handle logout logic here

    navigate('/');
    console.log("Logged out");
  };

  return (
    <nav className="sticky top-0 z-50 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-2 bg-[#f9fafe] shadow-sm border-teal-800">
      {/* Logo Section */}
      <div className="flex items-center justify-between w-full sm:w-auto gap-2">
        <div className="flex items-center gap-2">
          <Link to={'/propertyownerhome'}>
            <img src={logoImg} alt="Ziro Logo" className="w-26 h-10" />
          </Link>
        </div>
        {/* Hamburger Menu for Mobile */}
        <button className="sm:hidden" onClick={toggleMobileMenu}>
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>
  
      {/* Navigation Links */}
      <div className={`flex-col sm:flex-row gap-4 sm:gap-9 text-gray-700 font-medium mt-2 sm:mt-0 sm:ml-auto mr-10 ${mobileMenuOpen ? 'flex' : 'hidden'} sm:flex`}>
        <Link to={'/propertyownerhome'} className="hover:text-[#0177cd]">Home</Link>
        <Link to="/myorders" className="hover:text-[#0177cd]">My Orders</Link>
        <Link to="/chatownerside" className="hover:text-[#0177cd]">Messages</Link>
      </div>
  
      {/* Search and Profile Dropdown */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0 w-full sm:w-auto">
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search here..."
            className="rounded-full pl-6 pr-10 py-2 w-full shadow-inner"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
  
        {/* Profile Logo with Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200"
          >
            <User  className="w-6 h-6 text-gray-700" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <Link to="/ownerprofile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">View Profile</Link>
              <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarProperty;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile hamburger menu
  const [activeDropdown, setActiveDropdown] = useState(null); // Track open dropdowns

  // Toggles dropdown state for desktop view
  const toggleDropdown = (category) =>
    setActiveDropdown(activeDropdown === category ? null : category);

  // Closes dropdown and mobile menu
  const closeMenus = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const categories = [
    { name: "Hot Entertainment", path: "/hot-entertainment" },
    { name: "Music", path: "/music" },
    { name: "Traditional Art", path: "/traditional-art" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/career" },
  ];

  const NavLink = ({ to, children, hasDropdown, category }) => (
    <div className="relative group">
      <Link
        to={to}
        className="text-neonGreen hover:text-white transition-colors px-4 py-2"
        onClick={() => toggleDropdown(category)}
      >
        {children}
      </Link>
      {hasDropdown && (
        <div
          className={`absolute left-0 mt-2 w-48 bg-black border border-neonGreen rounded-md shadow-lg z-50 ${
            activeDropdown === category ? "block" : "hidden"
          }`}
        >
          <Link
            to={`${to}/bollywood`}
            className="block px-4 py-2 text-sm text-neonGreen hover:bg-neonGreen hover:text-black"
            onClick={closeMenus}
          >
            Bollywood
          </Link>
          <Link
            to={`${to}/hollywood`}
            className="block px-4 py-2 text-sm text-neonGreen hover:bg-neonGreen hover:text-black"
            onClick={closeMenus}
          >
            Hollywood
          </Link>
        </div>
      )}
    </div>
  );

  const MobileNavLink = ({ to, children, hasDropdown, category }) => (
    <div className="py-2">
      {hasDropdown ? (
        <button
          onClick={() => toggleDropdown(category)}
          className="w-full text-left text-neonGreen hover:text-white transition-colors py-2"
        >
          {children}
        </button>
      ) : (
        <Link
          to={to}
          className="w-full text-left text-neonGreen hover:text-white transition-colors py-2"
          onClick={closeMenus}
        >
          {children}
        </Link>
      )}
      {hasDropdown && activeDropdown === category && (
        <div className="pl-4 space-y-2">
          <Link
            to={`${to}/bollywood`}
            className="block text-neonGreen hover:text-white py-2"
            onClick={closeMenus}
          >
            Bollywood
          </Link>
          <Link
            to={`${to}/hollywood`}
            className="block text-neonGreen hover:text-white py-2"
            onClick={closeMenus}
          >
            Hollywood
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <nav className="bg-gradient-to-r from-black via-gray-800 to-black p-4 fixed top-0 left-0 right-0 z-50 border-b-2 border-neonGreen shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-0">
          <Link to="/">
            <img src={logo} alt="EVS Network Logo" className="h-12 w-auto" />
          </Link>
          <Link to="/" className="text-white text-lg font-bold">
            Evosynchtech
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          {categories.map((category) => (
            <NavLink
              key={category.path}
              to={category.path}
              hasDropdown={[
                "Hot Entertainment",
                "Music",
                "Traditional Art",
              ].includes(category.name)}
              category={category.name}
            >
              {category.name}
            </NavLink>
          ))}
          <NavLink to="/about-us">About Us</NavLink>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neonGreen focus:outline-none transition-transform duration-300"
        >
          <svg
            className={`w-6 h-6 transform ${isOpen ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 bg-black border-t border-neonGreen shadow-lg">
          <MobileNavLink to="/" hasDropdown={false}>
            Home
          </MobileNavLink>
          {categories.map((category) => (
            <MobileNavLink
              key={category.path}
              to={category.path}
              hasDropdown={[
                "Hot Entertainment",
                "Music",
                "Traditional Art",
              ].includes(category.name)}
              category={category.name}
            >
              {category.name}
            </MobileNavLink>
          ))}
          <MobileNavLink to="/about-us" hasDropdown={false}>
            About Us
          </MobileNavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;





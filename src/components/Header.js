import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative bg-blackBg min-h-screen flex flex-col justify-between text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blackBg to-neonGreen opacity-60"></div>

      <nav className="w-full px-4 sm:px-6 py-4 flex justify-between items-center text-white bg-blackBg">
        <h1 className="text-neonGreen text-2xl sm:text-3xl font-bold">
          EVS Network
        </h1>

        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-neonGreen focus:outline-none"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex space-x-4 sm:space-x-6">
          <Link to="/" className="hover:text-neonGreen">
            Home
          </Link>
          <Link to="/hot-entertainment" className="hover:text-neonGreen">
            Hot Entertainment
          </Link>
          <Link to="/music" className="hover:text-neonGreen">
            Music
          </Link>
          <Link to="/traditional-art" className="hover:text-neonGreen">
            Traditional Art
          </Link>
          <Link to="/about-us" className="hover:text-neonGreen">
            About Us
          </Link>
        </div>
      </nav>

      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } bg-blackBg text-white px-4 py-2`}
      >
        <Link to="/" className="block py-2 hover:text-neonGreen">
          Home
        </Link>
        <Link
          to="/hot-entertainment"
          className="block py-2 hover:text-neonGreen"
        >
          Hot Entertainment
        </Link>
        <Link to="/music" className="block py-2 hover:text-neonGreen">
          Music
        </Link>
        <Link to="/traditional-art" className="block py-2 hover:text-neonGreen">
          Traditional Art
        </Link>
        <Link to="/about-us" className="block py-2 hover:text-neonGreen">
          About Us
        </Link>
      </div>

      <div className="z-10 flex-grow flex flex-col justify-center items-center px-4">
        <h1 className="text-neonGreen text-4xl sm:text-6xl font-bold mb-4 sm:mb-6 animate-glow">
          EVS Network
        </h1>
        <p className="text-white text-lg sm:text-xl mb-6 sm:mb-10">
          The Premier Source for Glamour & Art Updates
        </p>
        <a
          href="/hot-entertainment"
          className="bg-neonGreen text-blackBg px-6 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-neonGreen transition-all shadow-lg"
        >
          Discover Hot Entertainment
        </a>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center">
        <div className="text-neonGreen text-2xl sm:text-3xl animate-bounce">
          ▼
        </div>
      </div>
    </header>
  );
};

export default Header;





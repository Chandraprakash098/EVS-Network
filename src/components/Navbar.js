
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleDropdown = (category) => {
//     setActiveDropdown(activeDropdown === category ? null : category);
//   };

//   const categories = [
//     { name: "Hot Entertainment", path: "/hot-entertainment" },
//     { name: "Music", path: "/music" },
//     { name: "Traditional Art", path: "/traditional-art" },
//   ];

//   const NavLink = ({ to, children, hasDropdown, category }) => (
//     <div className="relative group">
//       <Link
//         to={to}
//         className="text-neonGreen hover:text-white transition-colors px-3 py-2"
//         onClick={() => toggleDropdown(category)}
//       >
//         {children}
//       </Link>
//       {hasDropdown && (
//         <div
//           className={`absolute left-0 mt-2 w-48 bg-blackBg border border-neonGreen rounded-md shadow-lg z-50 ${
//             activeDropdown === category ? "block" : "hidden"
//           } group-hover:block`}
//         >
//           <Link
//             to={`${to}/bollywood`}
//             className="block px-4 py-2 text-sm text-neonGreen hover:bg-neonGreen hover:text-blackBg"
//           >
//             Bollywood
//           </Link>
//           <Link
//             to={`${to}/hollywood`}
//             className="block px-4 py-2 text-sm text-neonGreen hover:bg-neonGreen hover:text-blackBg"
//           >
//             Hollywood
//           </Link>
//         </div>
//       )}
//     </div>
//   );

//   const MobileNavLink = ({ to, onClick, children, hasDropdown, category }) => (
//     <div className="py-2">
//       <button
//         onClick={() => toggleDropdown(category)}
//         className="w-full text-left text-neonGreen hover:text-white transition-colors py-2"
//       >
//         {children}
//       </button>
//       {hasDropdown && activeDropdown === category && (
//         <div className="pl-4 space-y-2">
//           <Link
//             to={`${to}/bollywood`}
//             className="block text-neonGreen hover:text-white py-2"
//             onClick={() => {
//               onClick();
//               setIsOpen(false);
//             }}
//           >
//             Bollywood
//           </Link>
//           <Link
//             to={`${to}/hollywood`}
//             className="block text-neonGreen hover:text-white py-2"
//             onClick={() => {
//               onClick();
//               setIsOpen(false);
//             }}
//           >
//             Hollywood
//           </Link>
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <nav className="bg-blackBg p-4 fixed top-0 left-0 right-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-neonGreen text-2xl sm:text-3xl font-bold">
//           EVS Network
//         </div>
//         <div className="hidden md:flex space-x-4">
//           <NavLink to="/">Home</NavLink>
//           {categories.map((category) => (
//             <NavLink
//               key={category.path}
//               to={category.path}
//               hasDropdown={true}
//               category={category.name}
//             >
//               {category.name}
//             </NavLink>
//           ))}
//           <NavLink to="/about-us">About Us</NavLink>
//         </div>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-neonGreen focus:outline-none transition-transform duration-300 ease-in-out"
//         >
//           <svg
//             className={`w-6 h-6 transform ${isOpen ? 'rotate-90' : ''}`}
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </button>
//       </div>
//       {isOpen && (
//         <div className="md:hidden mt-4 space-y-2 bg-blackBg border-t border-neonGreen">
//           <MobileNavLink to="/" onClick={() => setIsOpen(false)}>
//             Home
//           </MobileNavLink>
//           {categories.map((category) => (
//             <MobileNavLink
//               key={category.path}
//               to={category.path}
//               onClick={() => {}}
//               hasDropdown={true}
//               category={category.name}
//             >
//               {category.name}
//             </MobileNavLink>
//           ))}
//           <MobileNavLink to="/about-us" onClick={() => setIsOpen(false)}>
//             About Us
//           </MobileNavLink>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (category) =>
    setActiveDropdown(activeDropdown === category ? null : category);

  const categories = [
    { name: "Hot Entertainment", path: "/hot-entertainment" },
    { name: "Music", path: "/music" },
    { name: "Traditional Art", path: "/traditional-art" },
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
          >
            Bollywood
          </Link>
          <Link
            to={`${to}/hollywood`}
            className="block px-4 py-2 text-sm text-neonGreen hover:bg-neonGreen hover:text-black"
          >
            Hollywood
          </Link>
        </div>
      )}
    </div>
  );

  const MobileNavLink = ({ to, onClick, children, hasDropdown, category }) => (
    <div className="py-2">
      <button
        onClick={() => toggleDropdown(category)}
        className="w-full text-left text-neonGreen hover:text-white transition-colors py-2"
      >
        {children}
      </button>
      {hasDropdown && activeDropdown === category && (
        <div className="pl-4 space-y-2">
          <Link
            to={`${to}/bollywood`}
            className="block text-neonGreen hover:text-white py-2"
            onClick={() => {
              onClick();
              setIsOpen(false);
            }}
          >
            Bollywood
          </Link>
          <Link
            to={`${to}/hollywood`}
            className="block text-neonGreen hover:text-white py-2"
            onClick={() => {
              onClick();
              setIsOpen(false);
            }}
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
        {/* Logo */}
        <div className="text-neonGreen text-3xl font-extrabold tracking-wide">
          EVS Network
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          {categories.map((category) => (
            <NavLink
              key={category.path}
              to={category.path}
              hasDropdown={true}
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
          <MobileNavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </MobileNavLink>
          {categories.map((category) => (
            <MobileNavLink
              key={category.path}
              to={category.path}
              onClick={() => {}}
              hasDropdown={true}
              category={category.name}
            >
              {category.name}
            </MobileNavLink>
          ))}
          <MobileNavLink to="/about-us" onClick={() => setIsOpen(false)}>
            About Us
          </MobileNavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

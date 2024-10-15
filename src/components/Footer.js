// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-blackBg p-6 sm:p-10 text-center text-neonGreen border-t border-neonGreen">
//       <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6">
//         <a href="/" className="hover:text-white">
//           Facebook
//         </a>
//         <a href="/hot-entertainment" className="hover:text-white">
//           instagram
//         </a>
//         <a href="/music" className="hover:text-white">
//           Linkedin
//         </a>
//       </div>
//       <p className="text-xs sm:text-sm">
//         © 2024 Chandra  | All Rights Reserved
//       </p>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black p-8 sm:p-16 text-neonGreen border-t border-neonGreen">
      {/* Top Section: Quick Links and Contact Form */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Quick Links */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <a href="/hot-entertainment" className="hover:text-white transition-colors">Hot Entertainment</a>
          <a href="/music" className="hover:text-white transition-colors">Music</a>
          <a href="/about-us" className="hover:text-white transition-colors">About Us</a>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 bg-gray-800 text-white border border-neonGreen/50 rounded focus:outline-none focus:ring-2 focus:ring-neonGreen"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 bg-gray-800 text-white border border-neonGreen/50 rounded focus:outline-none focus:ring-2 focus:ring-neonGreen"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 bg-gray-800 text-white border border-neonGreen/50 rounded h-32 focus:outline-none focus:ring-2 focus:ring-neonGreen"
            ></textarea>
            <button
              type="submit"
              className="p-3 bg-neonGreen text-black rounded hover:bg-electricBlue transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
          <p className="flex items-center space-x-3">
            <FaEnvelope /> <span>support@evsnetwork.com</span>
          </p>
          <p className="flex items-center space-x-3">
            <FaPhoneAlt /> <span>+1-234-567-890</span>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-neonGreen/50 my-8"></div>

      {/* Bottom Section: Social Links and Copyright */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* Social Links */}
        <div className="flex space-x-6 mb-4 sm:mb-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-xs sm:text-sm text-gray-400">
          © 2024 Chandra | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

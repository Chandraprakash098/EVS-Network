import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

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
            <FaEnvelope /> <span>evosynchtech@gmail.com</span>
          </p>
          <p className="flex items-center space-x-3">
            <FaPhoneAlt /> <span>+91 8957128328</span>
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
            href="https://api.whatsapp.com/send?phone=8957128328"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://www.instagram.com/evosynchtech/?igsh=ZHBvNGE5anl1aDZq"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/evosynchtech/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-xs sm:text-sm text-gray-400">
        Copyrights © 2024. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

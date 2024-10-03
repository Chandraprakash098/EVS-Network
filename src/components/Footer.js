import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blackBg p-6 sm:p-10 text-center text-neonGreen border-t border-neonGreen">
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6">
        <a href="/" className="hover:text-white">
          Facebook
        </a>
        <a href="/hot-entertainment" className="hover:text-white">
          instagram
        </a>
        <a href="/music" className="hover:text-white">
          Linkedin
        </a>
      </div>
      <p className="text-xs sm:text-sm">
        © 2024 Chandra Prakash | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

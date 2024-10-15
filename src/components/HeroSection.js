import React, { useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const HeroSection = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const handleMouseMove = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      button.style.setProperty("--x", x);
      button.style.setProperty("--y", y);
    };
    button.addEventListener("mousemove", handleMouseMove);
    return () => button.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute w-48 h-48 bg-electricBlue rounded-full opacity-30 animate-float blur-lg top-10 left-10"></div>
      <div className="absolute w-32 h-32 bg-neonGreen rounded-full opacity-40 animate-float-delay blur-xl bottom-16 right-20"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-12">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-neonGreen animate-fadeIn">
          Welcome to EVS Network
        </h1>
        <p className="font-body text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto animate-fadeIn delay-100">
          Stay Updated with the Latest Trends in Entertainment, Music, and Art!
        </p>

        {/* Call to Action Button */}
        <a
          href="/hot-entertainment"
          ref={buttonRef}
          className="group relative inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-neonGreen/20 text-neonGreen border border-neonGreen/50 rounded-full text-lg font-medium hover:bg-neonGreen hover:text-black transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
        >
          <span className="relative z-10">Explore Entertainment</span>
          <span
            className="absolute inset-0 bg-gradient-to-r from-neonGreen to-electricBlue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              transform:
                "translate(calc(var(--x, 0) * 100%), calc(var(--y, 0) * 100%))",
            }}
          ></span>
        </a>

        {/* Tagline Section */}
        <div className="mt-12 animate-fadeIn delay-200">
          <h3 className="text-2xl md:text-3xl font-semibold text-electricBlue mb-4">
            Your All-in-One Entertainment Hub
          </h3>
          <p className="font-body text-gray-400 max-w-md mx-auto">
            Discover what's trending in Bollywood, Hollywood, and Traditional Art. 
            Your journey into glamour starts here!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

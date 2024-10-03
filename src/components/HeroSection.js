

import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="relative bg-blackBg min-h-screen flex items-center justify-center px-4 sm:px-6">
//       <div className="text-center z-10">
//         <h1 className="text-neonGreen text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
//           Welcome to EVS Network
//         </h1>
//         <p className="text-white text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10">
//           Your Ultimate Destination for Glamour and Entertainment Updates
//         </p>
//         <a
//           href="/hot-entertainment"
//           className="bg-neonGreen text-blackBg px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-neonGreen transition-all"
//         >
//           Explore Hot Entertainment
//         </a>
//       </div>
//       <div className="absolute inset-0 bg-blackBg opacity-60"></div>
//     </section>
//   );
// };

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--neon-green)_0%,_transparent_100%)] opacity-10" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-glow">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neonGreen to-white">
          EVS Network
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Your Ultimate Destination for Glamour and Entertainment Updates
      </p>
      <a
        href="/hot-entertainment"
        className="inline-flex items-center px-8 py-4 bg-neonGreen/20 text-neonGreen border border-neonGreen/50 rounded-full text-lg font-medium hover:bg-neonGreen hover:text-black transition-all duration-300 transform hover:-translate-y-1"
      >
        Explore Entertainment
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </a>
    </div>
  </section>
);

export default HeroSection;



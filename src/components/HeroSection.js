// import React, { useEffect, useRef } from "react";
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

// const HeroSection = () => {
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     const button = buttonRef.current;
//     const handleMouseMove = (e) => {
//       const { left, top, width, height } = button.getBoundingClientRect();
//       const x = (e.clientX - left) / width;
//       const y = (e.clientY - top) / height;
//       button.style.setProperty("--x", x);
//       button.style.setProperty("--y", y);
//     };
//     button.addEventListener("mousemove", handleMouseMove);
//     return () => button.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
//       {/* Floating Background Elements */}
//       <div className="absolute w-48 h-48 bg-electricBlue rounded-full opacity-30 animate-float blur-lg top-10 left-10"></div>
//       <div className="absolute w-32 h-32 bg-neonGreen rounded-full opacity-40 animate-float-delay blur-xl bottom-16 right-20"></div>

//       {/* Hero Content */}
//       <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-12">
//         <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-neonGreen animate-fadeIn">
//           Welcome to EVS Network
//         </h1>
//         <p className="font-body text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto animate-fadeIn delay-100">
//           Stay Updated with the Latest Trends in Entertainment, Music, and Art!
//         </p>

//         {/* Call to Action Button */}
//         <a
//           href="/hot-entertainment"
//           ref={buttonRef}
//           className="group relative inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-neonGreen/20 text-neonGreen border border-neonGreen/50 rounded-full text-lg font-medium hover:bg-neonGreen hover:text-black transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
//         >
//           <span className="relative z-10">Explore Entertainment</span>
//           <span
//             className="absolute inset-0 bg-gradient-to-r from-neonGreen to-electricBlue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             style={{
//               transform:
//                 "translate(calc(var(--x, 0) * 100%), calc(var(--y, 0) * 100%))",
//             }}
//           ></span>
//         </a>

//         {/* Tagline Section */}
//         <div className="mt-12 animate-fadeIn delay-200">
//           <h3 className="text-2xl md:text-3xl font-semibold text-electricBlue mb-4">
//             Your All-in-One Entertainment Hub
//           </h3>
//           <p className="font-body text-gray-400 max-w-md mx-auto">
//             Discover what's trending in Bollywood, Hollywood, and Traditional Art. 
//             Your journey into glamour starts here!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import img1 from '../images/pexels-fotios-photos-9869981.jpg'
import img2 from '../images/pexels-adrien-olichon-1257089-3709369.jpg'
import img3 from '../images/pexels-benjamin-dominguez-3363409-16725692.jpg'
import img4 from '../images/pexels-cedric-fauntleroy-7221517.jpg'
import img5 from '../images/pexels-suissounet-1200450.jpg'
import img6 from '../images/pexels-thatguycraig000-1670057.jpg'


const HeroSection = () => {
  const buttonRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    img1,
    img2,
    img3,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Floating Background Elements */}
      <div className="absolute w-48 h-48 bg-electricBlue rounded-full opacity-30 animate-float blur-lg top-10 left-10 md:w-64 md:h-64 lg:w-80 lg:h-80"></div>
      <div className="absolute w-32 h-32 bg-neonGreen rounded-full opacity-40 animate-float-delay blur-xl bottom-16 right-20 md:w-48 md:h-48 lg:w-56 lg:h-56"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 mt-16 sm:mt-0">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neonGreen to-electricBlue animate-pulse">
          Welcome to EVS Network
        </h1>
        <p className="font-body text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fadeIn delay-100 leading-relaxed">
          Stay Updated with the Latest Trends in Entertainment, Music, and Art!
        </p>

        {/* Call to Action Button */}
        <a
          href="/hot-entertainment"
          ref={buttonRef}
          className="group relative inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-neonGreen/20 text-neonGreen border border-neonGreen/50 rounded-full text-lg font-medium hover:bg-neonGreen hover:text-black transition-all duration-300 transform hover:-translate-y-1 overflow-hidden shadow-lg hover:shadow-neonGreen/50"
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
        <div className="mt-16 animate-fadeIn delay-200">
          <h3 className="text-2xl md:text-3xl font-semibold text-electricBlue mb-4 animate-bounce">
            Your All-in-One Entertainment Hub
          </h3>
          <p className="font-body text-gray-300 max-w-md mx-auto text-lg leading-relaxed">
            Discover what's trending in Bollywood, Hollywood, and Traditional Art. 
            Your journey into glamour starts here!
          </p>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neonGreen mb-12 animate-pulse">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-neonGreen/30 transition-shadow duration-300 transform hover:-translate-y-1">
            <h4 className="font-semibold text-xl mb-3 text-electricBlue">Latest News</h4>
            <p className="text-gray-300 leading-relaxed">
              Get the latest updates from the entertainment industry, including movie releases, music launches, and art exhibitions.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-neonGreen/30 transition-shadow duration-300 transform hover:-translate-y-1">
            <h4 className="font-semibold text-xl mb-3 text-electricBlue">Expert Reviews</h4>
            <p className="text-gray-300 leading-relaxed">
              Our expert reviewers bring you in-depth analysis and reviews of the latest movies, music, and artistic trends.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-neonGreen/30 transition-shadow duration-300 transform hover:-translate-y-1">
            <h4 className="font-semibold text-xl mb-3 text-electricBlue">Community Engagement</h4>
            <p className="text-gray-300 leading-relaxed">
              Join a vibrant community of entertainment enthusiasts, share your opinions, and participate in exciting discussions.
            </p>
          </div>
        </div>

        {/* Trending Events Section */}
        <div className="mt-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neonGreen mb-12 animate-pulse">Trending Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-neonGreen/30 transition-shadow duration-300 transform hover:-translate-y-1">
              <img src={img4} alt="Event 1" className="w-full h-80 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-xl mb-2 text-electricBlue">Bollywood Music Festival</h4>
                <p className="text-gray-300 leading-relaxed">Join us for a night of spectacular performances and music!</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-neonGreen/30 transition-shadow duration-300 transform hover:-translate-y-1">
              <img src={img5} alt="Event 2" className="w-full h-80 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-xl mb-2 text-electricBlue">Hollywood Movie Premiere</h4>
                <p className="text-gray-300 leading-relaxed">Be the first to witness the latest blockbuster hit!</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-neonGreen/30 transition-shadow duration-300 transform hover:-translate-y-1">
              <img src={img6} alt="Event 3" className="w-full h-80 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-xl mb-2 text-electricBlue">Art Exhibition Opening</h4>
                <p className="text-gray-300 leading-relaxed">Explore stunning artworks and meet the artists behind them.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neonGreen mb-12 animate-pulse">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-neonGreen/30 transition-shadow duration-300">
              <p className="text-gray-300 mb-4 italic leading-relaxed">"EVS Network keeps me updated on all things entertainment! Highly recommend!"</p>
              <p className="text-electricBlue font-semibold">- Alex</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-neonGreen/30 transition-shadow duration-300">
              <p className="text-gray-300 mb-4 italic leading-relaxed">"The reviews are spot on! I trust their recommendations."</p>
              <p className="text-electricBlue font-semibold">- Jamie</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-neonGreen/30 transition-shadow duration-300">
              <p className="text-gray-300 mb-4 italic leading-relaxed">"I love the community discussions, it's always fun!"</p>
              <p className="text-electricBlue font-semibold">- Taylor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React from "react";
import CategorySection from "../components/CategorySection";
import img1 from '../images/pexels-felicity-tai-7964353.jpg'
import img2 from '../images/pexels-you-know-what-blog-822152095-20294181.jpg'
import img3 from '../images/pexels-cottonbro-3843284.jpg'
import img4 from '../images/pexels-followingnyc-19698926.jpg'
import img5 from '../images/pexels-jdgromov-4662303.jpg'
import img6 from '../images/pexels-cottonbro-4009402.jpg'

const HotEntertainment = () => {
  const categoryData = [
    {
      title: "Bollywood Gossip",
      image: img1,
      description:
        "The juiciest gossip from Bollywood’s most talked-about stars.",
      link: "/hot-entertainment/bollywood-gossip",
    },
    {
      title: "Hollywood Drama",
      image: img2,
      description:
        "All the latest Hollywood news, gossip, and behind-the-scenes drama.",
      link: "/hot-entertainment/hollywood-drama",
    },
    {
      title: "Upcoming Blockbusters",
      image: img3,
      description:
        "Exciting trailers and first looks at the most anticipated movies.",
      link: "/hot-entertainment/upcoming-blockbusters",
    },
    {
      title: "Celebrity Fashion Trends",
      image: img4,
      description:
        "Discover the latest fashion trends from your favorite celebrities.",
      link: "/hot-entertainment/celebrity-fashion",
    },
    {
      title: "Music Awards Highlights",
      image: img5,
      description:
        "Recap of the most glamorous moments from recent music awards.",
      link: "/hot-entertainment/music-awards",
    },
    {
      title: "OTT Series to Binge",
      image: img6,
      description:
        "Top picks from Netflix, Amazon Prime, and other streaming platforms.",
      link: "/hot-entertainment/ott-series",
    },
  ];

  return (
    <div className="bg-blackBg min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blackBg py-24 sm:py-24 text-center">
        {/* Top Padding to Avoid Navbar Overlap */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neonGreen to-black opacity-70"></div>
        <div className="relative z-10 text-neonGreen px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 ">
            Hot Entertainment
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-10 max-w-2xl mx-auto">
            Stay updated on the latest glamour, fashion, and entertainment from Bollywood and Hollywood.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto px-6 py-10 sm:py-14">
        <h2 className="text-Green text-3xl sm:text-4xl font-bold mb-8">
          What's Hot
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.map((article, index) => (
            <div
              key={index}
              className="bg-black border border-neonGreen rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={article.image}
                className="w-full h-70 object-cover"
              />
              <div className="p-6">
                <h3 className="text-neonGreen text-2xl font-semibold mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-base mb-4">
                  {article.description}
                </p>
                <a
                  href={article.link}
                  className="text-white underline hover:text-neonGreen"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HotEntertainment;

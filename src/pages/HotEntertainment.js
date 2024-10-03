import React from "react";
import CategorySection from "../components/CategorySection";

const HotEntertainment = () => {
  const categoryData = [
    {
      title: "Bollywood Gossip",
      image: "image1",
      description:
        "The juiciest gossip from Bollywood’s most talked about stars.",
      link: "/hot-entertainment",
    },
    {
      title: "Hollywood Drama",
      image: "path/to/hollywood-drama.jpg",
      description:
        "All the latest Hollywood news, gossip, and behind-the-scenes drama.",
      link: "/hot-entertainment",
    },
    {
      title: "Upcoming Blockbusters",
      image: "path/to/upcoming-blockbusters.jpg",
      description:
        "Exciting trailers and first looks at the most anticipated movies.",
      link: "/hot-entertainment",
    },
  ];

  return (
    <div>
      <section className="relative bg-blackBg py-12 sm:py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blackBg via-neonGreen to-blackBg opacity-70"></div>
        <div className="relative z-10 text-neonGreen px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 animate-glow">
            Hot Entertainment
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-10">
            Stay updated on all the latest glamour from Bollywood and Hollywood.
          </p>
        </div>
      </section>

      <CategorySection title="What's Hot" articles={categoryData} />
    </div>
  );
};

export default HotEntertainment;




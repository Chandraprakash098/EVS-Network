import React from "react";
import CategorySection from "../components/CategorySection";

const Music = () => {
  const categoryData = [
    {
      title: "Bollywood Beats",
      image: "path/to/bollywood-beats.jpg",
      description:
        "Explore the latest music hits from Bollywood’s top artists.",
      link: "/music",
    },
    {
      title: "Hollywood Tracks",
      image: "path/to/hollywood-tracks.jpg",
      description:
        "Catch up with the latest music releases from Hollywood’s finest.",
      link: "/music",
    },
    {
      title: "Global Artists",
      image: "path/to/global-artists.jpg",
      description:
        "Discover the music that’s making waves worldwide, from Bollywood to Hollywood.",
      link: "/music",
    },
  ];

  return (
    <div>
      <section className="relative bg-blackBg py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blackBg via-neonGreen to-blackBg opacity-70"></div>
        <div className="relative z-10 text-neonGreen">
          <h1 className="text-6xl font-bold mb-6 animate-glow">Music</h1>
          <p className="text-white text-xl mb-10">
            Dive into the rhythms and beats that shape Bollywood and Hollywood.
          </p>
        </div>
      </section>

      <CategorySection title="Trending Music" categories={categoryData} />
    </div>
  );
};

export default Music;

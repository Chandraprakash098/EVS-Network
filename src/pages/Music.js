import React from "react";
import CategorySection from "../components/CategorySection";
import img1 from '../images/pexels-joshsorenson-995301.jpg'
import img2 from '../images/pexels-abhinna-28939990.jpg'
import img3 from '../images/pexels-olly-3769118.jpg'
import img4 from '../images/pexels-ninauhlikova-725255.jpg'
import img5 from '../images/pexels-cottonbro-5082566.jpg'
 import img6 from '../images/pexels-wendywei-1190297.jpg'


const Music = () => {
  const categoryData = [
    {
      title: "Bollywood Beats",
      image: img1,
      description:
        "Explore the latest music hits from Bollywood’s top artists, with beats that make you groove.",
      link: "/music/bollywood",
    },
    {
      title: "Hollywood Tracks",
      image: img2,
      description:
        "Stay up-to-date with the latest music releases from Hollywood's biggest names and freshest talents.",
      link: "/music/hollywood",
    },
    {
      title: "Global Artists",
      image: img3,
      description:
        "Discover the global music scene that connects cultures, with tracks from international sensations.",
      link: "/music/global",
    },
    {
      title: "Top Playlists",
      image: img4,
      description:
        "Listen to the most popular playlists of the season, curated for every mood and occasion.",
      link: "/music/playlists",
    },
    {
      title: "Live Performances",
      image: img5,
      description:
        "Experience the energy of live music with performances from the world's biggest artists.",
      link: "/music/live",
    },
    {
      title: "Music Festivals",
      image: img6,
      description:
        "Get the scoop on the most happening music festivals from Coachella to Sunburn.",
      link: "/music/festivals",
    },
  ];

  return (
    <div className="bg-blackBg min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blackBg py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blackBg via-neonGreen to-blackBg opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-6xl sm:text-7xl font-extrabold mb-3 text-Green animate-pulse">
            Music
          </h1>
          <p className="text-white text-lg sm:text-2xl mb-10 max-w-2xl mx-auto">
            Dive into rhythms, beats, and trends shaping the world of Bollywood, Hollywood, and beyond.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blackBg"></div>
      </section>

      {/* Category Section */}
      <section className="container mx-auto px-6 py-5">
        <h2 className="text-4xl sm:text-5xl font-bold text-Green text-center mb-10">
          Trending Music Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-black border border-Green rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300"
            >
              <img
                src={category.image}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-Green mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-300 text-base mb-4">
                  {category.description}
                </p>
                <a
                  href={category.link}
                  className="text-white underline hover:text-neonGreen"
                >
                  Explore &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Music;

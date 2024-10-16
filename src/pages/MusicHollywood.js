import React from "react";
import CategorySection from "../components/CategorySection";
import img1 from '../images/pexels-tima-miroshnichenko-6021586.jpg'
import img2 from '../images/pexels-wwarby-19588319.jpg'
import img3 from '../images/pexels-vishnurnair-1105666.jpg'
import img4 from '../images/pexels-masbet-christianto-1412741-5246036.jpg'
import img5 from '../images/pexels-luna-lovegood-4087401.jpg'
import img6 from '../images/pexels-benjamin-dominguez-3363409-16725692.jpg'

const MusicHollywood = () => {
  const articles = [
    {
      title: "Grammy Nominations: Surprises and Snubs",
      excerpt:
        "The Grammy nominations are out! We analyze the biggest surprises, snubs, and predict the likely winners on music's biggest night.",
      image: img1, // Update with valid image path
      link: "/music-hollywood/grammy-nominations",
    },
    {
      title: "The Evolution of Pop: From Beatles to Billie",
      excerpt:
        "From The Beatles to Billie Eilish, we trace the evolution of pop and how it continues to shape music across generations.",
      image: img2, // Update with valid image path
      link: "/music-hollywood/pop-evolution",
    },
    {
      title: "Virtual Concerts: The Future of Live Music?",
      excerpt:
        "Are virtual concerts here to stay? We explore the rise of online performances and what it means for the future of live shows.",
      image: img3, // Update with valid image path
      link: "/music-hollywood/virtual-concerts",
    },
    {
      title: "Hollywood's Most Iconic Movie Soundtracks",
      excerpt:
        "From 'Titanic' to 'Interstellar', explore the most memorable soundtracks that define Hollywood's finest films.",
      image: img4, // Update with valid image path
      link: "/music-hollywood/movie-soundtracks",
    },
    {
      title: "Top 10 Artists to Watch in 2024",
      excerpt:
        "Who are the artists set to make waves in 2024? We bring you the most promising rising stars to keep on your radar.",
      image: img5, // Update with valid image path
      link: "/music-hollywood/artists-to-watch",
    },
    {
      title: "How Streaming Changed the Music Industry Forever",
      excerpt:
        "Streaming services have revolutionized the way we consume music. We dive into the impact of this shift on artists and listeners alike.",
      image: img6, // Update with valid image path
      link: "/music-hollywood/streaming-impact",
    },
  ];

  return (
    <div className="bg-blackBg min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blackBg py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blackBg via-neonGreen to-blackBg opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-Green animate-pulse mb-6">
            Hollywood Music
          </h1>
          <p className="text-white text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Discover the latest trends, news, and insights into the evolving world of Hollywood’s music.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="container mx-auto px-6 py-5">
        <h2 className="text-4xl sm:text-5xl font-bold text-Green text-center mb-12">
          Trending Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-black border border-Green rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={article.image}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-Green mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-base mb-4">
                  {article.excerpt}
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

export default MusicHollywood;

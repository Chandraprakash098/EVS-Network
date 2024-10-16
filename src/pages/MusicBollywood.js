import React from "react";
import CategorySection from "../components/CategorySection";
import img1 from '../images/pexels-lopsan-1149616-2191013.jpg'
import img2 from '../images/pexels-rdne-8112576.jpg'
import img3 from '../images/pexels-mahmoud-yahyaoui-28920051.jpg'
import img4 from '../images/pexels-mutecevvil-19905185.jpg'
import img5 from '../images/pexels-patrick-black-jr-303526-878998.jpg'
import img6 from '../images/pexels-mikebirdy-114820.jpg'

const MusicBollywood = () => {
  const articles = [
    {
      title: "Arijit Singh's Latest Album Breaks Streaming Records",
      excerpt:
        "The 'King of Playback Singing' has done it again! Arijit Singh's new album 'Dil Ki Awaaz' is breaking all records on streaming platforms.",
      image: img1, // Update with valid path
      link: "/music-bollywood/arijit-album",
    },
    {
      title: "The Rise of Indie Music in Bollywood",
      excerpt:
        "Independent artists are making waves in Bollywood. Is this the start of a new era in Hindi film music?",
      image: img2, // Update with valid path
      link: "/music-bollywood/indie-music",
    },
    {
      title: "Nostalgia Trip: Recreating 90s Bollywood Hits",
      excerpt:
        "The trend of remixing 90s songs continues! Find out why these tracks still connect with audiences today.",
      image: img3, // Update with valid path
      link: "/music-bollywood/90s-hits",
    },
    {
      title: "Top Bollywood Playlists of 2024",
      excerpt:
        "From love ballads to dance numbers, explore the most popular Bollywood playlists trending this year.",
      image: img4, // Update with valid path
      link: "/music-bollywood/playlists",
    },
    {
      title: "A.R. Rahman Live Concert Experience",
      excerpt:
        "Step into the magical world of A.R. Rahman’s live concerts. A musical journey you don't want to miss.",
      image: img5, // Update with valid path
      link: "/music-bollywood/ar-rahman-concert",
    },
    {
      title: "The Evolution of Bollywood's Music Industry",
      excerpt:
        "How Bollywood's music has evolved over the decades, from classical hits to modern EDM beats.",
      image: img6, // Update with valid path
      link: "/music-bollywood/music-evolution",
    },
  ];

  return (
    <div className="bg-blackBg min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blackBg py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blackBg via-neonGreen to-blackBg opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-Green animate-pulse mb-6">
            Bollywood Music
          </h1>
          <p className="text-white text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Explore the heart and soul of Bollywood's music, from trending hits to classic melodies.
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

export default MusicBollywood;

import React from "react";
import CategorySection from "../components/CategorySection";

const HotEntertainmentBollywood = () => {
  const articles = [
    {
      title: "Bollywood's Biggest Stars Shine at Filmfare Awards",
      excerpt:
        "The 68th Filmfare Awards saw the cream of Bollywood talent gather for a night of glamour and celebration. Find out who took home the coveted Black Lady.",
      image: "path/to/filmfare-awards.jpg", // Add the image path
      link: "/hot-entertainment/bollywood/filmfare-awards", // Update the link
    },
    {
      title: "Upcoming Blockbuster: 'Mumbai Nights' Set to Dazzle",
      excerpt:
        "Director Anurag Kashyap's latest project 'Mumbai Nights' promises to be a visual spectacle. We've got the inside scoop on this star-studded production.",
      image: "path/to/mumbai-nights.jpg", // Add the image path
      link: "/hot-entertainment/bollywood/mumbai-nights", // Update the link
    },
    {
      title: "Fashion Face-Off: Deepika vs Priyanka",
      excerpt:
        "Two of Bollywood's biggest fashion icons go head-to-head. Who wore it better? Our style experts weigh in on their recent red carpet looks.",
      image: "path/to/fashion-face-off.jpg", // Add the image path
      link: "/hot-entertainment/bollywood/fashion-face-off", // Update the link
    },
    {
      title: "Behind the Scenes: Making of 'Kahaani 3'",
      excerpt:
        "Go behind the camera and see how the magic happens in the making of 'Kahaani 3' with exclusive interviews from the cast and crew.",
      image: "path/to/kahaani-3.jpg", // Add the image path
      link: "/hot-entertainment/bollywood/kahaani-3", // Update the link
    },
    {
      title: "A Celebration of Music: Top Bollywood Hits of 2024",
      excerpt:
        "From romantic ballads to dance anthems, discover the top Bollywood songs that are making waves this year.",
      image: "path/to/top-bollywood-hits.jpg", // Add the image path
      link: "/hot-entertainment/bollywood/top-bollywood-hits", // Update the link
    },
    {
      title: "Upcoming Movie Releases You Can't Miss",
      excerpt:
        "Mark your calendars! Here's a look at the most anticipated Bollywood movie releases coming soon to theaters.",
      image: "path/to/upcoming-movies.jpg", // Add the image path
      link: "/hot-entertainment/bollywood/upcoming-movies", // Update the link
    },
  ];

  return (
    <div className="bg-blackBg min-h-screen">
      <section className="relative bg-blackBg py-24 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-neonGreen">
          Bollywood Highlights
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-10 max-w-2xl mx-auto">
          Dive into the latest news, gossip, and trends from the glamorous world of Bollywood.
        </p>
      </section>

      {/* Articles Section */}
      <section className="container mx-auto px-6 py-5 sm:py-5">
        <h2 className="text-neonGreen text-3xl sm:text-4xl font-bold mb-8">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-black border border-neonGreen rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-neonGreen text-2xl font-semibold mb-3">
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

export default HotEntertainmentBollywood;

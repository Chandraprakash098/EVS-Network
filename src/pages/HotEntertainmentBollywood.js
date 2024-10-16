import React from "react";
import img1 from '../images/pexels-leeloothefirst-5715251.jpg'
import img2 from '../images/pexels-mikhail-nilov-8108569.jpg'
import img3 from '../images/pexels-eduardo-hernandez-soto-1315528681-28925178.jpg'
import img4 from '../images/pexels-kyleloftusstudios-2510430.jpg'
import img5 from '../images/pexels-rdne-6224302.jpg'
import img6 from '../images/pexels-tima-miroshnichenko-7991579.jpg'

const HotEntertainmentBollywood = () => {
  const articles = [
    {
      title: "Bollywood's Biggest Stars Shine at Filmfare Awards",
      excerpt:
        "The 68th Filmfare Awards saw the cream of Bollywood talent gather for a night of glamour and celebration. Find out who took home the coveted Black Lady.",
      image: img1,
      link: "/hot-entertainment/bollywood/filmfare-awards",
    },
    {
      title: "Upcoming Blockbuster: 'Mumbai Nights' Set to Dazzle",
      excerpt:
        "Director Anurag Kashyap's latest project 'Mumbai Nights' promises to be a visual spectacle. We've got the inside scoop on this star-studded production.",
      image: img2,
      link: "/hot-entertainment/bollywood/mumbai-nights",
    },
    {
      title: "Fashion Face-Off: Deepika vs Priyanka",
      excerpt:
        "Two of Bollywood's biggest fashion icons go head-to-head. Who wore it better? Our style experts weigh in on their recent red carpet looks.",
      image: img3,
      link: "/hot-entertainment/bollywood/fashion-face-off",
    },
    {
      title: "Behind the Scenes: Making of 'Kahaani 3'",
      excerpt:
        "Go behind the camera and see how the magic happens in the making of 'Kahaani 3' with exclusive interviews from the cast and crew.",
      image: img4,
      link: "/hot-entertainment/bollywood/kahaani-3",
    },
    {
      title: "A Celebration of Music: Top Bollywood Hits of 2024",
      excerpt:
        "From romantic ballads to dance anthems, discover the top Bollywood songs that are making waves this year.",
      image: img5,
      link: "/hot-entertainment/bollywood/top-bollywood-hits",
    },
    {
      title: "Upcoming Movie Releases You Can't Miss",
      excerpt:
        "Mark your calendars! Here's a look at the most anticipated Bollywood movie releases coming soon to theaters.",
      image: img6,
      link: "/hot-entertainment/bollywood/upcoming-movies",
    },
    
    
  ];

  return (
    <div className="bg-blackBg min-h-screen">
      <section className="relative bg-blackBg py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 mt-9 text-Green animate-pulse">
          Bollywood Highlights
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Dive into the latest news, gossip, and trends from the glamorous world of Bollywood.
        </p>
      </section>

      {/* Articles Section */}
      <section className="container mx-auto px-7 py-2">
        <h2 className="text-Green text-4xl font-extrabold mb-12 text-center">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-black via-gray-900 to-black border border-Green rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500"
            >
              <img
                src={article.image}
                // alt={article.title}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-green text-2xl font-semibold">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-base">{article.excerpt}</p>
                <a
                  href={article.link}
                  className="inline-block text-white underline hover:text-neonGreen transition-colors"
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

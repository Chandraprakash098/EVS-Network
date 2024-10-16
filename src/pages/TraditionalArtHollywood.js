import React from "react";

const TraditionalArtHollywood = () => {
  const articles = [
    {
      title: "Hollywood's Love Affair with Broadway",
      excerpt:
        "From 'West Side Story' to 'Hamilton', we explore Hollywood's ongoing fascination with bringing Broadway hits to the big screen.",
    },
    {
      title: "The Renaissance of Practical Effects in Cinema",
      excerpt:
        "In an age of CGI, some filmmakers are returning to practical effects. We look at recent films championing this traditional art form.",
    },
    {
      title: "Preserving Classic Hollywood: Film Restoration Projects",
      excerpt:
        "Inside the painstaking process of restoring classic Hollywood films. How modern technology is helping preserve cinematic history.",
    },
    {
      title: "The Influence of Art Deco in Classic Hollywood",
      excerpt:
        "Discover how Art Deco architecture and design left a lasting impact on the Golden Age of Hollywood cinema.",
    },
    {
      title: "Costume Design: The Unsung Heroes of Hollywood",
      excerpt:
        "A look into the intricate world of costume design and how it elevates storytelling in films.",
    },
  ];

  return (
    <div className="bg-blackBg min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 text-center bg-blackBg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neonGreen to-black opacity-70"></div>
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-Green mb-3">
            Traditional Art in Hollywood
          </h1>
          <p className="text-white text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Dive into the rich heritage of Hollywood, where traditional arts and crafts continue to inspire modern filmmaking.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="container mx-auto px-6 py-5">
        <h2 className="text-4xl sm:text-5xl font-bold text-Green text-center mb-12">
          Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-black border border-Green rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold text-Green mb-3">
                {article.title}
              </h3>
              <p className="text-gray-300 text-base mb-4">
                {article.excerpt}
              </p>
              <a
                href="#"
                className="text-white underline hover:text-neonGreen"
              >
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TraditionalArtHollywood;

import React from "react";

const TraditionalArtBollywood = () => {
  const articles = [
    {
      title: "Classical Dance in Modern Bollywood",
      excerpt:
        "How Bollywood is incorporating traditional dance forms like Kathak and Bharatanatyam into mainstream cinema. A blend of the old and the new.",
    },
    {
      title: "The Art of Bollywood Poster Making",
      excerpt:
        "Exploring the rich history and evolution of Bollywood poster art. From hand-painted masterpieces to digital designs.",
    },
    {
      title: "Reviving Folk Music in Hindi Cinema",
      excerpt:
        "Bollywood's renewed interest in folk music is bringing forgotten tunes back into the limelight. We look at some recent examples.",
    },
    {
      title: "The Influence of Sufi Music in Bollywood",
      excerpt:
        "Tracing the rise of Sufi-inspired tracks in Bollywood and how they connect with audiences emotionally.",
    },
    {
      title: "Handicrafts in Bollywood Set Design",
      excerpt:
        "A look at how traditional Indian handicrafts are influencing the design and aesthetics of Bollywood film sets.",
    },
  ];

  return (
    <div className="bg-blackBg min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 text-center bg-blackBg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neonGreen to-black opacity-70"></div>
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-Green  mb-6">
            Traditional Art in Bollywood
          </h1>
          <p className="text-white text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Discover the rich legacy of traditional arts and crafts that shape Bollywood’s cinematic brilliance.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="container mx-auto px-6 py-5">
        <h2 className="text-4xl sm:text-5xl font-bold text-neonGreen text-center mb-12">
          Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-black border border-neonGreen rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold text-neonGreen mb-3">
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

export default TraditionalArtBollywood;

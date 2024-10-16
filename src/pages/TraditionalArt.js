import React from "react";
import img1 from '../images/pexels-shiva-12165842-6214683.jpg'
import img2 from '../images/pexels-emtimmers-6541618.jpg'
import img3 from '../images/pexels-steve-28901841.jpg'
import img4 from '../images/pexels-cottonbro-9480465.jpg'

const TraditionalArt = () => {
  const categoryData = [
    {
      title: "Bollywood Classics",
      image: img1,
      description:
        "Experience the traditional artistry behind Bollywood films, where vibrant colors and soulful music converge.",
      link: "/traditional-art/bollywood-classics",
    },
    {
      title: "Hollywood Heritage",
      image: img2,
      description:
        "Explore the historical influences that shaped Hollywood's golden era and timeless cinematic gems.",
      link: "/traditional-art/hollywood-heritage",
    },
    {
      title: "Global Art Forms",
      image: img3,
      description:
        "Discover cultural expressions from around the globe, showcasing diversity in visual and performing arts.",
      link: "/traditional-art/global-art-forms",
    },
    {
      title: "Folk and Tribal Art",
      image: img4,
      description:
        "Immerse yourself in the beauty of folk and tribal art, passed down through generations.",
      link: "/traditional-art/folk-and-tribal",
    },
  ];

  return (
    <div className="bg-blackBg min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 text-center bg-blackBg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neonGreen to-black opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-Green mb-3">
            Traditional Art
          </h1>
          <p className="text-white text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Explore the timeless beauty of traditional art forms across cultures and generations.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-Green text-center mb-12">
          Art Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryData.map((category, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800 to-black border border-Green rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={category.image}
                
                className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity duration-300"
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
                  Explore More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TraditionalArt;

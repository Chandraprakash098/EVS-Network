import React from "react";
import CategorySection from "../components/CategorySection";
import img1 from '../images/pexels-rdne-7005696.jpg'
import img2 from '../images/pexels-cottonbro-6899768.jpg'
import img3 from '../images/pexels-tanja-nikolic-437546641-15586392.jpg'
import img4 from '../images/pexels-cottonbro-5082566.jpg'
import img5 from '../images/pexels-letssnacktoronto-1630344.jpg'
import img6 from '../images/pexels-askar-abayev-5638834.jpg'

const HotEntertainmentHollywood = () => {
  const articles = [
    {
      title: "Oscar Buzz: Predictions for This Year's Academy Awards",
      excerpt:
        "With the Oscars just around the corner, we break down the frontrunners in each category. Who will take home the golden statuette?",
      image: img1,
      link: "/hot-entertainment/hollywood/oscars",
    },
    {
      title: "Behind the Scenes: Marvel's Next Big Franchise",
      excerpt:
        "Exclusive insights into Marvel's latest project that's set to redefine the superhero genre. Get ready for a new era of cinematic magic.",
      image: img2,
      link: "/hot-entertainment/hollywood/marvel-franchise",
    },
    {
      title: "Hollywood's Power Couples: Who's Still Going Strong?",
      excerpt:
        "From Blake and Ryan to Tom and Zendaya, we look at the couples that are keeping love alive in Tinseltown.",
      image: img3,
      link: "/hot-entertainment/hollywood/power-couples",
    },
    {
      title: "Top 10 Must-Watch Movies of 2024",
      excerpt:
        "From blockbusters to indie gems, here’s our list of the top 10 Hollywood movies you can’t miss this year.",
      image: img4,
      link: "/hot-entertainment/hollywood/top-movies-2024",
    },
    {
      title: "Fashion Trends on the Red Carpet: Who Wore It Best?",
      excerpt:
        "The latest red carpet events gave us plenty of fashion inspiration. Here’s a look at some of the most talked-about outfits.",
      image: img5,
      link: "/hot-entertainment/hollywood/red-carpet",
    },
    {
      title: "Hollywood’s Rising Stars: Meet the Next Generation",
      excerpt:
        "Get to know the up-and-coming actors and actresses who are making waves in Hollywood and setting new trends.",
      image: img6,
      link: "/hot-entertainment/hollywood/rising-stars",
    },
  ];

  return (
    <div className="bg-blackBg min-h-screen py-10">
      <section className="text-center mt-20">
        <h1 className="text-5xl font-extrabold text-Green mb-4">
          Hollywood Highlights
        </h1>
        <p className="text-white text-lg max-w-2xl mx-auto mb-8">
          Explore the latest buzz, gossip, and trends in Hollywood.
        </p>
      </section>

      <section className="container mx-auto px-6 py-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-black via-gray-800 to-black border border-Green rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={article.image}
                // alt={article.title}
                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-Green text-2xl font-bold mb-3">
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

export default HotEntertainmentHollywood;

import React from "react";
import CategorySection from "../components/CategorySection";

const MusicHollywood = () => {
  const articles = [
    {
      title: "Grammy Nominations: Surprises and Snubs",
      excerpt:
        "The Grammy nominations are out! We analyze the biggest surprises, disappointing snubs, and predict who'll win big on music's biggest night.",
    },
    {
      title: "The Evolution of Pop: From Beatles to Billie",
      excerpt:
        "Tracing the journey of pop music from the British Invasion to today's chart-toppers. How has the sound of pop evolved over the decades?",
    },
    {
      title: "Virtual Concerts: The Future of Live Music?",
      excerpt:
        "With technology advancing rapidly, are virtual concerts here to stay? We explore the pros and cons of this new form of musical experience.",
    },
  ];

  return (
    <CategorySection
      category="Music"
      industry="Hollywood"
      articles={articles}
    />
  );
};

export default MusicHollywood;

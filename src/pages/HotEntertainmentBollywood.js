import React from "react";
import CategorySection from "../components/CategorySection";

const HotEntertainmentBollywood = () => {
  const articles = [
    {
      title: "Bollywood's Biggest Stars Shine at Filmfare Awards",
      excerpt:
        "The 68th Filmfare Awards saw the cream of Bollywood talent gather for a night of glamour and celebration. Find out who took home the coveted Black Lady.",
    },
    {
      title: "Upcoming Blockbuster: 'Mumbai Nights' Set to Dazzle",
      excerpt:
        "Director Anurag Kashyap's latest project 'Mumbai Nights' promises to be a visual spectacle. We've got the inside scoop on this star-studded production.",
    },
    {
      title: "Fashion Face-Off: Deepika vs Priyanka",
      excerpt:
        "Two of Bollywood's biggest fashion icons go head-to-head. Who wore it better? Our style experts weigh in on their recent red carpet looks.",
    },
  ];

  return (
    <CategorySection
      category="Hot Entertainment"
      industry="Bollywood"
      articles={articles}
    />
  );
};

export default HotEntertainmentBollywood;

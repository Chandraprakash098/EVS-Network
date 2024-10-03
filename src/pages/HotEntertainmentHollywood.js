import React from "react";
import CategorySection from "../components/CategorySection";

const HotEntertainmentHollywood = () => {
  const articles = [
    {
      title: "Oscar Buzz: Predictions for This Year's Academy Awards",
      excerpt:
        "With the Oscars just around the corner, we break down the frontrunners in each category. Who will take home the golden statuette?",
    },
    {
      title: "Behind the Scenes: Marvel's Next Big Franchise",
      excerpt:
        "Exclusive insights into Marvel's latest project that's set to redefine the superhero genre. Get ready for a new era of cinematic magic.",
    },
    {
      title: "Hollywood's Power Couples: Who's Still Going Strong?",
      excerpt:
        "From Blake and Ryan to Tom and Zendaya, we look at the couples that are keeping love alive in Tinseltown.",
    },
  ];

  return (
    <CategorySection
      category="Hot Entertainment"
      industry="Hollywood"
      articles={articles}
    />
  );
};

export default HotEntertainmentHollywood;

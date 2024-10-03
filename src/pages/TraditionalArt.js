import React from "react";
import CategorySection from "../components/CategorySection";

const TraditionalArt = () => {
  const categoryData = [
    {
      title: "Bollywood Classics",
      image: "path/to/bollywood-classics.jpg",
      description:
        "Experience the traditional artistry behind Bollywood films.",
      link: "/traditional-art",
    },
    {
      title: "Hollywood Heritage",
      image: "path/to/hollywood-heritage.jpg",
      description:
        "Explore the historical influence on Hollywood’s great movies.",
      link: "/traditional-art",
    },
  ];

  return (
    <div>
      <CategorySection title="Traditional Art" categories={categoryData} />
    </div>
  );
};

export default TraditionalArt;

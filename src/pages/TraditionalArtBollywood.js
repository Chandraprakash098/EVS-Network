import React from "react";
import CategorySection from "../components/CategorySection";

const TraditionalArtBollywood = () => {
  const articles = [
    {
      title: "Classical Dance in Modern Bollywood",
      excerpt:
        "How Bollywood is incorporating traditional dance forms like Kathak and Bharatanatyam into mainstream cinema. A blend of the old and new.",
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
  ];

  return (
    <CategorySection
      category="Traditional Art"
      industry="Bollywood"
      articles={articles}
    />
  );
};

export default TraditionalArtBollywood;

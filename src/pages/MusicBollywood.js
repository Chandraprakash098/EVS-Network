import React from "react";
import CategorySection from "../components/CategorySection";

const MusicBollywood = () => {
  const articles = [
    {
      title: "Arijit Singh's Latest Album Breaks Streaming Records",
      excerpt:
        "The 'King of Playback Singing' has done it again! Arijit Singh's new album 'Dil Ki Awaaz' is breaking all records on music streaming platforms.",
    },
    {
      title: "The Rise of Indie Music in Bollywood",
      excerpt:
        "How independent artists are making their mark in mainstream Bollywood music. Is this the beginning of a new era in Hindi film music?",
    },
    {
      title: "Nostalgia Trip: Recreating 90s Bollywood Hits",
      excerpt:
        "The trend of remixing classic 90s songs continues. We explore why these throwback tunes are resonating with today's audience.",
    },
  ];

  return (
    <CategorySection
      category="Music"
      industry="Bollywood"
      articles={articles}
    />
  );
};

export default MusicBollywood;

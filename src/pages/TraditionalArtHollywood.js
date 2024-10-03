import React from "react";
import CategorySection from "../components/CategorySection";

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
  ];

  return (
    <CategorySection
      category="Traditional Art"
      industry="Hollywood"
      articles={articles}
    />
  );
};

export default TraditionalArtHollywood;

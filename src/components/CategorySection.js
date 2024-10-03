



// const CategorySection = ({ category, articles }) => {
//   if (!category) {
//     console.warn("CategorySection: 'category' prop is required");
//     return null;
//   }

import EntertainmentCard from "./EntertainmentCard";

//   const safeArticles = articles || [];

//   return (
//     <div className="py-8">
//       <h1 className="text-4xl font-bold mb-6 text-neonGreen">{category}</h1>
//       {safeArticles.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {safeArticles.map((article, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
//             >
//               <img
//                 src={article.image}
//                 alt={article.title}
//                 className="mb-4 rounded"
//               />
//               <h2 className="text-xl font-semibold mb-2 text-neonGreen">
//                 {article.title}
//               </h2>
//               <p className="text-white mb-4">{article.description}</p>
//               <a
//                 href={article.link}
//                 className="text-neonGreen hover:text-white transition-colors duration-300"
//               >
//                 Read more
//               </a>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-white">No articles available at the moment.</p>
//       )}
//     </div>
//   );
// };
const CategorySection = ({ category, articles }) => {
  if (!category) {
    console.warn("CategorySection: 'category' prop is required");
    return null;
  }

  const safeArticles = articles || [];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-neonGreen text-center">
          <span className="relative">
            {category}
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-neonGreen/30 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </span>
        </h2>

        {safeArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safeArticles.map((article, index) => (
              <EntertainmentCard
                key={index}
                {...article}
                priority={index < 3}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No articles available at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

// export { ImageWithFallback, EntertainmentCard, CategorySection };
export default CategorySection;




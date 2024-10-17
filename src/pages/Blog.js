import React from "react";
import { Link } from "react-router-dom";
import img1 from '../images/blog1.jpeg'
import img2 from '../images/blog2.jpeg'
import img3 from '../images/blog3.jpeg'
const Blog = () => {
  const blogPosts = [
    {
      title: "Bollywood versus Independent Artists: A Change in Preferences of the Audience",
      image: img1,
      link: "/blog/strategies-for-music",
    },
    {
      title: "BookMyShow Warns Fans against Unauthorized Coldplay Ticket Sales: It's Illegal in India",
      image: img2,
      link: "/blog/digital-marketing-2024",
    },
    // Add more blog posts here as needed
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="bg-gray-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">Blog</h1>
        <p className="mt-4 text-lg">
          <Link to="/" className="hover:text-neonGreen">Home</Link> &gt; Blog
        </p>
      </div>

      {/* Blog Grid Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                className="rounded-lg mb-4 w-full object-cover h-60"
              />
              <h3 className="text-2xl font-semibold text-black mb-2">
                {post.title}
              </h3>

              <p className="text-gray-700 mb-4">{post.description}</p>
              <Link
                to={`/blog/${index}`}
                className="inline-block bg-neonGreen text-black px-4 py-2 rounded hover:bg-green-600 transition duration-300"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

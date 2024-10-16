import React from "react";
import { Link } from "react-router-dom";
import img1 from '../images/pexels-rdne-5921658.jpg'
import img2 from '../images/pexels-artempodrez-5716032.jpg'
import img3 from '../images/pexels-solliefoto-320617.jpg'
const Blog = () => {
  const blogPosts = [
    {
      title: "Strategies you can use to market your music",
      image: img1,
      description: "Explore how you can market your music using the latest strategies.",
      link: "/blog/strategies-for-music",
    },
    {
      title: "The Digital Marketing Landscape in 2024: Trends and Strategy",
      image: img2,
      description: "Learn about the latest trends and strategies in digital marketing for 2024.",
      link: "/blog/digital-marketing-2024",
    },
    {
      title: "How AI is a Problem Solver for Video Production",
      image: img3,
      description: "Discover how AI is transforming the video production industry.",
      link: "/blog/ai-in-video-production",
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
                className="rounded-lg mb-4 w-full object-cover h-48"
              />
              <h3 className="text-2xl font-semibold text-neonGreen mb-2">
                {post.title}
              </h3>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <Link
                to={post.link}
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

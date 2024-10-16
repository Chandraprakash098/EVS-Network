import React from "react";
import { Link } from "react-router-dom";

const Career = () => {
  const jobListings = [
    {
      title: "Full Stack Developer Intern",
      location: "Remote",
      description: "Join our team to work on exciting projects and gain hands-on experience in full-stack development.",
      requirements: [
        "Proficient in React and Node.js",
        "Understanding of RESTful APIs",
        "Familiarity with Git version control",
        "Strong problem-solving skills",
      ],
      applyLink: "https://yourcompany.com/apply/full-stack-developer-intern",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      description: "We are looking for a creative UI/UX Designer to create engaging and user-friendly designs.",
      requirements: [
        "Proficiency in design tools like Figma, Sketch, or Adobe XD",
        "Strong portfolio showcasing previous design work",
        "Ability to work collaboratively in a team",
        "Good understanding of user-centered design principles",
      ],
      applyLink: "https://yourcompany.com/apply/ui-ux-designer",
    },
    {
      title: "Marketing Coordinator",
      location: "Remote",
      description: "Help us grow our brand awareness and reach through effective marketing strategies.",
      requirements: [
        "Experience with social media marketing",
        "Excellent written and verbal communication skills",
        "Ability to analyze marketing data and metrics",
        "Strong organizational skills",
      ],
      applyLink: "https://yourcompany.com/apply/marketing-coordinator",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="bg-gray-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">Careers</h1>
        <p className="mt-4 text-lg">
          <Link to="/" className="hover:text-neonGreen">Home</Link> &gt; Careers
        </p> 
      </div>

      {/* Careers Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-neonGreen mb-6 text-center">Discover your new career</h2>
        <p className="text-lg mb-8 text-center text-gray-600">
          Come be part of our team with Inventics – bring your ideas and determination to make a difference.
          Join us and help our clients become the best versions of themselves.
        </p>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobListings.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-neonGreen">{job.title}</h3>
              <p className="text-gray-600">{job.location}</p>
              <p className="text-gray-700 mb-2">{job.description}</p>
              <h4 className="font-bold text-neonGreen">Requirements:</h4>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {job.requirements.map((requirement, reqIndex) => (
                  <li key={reqIndex}>{requirement}</li>
                ))}
              </ul>
              <a
                href={job.applyLink}
                className="inline-block bg-neonGreen text-black px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;




// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { getJobs } from '../services/api';

// const Career = () => {
//   const [jobListings, setJobListings] = useState([]);

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     const jobs = await getJobs();
//     setJobListings(jobs);
//   };

//   return (
//     <div>
//       {/* ... existing header section ... */}

//       {/* Careers Section */}
//       <div className="container mx-auto px-4 py-8">
//         <h2 className="text-4xl font-bold text-neonGreen mb-6 text-center">Discover your new career</h2>
//         <p className="text-lg mb-8 text-center text-gray-600">
//           Come be part of our team with Inventics – bring your ideas and determination to make a difference.
//           Join us and help our clients become the best versions of themselves.
//         </p>

//         {/* Job Listings */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {jobListings.map((job) => (
//             <div key={job._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
//               <h3 className="text-2xl font-semibold text-neonGreen">{job.title}</h3>
//               <p className="text-gray-600">{job.location}</p>
//               <p className="text-gray-700 mb-2">{job.description}</p>
//               <h4 className="font-bold text-neonGreen">Requirements:</h4>
//               <ul className="list-disc list-inside text-gray-700 mb-4">
//                 {job.requirements.map((requirement, index) => (
//                   <li key={index}>{requirement}</li>
//                 ))}
//               </ul>
//               <a
//                 href={job.applyLink}
//                 className="inline-block bg-neonGreen text-black px-4 py-2 rounded hover:bg-green-600 transition duration-300"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Apply Now
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Career;
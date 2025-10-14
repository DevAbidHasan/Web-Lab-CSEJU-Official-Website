import React from "react";
import { FaServer, FaCloud, FaTools, FaCodeBranch, FaBook, FaCogs } from "react-icons/fa";
import { useNavigate } from "react-router";

const Developer = () => {
  const navigate = useNavigate();

  const techStack = [
    { name: "React.js", detail: "Frontend JavaScript library for UI" },
    { name: "Tailwind CSS", detail: "Utility-first CSS framework for styling" },
    { name: "Node.js", detail: "Backend JavaScript runtime" },
    { name: "Express.js", detail: "Fast backend web framework" },
    { name: "MongoDB", detail: "NoSQL database for data storage" },
    { name: "Vercel", detail: "Frontend deployment & hosting" },
    { name: "Render", detail: "Backend cloud hosting" },
  ];

  const publicAPIs = [
    { name: "Department Events API", url: "https://api.cse-ju.edu/events", desc: "Provides data of all current and upcoming CSE events." },
    { name: "Faculty Data API", url: "https://api.cse-ju.edu/faculty", desc: "Access details of department faculty members." },
    { name: "Research Projects API", url: "https://api.cse-ju.edu/research", desc: "Fetch information about research publications and labs." },
    { name: "Student Portal API", url: "https://api.cse-ju.edu/student", desc: "API for accessing public student-related data." },
  ];

  const resources = [
    { name: "CSE JU GitHub", url: "https://github.com/cse-ju", desc: "Official GitHub organization for departmental open-source projects." },
    { name: "Documentation Portal", url: "https://docs.cse-ju.edu/", desc: "Comprehensive project and system documentation." },
    { name: "Cloud Dashboard", url: "https://cloud.cse-ju.edu/", desc: "Manage department servers and applications on cloud." },
    { name: "Smart Resource Hub", url: "https://resources.cse-ju.edu/", desc: "Access AI tools, datasets, and coding utilities for developers." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 px-6 sm:px-10 md:px-16 lg:px-32 xl:px-52 py-20 text-slate-800">
      <div className="text-center mb-20">
        <h1 className="text-3xl md:text-4xl font-semibold text-indigo-700 mb-3 poppins">
          CSE-JU Developer Resources
        </h1>
        <p className="text-slate-600 inter text-base md:text-lg max-w-2xl mx-auto">
          A comprehensive hub for developers working with or contributing to the CSE-JU systems.  
          Explore the tech stack, APIs, and tools powering the department’s digital infrastructure.
        </p>
      </div>

      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <FaCogs className="text-indigo-600 text-3xl" />
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 poppins">
            Tech Stack Overview
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold text-indigo-600 poppins">{tech.name}</h3>
              <p className="text-slate-600 text-sm mt-2 inter">{tech.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <FaServer className="text-indigo-600 text-3xl" />
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 poppins">
            Department Public APIs
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {publicAPIs.map((api, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold text-indigo-600 poppins">{api.name}</h3>
              <p className="text-slate-600 text-sm mt-2 mb-3 inter">{api.desc}</p>
              <a href={api.url} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline inter">
                {api.url}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <FaCloud className="text-indigo-600 text-3xl" />
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 poppins">
            Developer Tools & Cloud Resources
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {resources.map((res, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold text-indigo-600 poppins">{res.name}</h3>
              <p className="text-slate-600 text-sm mt-2 mb-3 inter">{res.desc}</p>
              <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline inter">
                Visit Resource
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <FaCodeBranch className="text-indigo-600 text-3xl" />
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 poppins">
            Repository & Contribution
          </h2>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
          <p className="text-slate-600 text-base mb-4 inter">
            All codebases are maintained under the CSE-JU GitHub organization.  
            Developers can fork, clone, and contribute by submitting pull requests through the main branch.
          </p>
          <a
            href="https://github.com/cse-ju"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition-all inter"
          >
            Visit GitHub
          </a>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <FaBook className="text-indigo-600 text-3xl" />
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 poppins">
            Developer Documentation
          </h2>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
          <p className="text-slate-600 text-base mb-4 inter">
            For detailed project setup, authentication, and API integration guidelines, please visit the official documentation portal.
          </p>
          <a
            href="https://docs.cse-ju.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition-all inter"
          >
            Open Documentation
          </a>
        </div>
      </section>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => navigate("/")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5 inter"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Developer;

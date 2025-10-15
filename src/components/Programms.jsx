import React from "react";

const programs = [
  {
    name: "B.Sc. in Computer Science & Engineering",
    duration: "4 Years",
    description:
      "A comprehensive undergraduate program covering software development, data structures, algorithms, AI, and networking.",
  },
  {
    name: "M.Sc. in Computer Science",
    duration: "2 Years",
    description:
      "Advanced coursework and research opportunities in AI, Data Science, Cybersecurity, and Cloud Computing.",
  },
  {
    name: "M.Phil in Computer Science",
    duration: "1-2 Years",
    description:
      "Research-focused program allowing students to explore emerging technologies and innovations in depth.",
  },
  {
    name: "Ph.D. in Computer Science",
    duration: "3-5 Years",
    description:
      "Doctoral research program with focus on novel ideas in AI, Machine Learning, Networking, and Robotics.",
  },
];

const Programms = () => {
  return (
    <section
      id="programs"
      className="py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-b from-white to-indigo-50"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold poppins text-gray-800 mb-3">
          Our <span className="text-indigo-600">Programs</span>
        </h2>
        <p className="text-slate-600 inter max-w-xl mx-auto">
          Explore the various programs offered by the Department of Computer
          Science & Engineering, designed to prepare students for a
          technology-driven world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold poppins text-gray-800 mb-2">
              {program.name}
            </h3>
            <p className="text-indigo-600 inter text-sm mb-4">{program.duration}</p>
            <p className="text-slate-700 inter text-sm flex-1">{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programms;

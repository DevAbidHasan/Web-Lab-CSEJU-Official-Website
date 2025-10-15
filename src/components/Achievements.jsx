import React from "react";

const achievements = [
  {
    title: "Best Research Department 2025",
    description:
      "Awarded by the University for outstanding research output and contributions in Computer Science & Engineering.",
  },
  {
    title: "AI Project Excellence",
    description:
      "Our students won the national AI project competition for innovative machine learning applications.",
  },
  {
    title: "Top Hackathon Team",
    description:
      "CSEJU team secured 1st place in the national level Hackathon 2025 with a cutting-edge smart city solution.",
  },
  {
    title: "Cybersecurity Excellence Award",
    description:
      "Recognized by the Bangladesh Cybersecurity Association for outstanding contribution to research and innovation.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-b from-indigo-50 to-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold poppins text-gray-800 mb-3">
          Our <span className="text-indigo-600">Achievements</span>
        </h2>
        <p className="text-slate-600 inter max-w-xl mx-auto">
          Showcasing the remarkable milestones, awards, and recognition earned
          by our students, faculty, and department in research, competitions, and
          innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold poppins text-gray-800 mb-3">
              {achievement.title}
            </h3>
            <p className="inter text-slate-700 text-sm">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

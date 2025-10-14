import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const facultyMembers = [
  {
    name: "Md. Golam Moazzam",
    title: "Professor & Chairperson",
    image: "https://i.ibb.co.com/LDXSz08Q/image.png",
    email: "rahman@cse.juniv.edu",
    linkedin: "#",
  },
  {
    name: "Dr. Jugal Krishna Das",
    title: "Professor",
    image: "https://i.ibb.co.com/twCCyMz6/image.png",
    email: "farzana@cse.juniv.edu",
    linkedin: "#",
  },
  {
    name: "Dr. Mohammad Shorif Uddin",
    title: "Professor",
    image: "https://i.ibb.co.com/DFXGyLf/image.png",
    email: "tareq@cse.juniv.edu",
    linkedin: "#",
  },
  {
    name: "Dr. Mohammad Zahidur Rahman",
    title: "Professor",
    image: "https://i.ibb.co.com/RWCMytN/image.png",
    email: "nusrat@cse.juniv.edu",
    linkedin: "#",
  },
];

const Faculty = () => {
  return (
    <section
      id="faculty"
      className="w-full py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-b from-white to-indigo-50"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold poppins text-gray-800 mb-3">
          Meet Our <span className="text-indigo-600">Faculty</span>
        </h2>
        <p className="text-slate-600 inter max-w-xl mx-auto">
          Our distinguished faculty members are dedicated to fostering excellence
          in education, research, and innovation in Computer Science & Engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {facultyMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            <div className="w-full h-64 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold poppins text-gray-800">
                {member.name}
              </h3>
              <p className="text-indigo-600 inter text-sm mb-4">{member.title}</p>

              <div className="flex justify-center gap-5 mt-4 text-slate-600 mb-4">
                <a
                  href={`mailto:${member.email}`}
                  className="hover:text-indigo-600 transition"
                >
                  <FaEnvelope size={18} />
                </a>
                <a
                  href={member.linkedin}
                  className="hover:text-indigo-600 transition"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>

              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full inter text-sm transition">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full inter text-sm transition">
          All Faculties
        </button>
      </div>
    </section>
  );
};

export default Faculty;

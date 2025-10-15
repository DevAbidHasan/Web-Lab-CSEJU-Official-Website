import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Abid Hasan Plabon",
    role: "Alumni, B.Sc. CSE 2018",
    feedback:
      "The department provided me with a strong foundation in computer science and opportunities to work on real-world projects. Faculty support was outstanding!",
  },
  {
    name: "Farhan Fuad",
    role: "Current M.Sc. Student",
    feedback:
      "I am amazed by the research environment. Labs, resources, and guidance from professors helped me deepen my knowledge in AI and ML.",
  },
  {
    name: "Kabir Hossen",
    role: "Alumni, B.Sc. CSE 2020",
    feedback:
      "CSE-JU equipped me with practical skills and critical thinking. The courses and projects prepared me well for industry challenges.",
  },
  {
    name: "Yasir Arafat",
    role: "Ph.D. Researcher",
    feedback:
      "The research opportunities and collaborative environment at the department are top-notch. Great faculty and excellent mentorship.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-b from-indigo-50 to-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold poppins text-gray-800 mb-3">
          What <span className="text-indigo-600">People Say</span>
        </h2>
        <p className="text-slate-600 inter max-w-xl mx-auto">
          Hear from our students, alumni, and researchers about their experiences
          at the Department of Computer Science & Engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 flex flex-col justify-between"
          >
            <div className="mb-4 text-indigo-600 text-2xl">
              <FaQuoteLeft />
            </div>
            <p className="inter text-slate-700 flex-1 mb-4">"{t.feedback}"</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold poppins text-gray-800">{t.name}</h3>
              <p className="text-sm inter text-indigo-600">{t.role}</p>
            </div>
            <div className="mt-4 text-indigo-600 text-2xl self-end">
              <FaQuoteRight />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

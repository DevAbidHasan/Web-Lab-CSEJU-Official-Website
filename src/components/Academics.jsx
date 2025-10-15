import React, { useState } from "react";
import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";

const Academics = () => {
  const [activeTab, setActiveTab] = useState("systems");

  const academicSystems = [
    {
      title: "Undergraduate Programs",
      description: "Bachelor's degrees provide foundational knowledge with theory and practical exposure.",
      icon: <FaGraduationCap className="text-4xl text-blue-600 mb-4" />,
    },
    {
      title: "Masters Programs",
      description: "Advanced studies for specialization, research, and career growth in various disciplines.",
      icon: <FaBook className="text-4xl text-green-600 mb-4" />,
    },
    {
      title: "Workshops & Certification",
      description: "Short-term courses for skill development, professional certifications, and continuous learning.",
      icon: <FaChalkboardTeacher className="text-4xl text-purple-600 mb-4" />,
    },
  ];

  const courses = [
    {
      title: "Computer Science",
      description: "Programming, algorithms, AI, machine learning, and software development.",
      intensity: 90,
      icon: <FaLaptopCode className="text-3xl text-orange-500 mr-2" />,
    },
    {
      title: "Business & Management",
      description: "Management skills, entrepreneurship, marketing, finance, and leadership development.",
      intensity: 80,
      icon: <FaBook className="text-3xl text-teal-500 mr-2" />,
    },
    {
      title: "Arts & Humanities",
      description: "Literature, history, social sciences, philosophy, and cultural studies.",
      intensity: 70,
      icon: <FaGraduationCap className="text-3xl text-pink-500 mr-2" />,
    },
    {
      title: "Engineering & Technology",
      description: "Hands-on courses in civil, mechanical, electrical, and electronics engineering.",
      intensity: 85,
      icon: <FaChalkboardTeacher className="text-3xl text-yellow-500 mr-2" />,
    },
  ];

  const extraPrograms = [
    {
      title: "Workshops",
      description: "Hands-on training in emerging technologies and soft skills.",
      icon: <FaLaptopCode className="text-3xl text-indigo-500 mr-2" />,
    },
    {
      title: "Internships",
      description: "Real-world experience in industry settings to boost employability.",
      icon: <FaGraduationCap className="text-3xl text-blue-500 mr-2" />,
    },
    {
      title: "Skill-based Short Courses",
      description: "Focused learning to enhance technical and professional skills.",
      icon: <FaChalkboardTeacher className="text-3xl text-green-500 mr-2" />,
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-16 py-12 w-11/12 mt-8 mx-auto">
        <Helmet>
            <title>
                Academics || CSEJU
            </title>
        </Helmet>
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Academics</h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
          Explore our academic systems, courses, and programs designed to help students achieve their educational and professional goals.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto justify-center mb-8 space-x-4 sm:space-x-6">
        {[
          { key: "systems", label: "Academic Systems", color: "bg-blue-600" },
          { key: "courses", label: "Courses", color: "bg-green-600" },
          { key: "extra", label: "Extra Programs", color: "bg-purple-600" },
        ].map((tab) => (
          <button
            key={tab.key}
            className={`flex-shrink-0 px-4 sm:px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
              activeTab === tab.key ? `${tab.color} text-white` : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "systems" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {academicSystems.map((system, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6 sm:p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              {system.icon}
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{system.title}</h3>
              <p className="text-gray-500 text-sm sm:text-base">{system.description}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "courses" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-gray-50 p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-3">{course.icon}</div>
              <h4 className="text-lg sm:text-xl font-semibold mb-2">{course.title}</h4>
              <p className="text-gray-600 text-sm mb-3">{course.description}</p>
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                <div
                  className="bg-blue-600 h-2 sm:h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${course.intensity}%` }}
                ></div>
              </div>
              <div className="text-right text-xs sm:text-sm mt-1 text-gray-500">
                <CountUp end={course.intensity} duration={2} />%
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "extra" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {extraPrograms.map((program, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-3">{program.icon}</div>
              <h4 className="text-lg sm:text-xl font-semibold mb-2">{program.title}</h4>
              <p className="text-gray-600 text-sm">{program.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Academics;

import React, { useState } from "react";
import Modal from "react-modal";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router";

// Dummy admission data
const admissionData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    type: "Course",
    duration: "6 Months",
    seats: 30,
    session: "Morning",
    description: "Learn HTML, CSS, JavaScript, React, Node.js, and databases in this hands-on course.",
  },
  {
    id: 2,
    title: "AI & Machine Learning Workshop",
    type: "Workshop",
    duration: "2 Days",
    seats: 20,
    session: "Weekend",
    description: "Explore machine learning algorithms and build your first predictive models.",
  },
  {
    id: 3,
    title: "UI/UX Design Bootcamp",
    type: "Course",
    duration: "3 Months",
    seats: 25,
    session: "Evening",
    description: "Master design principles, wireframing, prototyping, and Figma tools for UI/UX design.",
  },
];

const Admission = ({ user }) => {
  

  

  

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Applications submitted successfully!");
    
  };

  return (
    <div className="px-4 mt-17 py-8 w-11/12 mx-auto">
        <Toaster/>
      <h1 className="text-3xl font-bold text-center mb-8">Available Admissions</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {admissionData.map((item) => (
          <div key={item.id} className="border rounded-lg p-6 shadow hover:shadow-lg transition duration-300 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-gray-500 flex items-center gap-2 mb-1">
                <FaRegCalendarAlt /> Duration: {item.duration}
              </p>
              <p className="text-gray-500 flex items-center gap-2 mb-1">
                <FaRegClock /> Session: {item.session}
              </p>
              <p className="text-gray-500">Seats Available: {item.seats}</p>
            </div>
            <Link to="/apply"
              
              className="mt-4 text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Apply
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admission;

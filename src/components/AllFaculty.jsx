import React from "react";
import { Link, useNavigate } from "react-router";
import { AllFacultyMembers } from "./Faculty";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Helmet } from "react-helmet";

const AllFaculty = () => {
  const navigate = useNavigate();

  return (
    <div className="py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-b from-white to-indigo-50 min-h-screen">
        <Helmet>
            <title>
                All Faculty Members || CSEJU
            </title>
        </Helmet>
      <h2 className="text-4xl md:text-5xl font-semibold poppins text-gray-800 mb-12 text-center">
        All <span className="text-indigo-600">Faculty Members</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {AllFacultyMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
          >
            <div className="w-full p-6 h-64 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 text-center flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-xl font-semibold poppins text-gray-800">
                  {member.name}
                </h3>
                <p className="text-indigo-600 inter text-sm mb-4">
                  {member.title}
                </p>

                <div className="flex justify-center gap-5 mt-2 text-slate-600">
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
              </div>

              <Link
                to={`/faculty-details/${member.id}`}
                className="mt-4 block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg inter text-sm transition"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => navigate("/")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:-translate-y-1 inter"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default AllFaculty;

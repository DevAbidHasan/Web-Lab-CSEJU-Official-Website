import React from "react";
import { useParams, useNavigate } from "react-router";
import { AllFacultyMembers } from "./Faculty";
import { FaEnvelope, FaLinkedin, FaPhone, FaBuilding } from "react-icons/fa";
import { Helmet } from "react-helmet";

const FacultyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const member = AllFacultyMembers.find((m) => m.id === parseInt(id));

  if (!member) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <h2 className="text-3xl poppins font-semibold mb-4">
          Faculty Not Found
        </h2>
        <button
          onClick={() => navigate("/all-faculty")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full inter transition-all mt-4"
        >
          Back to All Faculty
        </button>
      </div>
    );
  }

  return (
    <div className="py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-b from-white to-indigo-50 min-h-screen">
        <Helmet>
            <title>
                Faculty Details || CSEJU
            </title>
        </Helmet>
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0 w-full md:w-72">
          <div className="relative pb-full md:pb-auto md:h-auto">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-semibold poppins text-gray-800 mb-2">
              {member.name}
            </h2>
            <p className="text-indigo-600 inter text-lg mb-4">{member.title}</p>

            <div className="flex flex-col gap-2 text-slate-700 inter mb-6">
              <p className="flex items-center gap-2">
                <FaEnvelope /> {member.email}
              </p>
              <p className="flex items-center gap-2">
                <FaPhone /> {member.phone}
              </p>
              <p className="flex items-center gap-2">
                <FaBuilding /> {member.office}
              </p>
              <p className="flex items-center gap-2">
                <FaLinkedin />{" "}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 transition"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold poppins text-gray-800 mb-2">
                Education
              </h3>
              <ul className="list-disc list-inside inter text-slate-700 space-y-1">
                {member.education.map((edu, idx) => (
                  <li key={idx}>{edu}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold poppins text-gray-800 mb-2">
                Research Areas
              </h3>
              <ul className="list-disc list-inside inter text-slate-700 space-y-1">
                {member.research.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold poppins text-gray-800 mb-2">
                Publications
              </h3>
              <ul className="list-disc list-inside inter text-slate-700 max-h-80 overflow-y-auto space-y-1">
                {member.publications.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 text-center md:text-left">
            <button
              onClick={() => navigate("/all-faculty-members")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full inter transition-all"
            >
              Back to All Faculty
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDetails;

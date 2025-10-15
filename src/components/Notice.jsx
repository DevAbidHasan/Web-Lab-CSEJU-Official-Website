import React, { useState } from "react";
import { FaRegCalendarAlt, FaFilePdf, FaBell } from "react-icons/fa";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";

const noticesData = [
  {
    id: 1,
    title: "Midterm Exam Schedule Released",
    description: "The schedule for all midterm examinations has been released. Check your department notice board for details.",
    date: "2025-10-10",
    category: "Important",
    pdf: "/pdfs/midterm-schedule.pdf",
  },
  {
    id: 2,
    title: "Guest Lecture on AI",
    description: "A guest lecture on Artificial Intelligence by Prof. John Doe will be held in the auditorium at 3 PM.",
    date: "2025-10-12",
    category: "Event",
    pdf: null,
  },
  {
    id: 3,
    title: "Semester Result Published",
    description: "The semester results for Spring 2025 have been published. Check your online portal to view your grades.",
    date: "2025-10-14",
    category: "Important",
    pdf: null,
  },
  {
    id: 4,
    title: "Workshop on Web Development",
    description: "A hands-on workshop on modern web development technologies will be conducted. Registration is mandatory.",
    date: "2025-10-20",
    category: "Event",
    pdf: "/pdfs/web-dev-workshop.pdf",
  },
];

const Notice = () => {
  const [filter, setFilter] = useState("All");

  const filteredNotices =
    filter === "All" ? noticesData : noticesData.filter((notice) => notice.category === filter);

  return (
    <div className="px-4 sm:px-6 mt-7 lg:px-16 py-12 max-w-7xl mx-auto">
        <Helmet>
            <title>
                Notices || CSEJU
            </title>
        </Helmet>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Notices</h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
          Stay updated with the latest announcements, important notices, events, and academic updates.
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center mb-8 space-x-3 sm:space-x-4 overflow-x-auto">
        {["All", "Important", "Event", "Exam"].map((cat) => (
          <button
            key={cat}
            className={`flex-shrink-0 px-4 sm:px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
              filter === cat ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Notices List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredNotices.map((notice) => (
          <div
            key={notice.id}
            className="bg-white shadow-md rounded-xl p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center mb-3 text-gray-500 text-sm sm:text-base">
                <FaRegCalendarAlt className="mr-2 text-blue-600" /> {notice.date}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{notice.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{notice.description}</p>
            </div>

            {notice.pdf && (
              <a
                href={notice.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm sm:text-base hover:bg-blue-700 transition-colors duration-300"
              >
                <FaFilePdf className="mr-2" /> Download PDF
              </a>
            )}
          </div>
        ))}

        {filteredNotices.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">No notices found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Notice;

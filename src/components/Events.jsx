import React from "react";

const events = [
  {
    title: "AI & ML Workshop",
    date: "2025-11-05",
    location: "CSE Lab, JU",
    description:
      "Hands-on workshop on Artificial Intelligence and Machine Learning for students and researchers, focusing on real-world applications.",
  },
  {
    title: "Hackathon 2025",
    date: "2025-12-12",
    location: "Auditorium, JU",
    description:
      "A 48-hour coding marathon encouraging innovative solutions to real-life problems. Open for undergraduate and graduate students.",
  },
  {
    title: "Cybersecurity Seminar",
    date: "2026-01-15",
    location: "Conference Hall, JU",
    description:
      "Seminar covering emerging trends in cybersecurity, privacy, and network security, delivered by leading industry experts.",
  },
  {
    title: "Robotics Competition",
    date: "2026-02-20",
    location: "Robotics Lab, JU",
    description:
      "Students will showcase their robotic projects and compete for prizes. Focus on automation, AI integration, and problem-solving skills.",
  },
];

const Events = () => {
  return (
    <section
      id="events"
      className=" px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-b from-white to-indigo-50"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold poppins text-gray-800 mb-3">
          Upcoming <span className="text-indigo-600">Events</span>
        </h2>
        <p className="text-slate-600 inter max-w-xl mx-auto">
          Stay updated with our latest workshops, seminars, competitions, and
          conferences organized by the Department of Computer Science & Engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold poppins text-gray-800 mb-2">
              {event.title}
            </h3>
            <p className="text-sm inter text-indigo-600 mb-1">{event.date}</p>
            <p className="text-sm inter text-slate-700 mb-4">{event.location}</p>
            <p className="text-sm inter text-slate-700 flex-1">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;

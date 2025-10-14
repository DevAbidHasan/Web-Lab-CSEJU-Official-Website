import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const AllFacultyMembers = [
  {
    id : 1,
    name: "Md. Golam Moazzam",
    title: "Professor & Chairperson",
    image: "https://i.ibb.co.com/LDXSz08Q/image.png",
    email: "golam@cse.juniv.edu",
    phone: "+8801712345678",
    office: "Room 301, CSE Building, JU",
    linkedin: "#",
    education: [
      "Ph.D. in Computer Science, University of Dhaka, 2010",
      "M.Sc. in Computer Science, Jahangirnagar University, 2006",
      "B.Sc. in Computer Science, Jahangirnagar University, 2004"
    ],
    research: ["Artificial Intelligence", "Machine Learning", "Data Mining", "Computer Vision", "Pattern Recognition"],
    publications: Array.from({length: 25}, (_, i) => `Moazzam, M.G., et al. 'Research Article ${i+1} on AI & ML', IEEE 20${10+i}`)
  },
  {
    id : 2,
    name: "Dr. Jugal Krishna Das",
    title: "Professor",
    image: "https://i.ibb.co.com/twCCyMz6/image.png",
    email: "jugal@cse.juniv.edu",
    phone: "+8801723456789",
    office: "Room 302, CSE Building, JU",
    linkedin: "#",
    education: [
      "Ph.D. in Software Engineering, BUET, 2012",
      "M.Sc. in Computer Science, Dhaka University, 2008",
      "B.Sc. in Computer Science, Jahangirnagar University, 2005"
    ],
    research: ["Software Engineering", "Agile Development", "Human-Computer Interaction", "Software QA", "Requirements Engineering"],
    publications: Array.from({length: 25}, (_, i) => `Das, J.K., et al. 'Research Article ${i+1} on Software Engineering', ACM 20${12+i}`)
  },
  {
    id : 3,
    name: "Dr. Mohammad Shorif Uddin",
    title: "Professor",
    image: "https://i.ibb.co.com/DFXGyLf/image.png",
    email: "shorif@cse.juniv.edu",
    phone: "+8801734567890",
    office: "Room 303, CSE Building, JU",
    linkedin: "#",
    education: [
      "Ph.D. in Artificial Intelligence, BUET, 2015",
      "M.Sc. in Computer Science, Jahangirnagar University, 2010",
      "B.Sc. in Computer Science, Jahangirnagar University, 2007"
    ],
    research: ["AI", "Robotics", "Natural Language Processing", "Computer Vision", "Deep Learning"],
    publications: Array.from({length: 25}, (_, i) => `Uddin, M.S., et al. 'Research Article ${i+1} on AI & Robotics', Springer 20${15+i}`)
  },
  {
    id : 4,
    name: "Dr. Mohammad Zahidur Rahman",
    title: "Professor",
    image: "https://i.ibb.co.com/RWCMytN/image.png",
    email: "zahidur@cse.juniv.edu",
    phone: "+8801745678901",
    office: "Room 304, CSE Building, JU",
    linkedin: "#",
    education: [
      "Ph.D. in Computer Networks, BUET, 2013",
      "M.Sc. in Computer Science, Dhaka University, 2009",
      "B.Sc. in Computer Science, Jahangirnagar University, 2006"
    ],
    research: ["Computer Networks", "IoT", "Wireless Communications", "Security", "Cloud Computing"],
    publications: Array.from({length: 25}, (_, i) => `Rahman, M.Z., et al. 'Research Article ${i+1} on Networks & IoT', Elsevier 20${13+i}`)
  },
  {
    id : 5,
    name: "Dr. Nusrat Jahan",
    title: "Associate Professor",
    image: "https://i.ibb.co.com/nusrat.png",
    email: "nusrat@cse.juniv.edu",
    phone: "+8801756789012",
    office: "Room 305, CSE Building, JU",
    linkedin: "#",
    education: [
      "Ph.D. in Cybersecurity, BUET, 2016",
      "M.Sc. in Computer Science, Dhaka University, 2012",
      "B.Sc. in Computer Science, Jahangirnagar University, 2009"
    ],
    research: ["Cybersecurity", "Blockchain", "IoT Security", "Network Security", "Privacy Preservation"],
    publications: Array.from({length: 25}, (_, i) => `Jahan, N., et al. 'Research Article ${i+1} on Cybersecurity & Blockchain', IEEE 20${16+i}`)
  },
  {
    id : 6,
    name: "Dr. Farzana Akter",
    title: "Assistant Professor",
    image: "https://i.ibb.co.com/farzana.png",
    email: "farzana@cse.juniv.edu",
    phone: "+8801767890123",
    office: "Room 306, CSE Building, JU",
    linkedin: "#",
    education: [
      "Ph.D. in Data Science, BUET, 2019",
      "M.Sc. in Computer Science, Jahangirnagar University, 2014",
      "B.Sc. in Computer Science, Jahangirnagar University, 2011"
    ],
    research: ["Data Science", "Big Data Analytics", "Machine Learning", "Data Mining", "Statistical Modeling"],
    publications: Array.from({length: 25}, (_, i) => `Akter, F., et al. 'Research Article ${i+1} on Data Science & ML', Springer 20${19+i}`)
  },
  {
    id : 7,
    name: "Dr. Tareq Hossain",
    title: "Assistant Professor",
    image: "https://i.ibb.co.com/tareq.png",
    email: "tareq@cse.juniv.edu",
    phone: "+8801778901234",
    office: "Room 307, CSE Building, JU",
    linkedin: "#",
    education: [
      "Ph.D. in Cloud Computing, BUET, 2020",
      "M.Sc. in Computer Science, Dhaka University, 2016",
      "B.Sc. in Computer Science, Jahangirnagar University, 2013"
    ],
    research: ["Cloud Computing", "Distributed Systems", "Edge Computing", "Virtualization", "Serverless Architecture"],
    publications: Array.from({length: 25}, (_, i) => `Hossain, T., et al. 'Research Article ${i+1} on Cloud & Distributed Systems', ACM 20${20+i}`)
  },
  {
    id : 8,
    name: "Dr. Nusrat Rahman",
    title: "Assistant Professor",
    image: "https://i.ibb.co.com/nusrat2.png",
    email: "nusrat2@cse.juniv.edu",
    phone: "+8801789012345",
    office: "Room 308, CSE Building, JU",
    linkedin: "#",
    education: [
      "Ph.D. in Machine Learning, BUET, 2021",
      "M.Sc. in Computer Science, Jahangirnagar University, 2017",
      "B.Sc. in Computer Science, Jahangirnagar University, 2014"
    ],
    research: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing", "AI Ethics"],
    publications: Array.from({length: 25}, (_, i) => `Rahman, N., et al. 'Research Article ${i+1} on ML & Deep Learning', IEEE 20${21+i}`)
  }
];

const facultyMembers = AllFacultyMembers.slice(0,4);


const Faculty = () => {
  return (
    <section
      id="faculty"
      className="w-full py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-b from-white to-indigo-50"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold poppins text-gray-800 mb-3">
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
                className="w-full h-full p-5 object-cover"
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

              <Link to={`/faculty-details/${member.id}`} className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg inter text-sm transition">
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/all-faculty-members" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md inter text-sm transition">
          All Faculties
        </Link>
      </div>
    </section>
  );
};

export {AllFacultyMembers};
export default Faculty;

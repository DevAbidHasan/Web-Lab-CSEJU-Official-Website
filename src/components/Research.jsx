import React from "react";
import { FaRobot, FaBrain, FaLock, FaNetworkWired, FaServer } from "react-icons/fa";

const Research = () => {
  return (
    <section
      id="research"
      className="relative bg-gradient-to-b from-white via-indigo-50/50 to-white py-24 px-6 md:px-16 lg:px-24 xl:px-40"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-300 via-indigo-200 to-pink-200 blur-[120px] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-6">
          Research &{" "}
          <span className="bg-gradient-to-r from-indigo-700 to-indigo-500 bg-clip-text text-transparent">
            Innovation
          </span>
        </h2>

        <p className="text-slate-600 text-md max-w-2xl mx-auto mb-12">
          The Department of Computer Science and Engineering fosters a strong
          culture of research and creativity. Our students and faculty work on
          groundbreaking innovations in AI, data science, networks, and
          cybersecurity — contributing to both academia and the tech industry.
        </p>

        {/* Research Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="bg-white border border-indigo-100 rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <FaBrain className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Artificial Intelligence
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Research on intelligent systems, neural networks, and
              machine-learning applications that shape the next era of computing.
            </p>
          </div>

          <div className="bg-white border border-indigo-100 rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <FaRobot className="text-indigo-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Robotics & Automation
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Development of autonomous robots and intelligent control systems
              with a focus on real-world problem solving.
            </p>
          </div>

          <div className="bg-white border border-indigo-100 rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <FaLock className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Cybersecurity
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Exploring secure computing, cryptography, and ethical hacking to
              ensure data safety and digital resilience.
            </p>
          </div>

          <div className="bg-white border border-indigo-100 rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <FaNetworkWired className="text-indigo-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Networking & IoT
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Research on high-speed networks, distributed systems, and
              Internet-of-Things connectivity for smarter environments.
            </p>
          </div>

          <div className="bg-white border border-indigo-100 rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <FaServer className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Cloud & Data Systems
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Innovation in scalable cloud architectures, data storage, and
              computing frameworks for real-time analytics.
            </p>
          </div>

          <div className="bg-white border border-indigo-100 rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <FaBrain className="text-indigo-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Computational Intelligence
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Applying AI and bio-inspired computing techniques for complex data
              processing and decision-making.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Research;

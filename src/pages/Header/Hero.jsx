import React from "react";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-16 lg:px-24 xl:px-40 text-center overflow-hidden bg-gradient-to-b from-white via-indigo-50/40 to-white">
      <div className="absolute -top-32 left-1/3 w-[600px] h-[600px] bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-200 blur-[140px] opacity-40 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 blur-[120px] opacity-30 animate-pulse-slow delay-2000"></div>

      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-800 leading-tight tracking-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-indigo-700 to-indigo-500 bg-clip-text text-transparent">
            CSE-JU
          </span>
        </h1>

        <p className="mt-5 text-lg md:text-xl text-slate-600 font-medium">
          Department of Computer Science and Engineering
          <br />
          Jahangirnagar University, Savar, Dhaka — 1342
        </p>

        <p className="mt-6 text-slate-500 max-w-xl mx-auto leading-relaxed">
          Empowering innovation, research, and excellence — shaping the next
          generation of computer scientists and engineers.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="#about"
            className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white font-medium rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
          >
            Explore More
          </a>
          <a
            href="#contact"
            className="border border-indigo-400 text-indigo-700 hover:bg-indigo-50 font-medium rounded-full px-8 py-3 transition-all duration-300 active:scale-95"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* 💠 Subtle Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-100/50 to-transparent"></div>
    </section>
  );
};

export default Hero;

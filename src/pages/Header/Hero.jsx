import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiTailwindcss,
  SiMongodb,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-16 lg:px-24 xl:px-40 text-center overflow-hidden bg-gradient-to-b from-white via-indigo-50/40 to-white">
      {/* 💠 Gradient Background Blurs */}
      <div className="absolute -top-32 left-1/3 w-[600px] h-[600px] bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-200 blur-[140px] opacity-40 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 blur-[120px] opacity-30 animate-pulse-slow delay-2000"></div>

      
      <div className="absolute inset-0 pointer-events-none">
        <SiReact className="absolute text-indigo-500  text-3xl top-24 left-[15%] animate-float-slow" />
        <SiPython className="absolute text-yellow-500 text-3xl top-1/3 right-[20%] animate-float-medium" />
        <SiJavascript className="absolute text-yellow-400 text-4xl bottom-1/3 left-[18%] animate-float-fast" />
        <SiCplusplus className="absolute text-blue-600 text-4xl bottom-20 right-[15%] animate-float-slow" />
        <SiTailwindcss className="absolute text-sky-400 text-5xl top-1/4 right-[10%] animate-float-fast" />
        <SiMongodb className="absolute text-green-600 text-5xl bottom-10 left-[5%] animate-float-medium" />
        <SiHtml5 className="absolute text-orange-500 text-4xl top-19 opacity-30 right-[30%] animate-float-medium" />
        <SiCss3 className="absolute text-blue-500 opacity-50 text-4xl bottom-[10%] right-[43%] animate-float-slow" />
      </div>

      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-800 leading-tight tracking-tight poppins"
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-indigo-700 to-indigo-500 bg-clip-text text-transparent">
            CSE-JU
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-5 text-lg md:text-xl text-slate-600 font-medium inter"
        >
          Department of Computer Science and Engineering
          <br />
          Jahangirnagar University, Savar, Dhaka — 1342
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 text-slate-500 inter max-w-xl mx-auto leading-relaxed"
        >
          Empowering innovation, research, and excellence — shaping the next
          generation of computer scientists and engineers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <a
            href="#events"
            className="bg-gradient-to-r shadow-2xl shadow-black from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white font-medium rounded-full px-8 py-3 hover:shadow-pink-200 transition-all duration-300 active:scale-95 inter"
          >
            Upcoming Events
          </a>
          <a
            href="#contact"
            className="border bg-white shadow-2xl shadow-blue-300 border-indigo-400 text-indigo-700 hover:bg-indigo-50 font-medium rounded-full px-8 py-3 transition-all duration-300 active:scale-95 inter"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>

      
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-100/50 to-transparent"></div>
    </section>
  );
};

export default Hero;

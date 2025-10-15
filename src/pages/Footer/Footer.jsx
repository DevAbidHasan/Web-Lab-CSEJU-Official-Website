import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="mx-4 sm:mx-8 md:mx-10 mt-25 mb-10 rounded-3xl md:border-3 border border-blue-600 overflow-hidden">
      <footer className="flex flex-col bg-gradient-to-r from-blue-50 via-blue-600/30 to-pink-200/40 rounded-3xl items-center justify-center py-12 md:py-16 text-sm text-gray-800/70">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-center">
          <a
            href="#hero"
            className="font-medium text-gray-500 hover:text-black transition-all"
          >
            Home
          </a>
          <Link
            to="/developer-resources"
            className="font-medium text-gray-500 hover:text-black transition-all"
          >
            Developer Resources
          </Link>
          <Link
            to="/privacy"
            className="font-medium text-gray-500 hover:text-black transition-all"
          >
            Privacy Policy
          </Link>
          <a
            href="#contact"
            className="font-medium text-gray-500 hover:text-black transition-all"
          >
            Contact
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6 mt-8 text-indigo-500">
          <Link target="_blank" to="https://www.facebook.com/jucse.official" className="hover:-translate-y-0.5 transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
         
          <a href="https://github.com/DevAbidHasan/Web-Lab-CSEJU-Official-Website" target="_blank" className="hover:-translate-y-0.5 transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          
          <a href="https://github.com/DevAbidHasan/Web-Lab-CSEJU-Official-Website" target="_blank" className="hover:-translate-y-0.5 transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 18c-4.51 2-5-2-7-2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <p className="mt-10 text-center text-gray-500 text-sm px-4">
          Copyright © 2025{" "}
          <Link to="/"
            className="text-indigo-500 hover:text-indigo-600 font-medium transition-all"
          >
            CSE, JU
          </Link>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;

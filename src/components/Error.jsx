import React from "react";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-slate-50 to-slate-100 px-6 sm:px-10 md:px-16 lg:px-32 text-center">
      <h1 className="text-6xl md:text-7xl font-extrabold text-indigo-600 poppins mb-6">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold poppins mb-4">
        Page Not Found
      </h2>
      <p className="text-slate-600 inter mb-8 max-w-md mx-auto">
        Oops! The page you're looking for doesn't exist or has been moved.  
        Don't worry, you can always return to the homepage and start fresh.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:-translate-y-1 inter"
      >
        Back to Home
      </button>
      
    </div>
  );
};

export default Error;

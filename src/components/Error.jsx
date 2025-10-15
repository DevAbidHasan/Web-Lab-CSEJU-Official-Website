import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-slate-50 to-slate-100 px-6 sm:px-10 md:px-16 lg:px-32 text-center">
        <Helmet>
            <title>
                404 Page Not Found
            </title>
        </Helmet>
      <div className="flex flex-col items-center justify-center text-sm max-md:px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
          404 Not Found
        </h1>
        <div className="h-px w-80 rounded bg-gradient-to-r from-gray-400 to-gray-800 my-5 md:my-7"></div>
        <p className="md:text-xl text-gray-400 mb-6 max-w-lg text-center">
          The page you are looking for does not exist or has been moved.
        </p>
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

export default Error;

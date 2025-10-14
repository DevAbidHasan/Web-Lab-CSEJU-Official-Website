import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-20 px-6 md:px-16 lg:px-24 xl:px-40 bg-gradient-to-b from-indigo-50 via-white to-indigo-50 overflow-hidden"
    >
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-200 blur-[140px] opacity-40 animate-pulse-slow"></div>

      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-800">
          Get in Touch
        </h2>
        <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
          Have any questions or collaboration ideas? We’d love to hear from you.
        </p>
      </div>

      <form
        className="relative z-10 max-w-2xl mx-auto bg-white/60 backdrop-blur-lg shadow-lg rounded-2xl p-8 md:p-10 flex flex-col gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col text-left">
          <label className="text-sm font-medium text-slate-700 mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white/70 text-slate-800"
            required
          />
        </div>

        <div className="flex flex-col text-left">
          <label className="text-sm font-medium text-slate-700 mb-2">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white/70 text-slate-800"
            required
          />
        </div>

        <div className="flex flex-col text-left">
          <label className="text-sm font-medium text-slate-700 mb-2">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white/70 text-slate-800 resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-4 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white font-medium rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
        >
          Send Message
        </button>
      </form>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-100/60 to-transparent"></div>
    </section>
  );
};

export default Contact;

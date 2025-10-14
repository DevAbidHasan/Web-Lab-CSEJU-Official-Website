import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // Disable body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navItems = ["Home","Faculty", "Academics", "Researches", "Notices"];

  return (
    <>
      {/* Navbar */}
      <nav className="z-50 flex items-center justify-between w-full py-3 px-5 sm:px-8 md:px-16 lg:px-24 text-sm bg-white/70 backdrop-blur-md fixed top-0 left-0 right-0 shadow-sm">
        <Link
          className="text-2xl md:text-3xl font-black text-indigo-600 tracking-wide"
          to="/"
        >
          CSEJU
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-slate-800">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setActiveLink(item)}
              className={`transition ${
                activeLink === item
                  ? "text-indigo-600 font-semibold"
                  : "hover:text-indigo-600"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden inter md:flex gap-3">
          <a
            href="#"
            className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition-all rounded-full text-white text-sm"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-6 py-2 border border-slate-300 active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900 text-sm"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden active:scale-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="lucide lucide-menu"
          >
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* Overlay (when drawer is open) */}
      <div
        className={`fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div
        className={`fixed left-0 top-0 z-[100] bg-white shadow-lg w-full h-1/2 sm:h-2/3 flex flex-col items-start justify-start gap-6 px-8 py-10 transform transition-transform duration-500 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 transition"
        >
          ✕
        </button>

        {/* Drawer Links */}
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => {
              setActiveLink(item);
              setMenuOpen(false);
            }}
            className={`text-lg font-medium transition ${
              activeLink === item
                ? "text-indigo-600 font-semibold"
                : "text-slate-800 hover:text-indigo-600"
            }`}
          >
            {item}
          </a>
        ))}

        {/* Drawer Buttons */}
        <div className="flex inter gap-3 mt-4">
          <a
            href="#"
            className="bg-indigo-500 text-white px-6 py-2 rounded-full text-sm active:scale-95 transition"
          >
            Get Started
          </a>
          <a
            href="#"
            className="border border-indigo-500 text-indigo-600 px-6 py-2 rounded-full text-sm active:scale-95 transition"
          >
            Login
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

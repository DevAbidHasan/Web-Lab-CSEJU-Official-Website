import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import { auth } from "../../firebase/firebase.init";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleLogout = () => {
    logout(auth)
      .then((res) => {
        toast.success("User Logout Successful");
      })
      .catch((error) => {
        toast.error("Logout Failed!!!!!");
      });
  };

  return (
    <>
      <nav className="z-50 flex items-center justify-between w-full py-3 px-5 sm:px-8 md:px-16 lg:px-24 text-sm bg-white/70 backdrop-blur-md fixed top-0 left-0 right-0 shadow-sm">
        <Link
          className="text-2xl md:text-3xl font-black text-indigo-600 tracking-wide"
          to="/"
        >
          CSEJU
        </Link>
        <Toaster />

        <div className="hidden md:flex items-center gap-8 text-slate-800">
          <Link
            to="/"
            onClick={() => setActiveLink("Home")}
            className={`transition ${
              activeLink === "Home"
                ? "text-indigo-600 font-semibold"
                : "hover:text-indigo-600"
            }`}
          >
            Home
          </Link>
          <Link
            to="/all-faculty-members"
            onClick={() => setActiveLink("Faculty")}
            className={`transition ${
              activeLink === "Faculty"
                ? "text-indigo-600 font-semibold"
                : "hover:text-indigo-600"
            }`}
          >
            Faculty
          </Link>
          <Link
            to="/academics"
            onClick={() => setActiveLink("Academics")}
            className={`transition ${
              activeLink === "Academics"
                ? "text-indigo-600 font-semibold"
                : "hover:text-indigo-600"
            }`}
          >
            Academics
          </Link>
          <Link
            to="/admission"
            onClick={() => setActiveLink("Apply")}
            className={`transition ${
              activeLink === "Apply"
                ? "text-indigo-600 font-semibold"
                : "hover:text-indigo-600"
            }`}
          >
            Admission
          </Link>
          <Link
            to="/notices"
            onClick={() => setActiveLink("Notices")}
            className={`transition ${
              activeLink === "Notices"
                ? "text-indigo-600 font-semibold"
                : "hover:text-indigo-600"
            }`}
          >
            Notices
          </Link>
        </div>

        <div className="hidden inter md:flex gap-3">
          {!user ? (
            <Link
              to="/register"
              className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition-all rounded-full text-white text-sm"
            >
              Register
            </Link>
          ) : (
            <Link
              to="/user-profile"
              className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition-all rounded-full text-white text-sm"
            >
              Profile
            </Link>
          )}
          {!user ? (
            <Link
              to="/login"
              className="px-6 py-2 border border-slate-300 active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900 text-sm"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="px-6 py-2 border border-slate-300 active:scale-95 hover:bg-orange-300 bg-orange-500 transition-all rounded-full text-white hover:text-slate-900 text-sm"
            >
              Logout
            </button>
          )}
        </div>

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

      <div
        className={`fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div
        className={`fixed left-0 top-0 z-[100] bg-white shadow-lg w-full h-1/2 sm:h-2/3 flex flex-col items-start justify-start gap-6 px-8 py-10 transform transition-transform duration-500 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 transition"
        >
          ✕
        </button>

        <Link
          to="/"
          onClick={() => {
            setActiveLink("Home");
            setMenuOpen(false);
          }}
          className={`text-lg font-medium transition ${
            activeLink === "Home"
              ? "text-indigo-600 font-semibold"
              : "text-slate-800 hover:text-indigo-600"
          }`}
        >
          Home
        </Link>
        <Link
          to="/all-faculty-members"
          onClick={() => {
            setActiveLink("Faculty");
            setMenuOpen(false);
          }}
          className={`text-lg font-medium transition ${
            activeLink === "Faculty"
              ? "text-indigo-600 font-semibold"
              : "text-slate-800 hover:text-indigo-600"
          }`}
        >
          Faculty
        </Link>
        <Link
          to="/academics"
          onClick={() => {
            setActiveLink("Academics");
            setMenuOpen(false);
          }}
          className={`text-lg font-medium transition ${
            activeLink === "Academics"
              ? "text-indigo-600 font-semibold"
              : "text-slate-800 hover:text-indigo-600"
          }`}
        >
          Academics
        </Link>
        <Link
          to="/Apply"
          onClick={() => {
            setActiveLink("Apply");
            setMenuOpen(false);
          }}
          className={`text-lg font-medium transition ${
            activeLink === "admission"
              ? "text-indigo-600 font-semibold"
              : "text-slate-800 hover:text-indigo-600"
          }`}
        >
          Admission
        </Link>
        <Link
          to="/notices"
          onClick={() => {
            setActiveLink("Notices");
            setMenuOpen(false);
          }}
          className={`text-lg font-medium transition ${
            activeLink === "Notices"
              ? "text-indigo-600 font-semibold"
              : "text-slate-800 hover:text-indigo-600"
          }`}
        >
          Notices
        </Link>

        <div className="flex inter gap-3 mt-4">
          {!user ? (
            <Link
              to="/register"
              className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition-all rounded-full text-white text-sm"
            >
              Register
            </Link>
          ) : (
            <Link
              to="/user-profile"
              className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition-all rounded-full text-white text-sm"
            >
              Profile
            </Link>
          )}
          {user ? (
            <Link
              to="/login"
              className="px-6 py-2 border border-slate-300 active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900 text-sm"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="px-6 py-2 border border-slate-300 active:scale-95 hover:bg-orange-300 bg-orange-500 transition-all rounded-full text-white hover:text-slate-900 text-sm"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

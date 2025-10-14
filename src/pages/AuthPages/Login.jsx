import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthContext";
import { auth } from "../../firebase/firebase.init";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";


const Login = () => {
  const navigate = useNavigate();
  const {login, signOut} = useContext(AuthContext);
  // handle manual login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then((result) => {
        Swal.fire({
          title: "Congratulations ",
          text: "Login Successful !!!",
          icon: "success",
          button: "OK",
        });
        
      })
      .catch((error) => {
        Swal.fire({
          title: "Failure ",
          text: "Login Failed !!!",
          icon: "error",
          button: "OK",
        });
      });
  };

  const handleGoogleLogin = async (e) => {
  e.preventDefault();

  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    Swal.fire({
        title :"Congratulations",
        text : "Login Successful !!!!",
        button : "OK",
        icon : "success",
        timer : 3000
    })
    console.log(user);
    // You can now save user info to your database or context
  } catch (error) {
    console.error("❌ Google Login Failed:", error.message);
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-indigo-50 px-4 py-24">
      <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 md:p-12 w-full max-w-md">
        <h2 className="text-3xl font-semibold poppins text-center text-gray-800 mb-2">
          Login
        </h2>
    

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 inter">
              Email
            </label>
            <input
              type="email"
              name="email"
            //   value={formData.email}
            //   onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 inter">
              Password
            </label>
            <input
              type="password"
              name="password"
            //   value={formData.password}
            //   onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg font-medium inter transition-all"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-3 text-gray-500 inter text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center hover:cursor-pointer justify-center gap-3 border border-gray-300 py-2.5 rounded-lg hover:bg-gray-50 transition-all inter"
        >
          <FcGoogle size={22} />
          <span>Continue with Google</span>
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-indigo-600 hover:underline cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

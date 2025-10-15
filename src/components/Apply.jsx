import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

const Apply = () => {

    const {user} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    session: "",
    mobile: "",
    shift: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Submitted:", formData);
    // alert("Application submitted successfully!");
    toast.success("Application has been submitted");
    
    navigate("/");
    
    // Reset form if needed
    // setFormData({ name: user?.name || "", email: user?.email || "", session: "", mobile: "", shift: "" });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-15">
      <h2 className="text-2xl font-bold mb-6 text-center">Apply Now</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="border rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
          className="border rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="text"
          name="session"
          value={formData.session}
          onChange={handleChange}
          placeholder="Session"
          className="border rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <select
          name="shift"
          value={formData.shift}
          onChange={handleChange}
          className="border rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">Select Class Shift</option>
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-5 rounded hover:bg-blue-700 transition duration-300"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default Apply;

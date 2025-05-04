import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";
import {
  FaLinkedinIn,
  FaGithub,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const submissionData = new FormData();
    submissionData.append("access_key", "1c95dfbf-cc3f-42bb-a46a-f7ffb797e34c");
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: submissionData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      setFormData({ name: "", email: "", message: "" });
    } else {
      console.error("Error", data);
      setResult(data.message || "Submission failed.");
    }
  };

  return (
    <div
      id="contact"
      className="text-white min-h-screen flex items-center justify-center bg-gradient-to-tr from-sky-900 via-sky-950 to-sky-900 py-12 px-4"
    >
      <div className="w-full max-w-6xl bg-gradient-to-tr from-sky-900 via-sky-950 to-sky-900 shadow-xl bg-opacity-10 backdrop-blur-lg rounded-xl  p-8 md:p-12 border border-gray-500">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 drop-shadow-lg">
          Let's Connect
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 flex flex-col border-r border-gray-400 pr-8">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              Contact Info
            </h3>
            <p className="text-white mb-2 flex items-center gap-2">
              <FaRegEnvelope /> shweta.bharti.cse@gmail.com
            </p>
            <p className="text-white flex items-center gap-2">
              <FaPhoneAlt /> +91 9876543210
            </p>

            <div className="flex justify-start gap-6 mt-6">
              <a
                href="https://www.linkedin.com/in/shweta-bharti-48b850259/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaLinkedinIn className="text-3xl text-indigo-400 hover:text-pink-600" />
              </a>
              <a
                href="https://github.com/Shweta220803"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaGithub className="text-3xl text-indigo-400 hover:text-pink-600" />
              </a>
              <a
                href="https://t.me/shweta22"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaTelegramPlane className="text-3xl text-indigo-400 hover:text-pink-600" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaTwitter className="text-3xl text-indigo-400 hover:text-pink-600" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={onSubmitHandler}
            className="w-full lg:w-2/3 space-y-6"
          >
            <div className="relative">
              <FaCircleUser className="absolute left-3 top-3 text-white" />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="pl-10 p-3 w-full rounded-lg bg-gray-800 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              />
            </div>

            <div className="relative">
              <FaRegEnvelope className="absolute left-3 top-3 text-white" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-10 p-3 w-full rounded-lg bg-gray-800 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows="4"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-3 w-full rounded-lg bg-gray-800 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                Submit
              </button>
            </div>

            {result && (
              <p className="text-center text-green-400 font-medium">{result}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

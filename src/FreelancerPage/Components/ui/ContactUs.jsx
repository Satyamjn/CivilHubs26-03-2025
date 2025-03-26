import React from "react";
import { FaGlobe, FaTwitter, FaInstagram, FaLink, FaCommentDots, FaBuilding, FaPhoneAlt } from "react-icons/fa";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r bg-[#6A38C2] text-white py-12 text-center rounded-b-3xl"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">Contact Us</h2>
        <p className="mt-2 text-sm sm:text-base">
          Contact with us to learn more about us, our vision, mission, success, and more.
        </p>
      </motion.div>
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-6">
      {/* Left Section */}
      <div className="md:w-1/2 bg-[#6A38C2] text-white p-10 rounded-lg md:rounded-r-none shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold flex items-center">
            <FaCommentDots className="mr-2" />
            Chat to Us
          </h3>
          <p>Our friendly team is here to help.</p>
          <a href="mailto:hi@ourcompany.com" className="text-yellow-300 hover:text-yellow-500 transition duration-300">
            logicalsoftech@gmail.com.com
          </a>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold flex items-center">
            <FaBuilding className="mr-2" />
            Office
          </h3>
          <p>Come say hello at our office HQ.</p>
          <p className="font-semibold">
            Logical Softech Near Krozzon Hotel,<br /> vijay Nagar, Indore
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold flex items-center">
            <FaPhoneAlt className="mr-2" />
            Phone
          </h3>
          <p>Mon-Fri from 8am to 6am</p>
          <p className="font-semibold">+91-8269829729</p>
        </div>

        <div className="mt-6 flex space-x-4">
          <a href="#" className="text-white text-2xl hover:text-yellow-300 transition duration-300">
            <FaGlobe />
          </a>
          <a href="#" className="text-white text-2xl hover:text-yellow-300 transition duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-white text-2xl hover:text-yellow-300 transition duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-white text-2xl hover:text-yellow-300 transition duration-300">
            <FaLink />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 bg-white p-10 rounded-lg md:rounded-l-none shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Level up your brand</h2>
        <p className="mb-6">You can reach us anytime via <a href="logicalsoftech@gmail.com" className="text-blue-600 hover:underline">logicalsoftech@gmail.com</a></p>

        <form className="space-y-4">
          <input type="text" placeholder="Enter your Name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
          <input type="email" placeholder="Enter a valid email address" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
          <input type="tel" placeholder="Enter your phone (e.g. +14155552675)" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
          <textarea placeholder="How can we help?" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"></textarea>
          <button type="submit" className="w-full bg-orange-500 text-white font-semibold p-3 rounded-md hover:bg-yellow-600 transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ContactUs;

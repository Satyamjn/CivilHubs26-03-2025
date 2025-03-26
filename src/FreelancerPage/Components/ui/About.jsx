import React from "react";
// import LegalExpert from "../../assets/images/blog/blog-img-06.png";
import LegalExpert from "public/assets/images/blog/blog-img-06.png";

// import LegalTeam from "../../assets/images/blog/blog-img-02.png";
import LegalTeam from "public/assets/images/blog/blog-img-02.png";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 text-gray-900">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#7948ce] to-[#6A38C2] text-white py-12 text-center rounded-b-3xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">About Us</h2>
          <p className="mt-2 text-sm sm:text-base">
            Read more about us, our vision, mission, success, and more.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="container mx-auto px-6 lg:px-12 py-12 grid gap-12 grid-cols-1 md:grid-cols-2 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold">
              Improve Your Interview Skills Step by Step
            </h3>
            <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              An interview blog shares insights from experts, thought leaders, 
              and professionals to help you ace your interviews with the right strategies.
            </p>
            <Link to="/browse">
              <button className="mt-6 bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition text-sm sm:text-base">
                Get a Job
              </button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <img
              src={LegalExpert}
              alt="Interview Preparation"
              className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg"
            />
          </motion.div>
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="container mx-auto px-6 lg:px-12 py-6 text-center bg-white shadow-md rounded-lg"
        >
          <h3 className="text-2xl sm:text-3xl font-bold">Take a Vital Look at Our Application</h3>
          <p className="mt-1 text-gray-700 text-sm sm:text-base">
            By accessing and using our platform, you agree to be bound by the terms of service.
          </p>
          <div className="mt-4 flex justify-center">
            <img
              src={LegalTeam}
              alt="Our Team"
              className="rounded shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
        </motion.div>

        {/* Statistics Section */}
        <div className="container mx-auto px-6 lg:px-12 py-12 grid gap-6 text-center grid-cols-2 sm:grid-cols-4">
          {[
            "10+ Years Experience",
            "99% Accuracy Rate",
            "500+ Positive Reviews",
            "600+ Trusted Partners",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="flex flex-col items-center"
            >
              <h4 className="text-3xl sm:text-4xl font-bold text-purple-700">{item.split(" ")[0]}</h4>
              <p className="text-gray-700 text-sm sm:text-base">{item.split(" ").slice(1).join(" ")}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;

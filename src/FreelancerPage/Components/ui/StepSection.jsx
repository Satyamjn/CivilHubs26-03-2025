import React from "react";
import { FaUserPlus, FaSearch, FaUpload, FaBriefcase } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaUserPlus className="text-orange-500 text-3xl" />,
    title: "Create an Account",
    description:
      "Signup for the job applicant profile, mention your qualifications, past experiences, and expertise, and scope your interests. Voilà! You're all set to find your dream jobs.",
  },
  {
    id: 2,
    icon: <FaSearch className="text-purple-500 text-3xl" />,
    title: "Search Job",
    description:
      "Once you set your job hunting parameters, you'll find many openings related to your career interest on the home page and even filter out some of the best job openings.",
  },
  {
    id: 3,
    icon: <FaUpload className="text-teal-500 text-3xl" />,
    title: "Upload CV/ Resume",
    description:
      "From numerous job openings, shortlist the right-match vacancy to your profile and apply right after by uploading your CV/ Resume and answering a couple of questions, if any.",
  },
  {
    id: 4,
    icon: <FaBriefcase className="text-yellow-500 text-3xl" />,
    title: "Get Job",
    description:
      "After applying, wait for some time, schedule an interview, and if everything goes right, then get hired more quickly than traditional hiring methods.",
  },
];

const StepsSection = () => {
  return (
    <section className="text-center py-10 px-4 -my-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold -mt-4">
        Get Hired in{" "}
        <span className="text-purple-600">4 Quick Easy Steps</span>
      </h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
        The quickest and most effective way to get hired by the top firms
        working in your career interest areas.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[90%] mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="group relative bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center cursor-pointer overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Animated Background Fill */}
            <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:h-full h-0 z-0"></div>

            {/* Step Icon */}
            <div className="relative z-10 bg-gray-100 rounded-full p-4 transition-all duration-300 group-hover:bg-white">
              {step.icon}
            </div>

            {/* Step Title */}
            <h3 className="relative z-10 font-semibold text-lg mt-4 text-gray-800 group-hover:text-white transition-all duration-300">
              {step.title}
            </h3>

            {/* Step Description */}
            <p className="relative z-10 text-gray-500 mt-2 group-hover:text-white/90 transition-all duration-300">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;

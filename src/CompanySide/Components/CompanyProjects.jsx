import React from 'react'
import { useState } from "react";
import { Search } from "lucide-react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaMoneyBillWave, FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";
import { FaEye } from 'react-icons/fa';
import NavbarComp from './Navbar';
import Footer from './Footer';


const projectsData = [
  {
    title: "Bridge Construction",
    client: "XYZ Infrastructure",
    date: "Jan 10, 2025",
    budget: "25,000-50,000",
    location: "Pune, India",
  },
  {
    title: "Lane Construction",
    client: "XYZ Infrastructure",
    date: "Feb 20, 2025",
    budget: "25,000-50,000",
    location: "Pune, India",
  },
  {
    title: "Road Construction",
    client: "XYZ Infrastructure",
    date: "Mar 15, 2025",
    budget: "25,000-50,000",
    location: "Pune, India",
  },
  {
    title: "Build Construction",
    client: "XYZ Infrastructure",
    date: "Jul 18, 2025",
    budget: "25,000-50,000",
    location: "Pune, India",
  },
  {
    title: "Home Construction",
    client: "XYZ Infrastructure",
    date: "Feb 28, 2025",
    budget: "25,000-50,000",
    location: "Pune, India",
  },
  {
    title: "Lift Construction",
    client: "XYZ Infrastructure",
    date: "Jan 15, 2025",
    budget: "25,000-50,000",
    location: "Pune, India",
  },
]

const jobs = [
  {
    title: "Civil Engineer",
    company: "Construction Pvt. Ltd.",
    date: "April 30, 2025",
    location: "Pune, India",
    type: "Full Time",
    
  },
  {
    company: "Construction Pvt. Ltd.",
    title: "Site Engineer",
    location: "Pune, India",
    type: "Full Time",
    date: "May 27, 2025",
  },
  {
    company: "Construction Pvt. Ltd.",
    title: "Site Engineer",
    location: "Pune, India",
    type: "Full Time",
    date: "June 20, 2025",
  
  },
  {
    company: "Construction Pvt. Ltd.",
    title: "Site Engineer",
    location: "Pune, India",
    type: "Full Time",
    date: "July 15, 2025",
   
  },
  // Add more job objects as needed
];


function Projects() {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, backgroundImage } = location.state || { category: "" };
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <>
    <NavbarComp/>
    <div>
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-64 flex flex-col justify-center items-start px-4 md:px-10 lg:px-20 text-white">
          <img
            src='/assets/Civilhubs/const.png'
            alt={category}
            className="absolute inset-0 z-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-60 z-5"></div>
          <button
            className="absolute top-3 left-4 md:top-5 md:left-10 bg-white text-black p-2 md:p-3 rounded-full shadow z-10"
            onClick={() => navigate(-1)}
          >
            <IoMdArrowRoundBack size={15} />
          </button>
          <button className="absolute top-3 right-4 md:top-5 md:right-10 bg-white text-black p-2 md:p-3 rounded-full shadow z-10">
            <Search size={15} />
          </button>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold relative z-10 mt-10 text-gray-900">
            {category}
          </h1>
          <div className="flex flex-wrap mt-4 gap-2 relative z-10">
            <button
              className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base ${
                activeTab === "projects"
                  ? "bg-teal-500 text-white"
                  : "bg-white text-black border border-gray-300"
              }`}
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </button>
            <button
              className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base ${
                activeTab === "jobs"
                  ? "bg-teal-500 text-white"
                  : "bg-white text-black border border-gray-300"
              }`}
              onClick={() => setActiveTab("jobs")}
            >
              Jobs
            </button>
          </div>
          <p className="mt-2 text-sm md:text-base text-gray-900 font-semibold relative z-10">
            {activeTab === "projects" ? `Showing Projects: ${projectsData.length} Results` : `Showing Jobs: ${jobs.length} Results`}
          </p>
        </div>

        {/* Content Section */}
        <div className="p-4 md:p-10">
          {activeTab === "projects" ? (
            <div className="p-5 bg-gray-100 rounded-lg shadow">
              <h2 className="text-lg md:text-2xl font-bold text-gray-800">Project Listings</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {projectsData.length > 0 ? (
                  projectsData.map((project, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                      <div className="flex flex-col relative">
                        <div className="flex items-center space-x-2">
                          <FaBriefcase className="text-teal-500 text-lg" />
                          <h2 className="text-xl font-semibold">{project.title}</h2>
                        </div>
                        <p className="text-gray-500 text-sm mt-1">Client: {project.client}</p>
                        <div className="flex items-center text-gray-500 text-sm space-x-2 mt-2">
                          <FaCalendarAlt />
                          <span>Posted on: {project.date}</span>
                        </div>
                        <div className="flex items-center text-gray-700 text-sm space-x-2 mt-2">
                          <FaMapMarkerAlt />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 mt-4">
                          <div className="bg-teal-500 text-white text-sm px-4 py-2 rounded-lg w-40">
                            <p className="font-semibold">Budget:</p>
                            <p>{project.budget}</p>
                          </div>
                          <button
                            className="flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm transition"
                            onClick={() => navigate('/viewproject', { state: { project } })} // Navigate to view project
                          >
                            <FaEye />
                            <span>View Project</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No projects available for this category.</p>
                )}
              </div>
            </div>
          ) : (
            <div className="p-5 bg-gray-100 rounded-lg shadow">
              <h2 className="text-lg md:text-2xl font-bold text-gray-800">Job Listings</h2>
              <ul className="text-gray-600 mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs.length > 0 ? (
                  jobs.map((job, index) => (
                    <li key={index} className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                      <div className="flex flex-col relative p-4 bg-white transition-shadow duration-300">
                        {/* Job Title */}
                        <div className="flex items-center space-x-2">
                          <FaBriefcase className="text-teal-500 text-lg" />
                          <h2 className="text-xl font-semibold">{job.title}</h2>
                        </div>

                        {/* Company Name */}
                        <p className="text-gray-500 text-sm mt-1">Company: {job.company}</p>

                        {/* Date Posted */}
                        <div className="flex items-center text-gray-500 text-sm space-x-2 mt-2">
                          <FaCalendarAlt />
                          <span>Posted on: {job.date}</span>
                        </div>

                        {/* Job Location */}
                        <div className="flex items-center text-gray-700 text-sm space-x-2 mt-2">
                          <FaMapMarkerAlt />
                          <span>{job.location}</span>
                        </div>

                        {/* Job Type */}
                        <div className="flex items-center text-gray-700 text-sm space-x-2 mt-2">
                          <FaBriefcase />
                          <span>{job.type}</span>
                        </div>

                        {/* View Job Button */}
                        <div className="flex sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 mt-4">
                          <button
                            className="flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm transition"
                            onClick={() => navigate('/viewjobs', { state: { job } })} // Navigate to view job
                          >
                            <FaEye />
                            <span>View Job</span>
                          </button>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <li>No jobs available for this category.</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Projects;



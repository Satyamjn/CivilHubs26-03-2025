import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { IoMdArrowRoundBack } from 'react-icons/io';
import { Search } from 'lucide-react';
import Navbar from './shared/Navbar';

import { FiClock } from "react-icons/fi";
import { FaMoneyBillWave } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdPeople } from "react-icons/md";
import Footer from './shared/Footer';

const projectProposals = [
  {
    title: "Structural Analysis & Design for Residential Building",
    company: "Engtec Consulting Inc.",
    budget: "₹ 2500",
    deadline: "28, March 2025",
    status: "Pending",
    totalApplicants: 5 // New key added
  },
  {
    title: "Commercial Complex Structural Design",
    company: "BuildTech Solutions",
    budget: "₹ 5000",
    deadline: "15, April 2025",
    status: "Approved",
    totalApplicants: 10 // New key added
  },
  {
    title: "Bridge Load Analysis & Safety Assessment",
    company: "InfraTech Pvt. Ltd.",
    budget: "₹ 8000",
    deadline: "10, May 2025",
    status: "Pending",
    totalApplicants: 3 // New key added
  },
  {
    title: "High-Rise Building Wind Load Analysis",
    company: "Skyline Constructions",
    budget: "₹ 6000",
    deadline: "5, June 2025",
    status: "Rejected",
    totalApplicants: 0 // New key added
  },
  {
    title: "Warehouse Structural Reinforcement",
    company: "LogiStruct Engineers",
    budget: "₹ 4500",
    deadline: "20, July 2025",
    status: "Pending",
    totalApplicants: 2 // New key added
  }
];

const jobApplications = [
  {
    company: "Engtec Consulting Inc",
    position: "Construction Engineer",
    salary: "₹ 2500",
    location: "Indore, MP",
    experience: "2 years",
    jobType: "Full Time",
    status: "In Review",
    totalApplications: 1 // New key added
  },
  {
    company: "BuildTech Solutions",
    position: "Civil Engineer",
    salary: "₹ 4500",
    location: "Mumbai, MH",
    experience: "3 years",
    jobType: "Full Time",
    status: "Pending",
    totalApplications: 2 // New key added
  },
  {
    company: "InfraTech Pvt. Ltd.",
    position: "Structural Analyst",
    salary: "₹ 5500",
    location: "Delhi, DL",
    experience: "5 years",
    jobType: "Part Time",
    status: "Approved",
    totalApplications: 3 // New key added
  },
  {
    company: "Skyline Constructions",
    position: "Site Supervisor",
    salary: "₹ 4000",
    location: "Bangalore, KA",
    experience: "4 years",
    jobType: "Full Time",
    status: "Rejected",
    totalApplications: 0 // New key added
  },
  {
    company: "LogiStruct Engineers",
    position: "Project Manager",
    salary: "₹ 7000",
    location: "Pune, MH",
    experience: "6 years",
    jobType: "Contract",
    status: "In Review",
    totalApplications: 1 // New key added
  }
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-600";
    case "Approved":
      return "bg-green-100 text-green-600";
    case "Rejected":
      return "bg-red-100 text-red-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};
export default function FreelanceProposals() {
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = location.state || { category: "" };
  const [activeTab, setActiveTab] = useState("jobsApplication");

  const handleApplyNow = (job) => {
    navigate('/viewApplication', { state: { job } });
  };

  // Dummy data for the ongoing project
  const ongoingProject = {
    date: "Feb 28, 2025",
    title: "Structural Analysis & Design for Residential Building",
    company: "Engtec Consulting Inc.",
    cost: "25,000",
    description: "Comprehensive analysis of structural integrity and safety measures for a multi-story residential building.",
    image: "/assets/Civilhubs/cat1.png"
  };

    useEffect(() => {
            window.scrollTo(0, 0); // Page को top से load करेगा
        }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row max-w-8xl mx-auto px-4"> {/* Set max width and center the content */}
  {/* Right Side: Content Section */}
  <div className="md:w-2/3 w-full flex flex-col items-start">
    {/* Hero Section */}
    <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-64 flex flex-col justify-center items-start px-4 md:px-12 lg:px-20 text-white mt-5">
      <img
        src={'/assets/Civilhubs/cat1.png'}
        alt={category}
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />

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
          className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base ${activeTab === "projectsproposals" ? "bg-teal-500 text-white" : "bg-white text-black border border-gray-300"
            }`}
          onClick={() => setActiveTab("projectsproposals")}
        >
          Project Proposals
        </button>
        <button
          className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base ${activeTab === "jobsApplication" ? "bg-teal-500 text-white" : "bg-white text-black border border-gray-300"
            }`}
          onClick={() => setActiveTab("jobsApplication")}
        >
          Jobs Applications
        </button>
      </div>
      <p className="mt-2 text-sm md:text-base text-gray-900 font-semibold relative z-10">
        {activeTab === "projectsproposals" ? `Showing Projects: ${projectProposals.length} Results` : `Showing Jobs: ${jobApplications.length} Results`}
      </p>
    </div>

    {/* Content Section */}
    <div className="mt-7">
      {activeTab === "projectsproposals" ? (
        // Project Proposal Section
        <div className="p-5 bg-gray-100 rounded-lg shadow">
          <h2 className="text-lg md:text-2xl font-bold text-gray-800">Project Application</h2>
          <ul className="text-gray-600 mt-2 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4 max-w-8xl">
            {projectProposals.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-5 border border-gray-200">
                {/* Title & Options */}
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">{project.title}</h2>
                    <p className="text-gray-500 text-sm">Client: {project.company}</p>
                  </div>
                  <HiOutlineMenuAlt3 className="text-teal-500 text-xl cursor-pointer" />
                </div>

                {/* Budget, Deadline & Applicants */}
                <div className="flex items-center text-gray-600 text-sm mt-3 space-x-4">
                  <span className="flex items-center gap-1">
                    <FaMoneyBillWave className="text-lg text-gray-700" /> Budget: {project.budget}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock className="text-lg text-gray-700" /> Deadline: {project.deadline}
                  </span>
                </div>

                <div className="flex items-center text-gray-600 text-sm mt-2">
                  <MdPeople className="text-lg text-gray-700" />
                  <span className="ml-1">Total Applicants: {project.totalApplicants}</span>
                </div>

                {/* Status */}
                <div className={`${getStatusStyle(project.status)} flex items-center justify-center py-2 mt-3 rounded-md`}>
                  ⏳ Status: {project.status}
                </div>

                {/* View Proposal Button */}
                <button
                  onClick={() => navigate('/viewProposal', { state: { project } })}
                  className="bg-teal-500 text-white text-center w-full py-2 mt-4 rounded-lg hover:bg-teal-600 transition duration-300"
                >
                  View Proposal Details
                </button>
              </div>
            ))}
          </ul>
        </div>

      ) : (
        // Job Application Section
        <div className="p-5 bg-gray-100 rounded-lg shadow">
          <h2 className="text-lg md:text-2xl font-bold text-gray-800">Job Applications</h2>
          <ul className="text-gray-600 mt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-6xl">
            {jobApplications.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-5 border border-gray-200 w-full md:w-92 lg:w-[320px]"
              >
                {/* Title & Options */}
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">{job.company}</h2>
                    <p className="text-gray-500 text-sm">Client: {job.position}</p>
                  </div>
                  <span className="text-teal-500 text-xl">
                    <HiOutlineMenuAlt3 />
                  </span>
                </div>

                {/* Budget, Deadline & Applicants */}
                <div className="flex items-center text-gray-600 text-sm mt-3 space-x-4">
                  <span className="flex items-center gap-1">
                    <FaMoneyBillWave className="text-lg text-gray-700" /> {job.salary}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock className="text-lg text-gray-700" /> 📍 {job.location}
                  </span>
                </div>

                <div className="flex items-center text-gray-600 text-sm mt-2">
                  <MdPeople className="text-lg text-gray-700" />
                  <span className="ml-1">📅 {job.experience}</span>
                </div>

                <span className="flex items-center gap-1">💼 {job.jobType}</span>

                {/* Job Status */}
                <div
                  className={`${getStatusStyle(job.status)} flex items-center justify-center py-2 mt-3 rounded-md`}
                >
                  ⏳ Status: {job.status}
                </div>

                {/* View Proposal Button */}
                <button
                  onClick={() => handleApplyNow(job)}
                  className="bg-teal-500 text-white text-center w-full py-2 mt-4 rounded-lg hover:bg-teal-600 transition duration-300"
                >
                  View Job Details
                </button>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>

  {/* Left Side: Ongoing Project Card */}
  <div className="md:w-1/3 p-4">
    <h2 className="text-lg font-bold text-gray-800 mb-4">Similar Projects</h2>
    <div
      className="bg-white p-6 rounded-lg shadow-lg border-lg hover:shadow-md transition-transform duration-300 hover:shadow-teal-500 cursor-pointer"
      onClick={() => navigate('/bids', { state: { project: ongoingProject } })} // Navigate to project detail
    >
      <div className="flex justify-end gap-2 items-center mb-2">
        <span className="text-gray-500 text-[11px]">{ongoingProject.date}</span>
      </div>
      <div className="flex items-start gap-4 mb-5">
        <img
          src={ongoingProject.image}
          alt={ongoingProject.title}
          className="h-14 w-14 rounded-lg object-cover border border-gray-300"
        />
        <div className="flex-1">
          <h3 className="text-[15px] font-semibold text-gray-900">{ongoingProject.company}</h3>
          <h2 className="text-sm font-medium text-gray-500">{ongoingProject.title}</h2>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-2 line-clamp-3">
        {ongoingProject.description}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold text-teal-500">₹{ongoingProject.cost}</span>
        <button onClick={() => navigate('/bids', { state: { project } })} className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition">
          Bid Now
        </button>
      </div>
    </div>
  </div>
</div>
      <Footer/>
    </>
  );
}
import React, { useEffect } from 'react';

import { FaLocationDot } from 'react-icons/fa6';
import { FaClock, FaUserGraduate, FaMoneyBillWave } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from "react-icons/hi";


import { IoMdArrowRoundBack } from 'react-icons/io';
import { Search } from 'lucide-react';


import { FiClock } from "react-icons/fi";


import { MdPeople } from "react-icons/md";
import Navbar from '@/FreelancerPage/Components/shared/Navbar';
import Footer from '../Components/Footer';

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

const ViewApplication = () => {
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
   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top on load
    }, []);

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-full mx-auto">
        <div className="p-4 rounded-lg flex gap-4">
          {/* Main Card: Structural Analysis & Design for Residential Building */}
          <div className="w-2/3 border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">
              Structural Analysis & Design for Residential Building
            </h2>
            <span className="flex items-center gap-1">
              <FaLocationDot /> India
            </span>
            <p className="mt-2 text-gray-700">
              I am pleased to submit my proposal for the structural design of
              your commercial building project. With extensive experience in
              structural engineering and commercial construction, I am confident
              in my ability to provide a safe, efficient, and cost-effective
              design that aligns with your project goals.
              I am pleased to submit my proposal for the structural design of
              your commercial building project. With extensive experience in
              structural engineering and commercial construction, I am confident
              in my ability to provide a safe, efficient, and cost-effective
              design that aligns with your project goals.
              construction, I am confident
              in my ability to provide a safe, efficient, and cost-effective
              design that aligns with your project goals.
              I am pleased to submit my proposal for the structural design of
              your commercial building project. With extensive experience in
              structural engineering and commercial construction, I am confident
              in my ability to provide a safe, efficient, and cost-effective
              design that aligns with your project goals.construction, I am confident
              in my ability to provide a safe, efficient, and cost-effective
              design that aligns with your project goals.
              I am pleased to submit my proposal for the structural design of
              your commercial building project. With extensive experience in
              structural engineering and commercial construction, I am confident
              in my ability to provide a safe, efficient, and cost-effective
              design that aligns with your project goals.construction, I am confident
              in my ability to provide a safe, efficient, and cost-effective
              design that aligns with your project goals.
              I am pleased to submit my proposal for the structural design of
              your commercial building project. With extensive experience in
              structural engineering and commercial construction, I am confident
              in my ability to provide a safe, efficient, and cost-effective
              design that aligns with your project goals.construction, I am confident
              in my ability to provide a safe, efficient, and cost-effective
              design that aligns with your project goals.
              I am pleased to submit my proposal for the structural design of
              your commercial building project. With extensive experience in
              structural engineering and commercial construction, I am confident
              in my ability to provide a safe, efficient, and cost-effective
              design that aligns with your project goals.
            </p>





            {/* Skills & Expertise Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="border px-3 py-1 rounded-full bg-gray-200 text-sm">
                  Structural Engineering
                </span>
                <span className="border px-3 py-1 rounded-full bg-gray-200 text-sm">
                  AutoCAD, Revit, or STAAD Pro
                </span>
                <span className="border px-3 py-1 rounded-full bg-gray-200 text-sm">
                  Load Analysis
                </span>
                <span className="border px-3 py-1 rounded-full bg-gray-200 text-sm">
                  Building Codes & Compliance
                </span>
                <span className="border px-3 py-1 rounded-full bg-gray-200 text-sm">
                  Construction Documentation
                </span>
              </div>
            </div>


            <p className="mt-4 text-gray-700">
              I understand the importance of delivering a design that not only
              meets regulatory standards but also optimizes material usage and
              construction efficiency. My approach will focus on achieving
              structural integrity while maintaining cost-effectiveness and
              functionality.design that not only
              meets regulatory standards but also optimizes material usage and
              construction efficiency. My approach will focus on achieving
              structural integrity while maintaining cost-effectiveness and
              functionality.design that not only
              meets regulatory standards but also optimizes material usage and
              construction efficiency. My approach will focus on achieving
              structural integrity while maintaining cost-effectiveness and
              functionality.design that not only
              meets regulatory standards but also optimizes material usage and
              construction efficiency. My approach will focus on achieving
              structural integrity while maintaining cost-effectiveness and
              functionality.design that not only
              meets regulatory standards but also optimizes material usage and
              construction efficiency. My approach will focus on achieving
              structural integrity while maintaining cost-effectiveness and
              functionality.design that not only
              meets regulatory standards but also optimizes material usage and
              construction efficiency. My approach will focus on achieving
              structural integrity while maintaining cost-effectiveness and
              functionality.design that not only
              meets regulatory standards but also optimizes material usage and
              construction efficiency. My approach will focus on achieving
              structural integrity while maintaining cost-effectiveness and
              functionality.
              functionality.design that not only
              meets regulatory standards but also optimizes material usage and
              construction efficiency. My approach will focus on achieving
              structural integrity while maintaining cost-effectiveness and
              functionality.  functionality.design that not only
              meets regulatory standards but also optimizes material usage and
              construction efficiency. My approach will focus on achieving
              structural integrity while maintaining cost-effectiveness and
              functionality.  functionality.design that not only
              meets regulatory standards but also optimizes material usage and
              construction efficiency. My approach will focus on achieving
              structural integrity while maintaining cost-effectiveness and
              functionality.  functionality.design that not only
              meets regulatory standards but also optimizes material usage and
              construction efficiency. My approach will focus on achieving
              structural integrity while maintaining cost-effectiveness and
              functionality.  functionality.design that not only
              meets regulatory standards but also optimizes material usage and
              construction efficiency. My approach will focus on achieving
              structural integrity while maintaining cost-effectiveness and
              functionality.  functionality.design that not only
              meets regulatory standards but also optimizes material usage and
              construction efficiency. My approach will focus on achieving
              structural integrity while maintaining cost-effectiveness and
              functionality.  functionality.design that not only
              meets regulatory standards but also optimizes material usage and
              construction efficiency. My approach will focus on achieving
              structural integrity while maintaining cost-effectiveness and
              functionality.
            </p>

            {/* Project Duration, Experience Level, and Rate Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Project Details</h3>
              <div className="flex flex-col gap-3 mt-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <FaClock className="text-gray-800" />
                  <span className="text-gray-800 font-medium">6 weeks</span>
                  <span className="text-sm">Estimated Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUserGraduate className="text-gray-800" />
                  <span className="text-gray-800 font-medium">Intermediate</span>
                  <span className="text-sm">Experience Level</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMoneyBillWave className="text-gray-800" />
                  <span className="text-gray-800 font-medium">₹3,500 - ₹5,000</span>
                  <span className="text-sm">Fixed Rate</span>
                </div>
              </div>
            </div>


            {/* Pending Button */}
            <button
              className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg shadow-md"
            >
              Pending
            </button>
          </div>

          {/* Your Proposed Term Section */}
          <div className="w-1/3 border p-4 rounded-lg shadow-md">

            <div className="p-5 bg-gray-100 rounded-lg shadow">
              <h2 className="text-lg md:text-2xl font-bold text-gray-800">Job Applications</h2>
              <ul className="text-gray-600 mt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4 max-w-2xl">
                {jobApplications.map((job, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-5 border border-gray-200 w-full md:w-92 lg:w-[410px]"
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


          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ViewApplication;

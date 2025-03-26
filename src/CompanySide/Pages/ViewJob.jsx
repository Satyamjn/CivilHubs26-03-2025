import React from "react";
import { FaTrashAlt, FaFilePdf } from "react-icons/fa";
import { BsBriefcase, BsCurrencyRupee, BsCardChecklist } from "react-icons/bs";
import { MdSchool, MdLanguage } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import NavbarComp from "../Components/Navbar";
import Footer from "../Components/Footer";

const jobListings = [
  {
    id: 1,
    title: "Structural Design for a Commercial Building",
    postedTime: "2 hours ago",
    location: "India",
    jobType: "Full Time",
    jobCategory: "Other",
    description: "We are looking for a civil/structural engineer to design a commercial building, ensuring compliance with local regulations and safety standards...",
    responsibilities: "We are looking for a civil/structural engineer to design a commercial building...",
    skills: ["Structural Engineering", "AutoCAD, Revit, or STAAD Pro", "Load Analysis", "Building Codes & Compliance", "Construction Documentation"],
    experience: "0-6 months",
    education: "Graduate",
    englishRequired: "Basic",
    salary: { min: 35500, max: 70000, unit: "Per Annum" },
    attachments: ["JobDescription.pdf", "ProjectDetails.pdf"],
    totalApplications: "Less than 5",
  },
];

const similarJobs = [
    {
        title: "Civil Engineer",
        company: "Urban Development Corp.",
        location: "Remote",
        salary: "$75,000 - $95,000 per year",
        description: "We are looking for a Civil Engineer to design, develop, and manage infrastructure projects. Candidates should have a strong background in project management and engineering principles."
    },
    {
        title: "Structural Engineer",
        company: "Constructive Solutions Inc.",
        location: "Houston, TX",
        salary: "$80,000 - $100,000 per year",
        description: "Seeking a Structural Engineer with expertise in analyzing and designing structures. Familiarity with codes and regulations is a must."
    },
    {
        title: "Geotechnical Engineer",
        company: "Groundworks LLC",
        location: "Atlanta, GA",
        salary: "$85,000 - $110,000 per year",
        description: "Join our team as a Geotechnical Engineer, responsible for assessing ground conditions and designing foundations tailored to various projects."
    },
    {
        title: "Transportation Engineer",
        company: "City Planning Associates",
        location: "Remote",
        salary: "$70,000 - $90,000 per year",
        description: "We are seeking a Transportation Engineer to develop plans for transportation systems and ensure compliance with regulations."
    },
];

const ViewJob = ({ job = jobListings[0] }) => {
  return (
    <>
    <NavbarComp/>
    <div className="flex p-6 max-w-8xl mx-auto gap-4 mb-12">
      {/* Left Column: Job Details */}
      <div className="w-4/5 border border-gray-300 rounded-lg shadow-lg p-6">
        {/* Job Title */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Job Details</h1>
          <div className="flex gap-3 text-red-500">
            <FaTrashAlt className="cursor-pointer" />
          </div>
        </div>

        {/* Job Information */}
        <h2 className="text-xl font-semibold mt-4">{job.title}</h2>
        <p className="text-gray-500 text-sm">Posted • {job.postedTime}</p>
        
        <h3 className="text-lg font-semibold mt-4">Job Description:</h3>
        <p className="text-gray-700">{job.description}</p>

        {/* Experience, Education & Salary */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-2">
            <BsBriefcase className="text-gray-600" />
            <span className="font-semibold">Experience Required:</span>
            <p>{job.experience}</p>
          </div>
          <div className="flex items-center gap-2">
            <MdSchool className="text-gray-600" />
            <span className="font-semibold">Education:</span>
            <p>{job.education}</p>
          </div>
          <div className="flex items-center gap-2">
            <MdLanguage className="text-gray-600" />
            <span className="font-semibold">English Required:</span>
            <p>{job.englishRequired}</p>
          </div>
          <div className="flex items-center gap-2">
            <BsCurrencyRupee className="text-gray-600" />
            <span className="font-semibold">Salary Range:</span>
            <p>₹{job.salary.min} - ₹{job.salary.max} {job.salary.unit}</p>
          </div>
        </div>

        {/* Skills Required */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <GiSkills className="text-gray-600" />
            Skills & Expertise:
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {job.skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Attachments */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Attachments:</h3>
          <ul className="mt-2 space-y-2">
            {job.attachments.map((attachment, index) => (
              <li key={index} className="flex justify-between items-center border p-2 rounded-md">
                <div className="flex items-center gap-2">
                  <FaFilePdf className="text-red-500" />
                  <p className="text-gray-700">{attachment}</p>
                </div>
                <FaTrashAlt className="text-red-500 cursor-pointer" />
              </li>
            ))}
          </ul>
        </div>

        {/* Total Applications */}
        <p className="mt-6 text-gray-500 flex items-center gap-2">
          <BsCardChecklist className="text-gray-600" />
          Total Applications • {job.totalApplications}
        </p>
      </div>

      {/* Right Column: Similar Jobs */}
     {/* Similar Projects Section */}
     <div className="w-1/3 border border-gray-300 rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-semibold">Similar Jobs</h2>
        <ul className="mt-4 space-y-2">
      {similarJobs.map((similarJob, index) => (
        <li key={index} className="border p-2 rounded-md">
          <h3 className="font-semibold">{similarJob.title}</h3>
          <p>{similarJob.company}</p>
          <p>{similarJob.location}</p>
          <p>{similarJob.salary}</p>
          <p className="text-gray-600">{similarJob.description}</p>
        </li>
      ))}
    </ul>
      </div>
    
    </div>

    <Footer/>
    </>
  );
};

export default ViewJob;
import React from "react";
import { useLocation } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { LuUserCog } from "react-icons/lu"; // Experience Icon
import { PiWalletLight } from "react-icons/pi"; // Budget Type Icon
import { PiMoneyLight } from "react-icons/pi"; // Budget Range Icon
import NavbarComp from "../Components/Navbar";
import Footer from "../Components/Footer";


// import { FaTrashAlt, FaFilePdf } from 'react-icons/fa'; // Importing Font Awesome icons
// import { LuUser } from 'lucide-react'; // Importing the LuUser Cog icon
// import { PiWalletLight, PiMoneyLight } from 'react-icons/pi'; // Importing Pi icons
const ViewProject = () => {
  const location = useLocation();
  const project = location.state?.project || {};

  // Dummy Project Data
  const dummyProject = {
    title: "Website Development for E-commerce",
    postedTime: "March 8, 2025",
    description:
      "Looking for an experienced developer to build a responsive e-commerce website with a secure payment gateway.",
    experience: "3+ years",
    budgetType: "Fixed",
    budget: { min: 50000, max: 100000 },
    skills: [
      "Structural Engineering",
      "AutoCAD",
      "Load Analysis",
      "Building Codes & Analysis",
      "Construction Documentation",
    ],
    attachments: [
      "project-requirements.pdf",
      "wireframe-design.png",
      "terms-and-conditions.docx",
    ],
    totalProposals: "Less than 5",
  };

  return ( 
    <>
    <NavbarComp/>
    <div className="flex flex-col md:flex-row p-6 mb-12 max-w-8xl mx-auto gap-4">
      {/* Project Details Card */}
      <div className="w-full md:w-4/5 border border-gray-300 rounded-lg shadow-lg p-6">

        {/* Project Title */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-semibold">Project Details</h1>
          <div className="flex gap-3 text-red-500">
            <FaTrashAlt className="cursor-pointer" />
          </div>
        </div>

        {/* Project Description */}
        <h2 className="text-lg md:text-xl font-semibold mt-4">
          {dummyProject.title || "No Title Available"}
        </h2>
        <p className="text-gray-500 text-xs md:text-sm">
          Posted • {dummyProject.postedTime || "Unknown Date"}
        </p>

        <h3 className="text-lg font-semibold mt-4">Project Description:</h3>
        <p className="text-gray-700">
          {dummyProject.description || "No description provided."}
        </p>

        {/* Experience, Budget Type & Range */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3">
            <LuUserCog className="text-gray-600 text-2xl" />
            <div>
              <p className="text-lg font-semibold">
                {dummyProject.experience || "Not specified"}
              </p>
              <p className="text-gray-500 text-sm">Experience</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <PiWalletLight className="text-gray-600 text-2xl" />
            <div>
              <p className="text-lg font-semibold">
                {dummyProject.budgetType || "Not specified"}
              </p>
              <p className="text-gray-500 text-sm">Budget Type</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <PiMoneyLight className="text-gray-600 text-2xl" />
            <div>
              <p className="text-lg font-semibold">
                ₹{dummyProject.budget?.min || "-"} - ₹{dummyProject.budget?.max || "-"}
              </p>
              <p className="text-gray-500 text-sm">Budget Range</p>
            </div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Skills & Expertise:</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {dummyProject.skills && dummyProject.skills.length > 0 ? (
              dummyProject.skills.map((skill, index) => (
                <span
                  key={index}
                  className="border border-gray-400 px-4 py-2 rounded-full text-sm text-gray-700"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-gray-500">No skills listed.</p>
            )}
          </div>
        </div>

        {/* Attachments */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Attachments:</h3>
          <ul className="mt-2 space-y-2">
            {dummyProject.attachments && dummyProject.attachments.length > 0 ? (
              dummyProject.attachments.map((attachment, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border p-3 rounded-lg shadow-sm bg-gray-100"
                >
                  <div className="flex items-center gap-3">
                    {attachment.endsWith(".pdf") ? (
                      <FaFilePdf className="text-red-500 text-xl" />
                    ) : (
                      <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded">
                        📁
                      </div>
                    )}
                    <p className="text-gray-700 font-medium">{attachment}</p>
                  </div>
                  <FaTrashAlt className="text-red-500 cursor-pointer hover:text-red-700 transition duration-200" />
                </li>
              ))
            ) : (
              <p className="text-gray-500">No attachments available.</p>
            )}
          </ul>
        </div>

        {/* Total Proposals */}
        <p className="mt-6 text-gray-500">
          Total Proposals • {dummyProject.totalProposals || 0}
        </p>
      </div>

      {/* Similar Projects Section */}
      <div className="w-full md:w-1/3 border border-gray-300 rounded-lg shadow-lg p-4">
        <h2 className="text-lg md:text-xl font-semibold">Similar Projects</h2>
        <ul className="mt-2 space-y-4">
          {/* Example entries for similar projects */}
          <li className="border p-2 rounded-md">Project A</li>
          <li className="border p-2 rounded-md">Project B</li>
          <li className="border p-2 rounded-md">Project C</li>
        </ul>
      </div>
    </div>
    <Footer/>
    </>
);
};

export default ViewProject;

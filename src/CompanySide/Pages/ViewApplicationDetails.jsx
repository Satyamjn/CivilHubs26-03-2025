import React from "react";
import { ArrowRight, Briefcase, Calendar } from "lucide-react";
import NavbarComp from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const ViewApplicationDetails = () => {
  // Updated array of job proposals to match new format
  const jobProposals = [
    {
      id: 1,
      jobTitle: "3D House Model Design",
      candidateName: "John Doe",
      date: "Feb 29, 2025",
      description:
        "I specialize in 3D house modeling with high-quality renders and detailed blueprints.",
      price: 25000,
      status: "PENDING",
    },
    {
      id: 2,
      jobTitle: "Web Application Development",
      candidateName: "Priya Singh",
      date: "Mar 3, 2025",
      description:
        "Developing full-stack web applications using React, Node.js, and MongoDB.",
      price: 60000,
      status: "APPROVED",
    },
    {
      id: 3,
      jobTitle: "Structural Analysis Proposal",
      candidateName: "Rohit Sharma",
      date: "Mar 10, 2025",
      description:
        "Offering advanced structural analysis and modeling services for large-scale projects.",
      price: 40000,
      status: "REJECTED",
    },
  ];

  // Updated array of similar jobs
  const similarApplication = [
    { id: 1, title: "3D House Model Design", company: "ABC Enterprises" },
    { id: 2, title: "Structural Analysis Proposal", company: "BuildPro Ltd." },
    { id: 3, title: "Design Architect", company: "UrbanDesign Studio" },
  ];

  const navigate = useNavigate();

  return (
    <>
      <NavbarComp />
      <div className="flex p-4 space-x-4 mb-10">
        {/* Left side - Job Proposals */}
        <div className="w-2/3 space-y-4 border rounded-xl p-4 shadow-md bg-white">
          {jobProposals.map((proposal) => (
            <div
              key={proposal.id}
              className="p-4 rounded-2xl border shadow-sm bg-white"
            >
              <div className="flex justify-between items-start">
                {/* Left Content */}
                <div className="flex items-start space-x-3">
                  <Briefcase className="text-teal-500" size={28} />
                  <div>
                    <h2 className="text-lg font-semibold">
                      {proposal.jobTitle}
                    </h2>
                    <p className="text-sm text-gray-500">
                      By <span className="font-medium">{proposal.candidateName}</span>
                    </p>
                    <p className="text-xs text-gray-400 flex items-center space-x-1 mt-1">
                      <Calendar size={14} />
                      <span>Submitted: {proposal.date}</span>
                    </p>
                  </div>
                </div>

                {/* Status */}
                <span
                  className={`text-sm font-medium ${
                    proposal.status === "PENDING"
                      ? "text-orange-500"
                      : proposal.status === "APPROVED"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {proposal.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-700 mt-3 ml-10">{proposal.description}</p>

              {/* Price and Button */}
              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-semibold text-green-600">
                  ₹{proposal.price}
                </p>
                <button
                  className="flex items-center space-x-1 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
                  onClick={() => navigate(`/jobProposalDetails`)}
                >
                  <span>View Details</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Similar Jobs */}
        <div className="w-1/3 space-y-4 border rounded-xl p-4 shadow-md bg-white">
          <div className="p-4 rounded-2xl border shadow-sm bg-white">
            <h3 className="text-lg font-semibold mb-3">Similar Application</h3>
            <div className="space-y-3">
              {similarApplication.map((job) => (
                <div
                  key={job.id}
                  className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition"
                >
                  <h4 className="text-base font-medium">{job.title}</h4>
                  <p className="text-sm text-gray-500">{job.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ViewApplicationDetails;

import React from "react";
import { ArrowRight } from "lucide-react";
import NavbarComp from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const JobProposal = () => {
  // Dummy array of job proposals
  const jobProposals = [
    {
      id: 1,
      jobTitle: "Structure Designer",
      company: "Tech Solutions Ltd.",
      date: "Feb 28, 2025",
      candidateName: "Kartik Kumar",
      attachment: "Resume.pdf",
      status: "PENDING",
    },
    {
      id: 2,
      jobTitle: "Software Engineer",
      company: "Innovatech Pvt Ltd.",
      date: "Mar 5, 2025",
      candidateName: "Amit Sharma",
      attachment: "CV_Amit.pdf",
      status: "APPROVED",
    },
    {
      id: 3,
      jobTitle: "Project Manager",
      company: "BuildTech Corp.",
      date: "Mar 10, 2025",
      candidateName: "Neha Verma",
      attachment: "Profile_Neha.pdf",
      status: "REJECTED",
    },
  ];

  // Dummy array of similar jobs
  const similarJobs = [
    { id: 1, title: "Structural Engineer", company: "ABC Enterprises" },
    { id: 2, title: "Construction Analyst", company: "BuildPro Ltd." },
    { id: 3, title: "Design Architect", company: "UrbanDesign Studio" },
  ];

  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/jobProposalDetails');
  }

  return (
    <> 
      <NavbarComp />
      <div className="flex p-4 space-x-4 mb-12">
        {/* Left side - Job Proposals */}
        <div className="w-2/3 space-y-4 border rounded-xl p-4 shadow-md bg-white">
          {jobProposals.map((proposal) => (
            <div
              key={proposal.id}
              className="p-4 rounded-2xl border shadow-sm bg-white"
            >
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold">{proposal.jobTitle}</h2>
                    <p className="text-sm text-gray-500">{proposal.company}</p>
                  </div>
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

                <div className="text-sm text-gray-500">
                  <p>
                    <span className="font-medium">Applied on:</span> {proposal.date}
                  </p>
                  <p>
                    <span className="font-medium">Candidate Name:</span>{" "}
                    <span className="font-bold">{proposal.candidateName}</span>
                  </p>
                  <p>
                    <span className="font-medium">Attachment:</span>{" "}
                    <span className="text-blue-500 cursor-pointer">
                      {proposal.attachment}
                    </span>
                  </p>
                </div>

                <div className="flex justify-end">
                  <button className="flex items-center space-x-1" onClick={handleNavigate}>
                    <span>View Details</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Similar Jobs */}
        <div className="w-1/3 space-y-4 border rounded-xl p-4 shadow-md bg-white">
          <div className="p-4 rounded-2xl border shadow-sm bg-white">
            <div>
              <h3 className="text-lg font-semibold mb-3">Similar Jobs</h3>
              <div className="space-y-3">
                {similarJobs.map((job) => (
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
      </div>

      <Footer/>
    </>
  );
};

export default JobProposal;
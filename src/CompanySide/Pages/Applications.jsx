import { useState } from "react";
import { Search } from "lucide-react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaMoneyBillWave, FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";
import NavbarComp from "../Components/Navbar";
import Footer from "../Components/Footer";

const projectProposals = [
    {
      date: "Feb 28, 2025",
      title: "Junior Research Architect",
     totalApplicants: 120,
    },
    {
      date: "Feb 28, 2025",
      title: "Junior Research Architect",
     totalApplicants: 120,
    },
    {
      date: "Feb 28, 2025",
      title: "Junior Research Architect",
     totalApplicants: 120,
    },
    {
        date: "Feb 28, 2025",
        title: "Junior Research Architect",
       totalApplicants: 120,
      },
      {
        date: "Feb 28, 2025",
        title: "Junior Research Architect",
       totalApplicants: 120,
      },
];

const jobApplications = [
    {
        date: "Feb 28, 2025",
      title: "3D Model house design",
      totalApplications: 120,
      
    },
    {
        date: "Feb 28, 2025",
      title: "3D Model house design",
      totalApplications: 120,
      
    },
    {
        date: "Feb 28, 2025",
      title: "3D Model house design",
      totalApplications: 120,
      
    }, {
        date: "Feb 28, 2025",
      title: "3D Model house design",
      totalApplications: 120,
      
    }, {
        date: "Feb 28, 2025",
      title: "3D Model house design",
      totalApplications: 120,
      
    },
    {
        date: "Feb 28, 2025",
      title: "3D Model house design",
      totalApplications: 120,
      
    },

    // Add more job applications as needed
];

 export default function Applications() {
  const location = useLocation();
  const navigate = useNavigate();  
  const { category, backgroundImage } = location.state || { category: "" };
  const [activeTab, setActiveTab] = useState("projectsproposals");

  const handleApplyNow = (job) => {
    navigate('/viewapllicationDetails', { state: { job } });
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

  return (
    <>
    <NavbarComp/>
      <div className="flex flex-col md:flex-row w-full">
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
                className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base ${
                  activeTab === "projectsproposals" ? "bg-teal-500 text-white" : "bg-white text-black border border-gray-300"
                }`}
                onClick={() => setActiveTab("projectsproposals")}
              >
                    Jobs Applications
              </button>
              <button
                className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base ${
                  activeTab === "jobsApplication" ? "bg-teal-500 text-white" : "bg-white text-black border border-gray-300"
                }`}
                onClick={() => setActiveTab("jobsApplication")}
              >
                Project Proposals
              </button>
            </div>
            <p className="mt-2 text-sm md:text-base text-gray-900 font-semibold relative z-10">
              {activeTab === "projectsproposals" ? `Showing Projects: ${projectProposals.length} Results` : `Showing Jobs: ${jobApplications.length} Results`}
            </p>
          </div>

          {/* Content Section */}
          <div className="mt-7 mb-12">
            {activeTab === "projectsproposals" ? (
              <div className="p-5 bg-gray-100 rounded-lg shadow">
                <h2 className="text-lg md:text-2xl font-bold text-gray-800">Job Applications</h2>
                <ul className="text-gray-600 mt-2 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-8xl">
                  {projectProposals.map((project, index) => (
                    <li key={index} className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                      <div className="relative">
                        <h3 className="text-sm text-teal-500 font-semibold">{project.company}</h3>
                        <h2 className="text-lg font-bold mt-1">{project.title}</h2>
                        <div className="flex items-center text-gray-600 text-sm my-3 space-x-3">
                          <span className="flex items-center"> Total Applicents: ₹{project.totalApplicants}</span>
                          
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <button onClick={() => navigate('/jobproposal', { state: { project } })} className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition">
                           View Proposals
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (

              <div className="p-5 bg-gray-100 rounded-lg shadow mb-12">
                <h2 className="text-lg md:text-2xl font-bold text-gray-800">Project Proposal</h2>
                <ul className="text-gray-600 mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {jobApplications.map((job, index) => (
                    <li key={index} className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                      <div className="relative">
                        <button className="absolute top-4 right-4 text-gray-400 transition">
                          
                        </button>
                        <h3 className="text-sm text-teal-500 font-semibold">{job.company}</h3>
                        <h2 className="text-lg font-bold mt-1">{job.title}</h2>
                        <div className="flex items-center text-gray-600 text-sm my-3 space-x-3">
                    
                          
                          
                        </div>
                        <div className="flex items-center text-gray-600 text-sm my-3 space-x-3">
                          <span className="flex items-center"> Total Applicention: ₹{job.totalApplications}</span>
                          
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          
                          <button onClick={() => handleApplyNow(job)} className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition">
                            View Applications
                          </button>
                        </div>
                      </div>
                    </li>
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
              <button onClick={() => navigate('/bids', { state: { project } })} className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-500 transition">
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
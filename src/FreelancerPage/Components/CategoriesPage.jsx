import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

import { FaHeart, FaMoneyBillWave, FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const projectsData = [
  {
    date: "Feb 28, 2025",
    title: "Structural Analysis & Design for Residential Building",
    company: "Engtec Consulting Inc.",
    cost: "25,000",
    description: "Comprehensive analysis of structural integrity and safety measures for a multi-story residential building.",
    image: "/assets/Civilhubs/cat1.png"
  },
  {
    date: "March 15, 2025",
    title: "Bridge Foundation Stability Study",
    company: "InfraTech Solutions",
    cost: "40,000",
    description: "Assessing foundation stability, soil testing, and load-bearing capacity for a highway bridge project.",
    image: "/assets/Civilhubs/cat2.png"
  },
  {
    date: "April 10, 2025",
    title: "High-Rise Wind Load Assessment",
    company: "Skyline Structures",
    cost: "60,000",
    description: "Analyzing wind forces on high-rise buildings and optimizing design for better aerodynamics and safety.",
    image: "/assets/Civilhubs/cat3.png"
  },
  {
    date: "April 10, 2025",
    title: "High-Rise Wind Load Assessment",
    company: "Skyline Structures",
    cost: "60,000",
    description: "Analyzing wind forces on high-rise buildings and optimizing design for better aerodynamics and safety.",
    image: "/assets/Civilhubs/cat3.png"
  },
  {
    date: "April 10, 2025",
    title: "High-Rise Wind Load Assessment",
    company: "Skyline Structures",
    cost: "60,000",
    description: "Analyzing wind forces on high-rise buildings and optimizing design for better aerodynamics and safety.",
    image: "/assets/Civilhubs/cat3.png"
  },
  {
    date: "April 10, 2025",
    title: "High-Rise Wind Load Assessment",
    company: "Skyline Structures",
    cost: "60,000",
    description: "Analyzing wind forces on high-rise buildings and optimizing design for better aerodynamics and safety.",
    image: "/assets/Civilhubs/cat3.png"
  },
  {
    date: "April 10, 2025",
    title: "High-Rise Wind Load Assessment",
    company: "Skyline Structures",
    cost: "60,000",
    description: "Analyzing wind forces on high-rise buildings and optimizing design for better aerodynamics and safety.",
    image: "/assets/Civilhubs/cat3.png"
  }

];

const jobs = [
  {
    company: "Construction Pvt. Ltd.",
    title: "Site Engineer",
    salary: "₹40,000 - ₹50,000",
    location: "Pune, India",
    experience: "3+ Years",
    description: "Looking for an experienced Civil Site Engineer to manage construction activities, ensure quality ...",
    type: "Full Time",
  },
  {
    company: "Construction Pvt. Ltd.",
    title: "Site Engineer",
    salary: "₹40,000 - ₹50,000",
    location: "Pune, India",
    experience: "3+ Years",
    description: "Looking for an experienced Civil Site Engineer to manage construction activities, ensure quality ...",
    type: "Full Time",
  },
  
  {
    company: "Construction Pvt. Ltd.",
    title: "Site Engineer",
    salary: "₹40,000 - ₹50,000",
    location: "Pune, India",
    experience: "3+ Years",
    description: "Looking for an experienced Civil Site Engineer to manage construction activities, ensure quality ...",
    type: "Full Time",
  },{
    company: "Construction Pvt. Ltd.",
    title: "Site Engineer",
    salary: "₹40,000 - ₹50,000",
    location: "Pune, India",
    experience: "3+ Years",
    description: "Looking for an experienced Civil Site Engineer to manage construction activities, ensure quality ...",
    type: "Full Time",
  },
  {
    company: "Construction Pvt. Ltd.",
    title: "Site Engineer",
    salary: "₹40,000 - ₹50,000",
    location: "Pune, India",
    experience: "3+ Years",
    description: "Looking for an experienced Civil Site Engineer to manage construction activities, ensure quality ...",
    type: "Full Time",
  },
  {
    company: "Construction Pvt. Ltd.",
    title: "Site Engineer",
    salary: "₹40,000 - ₹50,000",
    location: "Pune, India",
    experience: "3+ Years",
    description: "Looking for an experienced Civil Site Engineer to manage construction activities, ensure quality ...",
    type: "Full Time",
  },
  // Add more job listings as needed
];

export default function CategoriesPage() {
  const location = useLocation();
  const navigate = useNavigate();  
  const { category, backgroundImage } = location.state || { category: "No category selected" };
  const [activeTab, setActiveTab] = useState("projects");
  
  const handleApplyNow = (job) => {
    navigate('/BrowseDetail', { state: { job } });
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
      <div className="flex flex-col md:flex-row w-full">
        {/* Right Side: Content Section */}
        <div className="md:w-2/3 w-full flex flex-col items-start">
          {/* Hero Section */}
          <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-64 flex flex-col justify-center items-start px-4 md:px-12 lg:px-20 text-white mt-5">
            <img
              src={backgroundImage}
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
                  activeTab === "projects" ? "bg-teal-500 text-white" : "bg-white text-black border border-gray-300"
                }`}
                onClick={() => setActiveTab("projects")}
              >
                Projects
              </button>
              <button
                className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base ${
                  activeTab === "jobs" ? "bg-teal-500 text-white" : "bg-white text-black border border-gray-300"
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
          <div className=" mt-5">
          {activeTab === "projects" ? (
 <div className="p-6 bg-gray-50 rounded-xl shadow-lg">
 <h2 className="text-xl md:text-2xl font-bold text-gray-900">Project Listings</h2>
 
 <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsData.map((project, index) => (
        <li
          key={index}
          className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg hover:shadow-teal-500/40 transition-all duration-300 ease-in-out"
        >
          <h3 className="text-teal-600 text-sm font-semibold">{project.company}</h3>
          <h2 className="text-lg font-bold mt-1 text-gray-900">{project.title}</h2>

          <div className="flex items-center text-gray-600 text-sm mt-2 space-x-4">
            <span className="flex items-center">
              <FaMoneyBillWave className="mr-1 text-green-500" /> ₹{project.cost}
            </span>
            <span className="flex items-center">
              <FaCalendarAlt className="mr-1 text-blue-500" /> {project.date}
            </span>
          </div>

          <p className="text-gray-500 text-sm mt-3 line-clamp-2">{project.description}</p>

          <div className="flex justify-end mt-4">
            <button
              onClick={() => navigate("/bids", { state: { project } })}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-all"
            >
              Bid Now
            </button>
          </div>
        </li>
      ))}
    </ul>
</div>
) : (
  <div className="p-5 bg-gray-100 rounded-lg shadow">
    <h2 className="text-lg md:text-2xl font-bold text-gray-800">Job Listings</h2>
    <ul className="text-gray-600 mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs.map((job, index) => (
        <li key={index} className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <button className="absolute top-4 right-4 text-gray-400 transition">
              <FaHeart size={22} />
            </button>
            <h3 className="text-sm text-teal-500 font-semibold">{job.company}</h3>
            <h2 className="text-lg font-bold mt-1">{job.title}</h2>
            <div className="flex items-center text-gray-600 text-sm my-3 space-x-3">
              <span className="flex items-center"><FaMoneyBillWave className="mr-1" /> {job.salary}</span>
              <span className="flex items-center"><FaMapMarkerAlt className="mr-1" /> {job.location}</span>
              <span className="flex items-center"><FaCalendarAlt className="mr-1" /> {job.experience}</span>
            </div>
            <p className="text-gray-500 text-sm mb-3">{job.description}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-700 text-sm flex items-center"><FaBriefcase className="mr-1" /> {job.type}</span>
              <button onClick={() => handleApplyNow(job)} className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-500 transition">
                Apply Now
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
  <h2 className="text-lg font-bold text-gray-800 mb-4">Similar Projects</h2> {/* Title for Similar Projects */}
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
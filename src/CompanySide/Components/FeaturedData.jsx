


// import React, { useState } from 'react';
import { MapPin, Star } from "lucide-react";
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
const engineerProfiles = [
  {
    name: "Rahul Mehta",
    rating: 4.5,
    location: "Delhi, India",
    description: "Experienced Civil Engineer with expertise in structural analysis and steel structure design.",
    skills: ["AutoCAD", "STAAD Pro", "Steel Structures"],
    projects: 12,
    ratePerHour: 30.0,
    imageUrl: "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    name: "Ananya Singh",
    rating: 4.2,
    location: "Mumbai, India",
    description: "Civil Engineer specializing in RCC structures, site supervision, and quantity surveying.",
    skills: ["RCC Design", "Quantity Surveying", "AutoCAD"],
    projects: 10,
    ratePerHour: 28.0,
    imageUrl: "https://randomuser.me/api/portraits/women/15.jpg"
  },
  {
    name: "Karan Patel",
    rating: 4.7,
    location: "Pune, India",
    description: "Expert in geotechnical engineering, soil mechanics, and foundation design.",
    skills: [ "Foundation Design", "Plaxis", "Soil Testing"],
    projects: 15,
    ratePerHour: 35.0,
    imageUrl: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Megha Rathi",
    rating: 4.0,
    location: "Jaipur, India",
    description: "Civil Engineer with strong knowledge of water resources and hydraulic engineering.",
    skills: ["Hydraulic Engineering", "SWMM", "EPANET"],
    projects: 9,
    ratePerHour: 25.0,
    imageUrl: "https://randomuser.me/api/portraits/women/30.jpg"
  },
  {
    name: "Riya Sharma",
    rating: 4.8,
    location: "Mumbai, India",
    description: "Expert in structural engineering and project management.",
    skills: ["Structural Engineering", "Project Management"],
    projects: 20,
    ratePerHour: 40.0,
    imageUrl: "https://randomuser.me/api/portraits/women/25.jpg"
  },
  {
    name: "Vikram Patel",
    rating: 4.5,
    location: "Delhi, India",
    description: "Specialist in environmental engineering and sustainability.",
    skills: ["Environmental Engineering", "Sustainability Consulting"],
    projects: 15,
    ratePerHour: 35.0,
    imageUrl: "https://randomuser.me/api/portraits/men/26.jpg"
  },
  {
    name: "Neha Gupta",
    rating: 4.7,
    location: "Pune, India",
    description: "Focused on urban planning and land use.",
    skills: ["Urban Planning", "Land Use Analysis"],
    projects: 10,
    ratePerHour: 30.0,
    imageUrl: "https://randomuser.me/api/portraits/women/27.jpg"
  },
  {
    name: "Karan Mehta",
    rating: 4.6,
    location: "Hyderabad, India",
    description: "Specialist in geotechnical engineering and soil mechanics.",
    skills: ["Geotechnical Engineering", "Soil Mechanics"],
    projects: 12,
    ratePerHour: 33.0,
    imageUrl: "https://randomuser.me/api/portraits/men/28.jpg"
  },
  {
    name: "Sneha Joshi",
    rating: 4.9,
    location: "Chennai, India",
    description: "Expert in water resources engineering and hydrology.",
    skills: ["Water Resources Engineering", "Hydrology"],
    projects: 18,
    ratePerHour: 38.0,
    imageUrl: "https://randomuser.me/api/portraits/women/29.jpg"
  },
  {
    name: "Anil Kumar",
    rating: 4.4,
    location: "Kolkata, India",
    description: "Specialist in transportation systems and logistics.",
    skills: ["Transportation Systems", "Logistics Management"],
    projects: 14,
    ratePerHour: 31.0,
    imageUrl: "https://randomuser.me/api/portraits/men/30.jpg"
  },
  {
    name: "Priya Singh",
    rating: 4.7,
    location: "Ahmedabad, India",
    description: "Focused on traffic engineering and road safety.",
    skills: ["Traffic Engineering", "Road Safety Analysis"],
    projects: 11,
    ratePerHour: 34.0,
    imageUrl: "https://randomuser.me/api/portraits/women/31.jpg"
  },
  {
    name: "Rajesh Nair",
    rating: 4.5,
    location: "Jaipur, India",
    description: "Expert in civil engineering and construction management.",
    skills: ["Civil Engineering", "Construction Management"],
    projects: 16,
    ratePerHour: 36.0,
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Kavita Reddy",
    rating: 4.8,
    location: "Bangalore, India",
    description: "Specialist in building design and architecture.",
    skills: ["Building Design", "Architecture"],
    projects: 19,
    ratePerHour: 39.0,
    imageUrl: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    name: "Suresh Babu",
    rating: 4.6,
    location: "Cochin, India",
    description: "Focused on environmental impact assessments.",
    skills: ["Environmental Impact Assessment", "Regulatory Compliance"],
    projects: 13,
    ratePerHour: 32.0,
    imageUrl: "https://randomuser.me/api/portraits/men/34.jpg"
  },
  {
    name: "Aditi Verma",
    rating: 4.7,
    location: "Lucknow, India",
    description: "Expert in renewable energy systems.",
    skills: ["Renewable Energy", "Energy Management"],
    projects: 17,
    ratePerHour: 37.0,
    imageUrl: "https://randomuser.me/api/portraits/women/35.jpg"
  },
  {
    name: "Arjun Sinha",
    rating: 4.6,
    location: "Bangalore, India",
    description: "Specialist in transportation engineering, highway design, and traffic analysis.",
    skills: ["Transportation Engineering", "Traffic Analysis"],
    projects: 13,
    ratePerHour: 32.0,
    imageUrl: "https://randomuser.me/api/portraits/men/25.jpg"
  },
  {
    name: "Neha Kapoor",
    rating: 3.9,
    location: "Hyderabad, India",
    description: "Site Engineer with expertise in construction management and safety regulations.",
    skills: ["Construction Management", "Safety Regulations", "Primavera P6", "MS Project"],
    projects: 7,
    ratePerHour: 26.0,
    imageUrl: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Rajat Malhotra",
    rating: 4.3,
    location: "Chennai, India",
    description: "Civil Engineer with a focus on bridge design, load testing, and maintenance planning.",
    skills: ["Bridge Design", "Load Testing"],
    projects: 11,
    ratePerHour: 29.0,
    imageUrl: "https://randomuser.me/api/portraits/men/40.jpg"
  },
  {
    name: "Neha Kapoor",
    rating: 3.9,
    location: "Hyderabad, India",
    description: "Site Engineer with expertise in construction management and safety regulations.",
    skills: ["Construction Management", "Safety Regulations", "Primavera P6", "MS Project"],
    projects: 7,
    ratePerHour: 26.0,
    imageUrl: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Rajat Malhotra",
    rating: 4.3,
    location: "Chennai, India",
    description: "Civil Engineer with a focus on bridge design, load testing, and maintenance planning.",
    skills: ["Bridge Design", "Load Testing"],
    projects: 11,
    ratePerHour: 29.0,
    imageUrl: "https://randomuser.me/api/portraits/men/40.jpg"
  },
  {
    name: "Neha Kapoor",
    rating: 3.9,
    location: "Hyderabad, India",
    description: "Site Engineer with expertise in construction management and safety regulations.",
    skills: ["Construction Management", "Safety Regulations", "Primavera P6", "MS Project"],
    projects: 7,
    ratePerHour: 26.0,
    imageUrl: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Rajat Malhotra",
    rating: 4.3,
    location: "Chennai, India",
    description: "Civil Engineer with a focus on bridge design, load testing, and maintenance planning.",
    skills: ["Bridge Design", "Load Testing"],
    projects: 11,
    ratePerHour: 29.0,
    imageUrl: "https://randomuser.me/api/portraits/men/40.jpg"
  },
  {
    name: "Neha Kapoor",
    rating: 3.9,
    location: "Hyderabad, India",
    description: "Site Engineer with expertise in construction management and safety regulations.",
    skills: ["Construction Management", "Safety Regulations", "Primavera P6", "MS Project"],
    projects: 7,
    ratePerHour: 26.0,
    imageUrl: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Rajat Malhotra",
    rating: 4.3,
    location: "Chennai, India",
    description: "Civil Engineer with a focus on bridge design, load testing, and maintenance planning.",
    skills: ["Bridge Design", "Load Testing"],
    projects: 11,
    ratePerHour: 29.0,
    imageUrl: "https://randomuser.me/api/portraits/men/40.jpg"
  },
  {

    name: "Neha Kapoor",
    rating: 3.9,
    location: "Hyderabad, India",
    description: "Site Engineer with expertise in construction management and safety regulations.",
    skills: ["Construction Management", "Safety Regulations", "Primavera P6", "MS Project"],
    projects: 7,
    ratePerHour: 26.0,
    imageUrl: "https://randomuser.me/api/portraits/women/45.jpg"

  },
  {

    name: "Rajat Malhotra",
    rating: 4.3,
    location: "Chennai, India",
    description: "Civil Engineer with a focus on bridge design, load testing, and maintenance planning.",
    skills: ["Bridge Design", "Load Testing"],
    projects: 11,
    ratePerHour: 29.0,
    imageUrl: "https://randomuser.me/api/portraits/men/40.jpg"

  },
 
];




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdVerified } from "react-icons/md";

const FeatureData = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [showSalary, setShowSalary] = useState(true);
  const [isFulltime, setIsFulltime] = useState(false);
  const [isFreelance, setIsFreelance] = useState(false);
  const [sortNewest, setSortNewest] = useState(true);

  // Filtered data based on the selected filters
  const filteredData = engineerProfiles
    .filter((user) => (showAvailableOnly ? user.status === "available" : true))
    .filter((user) => {
      // If both are selected, show all
      if (isFulltime && isFreelance) return true;
      // If only fulltime is selected
      if (isFulltime) return user.type === "fulltime";
      // If only freelance is selected
      if (isFreelance) return user.type === "freelance";
      // If neither is selected, show all
      return true;
    })
    .filter((user) => (showSalary ? user.ratePerHour <= 30 : true))
    .sort((a, b) => (sortNewest ? b.rating - a.rating : a.rating - b.rating));

  // Limit the number of results based on the type of employment
  const limitedData = isFulltime ? filteredData.slice(0, 6) : isFreelance ? filteredData.slice(0, 5) : filteredData;

  const itemsPerPage = 12;
  const totalPages = Math.ceil(limitedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedUsers = limitedData.slice(startIndex, startIndex + itemsPerPage);

  const handleCardClick = (user) => {
    navigate('/showprofile', { state: user });
  };

  // Reset current page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [showAvailableOnly, showSalary, isFulltime, isFreelance, sortNewest]);

  return (
    <div className="p-8 max-w-[1460px] mx-auto -mt-6 ">
      {/* Filter & Sort Controls */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
      <h2 className="text-xl ml-  -mt-4 font-bold text-start ">
          Showing {selectedUsers.length} of {limitedData.length} Profiles
        </h2>
        <div className="flex items-center gap-4 flex-wrap">
          {/* Fulltime Toggle */}
          <label className="flex items-center gap-2 cursor-pointer">
            <span>Fulltime</span>
            <div onClick={() => setIsFulltime((prev) => !prev)} className={`w-10 h-5 flex items-center bg-${isFulltime ? "blue-teal-500" : "gray-300"} rounded-full p-1 transition-all duration-300`}>
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform ${isFulltime ? "translate-x-5" : "translate-x-0"} transition-transform duration-300`} />
            </div>
          </label>
          {/* Freelance Toggle */}
          <label className="flex items-center gap-2 cursor-pointer">
            <span>Freelance</span>
            <div onClick={() => setIsFreelance((prev) => !prev)} className={`w-10 h-5 flex items-center bg-${isFreelance ? "teal-500" : "gray-300"} rounded-full p-1 transition-all duration-300`}>
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform ${isFreelance ? "translate-x-5" : "translate-x-0"} transition-transform duration-300`} />
            </div>
          </label>
          {/* Salary Toggle */}
          <label className="flex items-center gap-2 cursor-pointer">
            <span>Salary ≤ $30/hr</span>
            <div onClick={() => setShowSalary((prev) => !prev)} className={`w-10 h-5 flex items-center bg-${showSalary ? "teal-500" : "gray-300"} rounded-full p-1 transition-all duration-300`}>
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform ${showSalary ? "translate-x-5" : "translate-x-0"} transition-transform duration-300`} />
            </div>
          </label>
          {/* Sort Dropdown */}
          <div>
            <select
              value={sortNewest ? "newest" : "oldest"}
              onChange={(e) => setSortNewest(e.target.value === "newest")}
              className="p-2 border rounded-lg bg-white shadow-sm"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
        {selectedUsers.map((user, index) => (
          <div key={index} className="max-w-md rounded-2xl shadow-lg p-4 border" onClick={() => handleCardClick(user)}>
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-start gap-3 w-full">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                  <img
                    src={user.imageUrl || "https://via.placeholder.com/96"}
                    alt={user.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 text-start">
                  <h2 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                    {user.name} <span className="text-teal-500"><MdVerified className="text-teal-500" /></span>
                  </h2>
                  <div className="flex items-center gap-1 text-gray-500 text-sm mb-1">
                    <Star className="w-4 h-4 text-orange-500" /> {user.rating}
                    <MapPin className="w-4 h-4" /> {user.location}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2 w-full">{user.description}</p>
              <div className="flex gap-1 flex-wrap mb-2 w-full">
                {user.skills.map((skill, index) => (
                  <span key={index} className="border rounded-lg px-2 py-1 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="font-semibold w-full">
                {user.projects} Projects • ${user.ratePerHour}/hr
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {/* <div className="flex justify-center items-center gap-5 mt-8">
        <button
          className="p-2 sm:p-3 px-9 rounded-lg border bg-white shadow-sm disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          « Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`p-2 sm:p-3 px-4 rounded-lg ${currentPage === index + 1 ? "bg-teal-500 text-white" : "bg-white border shadow-sm"}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="p-2 sm:p-3 px-4 rounded-lg border bg-white shadow-sm disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next »
        </button>
      </div> */}
    </div>
  );
};

export default FeatureData;
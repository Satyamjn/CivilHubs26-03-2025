


import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Search } from "lucide-react"; // Import necessary icons

const engineeringCategories = [
  { name: "Structural engineering", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
  { name: "Geotechnical engineering", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
  { name: "Environmental engineering", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
  { name: "Transportation engineering", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
  { name: "Construction management", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
  { name: "Coastal engineering", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
  { name: "Earthquake engineering", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
  { name: "Surveying", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
  { name: "Consulting engineer", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
  { name: "Design Engineer", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
];

const similarProjectsData = [
  {
    title: "Green Building Initiative",
    date: "2023-05-10",
    cost: "2,000,000",
    description: "A project focused on creating eco-friendly buildings.",
    company: "GreenBuild Corp",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
  },
  // Add more similar projects here
];

const SimilarProjectCard = ({ project, onClick }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl border cursor-pointer" onClick={() => onClick(project)}>
      <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
      <p className="text-sm text-gray-600">Budget: ₹{project.cost}</p>
      <p className="text-sm text-gray-600">Date: {project.date}</p>
      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
      <button className="w-full bg-teal-500 hover:bg-teal-500 text-white py-2 rounded-lg text-sm font-medium transition-colors">
        View Project
      </button>
    </div>
  );
};

const ProjectDetail = () => {
  const location = useLocation();
  const progress = 60; // Static progress value

  const [project, setProject] = useState((location.state && location.state.project) || { 
    title: "Sample Project",
    date: "2023-06-15",
    cost: "1,500,000",
    description: "A modern architectural project focusing on sustainable design principles.",
    company: "EcoDesign Solutions",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  });
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(engineeringCategories);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = engineeringCategories.filter(category =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  const handleProjectChange = (newProject) => {
    setProject(newProject);
  };

  const ProgressRing = ({ progress, size = 80, strokeWidth = 4, className = "", textClassName = "" }) => {
    const normalizedProgress = Math.min(100, Math.max(0, progress));
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - (normalizedProgress / 100) * circumference;

    return (
      <div className={`relative ${className}`} style={{ width: size, height: size }}>
        <svg className="progress-ring" width={size} height={size}>
          <circle
            className="opacity-20"
            stroke="#0071e3"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            className="progress-ring__circle"
            stroke="#0071e3"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        </svg>
        <div className={`absolute inset-0 flex items-center justify-center text-sm font-medium ${textClassName}`}>
          {normalizedProgress}%
        </div>
      </div>
    );
  };

  const CategoryChip = ({ name, image }) => {
    return (
      <div className="hover-lift rounded-xl overflow-hidden bg-white border-black shadow-sm cursor-pointer transition-all duration-300  ">
        <div className="p-4 flex flex-col items-center text-center space-y-3">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <img
              src={image}
              alt={name}
              className="h-14 w-14 object-contain"
            />
          </div>
          <span className="text-sm text-apple-gray-dark font-medium tracking-tight line-clamp-2">
            {name}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-apple-gray-light">
      <Navbar />
      
      <main className="pt-28 pb-16 px-4 sm:px-6 -mt-20 lg:px-8 border-black">
        <div className="max-w-full mx-auto flex flex-col lg:flex-row">
          {/* Left Side: Project Details and Categories */}
          <div className="lg:w-3/4 lg:-ml-4"> {/* Left side takes 3/4 of the width */}
            {/* Project header with hero image */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-apple">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {project.title}
                </h1>
              </div>
            </div> 

            {/* Project details card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 shadow-xl rounded-xl ">
              {/* Main project info */}
              <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-sm animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Overview</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-teal-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-800">Start Date</h3>
                      <p className="text-sm text-gray-600">{project.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-teal-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10v8a2 2 0 002-2V6a2 2 0 00-2-2H4z" />
                        <path d="M6 18a2 2 0 01-2-2v-4a2 2 0 012-2h10a2 2 0 012 2v4a2 2 0 01-2 2H6z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-800">Project Budget</h3>
                      <p className="text-sm text-gray-600">₹{project.cost}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-teal-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-800">Status</h3>
                      <p className="text-sm text-gray-600">Ongoing</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-800 mb-2">Description</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Progress and company card */}
              <div className="bg-white rounded-2xl p-6 animate-fade-up shadow-xl border" style={{ animationDelay: '0.5s' }}>
                <div className="flex flex-col items-center space-y-6">
                  <h2 className="text-sm font-medium text-gray-800">Project Progress</h2>
                  
                  <ProgressRing 
                    progress={progress} 
                    size={120} 
                    strokeWidth={6}
                    className="my-4"
                  />
                  
                  <div className="w-full h-px bg-gray-100"></div>
                  
                  <div className="flex items-center w-full">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border border-gray-200">
                      <span className="text-gray-800 text-xs font-medium">Logo</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-800">{project.company}</p>
                      <p className="text-xs text-gray-600">Project Lead</p>
                    </div>
                  </div>
                  
                  <button className="w-full bg-teal-500 hover:bg-teal-500 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                    Contact Project Owner
                  </button>
                </div>
              </div>
            </div>

            {/* Engineering categories section */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Related Engineering Categories</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredCategories.map((category, index) => (
                  <CategoryChip
                    key={index}
                    name={category.name}
                    image={category.image}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Similar Projects Section */}
          <div className="lg:w-1/4 lg:ml-4"> {/* Right side takes 1/4 of the width */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Similar Projects</h2>
              {similarProjectsData.map((similarProject, index) => (
                <SimilarProjectCard 
                  key={index} 
                  project={similarProject} 
                  onClick={handleProjectChange} 
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
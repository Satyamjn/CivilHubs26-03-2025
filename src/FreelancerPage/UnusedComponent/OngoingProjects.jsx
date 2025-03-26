import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const projectsData = [
  {
    date: "Feb 28, 2025",
    title: "Structural Analysis & Design for Residential Building",
    company: "Engtec Consulting Inc.",
    cost: "25,000",
    description: "Comprehensive analysis of structural integrity and safety measures for a multi-story residential building.",
    image: "src/assets/Civilhubs/cat1.png"
  },
  {
    date: "March 15, 2025",
    title: "Bridge Foundation Stability Study",
    company: "InfraTech Solutions",
    cost: "40,000",
    description: "Assessing foundation stability, soil testing, and load-bearing capacity for a highway bridge project.",
    image: "src/assets/Civilhubs/cat2.png"
  },
  {
    date: "April 10, 2025",
    title: "High-Rise Wind Load Assessment",
    company: "Skyline Structures",
    cost: "60,000",
    description: "Analyzing wind forces on high-rise buildings and optimizing design for better aerodynamics and safety.",
    image: "src/assets/Civilhubs/cat3.png"
  }
];

const OngoingProjects = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1, // Show only 1 slide
        },
      },
    ],
  };

  // Click handler to navigate to project detail
  const handleViewDetails = (project) => {
    navigate('/project-detail', { state: { project } }); // Navigate and pass project data
  };

  return (
    <div className="py-10 bg-auto -mt-1 w-full">
      <h2 className="text-3xl ml-16 font-bold text-start mb-1">
        Ongoing <span className="text-teal-500">Projects</span>
      </h2>
  
      {/* Slider Wrapper */}
      <div className="max-w-full mx-auto px-4 sm:px-12 mt-3 relative">
        <div className="max-w-full -mt-5">
          <Slider {...settings}>
            {projectsData.map((project, index) => (
              <div key={index} className="px-2 sm:px-3 hover:scale-105 transition-all duration-500 mt-5 mb-5 w-full">
                <div 
                  className="bg-white p-6 rounded-lg shadow-lg border-lg scroll-smooth hover:shadow-md transition-transform duration-300 hover:shadow-teal-500 cursor-pointer z-20 w-full h-64 flex flex-col justify-between"
                  onClick={() => handleViewDetails(project)} // Add click handler
                >
                  {/* Project Date */}
                  <div className="flex justify-end gap-2 items-center mb-2">
                    <span className="text-gray-500 text-[11px]">{project.date}</span>
                  </div>
  
                  {/* Project Image & Details */}
                  <div className="flex items-start gap-4 mb-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-14 w-14 rounded-lg object-cover border border-gray-300" 
                    />
                    <div className="flex-1">
                      <h3 className="text-[15px] font-semibold text-gray-900">{project.company}</h3>
                      <h2 className="text-sm font-medium text-gray-500">{project.title}</h2>
                    </div>
                  </div>
  
                  {/* Project Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-2 line-clamp-3">
                    {project.description}
                  </p>
  
                  {/* Project Cost & Button */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-teal-500">₹{project.cost}</span>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors text-sm font-semibold" onClick={() => handleViewDetails(project)}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OngoingProjects;
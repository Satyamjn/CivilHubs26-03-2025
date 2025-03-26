import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const civilEngineeringJobs = [
  {
    id: 1,
    company: "ABC Construction Pvt. Ltd.",
    title: "Civil Site Engineer",
    salary: "₹40,000 - ₹50,000",
    location: "Mumbai, India",
    experience: "3+ Years",
    description:
      "Looking for an experienced Civil Site Engineer to manage construction activities",
    jobType: "Full Time",
  },
  {
    id: 2,
    company: "XYZ Infra Solutions",
    title: "Structural Engineer",
    salary: "₹50,000 - ₹70,000",
    location: "Bangalore, India",
    experience: "4+ Years",
    description:
      "Hiring a Structural Engineer to design, analyze, and oversee construction",
    jobType: "Full Time",
  },
  {
    id: 3,
    company: "LMN Builders",
    title: "Project Manager - Civil",
    salary: "₹60,000 - ₹80,000",
    location: "Delhi, India",
    experience: "6+ Years",
    description:
      "Looking for a Civil Project Manager to lead construction projects",
    jobType: "Full Time",
  },
  {
    id: 4,
    company: "PQR Infrastructure",
    title: "Highway Design Engineer",
    salary: "₹55,000 - ₹75,000",
    location: "Hyderabad, India",
    experience: "5+ Years",
    description:
      "Seeking a Highway Design Engineer with expertise in road and transportation infrastructure planning...",
    jobType: "Full Time",
  },
  {
    id: 5,
    company: "DEF Constructions",
    title: "Quantity Surveyor",
    salary: "₹45,000 - ₹65,000",
    location: "Chennai, India",
    experience: "4+ Years",
    description:
      "Hiring a Quantity Surveyor to estimate costs, manage budgets, and oversee construction project.",
    jobType: "Full Time",
  },
];

const latestjobsettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function JobCarousel() {
  const navigate = useNavigate(); // Use the useNavigate hook

  const latestjobShowAll = () => {
    navigate('/AllJobs'); // Navigate to AllJobs page
  };

  const handleJobClick = (job) => {
    navigate('/BrowseDetail', { state: { job } }); // Pass job data to BrowseDetail
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 py-8 -mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl ml-2 sm:ml-9 font-bold text-start">
          Latest job <span className="text-teal-500">Openings</span>
        </h2>
        <Link to={'/AllJobs'}>
          <button 
            onClick={latestjobShowAll} 
            className="text-teal-500 font-medium hover:underline"
          >
            Show All
          </button>
        </Link>
      </div>
      <Slider {...latestjobsettings}>
        {civilEngineeringJobs.map((job) => (
          <div key={job.id} className="p-2 sm:p-4" onClick={() => handleJobClick(job)}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 relative hover:shadow-lg transition-transform transform hover:scale-105 duration-300">
              <h3 className="text-sm font-semibold text-teal-500">{job.company}</h3>
              <h2 className="font-bold text-lg mt-2 mb-3">{job.title}</h2>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                💰 {job.salary} 📍 {job.location} 📅 {job.experience}
              </p>
              <p className="text-md text-gray-700 mt-5">
                {job.description}
              </p>
              <p className="text-gray-600 text-sm flex items-center gap-1 mt-2">
                🏢 Job Type: {job.jobType}
              </p>
              <div className="flex justify-between items-center mt-4">
                <button className="bg-teal-500 text-white py-2 px-4 rounded-lg flex-1">
                  Apply Now
                </button>
                <FaHeart className="text-gray-400 text-2xl ml-4 cursor-pointer hover:text-red-500" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaHeart, FaMoneyBillWave, FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const jobs = [
  {
    company: "Construction Pvt. Ltd.",
    title: "Site Engineer",
    salary: "₹40,000 - ₹50,000",
    location: "Pune, India",
    experience: "3+ Years",
    description:
      "Looking for an experienced Civil Site Engineer to manage construction activities, ensure quality  ...",
    type: "Full Time",
  },
  {
    company: "Construction Pvt. Ltd.",
    title: "Site Engineer",
    salary: "₹40,000 - ₹50,000",
    location: "Pune, India",
    experience: "3+ Years",
    description:
      "Looking for an experienced Civil Site Engineer to manage construction activities, ensure quality  ...",
    type: "Full Time",
  },
  {
    company: "Construction Pvt. Ltd.",
    title: "Site Engineer",
    salary: "₹40,000 - ₹50,000",
    location: "Pune, India",
    experience: "3+ Years",
    description:
      "Looking for an experienced Civil Site Engineer to manage construction activities, ensure quality  ...",
    type: "Full Time",
  },
  {
    company: "Construction Pvt. Ltd.",
    title: "Site Engineer",
    salary: "₹40,000 - ₹50,000",
    location: "Pune, India",
    experience: "3+ Years",
    description:
      "Looking for an experienced Civil Site Engineer to manage construction activities, ensure quality  ...",
    type: "Full Time",
  },
];

const FeaturedJobs = () => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleApplyNow = (job) => {
    navigate('/BrowseDetail', { state: { job } }); // Navigate to BrowseDetail
  };

  const handleCardClick = (job) => {
    handleApplyNow(job); // Navigate to BrowseDetail when card is clicked
  };
  const handleShowAll = () => {
    navigate('/AllJobs'); // Navigate to AllJobs page
  };
  return (
    <div className="w-full mx-auto px-4 sm:px-8 md:px-16 py-8  -mt-14">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-black text-start">
          Recommended <span className="text-teal-500">Jobs</span>
        </h2>
        <button 
          onClick={handleShowAll} 
          className="text-teal-500 font-medium hover:underline"
        >
          Show All
        </button>
      </div>
      
      <Slider {...settings} className="w-full">
        {jobs.map((job, index) => (
          <div key={index} className="p-2 sm:p-4">
            <div 
              className="bg-white p-6 rounded-2xl border border-gray-200 relative hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
              onClick={() => handleCardClick(job)} // Add onClick to the card
            >
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
              <a href="#" className="text-teal-500 text-sm font-medium hover:underline">
                Read More
              </a>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-700 text-sm flex items-center"><FaBriefcase className="mr-1" /> {job.type}</span>
                <button 
                  onClick={() => handleApplyNow(job)} // Add onClick to the button
                  className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};



export default FeaturedJobs ;

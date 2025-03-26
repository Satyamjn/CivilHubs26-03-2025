import React, { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaMapMarkerAlt, FaMoneyBillWave, FaStar, FaStarHalfAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

import { faFilter, faBriefcase, faLocationDot, faGraduationCap, faCube } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation, Link } from "react-router-dom";
// import NavbarBusiness from '../Component/NavbarBusiness';
import NavbarProperty from './NavbarProperty';
import Footer from './Footer';


export const jobs = [
  {
    id: 1,
    title: "Site Engineer",
    salary: "₹30,000 - ₹50,000/Month",
    company: "L&T",
    location: "Mumbai",
    experience: "2 - 5 years",
    requirement: "AutoCAD Knowledge",
    image: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
    tags: ["New", "10 Openings", "Onsite"],
    description: "2+ years experience in site supervision and execution.",
    jobType: "Field job"
  },
  {
    id: 2,
    title: "Structural Engineer",
    salary: "₹40,000 - ₹60,000/Month",
    company: "Tata Projects",
    location: "Delhi",
    experience: "3 - 6 years",
    requirement: "STAAD Pro & ETABS",
    image: "https://cdn-icons-png.flaticon.com/512/3774/3774291.png",
    tags: ["Structural Analysis", "5 Openings", "Hybrid"],
    description: "3+ years of experience in structural design and analysis.",
    jobType: "Hybrid"
  },
  {
    id: 3,
    title: "Geotechnical Engineer",
    salary: "₹50,000 - ₹70,000/Month",
    company: "GMR Infra",
    location: "Hyderabad",
    experience: "4 - 8 years",
    requirement: "Soil Testing & Analysis",
    image: "https://cdn-icons-png.flaticon.com/512/2541/2541995.png",
    tags: ["Experienced", "6 Openings", "Onsite"],
    description: "4+ years experience in soil mechanics and foundation engineering.",
    jobType: "Onsite"
  },
  {
    id: 4,
    title: "Transportation Engineer",
    salary: "₹55,000 - ₹75,000/Month",
    company: "AECOM",
    location: "Bangalore",
    experience: "5 - 9 years",
    requirement: "Highway Design Software",
    image: "https://cdn-icons-png.flaticon.com/512/4052/4052455.png",
    tags: ["Roads & Highways", "3 Openings", "Remote"],
    description: "5+ years experience in road and highway planning.",
    jobType: "Remote"
  },
  {
    id: 5,
    title: "Construction Manager",
    salary: "₹70,000 - ₹1,00,000/Month",
    company: "Shapoorji Pallonji",
    location: "Chennai",
    experience: "6 - 12 years",
    requirement: "Project Management",
    image: "https://cdn-icons-png.flaticon.com/512/856/856992.png",
    tags: ["Project Execution", "4 Openings", "Full-time"],
    description: "6+ years experience in managing large-scale construction projects.",
    jobType: "Full-time"
  },
  {
    id: 6,
    title: "Environmental Engineer",
    salary: "₹45,000 - ₹65,000/Month",
    company: "WSP Global",
    location: "Pune",
    experience: "3 - 7 years",
    requirement: "EIA & Waste Management",
    image: "https://cdn-icons-png.flaticon.com/512/1076/1076322.png",
    tags: ["Sustainability", "5 Openings", "Hybrid"],
    description: "3+ years experience in environmental impact assessment.",
    jobType: "Hybrid"
  },

];
const SimilarProfiles = () => {
  const similarProfiles = [
    {
      name: "Aditi Sharma",
      title: "Civil Engineer",
      experience: "3+ years",
      rating: "4.5/5.0",
      image: "https://example.com/aditi.jpg"
    },
    {
      name: "Rahul Verma",
      title: "Structural Engineer",
      experience: "4+ years",
      rating: "4.3/5.0",
      image: "https://example.com/rahul.jpg"
    },
    {
      name: "Sneha Gupta",
      title: "Geotechnical Engineer",
      experience: "5+ years",
      rating: "4.7/5.0",
      image: "https://example.com/sneha.jpg"
    },
     {
      name: "Rahul Verma",
      title: "Structural Engineer",
      experience: "4+ years",
      rating: "4.3/5.0",
      image: "https://example.com/rahul.jpg"
    }, {
      name: "Rahul Verma",
      title: "Structural Engineer",
      experience: "4+ years",
      rating: "4.3/5.0",
      image: "https://example.com/rahul.jpg"
    },
    {
      name: "Rahul Verma",
      title: "Structural Engineer",
      experience: "4+ years",
      rating: "4.3/5.0",
      image: "https://example.com/rahul.jpg"
    },
    {
      name: "Rahul Verma",
      title: "Structural Engineer",
      experience: "4+ years",
      rating: "4.3/5.0",
      image: "https://example.com/rahul.jpg"
    },
    {
      name: "Rahul Verma",
      title: "Structural Engineer",
      experience: "4+ years",
      rating: "4.3/5.0",
      image: "https://example.com/rahul.jpg"
    },
    {
      name: "Rahul Verma",
      title: "Structural Engineer",
      experience: "4+ years",
      rating: "4.3/5.0",
      image: "https://example.com/rahul.jpg"
    },

    

    

  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Similar Profiles</h2>
      {similarProfiles.map((profile, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center mb-4 border p-4 rounded-lg shadow-md">
          <img src={profile.image} alt={profile.name} className="w-16 h-16 rounded-full mb-4 md:mb-0 md:mr-4" />
          <div className="flex-1">
            <h3 className="text-md font-semibold">{profile.name}</h3>
            <p className="text-sm text-gray-600">{profile.title}</p>
            <p className="text-sm text-gray-600">Experience: {profile.experience}</p>
            <div className="flex items-center mt-1">
              <div className="bg-teal-100 text-teal-600 text-sm font-medium px-2 py-1 rounded">
                {profile.rating}
              </div>
              <div className="ml-2 flex text-yellow-400 text-lg">
                ★★★★☆
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SkillDetailPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  
    const{dummy,skill}= location.state;

  
  useEffect(() => {
    window.scrollTo(0, 0); // Page ko  top se load karega
  }, []);


  return (
    <>
      <NavbarProperty/>
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
        {/* Filters Section */}
        <aside className="w-full lg:w-1/4 p-7 mb-8 bg-white border rounded-xl border-gray-200 text-xs text-gray-700 font-normal">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-teal-500 flex items-center">
              <FontAwesomeIcon icon={faFilter} className="mr-3" />
              <span className='m-2'>Filters</span> (1)
            </h2>
  
            {/* Location Filter */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold">Location</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full font-semibold text-sm">Location</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Work from home</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Part Time</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Fresher</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Field job</span>
              </div>
            </div>
  
            {/* Job Roles Filter */}
            <div className="mb-4">
              <h3 className="text-md font-semibold">Job Roles</h3>
              <div className="flex flex-wrap gap-2 mt-2 font-normal">
                <span className="px-2 py-1 rounded-full text-sm border">Civil Engineer</span>
                <span className="px-2 py-1 rounded-full text-sm border">Structural Engineer</span>
                <span className="px-2 py-1 rounded-full text-sm border">Site Engineer</span>
                <span className="px-3 py-1 rounded-full text-sm border">Construction Manager</span>
                <span className="px-3 py-1 rounded-full text-sm border mb-1">Geotechnical Engineer</span>
                <span className="px-3 py-1 rounded-full text-sm border mb-1">Surveyor</span>
                <button className="px-2 py-1 text-teal-500 bg-white border-2 border-teal-500 rounded-full text-sm hover:bg-white">
                  + 37 More
                </button>
              </div>
            </div>
  
            {/* Monthly Salary Filter */}
            <div className="mb-4 leading-8">
              <h3 className="text-md font-semibold">Monthly Salary</h3>
              <div className="flex flex-col mt-2">
                {["5,000", "10,000", "20,000", "30,000", "40,000", "50,000"].map((amount) => (
                  <label className="block" key={amount}>
                    <input type="radio" name="salary" className="mr-2" /> More than ₹{amount}
                  </label>
                ))}
              </div>
            </div>
  
            {/* Experience Filter */}
            <div className="mb-4 leading-8">
              <h3 className="text-md font-semibold">Experience</h3>
              <div className="flex flex-col mt-2">
                {["Fresher", "Less than 1 year", "Less than 2 years", "Less than 3 years", "Less than 4 years", "More than 4 years"].map((exp) => (
                  <label className="block" key={exp}>
                    <input type="radio" name="experience" className="mr-2" /> {exp}
                  </label>
                ))}
              </div>
            </div>
  
            {/* Gender Filter */}
            <div className="mb-4 leading-8">
              <h3 className="text-md font-semibold">Gender</h3>
              <div className="flex flex-col mt-2">
                <label className="block">
                  <input type="radio" name="gender" className="mr-2" /> Jobs for Men
                </label>
                <label className="block">
                  <input type="radio" name="gender" className="mr-2" /> Jobs for Women
                </label>
              </div>
            </div>
  
            {/* Qualification Filter */}
            <div className="mb-4 leading-8">
              <h3 className="text-md font-semibold">Qualification</h3>
              <div className="flex flex-col mt-2">
                {["All Education levels", "10th Pass and above", "12th Pass and above", "Diploma and above", "Graduate and above", "Post Graduate and above"].map((qual) => (
                  <label className="block" key={qual}>
                    <input type="radio" name="qualification" className="mr-2" /> {qual}
                  </label>
                ))}
              </div>
            </div>
  
            <button className="py-2 px-4 mt-4 text-teal-500 border border-teal-500 rounded-3xl">Clear All</button>
          </div>
        </aside>
  
        {/* Job Listings Section */}
        <main className="w-full lg:w-1/2 p-4">
          <h1 className="text-2xl font-semibold mb-4">{dummy.name}</h1>
          {filteredJobs.length === 0 && <p className="text-center text-gray-500">No jobs found matching your criteria.</p>}
  
          {filteredJobs.length > 0 && filteredJobs.map((job) => (
    <motion.div
    key={job.id}
    className="relative bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl overflow-hidden p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6 mt-6 transition-all"
    onClick={() => navigate("/profilehire", { state: { job, dummy, skill } })}
    whileHover={{ scale: 1.02, rotateX: 3, rotateY: 3 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
  >
    {/* Image Section with Hover Zoom */}
    <div className="relative w-full sm:w-1/2 overflow-hidden rounded-xl shadow-md">
      <motion.img
        src={dummy.img}
        alt={job.title}
        className="w-full h-56 sm:h-52 object-cover rounded-xl border border-gray-300"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
      />
    </div>

    {/* Content Section */}
    <div className="p-6 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex flex-col justify-center text-start">
      <h2 className="text-2xl font-bold text-gray-900 mt-[-29px]">{job.title}</h2>
      <h3 className="text-lg font-medium text-gray-700">{job.company}</h3>
      <p className="text-gray-600 mt-3 flex items-center">
        <FaMapMarkerAlt className="text-red-500 mr-2" /> {job.location || "Location Not Provided"}
      </p>

      {/* Salary & Rating */}
      <div className="flex  text-yellow-400 text-lg space-x-1 mb-0">
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
        </div>
      <div className="flex items-center justify-between mt-4">
        <div className="bg-teal-100 text-teal-600 text-sm font-medium px-4 py-1 rounded-md shadow-sm flex items-center">
          <FaMoneyBillWave className="text-green-500 mr-2" /> {job.salary}
        </div>
       
      </div>
    
      {/* Apply Now Button with FontAwesome Icon */}
      <motion.button
        className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center"
        whileHover={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        Apply Now <FaArrowRight className="ml-2" />
      </motion.button>
    </div>
  </motion.div>
          ))}
        </main>
  
        {/* Similar Profile Section */}
        <aside className="w-full lg:w-1/3 mb-4 p-2 bg-white shadow-lg border rounded-lg h-auto">
          <SimilarProfiles />
        </aside>
      </div>
      <Footer/>
    </>
  );
};

export default SkillDetailPage;


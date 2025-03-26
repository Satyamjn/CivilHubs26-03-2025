import React, { useEffect, useState, useRef } from 'react';
import Navbar from './shared/Navbar';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import Footer from './shared/Footer';

import { useNavigate } from 'react-router-dom';

import { Search, Briefcase, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatePresence } from 'framer-motion';
import CategoryCarousel from "./CategoryCarousel";
// import { FaHeart } from "react-icons/fa";

import { ArrowLeft, ArrowRight } from "lucide-react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';

import { FaHeart, FaMoneyBillWave, FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";



const FreeLanceHome = () => {

 
  const navigate = useNavigate();

  // Replace this with your method of getting user data
  const user = JSON.parse(localStorage.getItem('user')); // Example of getting user from localStorage

  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, [user, navigate]); // Add user and navigate to dependencies
  // ===============================================================================================================

  //FreeLance  HomePage 
  // ==================================================HeroSection =================================
  // Job searchBar code for hero section
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [error, setError] = useState(false);
  const locationSuggestionData = ["Indore", "Kolkata", "Chandigarh", "Pune"];
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [locationValue, setLocationValue] = useState("");
 

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      const filtered = jobSuggestions.filter((job) =>
        job.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocationValue(value);
    if (value.length > 0) {
      const filtered = locationSuggestionData.filter((job) =>
        job.toLowerCase().includes(value.toLowerCase())
      );
      setLocationSuggestions(filtered);
    } else {
      setLocationSuggestions([]);
    }
  };

  const handleSelectSuggestion = (job) => {
    setSearchTerm(job);
    setFilteredSuggestions([]);
  };

  const handleLocationSuggestion = (job) => {
    setLocationValue(job);
    setLocationSuggestions([]);
  };

  // HeroSection code
  const [query, setQuery] = useState("");
  const searchJobHandler = () => {
    navigate("/browse", { state: { query } });
  };

  const words = ["Hiring", "Job", "Project", "Freelancer"];
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlip(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFlip(false);
      }, 600);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // ===================================================================================================================

  // ==================================Ongoing Project =================================================================
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
    }
  ];

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

  // ========================================================================================

  // ================================RecentlyCompleted========================================


  const recentlyCompledData = [
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
    }
  ];


  const settingsRecentlyCompled = {
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
  const handleRecentlyCompled = (project) => {
    navigate('/project-detail', { state: { project } }); // Navigate and pass project data
  };

  // ==========================================================================================

  // ==================================JobSearchCarousel========================================================
  const categoriesData = [
    { name: "Structural engineering", image: "/assets/Civilhubs/category1.png" },
    { name: "Geotechnical engineering", image: "/assets/Civilhubs/category2.png" },
    { name: "Environmental engineering", image: "/assets/Civilhubs/category3.png" },
    { name: "Transportation engineering", image: "/assets/Civilhubs/category4.png" },
    { name: "Construction management", image: "/assets/Civilhubs/category5.png" },
    { name: "Coastal engineering", image: "/assets/Civilhubs/category6.png" },
    { name: "Earthquake engineering", image: "/assets/Civilhubs/category7.png" },
    { name: "Surveying", image: "/assets/Civilhubs/category8.png" },
    { name: "Consulting engineer", image: "/assets/Civilhubs/category9.png" },
    { name: "ChennDesign Engineerai", image: "/assets/Civilhubs/category10.png" },
  ];
  const sliderRef = useRef(null);


  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 200;
        if (
          sliderRef.current.scrollLeft >=
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        ) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (category, backgroundImage) => {
    navigate('/category', { state: { category, backgroundImage } }); // Pass backgroundImage to CategoriesPage
  };
  // ===========================================================================================================


  //  =============LatestProject======================================================================= 
  const latestprojects = [
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
    }
  ];
  const latestsettings = {
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
  const handlelatestDetails = (project) => {
    navigate('/project-detail', { state: { project } });
  };

  // =================================================================================================

  // ================FreelanceBanner====================================================================== 
  const images = [
    "/assets/Civilhubs/banner1.png",
    "/assets/Civilhubs/banner2.png",
    "/assets/Civilhubs/banner3.png",
    "/assets/Civilhubs/banner1.png",
    "/assets/Civilhubs/banner2.png",
    "/assets/Civilhubs/banner3.png",
  ];

  const [isPaused, setIsPaused] = useState(false);

  // ===================================================================================================

  //  =============================RecommededJobs==================================================================
  const recomndedjobs = [
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
  const recomondedsettings = {
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

  const handleRecomndedClick = (job) => {
    handleApplyNow(job); // Navigate to BrowseDetail when card is clicked
  };
  const handleShowAll = () => {
    navigate('/AllJobs'); // Navigate to AllJobs page
  };

  // =================================================================================================================
  //  ============================= LatestJobs ========================================================================================= 

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
  const latestjobShowAll = () => {
    navigate('/AllJobs'); // Navigate to AllJobs page
  };

  const handleJobClick = (job) => {
    navigate('/BrowseDetail', { state: { job } }); // Pass job data to BrowseDetail

  };

  // =================================================================================
  //  ==================================FreeBlog==========================================
  const newsData = [
    {
      category: "Sustainability",
      author: "Eng. John Doe",
      time: "Feb 8, 2025",
      title: "The Future of Sustainable Construction",
      description:
        "Sustainable construction is transforming the way we design, build, and maintain our infrastructure. Discover how renewable materials, 3D printing, smart energy systems, and green infrastructure are shaping the future.",
      imageUrl:
        "https://img.freepik.com/free-photo/beautiful-skyscraper-with-architecture-building-around-city_74190-1080.jpg?t=st=1740222279~exp=1740225879~hmac=ed2f99d2ad260c7b44ddf5ca866f253af8551e8dcc56d6bb36dc5758937b71b1&w=1380",
    },
    {
      category: "Peoples",
      author: "James",
      time: "24min read",
      title: "A Media Critic Focuses on the Crisis in Local News",
      description:
        "Exploring the decline of local journalism and its impact on communities, highlighting the role of media in shaping  opinion.",
      imageUrl:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fGxvY2FsJTIwbmV3c3xlbnwwfHx8fDE2OTUwMjE0NzQ&ixlib=rb-4.0.3&q=80&w=400",
    },
    {
      category: "Technology",
      author: "Sarah Williams",
      time: "Feb 15, 2025",
      title: "Revolutionizing Healthcare with AI Technology",
      description:
        "Artificial Intelligence is transforming healthcare with predictive analytics, personalized treatments, and improved patient care systems.",
      imageUrl:
        "https://img.freepik.com/free-photo/medical-banner-with-woman-wearing-vr-glasses_23-2149611195.jpg?t=st=1740222359~exp=1740225959~hmac=bb96849834416bed7a54917d3036967fbe93eb85b385b0ba45670dabad913063&w=1800",
    },
    {
      category: "Environment",
      author: "Michael Green",
      time: "Feb 18, 2025",
      title: "How Urban Green Spaces Improve Mental Health",
      description:
        "Urban parks and green spaces are more than aesthetic. Discover how they contribute to better mental health and community well-being.",
      imageUrl:
        "https://images.unsplash.com/photo-1503264116251-35a269479413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHVyYmFuJTIwZ3JlZW4lMjBzcGFjZXxlbnwwfHx8fDE2OTUwMjIwMjM&ixlib=rb-4.0.3&q=80&w=400",
    },
    {
      category: "Education",
      author: "Emma Johnson",
      time: "Feb 20, 2025",
      title: "E-Learning Trends Transforming Modern Education",
      description:
        "The rise of digital classrooms, interactive learning tools, and online courses is reshaping how education is delivered globally.",
      imageUrl:
        "https://img.freepik.com/premium-vector/e-learning-innovative-online-education-internet-technology-webinar-teaching-online-training-courses-skill-development-robotic-hand-touching-digital-interface-illustration_127544-453.jpg",
    },
  ];
  const newssettings = {
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
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


  // =========================================================================================================
  return (
    <div>
      <Navbar />

      {/* ============================HeroSection============================================================ */}
      {/* <HeroSection />   */}
      <div
  className="text-center px-5 sm:px-10 bg-cover bg-center min-h-screen flex flex-col justify-start items-center pt-20"
  style={{
    backgroundImage: 'url("/assets/Civilhubs/freelancehome.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <motion.div
    className="flex flex-col gap-7 my-10 w-full max-w-4xl mx-auto"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {/* Highlighted Text */}
    <motion.span
      className="mx-auto px-4 py-2 rounded-full bg-teal-500 text-white font-medium text-sm sm:text-base shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      No. 1 Freelance Website
    </motion.span>

    <motion.h1
      className="text-3xl sm:text-5xl font-bold leading-tight text-white"
      style={{
        textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
      }}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <span className="block">
        Let's Find Job & Opportunity <br /> Get Your{" "}
        <span className="mt-3 inline-block relative w-32 sm:w-48 h-10 sm:h-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={words[index]}
              className="mt-2 absolute border-2 border-gray-400 w-full h-full rounded-lg bg-gradient-to-r from-teal-500 to-teal-500 shadow-lg"
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0, rotateX: -90 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div
                key={words[index]}
                className="absolute top-0 left-0 w-full h-full flex justify-center items-center 
               bg-gradient-to-r from-teal-800 to-teal-500 
               rounded-lg text-white text-2xl sm:text-3xl font-bold"
                style={{
                  textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
                }}
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                exit={{ opacity: 0, rotateX: -90 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {words[index]}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </span>
      </span>
    </motion.h1>

    <motion.p
      className="mx-auto text-white font-medium text-sm sm:text-base w-full sm:w-3/4"
      style={{
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      Find your dream job with us. Explore top opportunities from leading
      companies worldwide.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="w-full flex flex-col items-center"
    >
      {/* ==========================<JobSearchBar /> ===============================================*/}
      <div className="flex flex-col w-full sm:w-[70%] md:w-[70%] lg:w-[60%] xl:w-[50%] bg-transparent rounded-full items-center gap-4 mx-auto shadow-[1px_1px_4px]">
  <form
    
    className={`relative flex items-center border rounded-full p-2 w-full bg-white ${error ? "border-red-500" : "border-gray-300"}`}
  >
    {/* Search by Skill */}
    <div className="flex items-center px-3 relative w-full mb-2 sm:mb-0">
      <Search className="w-5 h-5 text-gray-500" />
      <input
        type="text"
        placeholder="Search jobs by 'skill'"
        value={searchTerm}
        onChange={handleInputChange}
        className="outline-none p-2 text-gray-700 w-full"
      />
      {filteredSuggestions.length > 0 && (
        <ul className="absolute top-12 left-0 w-full bg-white border border-gray-300 shadow-lg rounded-lg max-h-48 overflow-y-auto z-10">
          {filteredSuggestions.map((job, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectSuggestion(job)}
            >
              {job}
            </li>
          ))}
        </ul>
      )}
    </div>

    {/* Search Button */}
    <button
      type="submit"
      className="bg-teal-500 text-white px-4 py-2 rounded-full sm:ml-2 font-semibold"
    >
      <Search className="text-white" />
    </button>
  </form>

  {/* Error Message */}
  {error && (
    <div className="flex items-center text-red-500 mt-2">
      <AlertCircle className="w-5 h-5 mr-2" />
      <span>Please enter a job title, company, skill, or department</span>
    </div>
  )}
</div>

      <CategoryCarousel />
    </motion.div>
  </motion.div>
</div>
      {/* ================================================================================================= */}


      {/* ===================OngoingProjects========================================================= */}

      {/* <OngoingProjects /> */}


      <div className="py-10 bg-auto -mt-7 w-full mb-1">
        <h2 className="text-3xl ml-16 font-bold text-start ">
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

      {/* =============================================================================== */}



      {/* ========================= RecentlyCompleted ========================= */}


      {/* <RecentlyCompled /> */}


      <div className="py-10 bg-auto -mt-24 w-full">
        <h2 className="text-2xl sm:text-3xl ml-8 sm:ml-16 font-bold text-start mb-1">
          Recently <span className="text-teal-500">Completed</span>
        </h2>

        {/* Slider Wrapper */}
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-12 mt-3 relative">
          <div className="max-w-full -mt-5">
            <Slider {...settingsRecentlyCompled}>
              {recentlyCompledData.map((project, index) => (
                <div key={index} className="px-2 sm:px-3 hover:scale-105 transition-all duration-500 mt-5 mb-5 w-full">
                  <div
                    className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-lg scroll-smooth hover:shadow-md transition-transform duration-300 hover:shadow-teal-500 cursor-pointer z-20 w-full h-56 sm:h-64 flex flex-col justify-between"
                    onClick={() => handleRecentlyCompled(project)} // Add click handler
                  >
                    {/* Project Date */}
                    <div className="flex justify-end gap-2 items-center mb-2">
                      <span className="text-gray-500 text-[10px] sm:text-[11px]">{project.date}</span>
                    </div>

                    {/* Project Image & Details */}
                    <div className="flex items-start gap-4 mb-5 -mt- -ml-2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg object-cover border border-gray-300"
                      />
                      <div className="flex-1">
                        <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900">{project.company}</h3>
                        <h2 className="text-sm font-medium text-gray-500">{project.title}</h2>
                      </div>
                    </div>

                    {/* Project Description */}
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-2 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Project Cost & Button */}
                    <div className="flex justify-between items-center">
                      <span className="text-base sm:text-lg font-semibold text-teal-500">₹{project.cost}</span>
                      <button className="bg-teal-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md hover:bg-teal-600 transition-colors text-xs sm:text-sm font-semibold" onClick={() => handleRecentlyCompled(project)}>
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
      {/* ===================================================================================== */}


      {/* ===========================JobSearchCarousel===================================== */}
      {/* <JobSearchCarousel /> */}


      <div className="py-10 bg-auto -mt-24 w-full">
        <div className="text-center p-6">
        <h2 className="text-2xl sm:text-3xl  sm:ml-8 font-bold text-start mb-1">
            Popular <span className="text-teal-500 ">Categories</span>
          </h2>

          <div className="max-w-full mx-auto px-4 sm:px-8 md:px-12  relative">
            <button
              className="absolute left-0 z-10 bg-white shadow-md p-2 top-20 rounded-full"
              onClick={() => (sliderRef.current.scrollLeft -= 200)}
            >
              <ArrowLeft size={20} className="hover:text-[#3864c2]" />
            </button>
            <div
              ref={sliderRef}
              className="flex space-x-4 overflow-hidden scroll-smooth max-w-7.5xl px-12 py-8"
            >
              {categoriesData.map((city, index) => (
                <div
                  key={index}
                  className="min-w-[200px] shadow-lg rounded-lg bg-white transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-teal-500 hover:scale-105 hover:cursor-pointer border-r-3 hover:transition-all hover:duration-500 hover:ease-in-out box-border"
                  onClick={() => handleCardClick(city.name, city.image)} // Pass the background image
                >
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-24 object-cover rounded-t-lg"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold">{city.name}</h3>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="absolute right-0 z-10 bg-white shadow-md p-2 top-20 rounded-full"
              onClick={() => (sliderRef.current.scrollLeft += 200)}
            >
              <ArrowRight size={20} className="hover:text-[#3864c2]" />
            </button>
          </div>
        </div>
      </div>

      {/* ================================================================================= */}




      {/* ========================= Exploremarkets ========================= */}

      {/* <Exploremarkets /> */}

      <div className=" py-2 mb-8 -mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left  bg-gradient-to-r p-8  from-teal-500 to-blue-400 shadow-lg rounded-lg w-full max-w-[1400px] mx-auto">
          {/* Content - Left */}
          <div className="flex flex-col items-center md:items-start md:ml-6 mr-10 ">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
              Looking for Materials? <br /> Find Trusted Vendors Now!
            </h2>

            <Link to={'/marketplace'}>
              <button className="ml-20 mt-3 px-6 py-2 text-white border-2 rounded-full font-medium transition duration-300 hover:bg-[#96F] hover:text-white">
                Explore Now
              </button>
            </Link>
          </div>

          {/* Lottie Animation - Right */}
          <div className="ml-10 w-60 h-40 md:w-48 md:h-48 flex-shrink-0 bg-gray-200 rounded">
            <DotLottieReact
              src="https://lottie.host/76b05522-8537-4242-96f2-61d5c758dd9e/CQ7GU4eKKh.lottie"
              loop
              autoplay
            />
          </div>
        </div>

      </div>
      {/* ===========================================================================================*/}

      {/* =============LatestProject======================================================================= */}
      {/* <LatestProject /> */}
      <div className="py-10 bg-auto -mt-16 w-full">
        <h2 className="text-3xl ml-4 sm:ml-16 font-bold text-start mb-1">
          Latest <span className="text-teal-500">Projects</span>
        </h2>

        {/* Slider Wrapper */}
        <div className="max-w-full mx-auto px-4 sm:px-12 mt-3 relative">
          <div className="max-w-full -mt-5">
            <Slider {...latestsettings}>
              {latestprojects.map((project, index) => (
                <div key={index} className="px-2 sm:px-3 hover:scale-105 transition-all duration-500 mt-5 mb-5 w-full">
                  <div
                    className="bg-white p-6 rounded-lg shadow-lg border-lg scroll-smooth hover:shadow-md transition-transform duration-300 hover:shadow-teal-500 cursor-pointer z-20 w-full h-64 flex flex-col justify-between"
                    onClick={() => handlelatestDetails(project)} // Add click handler
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
                      <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors text-sm font-semibold" onClick={() => handlelatestDetails(project)}>
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
      {/* ================================================================================================== */}


      {/* ================FreelanceBanner====================================================================== */}
      {/* <FreelanceBanner /> */}
      <div
        className="w-full overflow-hidden relative mb-7 "
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex w-max space-x-4"
          animate={{ x: isPaused ? "0%" : ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 40, // Adjust duration for smooth scrolling
            repeat: Infinity,
          }}
        >
          {/* Duplicating images to ensure seamless infinite scrolling */}
          {[...images, ...images,].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`carousel-${index}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          ))}
        </motion.div>
      </div>
      {/* ========================================================================================================== */}

      {/* =============================RecommededJobs==================================================================*/}
      {/* <RecommededJobs /> */}

      <div className="py-10 bg-auto -mt-14 w-full">
        <div className="flex justify-between items-center ">
          <h2 className="text-3xl ml-16 font-bold text-start "> Recommended <span className="text-teal-500">Jobs</span> </h2>
          <button
            onClick={handleShowAll}
            className="text-teal-500 font-medium hover:underline mr-4"
          >
            Show All
          </button>
        </div>

        <div className="max-w-full mx-auto px-4 sm:px-12 mt-3 relative">
        <div className="max-w-full -mt-5">

        <Slider {...recomondedsettings} className="w-full">
          {recomndedjobs.map((job, index) => (
            <div key={index} className="p-4">
              <div
                className="bg-white p-6 rounded-2xl shadow-lg border  relative hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
                onClick={() => handleRecomndedClick(job)} // Add onClick to the card
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
                    className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-500 transition"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </div>
      </div>


      {/* =============================================================================================================== */}

      {/* ==============ExploreMoreJobs======================================================================================== */}
      {/* <ExploreMoreJobs /> */}
      <div className=" py-2 -mt-3">
        <div className="  flex flex-col md:flex-row items-center justify-between text-center md:text-left p-8 bg-gradient-to-r from-teal-500 to-blue-400 shadow-lg rounded-lg w-full max-w-[1400px] mx-auto -mt-7">

          {/* Lottie Animation - Left */}
          <div className="ml-10 w-60 h-40 md:w-48 md:h-48 flex-shrink-0 bg-gray-200 rounded">
            <DotLottieReact
              // ='https://lottie.host/76b05522-8537-4242-96f2-61d5c758dd9e/CQ7GU4eKKh.lottie'
              src="https://lottie.host/a34cccdd-099a-4052-abc8-e16368e7164e/yKnhvXdkh1.lottie"
              loop
              autoplay
            />
          </div>

          {/* Content - Right */}
          <div className="flex flex-col items-center md:items-start md:ml-6 mr-10 ">
            <h2 className="text-lg md:text-xl font-semibold text-gray-00 mb-2">
              Find More Opportunities, Start Exploring!
            </h2>

            <Link to={'/allJobs'}>
              <button className="ml-20 mt-3 px-6 py-2 text-white border-2  rounded-full font-medium transition duration-300 hover:bg-teal-500 hover:text-white">
                Explore more jobs
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* ====================================================================================================================== */}

      {/* ============================= LatestJobs ========================================================================================= */}
      {/* <LatestJobs /> */}

      <div className="py-10 bg-auto -mt-8  w-full">
        <div className="flex justify-between items-center ">
          <h2 className="text-3xl ml-2 sm:ml-16 font-bold text-start">
            Latest job <span className="text-teal-500">Openings</span>
          </h2>
          <Link to={'/AllJobs'}>
            <button
              onClick={latestjobShowAll}
              className="text-teal-500 font-medium hover:underline mr-3"
            >
              Show All
            </button>
          </Link>
        </div>


 <div className="max-w-full mx-auto px-4 sm:px-12 mt-3 relative">
        <div className="max-w-full -mt-5">
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
          </div>

      </div>

      {/* ====================================================================================================================== */}


      {/* ==================================FreeBlog=============================================================================== */}
      {/* <FreeBlog /> */}
      <div className=" bg-auto mb-5">
        <h2 className="text-3xl ml-4   sm:ml-16 font-bold text-start  -mt-10">
          Recent <span className="text-teal-500">Blogs</span>
        </h2>
      
        <div className="w-full max-w-screen-3xl px-4 sm:px-6 lg:px-8 mx-auto relative">
        <Slider {...settings} className="w-full">
          {newsData.map((news, index) => (
            <div 
              key={index}
              className="px-2 sm:px-3 hover:scale-105 transition-all duration-500 mt-5 mb-4"
            >
              <div 
                className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-md hover:shadow-teal-500 hover:cursor-pointer z-20 h-max w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto"
                onClick={() => navigate('/blogdetail1F', { state: { news } })} // Navigate to the blog detail page
              >
                <img
                  src={news.imageUrl}
                  alt={news.title}
                  className="w-full h-44 md:h-40 sm:h-36 object-cover rounded-lg mb-3"
                />
                <span className="absolute -top-2 right-2 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {news.category}
                </span>
                <p className="text-xs text-gray-600 mb-1">
                  {news.author} &nbsp;|&nbsp; {news.time}
                </p>
                <h3 className="text-sm font-semibold mb-1 leading-snug">
                  {news.title}
                </h3>
                <p className="text-xs text-gray-700 line-clamp-3">
                  {news.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
       
      </div>
      {/* ======================================================================================================================== */}
      <Footer />
    </div>
  );
}

export default FreeLanceHome;
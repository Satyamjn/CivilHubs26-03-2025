import React, { useEffect, useState } from 'react'
import NavbarComp from './Components/Navbar'
// import HeroSection from './Components/HeroSection'

import FeaturedData from './Components/FeaturedData'
import LatestNews from './Components/News'
import Footer from './Components/Footer'
// import Banner from './UnusedComponent/Banner'
import EngineerProfileSlider from './Components/Featured'
import HireOntemp from './UnusedComponent/HireOnTemp'
import Explorer from './UnusedComponent/Explorer'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';


import { Search, MapPin, AlertCircle, Briefcase } from "lucide-react";
import { motion } from "framer-motion";



import Slider from "react-slick"; // Import the Slider component
import "slick-carousel/slick/slick.css"; // Import the CSS for slick
import "slick-carousel/slick/slick-theme.css"; // Import the theme CSS for slick
import { AnimatePresence } from "framer-motion";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';




const jobSuggestions = [
  "Civil Engineer",
  "Structural Engineer",
  "Site Engineer",
  "Construction Manager",
  "Transportation Engineer",
  "Geotechnical Engineer",
  "Environmental Engineer",
  "Surveyor",
];


const locationSuggestionData = ["Indore", "Kolkata", "Chandigarh", "Pune"];

const Companyhome = () => {
  const navigate = useNavigate();

  // ==========================hero section =========================
  const [searchTerm, setSearchTerm] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [error, setError] = useState(false);


  

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
      const filtered = locationSuggestionData.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
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

  const handleLocationSuggestion = (loc) => {
    setLocationValue(loc);
    setLocationSuggestions([]);
  };
  // ================================================================

  // ========Banner===================================================
  const banners = [
    {
      id: 1,
      title: "Instant Access to Qualified Talent",
      description: "Review profiles, compare portfolios, and hire the best.",
      buttonText: "Post Project",
      buttonLink: "/postproject",
      imageUrl: "/assets/Civilhubs/image1.png",
    },
    {
      id: 2,
      title: "Post a Job Today!",
      description: "Connect with expert engineers, designers, and consultants.",
      buttonText: "Post a Job",
      buttonLink: "/postjob",
      imageUrl: "/assets/Civilhubs/image3.png",
    },
  ];
  // ================================================================



  //  ==========HireOntemp===================================================== 
  const categories = [
    {
      title: "Skilled Technical Manpower",
      jobs: [
        { name: "Civil Engineer", img: "/assets/Civilhubs/skilled1.jpg" },
        { name: "Site Engineer", img: "/assets/Civilhubs/skilled2.jpg" },
        { name: "Project Engineer", img: "/assets/Civilhubs/skilled3.jpg" },
        { name: "Construction Manager", img: "/assets/Civilhubs/skilled4.jpg" },
        { name: "Surveyor", img: "/assets/Civilhubs/skilled5.jpg" },
        { name: "Supervisor", img: "/assets/Civilhubs/skilled6.jpg" },
        { name: "Structural Engineer", img: "/assets/Civilhubs/skilled7.jpg" },
        { name: "Quantity Surveyor", img: "/assets/Civilhubs/skilled8.jpg" },
        { name: "MEP Engineer", img: "/assets/Civilhubs/skilled9.jpg" },
        { name: "Quality Control Engineer", img: "/assets/Civilhubs/skilled10.jpg" },
        { name: "Safety Officer", img: "/assets/Civilhubs/skilled11.jpg" },
        { name: "Draughtsman", img: "/assets/Civilhubs/skilled12.jpg" }
      ],
    },
    {
      title: "Skilled Household & Trade Specific Manpower",
      jobs: [
        { name: "Construction Worker", img: "/assets/Civilhubs/unskilled1.jpg" },
        { name: "Mason", img: "/assets/Civilhubs/unskilled2.jpg" },
        { name: "Carpenter", img: "/assets/Civilhubs/unskilled3.jpg" },
        { name: "Electrician", img: "/assets/Civilhubs/unskilled4.jpg" },
        { name: "Plumber", img: "/assets/Civilhubs/unskilled5.jpg" },
        { name: "Painter", img: "/assets/Civilhubs/unskilled6.jpg" },
        { name: "Welder", img: "/assets/Civilhubs/unskilled7.jpg" },
        { name: "Steel Fixer", img: "/assets/Civilhubs/unskilled8.jpg" },
        { name: "Tiler", img: "/assets/Civilhubs/unskilled9.jpg" },
        { name: "Glass Installer", img: "/assets/Civilhubs/unskilled10.jpg" },
        { name: "Scaffolder", img: "/assets/Civilhubs/unskilled11.jpg" },
        { name: "Rigger", img: "/assets/Civilhubs/unskilled12.jpg" },
      ],
    },
    {
      title: "Skilled Machine Operators",
      jobs: [
        { name: "Crane Operator", img: "/assets/Civilhubs/skilled7.jpg" },
        { name: "Excavator Operator", img: "/assets/Civilhubs/skilled8.jpg" },
        { name: "Bulldozer Operator", img: "/assets/Civilhubs/skilled9.jpg" },
        { name: "Forklift Operator", img: "/assets/Civilhubs/skilled10.jpg" },
        { name: "Backhoe Operator", img: "/assets/Civilhubs/skilled11.jpg" },
        { name: "Loader Operator", img: "/assets/Civilhubs/skilled12.jpg" },
      ],
    },
    {
      title: "Semi Skilled Workers",
      jobs: [
        { name: "Construction Worker", img: "/assets/Civilhubs/unskilled1.jpg" },
        { name: "Mason", img: "/assets/Civilhubs/unskilled2.jpg" },
        { name: "Carpenter", img: "/assets/Civilhubs/unskilled3.jpg" },
        { name: "Electrician", img: "/assets/Civilhubs/unskilled4.jpg" },
        { name: "Plumber", img: "/assets/Civilhubs/unskilled5.jpg" },
        { name: "Painter", img: "/assets/Civilhubs/unskilled6.jpg" },
        { name: "Welder", img: "/assets/Civilhubs/unskilled7.jpg" },
        { name: "Steel Fixer", img: "/assets/Civilhubs/unskilled8.jpg" },
        { name: "Tiler", img: "/assets/Civilhubs/unskilled9.jpg" },
        { name: "Glass Installer", img: "/assets/Civilhubs/unskilled10.jpg" },
        { name: "Scaffolder", img: "/assets/Civilhubs/unskilled11.jpg" },
        { name: "Rigger", img: "/assets/Civilhubs/unskilled12.jpg" },
      ],
    },
  ];

  const words = ["Engineers", "Supervisors", "Labours & More"];
  const [index, setIndex] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640); // Adjust the breakpoint as needed

  const handleJobClick = (dummy) => {
    navigate("/hireonpage", { state: { dummy } });
  };

  // Update the screen size state on resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [words.length]);


  const settingshireonTemp = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Number of slides to show on small screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
        },
      },
    ],
  };


  // ===========================================================================


  return (
    <div>
      <NavbarComp />

      {/*======================================HeroSection===============================  */}
      {/* <HeroSection/> */}
      <section className="w-full min-h-[95vh] bg-gray-50 flex flex-col items-center justify-center relative overflow-hidden z-0">
  <style>
    {`
      @media (max-width: 640px) {
        .logo {
          display: none;
        }
      }
    `}
  </style>

  <img
    src="/assets/Civilhubs/comp.png"
    alt="Construction Background"
    className="absolute inset-0 w-full h-full object-cover z-0 blur-[1px] brightness-90"
  />

  <motion.div
    className="flex flex-col gap-2 my-4 px-4 sm:px-0 w-full max-w-4xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <div className="flex items-center z-50">
      <img
        src="/assets/Civilhubs/logo.png"
        alt="Ziro Logo"
        className="h-16 sm:h-20 mx-auto sm:-mt-16 logo"
      />
    </div>

    <motion.h1
      className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8 mt-2 z-50 flex flex-col items-center mx-auto px-4 py-2 rounded-full shadow-sm"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Find Top Freelancers Worldwide with CivilHubs
    </motion.h1>

    <form
      
      className={`relative flex items-center border rounded-full p-2 w-full sm:w-3/4 mx-auto bg-white ${error ? "border-red-500" : "border-gray-300"}`}
    >
      <div className="flex items-center relative w-full">
        <div className="absolute left-3 text-gray-500">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          placeholder="Search jobs by 'skill'"
          value={searchTerm}
          onChange={handleInputChange}
          className="outline-none p-2 pl-10 text-gray-700 w-full rounded-lg border border-gray-300"
        />
        {filteredSuggestions.length > 0 && (
          <ul className="absolute top-12 left-0 w-full bg-white border border-gray-300 shadow-lg rounded-lg max-h-48 overflow-y-auto z-0">
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

      <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-full ml-2 font-semibold">
        <Search className="text-white" />
      </button>
    </form>
  </motion.div>

  {error && (
    <div className="flex items-center text-red-500 mt-2 z-50 px-4">
      <AlertCircle className="w-5 h-5 mr-2" />
      <span>Please enter a job title, company, skill, or department</span>
    </div>
  )}
</section>
      {/* =========================================================================== */}


      {/*====================Banner===================================================  */}

      {/* <Banner /> */}
      <div className="bg-auto max-w-[1450px] mx-auto mt-2">
  <div className="flex flex-wrap justify-between">
    {banners.map((banner) => (
      <div
        key={banner.id}
        className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-10 bg-gradient-to-r from-teal-500 to-[#0177cd] shadow-xl h-auto md:h-[400px] lg:h-[250px] w-full md:w-[48%] mx-3 my-1 rounded-lg"
      >
        {/* Image Section */}
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 lg:right-0 
                w-24 sm:w-36 md:w-48 lg:w-[300px] xl:w-[350px] h-auto items-center overflow-hidden rounded-lg hidden sm:block">
          <Image
            className="w-full p-3 h-auto object-contain drop-shadow-lg"
            src={banner.imageUrl}
            alt={banner.title}
            fluid
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 h-full p-4">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug xl:ml-6">
            {banner.title}
          </h4>
          <p className="text-gray-900 mt-2 text-sm sm:text-base font-light max-w-lg xl:ml-6">
            {banner.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <Link
              to={banner.buttonLink}
              className="bg-teal-500 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-lg shadow hover:bg-teal-600 transition-all xl:ml-6"
            >
              {banner.buttonText}
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      {/* ================================================================== */}
      {/* ==========HireOntemp===================================================== */}
      {/* <HireOntemp /> */}    
     <div className="p-7 max-w-[1480px] mx-auto -mt-4"> 
  <div className="flex flex-col md:flex-row justify-between items-center">
    <h2 className="text-2xl md:text-3xl font-bold text-start w-full">
      <div className="flex w-full">
        <span className="pr-2">Hire Skilled</span>
        <span className="text-teal-500 relative inline-block text-end">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              className="block w-full"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </div>
    </h2>
  </div>

  <div className="border border-gray-300 rounded-lg p-4 mt-6 shadow-lg">
    {/* Render carousel only on small screens */}
    {isSmallScreen ? (
      <Slider {...settingshireonTemp} className="mt-4 ml-8">
        {categories.map((category) => (
          <div key={category.title} className="flex justify-center">
            <button
              onClick={() => setSelectedCategory(category)}
              className={`text-sm pb-2 ${selectedCategory.title === category.title
                ? "text-teal-500 font-semibold border-b-2 border-teal-500"
                : "text-gray-400"
                }`}
            >
              {category.title}
            </button>
          </div>
        ))}
      </Slider>
    ) : (
      <div className="flex flex-wrap justify-center space-x-4 mt-4 ml-8">
        {categories.map((category) => (
          <button
            key={category.title}
            onClick={() => setSelectedCategory(category)}
            className={`text-sm pb-2 ${selectedCategory.title === category.title
              ? "text-teal-500 font-semibold border-b-2 border-teal-500"
              : "text-gray-400"
              }`}
          >
            {category.title}
          </button>
        ))}
      </div>
    )}

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-6">
      {selectedCategory.jobs.map((job) => (
        <div key={job.name} className="text-center">
          <img
            src={job.img}
            alt={job.name}
            className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full object-cover cursor-pointer"
            onClick={() => handleJobClick(job)}
          />
          <p className="text-sm mt-2">{job.name}</p>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* =================================================================== */}

      {/* =========Explorer===================================================== */}
      {/* <Explorer /> */}
      <div className="py-2 mb-8 -mt-4">
  <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left bg-gradient-to-r p-6 md:p-8 from-teal-500 to-blue-400 shadow-lg rounded-lg w-full max-w-[1430px] mx-auto">
    
    {/* Content - Left */}
    <div className="flex flex-col items-center md:items-start md:ml-6 mr-10">
      <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
        Looking for Materials? <br /> Find Trusted Vendors Now!
      </h2>

      <Link to={'/marketplace'}>
        <button className="mt-3 px-6 py-2 text-white border-2 rounded-full font-medium transition duration-300 hover:bg-teal-500 hover:text-white">
          Explore Now
        </button>
      </Link>
    </div>

    {/* Lottie Animation - Right */}
    <div className="mt-4 md:mt-0 md:ml-10 w-60 h-40 md:w-48 md:h-48 flex-shrink-0 bg-gray-200 rounded">
      <DotLottieReact
        src="https://lottie.host/76b05522-8537-4242-96f2-61d5c758dd9e/CQ7GU4eKKh.lottie"
        loop
        autoplay
      />
    </div>
  </div>
</div>
      {/* ================================================================= */}
      {/* ====EngineerProfileSlider=========================================== */}
      <EngineerProfileSlider />
      {/* =========================== */}
      <FeaturedData />
      <LatestNews />
      <Footer />
    </div>
  )
}

export default Companyhome
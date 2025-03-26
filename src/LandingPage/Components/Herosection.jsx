import React, { useState, useEffect } from "react";
import { Search, Briefcase, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from 'framer-motion';

export const JobSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const locationSuggestionData = ["Indore", "Kolkata", "Chandigarh", "Pune"];
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [locationValue, setLocationValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) {
      setError(true);
      return;
    }
    setError(false);
    navigate("/browse", { state: { id1: searchTerm, locationn: locationValue } });
  };

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

  return (
    <div className="flex w-full sm:w-[50%] bg-transparent rounded-full items-center gap-4 mx-auto shadow-[1px_1px_4px] ">
      <form
        onSubmit={handleSearch}
        className={`relative flex items-center border rounded-full p-2 w-full bg-white ${error ? "border-red-500" : "border-gray-300"}`}
      >
        <div className="flex items-center px-3 relative w-full">
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

        <div className="flex items-center px-3 w-full ">
          <Briefcase className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Location"
            value={locationValue}
            onChange={handleLocationChange}
            className="outline-none p-2 text-gray-700 w-full"
          />
          {locationSuggestions.length > 0 && (
            <ul className="absolute top-12 lg:w-[300px] bg-white border border-gray-300 rounded-lg max-h-48 overflow-x-hidden z-10">
              {locationSuggestions.map((loc) => (
                <li
                  key={loc}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleLocationSuggestion(loc)}
                >
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          type="submit"
          className="bg-hover:bg-teal-600 text-white px-4 py-2 rounded-full ml-2 font-semibold"
        >
          <Search className="text-white" />
        </button>
      </form>

      {error && (
        <div className="flex items-center text-red-500 mt-2">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>Please enter a job title, company, skill, or department</span>
        </div>
      )}
    </div>
  );
};

// =============================================================================
const HeroSection = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

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

  return (
    <div
      className="text-center px-4 sm:px-10 bg-cover bg-center min-h-screen flex flex-col justify-start items-center pt-20"
      style={{
        backgroundImage: 'url("/assets/Civilhubs/const2.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="flex flex-col gap-5 my-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* <motion.span
          className="mx-auto px-4 py-2 rounded-full bg-teal-600 text-white font-medium text-sm sm:text-base shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          No. 1 Freelance Website
        </motion.span> */}

        <div className="flex z-30">
          <img
            src="/assets/Civilhubs/logo.png"
            alt="Ziro Logo"
            className="h-16 sm:h-20 mx-auto"
          />
        </div>

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
          className="mx-auto text-white font-medium text-sm sm:text-base w-full sm:w-3/4 "
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
        >

          {/* ==========================<JobSearchBar /> ===============================================*/}
          <div className="flex flex-col w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[70%] bg-transparent rounded-full items-center gap-8 mx-auto shadow-[1px_1px_4px]">
            <form
              className={`relative flex flex-row items-center border rounded-full p-1 w-full bg-white`}
            >
              {/* Search by Skill */}
              <div className="flex items-center px-3 relative w-full">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none p-2 text-gray-700 w-full"
                />
              </div>

              {/* Location - Hidden on small screens */}
              <div className="hidden sm:flex items-center px-3 w-1/2">
                <Briefcase className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Location"
                  className="outline-none p-2 text-gray-700 w-full" 
                />
              </div>

              {/* Search Button - Always visible */}
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-full font-semibold whitespace-nowrap"
              >
                <Search className="text-white" />
                

                
              </button>
            </form> 
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;



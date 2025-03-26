import React, { useState } from "react";
import { Search, MapPin, AlertCircle, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

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

  return (
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
            src="public/assets/Civilhubs/logo.png"
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
          onSubmit={handleSearch}
          className={`relative flex flex-col sm:flex-row items-center xl:border rounded-full p-2 w-full sm:w-3/4 mx-auto xl:bg-white ${error ? "border-red-500" : "border-gray-300"}`}
        >
          <div className="flex ml-2 items-center relative w-full mb-2 sm:mb-0">
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

          <div className="flex ml-2 items-center relative w-full mb-2 sm:mb-0">
            <div className="absolute left-3 text-gray-500">
              <Briefcase className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Location"
              value={locationValue}
              onChange={handleLocationChange}
              className="outline-none p-2 pl-10 text-gray-700 w-full rounded-lg border border-gray-300"
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

          <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-full ml-2 font-semibold mt-2 sm:mt-0">
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
  );
};

export default HeroSection;

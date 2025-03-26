import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick"; // Import the Slider component
import "slick-carousel/slick/slick.css"; // Import the CSS for slick
import "slick-carousel/slick/slick-theme.css"; // Import the theme CSS for slick
import {motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    title: "Skilled Technical Manpower",
    jobs: [
      { name: "Civil Engineer", img: "public/assets/Civilhubs/skilled1.jpg" },
      { name: "Site Engineer", img: "public/assets/Civilhubs/skilled2.jpg" },
      { name: "Project Engineer", img: "public/assets/Civilhubs/skilled3.jpg" },
      { name: "Construction Manager", img: "public/assets/Civilhubs/skilled4.jpg" },
      { name: "Surveyor", img: "public/assets/Civilhubs/skilled5.jpg" },
      { name: "Supervisor", img: "public/assets/Civilhubs/skilled6.jpg" },
      { name: "Structural Engineer", img: "public/assets/Civilhubs/skilled7.jpg" },
      { name: "Quantity Surveyor", img: "public/assets/Civilhubs/skilled8.jpg" },
      { name: "MEP Engineer", img: "public/assets/Civilhubs/skilled9.jpg" },
      { name: "Quality Control Engineer", img: "public/assets/Civilhubs/skilled10.jpg" },
      { name: "Safety Officer", img: "public/assets/Civilhubs/skilled11.jpg" },
      { name: "Draughtsman", img: "public/assets/Civilhubs/skilled12.jpg" }
    ],
  },
  {
    title: "Skilled Household & Trade Specific Manpower",
    jobs: [
      { name: "Construction Worker", img: "public/assets/Civilhubs/unskilled1.jpg" },
      { name: "Mason", img: "public/assets/Civilhubs/unskilled2.jpg" },
      { name: "Carpenter", img: "public/assets/Civilhubs/unskilled3.jpg" },
      { name: "Electrician", img: "public/assets/Civilhubs/unskilled4.jpg" },
      { name: "Plumber", img: "public/assets/Civilhubs/unskilled5.jpg" },
      { name: "Painter", img: "public/assets/Civilhubs/unskilled6.jpg" },
      { name: "Welder", img: "public/assets/Civilhubs/unskilled7.jpg" },
      { name: "Steel Fixer", img: "public/assets/Civilhubs/unskilled8.jpg" },
      { name: "Tiler", img: "public/assets/Civilhubs/unskilled9.jpg" },
      { name: "Glass Installer", img: "public/assets/Civilhubs/unskilled10.jpg" },
      { name: "Scaffolder", img: "public/assets/Civilhubs/unskilled11.jpg" },
      { name: "Rigger", img: "public/assets/Civilhubs/unskilled12.jpg" },
    ],
  },
  {
    title: "Skilled Machine Operators",
    jobs: [
      { name: "Crane Operator", img: "public/assets/Civilhubs/skilled7.jpg" },
      { name: "Excavator Operator", img: "public/assets/Civilhubs/skilled8.jpg" },
      { name: "Bulldozer Operator", img: "public/assets/Civilhubs/skilled9.jpg" },
      { name: "Forklift Operator", img: "public/assets/Civilhubs/skilled10.jpg" },
      { name: "Backhoe Operator", img: "public/assets/Civilhubs/skilled11.jpg" },
      { name: "Loader Operator", img: "public/assets/Civilhubs/skilled12.jpg" },
    ],
  },
  {
    title: "Semi Skilled Workers",
    jobs: [
      { name: "Construction Worker", img: "public/assets/Civilhubs/unskilled1.jpg" },
      { name: "Mason", img: "public/assets/Civilhubs/unskilled2.jpg" },
      { name: "Carpenter", img: "public/assets/Civilhubs/unskilled3.jpg" },
      { name: "Electrician", img: "public/assets/Civilhubs/unskilled4.jpg" },
      { name: "Plumber", img: "public/assets/Civilhubs/unskilled5.jpg" },
      { name: "Painter", img: "public/assets/Civilhubs/unskilled6.jpg" },
      { name: "Welder", img: "public/assets/Civilhubs/unskilled7.jpg" },
      { name: "Steel Fixer", img: "public/assets/Civilhubs/unskilled8.jpg" },
      { name: "Tiler", img: "public/assets/Civilhubs/unskilled9.jpg" },
      { name: "Glass Installer", img: "public/assets/Civilhubs/unskilled10.jpg" },
      { name: "Scaffolder", img: "public/assets/Civilhubs/unskilled11.jpg" },
      { name: "Rigger", img: "public/assets/Civilhubs/unskilled12.jpg" },
    ],
  },
];



const HireOnTemp = () => {
  const words = ["Engineers", "Supervisors", "Labours & More"];
      const [index, setIndex] = useState(0);
  
  const navigate = useNavigate();
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
    

  // Settings for the carousel
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

  return (
    <div className="p-7 max-w-7.5xl mx-auto -mt-4">
      




      <div className="flex justify-between items-center">
                  <h2 className="text-3xl   font-bold text-start  w-full">
                <div className="flex  w-full">
                    <span className="pr-2">Hire Skilled</span>
                    <span className="text-teal-500 relative inline-block  text-end">
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
                  className={`text-sm pb-2 ${
                    selectedCategory.title === category.title
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
          <div className="flex flex-wrap justify-center space-x-20 mt-4 ml-8">
            {categories.map((category) => (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm pb-2 ${
                  selectedCategory.title === category.title
                    ? "text-teal-500 font-semibold border-b-2 border-teal-500"
                    : "text-gray-400"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 mt-6">
          {selectedCategory.jobs.map((job) => (
            <div key={job.name} className="text-center">
              <img
                src={job.img}
                alt={job.name}
                className="w-20 h-20 mx-auto rounded-full object-cover cursor-pointer"
                onClick={() => handleJobClick(job)}
              />
              <p className="text-sm mt-2">{job.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HireOnTemp;

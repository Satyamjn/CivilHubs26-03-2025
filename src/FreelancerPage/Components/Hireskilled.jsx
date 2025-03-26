const categories = [
    {
      title: "Tools & Equipment",
      jobs: [
        { name: "Tools & Equipment", img: "/assets/Civilhubs/tool1.jpg" },
        { name: "Safety Gear & Protective", img: "/assets/Civilhubs/tool2.jpg" },
        { name: "Construction Materials", img: "/assets/Civilhubs/tool3.jpg" },
        { name: "Electrical & Wiring Supplies", img: "/assets/Civilhubs/tool4.jpg" },
        { name: "Sanitary Ware", img: "/assets/Civilhubs/tool5.jpg" },
        { name: "Interior & Finishing Materials", img: "/assets/Civilhubs/tool6.jpg" },
      ],
    },
  ];


  import React, { useEffect, useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { AnimatePresence, motion } from 'framer-motion';
  import Slider from 'react-slick'; // Assuming you're using react-slick for the slider
  
  const Hireskilled = () => {
    const words = ["Tool & Equipment", "Construction Materials", "Wiring Supplies", "Sanitary Ware & More"];
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
  
    const handleJobClick = (product) => {
      navigate("/hireskill/listing", { state: { product } });
    };
  
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 640);
      };
  
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    // Update index for animation
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 3000); // Change every 3 seconds
  
      return () => clearInterval(interval);
    }, [words.length]);
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <div className="p-7 max-w-[1480px] mx-auto -mt-12"> 
  <div className="flex flex-col md:flex-row justify-between items-center">
                  <h2 className="text-3xl   font-bold text-start  w-full">
                <div className="flex -mt-2  w-full">
                    <span className="pr-2">Hire Skilled</span>
                    <span className="text-teal-500 relative inline-block   text-end">
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
  
        <div className="border border-gray-300 rounded-lg p-4 mt-3 shadow-lg">
          {isSmallScreen ? (
            <Slider {...settings} className="mt-4 ml-8">
             
            </Slider>
          ) : (
            <div className="flex flex-wrap justify-center space-x-20 mt-4 ml-8">
              {categories.map((category) => (
                <button
                  key={category.title}
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm pb-2 text-gray-400" // Removed conditional styling
                >
                  {/* {category.title} */}
                </button>
              ))}
            </div>
          )}
  
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-3 gap-8 mt-6">
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
  
  export default Hireskilled;
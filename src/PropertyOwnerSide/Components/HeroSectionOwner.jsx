import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { AlertCircle, Briefcase, Search } from "lucide-react";


const HeroSectionOwner = () => {
    return (
        <div className="py-2 mb-8">
          <div className="flex flex-col md:flex-row items-center bg-gradient-to-r p-4 md:p-8 from-blue-500 to-teal-400 justify-between text-center md:text-left shadow-lg rounded-lg w-full max-w-[1500px] mx-auto h-[400px] md:h-[700px]">
            {/* Content - Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, x: 2 }}
              transition={{ duration: 2 }}
              className="flex flex-col"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Looking for Materials? <br /> Find Trusted Vendors Now!
              </h1>

              <div className="flex flex-col w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[70%] bg-transparent rounded-full items-center gap-8 mx-auto shadow-[1px_1px_4px] ml-5 
               mt-8">
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

              <p className="text-lg md:text-xl text-gray-100 mt-4 ml-4 md:ml-16">
                <Link to={'/marketplace'}>
                  <button className="mt-3 px-6 py-2 text-white border-2 rounded-full font-medium transition duration-300 hover:bg-[#66deff] hover:text-white">
                    Explore Now
                  </button>
                </Link>
              </p>
            </motion.div>
      
            {/* Lottie Animation - Right */}
            <div className="hidden md:block w-96 h-40 md:w-[550px] md:h-96 flex-shrink-0 rounded bg-transparent">
              <img
                src="/assets/Civilhubs/material.png"
                alt="Material"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      );
};

export default HeroSectionOwner;

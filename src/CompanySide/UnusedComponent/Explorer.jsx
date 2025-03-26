import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { AlertCircle, Briefcase, Search } from "lucide-react";


const Explorer = () => {
    return (
      <div className=" py-2 mb-8 -mt-4">
            <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left  bg-gradient-to-r p-8  from-teal-500 to-blue-400 shadow-lg rounded-lg w-full max-w-[1400px] mx-auto">
              {/* Content - Left */}
              <div className="flex flex-col items-center md:items-start md:ml-6 mr-10 ">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  Looking for Materials? <br /> Find Trusted Vendors Now!
                </h2>
    
                <Link to={'/marketplace'}>
                  <button className="ml-20 mt-3 px-6 py-2 text-white border-2 rounded-full font-medium transition duration-300 hover:bg-teal-500 hover:text-white">
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
    )
};

export default Explorer;

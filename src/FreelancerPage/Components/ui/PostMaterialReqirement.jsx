import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PostMaterialRequirement = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook 

  const handleCardClick = () => {
    navigate("/materialDetails"); // Navigate to the desired route
  };

  return (
    <div
      className="flex items-center justify-between bg-white rounded-2xl shadow-sm hover:shadow-lg transition cursor-pointer mt-8 mb-8 p-4 sm:p-6 md:p-7 lg:p-8 w-full max-w-[1430px] border mx-auto" // Adjusted width and padding
      onClick={handleCardClick} // Add onClick handler
    >
      {/* Left Section with Icon and Text */}
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-gray-100 rounded-full">
          <FaRegCalendar className="text-gray-500 text-lg" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-teal-500"> {/* Responsive font size */}
            Post Material Requirement
          </h3>
          <p className="text-xs sm:text-sm text-gray-500"> {/* Responsive font size */}
            Get best deals from best sellers
          </p>
        </div>
      </div>
  
      {/* Right Arrow Icon */}
      <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" /> {/* Responsive size */}
    </div>
  );
};

export default PostMaterialRequirement;
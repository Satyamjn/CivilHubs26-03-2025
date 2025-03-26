import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, Briefcase, Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div
      className="relative h-[674px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/Civilhubs/busineess.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
  
      {/* Animated Text right side - Adjusted for mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, x: 2 }}
        transition={{ duration: 2 }}
        className="absolute top-[15%] sm:top-1/4 left-4 sm:left-24 bg-transparent bg-opacity-80 p-4 rounded-lg shadow-lg w-[90%] sm:w-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          Grow your business with us
        </h1>
        <p className="text-lg sm:text-xl text-gray-100 mt-4 sm:ml-16">
          Unlock your potential by joining our platform today.
        </p>
  
        {/* ==========================<JobSearchBar /> ===============================================*/}
        <div className="flex flex-col w-full bg-transparent rounded-full items-center gap-8 mt-8 sm:mt-10 mx-auto shadow-[1px_1px_4px]">
          <form className={`relative flex items-center border rounded-full p-2 w-full bg-white`}>
            {/* Search by Skill */}
            <div className="flex items-center px-3 relative w-full">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none p-2 text-gray-700 w-full text-lg sm:text-base"
              />
            </div>
  
            {/* Location - Only show on larger screens */}
            <div className="hidden sm:flex items-center px-3 w-1/2">
              <Briefcase className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Location"
                className="outline-none p-2 text-gray-700 w-full"
              />
            </div>
  
            {/* Search Button - Larger on mobile */}
            <button
              type="submit"
              className="bg-teal-500 text-white px-6 py-3 sm:px-4 sm:py-2 rounded-full sm:ml-2 font-semibold"
            >
              <Search className="text-white w-6 h-6 sm:w-5 sm:h-5" />
            </button>
          </form>
        </div>
      </motion.div>
  
      {/* Info Cards rightside - Hidden on small screens */}
      <div className="absolute top-36 right-24 w-96 bg-teal-500/50 from-transparent to-teal-600 p-4 rounded-xl shadow-lg hidden sm:block">
        <div className="bg-teal-500/80 p-3 rounded-lg mb-4 text-white">
          <h3 className="text-sm font-semibold">Earnings & Payouts</h3>
          <p className="text-lg font-bold">₹ 1,20,000</p>
          <p className="text-sm">Last Payout: ₹ 20,000</p>
        </div>
        <div className="bg-blue-500/70 p-3 rounded-lg text-white">
          <h3 className="text-sm font-semibold">Delivery & Logistics</h3>
          <p className="text-lg font-bold">In Transit: 8 Orders</p>
          <p className="text-sm">Pending Deliveries: 3</p>
        </div>
      </div>
  
      {/* Order Summary rightside - Hidden on small screens */}
      <div className="absolute bottom-36 right-24 w-96 bg-gradient-to-bl p-6 rounded-lg shadow-lg flex gap-10 bg-teal-500/50 from-transparent to-teal-600 hidden sm:flex">
        <div className="text-center">
          <p className="text-white text-xl font-bold">120</p>
          <p className="text-xs text-white">Total Orders</p>
        </div>
        <div className="text-center">
          <p className="text-white text-xl font-bold">15</p>
          <p className="text-xs text-white">Pending Orders</p>
        </div>
        <div className="text-center">
          <p className="text-white text-xl font-bold">105</p>
          <p className="text-xs text-white">Completed Orders</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
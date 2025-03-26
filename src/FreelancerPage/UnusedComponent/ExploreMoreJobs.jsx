import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';

const ExploreMoreJobs = () => {
  return (
    <div className=" py-2 mb-2">
    <div className="  flex flex-col md:flex-row items-center justify-between text-center md:text-left p-8 bg-gradient-to-r from-teal-500 to-blue-400 shadow-lg rounded-lg w-full max-w-[1200px] mx-auto">

      {/* Lottie Animation - Left */}
      <div className="ml-10 w-60 h-40 md:w-48 md:h-48 flex-shrink-0 bg-gray-200 rounded">
        <DotLottieReact
        // src='https://lottie.host/76b05522-8537-4242-96f2-61d5c758dd9e/CQ7GU4eKKh.lottie'
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
  );
};

export default ExploreMoreJobs;

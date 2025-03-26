import React from "react";
import { Play } from "lucide-react";
import { useState } from "react";
// Stepsection component with dynamic data
const Stepsection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const stepsData = [
    {
      id: 1,
      title: "Complete Profile",
      description: "Fill out your complete profile to get personalized job recommendations.",
      bgColor: "bg-green-100",
      textColor: "text-[#014fcd]",
    },
    {
      id: 2,
      title: "Search Vacancies",
      description: "Explore numerous vacancies and filter them according to your preferences.",
      bgColor: "bg-green-100",
      textColor: "text-[#0177cd]",
    },
    {
      id: 3,
      title: "Apply Jobs",
      description: "Submit your applications with a single click and track your progress.",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
  ];

  return (
    <>
      {/* How It Works Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center px-6 sm:px-10 md:px-16 py-10 sm:py-16 lg:py-20 bg-white gap-10 lg:gap-0">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-start lg:-mt-32">
            How it <span className="text-teal-500">Works</span>
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-2xl font-bold leading-snug text-gray-800 mt-2">
            Start finding a job you love with us easily
          </h2>
  
          {/* Dynamic Steps Section */}
          <div className="mt-8 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 w-full sm:w-[90%] md:w-[80%] lg:w-[620px] px-4 sm:px-8 mx-auto">
            {stepsData.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-xl w-full cursor-pointer shadow-lg transition-transform duration-300 hover:shadow-md hover:shadow-teal-600"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 ${step.bgColor} ${step.textColor} font-bold rounded-lg flex items-center justify-center text-lg sm:text-xl`}
                >
                  {step.id}
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base text-center">{step.title}</h3>
                  <p className="text-gray-500 text-sm text-center mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Video Section */}
        <div className="relative w-full mt-10 sm:mt-11 mb-24 sm:w-[300px] md:w-[500px] h-[160px] sm:h-[200px] md:h-[240px] bg-[url(https://imgs.search.brave.com/ozjfzCisCjr4PEuMaWxLS1CDI_h9Uc_1MGkh0vNGyrU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk5/MTQ4NDIwL3Bob3Rv/L2ZhY2lsaXR5LW1h/bmFnZW1lbnQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXc2/STYwUnZjWVBOZjYt/UHM3UUJDV0YxbHlx/YlNFaHptamZhemdn/WV9LdmM9)] rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:shadow-md hover:shadow-teal-600">
          {isPlaying ? (
            <video
              src="/assets/Civilhubs/dummy.mp4" // Update with actual video path
              controls
              autoPlay
              className="w-full h-full rounded-2xl object-cover"
            />
          ) : (
            <button
              aria-label="Play Video"
              onClick={() => setIsPlaying(true)}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <Play className="text-gray-800" />
            </button>
          )}
        </div>
      </section>
    </>
  );
};


export default Stepsection;

import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const Banner = () => {
  const banners = [
    {
      id: 1,
      title: "Instant Access to Qualified Talent",
      description: "Review profiles, compare portfolios, and hire the best.",
      buttonText: "Start Hiring",
      buttonLink: "/postjob", 
      imageUrl: "/assets/Civilhubs/image1.png",
    },
    {
      id: 2,
      title: "Post a Job Today!",
      description: "Connect with expert engineers, designers, and consultants.",
      buttonText: "Post a Job",
      buttonLink: "/postjob",
      imageUrl: "/assets/Civilhubs/image3.png",
    },
  ];

  return (
    <div className="bg-auto max-w-8xl mx-auto mt-2 ">
      <div className="flex flex-wrap justify-between">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-10 bg-gradient-to-r from-teal-500 to-[#0177cd] shadow-xl h-[400px] md:h-[400px] lg:h-[250px] w-full md:w-[48%] mx-3 my-1 rounded-lg"
          >
            {/* Image Section */}
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0 lg:right-0 
                w-24 sm:w-36 md:w-48 lg:w-[300px] xl:w-[350px] h-auto items-center overflow-hidden rounded-lg hidden sm:block">
              <Image
                className="w-full p-3 h-auto object-contain drop-shadow-lg"
                src={banner.imageUrl}
                alt={banner.title}
                fluid
              />
            </div>
  
            {/* Content Section */}
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 h-full">
              <h4 className="text-2xl sm:text-3xl md:text-3xl font-semibold leading-snug xl:ml-6">
                {banner.title}
              </h4>
              <p className="text-gray-900 mt-2 text-sm sm:text-base font-light max-w-lg xl:ml-6">
                {banner.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <Link
                  to={banner.buttonLink} //
                  className="bg-teal-500 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-lg shadow hover:bg-teal-600 transition-all xl:ml-6"
                >
                  {banner.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

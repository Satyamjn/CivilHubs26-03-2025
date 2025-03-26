import React, { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const categoriesData = [
  { name: "Structural engineering", image: "src/assets/Civilhubs/category1.png" },
  { name: "Geotechnical engineering", image: "src/assets/Civilhubs/category2.png" },
  { name: "Environmental engineering", image: "src/assets/Civilhubs/category3.png" },
  { name: "Transportation engineering", image: "src/assets/Civilhubs/category4.png" },
  { name: "Construction management", image: "src/assets/Civilhubs/category5.png" },
  { name: "Coastal engineering", image: "src/assets/Civilhubs/category6.png" },
  { name: "Earthquake engineering", image: "src/assets/Civilhubs/category7.png" },
  { name: "Surveying", image: "src/assets/Civilhubs/category8.png" },
  { name: "Consulting engineer", image: "src/assets/Civilhubs/category9.png" },
  { name: "ChennDesign Engineerai", image: "src/assets/Civilhubs/category10.png" },
];

const JobSearchCarousel = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 200;
        if (
          sliderRef.current.scrollLeft >=
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        ) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (category, backgroundImage) => {
    navigate('/category', { state: { category, backgroundImage } }); // Pass backgroundImage to CategoriesPage
  };

  return (
    <div className="bg-auto py-6  -mt-20">
      <div className="text-center p-6">
      <h2 className="text-3xl ml-8 font-bold text-start mb-">
          Popular <span className="text-teal-500 ">Categories</span>
        </h2>

        <div className="relative flex items-center justify-center">
          <button
            className="absolute left-0 z-10 bg-white shadow-md p-2 rounded-full"
            onClick={() => (sliderRef.current.scrollLeft -= 200)}
          >
            <ArrowLeft size={20} className="hover:text-[#3864c2]" />
          </button>
          <div
            ref={sliderRef}
            className="flex space-x-4 overflow-hidden scroll-smooth w-full px-12 py-8"
          >
            {categoriesData.map((city, index) => (
  <div
    key={index}
    className="min-w-[200px] shadow-lg rounded-lg bg-white transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-teal-500 hover:scale-105 hover:cursor-pointer border-r-3 hover:transition-all hover:duration-500 hover:ease-in-out box-border"
    onClick={() => handleCardClick(city.name, city.image)} // Pass the background image
  >
    <img
      src={city.image}
      alt={city.name}
      className="w-full h-24 object-cover rounded-t-lg"
    />
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold">{city.name}</h3>
    </div>
  </div>
))}
          </div>
          <button
            className="absolute right-0 z-10 bg-white shadow-md p-2 rounded-full"
            onClick={() => (sliderRef.current.scrollLeft += 200)}
          >
            <ArrowRight size={20} className="hover:text-[#3864c2]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSearchCarousel;
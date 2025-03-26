import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Star, MessageCircle, MapPin, Map } from "lucide-react";
import Footer from "../shared/Footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const BestSeller = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const bestSellersData = [
    {
      id: 1,
      name: "Harsh Interior Materials",
      image: "/assets/Civilhubs/sell1.jpg",
      rating: 4,
      totalRatings: 256,
      location: "Rajwada, Indore, MP",
      distance: "25 km Away",
    },
    {
      id: 2,
      name: "Elegant Wood Works",
      image: "/assets/Civilhubs/sell2.jpg",
      rating: 5,
      totalRatings: 150,
      location: "MG Road, Bhopal, MP",
      distance: "30 km Away",
    },
    {
      id: 3,
      name: "Classic Carpentry",
      image: "/assets/Civilhubs/sell3.avif",
      rating: 3,
      totalRatings: 100,
      location: "Palasia, Indore, MP",
      distance: "15 km Away",
    },
    // Add more items as needed
  ];

  const handleCardClick = (seller) => {
    navigate("/sellerDetails", { state: seller }); // Navigate and pass seller data
  };

  return (
    <>
      <h2 className="text-3xl ml-4 sm:ml-16 -mt-4 font-bold text-start">
        Best <span className="text-teal-500">Sellers</span>
      </h2>
      <div className="max-w-[1800px] mx-auto px-4 sm:px-12 relative">
        <Slider {...settings}>
          {bestSellersData.map(({ id, name, image, rating, totalRatings, location, distance }) => (
            <div key={id} className="px-2 sm:px-3 hover:scale-105 transition-all duration-500 mt-5 mb-5 w-full">
              <div
                className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-6 bg-white p-4 sm:p-6 rounded-lg shadow-md border-lg transition-shadow duration-300 hover:shadow-teal-500 cursor-pointer w-full"
                onClick={() => handleCardClick({ id, name, image, rating, totalRatings, location, distance })} // Handle click
              >
                <img src={image} alt={name} className="w-full sm:w-28 h-40 sm:h-52 rounded-lg object-cover" />
                <div className="flex-1 mt-4 sm:mt-0">
                  <h2 className="text-lg sm:text-xl font-semibold">{name}</h2>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-base text-gray-500">{rating} </span>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300 fill-gray-300"}`}
                      />
                    ))}
                    <span className="text-base text-gray-500">({totalRatings} Ratings)</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-base mt-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    {location}
                  </div>
                  <div className="flex items-center text-gray-600 text-base mt-1">
                    <Map className="w-5 h-5 mr-2" />
                    {distance}
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between mt-4">
                    <button className="bg-teal-500 text-white text-md px-4 py-2 rounded-lg mb-2 sm:mb-0 sm:mr-3">Get Quote</button>
                    <button className="bg-gray-200 text-gray-700 text-lg px-5 py-3 rounded-lg w-full sm:w-2/6 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Footer />
    </>
  );
};

export default BestSeller;
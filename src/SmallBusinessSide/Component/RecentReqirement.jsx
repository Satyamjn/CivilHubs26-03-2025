import React, { useEffect, useState } from 'react';
import Slider from 'react-slick'; // Assuming you're using react-slick for the slider
import Modal1 from './Model1'; // Import the Modal1 component

const materialData = [
    {
        id: "520235",
        date: "02/12/25",
        details:
            "Cement – 120 Bags, Sariya (Steel Rods) – 1 Ton, Dr. Fixit Waterproofing Solution – 2 Litres, Bricks – 5,000 Pieces, Sand – 10 Tons, Crushed Stone (Aggregate) –...",
        quotes: 15,
        requirements: [
            { name: "Cement", quantity: "120 Bags" },
            { name: "Sariya (Steel Rods)", quantity: "1 Ton" },
            { name: "Dr. Fixit Waterproofing Solution", quantity: "2 Litres" },
            { name: "Bricks", quantity: "5,000 Pieces" },
            { name: "Sand", quantity: "10 Tons" },
            { name: "Crushed Stone (Aggregate)", quantity: "8 Tons" },
        ],
    },
    {
        id: "520236",
        date: "02/12/25",
        details:
            "Cement – 150 Bags, Sariya (Steel Rods) – 2 Tons, Dr. Fixit Waterproofing Solution – 3 Litres, Bricks – 4,500 Pieces, Sand – 12 Tons, Crushed Stone (Aggregate) –...",
        quotes: 12,
        requirements: [
            { name: "Cement", quantity: "150 Bags" },
            { name: "Sariya (Steel Rods)", quantity: "2 Tons" },
            { name: "Dr. Fixit Waterproofing Solution", quantity: "3 Litres" },
            { name: "Bricks", quantity: "4,500 Pieces" },
            { name: "Sand", quantity: "12 Tons" },
            { name: "Crushed Stone (Aggregate)", quantity: "9 Tons" },
        ],
    },
    // Add more items as needed...
    {
        id: "520237",
        date: "03/12/25",
        details:
            "Cement – 100 Bags, Sariya (Steel Rods) – 1.5 Tons, Dr. Fixit Waterproofing Solution – 1 Litres, Bricks – 5,200 Pieces, Sand – 11 Tons, Crushed Stone (Aggregate) –...",
        quotes: 18,
        requirements: [
            { name: "Cement", quantity: "100 Bags" },
            { name: "Sariya (Steel Rods)", quantity: "1.5 Tons" },
            { name: "Dr. Fixit Waterproofing Solution", quantity: "1 Litres" },
            { name: "Bricks", quantity: "5,200 Pieces" },
            { name: "Sand", quantity: "11 Tons" },
            { name: "Crushed Stone (Aggregate)", quantity: "7 Tons" },
        ],
    },
    {
        id: "520238",
        date: "04/12/25",
        details:
            "Cement – 130 Bags, Sariya (Steel Rods) – 1.2 Tons, Dr. Fixit Waterproofing Solution – 2.5 Litres, Bricks – 5,300 Pieces, Sand – 9 Tons, Crushed Stone (Aggregate) –...",
        quotes: 14,
        requirements: [
            { name: "Cement", quantity: "130 Bags" },
            { name: "Sariya (Steel Rods)", quantity: "1.2 Tons" },
            { name: "Dr. Fixit Waterproofing Solution", quantity: "2.5 Litres" },
            { name: "Bricks", quantity: "5,300 Pieces" },
            { name: "Sand", quantity: "9 Tons" },
            { name: "Crushed Stone (Aggregate)", quantity: "8 Tons" },
        ],
    },
];

const RecentRequirements = () => {
  const itemsPerPage = 3;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequirement, setSelectedRequirement] = useState(null);

   // Responsive slider settings
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
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


  useEffect(() => {
    if (isModalOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow
return () => {
        document.body.style.overflow = 'unset';
    };
}, [isModalOpen]);

const handleCardClick = (req) => {
    setSelectedRequirement(req);
    setIsModalOpen(true);
};

const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRequirement(null);
};

return (
  <div className="py-10 bg-auto -mt-12  w-full">
    {/* Header */}
    <div className="p-7 max-w-[1480px] mx-auto -mt-8">
      <h2 className="text-2xl sm:text-3xl ml-4 sm:ml-1 font-bold text-start mb-1">
        Recent <span className="text-teal-500">Requirements</span>
      </h2>
    </div>

    {/* Slider Container */}
    <div className="p-5 max-w-[1490px] mx-auto ">
      <div className="max-w-full -mt-16">
        <Slider {...settings}>
          {materialData.map((req, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div
                className="border p-4 sm:p-5 px-2 sm:px-3 hover:scale-105 transition-all duration-500 mt-5 mb-5 w-full rounded-2xl cursor-pointer"
                onClick={() => handleCardClick(req)}
              >
                <p className="text-xs sm:text-sm text-gray-600">
                  {req.id} | Posted on {req.date}
                </p>
                <p className="text-xs sm:text-sm text-gray-700 mt-1">{req.details}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>

    {/* Modal */}
    <Modal1
      item={selectedRequirement}
      closeModal={handleCloseModal}
    />
  </div>
);
};

export default RecentRequirements;
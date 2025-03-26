import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import Modal from "../ui/Model";
import Footer from "../shared/Footer";

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

const MaterialDetails = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    // Open Modal with selected item
    const openModal = (item) => {
        setSelectedItem(item);
        setIsOpen(true);
    };

    // Close Modal
    const closeModal = () => {
        setIsOpen(false);
        setSelectedItem(null);
    };

    return (
<>  {/* Navbar */}
<Navbar />

<div className="p-5">
          
            
            <h2 className="text-2xl font-bold mb-4">My Requirements</h2>

            {/* Material Cards */}
            <div className="grid grid-cols-4 gap-4">
                {materialData.length > 0 ? (
                    materialData.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(item)}
                            className="border rounded-2xl p-4 shadow-md bg-white cursor-pointer hover:shadow-lg transition"
                        >
                            <p className="text-sm text-gray-500 mb-2">
                                #{item.id} | Posted on {item.date}
                            </p>
                            <p className="text-sm text-gray-700 mb-3 truncate">{item.details}</p>
                            <p className="font-semibold text-lg">Total Quotes: {item.quotes}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-gray-500">No data available</p>
                )}
            </div>

            {/* Modal Section */}
            {isOpen && selectedItem && (
                <Modal item={selectedItem} closeModal={closeModal} />
            )}
        </div>
        <Footer/>
        </>
    );
};

export default MaterialDetails;

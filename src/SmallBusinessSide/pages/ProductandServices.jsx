import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { useState, useEffect } from "react";

// import cementImg from "@/assets/Civilhubs/cement1.jpg";
import cementImg from "/assets/Civilhubs/cement1.jpg";

import NavbarBusiness from "../Component/NavbarBusiness";

// Separate products array
const productsData = [
    { name: "Cement 25kg bag", img: cementImg, price: 350, brand: "Brand A", size: "25kg" },
    { name: "Cement 25kg bag", img: cementImg, price: 300, brand: "Brand B", size: "25kg" },
    { name: "Cement 25kg bag", img: cementImg, price: 400, brand: "Brand A", size: "25kg" },
    { name: "Cement 25kg bag", img: cementImg, price: 250, brand: "Brand C", size: "25kg" },
    { name: "Cement 25kg bag", img: cementImg, price: 350, brand: "Brand B", size: "25kg" },
    { name: "Cement 25kg bag", img: cementImg, price: 450, brand: "Brand C", size: "25kg" },
];

// Sample services data
const servicesData = [
    { name: "Concrete Delivery", img: cementImg, price: 500, brand: "Service A" },
    { name: "Construction Consultation", img: cementImg, price: 700, brand: "Service B" },
    { name: "Site Inspection", img: cementImg, price: 300, brand: "Service C" },
];

const ProductandServices = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Initialize useNavigate

    const [filters, setFilters] = useState({
        keywords: ["Spring", "Smart", "Modern"],
        size: [],
        brand: [],
    });

    const [sortedItems, setSortedItems] = useState([...productsData]);
    const [isSorted, setIsSorted] = useState(false); // State to manage sorting
    const [view, setView] = useState("products"); // State to manage view (products or services)

    // Extract unique sizes and brands from products
    useEffect(() => {
        const uniqueSizes = [...new Set(productsData.map(product => product.size))]; 
        const uniqueBrands = [...new Set(productsData.map(product => product.brand))];

        setFilters(prevFilters => ({
            ...prevFilters,
            size: uniqueSizes,
            brand: uniqueBrands,
        }));
    }, []);

    // Function to sort items by price
    const sortItemsByPrice = (sort) => {
        const dataToSort = view === "products" ? productsData : servicesData;
        const sorted = sort ? [...dataToSort].sort((a, b) => a.price - b.price) : [...dataToSort];
        setSortedItems(sorted);
    };

    // Handle checkbox change
    const handleSortChange = (event) => {
        setIsSorted(event.target.checked);
        sortItemsByPrice(event.target.checked);
    };

    // Function to handle item card click
    const handleItemClick = (item) => {
        navigate('/productandservicesDetails', { state: { item } }); // Navigate to details with item data
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on load
        sortItemsByPrice(isSorted); // Sort items when view changes
    }, [view, isSorted]);

    return (
        <>
            <NavbarBusiness />
            <div className="flex flex-col md:flex-row gap-3 p-6">
                {/* Sidebar Filters */}
                <div className="p-4 border rounded-lg bg-white w-full md:w-1/4">
                    <h3 className="font-semibold mb-2">Keywords</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {filters.keywords.map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-200 rounded-md">
                                {tag} ✕
                            </span>
                        ))}
                    </div>
                    <h3 className="font-semibold mb-2">Size</h3>
                    {filters.size.map((label, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input type="checkbox" className="mr-2" checked readOnly />
                            <span>{label}</span>
                        </div>
                    ))}
                    {/* New Brand Filter */}
                    <h3 className="font-semibold mt-4 mb-2">Brand</h3>
                    {filters.brand.map((label, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input type="checkbox" className="mr-2" checked readOnly />
                            <span>{label}</span>
                        </div>
                    ))}
                    {/* Sort by Price */}
                    <h3 className="font-semibold mt-4 mb-2">Sort By Price</h3>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={isSorted}
                            onChange={handleSortChange}
                        />
                        <span>Low to High</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full md:w-3/4">
                    {/* View Toggle Buttons*/}
                    <div className="mb-8 flex space-x-4 md:space-x-16">
                        <button
                            onClick={() => setView("products")}
                            className={`text-xl ${view === "products" ? "font-bold underline text-teal-500" : ""}`}
                        >
                            Products
                        </button>
                        <button
                            onClick={() => setView("services")}
                            className={`text-xl ${view === "services" ? "font-bold underline text-teal-500" : ""}`}
                        >
                            Services
                        </button>
                    </div>

                    {/* Item Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Map through the sorted items array to display more cards */}
                        {sortedItems.map((item, index) => (
                            <div
                                key={index}
                                className="border rounded-lg p-4 bg-white cursor-pointer"
                                onClick={() => handleItemClick(item)} // Add onClick event
                            >
                                <div className="flex items-center justify-center bg-gray-500">
                                    <img src={item.img} alt={item.name} className="object-cover h-full w-full" />
                                </div>
                                <p className="mt-2 font-bold">{item.name}</p>
                                <p className="font-semibold">₹{item.price}/bag</p>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductandServices;
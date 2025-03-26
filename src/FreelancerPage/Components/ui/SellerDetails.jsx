import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import cementImg from "/assets/Civilhubs/cement1.jpg";
import Footer from "../shared/Footer";



// Function to render stars dynamically
const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
        <span key={i} className={i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}>
            ★
        </span>
    ));
};

const SellerDetails = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const { state: seller } = useLocation(); // Get seller data passed from BestSeller
    const navigate = useNavigate();

    // Mocked Reviews and Best Sellers for SellerDetails
    const reviews = [
        {
            id: 1,
            name: "Rahul Yadav",
            rating: 4.5,
            comment:
                "Excellent service and top-notch materials. Highly recommended for home decor needs!",
        },
        {
            id: 2,
            name: "Priya Sharma",
            rating: 4.0,
            comment:
                "The products were of high quality, and delivery was quick. I’ll definitely order again.",
        },
    ];

    const bestSellers = [
        {
            id: 1,
            name: "Wooden Plywood",
            price: "₹1200/sheet",
            img: "/assets/Civilhubs/sell1.jpg",
        },
        {
            id: 2,
            name: "Decorative Laminates",
            price: "₹800/sheet",
            img: "/assets/Civilhubs/sell2.jpg",
        },
        {
            id: 2,
            name: "Decorative Laminates",
            price: "₹800/sheet",
            img: "/assets/Civilhubs/sell2.jpg",
        },
        {
            id: 2,
            name: "Decorative Laminates",
            price: "₹800/sheet",
            img: "/assets/Civilhubs/sell2.jpg",
        },
        {
            id: 2,
            name: "Decorative Laminates",
            price: "₹800/sheet",
            img: "/assets/Civilhubs/sell2.jpg",
        },
        {
            id: 2,
            name: "Decorative Laminates",
            price: "₹800/sheet",
            img: "/assets/Civilhubs/sell2.jpg",
        },
        {
            id: 2,
            name: "Decorative Laminates",
            price: "₹800/sheet",
            img: "/assets/Civilhubs/sell2.jpg",
        },
    ];


    const productsData = [
        { name: "Cement 25kg bag", img: cementImg, price: 350, brand: "Brand A", size: "25kg" },
        { name: "Cement 25kg bag", img: cementImg, price: 300, brand: "Brand B", size: "25kg" },
        { name: "Cement 25kg bag", img: cementImg, price: 400, brand: "Brand A", size: "25kg" },
        { name: "Cement 25kg bag", img: cementImg, price: 250, brand: "Brand C", size: "25kg" },
        { name: "Cement 25kg bag", img: cementImg, price: 350, brand: "Brand B", size: "25kg" },
        { name: "Cement 25kg bag", img: cementImg, price: 450, brand: "Brand C", size: "25kg" },
    ];
    const [sortedProducts, setSortedProducts] = useState([...productsData]);
    function handleProductClick() {
        navigate('/productdetails')
    }
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on load
    }, []);
    return (

        <>
            <Navbar />
            <div className="p-4  mt-5 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content - Left Side */}
                <div className="lg:col-span-2  ">
                    {/* Seller Info */}
                    <div className="bg-white shadow-md p-8 sm:p-12 lg:p-16 rounded-lg flex items-start gap-8 w-full max-w-5xl mx-auto border">
                    <img
    src={selectedProduct ? selectedProduct.img : seller.image}
    alt={selectedProduct ? selectedProduct.name : seller.name}
    className="w-40 h-40 sm:w-48 sm:h-48 lg:w-80 lg:h-60 rounded-lg object-cover"
/>

                        <div className="flex-1 space-y-4 space-x-4">
                        <h2 className="text-2xl sm:text-3xl font-semibold">
    {selectedProduct ? selectedProduct.name : seller.name}
</h2>


                            <div className="flex items-center gap-2">
                                {renderStars(seller.rating)}
                                <span className="text-lg text-gray-600">
                                    ({seller.totalRatings} Ratings)
                                </span>
                            </div>
                            <p className="text-lg text-gray-700">{seller.location}</p>
                            <p className="text-md text-gray-500">{seller.distance}</p>
                            <div className="flex gap-4 mt-6">
                                <button className="bg-teal-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-teal-600 transition duration-300">
                                    Get Quote
                                </button>
                                <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg text-lg hover:bg-gray-300 transition duration-300">
                                    Message
                                </button>
                            </div>
                        </div>
                    </div>

                    <p className="text-lg font-bold mt-8">Products</p>
                    <div className="grid grid-cols-3 gap-4 mt-5">



                        {/* Map through the sorted products array to display more cards */}
                        {sortedProducts.map((prod, index) => (
                            <div
                                key={index}
                                className="border rounded-lg p-4 bg-white cursor-pointer"
                                onClick={() => handleProductClick(prod)} // Add onClick event
                            >
                                <div className="flex items-center justify-center bg-gray-500"> {/* Background applied here */}
                                    <img src={prod.img} alt={prod.name} className="object-cover h-full w-full" />
                                </div>
                                <p className="mt-2 font-bold">{prod.name}</p>
                                <p className="font-semibold">₹{prod.price}/bag</p>
                            </div>
                        ))}
                    </div>


                    {/* Rating Section */}
                    <div className="bg-white shadow-md border p-8 rounded-lg text-center mt-4">
                        <h3 className="text-xl font-semibold">Rating & Review</h3>
                        <h3 className="text-sm font-normal">Give Rating to Harsh Interior Materials</h3>
                        <div className="flex justify-center gap-1 mt-2">{renderStars(seller.rating)}</div>
                    </div>
                    {/* Product Reviews */}
                    <div className=" border max-w-4xl h-[260px] mt-4 border-gray-300       bg-white shadow-md   lg:p-8 rounded-lg mb-8 ">
                        <h3 className="text-lg font-semibold">Product Reviews</h3>
                        <div className=" flex items-center gap-4">
                            <div className="relative w-12 h-12">
                                <svg className="w-12 h-12" viewBox="0 0 36 36">
                                    <circle cx="18" cy="18" r="16" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="16"
                                        fill="none"
                                        stroke="#FFA500"
                                        strokeWidth="3"
                                        strokeDasharray="100"
                                        strokeDashoffset="25"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-black">
                                    4.5
                                </span>
                            </div>
                            <div className="text-gray-600">from 1,25k reviews</div>
                        </div>
                        <div className=" space-y-1">
                            {[{ star: 5, count: 2823 }, { star: 4, count: 38 }, { star: 3, count: 4 }, { star: 2, count: 0 }, { star: 1, count: 0 }].map((rating) => (
                                <div key={rating.star} className="flex items-center gap-1">
                                    <span className="text-yellow-500">{"⭐".repeat(rating.star)}</span>
                                    <div className="bg-gray-300 w-full h-2 rounded overflow-hidden">
                                        <div className="bg-black h-full" style={{ width: `${(rating.count / 2823) * 100}%` }}></div>
                                    </div>
                                    <span className="text-black">{rating.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>



                    {/* Reviews */}
                    <div className="mt-4 space-y-2 ">
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-white shadow-md p-4 rounded-lg border">
                                <div className="flex items-center gap-2">
                                    <img
                                        src="https://via.placeholder.com/40"
                                        alt="User"
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{review.name}</h4>
                                        <div className="text-yellow-500">{renderStars(review.rating)}</div>
                                    </div>
                                </div>
                                <p className="mt-2 text-gray-700">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side Content */}
                <div className="space-y-16">
                    {/* Best Sellers */}
                    <div className="bg-white shadow-md border p-8 rounded-lg">
                        <h3 className="text-lg font-semibold">Best Sellers</h3>
                        <div className="space-y-4 ">
                            {bestSellers.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex items-center gap-4 border-b pb-2 shadow-lg p-2 border cursor-pointer"
                                    onClick={() => setSelectedProduct(product)} // Update selected product
                                >
                                    <img src={product.img} alt={product.name} className="w-16 h-16 rounded-lg" />
                                    <div>
                                        <h4 className="font-medium">{product.name}</h4>
                                        <p className="text-teal-500">{product.price}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Assistance Section */}
                    <div className="bg-white shadow-md p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Need Assistance?</h3>
                        <p className="text-gray-600">
                            Contact our customer support for any inquiries or help.
                        </p>
                        <button className="bg-teal-500 text-white px-4 py-2 rounded-lg mt-2">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default SellerDetails;

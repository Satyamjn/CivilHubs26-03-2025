import React, { useEffect } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const ProductDetails = () => {

  const reviews = [
    {
      name: "Darrell Steward",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
      review: "This is an amazing product I have.",
      date: "July 2, 2020 03:29 PM",
      likes: 128,
      dislikes: 0,
    },
    {
      name: "Darlene Robertson",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      review: "This is an amazing product I have.",
      date: "July 2, 2020 1:04 PM",
      likes: 82,
      dislikes: 0,
    },
    {
      name: "Kathryn Murphy",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      review: "This is an amazing product I have.",
      date: "June 26, 2020 10:09 PM",
      likes: 9,
      dislikes: 0,
    },
    {
      name: "Ronald Richards",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
      review: "This is an amazing product I have.",
      date: "July 7, 2020 10:14 AM",
      likes: 124,
      dislikes: 0,
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on load
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white text-black p-1">
        <div className="bg-white text-black p-16">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Product Image */}
            <div className="md:w-2/6 h-[550px] flex justify-center">
              <img
                src="assets/Civilhubs/cement1.jpg"
                alt="Cement Bag"
                className=" h-auto rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className=" flex flex-col justify-between p-6 h-[450px] -mt-36">
              <h2 className="text-xl font-semibold text-start">Cement 25kg Bag</h2>
              <p className="text-lg font-bold text-start ">₹ 350 / bag</p>

              <p className="mt-2 text-start">
                <h2 className="text-xl font-semibold text-start">Description</h2>
                This high-quality cement is perfect for all construction needs. It offers superior strength, durability, and reliability.
              </p>

              {/* Vendor Info */}
              <div className="mt-6 p-4 bg-gray-100 rounded">
                <p className="text-blue-600">Vendor: Harsh Interior Designer</p>
                <p className="text-gray-600">Location: Indore, MP</p>
              </div>



              {/* Product Reviews */}
              <div className="p-4 border max-w-4xl h-[400px] mt-4 border-gray-300 rounded ">
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




              <div className="mt-auto">
                <button className="bg-teal-500 text-white px-4 mt-4 py-2 rounded w-full">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>



        {/* Review Section */}

        <div className="flex p-8 gap-5 ml-20">
          {/* Left Panel - Filters */}
          <div className=" border border-gray-300 p-8">
            <h3 className="text-lg font-semibold mb-2">Reviews Filter</h3>
            <div className="mb-4">
              <h4 className="font-medium">Rating</h4>
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-orange-500" />
                  <span className="text-yellow-500">{"⭐".repeat(star)}</span>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-medium">Review Topics</h4>
              {["Product Quality", "Seller Services", "Product Price", "Shipment", "Match with Description"].map((topic) => (
                <div key={topic} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-orange-500" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Reviews List */}
          <div className="w-[70%] border p-8">
            <h3 className="text-lg font-semibold ">Review Lists</h3>
            {reviews.map((review, index) => (
              <div key={index} className="border-b border-gray-300 py-4 flex justify-between items-center">
                <div className="flex gap-4">
                  <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="text-yellow-500">{"⭐".repeat(review.rating)}</div>
                    <p className="text-gray-700">{review.review}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                    <p className="font-medium">{review.name}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="border px-3 py-1 rounded flex items-center gap-1">
                    👍 {review.likes}
                  </button>
                  <button className="border px-3 py-1 rounded">👎 {review.dislikes}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductDetails;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import './testimonial.css';
// Quote Icon Components
const QuoteIcon = () => (
  <svg className="relative"
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="50"
    viewBox="0 0 64 46"
    fill="none"
  >
    <path
      d="M50.6293 17.2257C50.5004 15.8322 50.599 12.0441 54.2279 6.77654C54.5024 6.37904 54.4526 5.84295 54.1117 5.50214C52.6322 4.02264 51.7162 3.08904 51.0737 2.43575C50.2289 1.57434 49.8432 1.18184 49.2787 0.670045C48.9018 0.331244 48.3315 0.325345 47.9506 0.657445C41.6254 6.16134 34.6 17.5343 35.6166 31.4679C36.2123 39.6495 42.1801 45.588 49.8061 45.588C57.6322 45.588 63.9994 39.2218 63.9994 31.3956C63.9994 23.8458 58.0737 17.6544 50.6293 17.2257ZM49.8061 43.588C43.2572 43.588 38.1293 38.4298 37.6108 31.3234C36.4672 15.6525 45.7826 5.47284 48.5971 2.77754C48.8715 3.04805 49.185 3.36634 49.6469 3.83704C50.2035 4.40345 50.9653 5.17884 52.1176 6.33514C47.7123 13.1222 48.5434 17.9581 48.9076 18.6515C49.0805 18.9806 49.435 19.2023 49.8061 19.2023C56.5297 19.2023 61.9994 24.672 61.9994 31.3956C61.9994 38.1183 56.5297 43.588 49.8061 43.588Z"
      fill="#2E55FA"
    />
  </svg>
);

const QuoteIcon2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="50"
    viewBox="0 0 64 46"
    fill="none"
  >
    <path
      d="M50.6293 17.2257C50.5004 15.8322 50.599 12.0441 54.2279 6.77654C54.5024 6.37904 54.4526 5.84295 54.1117 5.50214C52.6322 4.02264 51.7162 3.08904 51.0737 2.43575C50.2289 1.57434 49.8432 1.18184 49.2787 0.670045C48.9018 0.331244 48.3315 0.325345 47.9506 0.657445C41.6254 6.16134 34.6 17.5343 35.6166 31.4679C36.2123 39.6495 42.1801 45.588 49.8061 45.588C57.6322 45.588 63.9994 39.2218 63.9994 31.3956C63.9994 23.8458 58.0737 17.6544 50.6293 17.2257ZM49.8061 43.588C43.2572 43.588 38.1293 38.4298 37.6108 31.3234C36.4672 15.6525 45.7826 5.47284 48.5971 2.77754C48.8715 3.04805 49.185 3.36634 49.6469 3.83704C50.2035 4.40345 50.9653 5.17884 52.1176 6.33514C47.7123 13.1222 48.5434 17.9581 48.9076 18.6515C49.0805 18.9806 49.435 19.2023 49.8061 19.2023C56.5297 19.2023 61.9994 24.672 61.9994 31.3956C61.9994 38.1183 56.5297 43.588 49.8061 43.588Z"
      fill="#2E55FA"
    />
  </svg>
);

// Custom Arrow Buttons
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 -left-3 transform -translate-y-1/2 z-10 bg-purple-400  text-gray-500 p-2 rounded shadow-lg hover:bg-purple-600"
    onClick={onClick}
  >
    <FaChevronLeft size={15} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 -right-3 transform  -translate-y-1/2 z-10 bg-purple-300 text-gray-500 p-2 rounded shadow-lg hover:bg-purple-600"
    onClick={onClick}
  >
    <FaChevronRight size={15} />
  </button>
);

// Testimonial Data
const testimonials = [
  {
    name: "Andnew Smith",
    duration: "One Year With Us",
    feedback:
      "It is a long established fact that a reader will be distracted Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Max Makina",
    duration: "Two Years With Us",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry It is a long established fact that a reader will be distracted.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Makima Smith",
    duration: "Three Years With Us",
    feedback:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. There are many variations of passages of Lorem Ipsum available.",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    name: "John Doe",
    duration: "Four Years With Us",
    feedback:
      "There are many variations of passages of Lorem Ipsum available. You need to be sure there isn't anything embarrassing.",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    name: "Emily Watson",
    duration: "Five Years With Us",
    feedback:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure You need to be sure there isn't anything embarrassing..",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
  },
];

const Testimonial = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Speed of autoplay (2 seconds)
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom prev arrow
    responsive: [
      {
        breakpoint: 1024, // Tablet (shows 2 slides)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile (shows 1 slide)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>

      <div className="bg-auto py-7 px-7 h-128 " >
        <div class="section-head style-1 text-center font-semibold -mt-2">
          <h6 className="-mt-6 font-bold text-2xl "  >Client <span className=" text-purple-600">Testimonial</span></h6>
          <h2 class="section-title-3 font-bold text-5xl relative mt-5">What A Job Holder Says About Us</h2>
        </div>
        <p class="dz-text-2 mx-auto -my-20 max-w-lg text-center px-2 mt-3 text-1xl">
        There are many variations of passages of available, but the majority have suffered some form, by injected humour
        </p>


        <Slider {...settings}>

          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative w-12 p-7 z-0">
              {/* naya */}
              < div className="relative rounded-full  w-[100px] h-28 translate-y-20  bg-white mx-auto  z-10">
              </div>
              <div className="bg-purple-300 rounded-lg shadow-md p-9 mt-5 border-gray-300 relative text-center">
                {/* Quote Icons */}
                <div className="absolute top-6 left-5 opacity-70 flex -space-x-7">
                  <QuoteIcon />
                  <QuoteIcon2 />
                </div>

                {/* User Image - Overlapping the Top of Card */}
                <div className="">
                  <div className="absolute z-10 -top-8 left-1/2 transform -translate-x-1/2">

                    <div
                      className="testimonial-pic-circle z-20 !animate-spin-custom"

                      style={{
                        position: "absolute",
                        width: "88px",
                        height: "87px",
                        borderRadius: "50%",
                        border: "2px solid #6b46c1",

                        top: "50%",
                        left: "51%",
                        transform: "translate(-50%, -50%)",
                        animation: "rotate360 30s linear infinite"

                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          width: "10px",

                          height: "10px",
                          borderRadius: "50%",
                          backgroundColor: "#6b46c1",
                          top: "-4px",
                          left: "50%",

                          transform: "translateX(-30%)"
                        }}
                      ></div>
                      <div
                        style={{
                          position: "absolute",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          backgroundColor: "#6b46c1",
                          bottom: "-5px",
                          left: "50%",
                          transform: "translateX(-50%)"
                        }}
                      ></div>
                    </div>

                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">

                    </div>

                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 relative  rounded-full border-4 border-white shadow-9xl"
                      style={{ animation: "rotate360 30s linear infinite" }}
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="mt-14">
                  <h2 className="text-lg -mt-2 font-semibold">{testimonial.name}</h2>
                  <p className="text-sm text-blue-700">{testimonial.duration}</p>
                  <p className="text-gray-700 mt-2">{testimonial.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );

};

export default Testimonial;

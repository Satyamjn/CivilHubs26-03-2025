import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const newsData = [
    {
      category: "Sustainability",
      author: "Eng. John Doe",
      time: "Feb 8, 2025",
      title: "The Future of Sustainable Construction",
      description:
        "Sustainable construction is transforming the way we design, build, and maintain our infrastructure. Discover how renewable materials, 3D printing, smart energy systems, and green infrastructure are shaping the future.",
      imageUrl:
        "https://img.freepik.com/free-photo/beautiful-skyscraper-with-architecture-building-around-city_74190-1080.jpg?t=st=1740222279~exp=1740225879~hmac=ed2f99d2ad260c7b44ddf5ca866f253af8551e8dcc56d6bb36dc5758937b71b1&w=1380",
    },
    {
      category: "Peoples",
      author: "James",
      time: "24min read",
      title: "A Media Critic Focuses on the Crisis in Local News",
      description:
        "Exploring the decline of local journalism and its impact on communities, highlighting the role of media in shaping public opinion.",
      imageUrl:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fGxvY2FsJTIwbmV3c3xlbnwwfHx8fDE2OTUwMjE0NzQ&ixlib=rb-4.0.3&q=80&w=400",
    },
    {
      category: "Technology",
      author: "Sarah Williams",
      time: "Feb 15, 2025",
      title: "Revolutionizing Healthcare with AI Technology",
      description:
        "Artificial Intelligence is transforming healthcare with predictive analytics, personalized treatments, and improved patient care systems.",
      imageUrl:
        "https://img.freepik.com/free-photo/medical-banner-with-woman-wearing-vr-glasses_23-2149611195.jpg?t=st=1740222359~exp=1740225959~hmac=bb96849834416bed7a54917d3036967fbe93eb85b385b0ba45670dabad913063&w=1800",
    },
    {
      category: "Environment",
      author: "Michael Green",
      time: "Feb 18, 2025",
      title: "How Urban Green Spaces Improve Mental Health",
      description:
        "Urban parks and green spaces are more than aesthetic. Discover how they contribute to better mental health and community well-being.",
      imageUrl:
        "https://images.unsplash.com/photo-1503264116251-35a269479413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHVyYmFuJTIwZ3JlZW4lMjBzcGFjZXxlbnwwfHx8fDE2OTUwMjIwMjM&ixlib=rb-4.0.3&q=80&w=400",
    },
    {
      category: "Education",
      author: "Emma Johnson",
      time: "Feb 20, 2025",
      title: "E-Learning Trends Transforming Modern Education",
      description:
        "The rise of digital classrooms, interactive learning tools, and online courses is reshaping how education is delivered globally.",
      imageUrl:
        "https://img.freepik.com/premium-vector/e-learning-innovative-online-education-internet-technology-webinar-teaching-online-training-courses-skill-development-robotic-hand-touching-digital-interface-illustration_127544-453.jpg",
    },
  ];
  

  const newssettings = {
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
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

  return (
    <div className="py-10 bg-auto">
      <h2 className="text-3xl ml-4 sm:ml-12 font-bold text-start mb-1 -mt-6">
        Recent <span className="text-teal-500">Blogs</span>
      </h2>
      <Link to={'/BlogDetail'}>
        <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto relative">
          <Slider {...newssettings} className="w-full">
            {newsData.map((news, index) => (
              <div
                key={index}
                className="px-2 sm:px-3 hover:scale-105 transition-all duration-500 mt-5 mb-5"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-md hover:shadow-teal-500 cursor-pointer z-20 h-max w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-44 md:h-40 sm:h-36 object-cover rounded-lg mb-3"
                  />
                  <span className="absolute -top-1 right-2 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {news.category}
                  </span>
                  <p className="text-xs text-gray-600 mb-1">
                    {news.author} &nbsp;|&nbsp; {news.time}
                  </p>
                  <h3 className="text-sm font-semibold mb-1 leading-snug">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-700 line-clamp-3">
                    {news.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Link>
    </div>
  );
};

export default LatestNews;

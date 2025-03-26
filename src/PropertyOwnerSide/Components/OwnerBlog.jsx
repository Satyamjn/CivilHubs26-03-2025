import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import NavbarProperty from "./NavbarProperty";

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

const OwnerBlog = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    window.scrollTo(0, 0); // Page को top से load करेगा
  }, []);

  const handleCardClick = (blog) => {
    navigate("/blogdetail2p", { state: { news } }); // Use navigate to go to /blogdetail2p
  };

  return (
    <>
      <NavbarProperty />
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Featured Post */}
        <div
          className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
          onClick={() => handleCardClick(newsData[0])}
        >
          <div className="w-full lg:w-1/2">
            <img
              src={newsData[0].imageUrl}
              alt="Featured"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 lg:w-1/2 flex flex-col justify-center">
            <p className="text-indigo-500 font-semibold uppercase">
              {newsData[0].category}
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-2">
              {newsData[0].title}
            </h2>
            <p className="text-gray-600 mt-2">{newsData[0].description}</p>
            <p className="text-gray-500 mt-1 text-sm">
              By {newsData[0].author} - {newsData[0].time}
            </p>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {newsData.slice(1).map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => handleCardClick(blog)}
            >
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-indigo-500 font-semibold uppercase">
                  {blog.category}
                </p>
                <h3 className="text-lg font-bold text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
                <p className="text-gray-500 text-xs mt-1">
                  By {blog.author} - {blog.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OwnerBlog;
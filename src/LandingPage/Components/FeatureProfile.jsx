import React, { useEffect } from "react";
import { MapPin, Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { MdVerified } from "react-icons/md";
const engineerProfiles = [
  {
    name: "Rahul Mehta",
    rating: 4.5,
    location: "Delhi, India",
    description: "Experienced Civil Engineer with expertise in structural analysis and steel structure design.",
    skills: ["AutoCAD", "STAAD Pro", "Steel Structures"],
    projects: 12,
    ratePerHour: 30.0,
    imageUrl: "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    name: "Ananya Singh",
    rating: 4.2,
    location: "Mumbai, India",
    description: "Civil Engineer specializing in RCC structures, site supervision, and quantity surveying.",
    skills: ["RCC Design", "Quantity Surveying", "AutoCAD"],
    projects: 10,
    ratePerHour: 28.0,
    imageUrl: "https://randomuser.me/api/portraits/women/15.jpg"
  },
  {
    name: "Karan Patel",
    rating: 4.7,
    location: "Pune, India",
    description: "Expert in geotechnical engineering, soil mechanics, and foundation design.",
    skills: [ "Foundation Design", "Plaxis", "Soil Testing"],
    projects: 15,
    ratePerHour: 35.0,
    imageUrl: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Megha Rathi",
    rating: 4.0,
    location: "Jaipur, India",
    description: "Civil Engineer with strong knowledge of water resources and hydraulic engineering.",
    skills: ["Hydraulic Engineering", "SWMM", "EPANET"],
    projects: 9,
    ratePerHour: 25.0,
    imageUrl: "https://randomuser.me/api/portraits/women/30.jpg"
  },
  {
    name: "Arjun Sinha",
    rating: 4.6,
    location: "Bangalore, India",
    description: "Specialist in transportation engineering, highway design, and traffic analysis.",
    skills: ["Transportation Engineering", "Traffic Analysis"],
    projects: 13,
    ratePerHour: 32.0,
    imageUrl: "https://randomuser.me/api/portraits/men/25.jpg"
  },
  {
    name: "Neha Kapoor",
    rating: 3.9,
    location: "Hyderabad, India",
    description: "Site Engineer with expertise in construction management and safety regulations.",
    skills: ["Construction Management", "MS Project"],
    projects: 7,
    ratePerHour: 26.0,
    imageUrl: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Rajat Malhotra",
    rating: 4.3,
    location: "Chennai, India",
    description: "Civil Engineer with a focus on bridge design, load testing, and maintenance planning.",
    skills: ["Bridge Design", "Load Testing"],
    projects: 11,
    ratePerHour: 29.0,
    imageUrl: "https://randomuser.me/api/portraits/men/40.jpg"
  },
  {
    name: "Sarah Johnson",
    rating: 4.8,
    location: "Mumbai, India",
    description: "Expert in transportation engineering and urban infrastructure projects with 8+ years of experience.",
    skills: ["Urban Planning", "Transportation", "Risk Analysis"],
    projects: 15,
    ratePerHour: 30.0,
   imageUrl: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    name: "Rajesh Kumar",
    rating: 4.5,
    location: "Delhi, India",
    description: "Civil Engineer with expertise in residential and commercial building construction and quality assurance.",
    skills: ["Construction", "Quality Assuranc"],
    projects: 12,
    ratePerHour: 28.0,
    imageUrl: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const EngineerProfileCard = ({
  name,
  rating,
  location,
  description,
  skills,
  projects,
  ratePerHour,
  imageUrl,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/showprofile", {
      state: { name, rating, location, description, skills, projects, ratePerHour, imageUrl }
    });
  };


  return (
    <div
      className="max-w-3xl rounded-2xl p-5 border cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={handleCardClick}
    >
      <div className="flex flex-col items-start gap-4 p-2">
        <div className="flex items-start gap-4 w-full">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden">
            <img
              src={imageUrl || "https://via.placeholder.com/96"}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 text-start">
            <h2 className="text-lg md:text-xl font-semibold flex items-center gap-2">
              {name} <MdVerified className="text-teal-500" />
            </h2>
            <div className="flex items-center gap-1 text-gray-500 text-sm mb-1">
              <Star className="w-4 h-4 text-orange-500" /> {rating}
              <MapPin className="w-4 h-4" /> {location}
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-2 w-full">{description.slice(0,40)}</p>
        <div className="flex gap-1 flex-wrap mb-2 w-full">
  {skills.slice(0, 2).map((skill, index) => (
    <span
      key={index}
      className="border rounded-lg px-2 py-1 text-sm bg-gray-100"
    >
      {skill}
    </span>
  ))}
</div>

        <p className="font-semibold w-full">
          {projects} Projects • ${ratePerHour}/hr
        </p>
      </div>
    </div>
  );
};


const Topfreelancer = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-16 py-8 -mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold text-start   ">
        Top <span className="text-teal-500">Freelancer</span>
      </h2>
      <Slider {...settings} className="mx-auto">
        {engineerProfiles.map((profile, index) => (
          <div key={index} className="px-2 sm:px-4 md:px-8 mt-4"> {/* Adjusted padding for responsiveness */}
            <EngineerProfileCard {...profile} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Topfreelancer;

























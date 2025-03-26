import React from "react";
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
      state: { name, rating, location, description, skills, projects, ratePerHour, imageUrl ,engineerProfiles }
      
    });
  };

  return (
    <div 
      className="bg-white p-4 sm:p-6 rounded-2xl border transition-transform transform hover:scale-105 duration-300 m-2 w-full max-w-md mx-auto" 
      onClick={handleCardClick}
    >
      <div className="flex flex-col items-start gap-2 w-full">
        <div className="flex items-start gap-3 sm:gap-4 w-full">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={imageUrl || "https://via.placeholder.com/96"}
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="flex-1 text-start overflow-hidden">
            <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2 mt-1 sm:mt-0">
              <span className="truncate">{name}</span> <MdVerified className="text-teal-500 flex-shrink-0" />
            </h2>
            
            <div className="flex items-center flex-wrap gap-1 sm:gap-2 text-gray-500 text-sm mt-1">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-orange-500" /> 
                <span>{rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> 
                <span className="truncate">{location}</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mt-2 sm:mt-3 w-full line-clamp-2 sm:line-clamp-3">
          {description}
        </p>
        
        <div className="flex gap-2 flex-wrap mt-2 sm:mt-3 w-full">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="border rounded-lg px-2 py-1 text-xs sm:text-sm whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <p className="font-semibold text-sm sm:text-base mt-2 sm:mt-3 w-full">
          {projects} Projects • ${ratePerHour}/hr
        </p>
      </div>
    </div>
  );
};

const EngineerProfileSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for extra large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // xl screens
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024, // lg screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // md screens
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 640, // sm screens
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto mb-10 -mt-5">
      <h2 className="text-2xl sm:text-3xl font-bold ml-3 text-start mb-4 sm:mb-6 px-4 sm:px-0">
        Top <span className="text-teal-500">Freelancers</span>
      </h2>
      
      <div className="relative">
        <Slider {...settings} className="px-2 sm:px-4">
          {engineerProfiles.map((profile, index) => (
            <div key={index} className="px-2">
              <EngineerProfileCard {...profile} />
            </div>  
            
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default EngineerProfileSlider;
 
























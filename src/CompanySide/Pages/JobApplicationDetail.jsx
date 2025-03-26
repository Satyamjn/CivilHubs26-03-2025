
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarComp from '../Components/Navbar';


const aboutMeText = `
 Are you looking for a skilled professional to bring your architectural visions to life? 
 With extensive experience in CAD drafting and 3D design, I deliver precise and innovative 
 solutions tailored to your needs.
  Are you looking for a skilled professional to bring your architectural visions to life? 
 With extensive experience in CAD drafting and 3D design, I deliver precise and innovative 
 solutions tailored to your needs.
 What I Offer:
  Are you looking for a skilled professional to bring your architectural visions to life? 
 With extensive experience in CAD drafting and 3D design, I deliver precise and innovative 
 solutions tailored to your needs.
 What I Offer
   Are you looking for a skilled professional to bring your architectural visions to life? 
 With extensive experience in CAD drafting and 3D design, I deliver precise and innovative 
 solutions tailored to your needs.
 What I Offer
   Are you looking for a skilled professional to bring your architectural visions to life? 
 With extensive experience in CAD drafting and 3D design, I deliver precise and innovative 
 solutions tailored to your needs.
 What I Offer
   Are you looking for a skilled professional to bring your architectural visions to life? 
 With extensive experience in CAD drafting and 3D design, I deliver precise and innovative 
 solutions tailored to your needs.
 What I Offer
   Are you looking for a skilled professional to bring your architectural visions to life? 
 With extensive experience in CAD drafting and 3D design, I deliver precise and innovative 
 solutions tailored to your needs.
 What I Offer
 • Autodesk AutoCAD expertise for detailed and accurate designs.
 • Proficiency in Architectural Design, from concept to execution.
 • High-quality 2D Drafting, 2D Design & Drawings, and Floor Plan Design for residential, 
   commercial, and industrial projects.
 • Stunning Photorealistic Rendering.
 • Specialized skills in Home Design, Space Planning, and Interior Design to create 
   functional and aesthetically pleasing spaces.
    • High-quality 2D Drafting, 2D Design & Drawings, and Floor Plan Design for residential, 
   commercial, and industrial projects.
 • Stunning Photorealistic Rendering.
 • Expertise in Graphic Design for professional presentations and marketing materials.
`;

const combinedData = [
  {
    type: "profile",
    data: {
      name: "User      Name",
      description: "No description available.",
      projects: 0,
      rating: "N/A",
      experience: "5 yrs",
      profileImage: "https://via.placeholder.com/150"
    }
  },
  {
    type: "portfolio",
    data: []
  },
  {
    type: "workingHistory",
    data: [
      {
        id: 1,
        title: "Draftsman, Drafter for 2nd Floor Plan",
        rating: 4.5,
        date: "Jun 17, 2024 - Jun 18, 2024",
        feedback: "Prompt drawings and response from Shaazi. Happy with all work provided!",
        price: "$5.00",
        priceType: "Fixed Price"
      },
      {
        id: 2,
        title: "Graphic Designer for Marketing Materials",
        rating: 4.8,
        date: "Jul 01, 2024 - Jul 05, 2024",
        feedback: "Excellent design work and very responsive. Will hire again!",
        price: "$150.00",
        priceType: "Fixed Price"
      },
      {
        id: 3,
        title: "Web Developer for E-commerce Site",
        rating: 4.7,
        date: "Jul 10, 2024 - Jul 15, 2024",
        feedback: "Great work! Delivered on time and exceeded expectations.",
        price: "$800.00",
        priceType: "Fixed Price"
      },
      {
        id: 4,
        title: "Content Writer for Blog Posts",
        rating: 4.6,
        date: "Jul 20, 2024 - Jul 25, 2024",
        feedback: "Well-researched articles and engaging writing style.",
        price: "$200.00",
        priceType: "Fixed Price"
      },
      {
        id: 5,
        title: "SEO Specialist for Website Optimization",
        rating: 4.9,
        date: "Aug 01, 2024 - Aug 05, 2024",
        feedback: "Increased our traffic significantly. Highly recommend!",
        price: "$300.00",
        priceType: "Fixed Price"
      },
      {
        id: 6,
        title: "Mobile App Developer for iOS App",
        rating: 4.4,
        date: "Aug 10, 2024 - Aug 15, 2024",
        feedback: "Good communication and delivered a functional app.",
        price: "$1,200.00",
        priceType: "Fixed Price"
      },
      {
        id: 7,
        title: "Video Editor for Promotional Video",
        rating: 4.5,
        date: "Aug 20, 2024 - Aug 25, 2024",
        feedback: "Creative edits and quick turnaround. Very satisfied!",
        price: "$400.00",
        priceType: "Fixed Price"
      },
      {
        id: 8,
        title: "Social Media Manager for Campaign",
        rating: 4.6,
        date: "Sep 01, 2024 - Sep 10, 2024",
        feedback: "Increased our engagement and followers significantly.",
        price: "$250.00",
        priceType: "Fixed Price"
      },
    ]
  },
  {
    type: "education",
    data: [
      {
        id: 1,
        institution: "NED University of Engineering and Technology",
        degree: "Master of Architecture (MArch), Architectural Engineering"
      },
      {
        id: 2,
        institution: "Indore University of Engineering and Technology",
        degree: "Master of Architecture (MArch), Architectural Engineering"
      },
      {
        id: 3,
        institution: "Indore University of Engineering and Technology",
        degree: "Master of Architecture (MArch), Architectural Engineering"
      },
    ]
  },
  {
    type: "languages",
    data: [
      { id: 1, language: "French - Basic" },
      { id: 2, language: "Spanish - Intermediate" },
      { id: 3, language: "English - Fluent" },
    ]
  },
  {
    type: "employmentHistory",
    data: [
      {
        id: 1,
        company: "XYZ Architectural Firm",
        position: "Senior CAD Draftsman",
        duration: "Jan 2020 - Present"
      },
      {
        id: 2,
        company: "XYZ Architectural Firm",
        position: "Senior CAD Draftsman",
        duration: "Jan 2020 - Present"
      },
    ]
  }
];

const ProjectProposalDetail = () => {
  const location = useLocation();
  const [selectedProfile, setSelectedProfile] = useState(null);

  const {
    name = "Michael Splitz",
    
    
    description = "2+ years",
    skills = [],
    ratePerHour = 0,
    imageUrl = "https://via.placeholder.com/150",
    workingHistory = [],
    education = [],
    languages = [],
    employmentHistory = [],
  } = location?.state || {};

  const profileData = combinedData.find(item => item.type === "profile").data;
  const workingHistoryData = combinedData.find(item => item.type === "workingHistory").data;
  const educationData = combinedData.find(item => item.type === "education").data;
  const languagesData = combinedData.find(item => item.type === "languages").data;
  const employmentHistoryData = combinedData.find(item => item.type === "employmentHistory").data;

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
      skills: ["Foundation Design", "Plaxis", "Soil Testing"],
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
  ];

  

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on load
  }, []);

  // Click handler for similar profiles
  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  // Use selected profile data or fallback to default
  const currentProfile = selectedProfile || {
    name,
    

    description,
    skills,
    imageUrl,
    workingHistory: workingHistoryData,
    education: educationData,
    languages: languagesData,
    employmentHistory: employmentHistoryData,
  };

  return (
    <>
     <NavbarComp/>
      <div className='bg-gray-100'>
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-lg shadow-sm mt-10 mb-16">
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/a1aa/image/EgivPNxbIuGiw2qpShltEH8aSvleUAekv_K09XiuVYo.jpg"
                  alt="Abstract geometric background"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute -bottom-12 left-6">
                  <img
                    src={currentProfile.imageUrl}
                    alt="Profile picture"
                    className="w-24 h-24 rounded-full border-4 border-white"
                  />
                </div>
              </div>
              <div className="p-6 pt-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h1 className="text-2xl font-bold">{currentProfile.name}</h1>
                    <p className="text-gray-600">Experience: {currentProfile.description}</p>
                    <p className="text-gray-600">{currentProfile.location}</p>
                    <div className="mt-2 flex flex-wrap space-x-2">
                      {currentProfile.skills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                          {skill}
                        </span>
                        ))}
                    </div>
                  </div>
                
                </div>



                <div >
                <div className="mt-6">
                  <h2 className="text-xl font-semibold">Attachment:</h2>
                  <div className="flex items-center mt-2">
                    <i className="fas fa-file-pdf text-red-500 text-xl mr-2"></i>
                    <a href="#" className="text-blue-500">Resume.pdf</a>
                  </div>
                  <div className="flex items-center mt-2">
                    <i className="fas fa-money-bill-wave text-green-500 text-xl mr-2"></i>
                    <span>Bid: ₹25000</span>
                  </div>
                </div>
                </div>


                <div className="mt-6">
                  <h2 className="text-xl font-semibold">Proposal:</h2>
                  <p className="mt-2 text-gray-700">{aboutMeText}</p>
                </div>

                <div className="mt-48 flex place-content-center gap-[620px] ">
                  <button className="bg-red-500 text-white px-10 py-2 rounded-full">Skip</button>
                  <button className="bg-green-500 text-white px-10 py-2 rounded-full">Hire</button>
                </div>



              </div>
            </div>
            <div className="space-y-8 mt-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="mt-2 text-gray-700">Kalkio Network</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Connect</h3>
                <div className="mt-2 space-y-2">
                  <a className="flex items-center text-blue-500" href="">
                    <i className="fas fa-globe mr-2"></i>
                    about.me/adrianm
                  </a>
                  <a className="flex items-center text-blue-500" href="">
                    <i className="fab fa-facebook mr-2"></i>
                    Facebook
                  </a>
                  <a className="flex items-center text-blue-500" href="">
                    <i className="fab fa-instagram mr-2"></i>
                    Instagram
                  </a>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Similar Profiles</h3>
                <div className="mt-2 space-y-7">
                  {engineerProfiles.map((profile, index) => (
                    <div key={index} className="flex items-center cursor-pointer" onClick={() => handleProfileClick(profile)}>
                      <img
                        src={profile.imageUrl}
                        alt={`Profile picture of ${profile.name}`}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="ml-3">
                        <p className="text-gray-800">{profile.name}</p>
                        <p className="text-gray-600 text-sm">{profile.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ProjectProposalDetail;
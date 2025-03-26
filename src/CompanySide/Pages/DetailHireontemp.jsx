


import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarComp from '../Components/Navbar';
import Footer from '../Components/Footer';
import { MdVerified } from "react-icons/md";

const aboutMeText = `
 Are you looking for a skilled professional to bring your architectural visions to life? 
 With extensive experience in CAD drafting and 3D design, I deliver precise and innovative 
 solutions tailored to your needs.
 
 What I Offer:
 • Autodesk AutoCAD expertise for detailed and accurate designs.
 • Proficiency in Architectural Design, from concept to execution.
 • High-quality 2D Drafting, 2D Design & Drawings, and Floor Plan Design for residential, 
   commercial, and industrial projects.
 • Stunning Photorealistic Rendering.
 • Specialized skills in Home Design, Space Planning, and Interior Design to create 
   functional and aesthetically pleasing spaces.
 • Expertise in Graphic Design for professional presentations and marketing materials.
`;

 const dummyUser = {

        
         aadharVerified: true,
        aadharNumber: "xxxx xxxx xxxx 1234",
    };
const combinedData = [
    {
        type: "profile",
        data: {
            name: "User     Name",
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


            // Add more working history items as needed...
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
                id: 1,
                institution: "Indore University of Engineering and Technology",
                degree: "Master of Architecture (MArch), Architectural Engineering"
            },
            {
                id: 1,
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
                id: 1,
                company: "XYZ Architectural Firm",
                position: "Senior CAD Draftsman",
                duration: "Jan 2020 - Present"
            },

        ]
    }
];

const DetailHireontemp = () => {

    const location = useLocation();
    const {
        name = "User     Name",
        rating = "N/A",
        location: loc = "Unknown",
        description = "No description available.",
      
        ratePerHour = 0,
        imageUrl = "https://via.placeholder.com/150",
        workingHistory = [],
        education = [],
        languages = [],
        employmentHistory = [],

    } = location?.state || {};

const skill=[
  {
    sk:"Autocad,Cad"
  },

];
    const jobData = location.state;
    

    const{dummy}= location.state;
    

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
    const portfolioData = [
        { id: 1, image: "/assets/Civilhubs/project2.jpg", alt: "Project 1" },
        { id: 2, image: "/assets/Civilhubs/construct3.png", alt: "Project 2" },
        { id: 3, image: "/assets/Civilhubs/construct.png", alt: "Project 3" },
    ];

    useEffect(() => {
        window.scrollTo(0, 0); // Page को top से load करेगा
    }, []);

    return (
        <>
            <NavbarComp />
            <div className='bg-gray-100'>
                <div className="min-h-screen">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 bg-white rounded-lg shadow-sm mt-10 mb-16">
                            <div className="relative">
                                <img
                                    src="/assets/Civilhubs/category7.png"
                                    alt="Abstract geometric background"
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <div className="absolute -bottom-12 left-6">
                                    <img
                                        src={dummy.img}
                                        alt="Profile picture"
                                        className="w-24 h-24 rounded-full border-4 border-white"
                                    />
                                </div>
                            </div>
                            <div className="p-6 pt-16">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                    <div>
                                        <h1 className="text-2xl font-bold">{dummy.name}</h1>
                                        <p className="text-gray-600">{jobData.description}</p>
                                        <p className="text-gray-600">{}</p>
                                        <div className="mt-2 flex flex-wrap space-x-2">
                                            {skill.map((skill, index) => (
                                                <span key={index} className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                                                    {skill.sk}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <button className="mt-4 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded-full">
                                        Hire me
                                    </button>
                                </div>

                                <div className="mt-6">
                                    <h2 className="text-xl font-semibold">About Me</h2>
                                    <p className="mt-2 text-gray-700">{aboutMeText}</p>
                                </div>

                                <div className="bg-white rounded-lg p-6 mt-5">
                                    <h3 className="text-xl font-semibold">Portfolio</h3>
                                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                        {portfolioData.map((item) => (
                                            <img key={item.id} src={item.image} alt={item.alt} className="w-full h-36 object-cover rounded-lg" />
                                        ))}
                                    </div>
                                </div>

                                {/* Working history */}
                                <div className="mt-5">
                                    <h2 className="text-xl font-semibold ml-5">Working History</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                                        {workingHistoryData.map((item) => (
                                            <div key={item.id} className="bg-white p-3 rounded-lg shadow h-[200px] w-full">
                                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                                <div className="flex items-center ">
                                                    <i className="fas fa-star text-red-500"></i>
                                                    <p className="">{item.rating}</p>
                                                </div>
                                                <p className="text-gray-600 text-sm ">{item.date}</p>
                                                <p className="text-gray-500 text-sm ">"{item.feedback}"</p>
                                                <div className="flex justify-between items-center ">
                                                    <p className="text-gray-800">{item.price}</p>
                                                    <p className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                                        {item.priceType}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Education Section */}
                                <div className="mt-12">
                                    <h2 className="text-xl font-bold">Education</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                        {educationData.map((item) => (
                                            <div key={item.id} className="bg-white p-4 rounded-lg shadow">
                                                <div className="flex items-center">
                                                    <i className="fas fa-graduation-cap text-blue-500"></i>
                                                    <p className="ml-2 font-bold">{item.institution}</p>
                                                </div>
                                                <p className="text-gray-600 mt-2">{item.degree}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Employment History Section */}
                                <div className="mt-12 mb-10">
                                    <h2 className="text-xl font-bold">Employment History</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        {employmentHistoryData.map((item) => (
                                            <div key={item.id} className="bg-white p-4 rounded-lg shadow">
                                                <div className="flex items-center">
                                                    <i className="fas fa-briefcase text-gray-500"></i>
                                                    <p className="ml-2 font-bold">{item.company}</p>
                                                </div>
                                                <p className="text-gray-600 mt-2">{item.position}</p>
                                                <p className="text-gray-600 mt-2">{item.duration}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Languages Section */}
                                <div className="mt-12">
                                    <h2 className="text-xl font-bold">Languages</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                        {languagesData.map((item) => (
                                            <div key={item.id} className="bg-white p-4 rounded-lg shadow">
                                                <div className="flex items-center">
                                                    <i className="fas fa-language text-gray-500"></i>
                                                    <p className="ml-2 font-bold">{item.language}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <section className="bg-white p-6 rounded-lg shadow-md">
                                    <h2 className="mt-2 font-semibold text-lg">{dummyUser.name}</h2>
                                    <p className="text-gray-500">{dummyUser.bio}</p>
                                    {dummyUser.aadharVerified && (
                                        <div className="mt-4 p-4 border border-green-400 bg-green-100 rounded-lg flex items-center">
                                            <MdVerified className="text-green-600 text-2xl mr-2" />
                                            <div>
                                                <h3 className="font-semibold text-green-700">Verification: ID Verified (Aadhar)</h3>
                                                <p className="text-gray-700">Aadhar Number: {dummyUser.aadharNumber}</p>
                                            </div>
                                        </div>
                                    )}
                                </section>
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
                                        <div key={index} className="flex items-center">
                                            <img
                                                src={profile.imageUrl}
                                                alt={`Profile picture of ${profile.name}`}
                                                className="w-10 h-10 rounded-full"
                                            />
                                            <div className="ml-3">
                                                <p className="text-gray-800">{profile.name}</p>
                                                <p className="text-gray-600 text-sm">{profile.industry}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DetailHireontemp;
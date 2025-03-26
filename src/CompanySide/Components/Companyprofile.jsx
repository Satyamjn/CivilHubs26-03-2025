import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarComp from './Navbar';
import Footer from './Footer';
import { CheckCircle, Facebook, Instagram, LineChartIcon, Linkedin, Phone, Twitter, VerifiedIcon } from "lucide-react";
import { FcRating } from 'react-icons/fc';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FaLink, FaBehance } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";

const aboutMeText = `
 Are you looking for a skilled team to bring your architectural visions to life? 
 At Logical Softech, we have extensive experience in CAD drafting and 3D design, delivering precise and innovative 
 solutions tailored to your needs.
 
 What We Offer:
 • Expertise in Autodesk AutoCAD for detailed and accurate designs.
 • Proficiency in Architectural Design, from concept to execution.
 • High-quality 2D Drafting, 2D Design & Drawings, and Floor Plan Design for residential, 
   commercial, and industrial projects.
 • Stunning Photorealistic Rendering to visualize your projects.
 • Specialized skills in Home Design, Space Planning, and Interior Design to create 
   functional and aesthetically pleasing spaces.
 • Expertise in Graphic Design for professional presentations and marketing materials.
 
 At Logical Softech we are committed to excellence and client satisfaction, ensuring that every project 
 reflects our dedication to quality and innovation.
`;

const Companyprofile = () => {
    const [activeSection, setActiveSection] = useState("Dashboard");
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
    const location = useLocation();
    const navigate = useNavigate();
    const {
        name = "Logical Softech",
        rating = "4.5",
        location: loc = "India",
        skills = [],
        userId = "@logicalsofttech25",
        imageUrl = "/assets/Civilhubs/freelancerprofile.jpg",
        hourlyRate = "$50/hr"
    } = location?.state || {};

    const handleLogout = () => {
        // Perform any logout logic here (e.g., clearing tokens, etc.)
        navigate('/')
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <NavbarComp />
                <div className="flex flex-1">
                    {!isSmallScreen && (
                        <aside className="w-full md:w-96 mt-9 bg-gray-100 p-9 md:p-16 shadow-lg">
                            <div className="flex flex-col items-center">
                                <img src="/assets/Civilhubs/freelancerprofile.jpg" alt="Profile" className="w-28 h-28 rounded-full" />
                                <h2 className="mt-4 font-semibold text-2xl">{name}</h2>
                                <p className="text-gray-500">{userId}</p>
                                <div className="flex space-x-4 mt-5 mb-3">
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <BsLinkedin className="text-blue-600 h-6 w-6 cursor-pointer" />
                                    </a>
                                    <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                                        <FaBehance className="text-blue-500 cursor-pointer h-6 w-6" />
                                    </a>
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                        <BsGithub className="cursor-pointer h-6 w-6" />
                                    </a>
                                </div>
                                <p className="text-lg text-gray-400 mt-3">Complete your profile</p>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `75%` }}>
                                        <span className="text-white text-xs">75% Complete</span>
                                    </div>
                                </div>
                            </div>
                            <nav className="mt-8">
                                <ul className="space-y-8">
                                    {["Dashboard", "Settings", "Terms & Conditions", "Privacy Policy", "Support"].map((item, index) => (
                                        <li
                                            key={index}
                                            className={`p-2 rounded-lg cursor-pointer ${activeSection === item ? "bg-blue-100" : "hover:bg-gray-200"}`}
                                            onClick={() => setActiveSection(item)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <button className="mt-6 flex items-center space-x-2 text-red-600" onClick={handleLogout}>
                                <HiOutlineLogout /> <span>Logout</span>
                            </button>
                        </aside>
                    )}

                    <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
                        {activeSection === "Dashboard" && (
                            <div className='bg-gray-100'>
                                <div className="min-h-screen">
                                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="md:col-span-2 bg-white rounded-lg shadow-sm mt-10 mb-16">
                                            <div className="relative">
                                                <img
                                                    src="/assets/Civilhubs/bgcover.jpg"
                                                    alt="Background"
                                                    className="w-full h-48 object-cover rounded-t-lg"
                                                />
                                                <div className="absolute -bottom-12 left-6">
                                                    <img
                                                        src={imageUrl}
                                                        alt="Profile"
                                                        className="w-24 h-24 rounded-full border-4 border-white"
                                                    />
                                                </div>
                                            </div>
                                            <div className="p-6 pt-16">
                                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                                    <div>
                                                        <h1 className="text-2xl font-bold flex items-center gap-2">
                                                            {name}
                                                            <VerifiedIcon className="w-5 h-5 text-blue-500" />
                                                        </h1>
                                                        <p className="text-gray-600">{userId}</p>
                                                        <p className="text-gray-600 flex items-center gap-2">
                                                            <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-4 h-3" />
                                                            {loc}
                                                        </p>
                                                        <div className="flex items-center gap-2">
                                                            <FcRating value={rating} />{rating}
                                                        </div>
                                                        <p className="text-gray-600 mt-2">Hourly Rate: {hourlyRate}</p>
                                                        <div className="mt-2 flex items-center gap-2">
                                                            <Instagram className="w-5 h-5 text-gray-700" />
                                                            <Twitter className="w-5 h-5 text-gray-700" />
                                                            <Facebook className="w-5 h-5 text-gray-700" />
                                                        </div>
                                                        <div className="mt-2 flex flex-wrap space-x-2">
                                                            {skills.map((skill, index) => (
                                                                <span key={index} className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <button className="mt-4 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded-full">
                                                        Edit Profile
                                                    </button>
                                                </div>

                                                <div className="mt-6">
                                                    <h2 className="text-xl font-semibold">Description</h2>
                                                    <p className="mt-2 text-gray-700">{aboutMeText}</p>
                                                </div>

                                                {/* Company Stats & Activity */}
                                                <div className="mt-6">
                                                    <h2 className="text-xl font-semibold">Company Stats & Activity</h2>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                                        <div className="bg-teal-100 p-4 rounded-lg text-center">
                                                            <h3 className="text-lg font-semibold">12</h3>
                                                            <p>Active Job Posts</p>
                                                        </div>
                                                        <div className="bg-blue-500 p-4 rounded-lg text-center">
                                                            <h3 className="text-lg font-semibold">45</h3>
                                                            <p>Total Hires</p>
                                                        </div>
                                                        <div className="bg-green-200 p-4 rounded-lg text-center">
                                                            <h3 className="text-lg font-semibold">30</h3>
                                                            <p>Projects Completed</p>
                                                        </div>
                                                        <div className="bg-red-100 p-4 rounded-lg text-center">
                                                            <h3 className="text-lg font-semibold">4.8</h3>
                                                            <p>Reviews & Ratings</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Active Job Posts Section */}
                                                <div className="mt-6">
                                                    <h2 className="text-xl font-semibold">Active Job Posts</h2>
                                                    <div className="mt-2 rounded-lg border border-gray-200 p-4">
                                                        {[
                                                            { id: 1, title: "Structural Engineer Needed", location: "New York, USA" },
                                                            { id: 2, title: "BIM Specialist", location: "London, UK" },
                                                            { id: 3, title: "Surveyor for Road Project", location: "Dubai, UAE" },
                                                        ].map((job) => (
                                                            <div key={job.id} className="flex justify-between bg-gray-100 p-3 rounded mt-2">
                                                                <div>
                                                                    <p className="font-semibold">{job.title}</p>
                                                                    <p className="text-gray-600">{job.location}</p>
                                                                </div>
                                                                <button className="text-blue-500">→</button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Portfolio Section */}
                                                <div className="bg-white rounded-lg p-6 mt-5">
                                                    <h3 className="text-xl font-semibold">Portfolio</h3>
                                                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                                        {[
                                                            { id: 1, image: "/assets/Civilhubs/project2.jpg", alt: "Project 1" },
                                                            { id: 2, image: "/assets/Civilhubs/construct3.png", alt: "Project 2" },
                                                            { id: 3, image: "/assets/Civilhubs/construct.png", alt: "Project 3" },
                                                        ].map((item) => (
                                                            <img key={item.id} src={item.image} alt={item.alt} className="w-full h-36 object-cover rounded-lg" />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-8 mt-10">
                                            {/* Reviews Section */}
                                            <div className="bg-white p-5 rounded-lg shadow-md ">
                                                <h3 className="text-lg font-semibold">Reviews</h3>
                                                {[
                                                    {
                                                        id: 1,
                                                        name: "Alice Johnson",
                                                        rating: 5,
                                                        feedback: "Excellent service and very professional!",
                                                        image: "https://randomuser.me/api/portraits/women/1.jpg"
                                                    },
                                                    {
                                                        id: 2,
                                                        name: "Bob Smith",
                                                        rating: 4,
                                                        feedback: "Great experience, will hire again!",
                                                        image: "https://randomuser.me/api/portraits/men/1.jpg"
                                                    },
                                                    {
                                                        id: 3,
                                                        name: "Charlie Brown",
                                                        rating: 5,
                                                        feedback: "Highly satisfied with the work done!",
                                                        image: "https://randomuser.me/api/portraits/men/2.jpg"
                                                    }
                                                ].map(review => (
                                                    <div key={review.id} className="flex items-center border border-gray-200 p-4 rounded-lg">
                                                        <img
                                                            src={review.image}
                                                            alt={`Review by ${review.name}`}
                                                            className="w-10 h-10 rounded-full"
                                                        />
                                                        <div className="ml-3">
                                                            <p className="text-gray-800 font-semibold">{review.name}</p>
                                                            <div className="flex items-center">
                                                                {[...Array(review.rating)].map((_, index) => (
                                                                    <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-500" />
                                                                ))}
                                                            </div>
                                                            <p className="text-gray-600">{review.feedback}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === "Settings" && (
                            <section className="flex-1 p-4 md:p-6 lg:p-8">
                                <h2 className="text-lg font-semibold">Settings</h2>
                                <div className="mt-4">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <p className="font-medium">Password & Security</p>
                                        <p className="text-gray-500">Manage your account security.</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <p className="font-medium text-red-600">Close Account</p>
                                        <p className="text-gray-500">This will permanently close your account.</p>
                                    </div>
                                </div>
                            </section>
                        )}

                        {activeSection === "Terms & Conditions" && (
                            <section className="flex-1 p-4 md:p-6 lg:p-8 shadow-md bg-white mt-8">
                                <h2 className="text-lg font-semibold">Terms and Conditions</h2>
                                <p className="text-gray-500">Last updated: February 2025</p>
                                <h3 className="font-semibold mt-4">Introduction</h3>
                                <p className="text-gray-600">Welcome to Civil Hubs. Your privacy is important to us. This policy explains how we collect, use, and protect your data.</p>
                                <h3 className="font-semibold mt-4">Information We Collect</h3>
                                <p className="text-gray-600">We collect personal information such as your name, email, and job preferences when you sign up.</p>
                                <h3 className="font-semibold mt-4">How We Use Your Information</h3>
                                <p className="text-gray-600">Your data is used to improve our services, connect freelancers with employers, and enhance your experience.</p>
                                <h3 className="font-semibold mt-4">Your Rights</h3>
                                <p className="text-gray-600">You have the right to access, update, or delete your personal information.</p>
                                <h3 className="font-semibold mt-4">Contact Us</h3>
                                <p className="text-gray-600">If you have any questions about this policy, please contact us at support@civilhubs.com.</p>
                            </section>
                        )}

                        {activeSection === "Privacy Policy" && (
                            <section className="bg-white rounded-lg shadow-md mt-8 flex-1 p-4 md:p-6 lg:p-8">
                                <h2 className="text-lg font-semibold">Privacy Policy</h2>
                                <p className="text-gray-500">Last updated: February 2025</p>
                                <h3 className="font-semibold mt-4">Introduction</h3>
                                <p className="text-gray-500">Welcome to Civil Hubs. Your privacy is important to us. This policy explains how we collect, use, and protect your data.</p>
                                <h3 className="font-semibold mt-4">Information We Collect</h3>
                                <p className="text-gray-500">We collect personal information such as your name, email, and job preferences when you sign up.</p>
                                <h3 className="font-semibold mt-4">How We Use Your Information</h3>
                                <p className="text-gray-500">Your data is used to improve our services, connect freelancers with employers, and enhance your experience.</p>
                                <h3 className="font-semibold mt-4">Your Rights</h3>
                                <p className="text-gray-500">You have the right to access, update, or delete your personal information.</p>
                                <h3 className="font-semibold mt-4">Contact Us</h3>
                                <p className="text-gray-500">If you have any questions about this policy, please contact us at support@civilhubs.com.</p>
                            </section>
                        )}

                    </main>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Companyprofile;
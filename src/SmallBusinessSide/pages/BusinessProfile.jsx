import { useState } from "react";
import { FaLinkedin, FaBehance, FaGithub } from "react-icons/fa";
import { HiDownload, HiOutlineLogout } from "react-icons/hi";

import { MdVerified } from "react-icons/md";
import NavbarBusiness from "../Component/NavbarBusiness";
const BusinessProfile = () => {
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
  const employmentHistoryData = combinedData.find(item => item.type === "employmentHistory").data;

    const [activeSection, setActiveSection] = useState("Dashboard");
  const languagesData = combinedData.find(item => item.type === "languages").data;

    const educationData = combinedData.find(item => item.type === "education").data;
    const dummyUser = { 
        name: "Interior Design Squad",
        username: "Rahul Yadav",
        profileImage: "src/assets/Civilhubs/freelancerprofile.jpg",
        profileCompletion: 75,
        socials: [
            { icon: <FaLinkedin className="text-blue-600 h-6 w-6 cursor-pointer" />, link: "https://linkedin.com" },
            { icon: <FaBehance className="text-blue-500 cursor-pointer h-6 w-6" />, link: "https://behance.net" },
            { icon: <FaGithub className="cursor-pointer h-6 w-6" />, link: "https://github.com" }
        ],
        menuItems: [
            { label: "Dashboard", active: true },
            { label: "Settings", active: false },
            { label: "Terms & Conditions", active: false },
            { label: "Privacy Policy", active: false },
            { label: "Support", active: false }
        ],
        bio: "PAN Number",
        skills: ["AutoCAD", "STAAD Pro", "Steel Structures"],
        portfolio: [
            { image: "src/assets/Civilhubs/cat1.png" },
            { image: "src/assets/Civilhubs/cat3.png" },
            { image: "src/assets/Civilhubs/cat6.png" }
        ],
        resume: "My Resume.pdf",
        workHistory: [
            { title: "Structural Engineer", date: "Jul 10, 2024 - Jul 15, 2024", feedback: "Great work! Delivered on time.", amount: 800 },
            { title: "Project Consultant", date: "Aug 1, 2024 - Aug 10, 2024", feedback: "Excellent technical skills!", amount: 1200 },
            { title: "Design Specialist", date: "Sep 5, 2024 - Sep 12, 2024", feedback: "Very detailed and professional.", amount: 950 }
        ],
         aadharVerified: true,
  aadharNumber: "xxxx xxxx xxxx 1234",
    };

    return (
      <>
          <NavbarBusiness />
          <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
              <aside className="w-full md:w-96 mt-8 bg-white p-8 md:p-16 shadow-lg">
                  <div className="flex flex-col items-center">
                      <img src={dummyUser .profileImage} alt="Profile" className="w-28 h-28 rounded-full" />
                      <h2 className="mt-4 font-semibold text-2xl">{dummyUser .name}</h2>
                      <p className="text-gray-500">{dummyUser .username}</p>
                      <p className="text-lg text-gray-400 mt-3">Complete your profile</p>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${dummyUser .profileCompletion}%` }}>
                              <span className="text-white text-xs">
                                  {dummyUser .profileCompletion}% Complete
                              </span>
                          </div>
                      </div>
                  </div>
                  <nav className="mt-12">
                      <ul className="space-y-8">
                          {dummyUser .menuItems.map((item, index) => (
                              <li
                                  key={index}
                                  className={`p-2 rounded-lg cursor-pointer ${activeSection === item.label ? "bg-blue-100" : "hover:bg-gray-200"}`}
                                  onClick={() => setActiveSection(item.label)}
                              >
                                  {item.label}
                              </li>
                          ))}
                      </ul>
                  </nav>
                  <button className="mt-6 flex items-center space-x-2 text-red-600">
                      <HiOutlineLogout /> <span>Logout</span>
                  </button>
              </aside>
  
              <main className="flex-1 p-4 md:p-6 lg:p-8">
                  {activeSection === "Dashboard" && (
                      <section className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                          <div className="flex flex-col md:flex-row justify-between items-center">
                              <div>
                                  <h2 className="font-semibold text-2xl md:text-3xl mb-3">Business Details</h2>
                                  <p className="text-gray-500">{dummyUser .bio}: ABCDEF1234F</p>
                                  <p className="text-gray-500">GST Number: GSTIN123555sdddsd</p>
                              </div>
                          </div>
  
                          {/* Address */}
                          <section className="bg-white p-6 rounded-lg shadow-md mt-8">
                              <h2 className="mt-2 font-semibold text-lg">Address</h2>
                              <p className="text-gray-500">Logical Softtech Indore MP</p>
                          </section>
  
                          {/* Aadhar Verified */}
                          <section className="bg-white p-6 rounded-lg shadow-md mt-8">
                              <h2 className="mt-2 font-semibold text-lg">{dummyUser .name}</h2>
                              <p className="text-gray-500">{dummyUser .bio}</p>
                              {dummyUser .aadharVerified && (
                                  <div className="mt-4 p-4 border border-green-400 bg-green-100 rounded-lg flex items-center">
                                      <MdVerified className="text-green-600 text-2xl mr-2" />
                                      <div>
                                          <h3 className="font-semibold text-green-700">Verification: ID Verified (Aadhar)</h3>
                                          <p className="text-gray-700">Aadhar Number: {dummyUser .aadharNumber}</p>
                                      </div>
                                  </div>
                              )}
                          </section>
                      </section>
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
                          <p className="text-gray-600">
                              Welcome to Civil Hubs. Your privacy is important to us. This policy explains how we collect, use, and protect your data.
                          </p>
  
                          <h3 className="font-semibold mt-4">Information We Collect</h3>
                          <p className="text-gray-600">
                              We collect personal information such as your name, email, and job preferences when you sign up.
                          </p>
  
                          <h3 className="font-semibold mt-4">How We Use Your Information</h3>
                          <p className="text-gray-600">
                              Your data is used to improve our services, connect freelancers with employers, and enhance your experience.
                          </p>
  
                          <h3 className="font-semibold mt-4">Your Rights</h3>
                          <p className="text-gray-600">
                              You have the right to access, update, or delete your personal information.
                          </p>
  
                          <h3 className="font-semibold mt-4">Contact Us</h3>
                          <p className="text-gray-600">
                              If you have any questions about this policy, please contact us at support@civilhubs.com.
                          </p>
                      </section>
                  )}
  
                  {activeSection === "Privacy Policy" && (
                      <section className="bg-white rounded-lg shadow-md mt-8 flex-1 p-4 md:p-6 lg:p-8">
                          <h2 className="text-lg font-semibold">Privacy Policy</h2>
                          <p className="text-gray-500">Last updated: February 2025</p>
  
                          <h3 className="font-semibold mt-4">Introduction</h3>
                          <p className="text-gray-500">
                              Welcome to Civil Hubs. Your privacy is important to us. This policy explains how we collect, use, and protect your data.
                          </p>
  
                          <h3 className="font-semibold mt-4">Information We Collect</h3>
                          <p className="text-gray-500">
                              We collect personal information such as your name, email, and job preferences when you sign up.
                          </p>
  
                          <h3 className="font-semibold mt-4">How We Use Your Information</h3>
                          <p className="text-gray-500">
                              Your data is used to improve our services, connect freelancers with employers, and enhance your experience.
                          </p>
  
                          <h3 className="font-semibold mt-4">Your Rights</h3>
                          <p className="text-gray-500">
                              You have the right to access, update, or delete your personal information.
                          </p>
  
                          <h3 className="font-semibold mt-4">Contact Us</h3>
                          <p className="text-gray-500">
                              If you have any questions about this policy, please contact us at support@civilhubs.com.
                          </p>
                      </section>
                  )}
              </main>
          </div>
      </>
  );
};

export default BusinessProfile;
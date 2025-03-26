// import { useState } from "react";
// import { FaLinkedin, FaBehance, FaGithub } from "react-icons/fa";
// import { HiDownload, HiOutlineLogout } from "react-icons/hi";
// import Navbar from "./shared/Navbar";
// import { MdVerified } from "react-icons/md";
// const FreelanceProfile = () => {
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

const dummyUser = {
    name: "Michael Splitz",
    username: "michael_splitz",
    profileImage: "/assets/Civilhubs/freelancerprofile.jpg",
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
    bio: "Experienced Civil Engineer with expertise in structural analysis and steel structure design Experienced Civil Engineer with expertise in structural analysis and steel structure design .Experienced Civil Engineer with expertise in structural analysis and steel structure design .Experienced Civil Engineer with expertise in structural analysis and steel structure design .Experienced Civil Engineer with expertise in structural analysis and steel structure design analysis and steel structure design .Experienced Civil Engineer with expertise in structural analysis and steel structure design analysis and steel structure design .Experienced Civil Engineer with expertise in structural analysis and steel structure design analysis and steel structure design .Experienced Civil Engineer with expertise in structural analysis and steel structure design analysis and steel structure design .Experienced Civil Engineer with expertise in structural analysis and steel structure design ",
    skills: ["AutoCAD", "STAAD Pro", "Steel Structures"],
    portfolio: [
        { image: "/assets/Civilhubs/cat1.png" },
        { image: "/assets/Civilhubs/cat3.png" },
        { image: "/assets/Civilhubs/cat6.png" }
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

//   const employmentHistoryData = combinedData.find(item => item.type === "employmentHistory").data;

//     const [activeSection, setActiveSection] = useState("Dashboard");
//   const languagesData = combinedData.find(item => item.type === "languages").data;

//     const educationData = combinedData.find(item => item.type === "education").data;

//     return (
//         <>
//             <Navbar />
//             <div className="flex min-h-screen bg-gray-100">
//                 <aside className="w-full md:w-96  mt-16 bg-white p-8 md:p-16 shadow-lg ">
//                     <div className="flex flex-col items-center">
//                         <img src={dummyUser .profileImage} alt="Profile" className="w-28 h-28 rounded-full" />
//                         <h2 className="mt-4 font-semibold text-2xl">{dummyUser .name}</h2>
//                         <p className="text-gray-500">@{dummyUser .username}</p>
//                         <div className="flex space-x-4 mt-5  mb-3">
//                             {dummyUser .socials.map((social, index) => (
//                                 <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
//                                     {social.icon}
//                                 </a>
//                             ))}
//                         </div>
//                         <p className="text-lg text-gray-400 mt-3">Complete your profile</p>
//                         <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
//                             <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${dummyUser .profileCompletion}%` }}>
//                                 <span className="text-white text-xs">
//                                     {dummyUser .profileCompletion}% Complete
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                     <nav className="mt-8">
//                         <ul className="space-y-8">
//                             {dummyUser .menuItems.map((item, index) => (
//                                 <li
//                                     key={index}
//                                     className={`p-2 rounded-lg cursor-pointer ${activeSection === item.label ? "bg-blue-100" : "hover:bg-gray-200"}`}
//                                     onClick={() => setActiveSection(item.label)}
//                                 >
//                                     {item.label}
//                                 </li>
//                             ))}
//                         </ul>
//                     </nav>
//                     <button className="mt-6 flex items-center space-x-2 text-red-600">
//                         <HiOutlineLogout /> <span>Logout</span>
//                     </button>
//                 </aside>
    
//                 <main className="flex-1 p-4 md:p-6 lg:p-8">
//                     {activeSection === "Dashboard" && (
//                         <main className="flex-1 p-4 md:p-6 lg:p-8">
//                             <section className="bg-white p-4 md:p-6 rounded-lg shadow-md">
//                                 <div className="flex flex-col md:flex-row justify-between items-center">
//                                     <div>
//                                         <h2 className=" font-semibold text-3xl mb-3">About Me</h2>
//                                         <p className="text-gray-500">{dummyUser .bio}</p>
//                                         <div className="flex space-x-2 mt-2">
//                                             {dummyUser .skills.map((skill, index) => (
//                                                 <span key={index} className="px-2 py-1 bg-gray-200 rounded">
//                                                     {skill}
//                                                 </span>
//                                             ))}
//                                         </div>
//                                     </div>
                                 
//                                 </div>
//                             </section>
    
//                             {/* Portfolio */}
//                             <section className="mt-6">
//                                 <h2 className="text-lg font-semibold">Portfolio</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
//                                     {dummyUser .portfolio.map((item, index) => (
//                                         <img key={index} src={item.image} className="rounded-lg shadow-md" />
//                                     ))}
//                                 </div>
//                             </section>
    
//                             {/* Resume */}
//                             <section className="mt-6 bg-white p-4 rounded-lg shadow-md flex items-center">
//                                 <HiDownload className="text-3xl" />
//                                 <p className="ml-2">{dummyUser .resume}</p>
//                             </section>
    
//                             {/* Working History */}
//                             <section className="mt-6">
//                                 <h2 className="text-lg font-semibold">Working History</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
//                                     {dummyUser .workHistory.map((job, index) => (
//                                         <div key={index} className="p-4 bg-white shadow-md rounded-lg">
//                                             <h3 className="font-semibold">{job.title}</h3>
//                                             <p className="text-sm text-gray-500">{job.date}</p>
//                                             <p className="text-sm mt-1">"{job.feedback}"</p>
//                                             <p className="text-green-600 font-bold mt-2">${job.amount}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </section>
    
//                             {/* Education */}
//                             <div className="mt-12">
//                                 <h2 className="text-xl font-bold">Education</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//                                     {educationData.map((item) => (
//                                         <div key={item.id} className="bg-white p-4 rounded-lg shadow">
//                                             <div className="flex items-center">
//                                                 <i className="fas fa-graduation-cap text-blue-500"></i>
//                                                 <p className="ml-2 font-bold">{item.institution}</p>
//                                             </div>
//                                             <p className="text-gray-600 mt-2">{item.degree}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
    
//                             {/* Language */}
//                             <div className="mt-12">
//                                 <h2 className="text-xl font-bold">Languages</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//                                     {languagesData.map((item) => (
//                                         <div key={item.id} className="bg-white p-4 rounded-lg shadow">
//                                             <div className="flex items-center">
//                                                 <i className="fas fa-language text-gray-500"></i>
//                                                 <p className="ml-2 font-bold">{item.language}</p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
    
//                             {/* Employment History Section */}
//                             <div className="mt-12 mb-10">
//                                 <h2 className="text-xl font-bold">Employment History</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//                                     {employmentHistoryData.map((item) => (
//                                         <div key={item.id} className="bg-white p-4 rounded-lg shadow">
//                                             <div className="flex items-center">
//                                                 <i className="fas fa-briefcase text-gray-500"></i>
//                                                 <p className="ml-2 font-bold">{item.company}</p>
//                                             </div>
//                                             <p className="text-gray-600 mt-2">{item.position}</p>
//                                             <p className="text-gray-600 mt-2">{item.duration}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
    
//                             {/* Aadhar Verified */}
//                             <section className="bg-white p-6 rounded-lg shadow-md">
//                                 <h2 className="mt-2 font-semibold text-lg">{dummyUser .name}</h2>
//                                 <p className="text-gray-500">{dummyUser .bio}</p>
//                                 {dummyUser .aadharVerified && (
//                                     <div className="mt-4 p-4 border border-green-400 bg-green-100 rounded-lg flex items-center">
//                                         <MdVerified className="text-green-600 text-2xl mr-2" />
//                                         <div>
//                                             <h3 className="font-semibold text-green-700">Verification: ID Verified (Aadhar)</h3>
//                                             <p className="text-gray-700">Aadhar Number: {dummyUser .aadharNumber}</p>
//                                         </div>
//                                     </div>
//                                 )}
//                             </section>
//                         </main>
//                     )}
    
//                     {activeSection === "Settings" && (
//                         <section className="flex-1 p-4 md:p-6 lg:p-8">
//                             <h2 className="text-lg font-semibold">Settings</h2>
//                             <div className="mt-4">
//                                 <div className="bg-white p-6 rounded-lg shadow-md">
//                                     <p className="font-medium">Password & Security</p>
//                                     <p className="text-gray-500">Manage your account security.</p>
//                                 </div>
//                             </div>
    
//                             <div className="mt-4">
//                                 <div className="bg-white p-6 rounded-lg shadow-md">
//                                     <p className="font-medium text-red-600">Close Account</p>
//                                     <p className="text-gray-500">This will permanently close your account.</p>
//                                 </div>
//                             </div>
//                         </section>
//                     )}
    
//                     {activeSection === "Terms & Conditions" && (
//                         <section className="flex-1 p-4 md:p-6 lg:p-8 shadow-md bg-white mt-8   ">
//                             <h2 className="text-lg font-semibold">Terms and Conditions</h2>
//                             <p className="text-gray-500">Last updated: February 2025</p>
    
//                             <h3 className="font-semibold mt-4">Introduction</h3>
//                             <p className="text-gray-600">
//                                 Welcome to Civil Hubs. Your privacy is important to us. This policy explains how we collect, use, and protect your data.
//                             </p>
    
//                             <h3 className="font-semibold mt-4">Information We Collect</h3>
//                             <p className="text-gray-600">
//                                 We collect personal information such as your name, email, and job preferences when you sign up.
//                             </p>
    
//                             <h3 className="font-semibold mt-4">How We Use Your Information</h3>
//                             <p className="text-gray-600">
//                                 Your data is used to improve our services, connect freelancers with employers, and enhance your experience.
//                             </p>
    
//                             <h3 className="font-semibold mt-4">Your Rights</h3>
//                             <p className="text-gray-600">
//                                 You have the right to access, update, or delete your personal information.
//                             </p>
    
//                             <h3 className="font-semibold mt-4">Contact Us</h3>
//                             <p className="text-gray-600">
//                                 If you have any questions about this policy, please contact us at support@civilhubs.com.
//                             </p>
//                         </section>
//                     )}
    
//                     {activeSection === "Privacy Policy" && (
//                         <section className="bg-white rounded-lg shadow-md   mt-8  flex-1 p-4 md:p-6 lg:p-8">
//                             <h2 className="text-lg font-semibold">Privacy Policy</h2>
//                             <p className="text-gray-500">Last updated: February 2025</p>
    
//                             <h3 className="font-semibold mt-4">Introduction</h3>
//                             <p className="text-gray-500">
//                                 Welcome to Civil Hubs. Your privacy is important to us. This policy explains how we collect, use, and protect your data.
//                             </p>
    
//                             <h3 className="font-semibold mt-4">Information We Collect</h3>
//                             <p className="text-gray-500">
//                                 We collect personal information such as your name, email, and job preferences when you sign up.
//                             </p>
    
//                             <h3 className="font-semibold mt-4">How We Use Your Information</h3>
//                             <p className="text-gray-500">
//                                 Your data is used to improve our services, connect freelancers with employers, and enhance your experience.
//                             </p>
    
//                             <h3 className="font-semibold mt-4">Your Rights</h3>
//                             <p className="text-gray-500">
//                                 You have the right to access, update, or delete your personal information.
//                             </p>
    
//                             <h3 className="font-semibold mt-4">Contact Us</h3>
//                             <p className="text-gray-500">
//                                 If you have any questions about this policy, please contact us at support@civilhubs.com.
//                             </p>
//                         </section>
//                     )}
//                 </main>
//             </div>
//         </>
//     );
// };

// export default FreelanceProfile;

import { useState } from "react";
import { FaLinkedin, FaBehance, FaGithub } from "react-icons/fa";
import { HiDownload, HiOutlineLogout } from "react-icons/hi";
import Navbar from "./shared/Navbar";
import { MdVerified } from "react-icons/md";

const FreelanceProfile = () => {
 
  const employmentHistoryData = combinedData.find(item => item.type === "employmentHistory").data;
  const [activeSection, setActiveSection] = useState("Dashboard");
  const languagesData = combinedData.find(item => item.type === "languages").data;
  const educationData = combinedData.find(item => item.type === "education").data;

 

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar (Visible only on large screens) */}
        <aside className="hidden md:block w-96 mt-16 bg-white p-8 md:p-16 shadow-lg">
          <div className="flex flex-col items-center">
            <img src={dummyUser.profileImage} alt="Profile" className="w-28 h-28 rounded-full" />
            <h2 className="mt-4 font-semibold text-2xl">{dummyUser.name}</h2>
            <p className="text-gray-500">@{dummyUser.username}</p>
            <div className="flex space-x-4 mt-5 mb-3">
              {dummyUser.socials.map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-lg text-gray-400 mt-3">Complete your profile</p>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
              <div
                className="bg-blue-500 h-1.5 rounded-full"
                style={{ width: `${dummyUser.profileCompletion}%` }}
              >
                <span className="text-white text-xs">
                  {dummyUser.profileCompletion}% Complete
                </span>
              </div>
            </div>
          </div>
          <nav className="mt-8">
            <ul className="space-y-8">
              {dummyUser.menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`p-2 rounded-lg cursor-pointer ${
                    activeSection === item.label ? "bg-blue-100" : "hover:bg-gray-200"
                  }`}
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

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {/* User Photo and Name (Visible only on small screens) */}
          <div className="md:hidden flex flex-col items-center mb-6">
            <img src={dummyUser.profileImage} alt="Profile" className="w-28 h-28 rounded-full" />
            <h2 className="mt-4 font-semibold text-2xl">{dummyUser.name}</h2>
            <p className="text-gray-500">@{dummyUser.username}</p>
          </div>

          {activeSection === "Dashboard" && (
            <>
              {/* About Me Section */}
              <section className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <h2 className="font-semibold text-3xl mb-3">About Me</h2>
                    <p className="text-gray-500">{dummyUser.bio}</p>
                    <div className="flex space-x-2 mt-2">
                      {dummyUser.skills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-200 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Portfolio Section */}
              <section className="mt-6">
                <h2 className="text-lg font-semibold">Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                  {dummyUser.portfolio.map((item, index) => (
                    <img key={index} src={item.image} className="rounded-lg shadow-md" />
                  ))}
                </div>
              </section>

              {/* Resume Section */}
              <section className="mt-6 bg-white p-4 rounded-lg shadow-md flex items-center">
                <HiDownload className="text-3xl" />
                <p className="ml-2">{dummyUser.resume}</p>
              </section>

              {/* Working History Section */}
              <section className="mt-6">
                <h2 className="text-lg font-semibold">Working History</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                  {dummyUser.workHistory.map((job, index) => (
                    <div key={index} className="p-4 bg-white shadow-md rounded-lg">
                      <h3 className="font-semibold">{job.title}</h3>
                      <p className="text-sm text-gray-500">{job.date}</p>
                      <p className="text-sm mt-1">"{job.feedback}"</p>
                      <p className="text-green-600 font-bold mt-2">${job.amount}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education Section */}
              <div className="mt-12">
                <h2 className="text-xl font-bold">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
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

              {/* Languages Section */}
              <div className="mt-12">
                <h2 className="text-xl font-bold">Languages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
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

              {/* Employment History Section */}
              <div className="mt-12 mb-10">
                <h2 className="text-xl font-bold">Employment History</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
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

              {/* Aadhar Verified Section */}
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
            </>
          )}

          {/* Other Sections (Settings, Terms & Conditions, Privacy Policy) */}
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

export default FreelanceProfile;
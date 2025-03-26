




// import React from "react";
// import { useLocation } from "react-router-dom";
// import NavbarComp from "./Navbar";
// import Slider from 'react-slick';
// import Footer from "./Footer";

// const ShowProfile = () => {
//   const location = useLocation();
//   const {
//     name = "User   Name",
//     rating = "N/A",
//     location: loc = "Unknown",
//     description = "No description available.",
//     skills = [],
//     ratePerHour = 0,
//     imageUrl = "https://via.placeholder.com/150",
//   } = location?.state || {};

//   // Fixed portfolio data with specific images
//   const portfolioData = [
//     { id: 5, image: "src/assets/Civilhubs/project2.jpg", alt: "Project 5" },
//     { id: 4, image: "src/assets/Civilhubs/construct3.png", alt: "Project 4" },
//     { id: 6, image: "src/assets/Civilhubs/construct3.png", alt: "Project 6" },
//   ];

//   // Sample combined data structure
//   const combinedData = [
//     {
//       type: "profile",
//       data: {
//         name: name,
//         description: description,
//         projects: portfolioData.length,
//         rating: rating,
//         experience: "5 yrs", // You can modify this as needed
//         profileImage: imageUrl
//       }
//     },
//     {
//       type: "portfolio",
//       data: portfolioData
//     },
//     {
//       type: "workingHistory",
//       data: [
//         {
//           id: 1,
//           title: "Draftsman, Drafter for 2nd Floor Plan",
//           rating: 4.5,
//           date: "Jun 17, 2024 - Jun 18, 2024",
//           feedback: "Prompt drawings and response from Shaazi. Happy with all work provided!",
//           price: "$5.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 2,
//           title: "Graphic Designer for Marketing Materials",
//           rating: 4.8,
//           date: "Jul 01, 2024 - Jul 05, 2024",
//           feedback: "Excellent design work and very responsive. Will hire again!",
//           price: "$150.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 3,
//           title: "Web Developer for E-commerce Site",
//           rating: 4.7,
//           date: "Jul 10, 2024 - Jul 15, 2024",
//           feedback: "Great work! Delivered on time and exceeded expectations.",
//           price: "$800.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 4,
//           title: "Content Writer for Blog Posts",
//           rating: 4.6,
//           date: "Jul 20, 2024 - Jul 25, 2024",
//           feedback: "Well-researched articles and engaging writing style.",
//           price: "$200.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 5,
//           title: "SEO Specialist for Website Optimization",
//           rating: 4.9,
//           date: "Aug 01, 2024 - Aug 05, 2024",
//           feedback: "Increased our traffic significantly. Highly recommend!",
//           price: "$300.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 6,
//           title: "Mobile App Developer for iOS App",
//           rating: 4.4,
//           date: "Aug 10, 2024 - Aug 15, 2024",
//           feedback: "Good communication and delivered a functional app.",
//           price: "$1,200.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 7,
//           title: "Video Editor for Promotional Video",
//           rating: 4.5,
//           date: "Aug 20, 2024 - Aug 25, 2024",
//           feedback: "Creative edits and quick turnaround. Very satisfied!",
//           price: "$400.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 8,
//           title: "Social Media Manager for Campaign",
//           rating: 4.6,
//           date: "Sep 01, 2024 - Sep 10, 2024",
//           feedback: "Increased our engagement and followers significantly.",
//           price: "$250.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 9,
//           title: "Virtual Assistant for Administrative Tasks",
//           rating: 4.3,
//           date: "Sep 15, 2024 - Sep 20, 2024",
//           feedback: "Very organized and efficient. Helped me a lot!",
//           price: "$100.00",
//           priceType: "Fixed Price"
//         },
        
//         // Add more working history items as needed...
//       ]
//     },
//     {
//       type: "education",
//       data: [
//         {
//           id: 1,
//           institution: "NED University of Engineering and Technology",
//           degree: "Master of Architecture (MArch), Architectural Engineering"
//         },
//         {
//           id: 1,
//           institution: "NED University of Engineering and Technology",
//           degree: "Master of Architecture (MArch), Architectural Engineering"
//         },
//         {
//           id: 1,
//           institution: "NED University of Engineering and Technology",
//           degree: "Master of Architecture (MArch), Architectural Engineering"
//         },
//         // Add more education items as needed...
//       ]
//     },
//     {
//       type: "languages",
//       data: [
//         { id: 1, language: "French - Basic" },
//         { id: 2, language: "Spanish - Intermediate" },
//         { id: 3, language: "English - Fluent" },
//       ]
//     },
//     {
//       type: "employmentHistory",
//       data: [
//         {
//           id: 1,
//           company: "XYZ Architectural Firm",
//           position: "Senior CAD Draftsman",
//           duration: "Jan 2020 - Present"
//         },
      
  
//         {
//           id: 1,
//           company: "XYZ Architectural Firm",
//           position: "Senior CAD Draftsman",
//           duration: "Jan 2020 - Present"
//         }
//         // Add more employment history items as needed...
//       ]
//     }
//   ];

//   // Extracting data from combinedData
//   const profileData = combinedData.find(item => item.type === "profile").data;
//   const workingHistoryData = combinedData.find(item => item.type === "workingHistory").data;
//   const educationData = combinedData.find(item => item.type === "education").data;
//   const languagesData = combinedData.find(item => item.type === "languages").data;
//   const employmentHistoryData = combinedData.find(item => item.type === "employmentHistory").data;

//   const aboutMeText = `
//     Are you looking for a skilled professional to bring your architectural visions to life? 
//     With extensive experience in CAD drafting and 3D design, I deliver precise and innovative 
//     solutions tailored to your needs.

//     What I Offer:
//     • Autodesk AutoCAD expertise for detailed and accurate designs.
//     • Proficiency in Architectural Design, from concept to execution.
//     • High-quality 2D Drafting, 2D Design & Drawings, and Floor Plan Design for residential, 
//       commercial, and industrial projects.
//     • Stunning Photorealistic Rendering.
//     • Specialized skills in Home Design, Space Planning, and Interior Design to create 
//       functional and aesthetically pleasing spaces.
//     • Expertise in Graphic Design for professional presentations and marketing materials.
//   `;


//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <NavbarComp />
//       <div className="bg-gray-100 min-h-screen">
//       <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Profile Section */}
//         <div className="md:col-span-2 bg-white rounded-lg shadow-md">
//           <div className="relative">
//             <img
//               src={profileData?.coverImage || "https://via.placeholder.com/600"}
//               alt="Cover Background"
//               className="w-full h-48 object-cover rounded-t-lg"
//             />
//             <div className="absolute -bottom-12 left-6">
//               <img
//                 src={profileData?.profileImage || "https://via.placeholder.com/150"}
//                 alt="Profile Picture"
//                 className="w-24 h-24 rounded-full border-4 border-white"
//               />
//             </div>
//           </div>
//           <div className="p-6 pt-16">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h1 className="text-2xl font-bold">{profileData?.name || "User Name"}</h1>
//                 <p className="text-gray-600">{profileData?.description || "No description available."}</p>
//                 <div className="mt-2 flex space-x-2">
//                   {profileData?.skills?.map((skill, index) => (
//                     <span key={index} className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
//                       {skill}
//                     </span>
//                   )) || []}
//                 </div>
//               </div>
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Hire Me</button>
//             </div>
//             <div className="mt-6">
//               <h2 className="text-xl font-semibold">About Me</h2>
//               <p className="mt-2 text-gray-700">{aboutMeText || "No additional information available."}</p>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div className="space-y-6">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">Portfolio</h3>
//             <div className="mt-2 grid grid-cols-2 gap-2">
//               {portfolioData?.map((item) => (
//                 <img key={item.id} src={item.image} alt={item.alt} className="w-full h-24 object-cover rounded-lg" />
//               )) || []}
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">Working History</h3>
//             {workingHistoryData?.map((item) => (
//               <div key={item.id} className="mt-2">
//                 <h4 className="font-bold">{item.title}</h4>
//                 <p className="text-gray-600">{item.date}</p>
//                 <p className="text-gray-700">"{item.feedback}"</p>
//               </div>
//             )) || []}
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">Education</h3>
//             {educationData?.map((item) => (
//               <p key={item.id} className="mt-2 text-gray-700">{item.institution} - {item.degree}</p>
//             )) || []}
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">Languages</h3>
//             <div className="mt-2 flex flex-wrap gap-2">
//               {languagesData?.map((item) => (
//                 <span key={item.id} className="bg-gray-200 px-2 py-1 rounded-full text-sm">{item.language}</span>
//               )) || []}
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">Employment History</h3>
//             {employmentHistoryData?.map((item) => (
//               <div key={item.id} className="mt-2">
//                 <h4 className="font-bold">{item.company}</h4>
//                 <p className="text-gray-600">{item.position} ({item.duration})</p>
//               </div>
//             )) || []}
//           </div>
//         </div>
//       </div>
//     </div>
//       <Footer/>
//     </>
//   );
// };

// export default ShowProfile;







// import React from "react";
// import { useLocation } from "react-router-dom";
// import NavbarComp from "./Navbar";
// import Slider from 'react-slick';
// import Footer from "./Footer";

// const ShowProfile = () => {
//   const location = useLocation();
//   const {
//     name = "User   Name",
//     rating = "N/A",
//     location: loc = "Unknown",
//     description = "No description available.",
//     skills = [],
//     ratePerHour = 0,
//     imageUrl = "https://via.placeholder.com/150",
//   } = location?.state || {};

//   // Fixed portfolio data with specific images
//   const portfolioData = [
//     { id: 5, image: "src/assets/Civilhubs/project2.jpg", alt: "Project 5" },
//     { id: 4, image: "src/assets/Civilhubs/construct3.png", alt: "Project 4" },
//     { id: 6, image: "src/assets/Civilhubs/construct3.png", alt: "Project 6" },
//   ];

//   // Sample combined data structure
//   const combinedData = [
//     {
//       type: "profile",
//       data: {
//         name: name,
//         description: description,
//         projects: portfolioData.length,
//         rating: rating,
//         experience: "5 yrs", // You can modify this as needed
//         profileImage: imageUrl
//       }
//     },
//     {
//       type: "portfolio",
//       data: portfolioData
//     },
//     {
//       type: "workingHistory",
//       data: [
//         {
//           id: 1,
//           title: "Draftsman, Drafter for 2nd Floor Plan",
//           rating: 4.5,
//           date: "Jun 17, 2024 - Jun 18, 2024",
//           feedback: "Prompt drawings and response from Shaazi. Happy with all work provided!",
//           price: "$5.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 2,
//           title: "Graphic Designer for Marketing Materials",
//           rating: 4.8,
//           date: "Jul 01, 2024 - Jul 05, 2024",
//           feedback: "Excellent design work and very responsive. Will hire again!",
//           price: "$150.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 3,
//           title: "Web Developer for E-commerce Site",
//           rating: 4.7,
//           date: "Jul 10, 2024 - Jul 15, 2024",
//           feedback: "Great work! Delivered on time and exceeded expectations.",
//           price: "$800.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 4,
//           title: "Content Writer for Blog Posts",
//           rating: 4.6,
//           date: "Jul 20, 2024 - Jul 25, 2024",
//           feedback: "Well-researched articles and engaging writing style.",
//           price: "$200.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 5,
//           title: "SEO Specialist for Website Optimization",
//           rating: 4.9,
//           date: "Aug 01, 2024 - Aug 05, 2024",
//           feedback: "Increased our traffic significantly. Highly recommend!",
//           price: "$300.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 6,
//           title: "Mobile App Developer for iOS App",
//           rating: 4.4,
//           date: "Aug 10, 2024 - Aug 15, 2024",
//           feedback: "Good communication and delivered a functional app.",
//           price: "$1,200.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 7,
//           title: "Video Editor for Promotional Video",
//           rating: 4.5,
//           date: "Aug 20, 2024 - Aug 25, 2024",
//           feedback: "Creative edits and quick turnaround. Very satisfied!",
//           price: "$400.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 8,
//           title: "Social Media Manager for Campaign",
//           rating: 4.6,
//           date: "Sep 01, 2024 - Sep 10, 2024",
//           feedback: "Increased our engagement and followers significantly.",
//           price: "$250.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 9,
//           title: "Virtual Assistant for Administrative Tasks",
//           rating: 4.3,
//           date: "Sep 15, 2024 - Sep 20, 2024",
//           feedback: "Very organized and efficient. Helped me a lot!",
//           price: "$100.00",
//           priceType: "Fixed Price"
//         },
        
//         // Add more working history items as needed...
//       ]
//     },
//     {
//       type: "education",
//       data: [
//         {
//           id: 1,
//           institution: "NED University of Engineering and Technology",
//           degree: "Master of Architecture (MArch), Architectural Engineering"
//         },
//         {
//           id: 1,
//           institution: "NED University of Engineering and Technology",
//           degree: "Master of Architecture (MArch), Architectural Engineering"
//         },
//         {
//           id: 1,
//           institution: "NED University of Engineering and Technology",
//           degree: "Master of Architecture (MArch), Architectural Engineering"
//         },
//         // Add more education items as needed...
//       ]
//     },
//     {
//       type: "languages",
//       data: [
//         { id: 1, language: "French - Basic" },
//         { id: 2, language: "Spanish - Intermediate" },
//         { id: 3, language: "English - Fluent" },
//       ]
//     },
//     {
//       type: "employmentHistory",
//       data: [
//         {
//           id: 1,
//           company: "XYZ Architectural Firm",
//           position: "Senior CAD Draftsman",
//           duration: "Jan 2020 - Present"
//         },
      
  
//         {
//           id: 1,
//           company: "XYZ Architectural Firm",
//           position: "Senior CAD Draftsman",
//           duration: "Jan 2020 - Present"
//         }
//         // Add more employment history items as needed...
//       ]
//     }
//   ];

//   // Extracting data from combinedData
//   const profileData = combinedData.find(item => item.type === "profile").data;
//   const workingHistoryData = combinedData.find(item => item.type === "workingHistory").data;
//   const educationData = combinedData.find(item => item.type === "education").data;
//   const languagesData = combinedData.find(item => item.type === "languages").data;
//   const employmentHistoryData = combinedData.find(item => item.type === "employmentHistory").data;

//   const aboutMeText = `
//     Are you looking for a skilled professional to bring your architectural visions to life? 
//     With extensive experience in CAD drafting and 3D design, I deliver precise and innovative 
//     solutions tailored to your needs.

//     What I Offer:
//     • Autodesk AutoCAD expertise for detailed and accurate designs.
//     • Proficiency in Architectural Design, from concept to execution.
//     • High-quality 2D Drafting, 2D Design & Drawings, and Floor Plan Design for residential, 
//       commercial, and industrial projects.
//     • Stunning Photorealistic Rendering.
//     • Specialized skills in Home Design, Space Planning, and Interior Design to create 
//       functional and aesthetically pleasing spaces.
//     • Expertise in Graphic Design for professional presentations and marketing materials.
//   `;


//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <NavbarComp />
//       <div className="bg-gray-50 ">
//         <div className="max-w-6xl mx-auto p-4">
//           {/* Profile Section */}
          
//           <div className="flex flex-col md:flex-row justify-between items-center xl:mt-10">
//             <div className="flex items-center space-x-4">
//               <img
//                 src={profileData.profileImage}
//                 alt="Profile picture of the designer"
//                 className="w-24 h-24 rounded-full"
//               />
//               <div >
//                 <h1 className="text-2xl  relative font-bold mt-5">{profileData.name}</h1>
//                 <p className="text-lg text-gray-600">{profileData.description}</p>
//                 <div className="mt-4">
//                   <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full mr-2">
//                     Follow
//                   </button>
//                   <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
//                     Hire Me
//                   </button>
//                 </div>
//               </div>
//             </div>
//             {/* Stats Section */}
//             <div className="flex justify-center mt-8 md:mt-0 space-x-8">
//               <div className="text-center">
//                 <p className="text-2xl font-bold">{profileData.projects}</p>
//                 <p className="text-gray-600">Projects</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-2xl font-bold">{profileData.rating}</p>
//                 <p className="text-gray-600">Rating</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-2xl font-bold">{profileData.experience}</p>
//                 <p className="text-gray-600">Experience</p>
//               </div>
//             </div>
//           </div>

//           {/* About Me Section */}
//           <div className="mt-12 p-4 bg-gray-50 rounded-lg ml-3 ">
//             <h2 className="text-xl font-bold">About Me</h2>
//             <p className="mt-2 text-gray-600">{aboutMeText}</p>
//           </div>
          
//           {/* Portfolio Section */}
//           <div className="mt-12 ml-5">
//       <h2 className="text-xl font-bold">Portfolio</h2>
//       <Slider {...settings}>
//         {portfolioData.map((item) => (
//           <div key={item.id} className="p-2">
//             <img
//               src={item.image}
//               alt={item.alt}
//               className="min-w-64 h-60 rounded-lg object-cover"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//           {/* Working History Section */}
//           <div className="mt-12 ml-5">
//             <h2 className="text-xl font-bold">Working History</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
//               {workingHistoryData.map((item) => (
//                 <div key={item.id} className="bg-white p-4 rounded-lg shadow">
//                   <h3 className="text-lg font-bold">{item.title}</h3>
//                   <div className="flex items-center mt-2">
//                     <i className="fas fa-star text-red-500"></i>
//                     <p className="ml-2">{item.rating}</p>
//                   </div>
//                   <p className="text-gray-600 mt-2">{item.date}</p>
//                   <p className="text-gray-600 mt-2">"{item.feedback}"</p>
//                   <div className="flex justify-between items-center mt-4">
//                     <p className="text-gray-800">{item.price}</p>
//                     <p className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
//                       {item.priceType}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* Education Section */}
//           <div className="mt-12 ml-3">
//             <h2 className="text-xl font-bold">Education</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//               {educationData.map((item) => (
//                 <div key={item.id} className="bg-white p-4 rounded-lg shadow">
//                   <div className="flex items-center">
//                     <i className="fas fa-graduation-cap text-blue-500"></i>
//                     <p className="ml-2 font-bold">{item.institution}</p>
//                   </div>
//                   <p className="text-gray-600 mt-2">{item.degree}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* Languages Section */}
//           <div className="mt-12 ml-3">
//             <h2 className="text-xl font-bold">Languages</h2>
//             <div className="flex flex-wrap gap-4 mt-4">
//               {languagesData.map((item) => (
//                 <div key={item.id} className="bg-white p-2 rounded-lg shadow flex items-center">
//                   <i className="fas fa-globe text-blue-500"></i>
//                   <p className="ml-2">{item.language}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* Employment History Section */}
//           <div className="mt-12 mb-10 ml-3">
//             <h2 className="text-xl font-bold">Employment History</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               {employmentHistoryData.map((item) => (
//                 <div key={item.id} className="bg-white p-4 rounded-lg shadow">
//                   <div className="flex items-center">
//                     <i className="fas fa-briefcase text-gray-500"></i>
//                     <p className="ml-2 font-bold">{item.company}</p>
//                   </div>
//                   <p className="text-gray-600 mt-2">{item.position}</p>
//                   <p className="text-gray-600 mt-2">{item.duration}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default ShowProfile;



// import React from 'react';
// // i want to use the use location hook because the data come to another location 
//  import { useLocation } from'react-router-dom';
//  const aboutMeText = `
//  Are you looking for a skilled professional to bring your architectural visions to life? 
//  With extensive experience in CAD drafting and 3D design, I deliver precise and innovative 
//  solutions tailored to your needs.

//  What I Offer:
//  • Autodesk AutoCAD expertise for detailed and accurate designs.
//  • Proficiency in Architectural Design, from concept to execution.
//  • High-quality 2D Drafting, 2D Design & Drawings, and Floor Plan Design for residential, 
//    commercial, and industrial projects.
//  • Stunning Photorealistic Rendering.
//  • Specialized skills in Home Design, Space Planning, and Interior Design to create 
//    functional and aesthetically pleasing spaces.
//  • Expertise in Graphic Design for professional presentations and marketing materials.
// `;


// //   // Sample combined data structure
//   const combinedData = [
//     {
//       type: "profile",
//       data: {
//         name: name,
//         description: description,
//         projects: portfolioData.length,
//         rating: rating,
//         experience: "5 yrs", // You can modify this as needed
//         profileImage: imageUrl
//       }
//     },
//     {
//       type: "portfolio",
//       data: portfolioData
//     },
//     {
//       type: "workingHistory",
//       data: [
//         {
//           id: 1,
//           title: "Draftsman, Drafter for 2nd Floor Plan",
//           rating: 4.5,
//           date: "Jun 17, 2024 - Jun 18, 2024",
//           feedback: "Prompt drawings and response from Shaazi. Happy with all work provided!",
//           price: "$5.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 2,
//           title: "Graphic Designer for Marketing Materials",
//           rating: 4.8,
//           date: "Jul 01, 2024 - Jul 05, 2024",
//           feedback: "Excellent design work and very responsive. Will hire again!",
//           price: "$150.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 3,
//           title: "Web Developer for E-commerce Site",
//           rating: 4.7,
//           date: "Jul 10, 2024 - Jul 15, 2024",
//           feedback: "Great work! Delivered on time and exceeded expectations.",
//           price: "$800.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 4,
//           title: "Content Writer for Blog Posts",
//           rating: 4.6,
//           date: "Jul 20, 2024 - Jul 25, 2024",
//           feedback: "Well-researched articles and engaging writing style.",
//           price: "$200.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 5,
//           title: "SEO Specialist for Website Optimization",
//           rating: 4.9,
//           date: "Aug 01, 2024 - Aug 05, 2024",
//           feedback: "Increased our traffic significantly. Highly recommend!",
//           price: "$300.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 6,
//           title: "Mobile App Developer for iOS App",
//           rating: 4.4,
//           date: "Aug 10, 2024 - Aug 15, 2024",
//           feedback: "Good communication and delivered a functional app.",
//           price: "$1,200.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 7,
//           title: "Video Editor for Promotional Video",
//           rating: 4.5,
//           date: "Aug 20, 2024 - Aug 25, 2024",
//           feedback: "Creative edits and quick turnaround. Very satisfied!",
//           price: "$400.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 8,
//           title: "Social Media Manager for Campaign",
//           rating: 4.6,
//           date: "Sep 01, 2024 - Sep 10, 2024",
//           feedback: "Increased our engagement and followers significantly.",
//           price: "$250.00",
//           priceType: "Fixed Price"
//         },
//         {
//           id: 9,
//           title: "Virtual Assistant for Administrative Tasks",
//           rating: 4.3,
//           date: "Sep 15, 2024 - Sep 20, 2024",
//           feedback: "Very organized and efficient. Helped me a lot!",
//           price: "$100.00",
//           priceType: "Fixed Price"
//         },
        
//         // Add more working history items as needed...
//       ]
//     },
//     {
//       type: "education",
//       data: [
//         {
//           id: 1,
//           institution: "NED University of Engineering and Technology",
//           degree: "Master of Architecture (MArch), Architectural Engineering"
//         },
//         {
//           id: 1,
//           institution: "NED University of Engineering and Technology",
//           degree: "Master of Architecture (MArch), Architectural Engineering"
//         },
//         {
//           id: 1,
//           institution: "NED University of Engineering and Technology",
//           degree: "Master of Architecture (MArch), Architectural Engineering"
//         },
//         // Add more education items as needed...
//       ]
//     },
//     {
//       type: "languages",
//       data: [
//         { id: 1, language: "French - Basic" },
//         { id: 2, language: "Spanish - Intermediate" },
//         { id: 3, language: "English - Fluent" },
//       ]
//     },
//     {
//       type: "employmentHistory",
//       data: [
//         {
//           id: 1,
//           company: "XYZ Architectural Firm",
//           position: "Senior CAD Draftsman",
//           duration: "Jan 2020 - Present"
//         },
      
  
//         {
//           id: 1,
//           company: "XYZ Architectural Firm",
//           position: "Senior CAD Draftsman",
//           duration: "Jan 2020 - Present"
//         }
//         // Add more employment history items as needed...
//       ]
//     }
//   ];
//     const ShowProfile = () => {
//       const location = useLocation();
//       const {
//         name = "User Name",
//         rating = "N/A",
//         location: loc = "Unknown",
//         description = "No description available.",
//         skills = [],
//         ratePerHour = 0,
//         imageUrl = "https://via.placeholder.com/150",
//         workingHistory = [],
//         education = [],
//         languages = [],
//         employmentHistory = []
//       } = location?.state || {};

//         // Extracting data from combinedData
//   const profileData = combinedData.find(item => item.type === "profile").data;
//   const workingHistoryData = combinedData.find(item => item.type === "workingHistory").data;
//   const educationData = combinedData.find(item => item.type === "education").data;
//   const languagesData = combinedData.find(item => item.type === "languages").data;
//   const employmentHistoryData = combinedData.find(item => item.type === "employmentHistory").data;
  
     
//       const portfolioData = [
//         { id: 5, image: "src/assets/Civilhubs/project2.jpg", alt: "Project 5" },
//         { id: 4, image: "src/assets/Civilhubs/construct3.png", alt: "Project 4" },
//         { id: 6, image: "src/assets/Civilhubs/construct3.png", alt: "Project 6" },
//       ];
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="md:col-span-2 bg-white rounded-lg shadow-md">
//           <div className="relative">
//             <img
//               src="https://storage.googleapis.com/a1aa/image/EgivPNxbIuGiw2qpShltEH8aSvleUAekv_K09XiuVYo.jpg"
//               alt="Abstract geometric background"
//               className="w-full h-48 object-cover rounded-t-lg"
//             />
//             <div className="absolute -bottom-12 left-6">
//               <img
//                  src={imageUrl}
//                 alt="Profile picture of Adrian Brewer"
//                 className="w-24 h-24 rounded-full border-4 border-white"
//               />
//             </div>
//           </div>
//           <div className="p-6 pt-16">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h1 className="text-2xl font-bold">{name}</h1>
//                 <p className="text-gray-600">{description}</p>
//                 <p className="text-gray-600">{loc}</p>
//                 <div className="mt-2 flex space-x-2">
//                   <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
//                     {skills
//                      .map((skill, index) => (
//                         <span key={index} className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
//                           {skill}
//                         </span>
//                       ))}
//                   </span>
                 
//                 </div>
//               </div>
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
//                 Hire me
//               </button>
//             </div>
//             <div className="mt-6">
//               <h2 className="text-xl font-semibold">About Me</h2>
//               <p className="mt-2 text-gray-700">
//                {aboutMeText}
//               </p>
//               <p className="mt-2 text-gray-700">
//                 Head of Design might be an overstatement, but as with many 20 people agencies I need
//                 to wear many different hats. I manage creative teams and set up processes that allow
//                 our collaborators and clients to achieve growth, scalability, and progress.
//               </p>
//               <p className="mt-2 text-gray-700">
//                 My design journey started in 2012, sitting across my brother in our home office on
//                 the island of Krk, Croatia. We designed our way across 99designs and later on to the
//                 Dribbble Top 20 teams in the world.
//               </p>
              
            
//             </div>

//             <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-lg font-semibold">Portfolio</h3>
//             <div className="mt-4 grid grid-cols-3 gap-2">
//               {portfolioData.map((item) => (
//                 <img key={item.id} src={item.image} alt={item.alt} className="w-full h-20 object-cover rounded-lg" />
//               ))}
//             </div>
//           </div>

//           <div className="mt-12 ml-5">
//             <h2 className="text-xl font-bold">Working History</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
//               {workingHistoryData.map((item) => (
//                 <div key={item.id} className="bg-white p-4 rounded-lg shadow">
//                   <h3 className="text-lg font-bold">{item.title}</h3>
//                   <div className="flex items-center mt-2">
//                     <i className="fas fa-star text-red-500"></i>
//                     <p className="ml-2">{item.rating}</p>
//                   </div>
//                   <p className="text-gray-600 mt-2">{item.date}</p>
//                   <p className="text-gray-600 mt-2">"{item.feedback}"</p>
//                   <div className="flex justify-between items-center mt-4">
//                     <p className="text-gray-800">{item.price}</p>
//                     <p className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
//                       {item.priceType}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//                 {/* Skill */}

//           <div className="mt-2 flex space-x-2">
//                   {skills?.map((skill, index) => (
//                     <span key={index} className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
//                       {skill}
//                     </span>
//                   )) || []}
//                 </div>


//           {/* Education Section */}
//           <div className="mt-12 ml-3">
//             <h2 className="text-xl font-bold">Education</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//               {educationData.map((item) => (
//                 <div key={item.id} className="bg-white p-4 rounded-lg shadow">
//                   <div className="flex items-center">
//                     <i className="fas fa-graduation-cap text-blue-500"></i>
//                     <p className="ml-2 font-bold">{item.institution}</p>
//                   </div>
//                   <p className="text-gray-600 mt-2">{item.degree}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//            {/* Employment History Section */}
//            <div className="mt-12 mb-10 ml-3">
//             <h2 className="text-xl font-bold">Employment History</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               {employmentHistoryData.map((item) => (
//                 <div key={item.id} className="bg-white p-4 rounded-lg shadow">
//                   <div className="flex items-center">
//                     <i className="fas fa-briefcase text-gray-500"></i>
//                     <p className="ml-2 font-bold">{item.company}</p>
//                   </div>
//                   <p className="text-gray-600 mt-2">{item.position}</p>
//                   <p className="text-gray-600 mt-2">{item.duration}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

        


//           </div>
//         </div>
//         <div className="space-y-6">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">Location</h3>
//             <p className="mt-2 text-gray-700">Kalkio Network</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">Connect</h3>
//             <div className="mt-2 space-y-2">
//               <a className="flex items-center text-blue-500" href="#">
//                 <i className="fas fa-globe mr-2"></i>
//                 about.me/adrianm
//               </a>
//               <a className="flex items-center text-blue-500" href="#">
//                 <i className="fab fa-facebook mr-2"></i>
//                 Facebook
//               </a>
//               <a className="flex items-center text-blue-500" href="#">
//                 <i className="fab fa-instagram mr-2"></i>
//                 Instagram
//               </a>
//             </div>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">Similar profiles</h3>
//             <div className="mt-2 space-y-2">
//               <div className="flex items-center">
//                 <img
//                   src="https://storage.googleapis.com/a1aa/image/f2hFdSk3NsDKhNQ6Zx7uuJfoQfgdNXx8Arg1pr01u_s.jpg"
//                   alt="Profile picture of Vicente Reyes"
//                   className="w-10 h-10 rounded-full"
//                 />
//                 <div className="ml-3">
//                   <p className="text-gray-800">Vicente Reyes</p>
//                   <p className="text-gray-600 text-sm">Industry</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <img
//                   src="https://storage.googleapis.com/a1aa/image/0vSwIGVKVj_mQ1cFOU4Qys1-C6rF35eKQfXlgC_RBkU.jpg"
//                   alt="Profile picture of Marc Brooks"
//                   className="w-10 h-10 rounded-full"
//                 />
//                 <div className="ml-3">
//                   <p className="text-gray-800">Marc Brooks</p>
//                   <p className="text-gray-600 text-sm">Industry</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <img
//                   src="https://storage.googleapis.com/a1aa/image/LRDBm_7Amhm_oagOOt51FPL2_eeqMEr8D_CodpDj5xA.jpg"
//                   alt="Profile picture of Ronald Bailey"
//                   className="w-10 h-10 rounded-full"
//                 />
//                 <div className="ml-3">
//                   <p className="text-gray-800">Ronald Bailey</p>
//                   <p className="text-gray-600 text-sm">Industry</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <img
//                   src="https://storage.googleapis.com/a1aa/image/BEB1kP11VJXygjD9r4TWYWo_BOQetNpKfyO6YQ-sNvE.jpg"
//                   alt="Profile picture of Fannie Waters"
//                   className="w-10 h-10 rounded-full"
//                 />
//                 <div className="ml-3">
//                   <p className="text-gray-800">Fannie Waters</p>
//                   <p className="text-gray-600 text-sm">Industry</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShowProfile;





















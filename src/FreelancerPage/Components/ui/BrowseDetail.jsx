

const dummyData = [
  {
    title: "Civil Engineer",
    salary: "₹30,000 - 50,000/month",
    company: "ABC Construction Ltd.",
    location: "Indore, Madhya Pradesh",
    experience: "2 - 5 years Experience in Civil Engineering",
    highlights: [
      "B.E/B.Tech in Civil Engineering",
      "All genders",
      "09:00 AM - 06:00 PM | 5 days working"
    ],
    description: [
      "Design and oversee construction projects.",
      "Ensure compliance with safety regulations.",
      "Prepare reports and documentation."
    ],
    contactPerson: "Ravi Sharma",
    interviewAddress: "XYZ Building, Indore",
    postedAgo: "Posted 1 week ago",
    image: "/assets/Civilhubs/cat1.png",
  },
  {
    title: "Structural Engineer",
    salary: "₹40,000 - 60,000/month",
    company: "XYZ Infra Pvt. Ltd.",
    location: "Mumbai, Maharashtra",
    experience: "3 - 6 years Experience in Structural Engineering",
    highlights: [
      "M.Tech in Structural Engineering",
      "Male/Female candidates",
      "10:00 AM - 07:00 PM | 6 days working"
    ],
    description: [
      "Analyze and design structural components.",
      "Ensure strength and durability of structures.",
      "Collaborate with architects and contractors."
    ],
    contactPerson: "Amit Verma",
    interviewAddress: "ABC Tower, Mumbai",
    postedAgo: "Posted 2 days ago",
    image: "/assets/Civilhubs/cat2.png",
  },
  {
    title: "Site Engineer",
    salary: "₹25,000 - 45,000/month",
    company: "BuildWell Constructions",
    location: "Delhi",
    experience: "2 - 4 years Experience in Site Management",
    highlights: [
      "Diploma/B.E. in Civil Engineering",
      "Open to all genders",
      "08:00 AM - 05:00 PM | 6 days working"
    ],
    description: [
      "Supervise construction activities on-site.",
      "Manage labor and resources efficiently.",
      "Ensure project completion within deadlines."
    ],
    contactPerson: "Rajesh Kumar",
    interviewAddress: "Sector 21, Noida",
    postedAgo: "Posted 3 days ago",
    image: "/assets/Civilhubs/cat3.png",
  },
  {
    title: "Project Manager - Civil",
    salary: "₹50,000 - 80,000/month",
    company: "Mega Projects Ltd.",
    location: "Bangalore, Karnataka",
    experience: "6+ years Experience in Project Management",
    highlights: [
      "B.Tech/M.Tech in Civil Engineering",
      "Only experienced candidates",
      "Flexible working hours"
    ],
    description: [
      "Lead and manage large-scale projects.",
      "Coordinate between teams and stakeholders.",
      "Ensure quality and budget control."
    ],
    contactPerson: "Anil Sharma",
    interviewAddress: "MG Road, Bangalore",
    postedAgo: "Posted 5 days ago",
    image: "https://source.unsplash.com/400x300/?civil,project"
  },
  {
    title: "Construction Supervisor",
    salary: "₹20,000 - 35,000/month",
    company: "FastTrack Builders",
    location: "Hyderabad, Telangana",
    experience: "3 - 5 years Experience in Construction Supervision",
    highlights: [
      "Diploma in Civil Engineering",
      "Male candidates preferred",
      "07:00 AM - 04:00 PM | 6 days working"
    ],
    description: [
      "Supervise construction sites and workers.",
      "Monitor safety and quality standards.",
      "Report progress to project managers."
    ],
    contactPerson: "Vikram Rao",
    interviewAddress: "Gachibowli, Hyderabad",
    postedAgo: "Posted 1 week ago",
    image: "https://source.unsplash.com/400x300/?construction,supervisor"
  },
  {
    title: "Quantity Surveyor",
    salary: "₹35,000 - 55,000/month",
    company: "Precision Infra Pvt. Ltd.",
    location: "Pune, Maharashtra",
    experience: "4 - 7 years Experience in Cost Estimation",
    highlights: [
      "B.E/B.Tech in Civil Engineering",
      "Male/Female candidates",
      "10:00 AM - 06:00 PM | 5 days working"
    ],
    description: [
      "Estimate costs and manage budgets.",
      "Prepare project reports and documentation.",
      "Coordinate with suppliers and vendors."
    ],
    contactPerson: "Sandeep Joshi",
    interviewAddress: "Shivaji Nagar, Pune",
    postedAgo: "Posted 2 weeks ago",
    image: "https://source.unsplash.com/400x300/?blueprint,architecture"
  },
  {
    title: "Architectural Draftsman",
    salary: "₹28,000 - 45,000/month",
    company: "DesignTech Solutions",
    location: "Chennai, Tamil Nadu",
    experience: "2 - 5 years Experience in Drafting",
    highlights: [
      "Diploma in Architecture",
      "Open to all genders",
      "09:00 AM - 06:00 PM | 5 days working"
    ],
    description: [
      "Prepare detailed architectural drawings.",
      "Collaborate with engineers and designers.",
      "Ensure adherence to building codes."
    ],
    contactPerson: "Naveen Kumar",
    interviewAddress: "T. Nagar, Chennai",
    postedAgo: "Posted 1 day ago",
    image: "https://source.unsplash.com/400x300/?architect,design"
  },
  {
    title: "Construction Safety Officer",
    salary: "₹30,000 - 50,000/month",
    company: "SafeBuild Pvt. Ltd.",
    location: "Kolkata, West Bengal",
    experience: "3 - 6 years Experience in Construction Safety",
    highlights: [
      "Certification in Safety Management",
      "Male candidates preferred",
      "08:00 AM - 05:00 PM | 6 days working"
    ],
    description: [
      "Ensure safety protocols on construction sites.",
      "Conduct training sessions for workers.",
      "Report and investigate safety incidents."
    ],
    contactPerson: "Prakash Sen",
    interviewAddress: "Salt Lake, Kolkata",
    postedAgo: "Posted 4 days ago",
    image: "https://source.unsplash.com/400x300/?safety,helmet"
  },
  {
    title: "Highway Engineer",
    salary: "₹45,000 - 70,000/month",
    company: "InfraTech Solutions",
    location: "Ahmedabad, Gujarat",
    experience: "5+ years Experience in Road Construction",
    highlights: [
      "B.E/B.Tech in Civil Engineering",
      "Open to all genders",
      "09:00 AM - 06:00 PM | 5 days working"
    ],
    description: [
      "Design and oversee road construction projects.",
      "Coordinate with government authorities.",
      "Ensure quality and safety standards."
    ],
    contactPerson: "Deepak Mehta",
    interviewAddress: "SG Highway, Ahmedabad",
    postedAgo: "Posted 3 weeks ago",
    image: "/assets/Civilhubs/const.jpg",
  },
  {
    title: "Urban Planner",
    salary: "₹50,000 - 90,000/month",
    company: "SmartCity Developers",
    location: "Jaipur, Rajasthan",
    experience: "6+ years Experience in Urban Planning",
    highlights: [
      "Master's in Urban Planning",
      "Male/Female candidates",
      "Flexible working hours"
    ],
    description: [
      "Develop urban infrastructure plans.",
      "Ensure sustainable city growth.",
      "Collaborate with government and private sectors."
    ],
    contactPerson: "Ramesh Sinha",
    interviewAddress: "MI Road, Jaipur",
    postedAgo: "Posted 5 weeks ago",
    image: "https://source.unsplash.com/400x300/?city,urbanplanning"
  }
];






import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaEnvelopeOpenText, FaGraduationCap, FaRegBuilding } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { CiLocationOn } from "react-icons/ci";
import Footer from "../shared/Footer";

const BrowsDetail = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [fixedRate, setFixedRate] = useState("");
  const location = useLocation();
  const [job, setJob] = useState(location.state?.job); // Initialize job state

  // Default job data
  const defaultJob = {
    title: "Default Job Title",
    salary: "₹20,000 - 30,000/month",
    company: "Default Company",
    location: "Default Location",
    experience: "0 - 1 years Experience",
    highlights: ["Default Highlight 1", "Default Highlight 2"],
    description: ["Default job description."],
    contactPerson: "Default Contact",
    interviewAddress: "Default Address",
    postedAgo: "Posted just now",
    image: "https://source.unsplash.com/400x300/?default,job"
  };

  // Use default job if no job data is available
  const currentJob = job || defaultJob;


  const [similarJobs, setSimilarJobs] = useState([]);

  const handleSubmitProposal = () => {
    console.log({ coverLetter, attachment, fixedRate });
    setShowPopover(false);
  };

  const handleApplyClick = () => {
    setShowPopover(true);
  };

  useEffect(() => {
    // Logic to find similar jobs
    const Similar = dummyData.filter((j) => {
      return (
        j.title.toLowerCase() !== currentJob.title.toLowerCase() ||
        (j.title.toLowerCase().includes(currentJob.title.toLowerCase()) ||
          j.location.toLowerCase().includes(currentJob.location.toLowerCase()))
      );
    });

    setSimilarJobs(Similar);
  }, [currentJob]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-full mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-3/4 w-full max-w-5xl mx-auto mt-12 bg-gray-100 shadow-xl rounded-lg p-6 md:p-10 sm:mx-4 mb-3">
          {/* Header Section */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end bg-gradient-to-r from-teal-500 to-teal-500 p-4 rounded-lg text-white">
            <div className="flex-1">
              <img className="filter hue-rotate-[220deg] w-16 h-16 md:w-20 md:h-20" src="https://www.jobhai.com/static/topMatch.svg" alt="" />
              <h2 className="text-xl md:text-2xl font-semibold mt-1">{currentJob.title}</h2>
              <p className="text-xs font-bold">{currentJob.salary}</p>
              <div className="text-sm mt-4">
                <p className="flex items-center gap-3"><FaRegBuilding className="text-white text-sm" /> {currentJob.company}</p>
                <p className="flex items-center gap-3"><CiLocationOn className="text-white text-sm" /> {currentJob.location}</p>
                <p className="flex items-center gap-3"><FaGraduationCap className="text-white text-sm" /> {currentJob.experience}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:w-full md:w-auto">
              <button
                className="px-4 py-3 bg-gradient-to-r from-teal-400 to-blue-500 shadow-md text-white rounded-full text-sm w-full md:w-auto"
                onClick={handleApplyClick}
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* Skills & Expertise */}
          <h3 className="font-bold text-sm mt-2">Skills & Expertise</h3>
          <div className="mt-2 flex flex-wrap space-x-2">
            <span className="px-2 py-1 bg-white text-teal-500 border border-teal-500 rounded-full text-sm cursor-pointer hover:bg-teal-500 hover:text-white transition">
              Default Skill 1
            </span>
            <span className="px-2 py-1 bg-white text-teal-500 border border-teal-500 rounded-full text-sm cursor-pointer hover:bg-teal-500 hover:text-white transition">
              Default Skill 2
            </span>
          </div>

          {/* Popover */}
          {showPopover && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white w-11/12 sm:w-1/2 h-2/3 p-5 rounded-lg shadow-lg overflow-auto">
                <h2 className="font-bold text-lg mb-4">Submit Proposal</h2>
                <label className="block mb-2">Cover Letter</label>
                <textarea
                  rows="4"
                  className="border rounded w-full p-2"
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                />
                <label className="block mt-4">Attachment</label>
                <input
                  type="file"
                  className="border p-2 w-full"
                  onChange={(e) => setAttachment(e.target.files[0])}
                />
                <label className="block mt-4">Fixed Rate</label>
                <input
                  type="text"
                  className="border rounded w-full p-2"
                  placeholder="e.g. 1500"
                  value={fixedRate}
                  onChange={(e) => setFixedRate(e.target.value)}
                />
                <div className="flex justify-between mt-4">
                  <button onClick={() => setShowPopover(false)} className="bg-gray-300 text-gray-600 py-2 px-4 rounded">
                    Cancel
                  </button>
                  <button className="bg-teal-500 text-white py-2 px-4 rounded" onClick={handleSubmitProposal}>
                    Submit Proposal
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Job Highlights */}
          <div className="bg-blue-50 p-4 rounded-lg mt-4 w-full">
            <h3 className="font-bold text-sm">Job Highlights</h3>
            <ul className="text-gray-700 mt-2">
              {Array.isArray(currentJob.highlights) && currentJob.highlights.length > 0 ? (
                currentJob.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-blue-500 mr-2" /> {highlight}
                  </li>
                ))
              ) : (
                <li>No highlights available.</li>
              )}
            </ul>
          </div>

          {/* Job Description */}
          <div className="mt-6 p-5 bg-white shadow-lg rounded-2xl border border-gray-200">
            <h3 className="font-bold text-lg text-gray-800 border-b pb-2 mb-3">📄 Job Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {currentJob.description ? currentJob.description : "No description available."}
            </p>
          </div>

          {/* Contact Person and Interview Address */}
          <div className="mt-4 p-4 border rounded-lg">
            <h3 className="font-bold text-sm">Contact Person</h3>
            <p className="text-gray-700">{currentJob.contactPerson || "No contact person available."}</p>
            <h3 className="font-bold text-sm mt-2">Interview Address</h3>
            <p className="text-gray-700">{currentJob.interviewAddress || "No interview address available."}</p>
            <p className="text-gray-400 text-sm mt-1">{currentJob.postedAgo || "Posted time not available."}</p>
          </div>

          {/* Report Issue */}
          <div className="text-gray-500 text-sm mt-2 flex items-center">⚠️ Report issue</div>

          {/* Share with a Friend */}
          <div className="mt-6 bg-gray-100 p-4 rounded-lg flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-gray-700">Have a friend who'll be good for this job ?</p>
            <button className="bg-gradient-to-r from-teal-500 to-teal-400 shadow-md text-white flex items-center px-4 py-2 rounded-lg w-full md:w-auto">
              📲 Share with a friend
            </button>
          </div>
        </div>

        {/* Similar Jobs Section */}
        <div className="lg:w-1/4 lg:ml-4 bg-gray-100 shadow-lg mb-[46px] rounded-lg w-full sm:w-full md:w-96 sm:relative xl:absolute sm:top-28 sm:right-12 sm:mr-30">
     <div className="flex flex-col sm:flex-row items-start gap-4">
      <div className="flex-1">
      <p className="font-semibold p-4 mt-2">Similar Jobs</p>
      <div className="max-h-[50rem] overflow-y-auto hide-scrollbar"> {/* Hide scrollbar */}
        {similarJobs.length > 0 ? (
          <ul className="text-sm">
            {similarJobs.slice(0, 3).map((similarJob, index) => (
              <li key={index} className="p-2 rounded-md shadow-sm mb-2 w-full" onClick={() => handleSimilarJobClick(similarJob)}>
                <div className="relative p-4 bg-white mx-2 border border-gray-200 rounded-lg shadow-sm flex flex-col space-y-3 cursor-pointer">
                  <div className="flex items-center gap-3 rounded-full">
                    <img src={similarJob.image} alt="Company Logo" className="w-14 h-14 rounded-full" />
                    <div>
                      <h2 className="text-md font-bold">{similarJob.title}</h2>
                      <p className="text-gray-500 text-sm font-semibold">{similarJob.salary}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{similarJob.description.join(", ")}</p>
                  <div className="text-gray-500 text-sm flex flex-col gap-1">
                    <p className="flex items-center gap-2"><FaRegBuilding className="text-blue-500" /> {similarJob.company}</p>
                    <p className="flex items-center gap-2"><CiLocationOn className="text-blue-500" /> {similarJob.location}</p>
                    <p className="flex items-center gap-2"><FaGraduationCap className="text-blue-500" /> {similarJob.experience}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-2">No similar jobs found.</p>
        )}
      </div>
    </div>
  </div>
</div>
      </div>
      <Footer />
    </>
  );
};

export default BrowsDetail;
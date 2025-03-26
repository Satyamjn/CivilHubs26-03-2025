import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const Bids = () => {
    const location = useLocation();
    const project = location.state?.project; // Get the project data from the location state
    const [showPopover, setShowPopover] = useState(false); // State to manage popover visibility

    // Example similar projects data
    const similarProjects = [
        {
            title: "Green Building Initiative",
            date: "2023-05-10",
            cost: "2,000,000",
            description: "A project focused on creating eco-friendly buildings.",
            company: "GreenBuild Corp",
            image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
        },
        {
            title: "Smart City Development",
            date: "2023-06-15",
            cost: "3,500,000",
            description: "A project aimed at developing smart infrastructure.",
            company: "UrbanTech",
            image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
        },
        {
            title: "Sustainable Housing Project",
            date: "2023-07-20",
            cost: "1,500,000",
            description: "A project focused on affordable and sustainable housing.",
            company: "EcoHomes",
            image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664"
        }
    ];

    // Additional project details
    const additionalDetails = {
        estimatedTime: "6 weeks",
        experienceLevel: "Intermediate",
        skillsRequired: [
            "Structural Engineering",
            "AutoCAD, Revit, or STAAD Pro",
            "Load Analysis",
            "Building Codes & Compliance",
            "Construction Documentation"
        ],
        contactInfo: {
            email: "contact@engtec.com",
            phone: "+91 12345 67890"
        }
    };

    // Example project milestones
    const projectMilestones = [
        { milestone: "Initial Design & Draft", date: "2025-04-15" },
        { milestone: "Structural Analysis & Evaluation", date: "2025-05-01" },
        { milestone: "Final Review & Approval", date: "2025-05-20" },
        { milestone: "Project Completion", date: "2025-06-10" }
    ];

    // Example client reviews
    const clientReviews = [
        {
            reviewer: "John Doe",
            rating: 4.8,
            comment: "Great collaboration and professional approach to the project."
        },
        {
            reviewer: "Jane Smith",
            rating: 4.5,
            comment: "Delivered quality work ahead of schedule. Highly recommended!"
        }
    ];

    const togglePopover = () => {
        setShowPopover(!showPopover);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-full min-h-80 mx-auto">
                {/* Main Card */}
                <div className="p-6 w-full lg:w-3/4">
                    {project ? (
                        <>
                            <h2 className="text-xl font-semibold">{project.title}</h2>
                            <p className="text-gray-500 text-sm mt-1">Posted on {project.date}</p>
                            <p className="mt-4 text-gray-700">{project.description}</p>

                            <div className="mt-6 border-t pt-4 flex flex-col lg:flex-row justify-between">
                                <div className="w-full lg:w-1/2">
                                    <div className="mb-4">
                                        <p className="text-gray-600">Estimated Cost</p>
                                        <p className="font-semibold">₹{project.cost}</p>
                                    </div>
                                    <div className="mb-4">
                                        <p className="text-gray-600">Company</p>
                                        <p className="font-semibold">{project.company}</p>
                                    </div>
                                    <div className="mb-4">
                                        <p className="text-gray-600">Estimated Time</p>
                                        <p className="font-semibold">{additionalDetails.estimatedTime}</p>
                                    </div>
                                    <div className="mb-4">
                                        <p className="text-gray-600">Experience Level</p>
                                        <p className="font-semibold">{additionalDetails.experienceLevel}</p>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 border-l pl-4 lg:pl-6 mt-4 lg:mt-0">
                                    <p className="font-semibold">Skills Required</p>
                                    <ul className="list-disc list-inside mt-2">
                                        {additionalDetails.skillsRequired.map((skill, index) => (
                                            <li key={index} className="text-gray-600">{skill}</li>
                                        ))}
                                    </ul>
                                    <button
                                onClick={togglePopover}
                                className="mt-6 w-full lg:w-[200px] justify-center mx-auto items-center flex bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
                            >
                                Apply Now
                            </button>
                                </div>
                                
                            </div>

                            <div className="mt-6 border-t pt-4">
                                <p className="text-gray-600">Contact Information</p>
                                <p className="font-semibold">Email: {additionalDetails.contactInfo.email}</p>
                                <p className="font-semibold">Phone: {additionalDetails.contactInfo.phone}</p>
                            </div>

                          

                            {/* Project Milestones Section */}
                            <div className="mt-8 p-6 bg-white shadow-md rounded-2xl border">
                                <h3 className="text-lg font-semibold mb-4">Project Milestones</h3>
                                <ul className="list-disc list-inside space-y-3">
                                    {projectMilestones.map((milestone, index) => (
                                        <li key={index} className="text-gray-700">
                                            <strong>{milestone.milestone}</strong> - {milestone.date}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Client Reviews Section */}
                            <div className="mt-8 p-6 bg-white shadow-md rounded-2xl border">
                                <h3 className="text-lg font-semibold mb-4">Client Reviews & Ratings</h3>
                                <div className="space-y-4">
                                    {clientReviews.map((review, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-50 p-4 rounded-lg border shadow-sm"
                                        >
                                            <p className="font-semibold text-gray-800">{review.reviewer}</p>
                                            <p className="text-sm text-gray-600">Rating: ⭐ {review.rating}/5</p>
                                            <p className="text-gray-700 mt-2">{review.comment}</p>
                                        </div>
                                    ))}
                                </div>
                              
                            </div>
                            
                        </>
                    ) : (
                        <p className="text-red-500">No project data available.</p>
                    )}
                </div>

                {/* Sidebar for Similar Projects */}
                <div className="lg:w-1/4 lg:ml-4">
                    <div className="bg-white rounded-2xl p-6 shadow-xl border">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6">Similar Projects</h2>
                        {similarProjects.map((similarProject, index) => (
                            <div key={index} className="bg-white rounded-2xl p-4 mb-4 shadow-md border">
                                <img
                                    src={similarProject.image}
                                    alt={similarProject.title}
                                    className="w-full h-32 object-cover rounded-md mb-2"
                                />
                                <h3 className="text-lg font-semibold text-gray-800">{similarProject.title}</h3>
                                <p className="text-sm text-gray-600">Budget: ₹{similarProject.cost}</p>
                                <p className="text-sm text-gray-600">Date: {similarProject.date}</p>
                                <p className="text-sm text-gray-600 mb-2">{similarProject.description}</p>
                                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                                    View Project
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />

            {/* Popover for Apply Now */}
            {showPopover && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
                        <h2 className="text-lg font-semibold mb-4">Apply for {project?.title}</h2>
                        <label className="block mb-2">Cover Letter</label>
                        <textarea
                            className="w-full p-2 border rounded-md mb-4"
                            rows="4"
                            placeholder="Write your cover letter..."
                        ></textarea>

                        <label className="block mb-2">Attachment</label>
                        <input type="file" className="w-full mb-4" />

                        <label className="block mb-2">Fixed Rate</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-md mb-4"
                            placeholder="Enter your bid amount"
                        />

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={togglePopover}
                                className="px-4 py-2 bg-gray-300 rounded-md"
                            >
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Bids;

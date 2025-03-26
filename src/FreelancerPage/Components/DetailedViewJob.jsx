import { FaRegClock, FaRupeeSign, FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function DetailedViewJob() {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center p-4 bg-white min-h-screen">
      <div className="bg-white p-6 rounded-lg w-full">
        <button className="flex items-center mb-2" onClick={() => navigate("/recommendedJobs")}>
          <IoArrowBack className="text-gray-700 text-xl cursor-pointer mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">Job Details</h2>
        </button>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Structural Design for a Commercial Building
          </h2>
          <button onClick={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? (
              <FaHeart className="text-red-500 text-xl cursor-pointer" />
            ) : (
              <FaRegHeart className="text-gray-500 text-xl cursor-pointer hover:text-red-500" />
            )}
          </button>
        </div>
        <p className="text-gray-500 text-sm mb-4">Posted • 2 hours ago</p>

        <div className="flex items-center text-gray-700 mb-4">
          <IoLocationOutline className="text-lg mr-2" />
          <span>India</span>
        </div>

        <p className="text-gray-700 mb-4">
          We are looking for a civil/structural engineer to design a commercial
          building, ensuring compliance with local regulations and safety
          standards. The project includes foundation design, structural
          analysis, and detailed drawings for construction. Experience with
          steel and concrete structures is required.
        </p>

        <div className="flex items-center text-gray-700 mb-2">
          <FaRegClock className="text-lg mr-2" />
          <span>6 weeks</span>
        </div>

        <div className="flex items-center text-gray-700 mb-2">
          <MdOutlineWorkOutline className="text-lg mr-2" />
          <span>Intermediate</span>
        </div>

        <div className="flex items-center text-gray-700 mb-4">
          <FaRupeeSign className="text-lg mr-2" />
          <span>₹3,500 - ₹5,000</span>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Skills & Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {["Structural Engineering", "AutoCAD, Revit, or STAAD Pro", "Load Analysis", "Building Codes & Compliance", "Construction Documentation"].map((skill) => (
              <span
                key={skill}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-4">Total Proposals • Less than 5</p>

        <button onClick={() => navigate("/submitproposal")} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" >
          Apply Now
        </button>
      </div>
    </div>
  );
}

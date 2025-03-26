import React from 'react';
import NavbarComp from '../Components/Navbar';
import { FaLocationDot } from 'react-icons/fa6';
import Footer from '../Components/Footer';

const ViewProposals = () => {
  return (
    <>
      <NavbarComp />
      <div className="p-6 max-w-full mx-auto">
        <div className="p-4 rounded-lg flex gap-4">
          {/* Main Card: Structural Analysis & Design for Residential Building */}
          <div className="w-2/3 border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">
              Structural Analysis & Design for Residential Building
            </h2>
            <span className="flex items-center gap-1">
              <FaLocationDot /> Indore, MP
            </span>
            <p className="mt-2 text-gray-700">
              I am pleased to submit my proposal for the structural design of
              your commercial building project. With extensive experience in
              structural engineering and commercial construction, I am confident
              in my ability to provide a safe, efficient, and cost-effective
              design that aligns with your project goals.
            </p>

            {/* Expertise Section */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">My Expertise Includes:</h3>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>
                  <strong>Comprehensive Structural Analysis:</strong> Ensuring
                  stability and compliance with local building codes.
                </li>
                <li>
                  <strong>Innovative and Sustainable Design:</strong> Utilizing
                  modern engineering solutions to enhance durability and efficiency.
                </li>
                <li>
                  <strong>Collaboration with Stakeholders:</strong> Working closely
                  with architects, contractors, and project managers to deliver a
                  seamless construction process.
                </li>
              </ul>
            </div>

            {/* Skills & Expertise Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="border px-3 py-1 rounded-full bg-gray-200 text-sm">
                  Structural Engineering
                </span>
                <span className="border px-3 py-1 rounded-full bg-gray-200 text-sm">
                  AutoCAD, Revit, or STAAD Pro
                </span>
                <span className="border px-3 py-1 rounded-full bg-gray-200 text-sm">
                  Load Analysis
                </span>
                <span className="border px-3 py-1 rounded-full bg-gray-200 text-sm">
                  Building Codes & Compliance
                </span>
                <span className="border px-3 py-1 rounded-full bg-gray-200 text-sm">
                  Construction Documentation
                </span>
              </div>
            </div>

           
            <p className="mt-4 text-gray-700">
              I understand the importance of delivering a design that not only
              meets regulatory standards but also optimizes material usage and
              construction efficiency. My approach will focus on achieving
              structural integrity while maintaining cost-effectiveness and
              functionality.
            </p>


             {/* Cover Letter Section */}
             <div className="mt-6 border p-4 rounded-lg shadow-md bg-gray-100">
              <h3 className="text-lg font-semibold">Cover Letter</h3>
              <p className="mt-2 text-gray-700">
                Dear <strong>[Client's Name]</strong>,
              </p>
              <p className="mt-2 text-gray-700">
                I am excited to submit my proposal for the Structural Design for
                a Commercial Building project. With <strong>[X]</strong> years of
                experience in structural engineering, I have successfully designed
                and managed projects that meet industry standards while ensuring
                cost efficiency and safety compliance.
              </p>

              <h4 className="mt-4 text-lg font-semibold">My Expertise Includes:</h4>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>✅ Structural analysis & load calculations for commercial buildings</li>
                <li>✅ Proficiency in AutoCAD, Revit, STAAD Pro for accurate designs</li>
                <li>✅ Compliance with local building codes & safety regulations</li>
                <li>✅ Efficient foundation design & material optimization</li>
              </ul>

              <p className="mt-4 text-gray-700">
                I understand that precision and adherence to deadlines are crucial
                for this project. My approach will involve detailed planning,
                innovative solutions, and transparent communication to deliver
                high-quality structural designs tailored to your requirements.
              </p>

              <p className="mt-4 text-gray-700">
                I would love to discuss your project in detail and how I can
                contribute effectively. Please find my attached portfolio for
                relevant work samples. Looking forward to your response.
              </p>

              <p className="mt-4 text-gray-700">
                Best regards,<br />
                <strong>[Your Name]</strong><br />
                <strong>[Your Contact Information]</strong><br />
                <strong>[Your Portfolio/Website (if any)]</strong>
              </p>
            </div>

          </div>

          {/* Your Proposed Term Section */}
          <div className="w-1/3 border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Your Proposed Term</h2>
            <p className="mt-2 text-gray-600">
              <strong>Client budget:</strong>₹2500
            </p>
            <p className="mt-2 text-gray-600">
              <strong>Submission Date:</strong> Feb 28, 2025
            </p>
            <p className="mt-2 text-gray-600">
              <strong>Proposal:</strong> Comprehensive structural analysis, design
              solutions, and stakeholder collaboration.
            </p>
            <h2 className="text-xl font-semibold">Your Proposal</h2>
            <p className="mt-2 text-gray-600">
              <strong>Total Price of Project:</strong>₹2500
            </p>
            {/* Pending Button */}
<button
  className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg shadow-md"
>
  Pending
</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ViewProposals;

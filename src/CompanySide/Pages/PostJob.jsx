



import React, { useState } from 'react';
import NavbarComp from '../Components/Navbar';

const PostJob = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    projectName: '',
    projectCategory: '',
    projectDescription: '',
    experienceRequired: '',
    requiredSkills: [],
    budgetType: 'Fixed',
    budgetRange: { min: '', max: '' },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSkillsChange = (skill) => {
    setFormData((prevState) => ({
      ...prevState,
      requiredSkills: prevState.requiredSkills.includes(skill)
        ? prevState.requiredSkills.filter((s) => s !== skill)
        : [...prevState.requiredSkills, skill],
    }));
  };

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="p-4">
            <h2 className="text-xl mb-4">1/4 Project Details</h2>
            <label className="block mb-2">Project Name *</label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              placeholder="Eg. Structural design"
              className="border p-2 w-full mb-4"
              required
            />
            <label className="block mb-2">Project Category *</label>
            <select
              name="projectCategory"
              value={formData.projectCategory}
              onChange={handleChange}
              className="border p-2 w-full mb-4"
              required
            >
              <option value="">Select Category</option>
              <option value="Engineering">Engineering</option>
              <option value="Construction">Construction</option>
              {/* Additional categories can be added here */}
            </select>
            <label className="block mb-2">Project Description *</label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Already have a description? Paste it here!"
              className="border p-2 w-full mb-4"
              rows="5"
              required
            />
            <div className="text-gray-500">50000 characters left</div>
          </div>
        );
      case 1:
        return (
          <div className="p-4">
            <h2 className="text-xl mb-4">2/4 Project Requirements</h2>
            <label className="block mb-2">Experience Required *</label>
            <input
              type="text"
              name="experienceRequired"
              value={formData.experienceRequired}
              onChange={handleChange}
              placeholder="Eg. 0-6 months"
              className="border p-2 w-full mb-4"
              required
            />
            <div className="mb-4">Required Skills *</div>
            {['Structural Design', 'AutoCAD & Drafting', 'BIM Modeling'].map((skill) => (
              <div key={skill} className="inline-block mb-2 mr-2">
                <button
                  type="button"
                  onClick={() => handleSkillsChange(skill)}
                  className={`px-4 py-2 border rounded ${formData.requiredSkills.includes(skill) ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}
                >
                  {skill}
                </button>
              </div>
            ))}
          </div>
        );
      case 2:
        return (
          <div className="p-4">
            <h2 className="text-xl mb-4">3/4 Budget Details</h2>
            <div className="mb-4">
              <label className="block mb-2">Budget Type *</label>
              <select
                name="budgetType"
                value={formData.budgetType}
                onChange={(e) => setFormData({ ...formData, budgetType: e.target.value })}
                className="border p-2 w-full mb-4"
              >
                <option value="Fixed">Fixed</option>
                <option value="Hourly">Hourly</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Budget Range *</label>
              <input
                type="text"
                placeholder="Min Budget"
                onChange={(e) => setFormData({ ...formData, budgetRange: { ...formData.budgetRange, min: e.target.value } })}
                className="border p-2 w-1/2 mb-2 mr-2"
              />
              <input
                type="text"
                placeholder="Max Budget"
                onChange={(e) => setFormData({ ...formData, budgetRange: { ...formData.budgetRange, max: e.target.value } })}
                className="border p-2 w-1/2 mb-2"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="p-4">
            <h2 className="text-xl mb-4">4/4 Review</h2>
            <p>Project Name: {formData.projectName}</p>
            <p>Category: {formData.projectCategory}</p>
            <p>Description: {formData.projectDescription}</p>
            <p>Experience Required: {formData.experienceRequired}</p>
            <p>Budget Type: {formData.budgetType}</p>
            <p>Budget Range: {formData.budgetRange.min} - {formData.budgetRange.max}</p>
            <p>Required Skills: {formData.requiredSkills.join(', ')}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
    <NavbarComp/>
    <div className="sm:max-w-5xl md:max-w-5xl m-4 p-4 lg:mx-52 rounded-lg mt-20">
      {/* Progress Bar */}
      <div className="w-full">
        <div className="flex space-x-4 sm:space-x-8 p-1">
          {[0, 1, 2, 3].map((num) => (
            <div key={num} className="flex-1 flex flex-col items-center">
              <div className={`h-1 w-full ${step >= num ? "bg-teal-500" : "bg-gray-300"}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Form Steps */}
      <div className="container mx-auto my-10 p-4 border rounded shadow-lg bg-white">
        {renderStep()}
        <div className="flex justify-between mt-4">
          <button onClick={handleBack} disabled={step === 0} className="px-4 py-2 bg-gray-300 rounded">
            Back
          </button>
          <button onClick={step === 3 ? () => alert('Submitted!') : handleNext} className="px-4 py-2 bg-teal-500 text-white rounded">
            {step === 3 ? 'Submit Project' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default PostJob;
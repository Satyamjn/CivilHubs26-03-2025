

import React, { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { SiFreelancer } from "react-icons/si";
import { MdEngineering } from "react-icons/md";


// SelectionToggle Component
const SelectionToggle = ({ options, selectedOption, setSelectedOption }) => {
  const handleSelection = (option) => {
    setSelectedOption(option === selectedOption ? "" : option);
  };

  return (
    <>


      <div className="flex gap-4 flex-wrap">
        {options.map(
          (option) =>
            (selectedOption === "" || selectedOption === option) && (
              <button
                key={option}
                className={`px-3 py-1 mt-2 border rounded-full flex items-center transition duration-300 text-sm font-normal
              ${selectedOption === option ? "bg-purple-500 text-white" : " text-gray-700"}`}
                onClick={() => handleSelection(option)}
              >
                {option}
                {selectedOption === option && <IoClose className="text-white cursor-pointer" />}
              </button>
            )
        )}
      </div>
    </>
  );
};




// Step1 Component
const Step1 = ({ nextStep }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleNext = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.firstname.trim()) validationErrors.firstname = "First name is required";
    if (!formData.lastname.trim()) validationErrors.lastname = "Last name is required";
    if (!formData.email.trim()) validationErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) validationErrors.email = "Enter a valid email address";
    if (!formData.password.trim()) validationErrors.password = "Password is required";
    else if (formData.password.length < 8) validationErrors.password = "Password must be at least 8 characters long";

    if (Object.keys(validationErrors).length > 0) setErrors(validationErrors);
    else nextStep();
  };

  return (
    <div className="flex flex-col max-w-full mx-auto sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 p-6 bg-white rounded-lg">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">Make your profile</h2>

      <form onSubmit={handleNext}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First name</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Last name</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <p className="text-gray-500 text-xs mt-1">
            Use 8 or more characters with a mix of letters, numbers, and symbols.
          </p>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <div className="flex justify-end mt-14">
          <button
            type="submit"
            className="bg-purple-500 text-white px-6 py-2 rounded-md hover:scale-105 transition-all duration-500 w-full sm:w-auto"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};



// Step2 Component
const Step2 = ({ nextStep, prevStep, formDataGlobal = {}, setFormDataGlobal }) => {
  const [username, setUsername] = useState(formDataGlobal.username || "");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
    setError("");
  };

  const validateUsername = (name) => {
    const usernameRegex = /^[a-zA-Z0-9_]{5,15}$/;
    if (!name.trim()) return "Username is required";
    if (!usernameRegex.test(name)) return "Username must be 5-15 characters (letters, numbers, underscores)";
    return "";
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const validationError = validateUsername(username);
    if (validationError) setError(validationError);
    else {
      setFormDataGlobal({ ...formDataGlobal, username });
      nextStep();
    }
  };

  return (
    <div className="flex flex-col max-w-full mx-auto sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 p-6 bg-white rounded-lg">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">Create Your Username</h2>
      <form onSubmit={handleCreate}>
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Create Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your username"
            required
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-500 w-full sm:w-auto mt-10"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-500 w-full sm:w-auto mt-10"
          >
            Create & Continue
          </button>
        </div>
      </form>
    </div>
  );
};



// Step3 Component
const Step3 = ({ prevStep, handleCreateAccount, formDataGlobal = {}, setFormDataGlobal }) => {
  const [selectedRole, setSelectedRole] = useState(formDataGlobal.selectedRole || "");
  const [error, setError] = useState("");

  const roles = [
    { label: "Freelancer", value: "freelancer", tagline: "I want to work", icon: <SiFreelancer /> },

    { label: "Engineer", value: "engineer", tagline: "I want to work", icon: <MdEngineering /> },

    { label: "Company", value: "company", tagline: "I want to hire" },  

  ];

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedRole) setError("Please select a role");
    else {
      setFormDataGlobal({ ...formDataGlobal, selectedRole });
      handleCreateAccount();
    }
  };

  return (
    <div className="flex flex-col max-w-full mx-auto sm:mx-8 md:mx-16 lg:mx-32 xl:my-4 p-6 bg-white rounded-lg">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Join as a client or freelancer</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-56 mt-8 sm:h-64 md:h-72 lg:h-80 xl:h-56 w-full">
          {roles.map((role) => (
            <div
              key={role.value}
              onClick={() => handleRoleSelect(role.value)}
              className={`cursor-pointer border rounded-lg p-6 sm:p-8 md:p-9 text-start flex flex-col justify-start items-start relative   transition-all duration-300 h-full w-full ${
                selectedRole === role.value ? "border-purple-500" : "border-gray-300"
              }`}
            >
                <div className="absolute top-4 left-4 text-2xl text-purple-500">
                {role.icon}
              </div>
              <input
                type="radio"
                name="role"
                value={role.value}
                checked={selectedRole === role.value}
                onChange={() => handleRoleSelect(role.value)}
                className="w-6 h-6 text-green-500 absolute top-4 right-4"
              />
              <h3 className="text-2xl xl:mt-8 font-medium mt-2">{role.label}</h3>
              <p className="text-sm font-bold text-black-700 mt-2">{role.tagline}</p>
            </div>
          ))}
        </div>
        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
        <div className="flex justify-between items-center mt-48   xl:mt-20 flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-500 text-white px-6 py-2 rounded-md hover:scale-105 transition-all duration-500 w-full sm:w-auto"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={!selectedRole}
            className={`px-6 py-2 rounded-md w-full sm:w-auto transition-all duration-500 ${
              selectedRole ? "bg-purple-500 text-white hover:scale-105" : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Create Account
          </button>
        </div>
        <p className="text-center mt-4">
          Already have an account? <a href="/login" className="text-green-600 hover:underline">Log In</a>
        </p>
      </form>
    </div>
  );
};



export { Step2, Step3 };


const Signup = () => {
  const [step, setStep] = useState(0);
  const [formDataGlobal, setFormDataGlobal] = useState({});
  const [selectedRole, setSelectedRole] = useState([]);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <>
      <hr className="border-gray-300 h-11 mt-12 w-screen" />
      <div className="sm:max-w-full m-4 p-4 lg:mx-52 bg-white rounded-lg overflow-hidden -mt-9">
        {/* Progress Bar */}
        <div className="flex space-x-24 p-4 mx-64">
          {[0, 1, 2].map((num) => (
            <div key={num} className="flex-1 flex flex-col items-center">
              <div className={`h-1 w-full ${step >= num ? "bg-purple-400" : "bg-gray-300"}`} />
            </div>
          ))}
        </div>

        {/* Step Components */}
        {step === 0 && <Step1 nextStep={nextStep} />}
        {step === 1 && (
          <Step2
            nextStep={nextStep}
            prevStep={prevStep}
            setSelectedRole={setSelectedRole}
            formDataGlobal={formDataGlobal}
            setFormDataGlobal={setFormDataGlobal}
          />
        )}
        {step === 2 && <Step3 prevStep={prevStep} formDataGlobal={formDataGlobal} />}
      </div>
    </>
  );
};


// Test Component
function NewSignUp() {
  return (

    <div>

      <Signup />
    </div>

  );
}

export default NewSignUp;









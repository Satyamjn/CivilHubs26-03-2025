import React, { useEffect, useState } from "react";
import NavbarLand from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick"; // Import the Slider component
import "slick-carousel/slick/slick.css"; // Import the CSS for slick
import "slick-carousel/slick/slick-theme.css"; // Import the theme CSS for slick
const categories = [
  {
    title: "Skilled Technical Manpower",
    jobs: [
      { name: "Civil Engineer", img: "/assets/Civilhubs/skilled1.jpg" },
      { name: "Site Engineer", img: "/assets/Civilhubs/skilled2.jpg" },
      { name: "Project Engineer", img: "/assets/Civilhubs/skilled3.jpg" },
      { name: "Construction Manager", img: "/assets/Civilhubs/skilled4.jpg" },
      { name: "Surveyor", img: "/assets/Civilhubs/skilled5.jpg" },
      { name: "Supervisor", img: "/assets/Civilhubs/skilled6.jpg" },
      { name: "Structural Engineer", img: "/assets/Civilhubs/skilled7.jpg" },
      { name: "Quantity Surveyor", img: "/assets/Civilhubs/skilled8.jpg" },
      { name: "MEP Engineer", img: "/assets/Civilhubs/skilled9.jpg" },
      { name: "Quality Control Engineer", img: "/assets/Civilhubs/skilled10.jpg" },
      { name: "Safety Officer", img: "/assets/Civilhubs/skilled11.jpg" },
      { name: "Draughtsman", img: "/assets/Civilhubs/skilled12.jpg" }
    ],
  },
  {
    title: "Skilled Household & Trade Specific Manpower",
    jobs: [
      { name: "Construction Worker", img: "/assets/Civilhubs/unskilled1.jpg" },
      { name: "Mason", img: "/assets/Civilhubs/unskilled2.jpg" },
      { name: "Carpenter", img: "/assets/Civilhubs/unskilled3.jpg" },
      { name: "Electrician", img: "/assets/Civilhubs/unskilled4.jpg" },
      { name: "Plumber", img: "/assets/Civilhubs/unskilled5.jpg" },
      { name: "Painter", img: "/assets/Civilhubs/unskilled6.jpg" },
      { name: "Welder", img: "/assets/Civilhubs/unskilled7.jpg" },
      { name: "Steel Fixer", img: "/assets/Civilhubs/unskilled8.jpg" },
      { name: "Tiler", img: "/assets/Civilhubs/unskilled9.jpg" },
      { name: "Glass Installer", img: "/assets/Civilhubs/unskilled10.jpg" },
      { name: "Scaffolder", img: "/assets/Civilhubs/unskilled11.jpg" },
      { name: "Rigger", img: "/assets/Civilhubs/unskilled12.jpg" },
    ],
  },
  {
    title: "Skilled Machine Operators",
    jobs: [
      { name: "Crane Operator", img: "/assets/Civilhubs/skilled7.jpg" },
      { name: "Excavator Operator", img: "/assets/Civilhubs/skilled8.jpg" },
      { name: "Bulldozer Operator", img: "/assets/Civilhubs/skilled9.jpg" },
      { name: "Forklift Operator", img: "/assets/Civilhubs/skilled10.jpg" },
      { name: "Backhoe Operator", img: "/assets/Civilhubs/skilled11.jpg" },
      { name: "Loader Operator", img: "/assets/Civilhubs/skilled12.jpg" },
    ],
  },
  {
    title: "Semi Skilled Workers",
    jobs: [
      { name: "Construction Worker", img: "/assets/Civilhubs/unskilled1.jpg" },
      { name: "Mason", img: "/assets/Civilhubs/unskilled2.jpg" },
      { name: "Carpenter", img: "/assets/Civilhubs/unskilled3.jpg" },
      { name: "Electrician", img: "/assets/Civilhubs/unskilled4.jpg" },
      { name: "Plumber", img: "/assets/Civilhubs/unskilled5.jpg" },
      { name: "Painter", img: "/assets/Civilhubs/unskilled6.jpg" },
      { name: "Welder", img: "/assets/Civilhubs/unskilled7.jpg" },
      { name: "Steel Fixer", img: "/assets/Civilhubs/unskilled8.jpg" },
      { name: "Tiler", img: "/assets/Civilhubs/unskilled9.jpg" },
      { name: "Glass Installer", img: "/assets/Civilhubs/unskilled10.jpg" },
      { name: "Scaffolder", img: "/assets/Civilhubs/unskilled11.jpg" },
      { name: "Rigger", img: "/assets/Civilhubs/unskilled12.jpg" },
    ],
  },
];
const Signup = () => {

  const [step, setStep] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640); // Adjust the breakpoint as needed

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 6));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));






  const [selectedJobs, setSelectedJobs] = useState([]); // Array to store selected jobs


  const handleJobClick = (job) => {
    setSelectedJobs((prevSelectedJobs) => {
      if (prevSelectedJobs.includes(job)) {
        // If job is already selected, remove it
        return prevSelectedJobs.filter((selectedJob) => selectedJob !== job);
      } else {
        // If job is not selected, add it
        return [...prevSelectedJobs, job];     
      }
    });
  };


  const [formDataGlobal, setFormDataGlobal] = useState({
    email: "",
    password: "",  
    passwordConfirm: "",
    firstName: "",
    lastName: "",
    companyName: "",
    location: "",
    selectedRole: "",
    termsAndConditions: false,
    username: "",
    phone: "",
    otp: "",
    file: null,
  });

  const handleSubmitData = () => {
    const f = formDataGlobal.selectedRole;
    if (f === "freelancer") {
      navigate("/freelancehome", { state: { srole: f } });
    } else if (f === "engineer") {
      navigate("/engineerhome", { state: { srole: f } });
    } else if (f === "company") {
      navigate("/companyhome", { state: { srole: f } });
    }
    else if (f === "business") {
      navigate("/businesshome", { state: { srole: f } });
    }
    else if (f === "propertyowner") {
      navigate("/propertyownerhome", { state: { srole: f } });
    }

  };

  // Step1 Component
  const [selectedRole, setSelectedRole] = useState(formDataGlobal.selectedRole || "");
  const [error, setError] = useState("");

  const roles = [
    { label: "Freelancer", value: "freelancer", tagline: "Looking For Project & Job" },
    { label: "Company/Individuals", value: "company", tagline: "Outsource Your Project & Hire Professionals" },
    { label: "Small Business", value: "business", tagline: "Want to sell products/Hire" },
    { label: "Property Owner", value: "propertyowner", tagline: "Want a materials/hire" },
  ];

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setError("");
  };

  const handleContinue = () => {
    if (!selectedRole) {
      setError("Please select a role");
    } else {
      setFormDataGlobal({ ...formDataGlobal, selectedRole });
      nextStep();
    }
  };

  // Step2 Component
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

  // Step3 Component with Back Button and Proper Email & OTP Verification
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedEmailOtp, setGeneratedEmailOtp] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otpVisible, setOtpVisible] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

  const handleSendEmailOtp = () => {
    if (!email.trim()) {
      setEmailError("Email is required");
    } else if (!validateEmail(email)) {
      setEmailError("Enter a valid email address");
    } else {
      const otp = generateOtp();
      setGeneratedEmailOtp(otp);
      setOtpVisible(true);
      setEmailError("");
    }
  };

  const handleVerifyEmailOtp = () => {
    if (!otp.trim()) {
      setOtpError("OTP is required");
    } else if (otp !== generatedEmailOtp) {
      setOtpError("Invalid OTP");
    } else {
      setOtpError("");
      setTimeout(() => nextStep(), 100);
    }
  };

  // Step4: Create Username
  const [username, setUsername] = useState(formDataGlobal.username || "");
  const suggestUsername = () => setUsername(`${formDataGlobal.firstname}_${Math.floor(Math.random() * 1000)}`);

  // Step5: Phone Number Verification with OTP
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [generatedPhoneOtp, setGeneratedPhoneOtp] = useState(null);

  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSendPhoneOtp = () => {
    if (!phone.trim()) {
      setPhoneError("Phone number is required");
    } else if (!validatePhone(phone)) {
      setPhoneError("Enter a valid 10-digit phone number");
    } else {
      const otp = generateOtp();
      setGeneratedPhoneOtp(otp);
      setOtpVisible(true);
      setPhoneError("");
    }
  };

  const handleVerifyPhoneOtp = () => {
    if (!otp.trim()) {
      setOtpError("OTP is required");
    } else if (otp !== generatedPhoneOtp) {
      setOtpError("Invalid OTP");
    } else {
      setOtpError("");
      setTimeout(() => nextStep(), 100);
    }
  };

  // Step6: ID Proof Upload
  const [file, setFile] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) nextStep();
    else alert("Please upload your ID proof");
  };






  return (
    <>

      <div className="sm:max-w-5xl md:max-w-5xl m-4 p-4 lg:mx-52 rounded-lg mt-20 sm:m">
        <div className="flex space-x-4 sm:space-x-8 p-1 ml-12 sm:ml-24 md:ml-48">
          {[0, 1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="flex-1 flex flex-col items-center">
              <div className={`h-1 w-full ${step >= num ? "bg-teal-500" : "bg-gray-300"}`} />
            </div>
          ))}
        </div>

        {step === 0 && (
          <div className="flex flex-col max-w-3xl mx-auto p-5 sm:p-8 bg-white rounded-lg shadow-sm translate-x-0 sm:translate-x-20 w-full mt-7">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Join as a client or freelancer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-20 gap-y-6 w-full">
              {roles.map((role) => (
                <div
                  key={role.value}
                  onClick={() => handleRoleSelect(role.value)}
                  className={`cursor-pointer border rounded-lg p-4 sm:p-6 md:p-8 text-start flex flex-col justify-start items-start relative transition-all duration-300 h-full w-full ${selectedRole === role.value ? "bg-teal-500 text-white" : "border-gray-300"
                    }`}
                >
                  <input
                    type="radio"
                    name="role"
                    checked={selectedRole === role.value}
                    onChange={() => handleRoleSelect(role.value)}
                    className="form-radio text-teal-500 h-5 w-5 absolute top-4 right-4"
                  />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium mt-2">{role.label}</h3>
                  <p className="text-sm font-bold text-black-700 mt-2">{role.tagline}</p>
                </div>
              ))}
            </div>
            {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
            <div className="flex justify-end mt-6 sm:mt-8">
              <button
                type="button"
                onClick={handleContinue}
                disabled={!selectedRole}
                className={`px-4 sm:px-6 py-2 rounded-md w-full sm:w-auto transition-all duration-500 ${selectedRole ? "bg-teal-500 text-white hover:scale-105" : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
              >
                Continue
              </button>
            </div>
          </div>
        )}


        {/* Step 2 */}
        {step === 1 && (
          <div className="flex flex-col max-w-full mx-auto sm:mx-8 md:mx-16 lg:mx-20 xl:my-2 sm:translate-x-0 lg:translate-x-28 p-4 sm:p-6 bg-white rounded-lg">
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
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
                <p className="text-gray-500 text-xs mt-1">
                  Use 8 or more characters with a mix of letters, numbers, and symbols.
                </p>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
              <div className="flex flex-col sm:flex-row justify-start mt-8 gap-4 sm:gap-8 lg:gap-[600px]">
                <button
                  onClick={prevStep}
                  className="bg-gray-500 text-white px-6 py-2 rounded-md hover:scale-105 transition-all duration-500 w-full sm:w-auto"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-teal-500 text-white px-6 py-2 rounded-md hover:scale-105 transition-all duration-500 w-full sm:w-auto"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3 */}
        {step === 2 && (
          <div className="flex flex-col max-w-full mx-auto sm:mx-8 md:mx-16 lg:mx-20 xl:my-2 sm:translate-x-0 lg:translate-x-28 p-4 sm:p-6 bg-white rounded-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Email Verification</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
                <button
                  onClick={prevStep}
                  className="bg-gray-500 text-white px-6 py-2 rounded-md hover:scale-105 transition-all duration-500 w-full sm:w-40"
                >
                  Back
                </button>
                <button
                  onClick={handleSendEmailOtp}
                  className="bg-teal-500 text-white px-6 py-2 rounded-md hover:scale-105 transition-all duration-500 w-full sm:w-40"
                >
                  Send OTP
                </button>
              </div>
              {otpVisible && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Enter OTP</label>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    {generatedEmailOtp && (
                      <p className="text-green-500 text-sm mt-1 bg-gray-100 p-2 rounded-lg text-center">
                        Generated OTP: <span className="font-bold">{generatedEmailOtp}</span>
                      </p>
                    )}
                    {otpError && <p className="text-red-500 text-sm mt-1">{otpError}</p>}
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <button
                      onClick={prevStep}
                      className="bg-gray-500 text-white px-6 py-2 rounded-md hover:scale-105 transition-all duration-500 w-full sm:w-40"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleVerifyEmailOtp}
                      className="bg-teal-500 text-white px-6 py-2 rounded-md hover:scale-105 transition-all duration-500 w-full sm:w-40"
                    >
                      Verify OTP & Continue
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 4 */}
        {step === 3 && (
          <div className="flex flex-col max-w-full mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg sm:mx-8 md:mx-16 lg:mx-20 xl:my-2 sm:translate-x-0 lg:translate-x-28">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Create Username</h2>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button onClick={suggestUsername} className="text-teal-500 underline mt-2 text-sm sm:text-base">
              Suggest Username
            </button>
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
              <button
                onClick={prevStep}
                className="bg-gray-500 text-white px-6 py-2 rounded-md w-full sm:w-auto"
              >
                Back
              </button>
              <button
                onClick={() => {
                  setFormDataGlobal((prev) => ({ ...prev, username }));
                  nextStep();
                }}
                className="bg-teal-500 text-white px-6 py-2 rounded-md w-full sm:w-auto"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 5 */}
        {step === 4 && (
          <div className="flex flex-col max-w-full mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg sm:mx-8 md:mx-16 lg:mx-20 xl:my-2 sm:translate-x-0 lg:translate-x-28">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Upload ID Proof</h2>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
              <button
                onClick={prevStep}
                className="bg-gray-500 text-white px-6 py-2 rounded-md w-full sm:w-auto"
              >
                Back
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-teal-500 text-white px-6 py-2 rounded-md w-full sm:w-auto"
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {/* Step 6 */}
        {step === 5 && (
          <div className="flex flex-col max-w-full mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg sm:mx-8 md:mx-16 lg:mx-20 xl:my-2 sm:translate-x-0 lg:translate-x-28">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Phone Number Verification</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
              </div>
              <button
                onClick={handleSendPhoneOtp}
                className="bg-teal-500 text-white px-6 py-2 rounded-md hover:scale-105 transition-all duration-500 w-full sm:w-auto"
              >
                Generate OTP
              </button>
              {otpVisible && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Enter OTP</label>
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    {generatedPhoneOtp && (
                      <p className="text-green-500 text-sm mt-1 bg-gray-100 p-2 rounded-lg text-center">
                        Generated OTP: <span className="font-bold">{generatedPhoneOtp}</span>
                      </p>
                    )}
                    {otpError && <p className="text-red-500 text-sm mt-1">{otpError}</p>}
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <button
                      onClick={prevStep}
                      className="bg-gray-500 text-white px-6 py-2 rounded-md hover:scale-105 transition-all duration-500 w-full sm:w-auto"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleVerifyPhoneOtp}
                      className="bg-teal-500 text-white px-6 py-2 rounded-md hover:scale-105 transition-all duration-500 w-full sm:w-auto"
                    >
                      Verify OTP & Continue
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 7 */}
        {step === 6 && (
          <div className="text-center py-8 sm:py-10 mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:ml-40">
            <h2 className="text-xl sm:text-2xl font-semibold">Account Created Successfully!</h2>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base">Welcome, {formDataGlobal.firstName} ({formDataGlobal.selectedRole})</p>

            {formDataGlobal.selectedRole === "freelancer" && (
              <div>
                {/* <h3>{roleContent.freelancer.title}</h3> */}


                {/* <div className="grid grid-cols-2 gap-4">
          {roleContent.freelancer.items.map((item) => (
            <div key={item.name} className="flex flex-col items-center">
              <img ={item.img} alt={item.name} className="w-20 h-20 rounded-full" />
              <p>{item.name}</p>
            </div>
          ))}
        </div> */}


                <div className="border border-gray-300 rounded-lg p-4 mt-6 shadow-lg">
                  {/* Render carousel only on small screens */}
                  {isSmallScreen ? (
                    <Slider {...settings} className="mt-4 ml-8">
                      {categories.map((category) => (
                        <div key={category.title} className="flex justify-center">
                          <button
                            onClick={() => setSelectedCategory(category)}
                            className={`text-sm pb-2 ${selectedCategory.title === category.title
                                ? "text-teal-500 font-semibold border-b-2 border-teal-500"
                                : "text-gray-400"
                              }`}
                          >
                            {category.title}
                          </button>
                        </div>
                      ))}
                    </Slider>
                  ) : (
                    <div className="flex flex-wrap justify-center space-x-20 mt-4 ml-8">
                      {categories.map((category) => (
                        <button
                          key={category.title}
                          onClick={() => setSelectedCategory(category)}
                          className={`text-sm pb-2 ${selectedCategory.title === category.title
                              ? "text-teal-500 font-semibold border-b-2 border-teal-500"
                              : "text-gray-400"
                            }`}
                        >
                          {category.title}
                        </button>
                      ))}
                    </div>
                  )}
                        
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 mt-6">
                    {selectedCategory.jobs.map((job) => ( 
                      <div key={job.name} className="text-center relative">
                        {selectedJobs.includes(job) && (
                          <div className="absolute inset-0 bg-teal-500 opacity-50 rounded-lg z-0" />
                        )}
                        <img
                          src={job.img}
                          alt={job.name}
                          className="w-20 h-20 mx-auto rounded-full object-cover cursor-pointer z-10"
                          onClick={() => handleJobClick(job)}
                        />
                        <p className="text-sm mt-2 z-10">{job.name}</p>
                      </div>
                    ))}
                  </div>
                </div>



              </div>
            )}

            {formDataGlobal.selectedRole === "engineer" && (
              <div>
                <h3>{roleContent.engineer.title}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {roleContent.engineer.items.map((item) => (
                    <div key={item.name} className="flex flex-col items-center">
                      <img src={item.img} alt={item.name} className="w-20 h-20 rounded-full" />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={handleSubmitData}
              className="bg-teal-500 text-white px-6 py-2 rounded-md mt-4 w-full sm:w-auto"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </>
  );
};

function SignUpt() {
  return (
    <div>
      <NavbarLand />
      <Signup />


    </div>
  );
}

export default SignUpt;
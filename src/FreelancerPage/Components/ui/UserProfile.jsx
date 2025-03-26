import React, { useState } from 'react';
import { FaClosedCaptioning, FaEdit, FaGraduationCap, FaMapMarkerAlt, FaPlus, FaShareAlt } from "react-icons/fa";
import Navbar from '../shared/Navbar';




import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "@/components/ui/select";
import Checkbox from "@/components/ui/checkbox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UserProfile() {

  // Data Section , data has to be fetched using api
  const dummyProfile = {
    email: "testuser@example.com",
    mobile: "+91-9876543210",
    dob: "1st Jan 2000",
    gender: "Male",
    location: "New Delhi",
    hometown: "Mumbai",
  };  
  //  Skills data section 
  const skillsData = ["CSS", "HTML", "JavaScript", "React", "Node.js", "MongoDB", "Express","Laravel"];

  const [skillsDataa, setSkillsDataa] = useState ([...new Set(skillsData)]);


  const Increament = (catagory,data,flag=1) =>{

  }
  

  const skillSuggestions = [
    "JavaScript", "React", "Node.js", "Python", "Django", "Flask", "Java", "Spring Boot",
    "C++", "C#", "Kotlin", "Swift", "HTML", "CSS", "Tailwind CSS", "Bootstrap", 
    "SQL", "MongoDB", "PostgreSQL", "Firebase", "AWS", "Docker", "Kubernetes",
    "Blockchain", "Flutter", "Android Development", "iOS Development", "Machine Learning",
    "Artificial Intelligence", "Data Science", "Cybersecurity", "DevOps", "Cloud Computing"
  ];
  const certificationsData = [
    "Full Stack Web Development - Coursera",
    "JavaScript Certification - Udemy",
  ];
  const languagesData = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" },
    { name: "Spanish", level: "Basic" },
  ];

  const dummyUser = {
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
    name: "Satyam Jain",
    profileLink: "https://apna.co/satyam",
    education: "Bansal Institute of Science and Technology, Bhopal",
    location: "Bhopal, MP",
  };

  const profileData = {
    workExperience: [{
      company: "Google",
      role: "Software Developer",
      industry: "IT Services",
      startDate: new Date("2020-01-10").toDateString(),
      endDate: new Date("2021-12-20"), // Since currently working is true
      currentlyWorking: false,
      employmentType: "Full Time",
      duration: calculateDuration(new Date("2022-01-10"), new Date("2021-12-20")),
      description: "Worked on various projects and developed web applications using React and Node.js",

    },

    ],
    highestEducation: "Post Graduate",
    schoolMedium: "English",
    education: [
      {
        degree: "Master of Computer Application, Computer Science Engineering",
        institution: "Bansal Institute of Science and Technology, Bhopal",
        level: "Post Graduate",
        field: "Computer Science Engineering",
        startDate: new Date("2023-01-10").toDateString(),
        endDate: new Date("2025-06-30"),
        studying: true,
        batch: "2023 - 2025",
        type: "FullTime",
      },
      {
        degree: "Master of Computer Application, Computer Science Engineering",
        institution: "Bansal Institute of Science and Technology, Bhopal",
        level: "Post Graduate",
        field: "Computer Science Engineering",
        startDate: new Date("2023-01-10").toDateString(),
        endDate: new Date("2025-06-30"),
        studying: true,
        batch: "2023 - 2025",
        type: "FullTime",

      },
    ],
  };

  const [experiences, setExperiences] = useState(profileData.workExperience);
  const [education, setEducation] = useState(profileData.education);

  const initialCompanies = [
    { name: "Ohm Tech Developer", industry: "IT Services" },
    { name: "ABC Solutions", industry: "Software Development" },
    { name: "Tech Innovations", industry: "Consulting" },
  ];

  const industries = ["IT Services", "Finance", "Healthcare", "E-commerce", "Education"];
  const employmentTypes = ["Full Time", "Part Time", "Work From Home"];
  function calculateDuration(startDate, endDate) {
    const end = endDate ? endDate : new Date();
    const years = end.getFullYear() - startDate.getFullYear();
    const months = end.getMonth() - startDate.getMonth();
    return `${years} years, ${months < 0 ? 12 + months : months} months`;
  }

  const [formData, setFormData] = useState({
    degree: "",
    field: "",
    university: "",
    startDate: "",
    endDate: "",
    studying: false,
    certification: "",
    org: "",
    issueDate: "",
    expiryDate: "",
    certificateAlways: false,
    skill: "",
    skillsData: ["CSS", "HTML", "JavaScript", "React", "Node.js", "MongoDB", "Express"],
    skillLevel: "Beginner",
  });


  const [showEducation, setShowEducation] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showCertification, setShowCertification] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);



  const ProfileCard = ({ user }) => {
    return (
      <div className="max-w-lg p-10 border rounded-lg shadow-md bg-white mt-20">
        <div className="flex items-center gap-4">
          <img
            src={user.imageUrl}
            alt={user.name}
            className="w-16 h-16 rounded-full border"
          />
          <div>
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <a href={user.profileLink} className="text-blue-600 text-sm">
              {user.profileLink}
            </a>
          </div>
        </div>
        <div className="mt-3 text-gray-700 text-sm">
          <p className="flex items-center gap-2">
            <FaGraduationCap className="text-gray-500" /> {user.education}
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-500" /> {user.location}
          </p>
        </div>
        <div className="mt-4 text-green-600 text-sm cursor-pointer flex items-center gap-2">
          <FaShareAlt /> <p>Share profile</p>
        </div>
      </div>
    );
  };
  const ProfileDetails = ({ profile }) => {
    return (
      <div className="max-w-sm p-4 border rounded-lg shadow-md bg-white">
        <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
          <div>
            <p className="font-semibold">Email ID</p>
            <p>{profile.email}</p>
          </div>
          <div>
            <p className="font-semibold">Mobile number</p>
            <p className="text-blue-600">{profile.mobile}</p>
          </div>
          <div>
            <p className="font-semibold">Date of birth</p>
            <p>{profile.dob}</p>
          </div>
          <div>
            <p className="font-semibold">Gender</p>
            <p>{profile.gender}</p>
          </div>
          <div>
            <p className="font-semibold">Current location</p>
            <p>{profile.location}</p>
          </div>
          <div>
            <p className="font-semibold">Hometown</p>
            <p className="text-green-600 cursor-pointer">{profile.hometown || "Add hometown"}</p>
          </div>
        </div>
      </div>
    );
  };

  const ExperienceCard = ({ experience }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-5 mb-4 border border-gray-200 w-full ">
        <h3 className="text-xl font-semibold text-gray-800">{experience.role}</h3>
        <p className="text-gray-600">{experience.company}</p>
        <p className="text-sm text-gray-500">
          {/* {experience.startDate} - {experience.currentlyWorking ? "Present" : experience.endDate.toDateString()} */}
        </p>
        <p className="text-sm font-medium text-blue-500 mt-1">Duration: {experience.duration}</p>
      </div>
    );
  };




  const AddExperienceDialog = ({ onSave, onClose }) => {
    const [jobTitle, setJobTitle] = useState("");
    const [jobRole, setJobRole] = useState("");
    const [description, setDescription] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [industry, setIndustry] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [currentlyWorking, setCurrentlyWorking] = useState(false);
    const [employmentType, setEmploymentType] = useState("");
    const [savedExperiences, setSavedExperiences] = useState([]);

    const jobTitleSuggestions = ["Software Engineer", "Web Developer", "Project Manager", "Data Analyst"];
    const industrySuggestions = ["IT", "Healthcare", "Finance", "Education"];
    const employmentTypeSuggestions = ["Full-Time", "Part-Time", "Contract", "Internship"];

    const handleSave = () => {
      if (!jobTitle || !jobRole || !companyName || !industry || !startDate || !employmentType) {
        alert("Please fill all required fields!");
        return;
      }

      const experience = {
        company: companyName,
        role: jobRole,
        industry: industry,
        startDate: new Date(startDate).toLocaleDateString(),
        endDate: currentlyWorking ? false : new Date(endDate).toLocaleDateString(),
        currentlyWorking,
        employmentType,
        description,
        duration: calculateDuration(new Date(startDate), endDate ? new Date(endDate) : new Date()),
      };


      setSavedExperiences([...savedExperiences, experience]);
      setExperiences([...experiences, experience]);
      onSave(experience);
      onClose();
    };

    return (
      <>
        <div className="p-6 z-50 ">
          <h2 className="text-xl font-semibold mb-3">Saved Experiences</h2>
          {savedExperiences.length > 0 ? (
            savedExperiences.map((exp, index) => (
              <div key={index} className="p-4 border rounded bg-gray-100 mb-2 z-auto">
                <p><strong>Job Title:</strong> {exp.role}</p>
                <p><strong>Company:</strong> {exp.company}</p>
                <p><strong>Industry:</strong> {exp.industry}</p>
                <p><strong>Start Date:</strong> {exp.startDate}</p>
                <p><strong>End Date:</strong> {exp.endDate}</p>
                <p><strong>Employment Type:</strong> {exp.employmentType}</p>
                <p><strong>Description:</strong> {exp.description || "N/A"}</p>
              </div>
            ))
          ) : (
            <p>No experiences added yet.</p>
          )}
        </div>

        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-65 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-3">Add Work Experience</h2>
            <label className="flex items-center font-semibold space-x-2 mb-2">Job Title</label>
            <input list="jobTitles" type="text" placeholder="Job Title *" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="w-full p-2 mb-2 border rounded" />
            <datalist id="jobTitles">
              {jobTitleSuggestions.map((title, index) => <option key={index} value={title} />)}
            </datalist>
            <label className="flex items-center font-semibold space-x-2 mb-2">Job Role</label>
            <input type="text" placeholder="Job Role *" value={jobRole} onChange={(e) => setJobRole(e.target.value)} className="w-full p-2 mb-2 border rounded" />
            <label className="flex items-center font-semibold space-x-2 mb-2">Description</label>
            <textarea placeholder="Description (Optional)" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 mb-2 border rounded"></textarea>
            <label className="flex items-center font-semibold space-x-2 mb-2">Company Details</label>
            <input type="text" placeholder="Company Name *" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full p-2 mb-2 border rounded" />
            <label className="flex items-center font-semibold space-x-2 mb-2">Industry</label>
            <input list="industries" type="text" placeholder="Industry *" value={industry} onChange={(e) => setIndustry(e.target.value)} className="w-full p-2 mb-2 border rounded" />
            <datalist id="industries">
              {industrySuggestions.map((ind, index) => <option key={index} value={ind} />)}
            </datalist>
            <label className="flex items-center font-semibold space-x-2 mb-2">Start Date</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full p-2 mb-2 border rounded" />
            {!currentlyWorking && <><label className="flex items-center font-semibold space-x-2 mb-2">End Date</label><input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full p-2 mb-2 border rounded" /></>}

            <label className="flex items-center space-x-2 mb-2">
              <input type="checkbox" checked={currentlyWorking} onChange={(e) => setCurrentlyWorking(e.target.checked)} />
              <span>Currently Working</span>
            </label>
            <label className="flex items-center font-semibold space-x-2 mb-2">Employment Type</label>
            <input list="employmentTypes" type="text" placeholder="Employment Type *" value={employmentType} onChange={(e) => setEmploymentType(e.target.value)} className="w-full p-2 mb-2 border rounded" />
            <datalist id="employmentTypes">
              {employmentTypeSuggestions.map((type, index) => <option key={index} value={type} />)}
            </datalist>

            <div className="flex justify-between mt-4">
              <button onClick={onClose} className="px-4 py-2 bg-gray-400 rounded">Cancel</button>
              <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
            </div>
          </div>
        </div>
      </>
    );
  };









  const ProfileDialogs = ({ type, isOpen, onClose, onSave }) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [currentlyStudying, setCurrentlyStudying] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [customSkillsData, setCustomSkillsData] = useState([]);
    const [input,setInput] = useState("");
    const [customFormData, setCustomFormData] = useState({
      degree: "",
      institution: "",
      level: "",
      field: "",
      startDate: "", //new Date(startDate).toLocaleDateString()
      endDate: "",  //currentlyStudying ? false : new Date(endDate).toLocaleDateString()
      studying: true,
      batch: "",
      type: "",

    });

   
    const handleChange = (e) => {
      e.preventDefault();
      const { name, value, type, checked } = e.target;
      setInput(value);
      console.log("handlr chnged");
      // setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
      
       
        setCustomFormData({ ...customFormData, [name]: type === "checkbox" ? checked : value });

      
      
    };

 
    const  handleSkillsChange = (e)=>{
      const {value} = e.target;
      setInput(value);
      if (value) {
        const matches = skillSuggestions.filter(skill =>
          skill.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSuggestions(matches);
      } else {
        setFilteredSuggestions([]);
      }
   
    }

    // To ask Education Details
    // degree: "Master of Computer Application, Computer Science Engineering",
    // institution: "Bansal Institute of Science and Technology, Bhopal",
    // level: "Post Graduate",
    // batch: "2023 - 2025",
    // type: "FullTime",











 
    const addSkill = (skill) => {
      if (!customSkillsData.includes(skill)) {
          console.log("Query Entered");
        setCustomSkillsData([...customSkillsData, skill]);
      
      }
      setInput("");
      setFilteredSuggestions([]);
    };
    // Function to remove skill
    const removeSkill = (index) => {
      setCustomSkillsData(customSkillsData.filter((_, i) => i !== index));
    };
    const handleSave = () => {
      // onSave(formData);
      if (type === "education") {
        setEducation([...education, customFormData]);
      } else if (type === "skill") {
        
        // setSkillsDataa([...skillsData,...customSkillsData]);
        setSkillsDataa((pdata)=>[...new Set([...pdata,...customSkillsData])]);
        console.log("Skills Data updated  ", skillsDataa);
      } else {

      }
    
      onClose();
    };


    const degreeOptions = [
      "Master of Computer Application (MCA)",
      "Bachelor of Technology (B.Tech)",
      "Master of Technology (M.Tech)",
      "Bachelor of Science (B.Sc)",
    ];

    const fieldOptions = [
      "Computer Science Engineering",
      "Information Technology",
      "Electronics and Communication",
      "Data Science",
    ];

    const institutionOptions = [
      "Bansal Institute of Science and Technology, Bhopal",
      "Indian Institute of Technology (IIT)",
      "National Institute of Technology (NIT)",
      "Delhi University",
    ];

    const typeOptions = ["FullTime", "PartTime", "Distance Learning"];


    return (

      <div className=' overflow-y-auto max-h-1/2 '>
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {type === "education" ? "Add Education" :
                  type === "certification" ? "Add Certification" :
                    type === "skill" ? "Add Skill" :
                      type === "language" ? "Add Language" : "Add Details"}
              </DialogTitle>
            </DialogHeader>

            {type === "education" && (
              <>

                <Label>Degree Name</Label>
                <select name="degree" value={customFormData.degree} onChange={handleChange} defaultValue={""} className='appearance-none w-full p-2 mb-2 border rounded'>
                  <option value="" disabled selected>-- Select Degree --</option>
                  {degreeOptions.map((deg) => (
                    <option key={deg} value={deg} className='!hover:bg-purple-500'>
                      {deg}
                    </option>
                  ))}
                </select>


                <Label>Field of Study</Label>
                <select name="field" value={customFormData.field} onChange={handleChange} className="appearance-none w-full p-2 mb-2 border rounded">
                  <option value="" disabled selected>-- Select Field of Study --</option>
                  {fieldOptions.map((field) => (
                    <option key={field} value={field}>
                      {field}
                    </option>
                  ))}
                </select>

                <Label>University/College</Label>
                <select name="institution" value={customFormData.institution} onChange={handleChange} className="appereance-none w-full p-2 mb-2 border rounded">
                  <option value="" disabled selected>-- Select University/College --</option>
                  {institutionOptions.map((inst) => (
                    <option key={inst} value={inst}>
                      {inst}
                    </option>
                  ))}
                </select>

              

               <label className="flex items-center font-semibold space-x-2 mb-2">Start Date</label>

               <input type="date" name='startDate'  value={customFormData.startDate} 
               onChange={handleChange} 
               className="w-full p-2 mb-2 border rounded" />

              {!currentlyStudying && 
                (<> <label className="flex items-center font-semibold space-x-2 mb-2">
                  End Date</label> <input type="date" name="endDate"  value={customFormData.endDate} onChange={handleChange} 
                  className="w-full p-2 mb-2 border rounded" />
             </>) }


                <label className="flex items-center space-x-2 mb-2">
                  <input type="checkbox" checked={currentlyStudying} onChange={(e) => setCurrentlyStudying(e.target.checked)} />
                  <span>Currently Studying</span>
                </label>





              </>
            )}

            {type === "certification" && (
              <>
                <Label>Certification Name</Label>
                <Input name="certification" value={formData.certification} onChange={handleChange} />

                <Label>Issuing Organization</Label>
                <Input name="org" value={formData.org} onChange={handleChange} />

                <Label>Issue Date</Label>
                <Input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} />

                <Label>Expiration Date</Label>
                <Input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} disabled={formData.certificateAlways} />
                <Checkbox name="certificateAlways" checked={formData.certificateAlways} onChange={handleChange} /> Does not expire
              </>
            )}

            {type === "skill" && (
              <>
                <Label>Skill Name</Label>
                <input
                  type="text"
                  value={input}
                  onChange={handleSkillsChange}
                  // onKeyDown={handleKeyDown}
                  placeholder="Type a skill and press ','"
                  className="w-full p-2 border rounded-lg"
                />  {filteredSuggestions.length > 0 && (
                  <div className="border rounded mt-2 bg-white shadow-md">
                    {filteredSuggestions.map((skill, index) => (
                      <div
                        key={index}
                        onClick={() => addSkill(skill)}
                        className="p-2 cursor-pointer hover:bg-gray-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                )}
          
                {/* <Input name="skillsData" value={customSkillsData} onChange={ } /> */}

                <div className="flex flex-wrap gap-2 mt-3">
                  {customSkillsData.map((skill, index) => (
                    <div key={index} className="bg-purple-500 text-white px-3 py-1 rounded-full flex items-center">
                      {skill}
                      <button
                        onClick={() => removeSkill(index)}
                        className="ml-2 text-sm  px-2 py-0.5 rounded-full"
                      >
                        <FontAwesomeIcon icon={faXmark}  />
                      </button>
                    </div>
                  ))}
                </div>

                {/* <Label>Skill Level</Label>
                <Select name="skillLevel" value={formData.skillLevel} onChange={handleChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select skill level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select> */}
              </>
            )}

            {type === "language" && (
              <>
                <Label>Select Level</Label>
                <Input name="language" value={formData.language} onChange={handleChange} placeholder="Enter Language" />

                <Label>Select Language</Label>
                <Select name="language" value={formData.language} onChange={handleChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select skill level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Spanish">Spanish</SelectItem>
                    <SelectItem value="French">French</SelectItem>
                    <SelectItem value="German">German</SelectItem>
                    <SelectItem value="Mandarin">Mandarin</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                  </SelectContent>
                </Select>
              </>
            )}

            <Button onClick={handleSave}>Save</Button>
            {/* Close button to close the dialog */}
          </DialogContent>
        </Dialog>
      </div>
    );
  };



  // Experience
  const ProfileSection = ({ profileData }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [showDialog, setShowDialog] = useState(false);

    const experiencesPerPage = 3;
    const startIndex = currentPage * experiencesPerPage;
    const endIndex = startIndex + experiencesPerPage;
    const paginatedExperiences = experiences.slice(startIndex, endIndex);







    const addExperience = (experience) => {
      setExperiences([...experiences, experience]);
    };

    const ExperienceList = () => { // if component refresh on calling set showDiaog then cut and paste this in Profile Section

      // Calculate start & end index for pagination
      const [currentPage, setCurrentPage] = useState(0);
      return (
        <div className="max-w-2xl mx-auto">


          {/* Experience Cards */}
          <div className="grid gap-4 w-max ">
            {paginatedExperiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-4 space-x-4">
            <button
              className={`px-4 py-2 rounded ${currentPage === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-700"}`}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
            >
              Previous
            </button>

            <button
              className={`px-4 py-2 rounded ${endIndex >= profileData.workExperience.length ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-700"}`}
              onClick={() => setCurrentPage((prev) => (endIndex < profileData.workExperience.length ? prev + 1 : prev))}
              disabled={endIndex >= profileData.workExperience.length}
            >
              Next
            </button>
          </div>
        </div>
      );
    };
    return (

      <div className="p-4 max-w-xl rounded-lg w-full mx-auto">
        <div className="mb-4 bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-bold text-lg text-center">Work Experience  <button onClick={() => setShowDialog(true)} className="  p-4 rounded-lg shadow-lg"> <FaPlus className="text-purple-500 cursor-pointer" /></button></h2>
          {experiences.length == 0 && <p className="text-gray-500 text-center">No work experience added</p>}
          {showDialog && <AddExperienceDialog onSave={addExperience} onClose={() => setShowDialog(false)} />}
          <div className="bg-white p-3 rounded-lg shadow-md flex justify-between place-items-start place-content-start ">

            <ExperienceList />





          </div>
        </div>

        <div className='mt-6'>
          <h2 className="font-bold text-lg">Education</h2>
          <div className="bg-white p-3 rounded-lg shadow-md flex justify-between items-center mt-2">
            <span>Highest Education: {profileData.highestEducation}</span>
            <button onClick={() => { setShowEducation(true) }}>  <FaPlus className="text-green-500 cursor-pointer" /></button>
            {showEducation && <ProfileDialogs type="education" isOpen={showEducation} onClose={() => setShowEducation(false)} />}
          </div>
          <div className="bg-white p-3 rounded-lg shadow-md flex justify-between items-center mt-2">
            <span>School Medium: {profileData.schoolMedium || "Not provided"}</span>
          
          </div>
        </div>

        {education.map((edu, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md mt-3 relative z-10">
            <FaGraduationCap className="text-gray-500 text-2xl absolute left-3 top-4" />
            <div className="pl-10">
              <h3 className="font-bold">{edu.degree}</h3>
              <p className="text-gray-700 text-sm">{edu.institution} • {edu.level}</p>
              <div className="mt-2 flex space-x-2 text-xs">
                <span className="bg-gray-200 px-2 py-1 rounded">Batch {edu.batch}</span>
                {edu.type && <span className="bg-gray-200 px-2 py-1 rounded">{edu.type}</span>}
              </div>
            </div>
            <FaEdit className="text-green-500 absolute right-3 top-4 cursor-pointer" />
          </div>
        ))}
      </div>
    );
  };

  const ProfileSection4 = () => {
    return (
      <div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg">
        <div className="border p-4 rounded-lg mb-4">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Skills</h2>
            <button className="text-blue-500" onClick={() => { setShowSkills(true) }}><FaEdit className='text-blue-500' /></button>
            {showSkills && <ProfileDialogs type="skill" isOpen={showSkills} onClose={() => setShowSkills(false)} />}
          </div>
          <p className="text-sm text-gray-500">{skillsDataa.length} skill medals earned</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {skillsDataa.map((skill) => (
              <span key={skill} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="border p-4 rounded-lg mb-4">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Certification</h2>
            <button className="text-green-500" onClick={() => { setShowCertification(true) }}><FaPlus className='text-blue-500' /></button>
            {showCertification && <ProfileDialogs type="certification" isOpen={showCertification} onClose={() => setShowCertification(false)} />}
          </div>
          {certificationsData.length > 0 ? (
            <ul className="list-disc ml-5 text-sm text-gray-500">
              {certificationsData.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No certification added</p>
          )}
        </div>

        {/* <div className="border p-4 rounded-lg">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Languages known</h2>
            <button className="text-blue-500" onClick={() => { setShowLanguage(true) }}><FaEdit className='text-blue-500' /></button>
            {showLanguage && <ProfileDialogs type={"language"} isOpen={showLanguage} isClose={() => { setShowLanguage(false) }} />}
          </div>
          <div className="flex gap-2 mt-2">
            {languagesData.map(({ name, level }) => (
              <span key={name} className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center">
                {name} {level && <span className="text-green-500 ml-1">{level}</span>}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    );
  };

  return (
    <>
      <div className='sm:w-auto'>
        <Navbar />
      </div>
      <div className='bg-gray-100'>
        <div className="flex flex-col md:flex-row gap-4 items-start justify-evenly lg:ml-60 p-4">
          <div className="w-full md:w-1/3 gap-2 m-4 md:sticky top-0 h-screen">
            <div className="mb-4">
              <ProfileCard user={dummyUser} />
            </div>
            <div>
              <ProfileDetails profile={dummyProfile} />
            </div>
          </div>

          <div className="w-full md:w-2/3 flex flex-col items-center justify-between overflow-y-auto max-h-screen lg:mr-auto mt-20">
            <ProfileSection profileData={profileData} />
            {/* <ProfileSection profileData={profileData} /> */}
            <ProfileSection4 />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
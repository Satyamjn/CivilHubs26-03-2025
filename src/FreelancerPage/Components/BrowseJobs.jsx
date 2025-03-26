import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Button } from '../../LandingPage/Components/button';
import { useEffect } from 'react';

import { Search, Briefcase, AlertCircle } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faBriefcase, faLocationDot, faGraduationCap, faCube } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { MdVerified } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

import { useNavigate, useLocation, Link } from "react-router-dom";
export const jobs = [
  {
    id: 1,
    title: "Site Engineer",
    salary: "₹30,000 - ₹50,000/Month",
    company: "L&T",
    location: "Mumbai",
    experience: "2 - 5 years",
    requirement: "AutoCAD Knowledge",
    image: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
    tags: ["New", "10 Openings", "Onsite"],
    description: "2+ years experience in site supervision and execution.",
    jobType: "Field job"
  },
  {
    id: 2,
    title: "Structural Engineer",
    salary: "₹40,000 - ₹60,000/Month",
    company: "Tata Projects",
    location: "Delhi",
    experience: "3 - 6 years",
    requirement: "STAAD Pro & ETABS",
    image: "https://cdn-icons-png.flaticon.com/512/3774/3774291.png",
    tags: ["Structural Analysis", "5 Openings", "Hybrid"],
    description: "3+ years of experience in structural design and analysis.",
    jobType: "Hybrid"
  },
  {
    id: 3,
    title: "Geotechnical Engineer",
    salary: "₹50,000 - ₹70,000/Month",
    company: "GMR Infra",
    location: "Hyderabad",
    experience: "4 - 8 years",
    requirement: "Soil Testing & Analysis",
    image: "https://cdn-icons-png.flaticon.com/512/2541/2541995.png",
    tags: ["Experienced", "6 Openings", "Onsite"],
    description: "4+ years experience in soil mechanics and foundation engineering.",
    jobType: "Onsite"
  },
  {
    id: 4,
    title: "Transportation Engineer",
    salary: "₹55,000 - ₹75,000/Month",
    company: "AECOM",
    location: "Bangalore",
    experience: "5 - 9 years",
    requirement: "Highway Design Software",
    image: "https://cdn-icons-png.flaticon.com/512/4052/4052455.png",
    tags: ["Roads & Highways", "3 Openings", "Remote"],
    description: "5+ years experience in road and highway planning.",
    jobType: "Remote"
  },
  {
    id: 5,
    title: "Construction Manager",
    salary: "₹70,000 - ₹1,00,000/Month",
    company: "Shapoorji Pallonji",
    location: "Chennai",
    experience: "6 - 12 years",
    requirement: "Project Management",
    image: "https://cdn-icons-png.flaticon.com/512/856/856992.png",
    tags: ["Project Execution", "4 Openings", "Full-time"],
    description: "6+ years experience in managing large-scale construction projects.",
    jobType: "Full-time"
  },
  {
    id: 6,
    title: "Environmental Engineer",
    salary: "₹45,000 - ₹65,000/Month",
    company: "WSP Global",
    location: "Pune",
    experience: "3 - 7 years",
    requirement: "EIA & Waste Management",
    image: "https://cdn-icons-png.flaticon.com/512/1076/1076322.png",
    tags: ["Sustainability", "5 Openings", "Hybrid"],
    description: "3+ years experience in environmental impact assessment.",
    jobType: "Hybrid"
  },
  {
    id: 7,
    title: "BIM Modeler",
    salary: "₹40,000 - ₹60,000/Month",
    company: "Jacobs",
    location: "Kolkata",
    experience: "2 - 6 years",
    requirement: "Revit & Navisworks",
    image: "https://cdn-icons-png.flaticon.com/512/2707/2707016.png",
    tags: ["BIM", "8 Openings", "Remote"],
    description: "2+ years experience in building information modeling.",
    jobType: "Remote"
  },
  {
    id: 8,
    title: "Water Resources Engineer",
    salary: "₹50,000 - ₹80,000/Month",
    company: "Larsen & Toubro",
    location: "Ahmedabad",
    experience: "4 - 9 years",
    requirement: "Hydraulic Modelling",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135731.png",
    tags: ["Irrigation & Dams", "4 Openings", "Full-time"],
    description: "4+ years experience in water resource management.",
    jobType: "Full-time"
  },
  {
    id: 9,
    title: "Urban Planner",
    salary: "₹60,000 - ₹90,000/Month",
    company: "HCP Design",
    location: "Surat",
    experience: "5 - 10 years",
    requirement: "GIS & AutoCAD",
    image: "https://cdn-icons-png.flaticon.com/512/446/446054.png",
    tags: ["City Planning", "3 Openings", "Hybrid"],
    description: "5+ years experience in urban planning and city development.",
    jobType: "Hybrid"
  },
  {
    id: 10,
    title: "Quantity Surveyor",
    salary: "₹50,000 - ₹75,000/Month",
    company: "Simplex Infra",
    location: "Jaipur",
    experience: "3 - 8 years",
    requirement: "BOQ & Cost Estimation",
    image: "https://cdn-icons-png.flaticon.com/512/3233/3233160.png",
    tags: ["Budgeting", "6 Openings", "Onsite"],
    description: "3+ years experience in cost estimation and quantity surveying.",
    jobType: "Onsite"
  }
];  



const  BrowseJobs = () => {
  const navigate = useNavigate();

  const handleApplyNow = (job) => {
    navigate("/BrowseDetail", { state: { job } });

  };
  //==============================================

  const location = useLocation();
  // const [role, setRole] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  // ===========================================
  // TechStack component se data aa raha hai
  let data = location.state?.category || null;
  // =============================================

  // console.log(data,"dsksdfksbskbfs");

  // ===================================
  // SearchBar component se data aa raha hai
  const searchBarRole = location.state?.id1 || null;
  const searchBarExperience = location.state?.locationn || null; // Data A Gaya
  // ========================================================
  // console.log("hiiiiiii",searchBarExperience,searchBarRole);


  // const handleFilter = (index,value) => {
  //   const d = filteredJobs.filter((l)=>l.index.toLowerCase().includes(value.toLowerCase()));

  // }
  useEffect(() => {
    console.log("Component Reloaded Hua Hai");
    if (data) {
      let daata = filteredJobs.filter((dat) => dat.title.toLowerCase().trim() === data.toLowerCase().trim());
      console.log(daata, "dataa");

      setFilteredJobs(daata)

    }
    else if (searchBarRole) {
      if (searchBarExperience) {
        let search = filteredJobs.filter(job => {
          return (
            (searchTerm ? job.title.toLowerCase().includes(searchTerm.toLowerCase()) : true) &&
            (locationValue ? job.location.toLowerCase().includes(locationValue.toLowerCase()) : true)
          );
        });
        setFilteredJobs(search)               

      } else {
        let searchFilter = filteredJobs.filter((sam) => sam.title.toLowerCase().includes(searchBarRole.toLowerCase()));
        setFilteredJobs(searchFilter)
      }

      // console.log(searchFilter);
    }

    else {

      setFilteredJobs(jobs);
    }
  }, []);
  // ===============================================================

  //  const Job_Search_Bar = () => {

  const locate = useLocation();



  const [searchTerm, setSearchTerm] = React.useState(searchBarRole);
  const [experiencee, setExperience] = React.useState(null);
  const [locationValue, setLocationValue] = React.useState(searchBarExperience);
  const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);
  const [error, setError] = React.useState(false);

  // useEffect(()=>{
  //   setSearchTerm(locate.state?.id1)
  // },[searchTerm])
  const locationSuggestionData = Array.from(new Set(["Indore"].concat(jobs.map((job) => job.location))));
  const [locationSuggestions, setLocationSuggestions] = React.useState([]);

  const jobSuggestions = [
    "Civil Engineer",
    "Structural Engineer",
    "Site Engineer",
    "Construction Manager",
    "Geotechnical Engineer",
    "Transportation Engineer",
    "Environmental Engineer",
    "Surveyor",
    "Project Manager (Civil)",
];



  const experienceOptions = [
    { id: 1, label: "0 - 1 Years", value: "0 - 1 Years" },
    { id: 2, label: "1 - 3 Years", value: "1 - 3 Years" },
    { id: 3, label: "3+ Years", value: "3+ Years" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    // if (!searchTerm) {
    //   setError(true);
    //   return;
    // }
    // setError(false);

    const fil = jobs.filter((job) => {

      return (

        (searchTerm ? job.title.toLowerCase().includes(searchTerm.toLowerCase()) : true) &&
        (experiencee ? job.experience.toString().includes(experiencee.toString()) : true) &&
        (locationValue ? job.location.toLowerCase().includes(locationValue.toLowerCase()) : true)
      )
    }
    )
      ;
    console.log(fil, "data hai ya nahi", searchTerm, experiencee, locationValue);

    setFilteredJobs(fil);

  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);


    if (value.length > 0) {
      const filtered = jobSuggestions.filter((job) =>
        job.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    }
    else {
      setFilteredSuggestions([]);
    }
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocationValue(value);


    if (value.length > 0) {
      const filtered = locationSuggestionData.filter((job) =>
        job.toLowerCase().includes(value.toLowerCase())
      );
      setLocationSuggestions(filtered);
    }
    else {
      setLocationSuggestions([]);
    }
  };

  const handleSelectSuggestion = (job) => {
    setSearchTerm(job);
    setFilteredSuggestions([]);
  };

  const handleLocationSuggestion = (job) => {
    setLocationValue(job)
    setLocationSuggestions([]);
  };



  const SimilarJobs = ({ jobs, searchTerm, location }) => {
    // Filter jobs based on title and location
    const [SimilarJobss, setSimilarJobss] = useState([]);
    useEffect(() => {
      const Similar = jobs.filter((job) => {
        return (
          (searchTerm ? job.title.toLowerCase().includes(searchTerm.toLowerCase()) : true) ||
          (location ? job.location.toLowerCase().includes(location.toLowerCase()) : true)
        );
      });

      setSimilarJobss(Similar);

    }, [searchTerm, locationValue]);

    return (
      <aside className="bg-white  flex flex-col items-center justify-center rounded-lg shadow-md ">
        <div className="bg-white p-6 flex flex-col items-center justify-center rounded-lg shadow-md shadow-t-teal-400 bg-gradient-to-b from-teal to-teal-500">
          <div className="mt-4 text-center">
            <p className="font-semibold">Similar Jobs</p>
            {SimilarJobss.length > 0 ? (
              <ul className="mt-5 text-sm">
                {SimilarJobss.slice(0, 3).map((job, index) => (
                  <li key={index} className="p-2 bg-white rounded-md shadow-sm mb-2 w-full">
                  
                  <div className=" relative p-4 bg-white mx-2 border border-gray-200 rounded-lg shadow-sm flex flex-col sm:flex-row space-x-0 sm:space-x-4 mt-4 ">
                      <div className="  sm:w-15 sm:h-20 -mt-3  rounded-lg flex justify-center p-5 items-center  ">
                        <img
                          src={job.image}
                          alt="Company Logo"
                          className="w-full   h-full max-w-12
                     object-contain "
                        />
                      </div>

                      <div className="w-full sm:w-3/4 mt-4 sm:mt-0">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center ">
                          <div className="flex-1">
                            <h2 className="text-md font-bold lg:w-3/4  lg:-translate-x-5    ">{job.title}</h2>
                            <p className="text-gray-500 text-sm  lg:-translate-x-5 font-semibold mt-1">{job.salary}</p>
                            {/* {salary} */}
                            <div className='flex flex-col lg:-ml-16 mt-4 sm:text-sm  '>

                              <p className="text-gray-500 flex items-center gap-2"><FontAwesomeIcon icon={faBriefcase} />{job.company}</p>

                              <p className=" text-gray-500 flex items-center gap-2"><FontAwesomeIcon icon={faLocationDot} />{job.location}</p>
                              <p className="text-gray-500 flex items-center gap-2"><FontAwesomeIcon icon={faGraduationCap} />{job.experience}</p>
                              <p className="text-gray-500 flex items-center gap-2"><FontAwesomeIcon icon={faCube} />{job.requirement}</p>





                              <div className="flex flex-wrap items-center space-x-2 mt-2">

                                {job.tags.map((tag, index) => (
                                  <span key={index} className={`px-2 py-1 ${tag === "New" ? "bg-red-100 text-red-500" : "bg-gray-100 text-gray-500"} text-xs rounded`}>
                                    {tag}
                                  </span>
                                ))} 

                              </div>

                              <p className="text-gray-500 mt-2 flex items-center gap-2 "><FontAwesomeIcon icon={faUser} />{job.description}</p>
                            </div>
                            <hr className=' border-gray-400 translate-y-2  lg:-translate-x-16  z-50 mb-4' />
                            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center mt-2">

                             
                              <div className="flex space-x-2 w-full sm:w-auto justify-start      sm:justify-end">
                                <button className="px-2 bg-white border border-teal-500 text-sm font-semibold text-teal-500 rounded-3xl w-full sm:w-auto flex items-center justify-center gap-2">
                                  <IoIosCall className="text-teal-500 text-lg" />
                                  Call
                                </button>

                                <button onClick={() => handleApplyNow(job)}
                                  className="px-3 py-1 bg-teal-500 text-white rounded-3xl w-full sm:w-auto text-sm  font-semibold">Apply</button>
                              </div>
                            </div>
                          </div>
                        </div>
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
      </aside>
    );
  };

   useEffect(() => {
      window.scrollTo(0, 0); // Page को top से load करेगा
    }, []);

  return (

    <>

      <Navbar />
      <div className="flex w-screen sm:w-[60%] shadow-[1px_1px_4px] bg-transparent rounded-full
      items-center gap-4 mx-auto  mt-3 ">
        <form
          onSubmit={handleSearch}
          className={`relative flex items-center border rounded-full p-2 w-full bg-white ${error ? "border-red-500" : "border-gray-300"
            }`}
        >
          {/* {/ Search by Skill /} */}
          <div className="flex items-center px-3 relative w-full">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search jobs by 'skill'"
              value={searchTerm}
              onChange={handleInputChange}

              className="outline-none p-2 text-gray-700 w-full"
            />

            {/* {/ Suggestions Dropdown /} */}
            {filteredSuggestions.length > 0 && (
              <ul className="absolute top-12 left-0 w-full bg-white border border-gray-300 shadow-lg rounded-lg max-h-48 overflow-y-auto z-10">
                {filteredSuggestions.map((job, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectSuggestion(job)}
                  >
                    {job}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* {/ Experience Dropdown /} */}
          <div className="flex items-center px-3 border-l w-full  border-gray-300">
            <Briefcase className="w-5 h-5 text-gray-500" />
            <select
              className="outline-none p-2 text-gray-700 w-full bg-transparent appearance-none "
              value={experiencee}
              onChange={(e) => setExperience(e.target.value)}
            >
              <option value="">{experiencee ? experiencee : "Your Experience"}</option>
              {experienceOptions.map((experienceee) => (
                <option key={experienceee.id} value={experienceee.value}>
                  {experienceee.label}
                </option>
              ))}
            </select>
          </div>

          {/* Location Dropdown */}
          <div className="flex items-center px-3 border-l w-full  border-gray-300">
            <Briefcase className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Location"
              value={locationValue}
              onChange={handleLocationChange}

              className="outline-none p-2 text-gray-700 w-full"


            />
           
            {locationSuggestions.length > 0 && (
              <ul className="absolute top-12 left-0 w-full bg-white border border-gray-300 shadow-lg rounded-lg max-h-48 overflow-y-auto z-10">

                {locationSuggestions.map((loc) => (
                  <li

                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleLocationSuggestion(loc)}>

                    {loc}
                  </li>
                ))}

              </ul>
            )}

          </div>



          {/* {/ Search Button /} */}
          <button
            type="submit"

            className="bg-teal-500 text-white px-4 py-2 rounded-full ml-2 font-semibold"
          >
            <Search className="text-white" />
          </button>
        </form>
 
        {/* {/ Error Message /} */}
        {error && (
          <div className="flex items-center text-red-500 mt-2">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span>Please enter a job title, company, skill, or department</span>
          </div>
        )}
      </div>

      
      <div className=" container  max-w-9xl    mx-auto px-5  py-8 flex flex-col lg:flex-row ">
        {/* Filters Section */}

        <aside className="w-full  lg:w-1/4 p-7 bg-white border rounded-xl border-gray-200 text-xs text-gray-700 font-normal">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-teal-500 flex items-center ">
              <i className=" mr-3"></i> <FontAwesomeIcon icon={faFilter} /> <span className='m-2'>Filters</span> (1)
            </h2>


            {/* Location Filter */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold">Location</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full font-semibold text-sm">Location</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Work from home</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Part Time</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Fresher</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Field job</span>
              </div>
            </div>

            
           {/* Job Roles Filter */}
     <div className="mb-4">
  <h3 className="text-md font-semibold">Job Roles</h3>
  <div className="flex flex-wrap gap-2 mt-2 font-normal">
    <span className="px-2 py-1 rounded-full text-sm border">Civil Engineer</span>
    <span className="px-2 py-1 rounded-full text-sm border">Structural Engineer</span>
    <span className="px-2 py-1 rounded-full text-sm border">Site Engineer</span>
    <span className="px-3 py-1 rounded-full text-sm border">Construction Manager</span>
    <span className="px-3 py-1 rounded-full text-sm border mb-1">Geotechnical Engineer</span>
    <span className="px-3 py-1 rounded-full text-sm border mb-1">Surveyor</span>
    <Button className="px-2 py-1 text-teal-500 bg-white border-2 border-teal-500 rounded-full text-sm hover:bg-white">
      + 37 More
    </Button>
  </div>
</div>


            {/* Monthly Salary Filter */}
            <div className="mb-4 leading-8">
              <h3 className="text-md font-semibold ">Monthly Salary</h3>
              <div className="flex flex-col mt-2">
                <label className="block">
                  <input type="radio" name="salary" className="mr-2" /> More than ₹5,000
                </label>
                <label className="block">
                  <input type="radio" name="salary" className="mr-2" /> More than ₹10,000
                </label>
                <label className="block">
                  <input type="radio" name="salary" className="mr-2" /> More than ₹20,000
                </label>
                <label className="block">
                  <input type="radio" name="salary" className="mr-2" /> More than ₹30,000
                </label>
                <label className="block">
                  <input type="radio" name="salary" className="mr-2" /> More than ₹40,000
                </label>
                <label className="block">
                  <input type="radio" name="salary" className="mr-2" /> More than ₹50,000
                </label>
              </div>
            </div>

            {/* Experience Filter */}
            <div className="mb-4 leading-8">
              <h3 className="text-md font-semibold">Experience</h3>
              <div className="flex flex-col mt-2">
                <label className="block">
                  <input type="radio" name="experience" className="mr-2" /> Fresher
                </label>
                <label className="block">
                  <input type="radio" name="experience" className="mr-2" /> Less than 1 year
                </label>
                <label className="block">
                  <input type="radio" name="experience" className="mr-2" /> Less than 2 years
                </label>
                <label className="block">
                  <input type="radio" name="experience" className="mr-2" /> Less than 3 years
                </label>
                <label className="block">
                  <input type="radio" name="experience" className="mr-2" /> Less than 4 years
                </label>
                <label className="block">
                  <input type="radio" name="experience" className="mr-2" /> More than 4 years
                </label>
              </div>
            </div>

            {/* Gender Filter */}
            <div className="mb-4 leading-8">
              <h3 className="text-md font-semibold">Gender</h3>
              <div className="flex flex-col mt-2">
                <label className="block">
                  <input type="radio" name="gender" className="mr-2" /> Jobs for Men
                </label>
                <label className="block">
                  <input type="radio" name="gender" className="mr-2" /> Jobs for Women
                </label>
              </div>
            </div>

            {/* Qualification Filter */}
            <div className="mb-4 leading-8">
              <h3 className="text-md font-semibold">Qualification</h3>
              <div className="flex flex-col mt-2">
                <label className="block">
                  <input type="radio" name="qualification" className="mr-2" /> All Education levels
                </label>
                <label className="block">
                  <input type="radio" name="qualification" className="mr-2" /> 10th Pass and above
                </label>
                <label className="block">
                  <input type="radio" name="qualification" className="mr-2" /> 12th Pass and above
                </label>
                <label className="block">
                  <input type="radio" name="qualification" className="mr-2" /> Diploma and above
                </label>
                <label className="block">
                  <input type="radio" name="qualification" className="mr-2" /> Graduate and above
                </label>
                <label className="block">
                  <input type="radio" name="qualification" className="mr-2" /> Post Graduate and above
                </label>
              </div>
            </div>

            <button className="py-2 px-4 mt-4 align-end text-teal-500 border border-teal-500 rounded-3xl">Clear All</button>
          </div>
        </aside>


        {/* Job Listings Section */}
        <main className="w-full lg:w-1/2 p-4">

          <h1 className="text-2xl font-semibold mb-4">{filteredJobs.length} Jobs Available</h1>
          {
            filteredJobs.length === 0 && <p className="text-center text-gray-500">No jobs found matching your criteria.</p>

          }
          {filteredJobs.length > 0 && filteredJobs.map((job) => {
            return (
          
              <div className=" relative p-4 bg-white mx-2 border border-gray-200 rounded-lg shadow-sm flex flex-col sm:flex-row space-x-0 sm:space-x-4 mt-4 ">
                <div className="  sm:w-15 sm:h-20 -mt-3  rounded-lg flex justify-center p-5 items-center  ">
                  <img
                    src={job.image}
                    alt="Company Logo"
                    className="w-full   h-full max-w-12
                     object-contain "
                  />
                </div>

                <div className="w-full sm:w-3/4 mt-4 sm:mt-0">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center ">
                    <div className="flex-1">
                      <h2 className="text-md font-bold lg:w-3/4  lg:-translate-x-5  ">{job.title}</h2>
                      <p className="text-gray-500 text-sm  lg:-translate-x-5 font-semibold mt-1">{job.salary}</p>
                      {/* {salary} */}
                      <div className='flex flex-col lg:-ml-16 mt-4 sm:text-sm  '>

                        <p className="text-gray-500 flex items-center gap-2"><FontAwesomeIcon icon={faBriefcase} />{job.company}</p>

                        <p className=" text-gray-500 flex items-center gap-2"><FontAwesomeIcon icon={faLocationDot} />{job.location}</p>
                        <p className="text-gray-500 flex items-center gap-2"><FontAwesomeIcon icon={faGraduationCap} />{job.experience}</p>
                        <p className="text-gray-500 flex items-center gap-2"><FontAwesomeIcon icon={faCube} />{job.requirement}</p>





                        <div className="flex flex-wrap items-center space-x-2 mt-2">
                          {job.tags.map((tag, index) => (
                            <span key={index} className={`px-2 py-1 ${tag === "New" ? "bg-red-100 text-red-500" : "bg-gray-100 text-gray-500"} text-xs rounded`}>
                              {tag}
                            </span>
                          ))}
                        </div>

                        <p className="text-gray-500 mt-2 flex items-center gap-2 "><FontAwesomeIcon icon={faUser} />{job.description}</p>
                      </div>
                      <hr className=' border-gray-400 translate-y-2  lg:-translate-x-16  z-50 mb-4' />
                      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center mt-2">

                        <p className="flex items-center gap-2 text-[10px] text-teal-500 sm:mr-4 text-center sm:text-left -ml-16 ">
                          <MdVerified className="text-teal-500 text-lg" />Verified | Safe Job Hai</p>
                        <div className="flex space-x-2 w-full sm:w-auto justify-start sm:justify-end">
                          <button className="px-5 bg-white border border-teal-500 text-sm font-semibold text-teal-500 rounded-3xl w-full sm:w-auto flex items-center justify-center gap-2">
                            <IoIosCall className="text-teal-500 text-lg" />
                            Call
                          </button>

                          <button onClick={() => handleApplyNow(job)}
                            className="px-4 py-2 bg-teal-500 text-white rounded-3xl w-full sm:w-auto text-sm  font-semibold">Apply Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            )
          })}



        </main>



        {/* Banner on right side */}
        <aside className="w-full lg:w-1/3 p-2  bg-white h-24">

          <SimilarJobs jobs={jobs} searchTerm={searchTerm} location={locationValue} />
        </aside>




      </div>
    </>
  );
};

export default BrowseJobs;








import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse ,faHourglass,faUserGraduate,faHourglass3 } from "@fortawesome/free-solid-svg-icons";


function JobTypeSelection() {





      const vacanciess = {
          Part_Time: {
            vacancies: "60,000+ Vacancies",
          },
        };
      
        // No. of vacancies has to be fetched by API
        const jobTypes = [
          { id: 1, icon: <FontAwesomeIcon icon={faHouse} />, title: "Work from home", vacancies: vacanciess.Part_Time.vacancies },
          { id: 2, icon: <FontAwesomeIcon icon={faHourglass} />, title: "Part Time", vacancies: "5,40,000+ Vacancies" },
          { id: 3, icon: "👩", title: "Jobs for Women", vacancies: "2,90,000+ Vacancies" },
          { id: 4, icon: <FontAwesomeIcon icon={faUserGraduate} />, title: "Fresher jobs", vacancies: "6,90,000+ Vacancies" },
          { id: 5, icon: <FontAwesomeIcon icon={faHourglass3} />, title: "Full Time", vacancies: "60,000+ Vacancies" }
        ];
      
    return (
      <div>
        
  
        <div className="max-w-7xl mx-auto text-center py-10 px-4 -mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-700">
          Which type of <span className="text-purple-500">job do you want ? </span>
        </h2>
  
     
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {jobTypes.map((job) => (
            <div
              key={job.id}
              className="relative w-full h-40 flex flex-col items-center justify-center p-4 rounded-lg border cursor-pointer overflow-hidden group transition-all duration-500 ease-in-out hover:text-white bg-white"
            >
              
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-700 rounded-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
  
              <div className="relative z-10 text-center">
                <span className="text-2xl">{job.icon}</span>
                <h3 className="font-bold text-lg mt-2">{job.title}</h3>
                <h6 className="text-sm">{job.vacancies} &gt;</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    
  );
};

export default JobTypeSelection;

import React from 'react'
import Navbar from "../shared/Navbar";
import { useState } from "react";
import Footer from "../shared/Footer";
import TestimonialsBar from "./TestimonialsBar";

function ResumeBuilder() {
     const [expanded, setExpanded] = useState({});
    
      const toggleExpand = (question) => {
        setExpanded({ ...expanded, [question]: !expanded[question] });
      };
    
      const faqData = [
        {
          question: "What is a Resume Builder?",
          answer: "A resume builder is an online tool that helps you make a professional resume quickly. It offers templates, and automatic formatting to keep your resume neat, attractive, and suited for the job you are applying for. Overall, a resume builder tool helps in easy resume creation."
        },
        {
          question: "How long should my resume be?",
          answer: "The ideal length of a resume typically depends on your experience and the job you’re applying for. Typically, a resume should be one to two pages. For freshers, one page is usually enough, but experienced workers might need two pages to fully show their skills and accomplishments."
        },
        {
          question: "How can I customize my resume?",
          answer: "If you prefer to create your resume template, our builder allows the customization of personal preferences. Simply select “customize your own” on the resume builder. Then, you can choose from different templates and customize your resume as per your needs."
        },
        // Add more FAQ items here
        {
            question: "Is AI Resume generator reliable?",
            answer: "Yes, an AI resume maker is a reliable tool that helps you create impressive resumes in minutes by automatically filling in details based on your personal and professional experiences."
          },
          {
            question: "What is the best format for a resume for a fresher?",
            answer: "For freshers or entry-level professionals, a chronological or skill-based format is ideal. A free online resume builder can help you select and customize the most suitable format for your needs."
          },
    
    
      ];
    
      const features = [
        {
          icon: "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2175_24479)'%3e%3cpath%20d='M42.0003%2023.9307V52.2667C42.0003%2053.0093%2041.7053%2053.7215%2041.1802%2054.2466C40.6551%2054.7717%2039.9429%2055.0667%2039.2003%2055.0667H3.73359C2.99099%2055.0667%202.2788%2054.7717%201.75369%2054.2466C1.22859%2053.7215%200.933594%2053.0093%200.933594%2052.2667V16.8C0.933594%2016.0574%201.22859%2015.3452%201.75369%2014.8201C2.2788%2014.295%202.99099%2014%203.73359%2014H32.0696L42.0003%2023.9307Z'%20fill='%23DFE1E6'/%3e%3cpath%20d='M12.8984%2037.5479L15.0358%2031.8359C15.3624%2030.9869%2015.8613%2030.2146%2016.5011%2029.5679L16.5104%2029.5586L23.3331%2032.6666L26.4411%2039.4893L26.4318%2039.4986C25.7851%2040.1384%2025.0128%2040.6373%2024.1638%2040.9639L18.4518%2043.1013L12.8984%2037.5479Z'%20fill='%23004BA9'/%3e%3cpath%20d='M46.3018%2019.6279L26.4404%2039.4893L16.5098%2029.5586H16.5191L36.3711%209.69727L37.7991%209.79993L46.6658%2018.6666L46.3018%2019.6279Z'%20fill='%23004BA9'/%3e%3cpath%20d='M54.2448%2011.6852L50.2781%2015.6518L48.5328%2015.8665L40.1328%207.4665L40.3475%205.72117L44.3141%201.7545C44.8428%201.22992%2045.5574%200.935547%2046.3021%200.935547C47.0469%200.935547%2047.7615%201.22992%2048.2901%201.7545L54.2448%207.70917C54.7694%208.23783%2055.0638%208.9524%2055.0638%209.69717C55.0638%2010.4419%2054.7694%2011.1565%2054.2448%2011.6852Z'%20fill='%23DE3700'/%3e%3cpath%20d='M18.4516%2043.1022L11.6102%2045.6688C11.4316%2045.7363%2011.2374%2045.7508%2011.0508%2045.7106C10.8642%2045.6704%2010.6931%2045.5772%2010.5582%2045.4422C10.4232%2045.3072%2010.33%2045.1362%2010.2898%2044.9496C10.2496%2044.763%2010.2641%2044.5687%2010.3316%2044.3902L12.8982%2037.5488C14.2702%2037.8195%2015.5307%2038.492%2016.5196%2039.4808C17.5084%2040.4696%2018.1809%2041.7302%2018.4516%2043.1022Z'%20fill='%23021330'/%3e%3cpath%20d='M36.3672%209.70117L40.3429%205.72548L50.2719%2015.6545L46.2962%2019.6302L36.3672%209.70117Z'%20fill='%23C1DBFB'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2175_24479'%3e%3crect%20width='56'%20height='56'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", // Replace with actual icon path
          title: "Smart customization",
          description:
            "Customize a high-impact resume with our resume maker designed to leave a lasting impression.",
        },
        {
          icon: "https://apna.co/ccompass/assets/cvapproveTemplate-DY4sKq46.svg",
          title: "Professional templates",
          
          description:
            "Access a range of classic to modern resume templates to create a resume that stands out.",
        },
        {
          icon: "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2175_24504)'%3e%3cpath%20d='M40.1336%2048.5336V3.73359C40.1336%202.18706%2038.8801%200.933594%2037.3336%200.933594H10.2669L0.933594%2010.2669V48.5336C0.933594%2050.0801%202.18706%2051.3336%203.73359%2051.3336H37.3336C38.8801%2051.3336%2040.1336%2050.0801%2040.1336%2048.5336Z'%20fill='%23BDE9DD'/%3e%3cpath%20d='M41.0664%2055.0664C48.7984%2055.0664%2055.0664%2048.7984%2055.0664%2041.0664C55.0664%2033.3344%2048.7984%2027.0664%2041.0664%2027.0664C33.3344%2027.0664%2027.0664%2033.3344%2027.0664%2041.0664C27.0664%2048.7984%2033.3344%2055.0664%2041.0664%2055.0664Z'%20fill='%23005F3E'/%3e%3cpath%20d='M10.2669%200.933594V7.46693C10.2669%209.01626%209.01626%2010.2669%207.46693%2010.2669H0.933594L10.2669%200.933594Z'%20fill='%23005F3E'/%3e%3cg%20clip-path='url(%23clip1_2175_24504)'%3e%3cpath%20d='M38.0004%2045.2001L33.8004%2041.0001L32.4004%2042.4001L38.0004%2048.0001L50.0004%2036.0001L48.6004%2034.6001L38.0004%2045.2001Z'%20fill='%23EAF8F4'/%3e%3c/g%3e%3cpath%20d='M34.5329%2015.8667H6.53294C6.01681%2015.8667%205.59961%2015.4485%205.59961%2014.9333C5.59961%2014.4181%206.01681%2014%206.53294%2014H34.5329C35.0491%2014%2035.4663%2014.4181%2035.4663%2014.9333C35.4663%2015.4485%2035.0491%2015.8667%2034.5329%2015.8667Z'%20fill='%23005F3E'/%3e%3cpath%20d='M34.5333%2023.3335H28.9333C28.4172%2023.3335%2028%2022.9153%2028%2022.4001C28%2021.8849%2028.4172%2021.4668%2028.9333%2021.4668H34.5333C35.0495%2021.4668%2035.4667%2021.8849%2035.4667%2022.4001C35.4667%2022.9153%2035.0495%2023.3335%2034.5333%2023.3335Z'%20fill='%23005F3E'/%3e%3cpath%20d='M25.1996%2023.3332H6.53294C6.01681%2023.3332%205.59961%2022.9151%205.59961%2022.3999C5.59961%2021.8847%206.01681%2021.4666%206.53294%2021.4666H25.1996C25.7157%2021.4666%2026.1329%2021.8847%2026.1329%2022.3999C26.1329%2022.9151%2025.7157%2023.3332%2025.1996%2023.3332Z'%20fill='%23005F3E'/%3e%3cpath%20d='M27.0663%2030.8003H6.53294C6.01681%2030.8003%205.59961%2030.3831%205.59961%2029.8669C5.59961%2029.3508%206.01681%2028.9336%206.53294%2028.9336H27.0663C27.5824%2028.9336%2027.9996%2029.3508%2027.9996%2029.8669C27.9996%2030.3831%2027.5824%2030.8003%2027.0663%2030.8003Z'%20fill='%23005F3E'/%3e%3cpath%20d='M23.3329%2038.2671H6.53294C6.01681%2038.2671%205.59961%2037.8499%205.59961%2037.3337C5.59961%2036.8176%206.01681%2036.4004%206.53294%2036.4004H23.3329C23.8491%2036.4004%2024.2663%2036.8176%2024.2663%2037.3337C24.2663%2037.8499%2023.8491%2038.2671%2023.3329%2038.2671Z'%20fill='%23005F3E'/%3e%3cpath%20d='M17.7329%2045.7339H6.53294C6.01681%2045.7339%205.59961%2045.3167%205.59961%2044.8005C5.59961%2044.2844%206.01681%2043.8672%206.53294%2043.8672H17.7329C18.2491%2043.8672%2018.6663%2044.2844%2018.6663%2044.8005C18.6663%2045.3167%2018.2491%2045.7339%2017.7329%2045.7339Z'%20fill='%23005F3E'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2175_24504'%3e%3crect%20width='56'%20height='56'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_2175_24504'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(29%2029)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
          title: "ATS-friendly",
          description:
            "Create a resume with our ATS-friendly tool that optimizes your resume for seamless tracking.",
        },
        {
          icon: "https://apna.co/ccompass/assets/cvResume-1zXnxh9a.svg",
          title: "Job-ready resumes",
          description:
            "Our resume builder ensures your resume is industry-ready, aligning with job requirements.",
        },
        {
            icon: "https://apna.co/ccompass/assets/multiFormatedResume-mkNrHKeX.svg",
            title: "Easy download",
            description:
              "Download and share a perfectly crafted resume, suited for any job application.",
          },
          {
            icon: "https://apna.co/ccompass/assets/spellCheck-Vg8NIRUt.svg",
            title: "Automatic Spell checker",
            description:
              "Let our proofreaders ensure your resume has flawless grammar, helping you land jobs.",
          },
      ];
      
  return (
    
     <>
      <Navbar />
     
      <div className="bg-gradient-to-b from-blue-900 to-purple-900 text-white p-4">
        {/* Cover Letter Image Section (Text on Left, Image on Right) */}
        <div className="py-12 max-w-6xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center">
          {/* Image on Right */}
          <div className="md:w-1/2 mb-5">
            <img
              src="https://cdn.apna.co/career-compass-static/resumeHeroImg.svg?fm=webp"
              alt="Resume"
              className="w-full"
            />
          </div>

          {/* Text on Left */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold">
            Drive your career
            forward with our <span className="text-blue-300">Resume Builder</span>
            </h1>
            <p className="mt-4 text-lg">
            Confused about how to create a stunning resume? No Worries! Our Resume Writer is here for you.
            </p>
            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              Generate Resume
            </button>
            <div className="mt-8 flex justify-start space-x-4">
              <img src="https://cdn.apna.co/career-compass-static/paytm.svg?fm=webp&q=75" alt="Paytm" className="h-6" />
              <img src="https://cdn.apna.co/career-compass-static/flipkart.svg?fm=webp&q=75" alt="Flipkart" className="h-6" />
              <img src="https://cdn.apna.co/career-compass-static/uberLogo.svg?fm=webp&q=75" alt="Uber" className="h-6" />
              <img src="https://cdn.apna.co/career-compass-static/swiggyLogo.svg?fm=webp&q=75" alt="Swiggy" className="h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className='px-5 py-5'>

      {/* How Does It Work Section */}
      <div className="bg-white text-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-start">How does it work?</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            <div className="text-start">
              <img
                src="https://cdn.apna.co/career-compass-static/step1.svg?fm=webp&q=75"
                alt="Choose a template"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Step 1: Choose a template</h3>
              <p className="mt-2">
              Pick from various resume templates for free to create a resume in minutes.
              </p>
            </div>
            <div className="text-start">
              <img
                src="https://cdn.apna.co/career-compass-static/step2.svg?fm=webp&q=75"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Step 2: Enter your details</h3>
              <p className="mt-2">
              Use our free resume builder to easily input your personal and professional details.
              </p>
            </div>
            <div className="text-start">
              <img
                src="https://cdn.apna.co/career-compass-static/step3.svg?fm=webp&q=75"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Step 3: Download your Resume</h3>
              <p className="mt-2">
              Easily download and share your resume with recruiters for a winning job application.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    

      <div className="mt-10 bg-white text-black py-10 px-5 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-start mb-6">
      Why candidates trust our resume builder
      </h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-6 text-start">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start mb-3">
            <img src={feature.icon} alt={feature.title} className="w-15 h-15 mb-3" />
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-sm text-gray-600 mt-3">{feature.description}</p>
          </div>
        ))}
      </div>

      <TestimonialsBar/>
    </div>
    <div className="sm:w-75 bg-white py-12 pb-3 ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Discover more tools
      </h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Resume Checker Card */}
        <div className="bg-white rounded-lg shadow-md ">
          <div className="flex justify-center">
            <img src="https://cdn.apna.co/career-compass-static/resumeChecker.svg" alt="Resume Checker" className="w-full h-50" /> {/* Replace with your image path */}
          </div>
          <h3 className="mt-4 ml-5 text-xl font-medium text-gray-900 text-start">
            Resume Checker
          </h3>
          <p className="mt-2 m-5 text-gray-500 text-start">
            Instantly enhance your resume. Our checker suggests improvements for maximum impact.
          </p>
          <div className="mt-4 pb-5 ml-5 text-start">
            <button className="text-indigo-600 hover:text-indigo-800">
              Learn more
            </button>
          </div>
        </div>

        {/* Resume Builder Card */}
        <div className="bg-white rounded-lg shadow-md">
           <div className="flex justify-center">
            <img src="https://apna.co/ccompass/assets/ResumeLanding2-kV_9tem4.svg" alt="Resume Builder" className="overflow-hidden w-full h-50" /> {/* Replace with your image path */}
          </div>
          <h3 className="mt-4 ml-5 text-xl font-medium text-gray-900 text-start">
            Resume Builder
          </h3>
          <p className="mt-2 m-5 text-gray-500 text-start">
            Create a resume with ease that perfectly matches your experience.
          </p>
          <div className="mt-4 ml-5 text-start">
            <button className="text-indigo-600 hover:text-indigo-800">
              Learn more
            </button>
          </div>
        </div>

        {/* Interview Card */}
        <div className="bg-white rounded-lg shadow-md">
           <div className="flex justify-center">
            <img src="https://cdn.apna.co/career-compass-static/interview.svg" alt="Interview" className="overflow-hidden w-full h-50" /> {/* Replace with your image path */}
          </div>
          <h3 className="mt-4 text-xl ml-5 font-medium text-gray-900 text-start">
            Interview
          </h3>
          <p className="mt-2 m-5 text-gray-500 text-start">
            Prepare for successful interviews, practice questions, and get hired.
          </p>
          <div className="mt-4 text-start">
            <button className="text-indigo-600 ml-5 hover:text-indigo-800">
              Learn more
            </button>
          </div>
        </div>
        </div>
      </div>
      </div>

       {/* FAQ Section */}
       <div className="mt-12 ml-10 mr-10 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-6">
            {faqData.map((faqItem) => (
              <div key={faqItem.question} className="mb-4 border-b border-gray-200">
                <summary
                  className="text-lg font-medium text-gray-900 cursor-pointer py-2 flex items-center justify-between"
                  onClick={() => toggleExpand(faqItem.question)}
                >
                  {faqItem.question}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform ${expanded[faqItem.question] ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                {expanded[faqItem.question] && (
                  <div className="mt-2 pl-6 pb-4">
                    <p className="text-gray-500">{faqItem.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        </div>
   <Footer />
      </>

  )
}

export default ResumeBuilder;
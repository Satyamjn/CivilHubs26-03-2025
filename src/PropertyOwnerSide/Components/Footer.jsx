import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const footerData = {
  description:
    "CivilHubs is a Freelance Landing Website lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  socialLinks: [
    { icon: <FaFacebookF />, link: "#", color: "hover:text-blue-500" },
    { icon: <FaTwitter />, link: "#", color: "bg-blue-400 text-white p-2 rounded-full" },
    { icon: <FaYoutube />, link: "#", color: "hover:text-red-500" },
    { icon: <FaLinkedinIn />, link: "#", color: "hover:text-blue-700" },
    { icon: <FaInstagram />, link: "#", color: "hover:text-pink-500" },
  ],
  sections: [
    {
      title: "CivilHubs",
      items: ["Why CivilHubs", "Enterprise", "Customer Story", "Security", "Pricing"],
    },
    {
      title: "Resources",
      items: ["Download", "Help Center", "Events", "Guides", "Partner", "Directories"],
    },
    {
      title: "Company",
      items: ["About us", "Contact us", "Products", "Login", "Sign Up", "FAQ"],
    },
  ],
  contact: [
    { icon: <FiMapPin />, text: "832 Thompson Drive, San Fransisco, CA 94107, United States" },
    { icon: <FiPhone />, text: "+1 23 345123 556" },
    { icon: <FiMail />, text: "support@CivilHubs.id" },
  ],
  copyright: "CivilHubs Freelancer Landing Website - © 2020 All Rights Reserved",
 
};

const Footer = () => {
  return (
    <footer className="bg-[#161616]  text-white py-12 -mt-10 px-7">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        <div>  
             <Link to={'/propertyownerhome'}><img src="/assets/Civilhubs/blacklogo.png" alt="CivilHubs Logo" className="w-26 h-9 mb-4" /></Link>
          <p className="text-gray-100 mb-4">{footerData.description}</p>
          <div className="flex space-x-4">
            {footerData.socialLinks.map((item, index) => (
              <a key={index} href={item.link} className={`text-xl cursor-pointer ${item.color}`}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {footerData.sections.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
            <ul className="space-y-2 text-gray-100">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="font-semibold text-lg mb-4">Get in Touch with Us</h3>
          <ul className="space-y-4 text-gray-100">
            {footerData.contact.map((contactItem, index) => (
              <li key={index} className="flex items-center space-x-2">
                {contactItem.icon}
                <span>{contactItem.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t-2 translate-y-8     flex flex-col md:flex-row justify-between text-gray text-sm">
        <p className="text-center">{footerData.copyright}</p>
        
      </div>
    </footer>
  );
};

export default Footer;

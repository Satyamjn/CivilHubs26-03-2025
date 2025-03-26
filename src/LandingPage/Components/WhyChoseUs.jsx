import React from "react";
import { Compass } from "lucide-react";

const whyChooseUsData = [
  {
    id: 1,
    title: "Trusted",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <Compass className="w-8 h-8" />,
    gradientFrom: "from-teal-500",
    gradientTo: "to-teal-600",
  },
  {
    id: 2,
    title: "Easy to Use",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <Compass className="w-8 h-8" />,
    gradientFrom: "from-teal-500",
    gradientTo: "to-teal-600",
  },
  {
    id: 3,
    title: "Faster",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <Compass className="w-8 h-8" />,
    gradientFrom: "from-teal-500",
    gradientTo: "to-teal-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 py-20  bg-white text-center -mt-56">
      <h2 className="text-2xl  sm:text-3xl font-bold text-gray-800 text-start">
        Why Choose <span className="text-teal-500">Us</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {whyChooseUsData.map((item) => (
          <div
            key={item.id}
            className="relative w-full max-w-xs mx-auto h-60 flex flex-col items-center justify-center p-6 rounded-2xl border cursor-pointer overflow-hidden group transition-all duration-500 ease-in-out hover:text-white bg-white shadow-lg"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} rounded-2xl transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out`}
            ></div>

            <div className="relative z-0 flex flex-col items-center">
              <div className="w-10 h-12 z-50 rounded-xl flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-gray-500 mt-2 text-center group-hover:text-gray-200 text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
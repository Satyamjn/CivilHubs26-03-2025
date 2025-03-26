import React from "react";
import CountUp from "react-countup";

const LiveCounting = () => {
  const dummyStats = [
    { label: "Talented Freelancer", value: 36789 },
    { label: "Visitors", value: 458973 },
    { label: "Contract Made", value: 56461 },
    { label: "Companies", value: 852000 },
  ];

  return (
    <div className="bg-teal-600  text-white py-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center  px-8 -mt-8">
      {dummyStats.map((stat, index) => (
        <div key={index}>
          <h3 className="text-4xl font-bold mb-2">
            <CountUp end={stat.value} duration={3} separator="," />
            {stat.label === "Talented Freelancer" && "+"}
          </h3>
          <p className="text-lg">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default LiveCounting;
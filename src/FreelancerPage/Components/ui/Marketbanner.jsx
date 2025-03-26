import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  "/assets/Civilhubs/vendor_banner1.jpg",
  "/assets/Civilhubs/vendor_banner2.jpg",
  "/assets/Civilhubs/vendor_banner3.jpg",
 
];

const MarketBanner = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="w-full overflow-hidden relative mb-7 mt-14"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex w-max space-x-4"
        animate={{ x: isPaused ? "0%" : ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 40, // Adjust duration for smooth scrolling
          repeat: Infinity,
        }}
      >
        {/* Duplicating images to ensure seamless infinite scrolling */}
        {[...images, ...images,].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`carousel-${index}`}
            className="w-full h-64 object-cover rounded-lg"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default MarketBanner;

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "Amazing AI Writer! It transformed my average resume into a standout one. Received three interview invites in just a week!",
    name: "Divi J",
    role: "Recent Graduate",
  },
  {
    rating: 5,
    text: "The AI resume writer is a career lifesaver! Tailored my CV perfectly to my industry. Landed an interview with my top choice company!",
    name: "Aviral S",
    role: "Engineer",
  },
  {
    rating: 4,
    text: "Didn't believe in AI magic until now. The writer made my resume shine in ways I couldn't have imagined. Truly grateful!",
    name: "Arpita K",
    role: "Product Manager",
  },
  {
    rating: 5,
    text: "The AI Resume Writer is incredible! Helped me showcase my skills effectively. Got multiple job offers!",
    name: "Sanya T",
    role: "Software Developer",
  },
  {
    rating: 5,
    text: "The AI resume writer is a career lifesaver! Tailored my CV perfectly to my industry. Landed an interview with my top choice company!",
    name: "Aviral S",
    role: "Engineer",
  },
];

const TestimonialsBar = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350; // Adjust scroll distance
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-16 relative bg-black text-white py-10 px-5 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-start mb-6">
        Why our customers love us
      </h2>

      {/* Left Arrow */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-600 z-10"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={28} color="white" />
      </button>

      {/* Scrollable Testimonials Container */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide p-4 snap-x"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg flex-shrink-0 w-72 md:w-80 snap-start"
          >
            <div className="flex items-start mb-3">
              <span className="text-yellow-400 text-xl">
                {"★".repeat(testimonial.rating)}
              </span>
            </div>
            <p className="text-white text-sm">{testimonial.text}</p>
            <h4 className="mt-3 font-semibold text-white">
              {testimonial.name}, <span className="text-gray-400">{testimonial.role}</span>
            </h4>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-600 z-10"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={28} color="white" />
      </button>
    </div>
  );
};

export default TestimonialsBar;

import { Link } from "react-router-dom";

const categories = [
  { name: "Android Developer", image: "/public/assets/images/android.svg", link: "/category" },
  { name: "Flutter Developer", image: "/public/assets/images/flutters.png",link: "/category"},
  { name: "React Native ", image: "/public/assets/images/react.svg", link: "/job_list/react_native_developer" },
  { name: "PHP Developer", image: "/public/assets/images/php.svg", link: "/category" },
  { name: "iOS Developer", image: "/public/assets/images/ios.png", link: "/category"},
  { name: "Full Stack Developer", image: "/public/assets/images/fullsteck.png",link: "/category" },
  { name: "Node.js Developer", image: "/public/assets/images/nodejs (1).png",link: "/category" },
  { name: "Data Entry", image: "/public/assets/images/document.png",link: "/category"},
  { name: "Python Developer", image: "/public/assets/images/python.png", link: "/category" },
  { name: "Java Developer", image: "/public/assets/images/java.png", link: "/category" },
  {
   
    name: "Ruby Developer",
    image: "https://rojgaarr.com/assets/images/svg/ruby.png",
     link: "/category"
},

{

  name: "Datafication ",
  image: "https://rojgaarr.com/assets/images/svg/6283047.png",
  link: "/category"

},
];

const TrendingCategory = () => {
  return (
    <div className="container mx-auto px-4 py-12 mt-11">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Trending Jobs <span className="text-[#9333EA]">Category</span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          To choose your trending job dream & to make your future bright.
        </p>
      </div>

      {/* Responsive Grid for Categories */} 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 " >
        {categories.map((category, index) => (
          <Link to={category.link}> 
          <div key={index} className="bg-white shadow-lg  border rounded-lg p-4  flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-purple-300 ">
             
            <div className="w-10 h-10   flex justify-center items-center bg-auto   rounded-full ">
              <img src={category.image} alt={category.name} className="w-12 h-12 object-contain" />
            </div>
            <h5 className="mt-4 text-md text-gray-700 text-center">
              <Link to={category.link} className="text-[#250e3b] transition">{category.name}</Link>
            </h5>
          </div>
          </Link>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="flex justify-center mt-10">
        <Link to="/category" className="bg-violet-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-600    transition shadow-md"> 
           Explore  More 
        </Link>
      </div>
    </div>
  );
};

export default TrendingCategory;

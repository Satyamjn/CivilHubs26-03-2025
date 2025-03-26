import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { useState, useEffect } from "react";
import Navbar from "../shared/Navbar";
const cementImg = "/assets/Civilhubs/cement1.jpg";



// Separate products array
const productsData = [
  { name: "Cement 25kg bag", img: cementImg, price: 350, brand: "Brand A", size: "25kg" },
  { name: "Cement 25kg bag", img: cementImg, price: 300, brand: "Brand B", size: "25kg" },
  { name: "Cement 25kg bag", img: cementImg, price: 400, brand: "Brand A", size: "25kg" },
  { name: "Cement 25kg bag", img: cementImg, price: 250, brand: "Brand C", size: "25kg" },
  { name: "Cement 25kg bag", img: cementImg, price: 350, brand: "Brand B", size: "25kg" },
  { name: "Cement 25kg bag", img: cementImg, price: 450, brand: "Brand C", size: "25kg" },
];
   
const SkillDetail = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const { product } = location.state; // Get the product details passed from Hireskilled

  const [filters, setFilters] = useState({
    keywords: ["Spring", "Smart", "Modern"],
    size: [],
    brand: [],
  });

  const [sortedProducts, setSortedProducts] = useState([...productsData]);
  const [isSorted, setIsSorted] = useState(false); // State to manage sorting

  // Extract unique sizes and brands from products
  useEffect(() => {
    const uniqueSizes = [...new Set(productsData.map(product => product.size))];
    const uniqueBrands = [...new Set(productsData.map(product => product.brand))];

    setFilters(prevFilters => ({
      ...prevFilters,
      size: uniqueSizes,
      brand: uniqueBrands,
    }));
  }, []);

  // Function to sort products by price
  const sortProductsByPrice = (sort) => {
    const sorted = sort ? [...productsData].sort((a, b) => a.price - b.price) : [...productsData];
    setSortedProducts(sorted);
  };

  // Handle checkbox change
  const handleSortChange = (event) => {
    setIsSorted(event.target.checked);
    sortProductsByPrice(event.target.checked);
  };

  // Function to handle product card click
  const handleProductClick = (prod) => {
    navigate('/productdetails', { state: { product: prod } }); // Navigate to ProductDetails with product data
  };

   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top on load
    }, []);

  return (
    <>
      <Navbar />
      <div className="flex gap-3 p-6">
        {/* Sidebar Filters */}
        <div className="p-4 border rounded-lg bg-white">
          <h3 className="font-semibold mb-2">Keywords</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {filters.keywords.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-gray-200 rounded-md">
                {tag} ✕
              </span>
            ))}
          </div>
          <h3 className="font-semibold mb-2">Size</h3>
          {filters.size.map((label, index) => (
            <div key={index} className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" checked readOnly />
              <span>{label}</span>
            </div>
          ))}
          {/* New Brand Filter */}
          
          <h3 className="font-semibold mt-4 mb-2">Brand</h3>
          {filters.brand.map((label, index) => (
            <div key={index} className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" checked readOnly />
              <span>{label}</span>
            </div>
          ))}
          {/* Sort by Price */}
          <h3 className="font-semibold mt-4 mb-2">Sort By Price</h3>
          <div className="flex items-center mb-2">
            <input 
              type="checkbox" 
              className="mr-2" 
              checked={isSorted} 
              onChange={handleSortChange} 
            />
            <span>Low to High</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4">
          {/* Product Grid */}
          <p className="text-lg font-bold mb-4">{product.name}</p>
          <div className="grid grid-cols-3 gap-4">
            {/* Map through the sorted products array to display more cards */}
            {sortedProducts.map((prod, index) => (
              <div 
                key={index} 
                className="border rounded-lg p-4 bg-white cursor-pointer" 
                onClick={() => handleProductClick(prod)} // Add onClick event
              >
                <div className="flex items-center justify-center bg-gray-500"> {/* Background applied here */}
                  <img src={prod.img} alt={prod.name} className="object-cover h-full w-full" />
                </div>
                <p className="mt-2 font-bold">{prod.name}</p>
                <p className="font-semibold">₹{prod.price}/bag</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillDetail;
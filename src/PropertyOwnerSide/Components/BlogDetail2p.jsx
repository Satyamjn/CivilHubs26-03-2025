import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavbarProperty from "./NavbarProperty";
import Footer from "./Footer";


const BlogDetail2p = () => {
  const location = useLocation();
  const blog = location.state?.news;

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold text-gray-700">
          No blog data available!
        </p>
      </div>
    );
  }

    useEffect(() => {
      window.scrollTo(0, 0); // Page ko  top se load karega
    }, []);
  

  return (
    <>
      {/* Navbar Section */}
     <NavbarProperty/>
      <div className="">
  
        {/* Blog Container */}
        <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 mt-5">
          {/* Main Content */}
          <div className="lg:col-span-8 bg-white rounded-lg shadow-lg p-6 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{blog.title}</h2>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="mr-2">By {blog.author}</span>
              <span className="mr-2">• {blog.time}</span>
            </div>
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <p className="text-gray-700 mb-6 leading-relaxed">{blog.description}</p>
  
            {/* Author Bio Section */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-2">About the Author</h3>
              <p className="text-gray-600">
                {blog.author} is an experienced writer and researcher with a passion
                for fashion, lifestyle, and modern trends. Their work has been
                featured in various publications across the globe.
              </p>
            </div>
  
            {/* More from this Author */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4">More from {blog.author}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li className="hover:text-blue-500 cursor-pointer">
                  5 Trends to Look Out for in 2025
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  The Impact of Sustainability on Fashion
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  Understanding Minimalist Fashion Culture
                </li>
              </ul>
            </div>
  
            {/* Tags Section */}
            <div className="flex flex-wrap gap-2 my-6">
              <span className="bg-gray-200 text-sm px-3 py-1 rounded">#fashion</span>
              <span className="bg-gray-200 text-sm px-3 py-1 rounded">#lifestyle</span>
              <span className="bg-gray-200 text-sm px-3 py-1 rounded">#style</span>
              <span className="bg-gray-200 text-sm px-3 py-1 rounded">#trends</span>
            </div>
  
            {/* Comments Section */}
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Leave a Comment</h3>
              <textarea
                className="w-full p-4 border rounded-lg"
                rows="4"
                placeholder="Write your comment..."
              ></textarea>
              <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">
                Post Comment
              </button>
            </div>
          </div>
  
          {/* Right Sidebar Section */}
          <div className="lg:col-span-4 space-y-6">
            {/* Popular Posts Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Popular Posts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/post1.jpg"
                    alt="Post 1"
                    className="w-16 h-16 rounded-lg"
                  />
                  <div>
                    <h4 className="text-sm font-bold">10 Fashion Trends You Need</h4>
                    <p className="text-xs text-gray-500">Jul 10, 2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/post2.jpg"
                    alt="Post 2"
                    className="w-16 h-16 rounded-lg"
                  />
                  <div>
                    <h4 className="text-sm font-bold">How to Style Modern Clothes</h4>
                    <p className="text-xs text-gray-500">Jul 8, 2024</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Advertisement Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-4">Advertisement</h3>
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
                <p className="text-gray-500">Ad Space Available</p>
              </div>
            </div>
  
            {/* Categories Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Categories</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="hover:text-blue-500 cursor-pointer">Fashion</li>
                <li className="hover:text-blue-500 cursor-pointer">Lifestyle</li>
                <li className="hover:text-blue-500 cursor-pointer">Technology</li>
                <li className="hover:text-blue-500 cursor-pointer">Trends</li>
              </ul>
            </div>
  
            {/* Newsletter Subscription */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Stay Updated!</h3>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter to receive the latest updates.
              </p>
              <div className="flex justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-3 rounded-l-lg border border-gray-300"
                />
                <button className="bg-blue-500 text-white px-4 py-3 rounded-r-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer Section */}
      <Footer/>
      </div>
    </>
  );
};

export default BlogDetail2p;

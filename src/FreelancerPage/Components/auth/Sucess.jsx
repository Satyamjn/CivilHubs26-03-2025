import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";


function Success() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-gray-900">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <h2 className="text-2xl font-bold">🎉 Sign In Successful!</h2>
          <p className="text-gray-600 mt-2">You have successfully logged in.</p>
          <div>
          <Button
            className="mt-4 bg-green-600 text-white hover:bg-green-700 px-5 py-2 rounded "
            onClick={() => navigate("/")}
          >
            Go to Homepage
          </Button>

          </div>
          <div>
          <Button
            className="mt-4 bg-green-600 text-white hover:bg-green-700 px-4  py-2 rounded"
            onClick={() => navigate("/profile")}
          >
            Go to Profile
          </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Success;
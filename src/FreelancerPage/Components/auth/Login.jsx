import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer from "../shared/Footer";
import { useNavigate, Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import styles
import { isValidPhoneNumber } from "libphonenumber-js"; // Import validation function

import { createContext, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

function Login() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

  const handleSendOtp = () => {
    if (isValidPhoneNumber(mobile)) {
      const newOtp = generateOtp();
      setGeneratedOtp(newOtp);
      setIsOtpSent(true);
      setResendDisabled(true);
      setTimer(30);

      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            setResendDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      alert("Invalid mobile number. Please enter a valid number with country code.");
    }
  };

  const handleVerifyOtp = () => {
    const otpValue = otp.join("");
    if (otpValue === generatedOtp) {
      alert("OTP Verified Successfully!");
      // setUser({ mobile });
      localStorage.setItem("user", JSON.stringify({ mobile }));
      navigate("/success");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value.slice(0, 1);
    setOtp(newOtp);
    if (e.target.value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-white px-4">
        <div className="flex flex-col md:flex-row border-2 shadow-md rounded-lg p-6 md:p-8 max-w-4xl w-full bg-purple-100">
          <div className="md:w-1/2 flex flex-col justify-center items-center text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900">
              Talk to HR directly & get a job with better salary!
            </h2>
            <p className="text-gray-600 mt-2">
              Get local jobs in your city! <span className="ml-1">👉</span>
            </p>
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0 p-6 rounded-lg shadow-sm border-2 bg-white flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {isOtpSent ? "Enter the OTP" : "Enter your number to continue"}
            </h3>

            {!isOtpSent ? (
              <>
                <label className="block text-gray-700 text-sm font-medium mt-4">
                  Mobile Number
                </label>
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={mobile}
                  onChange={setMobile}
                  className="mt-2 p-2 border rounded w-full max-w-sm mx-auto"
                />
                <Button
                  className={`w-full max-w-sm mx-auto mt-4 py-2 rounded ${
                    isValidPhoneNumber(mobile)
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                  disabled={!isValidPhoneNumber(mobile)}
                  onClick={handleSendOtp}
                >
                  Get Started &raquo;
                </Button>
              </>
            ) : (
              <>
                <div className="text-center mt-4 text-lg font-semibold text-gray-800">
                  Your OTP: <span className="text-purple-600">{generatedOtp}</span>
                </div>
                <label className="block text-gray-700 text-sm font-medium mt-4">OTP</label>
                <div className="flex justify-center space-x-2 mt-2">
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      id={`otp-input-${index}`}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-12 h-12 text-center text-lg font-bold border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  ))}
                </div>
                <Button
                  className="w-full max-w-sm mx-auto mt-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700"
                  onClick={handleVerifyOtp}
                >
                  Verify OTP &raquo;
                </Button>
                <Button
                  className="w-full max-w-sm mx-auto mt-2 py-2 rounded bg-gray-400 text-white hover:bg-gray-500"
                  disabled={resendDisabled}
                >
                  {resendDisabled ? `Resend OTP in ${timer}s` : "Resend OTP"}
                </Button>
              </>
            )}
            <div className="my-6 text-center text-gray-600">OR</div>
            <div className="text-center text-gray-600">
              Don't have an account?
              <Link to="/signup" className="p-2 text-blue-600 hover:underline mt-2">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;

import FreeLanceHome from '@/FreelancerPage/Components/FreeLanceHome';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AllPath = () => {
  const data = useLocation();
  const navigate = useNavigate();
  const value = data?.state?.srole || null;
  console.log(value,"ddhhdhhddhhdd");
  useEffect(() => {
    // Role ke hisaab se redirect
    switch (value) {
      case 'freelancer':
        navigate('/freelancer');
        break;
      case 'engineer':
        navigate('/engineer');
        break;
      case 'company':
        navigate('/company-panel');
        break;
      default:
        navigate('/welcome');
    }
  }, [value, navigate]);

  return (
    <div>Loading...</div> // Redirect hone tak loading dikhayega
  );
};

export default AllPath;

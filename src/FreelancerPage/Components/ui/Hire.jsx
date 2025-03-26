import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hire() {
  



  const nav = useNavigate();
  const handleNav = ()=>{
    nav('/login');
  }
  return (
    <div className='mb-2'>
      

      <div className="flex  bg-auto-100  flex-col items-center justify-center text-center py-16 px-4 -mt-6">
      
      <h2 className="!text-gray-950 text-3xl md:text-4xl font-bold ">
        Let's hire your next<span className='text-purple-500' > great candidate</span>
      </h2>

      
      <p className="!text-gray-950 text-lg mt-2">
        A hiring platform built to solve for relevancy, volume and speed of hiring
      </p>

      
      <div className="mt-6 flex gap-4  " >
    
        <button className="!bg-purple-700 text-white hover:shadow-lg hover:scale-110  px-4 py-2 rounded hover:bg-mint-900 duration-500 " onClick={handleNav} >
          Login/Sign up
        </button>

      
        <button className="border border-gray-400 px-4 py-2 rounded font-semibold text-gray-900 hover:bg-gray-100 transition-all hover:scale-110  duration-500">
          Contact sales
        </button>
      </div>
    </div>
    </div>
  )
}

export default Hire
import React from 'react'
import NavbarLand from './Components/Navbar'
import HeroSection from './Components/Herosection'
import Stepsection from './Components/StepSection'
import WhyChooseUs from './Components/WhyChoseUs'
import FeaturedProfiles from './Components/FeatureProfile'
import FeaturedJobs from './Components/FeatureJobs'
import LiveCounting from './Components/LiveCounting'
import LatestNews from './Components/LatestNews'
import Footer from './Components/Footer'
import Topfreelancer from './Components/FeatureProfile'
import RecommededJobs from '@/FreelancerPage/UnusedComponent/RecommendedJobs'
// import FreelancerHeroSection from './Components/Herosection'

export const Home = () => {
  return (
   <div>
   <NavbarLand/>
   {/* <RealVideoEditor/> */}
    <HeroSection/>
    <Stepsection/>
    <WhyChooseUs/>
   <Topfreelancer/>
    <FeaturedJobs/>
    {/* <RecommededJobs/> */}
    <LiveCounting/>
    <LatestNews/>
    <Footer/>
   </div>
  )
}


















// ============================







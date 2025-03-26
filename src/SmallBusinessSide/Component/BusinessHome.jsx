import React from 'react'
import NavbarBusiness from './NavbarBusiness'
import HeroSection from './HeroSection'
import HireSkill from './HireSkill'
import RecentRequirements from './RecentReqirement'
import Blogs from './Blogs'
import Footer from './Footer'

const BusinessHome = () => {
  return (
    <div>
      <NavbarBusiness/>
      <HeroSection/>
      <HireSkill/>
      <RecentRequirements/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default BusinessHome
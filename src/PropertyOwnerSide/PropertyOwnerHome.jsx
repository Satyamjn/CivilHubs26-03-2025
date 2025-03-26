import React from 'react'
import NavbarProperty from './Components/NavbarProperty'

import HeroSectionOwner from './Components/HeroSectionOwner'
import HireSkilledOwner from './Components/HireSkilledOwner'
import Footer from './Components/Footer'
import Blogs from './Components/Blogs'

const PropertyOwnerHome = () => {
  return (
    <div>

        <NavbarProperty/>
        <HeroSectionOwner/>
        <HireSkilledOwner/>
        <Blogs/> 
        <Footer/>
    </div>
  )
}

export default PropertyOwnerHome
import React, { useEffect } from 'react'
import MarketBanner from './ui/marketbanner'
import Navbar from './shared/Navbar'
// import Footer from './shared/Footer'
// import LatestProject from './LatestProject'
import Hireskilled from './Hireskilled'
import BestSeller from './ui/BestSellers'
import Footer from './shared/Footer'
import BlogSection from './ui/BlogDetail'
import PostMaterialRequirement from './ui/PostMaterialReqirement'

const Marketplace = () => {
   useEffect(() => {
        window.scrollTo(0, 0); // Page को top से load करेगा
      }, []);
  return (
    <div>
        <Navbar/>
      <MarketBanner/> 
      <PostMaterialRequirement/>
      <Hireskilled/>
      <BestSeller/>
 
    </div>
  )
}

export default Marketplace

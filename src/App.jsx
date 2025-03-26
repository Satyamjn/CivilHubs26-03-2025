import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'

import { Home } from './LandingPage/Home';
import Login from './LandingPage/auth/Login';

import FreeLanceHome from './FreelancerPage/Components/FreeLanceHome';
import SignUpt from './LandingPage/auth/SignUp';

import AllPath from './LandingPage/auth/AllPath';
import Companyhome from './CompanySide/Companyhome';
import ShowProfile from './CompanySide/Components/ShowProfile';
import BrowseJobs from './FreelancerPage/Components/BrowseJobs';
import BrowsDetail from './FreelancerPage/Components/ui/BrowseDetail';
import ProjectDetails from './FreelancerPage/Components/ProjectDetails';
import CategoriesPage from './FreelancerPage/Components/CategoriesPage';
import Bids from './FreelancerPage/Components/Bids';
import Applications from './CompanySide/Pages/Applications';
import ViewApplication from './CompanySide/Pages/ViewApplication';
import ViewProposals from './CompanySide/Pages/ViewProposals';
import Messages from './CompanySide/Pages/Messages';
import BlogSection from './CompanySide/Pages/BlogSection';
import Myprofile from './CompanySide/Components/Companyprofile';
import Projects from './CompanySide/Components/CompanyProjects';
import Proposals from './FreelancerPage/Components/Proposals';
import FreelanceProposals from './FreelancerPage/Components/Proposals';
import Chats from './FreelancerPage/Components/Chats';
import FreelanceProfile from './FreelancerPage/Components/FreelanceProfile';
import Hireonpage from './CompanySide/Components/Hireontempage';
import PostJob from './CompanySide/Pages/PostJob';
import BlogDetail from './FreelancerPage/Components/ui/BlogDetail';
import FreeBlog from './FreelancerPage/UnusedComponent/FreeBlog';
import Companyprofile from './CompanySide/Components/Companyprofile';
import DetailHireontemp from './CompanySide/Pages/DetailHireontemp';
import ViewProject from './CompanySide/Pages/ViewProject';
import ViewJob from './CompanySide/Pages/ViewJob';
import DetailBlog from './LandingPage/Components/DetailBlog';
import ProjectProposalDetail from './CompanySide/Pages/ProjectProposalDetail';
import ViewProDetails from './CompanySide/Components/ViewPropDetails';
import Marketplace from './FreelancerPage/Components/Marketplace';
import SkillDetail from './FreelancerPage/Components/ui/SkillDetail';
import ProductDetails from './FreelancerPage/Components/ui/ProductDetails';
import SellerDetails from './FreelancerPage/Components/ui/SellerDetails';
import JobProposal from './CompanySide/Pages/JobProposal';
import ViewApplicationDetails from './CompanySide/Pages/ViewApplicationDetails';
import MaterialDetails from './FreelancerPage/Components/ui/MaterialDetail';
import BusinessHome from './SmallBusinessSide/Component/BusinessHome';
import HireDetail from './SmallBusinessSide/pages/HireDetail';
import HireProfileDetails from './SmallBusinessSide/pages/HireProfileDetails';
import DetailBlogBusinees from './SmallBusinessSide/pages/BusinessBlog';
import ProductandServices from './SmallBusinessSide/pages/ProductandServices';
import ProductServiceDetail from './SmallBusinessSide/pages/ProductServiceDetail';
import Oders from './SmallBusinessSide/pages/Oders';
import MessagesComponent from './SmallBusinessSide/pages/Messages';
import BusinessProfile from './SmallBusinessSide/pages/BusinessProfile';
import PropertyOwnerHome from './PropertyOwnerSide/PropertyOwnerHome';
import SkillDetailPage from './PropertyOwnerSide/Components/SkillDetailPage';
import HireProfile from './PropertyOwnerSide/HireProfile';
import OwnerBlog from './PropertyOwnerSide/Components/OwnerBlog';
import MyOrders from './PropertyOwnerSide/Components/MyOders';
import ChatsComponent from './PropertyOwnerSide/Components/Chats';
import Explorer from './CompanySide/UnusedComponent/Explorer';
import BlogPage1B from './SmallBusinessSide/pages/BlogDetail1B';
import BlogDetail2p from './PropertyOwnerSide/Components/BlogDetail2p';
import BlogDetail1L from './LandingPage/Components/BlogDetail1L';
import BlogPage1C from './CompanySide/Pages/BlogDetail1C';
import BlogSectionfree from './FreelancerPage/Components/ui/BlogDetail';
import BlogPage1F from './FreelancerPage/Components/ui/BlogDetail1f';
import PostProject from './CompanySide/Pages/PostProject';



const appRouter = createBrowserRouter([




  // =====================Company Side===============================================

  {
    path: '/Blogs',
    element: <BlogSection />
  },

  {
    path: '/blogdetail1C',
    element: <BlogPage1C/>
  },
  {
    path: '/viewapllicationDetails',
    element: <ViewApplicationDetails />

  },

  {
    path: '/detailHireontemp',
    element: <DetailHireontemp />
  },

  {
    path: '/applicaationdetail',
    element: <ProjectProposalDetail />,
  },

  {
    path: '/showprofile',
    element: <ShowProfile />
  },

  {
    path: "/postjob",
    element: <PostJob />
  },


  {
    path: '/hireonpage',

    element: <Hireonpage />

  },

  {
    path: '/Project',
    element: <Projects />
  },

  {
    path: "/viewproject",
    element: <ViewProject />
  },
  {
    path: '/viewjobs',
    element: <ViewJob />
  },




  {
    path: '/companyprofile',
    element: <Companyprofile />
  },

  {
    path: '/viewProposal',
    element: <ViewProposals />
  },
  {
    path: '/viewproposaldetails',
    element: <ViewProDetails />,
  },

  {
    path: '/Messages',
    element: <Messages />,
  },

  {
    path: '/allApplications',
    element: <Applications />
  },
 

  {
    path: '/jobproposal',
    element: <JobProposal />
  },

  {
    path: '/jobProposalDetails',
    element: <ProjectProposalDetail />
  },

  {
    path: '/postproject',
    element: <PostProject/>
  },





  // =============Landing Page===============================================



  {
    path: '/',
    element: <Home />
  },

  {
    path: '/login',
    element: <Login />
  },

  {
    path: '/signup',
    element: <SignUpt />
  },


  {
    path: '/submit',
    element: <AllPath />
  },

  {
    path: '/freelancehome',
    element: <FreeLanceHome />
  },

  {
    path: '/companyhome',
    element: <Companyhome />
  },


  // ======testing
  {
    path: '/temp',
    element: <Companyhome />
  },



  // ================Landing Page===============================================   
  {
    path: '/detailblog',
    element: <DetailBlog />,

  },

  {
    path: '/blogdetailL',
    element: <BlogDetail1L/>
  },


  // =======================Freelancer===========================================
  {
    path: '/freeLance',
    element: <FreeLanceHome />
  },

  {
    path: "/productdetails",
    element: <ProductDetails />
  },
  {
    path: "/sellerDetails",
    element: <SellerDetails />
  },

  {
    path: '/chats',
    element: <Chats />
  },


  {
    path: '/freelanceproposals',
    element: <FreelanceProposals />
  },
  {
    path: '/blogdetail1f',
    element: <BlogPage1F/>
  },

  {
    path: '/bids',
    element: <Bids />
  },

  {
    path: '/Alljobs',
    element: <BrowseJobs />
  },
  {
    path: '/marketplace',
    element: <Marketplace />
  },

  {
    path: '/BlogDetail',
    element: <BlogSectionfree/>
  },

  {
    path: '/BrowseDetail',
    element: <BrowsDetail />,
  },
  {
    path: '/project-detail',
    element: <ProjectDetails />

  },

  {
    path: '/category',
    element: <CategoriesPage />,
  },

  {
    path: '/proposals',
    element: <Proposals />,
  },


  {
    path: '/viewprofile',
    element: <FreelanceProfile />
  },


  {
    path: '/hireskill/listing',
    element: <SkillDetail />
  },



  {
    path: '/viewApplication',
    element: <ViewApplication />

  },

  {
    path: "/materialDetails",
    element: <MaterialDetails />

  },
  
  // ====================================================================



  // ========================SmallBusiness===============================


  {
    path: "/businesshome",
    element: <BusinessHome />

  },

  {
    path: "/hireDetail",
    element: <HireDetail/>,

  },

  {
    path: "/hireprofile",
    element: <HireProfileDetails/>,
  },
  {
    path: '/businessblog',
    element: <DetailBlogBusinees/>,
  },

  {
    path: 'productandServices',
    element: <ProductandServices/>,
  },

  {
    path: '/productandservicesDetails',
    element: <ProductServiceDetail/>,

  },
  {
    path: '/oders',
    element: <Oders/>
  },


  {
    path: '/businessmessages',
    element: <MessagesComponent/>
  },


  {
    path: '/businessProfile',
    element: <BusinessProfile/>


  },
  {
       path: '/blogdetail1B',
    element: <BlogPage1B/>,
  },
// ========================================================


  // =======================propertyownerhome====================

{
  path: '/propertyownerhome',
  element: <PropertyOwnerHome/>

},

{
  path:'/skilldetails',
  element:<SkillDetailPage/>,

},

{
  path:'/profilehire',
  element:<HireProfile/>,

},
{
  path:'/ownerblog',
  element:<OwnerBlog/>,

},
{
  path:'/myorders',
  element:<MyOrders/>,
},
{
  path: '/chatownerside',
  element:<ChatsComponent/>
},
{
  path:'/ownerprofile',
  element:<HireProfile/>
},
{
  path:'/blogdetail2p',
  element:<BlogDetail2p/>
},

// =================================================================
])




function App() {

  return (
    <div>

      <RouterProvider router={appRouter} />

    </div>
  )
}

export default App

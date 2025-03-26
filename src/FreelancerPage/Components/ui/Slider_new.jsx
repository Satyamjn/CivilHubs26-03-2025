// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// function Slider_new() {
//     // const PrevArrow = ({ onClick }) => (
//     //     <div className="custom-arrow prev-arrow absolute top-1/2 -right-5 transform -translate-y-1/2 bg-purple-500 z-10 p-1 rounded-lg text-white cursor-pointer" onClick={onClick}>
//     //         <FaChevronRight size={30} />
//     //     </div>
//     // );

//     // const NextArrow = ({ onClick }) => (
//     //     <div className="custom-arrow next-arrow absolute top-1/2 -left-8 transform -translate-y-1/2 z-10 bg-purple-500 p-1 rounded-lg text-white cursor-pointer" onClick={onClick}>
//     //         <FaChevronLeft size={30} />
//     //     </div>
//     // );

//     const companyLogos = [
//         { src: "src/assets/images/company/Logo_ATS.png" },
//         { src: "src/assets/images/company/logo11.png" },
//         { src: "src/assets/images/company/appson_blue_Logo_1.png" },
//         { src: "src/assets/images/company/Untitled_design.png" },
//         { src: "src/assets/images/company/ASK.png" },
//         { src: "src/assets/images/company/asparrowtech-logoflippped.png" },
//         { src: "src/assets/images/company/Betterpeople.jpg" },
//         { src: "src/assets/images/company/BTW_IMF_Logo1.png" },
//         { src: "src/assets/images/company/Company_Name_Original_White_and_Orange.jpg" },
//         { src: "src/assets/images/company/download.jpg" },
//         // { src: "src/assets/images/company/logo8.png" },
//         { src: "src/assets/images/company/WhatsApp_Image_2024-01-17_at_6_55_15_PM.jpeg" },
//         { src: "src/assets/images/company/facebook.jpg" },
//         { src: "src/assets/images/company/1519878142742.jpg" },
//         { src: "src/assets/images/company/logo-black_(2).jpeg" },
//         // { src: "src/assets/images/company/LOGOY.png" },
//         { src: "src/assets/images/company/LogowithR.png" },
//         { src: "src/assets/images/company/logo4.png" },
//         // { src: "src/assets/images/company/company_logo_(1).png" },
//         { src: "src/assets/images/company/Fast_Logo1.png" },
//         { src: "src/assets/images/company/ef4c58c2-ce96-4430-9ebb-8f6ab81a4993.jpg" },
//         { src: "src/assets/images/company/imgpsh_fullsize_anim.jpg" },
//         { src: "src/assets/images/company/Logo.png" },
//         { src: "src/assets/images/company/Picture1.png" },
//         { src: "src/assets/images/company/image_2023_11_02T05_26_18_327Z.png" },
//         { src: "src/assets/images/company/Company_logo.png" },
//         { src: "src/assets/images/company/photo.png" },
//         { src: "src/assets/images/company/Ksv.png" },
//         { src: "src/assets/images/company/Beige_Brown_Simple_Personal_LinkedIn_Banner.png" },
//         { src: "src/assets/images/company/images.png" },
//         { src: "src/assets/images/company/logo33.jpg" },
//     ];

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 7,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1500,
//         cssEase: "ease-in",
//         pauseOnHover: false,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 1280,
//                 settings: {
//                     slidesToShow: 5,
//                 },
//             },
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 4,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 3,
//                 },
//             },
//             {
//                 breakpoint: 640,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//         ],
//     };

//     return (
//         <div className="bg-auto h-34 px-4 py-8 mt-1">
//           <div className="section-title font-semibold -translate-y-7 mb-2"><h5>Our Trusted Company <span>
//           <hr className="h-1 w-32 bg-purple-400 ml-44 -translate-y-3 " />
//           </span>
//           </h5></div>
//             <Slider {...settings}>
           
//                 {companyLogos.map((logo, index) => (
                     
//                     <div key={index} className="flex justify-center items-center">
                      
//                         <img src={logo.src} alt="Company Logo" className="w-44 h-16 gap-4 rounded-lg object-contain" />
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// }

// export default Slider_new;

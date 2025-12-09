// // // "use client";

// // // import { useState } from "react";
// // // import { Swiper, SwiperSlide } from "swiper/react";
// // // import { Navigation } from "swiper/modules";
// // // import "swiper/css";
// // // import "swiper/css/navigation";
// // // import Image from "next/image";
// // // import { getFieldValue, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";

// // // export default function Testimonials({ data }) {
// // //     // Extract dynamic values for section header
// // //     const sectionSubtitle = getFieldValue(data, 'section_subtitle') || "Let's Grow Together";
// // //     const sectionTitle = getFieldValue(data, 'section_title') || 'Real Success Stories from Our Global Network of Partners';

// // //     // Extract testimonials data
// // //     const testimonial1 = {
// // //         name: getFieldValue(data, 'testimonial_1_name') || 'Imran Qureshi',
// // //         role: getFieldValue(data, 'testimonial_1_role') || 'Agency Owner, Sharjah',
// // //         avatar: getFieldValue(data, 'testimonial_1_avatar') || '/profile01.jpg',
// // //         video: getFieldValue(data, 'testimonial_1_video') || 'video.mp4',
// // //         quote: getFieldValue(data, 'testimonial_1_quote') || 'Joining the Park Group network gave us access to top-tier projects and trustworthy clients. The support and payouts are unmatched. Park Group has truly transformed the way we do business.'
// // //     };

// // //     const testimonial2 = {
// // //         name: getFieldValue(data, 'testimonial_2_name') || 'Ali Khan',
// // //         role: getFieldValue(data, 'testimonial_2_role') || 'Investor, Dubai',
// // //         avatar: getFieldValue(data, 'testimonial_2_avatar') || '/profile02.jpg',
// // //         video: getFieldValue(data, 'testimonial_2_video') || 'video.mp4',
// // //         quote: getFieldValue(data, 'testimonial_2_quote') || 'Park Group made property investment seamless and transparent. Their network is trustworthy and reliable.'
// // //     };

// // //     const testimonial3 = {
// // //         name: getFieldValue(data, 'testimonial_3_name') || 'Sarah Ahmed',
// // //         role: getFieldValue(data, 'testimonial_3_role') || 'Realtor, Abu Dhabi',
// // //         avatar: getFieldValue(data, 'testimonial_3_avatar') || '/profile01.jpg',
// // //         video: getFieldValue(data, 'testimonial_3_video') || 'video.mp4',
// // //         quote: getFieldValue(data, 'testimonial_3_quote') || 'Working with Park Group boosted my business. Their projects are always high-quality and in demand.'
// // //     };

// // //     // Filter testimonials that have names and quotes
// // //     const dynamicTestimonials = [testimonial1, testimonial2, testimonial3]
// // //         .filter(testimonial => testimonial.name && testimonial.name !== 'undefined' && testimonial.quote && testimonial.quote !== 'undefined');

// // //     // Duplicate testimonials for a seamless loop
// // //     const testimonials = dynamicTestimonials.length > 0 
// // //         ? [...dynamicTestimonials, ...dynamicTestimonials] 
// // //         : [
// // //             // Fallback testimonials
// // //             {
// // //                 name: "Imran Qureshi",
// // //                 role: "Agency Owner, Sharjah",
// // //                 avatar: "/profile01.jpg",
// // //                 video: "video.mp4",
// // //                 quote: "Joining the Park Group network gave us access to top-tier projects and trustworthy clients. The support and payouts are unmatched."
// // //             },
// // //             {
// // //                 name: "Ali Khan",
// // //                 role: "Investor, Dubai",
// // //                 avatar: "/profile02.jpg",
// // //                 video: "video.mp4",
// // //                 quote: "Park Group made property investment seamless and transparent. Their network is trustworthy and reliable."
// // //             },
// // //             {
// // //                 name: "Sarah Ahmed",
// // //                 role: "Realtor, Abu Dhabi",
// // //                 avatar: "/profile01.jpg",
// // //                 video: "video.mp4",
// // //                 quote: "Working with Park Group boosted my business. Their projects are always high-quality and in demand."
// // //             }
// // //         ];

// // //     return (
// // //         <section className="max-w-[1200px] mx-auto px-6 py-16">
// // //             {/* Header */}
// // //             <div className="text-start mb-12">
// // //                 <p className="text-xl font-semibold text-indigo-700 uppercase tracking-wider">
// // //                     {sectionSubtitle}
// // //                 </p>
// // //                 <h2 className="max-w-2xl text-3xl md:text-5xl font-semibold text-gray-900 mt-2">
// // //                     {sectionTitle}
// // //                 </h2>
// // //             </div>

// // //             {/* Swiper Slider */}
// // //             <Swiper
// // //                 modules={[Navigation]}
// // //                 spaceBetween={30}
// // //                 slidesPerView={3}
// // //                 navigation
// // //                 loop
// // //                 breakpoints={{
// // //                     320: { slidesPerView: 1 },
// // //                     768: { slidesPerView: 2 },
// // //                     1024: { slidesPerView: 3.5 },
// // //                 }}
// // //                 className="pb-12"
// // //             >
// // //                 {testimonials.map((item, index) => (
// // //                     <SwiperSlide key={index}>
// // //                         <HoverVideoCard item={item} />
// // //                     </SwiperSlide>
// // //                 ))}
// // //             </Swiper>
// // //         </section>
// // //     );
// // // }

// // // // 👇 Card with hover video + text overlay
// // // function HoverVideoCard({ item }) {
// // //     const [hover, setHover] = useState(false);

// // //     return (
// // //         <div
// // //             className="relative rounded-2xl overflow-hidden h-[500px] cursor-pointer group"
// // //             onMouseEnter={() => setHover(true)}
// // //             onMouseLeave={() => setHover(false)}
// // //         >
// // //             {/* Video on Hover */}
// // //             {hover && (
// // //                 <video
// // //                     src={item.video}
// // //                     autoPlay
// // //                     muted
// // //                     loop
// // //                     className="absolute inset-0 -z-10 w-full h-full object-cover"
// // //                 />
// // //             )}

// // //             {/* Caption + Quote */}
// // //             <div className="flex flex-col justify-between h-full gap-5 group-hover:bg-transparent bg-[#F7F7F7] group-hover:text-white text-black p-4 transition-colors duration-300">
// // //                 <Image
// // //                     src={item.avatar}
// // //                     alt={item.name}
// // //                     width={50}
// // //                     height={50}
// // //                     className="rounded-full w-14 h-14 object-cover"
// // //                 />

// // //                 <p className="text-xl leading-normal">"{item.quote}"</p>

// // //                 <div>
// // //                     <p className="text-xl font-semibold">{item.name}</p>
// // //                     <p className="text-sm opacity-80">{item.role}</p>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // "use client";

// // import { useEffect, useState } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import Image from "next/image";
// // import { COMMON_FIELD_NAMES, getValueByFieldNameAndPosition } from "@/lib/utils/sectionDataHelpers";
// // import { Image_URL } from "@/config/constants";

// // export default function Testimonials({ data }) {
// //     const [isMobile, setIsMobile] = useState(false);

// //   // Detect screen size on mount + resize
// //   useEffect(() => {
// //     const handleResize = () => {
// //       setIsMobile(window.innerWidth < 768); // mobile breakpoint (md:768px)
// //     };
// //     handleResize(); // run on mount
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //     // Extract dynamic values for section header using position-based approach
// //     const sectionSubtitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) || "Let's Grow Together";
// //     const sectionTitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || 'Real Success Stories from Our Global Network of Partners';

// //     // Extract testimonials data using position-based approach
// //     const testimonial1 = {
// //         name: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_NAME, 0) || 'Imran Qureshi',
// //         // role: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_ROLE, 0) || 'Agency Owner, Sharjah',
// //         // avatar: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_AVATAR, 0) || '/profile01.jpg',
// //         video: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_VIDEO, 0) || 'video.mp4',
// //         quote: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_QUOTE, 0) || 'Joining the Park Group network gave us access to top-tier projects and trustworthy clients. The support and payouts are unmatched. Park Group has truly transformed the way we do business.'
// //     };

// //     const testimonial2 = {
// //         name: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_NAME, 1) || 'Ali Khan',
// //         // role: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_ROLE, 1) || 'Investor, Dubai',
// //         // avatar: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_AVATAR, 1) || '/profile02.jpg',
// //         video: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_VIDEO, 1) || 'video.mp4',
// //         quote: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_QUOTE, 1) || 'Park Group made property investment seamless and transparent. Their network is trustworthy and reliable.'
// //     };

// //     const testimonial3 = {
// //         name: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_NAME, 2) || 'Sarah Ahmed',
// //         // role: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_ROLE, 2) || 'Realtor, Abu Dhabi',
// //         // avatar: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_AVATAR, 2) || '/profile01.jpg',
// //         video: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_VIDEO, 2) || 'video.mp4',
// //         quote: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_QUOTE, 2) || 'Working with Park Group boosted my business. Their projects are always high-quality and in demand.'
// //     };

// //     const testimonial4 = {
// //         name: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_NAME, 3) || 'Sarah Ahmed',
// //         // role: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_ROLE, 3) || 'Realtor, Abu Dhabi',
// //         // avatar: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_AVATAR, 3) || '/profile01.jpg',
// //         video: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_VIDEO, 3) || 'video.mp4',
// //         quote: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_QUOTE, 3) || 'Working with Park Group boosted my business. Their projects are always high-quality and in demand.'
// //     };

// //     const testimonial5 = {
// //         name: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_NAME, 4) || 'Sarah Ahmed',
// //         // role: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_ROLE, 4) || 'Realtor, Abu Dhabi',
// //         // avatar: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_AVATAR, 4) || '/profile01.jpg',
// //         video: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_VIDEO, 4) || 'video.mp4',
// //         quote: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TESTIMONIAL_QUOTE, 4) || 'Working with Park Group boosted my business. Their projects are always high-quality and in demand.'
// //     };



// //     // Filter testimonials that have names and quotes
// //     const dynamicTestimonials = [testimonial1, testimonial2, testimonial3, testimonial4, testimonial5]
// //         .filter(testimonial => testimonial.name && testimonial.name !== 'undefined' && testimonial.quote && testimonial.quote !== 'undefined');

// //     // Duplicate testimonials for a seamless loop
// //     const testimonials = dynamicTestimonials.length > 0 
// //         ? [...dynamicTestimonials] 
// //         : [
// //             // Fallback testimonials
// //             {
// //                 id: 1,
// //                 name: 'Imran Qureshi',
// //                 role: 'Agency Owner, Sharjah',
// //                 avatar: '/profile01.jpg',
// //                 video: 'video.mp4',
// //                 quote: 'Joining the Park Group network gave us access to top-tier projects and trustworthy clients. The support and payouts are unmatched. Park Group has truly transformed the way we do business.'
// //             },
// //             {
// //                 id: 2,
// //                 name: 'Ali Khan',
// //                 role: 'Investor, Dubai',
// //                 avatar: '/profile02.jpg',
// //                 video: 'video.mp4',
// //                 quote: 'Park Group made property investment seamless and transparent. Their network is trustworthy and reliable.'
// //             },
// //             {
// //                 id: 3,
// //                 name: 'Sarah Ahmed',
// //                 role: 'Realtor, Abu Dhabi',
// //                 avatar: '/profile01.jpg',
// //                 video: 'video.mp4',
// //                 quote: 'Working with Park Group boosted my business. Their projects are always high-quality and in demand.'
// //             }
// //         ];

// //     return (
// //     <section className="container max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
// //   {/* Header */}
// //   <div className="mb-6 sm:mb-10 text-center sm:text-start">
// //     <p className="text-sm sm:text-base font-semibold text-indigo-700 uppercase tracking-wide">
// //       {sectionSubtitle}
// //     </p>
// //     <h2 className="max-w-3xl mx-auto sm:mx-0 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
// //       {sectionTitle}
// //     </h2>
// //   </div>

// //   {/* Swiper Slider */}
// //   <Swiper
// //     modules={[Navigation]}
// //     spaceBetween={20} // smaller space on small screens
// //     slidesPerView={1} // default for mobile
// //     navigation={!isMobile}
// //     loop
// //     breakpoints={{
// //       640: { slidesPerView: 1, spaceBetween: 20 }, // sm
// //       768: { slidesPerView: 2, spaceBetween: 25 }, // md
// //       1024: { slidesPerView: 3, spaceBetween: 30 }, // lg
// //     }}
// //     className="pb-12"
// //   >
// //     {testimonials.map((item, index) => (
// //       <SwiperSlide key={index} className="flex justify-center">
// //         <HoverVideoCard item={item} />
// //       </SwiperSlide>
// //     ))}
// //   </Swiper>
// // </section>

// //     );
// // }

// // function HoverVideoCard({ item }) {
// //   const [hover, setHover] = useState(false);

// //   return (
// //     <div
// //       className="relative rounded-2xl overflow-hidden h-[500px] cursor-pointer group mx-auto max-w-sm sm:max-w-md md:max-w-lg"
// //       onMouseEnter={() => setHover(true)}
// //       onMouseLeave={() => setHover(false)}
// //     >
// //       {/* Preloaded video (always in DOM, just controlled by opacity) */}
// //       <video
// //         src={`${Image_URL}/${item.video}`}
// //         muted
// //         loop
// //         playsInline
// //         preload="auto" // 👈 ensures browser buffers video
// //         className={`absolute inset-0 -z-10 w-full h-full object-cover transition-opacity duration-500 ${
// //           hover ? "opacity-100" : "opacity-0"
// //         }`}
// //       />

// //       {/* Caption + Quote */}
// //       <div
// //         className={`flex flex-col justify-center h-full gap-16 p-4 transition-colors duration-300 ${
// //           hover ? "bg-transparent text-white" : "bg-[#F7F7F7] text-black"
// //         }`}
// //       >
// //         <p className="text-sm sm:text-base md:text-lg leading-relaxed">"{item.quote}"</p>

// //         <div>
// //           <p className="text-base sm:text-xl font-[rage]">{item.name}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }







// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Image from "next/image";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { servicesApi } from "@/lib/api/services";
// import { useEffect, useState } from "react";

// const testimonials = [
//   {
//     name: "Montgomery",
//     title: "Event organizer",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
//     rating: 5,
//     avatar: "/avatar1.png",
//   },
//   {
//     name: "Montgomery",
//     title: "Event organizer",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
//     rating: 5,
//     avatar: "/avatar1.png",
//   },

//   {
//     name: "Montgomery",
//     title: "Event organizer",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
//     rating: 5,
//     avatar: "/avatar1.png",
//   },
//   {
//     name: "Montgomery",
//     title: "Event organizer",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
//     rating: 5,
//     avatar: "/avatar1.png",
//   },
//   {
//     name: "Montgomery",
//     title: "Event organizer",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
//     rating: 5,
//     avatar: "/avatar1.png",
//   },
//   {
//     name: "Montgomery",
//     title: "Event organizer",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
//     rating: 5,
//     avatar: "/avatar1.png",
//   },

//   {
//     name: "Montgomery",
//     title: "Event organizer",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
//     rating: 5,
//     avatar: "/avatar1.png",
//   },

//   {
//     name: "Montgomery",
//     title: "Event organizer",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
//     rating: 5,
//     avatar: "/avatar1.png",
//   },

//   {
//     name: "Montgomery",
//     title: "Event organizer",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
//     rating: 5,
//     avatar: "/avatar1.png",
//   },
//   {
//     name: "Montgomery",
//     title: "Event organizer",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
//     rating: 5,
//     avatar: "/avatar1.png",
//   },
//   {
//     name: "Montgomery",
//     title: "Event organizer",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
//     rating: 5,
//     avatar: "",
//   },
//   // ...baqi testimonials
// ];

// export default function Testimonials() {
//   const [testimonials, setTestimonials] = useState([]);
//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const res = await servicesApi.getAllTestimonials();
//         console.log("API Response:", res.data);
//         setTestimonials(res.data);
//       } catch (error) {
//         console.error(" Testimonials API Error:", error);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   return (
//     <section className="py-16 bg-[#1A7D85]">
//       <div className="max-w-[1200px] mx-auto text-center px-4">
//         <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
//           Testimonials
//         </h2>
//         <p className="text-white mb-12">
//           At Bidec, launching your app is only the beginning.<br />
//           We provide continuous post-launch services that keep you ahead of the competition.
//         </p>


//         <Swiper
//           modules={[Navigation,]}
//           spaceBetween={30}
//           slidesPerView={1}
//           navigation={{
//             nextEl: ".custom-next",
//             prevEl: ".custom-prev",
//           }}
//           // pagination={{ clickable: true }}
//           breakpoints={{
//             640: { slidesPerView: 3.5 },
//             1024: { slidesPerView: 3.5 },
//           }}
//           className="pb-14"
//         >
//           {testimonials.map((item, idx) => (
//             <SwiperSlide key={idx}>
//               <div className="bg-white rounded-xl p-6 text-left 
//                  h-[420px] flex flex-col justify-between shadow-md">

//                 {/* ⭐ Avatar + Stars */}
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center gap-3">
//                     {item.avatar ? (
//                       <Image
//                         src={item.avatar}
//                         alt={item.name}
//                         width={50}
//                         height={50}
//                         className="rounded-full"
//                       />
//                     ) : (
//                       <div className="w-[50px] h-[50px] rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xl">
//                         ?
//                       </div>
//                     )}
//                   </div>

//                   <div className="flex gap-1">
//                     {Array(item.rating)
//                       .fill()
//                       .map((_, i) => (
//                         <span key={i} className="text-yellow-400 text-lg">★</span>
//                       ))}
//                   </div>
//                 </div>

//                 {/* Name + Title */}
//                 <div className="mb-3">
//                   <h4 className="font-semibold">{item.name}</h4>
//                   <p className="text-gray-500 text-sm">{item.title}</p>
//                 </div>

//                 {/* Review Text */}
//                 <p className="text-gray-600 mb-6 overflow-hidden text-ellipsis">
//                   {item.text}
//                 </p>

//                 <div className="flex mt-auto">
//                   <Image
//                     src="/car.png"
//                     alt="Company Logo"
//                     width={120}
//                     height={40}
//                     className="object-contain"
//                   />
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* 👇 Custom Navigation Buttons Centered Below */}
//         <div className="flex justify-center gap-6 mt-6">
//           <button className="custom-prev bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
//             <IoIosArrowBack className="text-[#1A7D85] text-lg" />
//           </button>
//           <button className="custom-next bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
//             <IoIosArrowForward className="text-[#1A7D85] text-lg" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { servicesApi } from "@/api/servicesApi"; // ✅ import your api file
import { servicesApi } from "@/lib/api/services";
import { Image_URL } from "@/config/constants";
import { COMMON_FIELD_NAMES, getFieldValue } from "@/lib/utils/sectionDataHelpers";

export default function Testimonials({ data }) {
  const [testimonials, setTestimonials] = useState([]);
  console.log("dataasASa", data);
  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
  const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await servicesApi.getAllTestimonials();
        console.log("✅ API Response:", res.data);

        if (Array.isArray(res.data)) {
          setTestimonials(res.data);
        } else if (Array.isArray(res.data?.data)) {
          setTestimonials(res.data.data);
        } else {
          setTestimonials([]); // fallback
        }
      } catch (error) {
        console.error("❌ Testimonials API Error:", error);
      }
    };

    fetchTestimonials();
  }, []);
  // const BASE_URL = "https://bidecsol.datainovate.com/storage/app/public/";
  return (
    <section className="py-16 bg-[#1A7D85]">
      <div className="max-w-[1200px] mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {heading || "Testimonials"}
        </h2>
        <p className="text-white mb-12">
          {description}
        </p>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 3.5 },
            1024: { slidesPerView: 3.5 },
          }}
          className="pb-14"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-xl p-6 text-left 
                 h-[420px] flex flex-col justify-between shadow-md">

                {/* ⭐ Avatar + Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    {item.avatar ? (
                      <Image
                        src={`${Image_URL}${item.avatar}`}
                        alt={item.name}
                        width={50}
                        height={70}
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-xl">
                        ?
                      </div>
                    )}
                  </div>


                  <div className="flex gap-1">
                    {Array(item.rating || 5)
                      .fill()
                      .map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                  </div>
                </div>

                {/* Name + Title */}
                <div className="mb-3">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.designation}</p>
                </div>

                {/* Review Text */}
                <p className="text-gray-600 mb-6 overflow-hidden text-ellipsis">
                  {item.message}
                </p>

                <div className="flex mt-auto">
                  {item.company_logo ? (
                    <Image
                      src={`${Image_URL}${item.company_logo}`}
                      alt={item.company || "Company Logo"}
                      width={120}
                      height={40}
                      className="object-contain"
                    />
                  ) : (
                    <Image
                      src="/car.png"
                      alt="Default Company Logo"
                      width={120}
                      height={40}
                      className="object-contain"
                    />
                  )}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 👇 Custom Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <button className="custom-prev bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
            <IoIosArrowBack className="text-[#1A7D85] text-lg" />
          </button>
          <button className="custom-next bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
            <IoIosArrowForward className="text-[#1A7D85] text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}

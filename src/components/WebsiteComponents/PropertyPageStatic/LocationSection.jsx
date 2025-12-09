// "use client";
// import Image from "next/image";
// import { getValueByFieldNameAndPosition, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";

// export default function LocationSection({ data }) {
//   console.log('LocationSection data:', data);

//   // Extract dynamic values using position-based approach
//   const title = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || 'Prime Location & Connectivity';
//   // const subtitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) || 'Strategically Located for Modern Living';
//   const description = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) || 'Discover the perfect blend of urban convenience and serene coastal living in our strategically positioned development.';

//   // Extract location details
//   const address = getValueByFieldNameAndPosition(data, 'location_address', 0) || 'Dubai Island, Dubai, UAE';
//   const mapImage = getValueByFieldNameAndPosition(data, 'map_image', 0) || '/placeholder-map.png';
//   const mapUrl = getValueByFieldNameAndPosition(data, 'map_url', 0) || 'https://maps.google.com';

//   // Extract nearby landmarks - supporting multiple landmarks
//   const landmarkItems = [];
//   for (let i = 0; i < 8; i++) { // Support up to 8 landmarks
//     const landmarkName = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, i);
//     // const landmarkDistance = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION, i);
//     const landmarkIcon = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_IMAGE, i);

//     if (landmarkName) {
//       landmarkItems.push({
//         name: landmarkName,
//         // distance: landmarkDistance,
//         icon: landmarkIcon || '/ico1.png'
//       });
//     }
//   }

//   // Fallback landmarks if no dynamic data
//   const landmarks = landmarkItems.length > 0 ? landmarkItems : [
//     { name: 'Downtown Dubai', distance: '15 minutes', icon: '/ico1.png' },
//     { name: 'Dubai International Airport', distance: '20 minutes', icon: '/ico2.png' },
//     { name: 'Dubai Mall', distance: '18 minutes', icon: '/ico3.png' },
//     { name: 'Burj Khalifa', distance: '16 minutes', icon: '/ico4.png' },
//     { name: 'Dubai Marina', distance: '25 minutes', icon: '/ico1.png' },
//     { name: 'Palm Jumeirah', distance: '30 minutes', icon: '/ico2.png' }
//   ];

//   return (
//     <section className="py-16 px-4 bg-gray-50">
//       <div className="max-w-[1200px] mx-auto">
//         {/* Header */}


//         <div className="grid lg:grid-cols-2 gap-12 items-start">

//           {/* Right: Nearby Landmarks */}
//           <div className="space-y-6">
//             {/* <h3 className="text-2xl font-semibold text-gray-800">Nearby Landmarks</h3> */}
//             <div className="space-y-4">
//               <div className="text-start mb-12">
//                 <h2 className="text-3xl md:text-4xl font-normal mb-4">{title}</h2>
//                 {/* <p className="text-xl text-gray-600 mb-2">{subtitle}</p> */}
//                 <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">{description}</p>
//               </div>
//               {landmarks.map((landmark, index) => (
//                 <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
//                   <div className="w-12 h-12 bg-[#26326A] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
//                     <Image
//                       src={landmark.icon}
//                       alt={landmark.name}
//                       width={24}
//                       height={24}
//                       className="object-contain"
//                     />
//                   </div>
//                   <div className="flex-1">
//                     {/* <h4 className="font-medium text-gray-800">{landmark.name}</h4> */}
//                     <p className="text-sm text-gray-600">{landmark.name}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Left: Map */}
//           <div className="space-y-6">
//             <div className="relative rounded-xl overflow-hidden shadow-lg">
//               <Image
//                 src={mapImage}
//                 alt="Location Map"
//                 width={600}
//                 height={400}
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//             {/* Address */}
//             <div className="bg-white p-6 rounded-xl shadow-md">
//               <h3 className="text-lg font-semibold mb-2 text-gray-800">Address</h3>
//               <p className="text-gray-600">{address}</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { getValueByFieldNameAndPosition, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import { Image_URL } from "@/config/constants";

export default function LocationSection({ data }) {
  console.log("LocationSection data:", data);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  // Extract dynamic values
  const title =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) ||
    "Prime Location & Connectivity";
  const description =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
    "Discover the perfect blend of urban convenience and serene coastal living in our strategically positioned development.";

  const address =
    getValueByFieldNameAndPosition(data, "location_address", 0) ||
    "Dubai Island, Dubai, UAE";
  const mapImage =
    getValueByFieldNameAndPosition(data, "map_image", 0) ||
    "/placeholder-map.png";

  // Extract landmarks
  const landmarkItems = [];
  for (let i = 0; i < 8; i++) {
    const landmarkName = getValueByFieldNameAndPosition(
      data,
      COMMON_FIELD_NAMES.FEATURE_TITLE,
      i
    );
    const landmarkIcon = getValueByFieldNameAndPosition(
      data,
      COMMON_FIELD_NAMES.IMAGE,
      i
    );

    if (landmarkName) {
      landmarkItems.push({
        name: landmarkName,
        icon: landmarkIcon ? `${Image_URL}${landmarkIcon}` : "/locationIcon01.png",
      });
    }
  }

  const landmarks =
    landmarkItems.length > 0
      ? landmarkItems
      : [
        { name: "Downtown Dubai", icon: "/ico1.png" },
        { name: "Dubai International Airport", icon: "/ico2.png" },
        { name: "Dubai Mall", icon: "/ico3.png" },
        { name: "Burj Khalifa", icon: "/ico4.png" },
        { name: "Dubai Marina", icon: "/ico1.png" },
        { name: "Palm Jumeirah", icon: "/ico2.png" },
      ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text + Slider */}
          <div className="space-y-8">
            <div className="text-start">
              <h2 className="text-3xl md:text-4xl font-normal mb-4">{title}</h2>
              <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {description}
              </p>
            </div>

            {/* Landmark Slider */}
            {/* <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
              className="!pb-10"
            >
              {landmarks.map((landmark, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-[#26326A] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Image
                        src={landmark.icon}
                        alt={landmark.name}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">{landmark.name}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
            {/* Landmark Slider */}
            {/* Landmark Slider */}
            <div className="relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={2} // always show 2 slides
                navigation={{
                  prevEl: ".custom-prev",
                  nextEl: ".custom-next",
                }}
                className="!pb-10"
              >
                {landmarks.map((landmark, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-start  gap-4">
                      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <img
                          // src={landmark.icon ? landmark.icon : "/locationIcon01.png"}
                          src={landmark.icon || "/locationIcon01.png"}
                          alt={''}
                          // width={24}
                          // height={24}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">{landmark.name}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="flex justify-start gap-4 mt-6">
                <button className="custom-prev w-10 h-10 rounded-xl bg-transparent border border-black flex items-center justify-center text-black hover:text-white cursor-pointer hover:bg-[#26326A] transition">
                  <FaAngleLeft />
                </button>
                <button className="custom-next w-10 h-10 rounded-xl bg-transparent border border-black flex items-center justify-center text-black hover:text-white cursor-pointer hover:bg-[#26326A] transition">
                  <FaAngleRight />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="space-y-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={mapImage}
                alt="Location Map"
                // width={600}
                // height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Address
              </h3>
              <p className="text-gray-600">{address}</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

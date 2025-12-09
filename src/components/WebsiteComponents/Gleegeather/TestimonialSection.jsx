
// import React, { useState } from "react";
// import {
//   COMMON_FIELD_NAMES,
//   getFieldValuesByNameWithPosition,
//   getValueByFieldNameAndPosition,
// } from "@/lib/utils/sectionDataHelpers";
// import { Image_URL } from "@/config/constants";
// const reviews = [
//   {
//     name: "Ahmed R., Jeddah",
//     role: "Umrah Traveler",
//     rating: 5,
//     text: "Trusted by pilgrims for safe, comfortable, and reliable travel between Mekkah, Madinah, and Jeddah, with verified vehicles and instant WhatsApp confirmations.",
//   },
//   {
//     name: "Sara K., Riyadh",
//     role: "Umrah Traveler",
//     rating: 4,
//     text: "Very reliable service with timely updates. Highly recommended for first-time travelers.",
//   },
//   {
//     name: "Mohammed H., Medina",
//     role: "Umrah Traveler",
//     rating: 5,
//     text: "Comfortable vehicles and friendly drivers. Excellent support during the journey.",
//   },
// ];

// export default function TestimonialSection(data) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
//   };

//   const currentReview = reviews[currentIndex];
//   const heading =
//     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";

  
//   const description =
//     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
//     "";
//      const featureTitles = getFieldValuesByNameWithPosition(
//         data,
//         COMMON_FIELD_NAMES.FEATURE_TITLE
//       );
    
//       const featureDescriptions = getFieldValuesByNameWithPosition(
//         data,
//         COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
//       );
     
    
//       const travelling = getFieldValuesByNameWithPosition(
//         data,
//         COMMON_FIELD_NAMES.TITLE
//       );
//        const rating = getFieldValuesByNameWithPosition(
//         data,
//         COMMON_FIELD_NAMES.BOOLEANVALUE
//       );
//    const images = getFieldValuesByNameWithPosition(
//         data,
//         COMMON_FIELD_NAMES.FEATURE_IMAGE
//       );
    
//   return (
//     <section className="w-full bg-white max-w-[1200px] py-20 flex justify-center">
//       <div className="w-11/12 max-w-6xl grid md:grid-cols-2 gap-10 relative">
//         {/* Left Image */}
//         <div className="relative">
//           <img
//             src="/images/client.jpg"
//             alt="client"
//             className="rounded-2xl shadow-lg w-full h-[420px] object-cover"
//           />
//         </div>

//         {/* Right Content */}
//         <div className="flex flex-col -mt-48 justify-center">
//           <h2 className="text-3xl font-bold text-gray-900">
//             Client <span className="text-yellow-500">Testimonial</span>
//           </h2>
//           <p className="mt-3 text-gray-500 max-w-md">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//           </p>
//         </div>

//         {/* Testimonial Card */}
//         <div className="absolute md:bottom-[-40px] right-0 left-0 md:left-auto md:right-0 md:w-[60%] w-full mx-auto bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-2">
//           <h3 className="font-semibold text-gray-900">{currentReview.name}</h3>
//           <p className="text-sm ">{currentReview.role}</p>
//           <div className="flex text-yellow-400 text-lg">
//             {"★".repeat(currentReview.rating)}
//           </div>
//           <p className="text-gray-600 text-sm mt-1">{currentReview.text}</p>

//           {/* Arrows */}
//           <div className="flex justify-end gap-4 mt-4">
//             <button
//               onClick={handlePrev}
//               className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
//             >
//               ←
//             </button>
//             <button
//               onClick={handleNext}
//               className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
//             >
//               →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import {
  COMMON_FIELD_NAMES,
  getFieldValuesByNameWithPosition,
  getValueByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function TestimonialSection({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ===== Dynamic Section Fields ===== //
  const heading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";
  const description =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.NEWS_DESCRIPTION, 0) ||
    "";

  // const reviewNames = getFieldValuesByNameWithPosition(

  //   data,
  //   COMMON_FIELD_NAMES.TITLE
  // );
  // const reviewRoles = getFieldValuesByNameWithPosition(
  //   data,
  //   COMMON_FIELD_NAMES.SUB_HEADING
  // );
  // const reviewTexts = getFieldValuesByNameWithPosition(
  //   data,
  //   COMMON_FIELD_NAMES.DESCRIPTION
  // );
  // const reviewRatings = getFieldValuesByNameWithPosition(
  //   data,
  //   COMMON_FIELD_NAMES.BOOLEANVALUE
  // ); // assuming rating stored as number
  // const reviewImages = getFieldValuesByNameWithPosition(
  //   data,
  //   COMMON_FIELD_NAMES.FEATURE_IMAGE
  // );

  // Combine all reviews into an array of objects
  const reviewNames = getFieldValuesByNameWithPosition(
  data,
  COMMON_FIELD_NAMES.TITLE
)?.map(item => item?.value || "") || [];

const reviewRoles = getFieldValuesByNameWithPosition(
  data,
  COMMON_FIELD_NAMES.FEATURE_TITLE
)?.map(item => item?.value || "") || [];

const reviewTexts = getFieldValuesByNameWithPosition(
  data,
  COMMON_FIELD_NAMES.DESCRIPTION
)?.map(item => item?.value || "") || [];

const reviewRatings = getFieldValuesByNameWithPosition(
  data,
  COMMON_FIELD_NAMES.BOOLEANVALUE
)?.map(item => Number(item?.value) || 5) || [];

const reviewImages = getFieldValuesByNameWithPosition(
  data,
  COMMON_FIELD_NAMES.FEATURE_IMAGE
)?.map(item => item?.value || "/images/client.jpg") || [];

  const reviews = reviewNames.map((name, index) => ({
    name,
    role: reviewRoles[index] || "",
    text: reviewTexts[index] || "",
    rating: reviewRatings[index] || 5,
    img: reviewImages[index] || "/images/client.jpg",
  }));

  const currentReview = reviews[currentIndex] || {};

  // Arrow handlers
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full mx-auto bg-white max-w-[1200px] py20 flex justify-center">
      <div className="w-11/12 max-w-6xl grid md:grid-cols-2 gap-10 relative">
        {/* Left Image */}
        <div className="relative">
          <img
                          src={`${Image_URL}/${currentReview.img}`}
          
            // src={currentReview.img.startsWith("http") ? currentReview.img : `${Image_URL}/${currentReview.img}`}
            alt={currentReview.name || "client"}
            className="rounded-2xl shadowlg w-full h-[540px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col -mt-48 justify-center">
          <h2 className="text-3xl font-bold text-gray-900"  dangerouslySetInnerHTML={{ __html: heading }}/>
        
          <p className="mt-3 text-gray-500 max-w-md">
            {description || "Trusted by our clients for safe and reliable services."}
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="absolute md:bottom-[-40px] right-0 left-0 md:left-auto md:right-0 md:w-[60%] w-full mx-auto bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-2">
          <h3 className="font-semibold text-gray-900">{currentReview.name}</h3>
          <p className="text-sm">{currentReview.role}</p>
          <div className="flex text-yellow-400 text-lg">
            {"★".repeat(currentReview.rating)}
          </div>
          <p className="text-gray-600 text-sm mt-1">{currentReview.text}</p>

          {/* Arrows */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

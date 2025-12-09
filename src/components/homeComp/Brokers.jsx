// import React from "react";
// import { getFieldValue, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";

// const Brokers = ({ data }) => {
//     // Extract dynamic values for section header
//     const sectionSubtitle = getFieldValue(data, 'section_subtitle') || 'Why Park Group';
//     const sectionTitle = getFieldValue(data, 'section_title') || 'Tailored for Brokers. Trusted by Investors.';
//     const hoverImage = getFieldValue(data, 'hover_image') || '/brokersHoverImg.png';

//     // Extract feature data
//     const feature1 = {
//         title: getFieldValue(data, 'feature_1_title') || 'Fast Payouts',
//         desc: getFieldValue(data, 'feature_1_description') || 'Receive your commissions quickly with our streamlined payment system.'
//     };

//     const feature2 = {
//         title: getFieldValue(data, 'feature_2_title') || 'Exclusive Inventory',
//         desc: getFieldValue(data, 'feature_2_description') || 'Gain access to premium, off-market properties not available to the public.'
//     };

//     const feature3 = {
//         title: getFieldValue(data, 'feature_3_title') || 'Flexible Plans',
//         desc: getFieldValue(data, 'feature_3_description') || 'Choose commission structures and marketing support that fit your business model.'
//     };

//     const feature4 = {
//         title: getFieldValue(data, 'feature_4_title') || 'Centric Support',
//         desc: getFieldValue(data, 'feature_4_description') || 'Work with a team that understands your goals and provides real-time assistance to help you close deals.'
//     };

//     // Filter features to only include those with titles
//     const features = [feature1, feature2, feature3, feature4]
//         .filter(feature => feature.title && feature.title !== 'undefined')
//         .map((feature, index) => ({ id: index + 1, ...feature }));

//     return (
//         <div className="w-full container mx-auto">
//             {/* Why Park Group */}
//             <div className="text-center mt-16">
//                 <p className="text-xl font-semibold text-[#26326A] uppercase tracking-wide">
//                     {sectionSubtitle}
//                 </p>
//                 <h2 className="text-3xl md:text-5xl font-bold mt-2">
//                     {sectionTitle}
//                 </h2>
//             </div>

//             <div className="grid md:grid-cols-4 gap-6 mt-12">
//                 {features.map((feature) => (
//                     <div
//                         key={feature.id}
//                         className="relative group p-6 rounded-2xl overflow-hidden cursor-pointer"
//                     >
//                         {/* Normal Content */}
//                         <div className="relative z-10 transition duration-300 group-hover:opacity-0">
//                             <p className="text-3xl font-bold mb-2">
//                                 {String(feature.id).padStart(2, "0")}
//                             </p>
//                             <h3 className="text-3xl font-semibold mb-3 text-blue-700">
//                                 {feature.title}
//                             </h3>
//                             <p className="text-xl leading-relaxed text-gray-600">
//                                 {feature.desc}
//                             </p>
//                         </div>

//                         {/* Hover Image */}
//                         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
//                             <img
//                                 src={hoverImage}
//                                 alt="Featured Property"
//                                 className="w-full h-full object-cover rounded-xl"
//                             />
//                             {/* Overlay */}
//                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-lg font-semibold">
//                                 {feature.title}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Brokers;
import React from "react";
import {  COMMON_FIELD_NAMES, getValueByFieldNameAndPosition } from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

const Brokers = ({ data }) => {
    // Extract dynamic values for section header
    const sectionSubtitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) || 'Why Park Group';
    const sectionTitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || 'Tailored for Brokers. Trusted by Investors.';
    // const hoverImage = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) || '/brokersHoverImg.png';

    // Extract feature data
    const feature1 = {
        title: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, 0) || 'Fast Payouts',
        desc: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION, 0) || 'Receive your commissions quickly with our streamlined payment system.',
        hoverImage: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_IMAGE, 0) || '/brokersHoverImg.png',
    };

    const feature2 = {
        title: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, 1) || 'Exclusive Inventory',
        desc: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION, 1) || 'Gain access to premium, off-market properties not available to the public.',
        hoverImage: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_IMAGE, 1) || '/brokersHoverImg.png'
    };

    const feature3 = {
        title: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, 2) || 'Flexible Plans',
        desc: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION, 2) || 'Choose commission structures and marketing support that fit your business model.',
        hoverImage: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_IMAGE, 2) || '/brokersHoverImg.png'
    };

    const feature4 = {
        title: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, 3) || 'Centric Support',
        desc: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION, 3) || 'Work with a team that understands your goals and provides real-time assistance to help you close deals.',
        hoverImage: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_IMAGE, 3) || '/brokersHoverImg.png'
    };

  // Filter features to only include those with titles
  const features = [feature1, feature2, feature3, feature4]
    .filter(feature => feature.title && feature.title !== 'undefined')
    .map((feature, index) => ({ id: index + 1, ...feature }));

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-8 md:py-16">
      {/* Why Park Group */}
      <div className="text-center md:text-left mb-8 md:mb-12">
        <p className="text-base md:text-xl font-semibold text-[#26326A] uppercase tracking-wide">
          {sectionSubtitle}
        </p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-2">
          {sectionTitle}
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-6 md:mt-12">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative group px-6 p-4 sm:p-6 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition max-w-full text-center md:text-left flex flex-col items-center md:items-start"
          >
            {/* Normal Content */}
            <div className="relative z-10 transition duration-300 group-hover:opacity-0">
              <p className="text-2xl sm:text-3xl font-bold mb-2 text-[#26326A]">
                {String(feature.id).padStart(2, "0")}
              </p>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-blue-700">
                {feature.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
                {feature.desc}
              </p>
            </div>

            {/* Hover Image */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <img
                src={`${Image_URL}/${feature.hoverImage}`}
                alt="Featured Property"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-lg sm:text-xl font-semibold">
                {feature.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brokers;

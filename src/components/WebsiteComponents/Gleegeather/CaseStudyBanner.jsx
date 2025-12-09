
// import {
//   COMMON_FIELD_NAMES,
//   getFieldValuesByNameWithPosition,
//   getValueByFieldNameAndPosition,
// } from "@/lib/utils/sectionDataHelpers";
// import { Image_URL } from "@/config/constants";

// export default function CaseStudyBanner({data}) {
//    const sub_heading =
//       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) ||
//       "";
  
//     const heading =
//       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";
  
//     const title =
//       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TITLE, 0) || "";
  
//     const description =
//       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
//       "";
  
//        const slide_title =
//       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_TITLE, 0) ||
//       "";
//     const featureTitles = getFieldValuesByNameWithPosition(
//       data,
//       COMMON_FIELD_NAMES.FEATURE_TITLE
//     );
  
//     const featureDescriptions = getFieldValuesByNameWithPosition(
//       data,
//       COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
//     );
  
//     const media =
//       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.VIDEO_URL, 0) || "";
  
//     const mobileMedia =
//       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.VIDEO_URL, 1) || "";
  
//   return (
//     <section
//       className="w-full bg-cover bg-center py-24"
//       style={{ backgroundImage: `url(${Image_URL}/${media})` }}
//     >
//       <div className="max-w-[1200px] mx-auto px-6 text-center lg:text-left">
        
//         <p className="text-center text-sm font-medium" dangerouslySetInnerHTML={{ __html: sub_heading }}/>
//           {/* GleeGather — Digital Transformation */}
     

//         {/* MAIN HEADING */}
//         <h2 className="text-3xl md:text-5xl text-center font-bold text-black mt-2 leading-tight"             dangerouslySetInnerHTML={{ __html: heading }}/>

//         {/* SUB TEXT */}
//         <p className="mt-3 text-base text-center md:text-lg text-gray-700 font-medium">
//          {title}
//         </p>

//         {/* LEFT INFO + RIGHT INFO */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">

//           {/* LEFT SIDE INFO */}
//           {/* <div className="space-y-4">
//             <div>
//               <p className="font-semibold text-black">Region:</p>
//               <p className="text-gray-700">Global (HQ in Pakistan)</p>
//             </div>

//             <div>
//               <p className="font-semibold text-black">Industry:</p>
//               <p className="text-gray-700">Food & Retail</p>
//             </div>

//             <div>
//               <p className="font-semibold text-black">Products Type:</p>
//               <p className="text-gray-700">
//                 Premium Snacks & Dry Fruits Brand
//               </p>
//             </div>
//           </div> */}
//           <div className="space-y-4">
//   {featureTitles.map((feature, i) => (
//     <div key={i}>
//       <p className="font-semibold text-black">{feature?.value}:</p>
//       <p className="tex-700">{featureDescriptions[i]?.value}</p>
//     </div>
//   ))}
// </div>



//           {/* RIGHT SIDE SERVICES ONLY */}
//           <div className="space-y-4">
//             <div>
//               <p className="font-semibold text-black">{slide_title}</p>
//               <p className="text-gray-700">
//                 {/* Website Development, CRM + LMS Integration,
//                 Mobile App Development, Social Media Marketing */}
//                 {description}
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
import {
  COMMON_FIELD_NAMES,
  getFieldValuesByNameWithPosition,
  getValueByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";
import Image from "next/image";

export default function CaseStudyBanner({ data }) {
  const sub_heading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) || "";

  const heading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";
 const IMAGE =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) || "";
  const title =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TITLE, 0) || "";

  const description =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) || "";

  const slide_title =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_TITLE, 0) || "";

  const featureTitles = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_TITLE
  );

  const featureDescriptions = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
  );

  const media =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.VIDEO_URL, 0) || "";

  return (
     <section
            className="w-full bg-cover min-h-screen bg-center relative overflow-hidden"
            style={{ backgroundImage: `url(${Image_URL}/${media})` }}
          >
      <div className="max-w-[1200px] mt-32 mx-auto px-6 text-center">

        {/* SUB HEADING */}
        <p
          className="text-sm font-medium text-center"
          dangerouslySetInnerHTML={{ __html: sub_heading }}
        />

        {/* MAIN HEADING */}
        <h2
          className="text-3xl md:text-5xl font-bold text-center text-black mt-2 leading-tight"
          dangerouslySetInnerHTML={{ __html: heading }}
        />

        {/* TITLE */}
        <p className="mt-3 text-base md:text-lg text-center text-gray-700 font-medium">
          {title}
        </p>

        {/* GRID — LEFT TEXT — CENTER IMAGE — RIGHT TEXT */}
<div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-8 mt-4 items-start">

          {/* LEFT — FEATURE TITLES */}
          <div className="space-y-6 mt-10 text-left">
            {featureTitles.map((feature, i) => (
              <div key={i}>
                <p className="font-semibold text-black">{feature?.value}</p>
                <p className="text-gray-700">{featureDescriptions[i]?.value}</p>
              </div>
            ))}
          </div>

          {/* CENTER — IMAGE */}
          <div className="flex justify-center">
            {IMAGE ? (
              <img
                src={`${Image_URL}/${IMAGE}`}
                alt="Case Study Image"
        className="w-full max-w-[500px] h-auto object-contain"
              />
            ) : (
              <div className="w-[300px] h-[300px] bg-gray-200 rounded-lg"></div>
            )}
          </div>

          <div className="space-y-4 mt-20 text-left">
            <div>
              <p className="font-semibold text-black">{slide_title}</p>
              <p className="text-gray-700">{description}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

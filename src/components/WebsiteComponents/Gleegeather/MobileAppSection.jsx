
// import {
//   COMMON_FIELD_NAMES,
//   getValueByFieldNameAndPosition,
// } from "@/lib/utils/sectionDataHelpers";
// import { Image_URL } from "@/config/constants";

// export default function MobileAppSection({data}) {
//    const sectionHeading =
//       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";
  
//     const description =
//       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
//       "";
  
//     const image =
//       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) || "";
//   return (
//     <section
//       className="w-full bg-[#0D0D0D] py-20 bg-contain Pb-10 bg-left bg-no-repeat"
//       style={{
//         backgroundImage: "url('/gleeback.png')",
//       }}
//     >
//       <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-6 gap-10">

//         <div className="hidden lg:block"></div>

//         <div className="text-white lg:pr-10">
//           <h2 className="text-4xl md:text-5xl font-semibold leading-snug">
            
//           </h2>

//           <ul className="mt-8 space-y-5">

//             <li className="flex gap-3 text-gray-300 text-lg leading-relaxed">
//               <span className="text-yellow-500 text-xl mt-1">•</span>
//               when an unknown printer took a galley of type and
//               <span className="text-red-500 ml-1">scrambled it</span>
//               to make a type specimen
//             </li>

//             <li className="flex gap-3 text-gray-300 text-lg leading-relaxed">
//               <span className="text-yellow-500 text-xl mt-1">•</span>
//               when an unknown printer took a galley of
//               <span className="text-green-500 font-semibold ml-1">type and</span>
//               scrambled it to make a type specimen
//             </li>

//             <li className="flex gap-3 text-gray-300 text-lg leading-relaxed">
//               <span className="text-yellow-500 text-xl mt-1">•</span>
//               when an
//               <span className="text-red-500 ml-1">unknown printer</span>
//               took a galley of type and scrambled it to make a type specimen
//             </li>

//           </ul>
//         </div>

//       </div>
//     </section>
//   );
// }
"use client";

import {
  COMMON_FIELD_NAMES,
  getValueByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function MobileAppSection({ data }) {
  if (!data) return null;

  const heading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";

  const description =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
    "";

  const backgroundImage =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
    "gleeback.png"; // fallback image

  return (
    <section
      className="w-full bg-[#0D0D0D] py-20 bg-contain bg-left bg-no-repeat"
      style={{
        backgroundImage: `url('${Image_URL}/${backgroundImage}')`,
      }}
    >
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-6 gap-10">
        
        {/* Empty div for spacing / optional */}
        <div className="hidden lg:block"></div>

        {/* Dynamic Content */}
        <div className="text-white lg:pr-10">
          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-semibold leading-snug"
            dangerouslySetInnerHTML={{ __html: heading }}
          />

          {/* Dynamic Description / Bullet Points */}
          <div
            className="mt-8 space-y-5 text-gray-300 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

      </div>
    </section>
  );
}

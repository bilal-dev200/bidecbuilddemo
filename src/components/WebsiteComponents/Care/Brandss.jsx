// import Image from "next/image";
// import {
//     COMMON_FIELD_NAMES,
//     getFieldValuesByNameWithPosition,
//     getValueByFieldNameAndPosition,
// } from "@/lib/utils/sectionDataHelpers";
// import { Image_URL } from "@/config/constants";

// const Brandss = ({data}) => {
//     const description =
//              getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION) ||
//              "";
      
//           const heading =
//               getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";
  
//                const image =
//                       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
//                       "/bombaybanner.png";
//   return (
//     <div className="mt-20 max-w-7xl">
//     <section className="relative px40 w-full h-[600px]  overflow-hidden">

//       {/* BACKGROUND IMAGE */}
//       <Image
//         src="/imgss.png"     // <-- ye tumhari single background Figma wali image
//         alt="Brand Background"
//         fill
//         className=""
//       />

//       {/* RIGHT SIDE TEXT OVERLAY */}
//       <div className="absolute inset-0 mt-40 flex items-center justify-end">
//         <div className="w-full md:w-[45%]  p-6 md:p-10 ">

//           <h2 className="text-3xl font-bold text-gray-900 mb-5">
//             Brand Identity Alignment
//           </h2>

//           <ul className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
//             <li className="flex gap-3">
//               <span className="text-yellow-500 text-lg">●</span>
//               Created an online brand identity that reflects luxury, trust,
//               and advanced aesthetic solutions.
//             </li>

//             <li className="flex gap-3">
//               <span className="text-yellow-500 text-lg">●</span>
//               Luxury-focused visuals and messaging aligned with Caviar’s positioning.
//             </li>

//             <li className="flex gap-3">
//               <span className="text-yellow-500 text-lg">●</span>
//               <span>
//                  Improved perception and differentiation in
//                 the aesthetic care market.
//               </span>
//             </li>
//           </ul>

//         </div>
//       </div>

//     </section>
//     </div>
//   );
// };

// export default Brandss;
// import Image from "next/image";
// import {
//   COMMON_FIELD_NAMES,
//   getValueByFieldNameAndPosition,
//   getFieldValuesByNameWithPosition,
// } from "@/lib/utils/sectionDataHelpers";
// import { Image_URL } from "@/config/constants";

// const Brandss = ({ data }) => {
//   // Heading
//   const heading =
//     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";

//   // Image
//   const image =
//     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
//     "/bombaybanner.png";

//   // Description → array of bullet points
//   const descriptionList =
//     getFieldValuesByNameWithPosition(data, COMMON_FIELD_NAMES.DESCRIPTION) || [];

//   return (
//     <div className="mt-20 max-w-7xl mx-auto">
//       <section className="relative w-full h-[600px] overflow-hidden">

//         {/* BACKGROUND IMAGE */}
//         <Image
//         src={`${Image_URL}${image}`}
//           alt="Brand Background"
//           fill
//           className="object-cover"
//         />

//         {/* RIGHT SIDE TEXT OVERLAY */}
//         <div className="absolute inset-0 mt-40 flex items-center justify-end">
//           <div className="w-full md:w-[45%] p-6 md:p-10">

//             {/* Dynamic Heading */}
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">
//               {heading}
//             </h2>

//             {/* Dynamic Description bulleted list */}
//             <ul className="space-y-4 text-gray-700 text-[15px] leading-relaxed">

//               {descriptionList.map((item, index) => (
//                 <li key={index} className="flex gap-3">
//                   <span className="text-yellow-500 text-lg">●</span>
//                   {item}
//                 </li>
//               ))}

//             </ul>

//           </div>
//         </div>

//       </section>
//     </div>
//   );
// };

// export default Brandss;
import Image from "next/image";
import {
  COMMON_FIELD_NAMES,
  getValueByFieldNameAndPosition,
  getFieldValuesByNameWithPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

const Brandss = ({ data }) => {
  // Heading
  const heading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0)?.value ||
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) ||
    "";

  // Image
      const image =
                    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
                    "/bombaybanner.png";

  // Description → array of bullet point objects
  const descriptionList =
    getFieldValuesByNameWithPosition(data, COMMON_FIELD_NAMES.DESCRIPTION) || [];
// const text_color=
//     getFieldValuesByNameWithPosition(data, COMMON_FIELD_NAMES.TEXT_COLOR) || [];
// const textColorObj =
//   getFieldValuesByNameWithPosition(data, COMMON_FIELD_NAMES.TEXT_COLOR);

// const bulletTextColor = textColorObj?.[0] || "#000";
// console.log("COLOR FROM API =>", bulletTextColor);
const textColorArray =
  getFieldValuesByNameWithPosition(data, COMMON_FIELD_NAMES.TEXT_COLOR) || [];

const bulletTextColor =
  textColorArray?.[0]?.value || "#000";

console.log("COLOR FROM API =>", bulletTextColor);

// const bulletTextColor =
//   text_color?.[0]?.value || "#000"; // fallback black
  return (
    <div className="mt30 max-w-7xl mx-auto">
      <section className="relative w-full h-[700px] overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <Image
          src={`${Image_URL}${image}`}
          alt="Brand Background"
          fill
          className="object-cover"
        />

        {/* RIGHT SIDE TEXT */}
        <div className="absolute inset-0 mt-40 flex items-center justify-end">
          <div className="w-full md:w-[45%] p-6 md:p-10">

            {/* Heading */}
            <h2 className="text-5xl font-bold  mb-6" dangerouslySetInnerHTML={{ __html: heading }}/>
              {/* {heading}
            </h2> */}

            {/* Bullet List */}
            <ul className="space-y-4   text-[15px] leading-relaxed">
              {descriptionList.map((item, index) => (
                // <li key={index} className="flex gap-3">
                //   <span className="text-yellow-500 text-lg">●</span>
                //   {item?.value}
                // </li>
//                 <li key={index} className="flex gap-3">
//   <span className="text-yellow-500 text-lg">●</span>

//   <span style={{ color: bulletTextColor }}>
//     {item?.value}
//   </span>
// </li>
<li key={index} className="flex gap-3">
  <span className="text-yellow-500 text-lg">●</span>

  <span style={{ color: bulletTextColor }}>
    {item?.value}
  </span>
</li>


              ))}
            </ul>

          </div>
        </div>

      </section>
    </div>
  );
};

export default Brandss;

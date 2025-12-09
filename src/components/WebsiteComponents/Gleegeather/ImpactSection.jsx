
// import {
//     COMMON_FIELD_NAMES,
//     getValueByFieldNameAndPosition,
//     getFieldValuesByNameWithPosition,
// } from "@/lib/utils/sectionDataHelpers";
// import { Image_URL } from "@/config/constants";


// export default function ImpactSection({ data }) {
//     const heading =
//         getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";
//     const title =
//         getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TITLE, 0) || "";
//   const featureTitles = getFieldValuesByNameWithPosition(
//     data,
//     COMMON_FIELD_NAMES.FEATURE_TITLE
//   );
//     // Dynamic image
//     const image =
//         getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
//         "/robot.png.";
//     return (
//         <section className="w-full py16 bg-white">
//             <div className="max-w-[1200px] mx-auto px6 lg:px12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

//                 {/* Left: Image */}
//                 <div className="flex justify-center -mt-[100px]">
//                     <img
//                         src="/robot.png"
//                         alt="Business Outcomes Illustration"
//                         className="w-full max-w-lg h-[500px]"
//                     />
//                 </div>

//                 {/* Right: Content */}
//                 <div className="mt-14">
//                     <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
//                         Measurable Impact
//                     </h2>

//                     <div className="mt-6">
//                         <h3 className="text-xl font-semibold text-gray-800">
//                             Website Development
//                         </h3>

//                         <ul className="mt-4 space-y-3 text-gray-700">
//                             <li className="flex gap-2">
//                                 <span className="text-yellow-500 font-bold">•</span>
//                                 Built a responsive platform with
//                                 500+ pages of content covering
//                                 courses, resources, and STEM updates.
//                             </li>

//                             <li className="flex gap-2">
//                                 <span className="text-yellow-500 font-bold">•</span>
//                                 <span className="font-semibold">Impact: 40%</span> more inquiries in
//                                 three months.
//                             </li>
//                         </ul>

//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }
import {
  COMMON_FIELD_NAMES,
  getValueByFieldNameAndPosition,
  getFieldValuesByNameWithPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function ImpactSection({ data }) {
  if (!data) return null;

  // Dynamic fields
  const heading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";

  const title =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TITLE, 0) || "";

  const image =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) || "";

  const featureTitles =
    getFieldValuesByNameWithPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE) ||
    [];

  return (
    <section className="w-full py16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT — DYNAMIC IMAGE */}
        <div className="flex justify-center -mt-[100px]">
          <img
            src={image ? `${Image_URL}${image}` : "/robot.png"}
            alt="Impact Illustration"
            className="w-full max-w-lg h-[500px] object-contain"
          />
        </div>

        {/* RIGHT — DYNAMIC CONTENT */}
        <div className="mt-14">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: heading }}/>
            {/* {heading} */}
          {/* </h2> */}

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">
              {title}
            </h3>

            <ul className="mt-4 space-y-3 text-gray-700">
              {featureTitles?.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  {item?.value}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}

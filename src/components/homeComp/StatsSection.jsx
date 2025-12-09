// import Image from "next/image";
// import { getFieldValue, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";

// export default function StatsSection({ data }) {
//     // Extract dynamic values for section header
//     const sectionSubtitle = getFieldValue(data, 'section_subtitle') || 'A Network You Can Count On';
//     const sectionTitle = getFieldValue(data, 'section_title') || 'Trusted by Leading Agencies';
//     const image = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE) || '/statssectionimg.png';

//     // Extract stats data
//     const statsData = [
//         { value: getFieldValue(data, 'stat_1_value') || '100+', label: getFieldValue(data, 'stat_1_label') || 'Employees' },
//         { value: getFieldValue(data, 'stat_2_value') || '1600+', label: getFieldValue(data, 'stat_2_label') || 'Brokerage Firms' },
//         { value: getFieldValue(data, 'stat_3_value') || '12+', label: getFieldValue(data, 'stat_3_label') || 'Developers' },
//         { value: getFieldValue(data, 'stat_4_value') || '20+', label: getFieldValue(data, 'stat_4_label') || 'Years of Property Expertise' },
//         { value: getFieldValue(data, 'stat_5_value') || '15000+', label: getFieldValue(data, 'stat_5_label') || 'Real Estate Blocks' },
//         { value: getFieldValue(data, 'stat_6_value') || '2000+', label: getFieldValue(data, 'stat_6_label') || 'No. of Units Sold' },
//         { value: getFieldValue(data, 'stat_7_value') || '11+', label: getFieldValue(data, 'stat_7_label') || 'BN AED in Sales' },
//         { value: getFieldValue(data, 'stat_8_value') || '2200+', label: getFieldValue(data, 'stat_8_label') || 'Units in Pipeline' },
//         { value: getFieldValue(data, 'stat_9_value') || '20+', label: getFieldValue(data, 'stat_9_label') || 'Brands' },
//     ];

//     // Filter out stats that don't have values
//     const stats = statsData.filter(stat => stat.value && stat.value !== 'undefined' && stat.label && stat.label !== 'undefined');

//     return (
//         <section className="relative bg-white">
//             <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-16">
//                 {/* Left Image */}
//                 <div className="relative w-full lg:w-1/3 flex justify-center">
//                     <Image
//                         src={image}
//                         alt="Tower"
//                         width={400}
//                         height={500}
//                         className="rounded-2xl object-cover w-full max-w-sm lg:max-w-full"
//                     />
//                 </div>

//                 {/* Right Content */}
//                 <div className="w-full lg:w-2/3 lg:pr-20 text-center lg:text-left">
//                     <p className="text-lg md:text-xl font-semibold text-[#26326A] uppercase tracking-widest">
//                         {sectionSubtitle}
//                     </p>
//                     <h2 className="mt-2 text-2xl md:text-5xl font-semibold text-gray-900">
//                         {sectionTitle}
//                     </h2>

//                     {/* Stats Grid */}
//                     <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-16 pt-10">
//                         {stats.map((item, idx) => (
//                             <div
//                                 key={idx}
//                                 className={`flex flex-col justify-center items-center text-center ${
//                                     (idx + 1) % 3 === 2 ? "sm:border-x border-gray-300" : ""
//                                 }`}
//                             >
//                                 <span className="text-2xl md:text-3xl font-bold text-gray-900">{item.value}</span>
//                                 <span className="mt-1 text-base md:text-xl text-gray-600">{item.label}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

import Image from "next/image";
import {
  getValueByFieldNameAndPosition,
  COMMON_FIELD_NAMES,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function StatsSection({ data }) {
  // Extract dynamic values for section header
  const sectionSubtitle =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) ||
    "A Network You Can Count On";
  const sectionTitle =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) ||
    "Trusted by Leading Agency";
  const image =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
    "/statssectionimg.png";

  // Extract stats data using position-based approach
  const statsData = [
    {
      value:
        getValueByFieldNameAndPosition(
          data,
          COMMON_FIELD_NAMES.STAT_VALUE,
          0
        ) || "100+",
      label:
        getValueByFieldNameAndPosition(
          data,
          COMMON_FIELD_NAMES.STAT_LABEL,
          0
        ) || "Employees",
    },
    {
      value:
        getValueByFieldNameAndPosition(
          data,
          COMMON_FIELD_NAMES.STAT_VALUE,
          1
        ) || "1600+",
      label:
        getValueByFieldNameAndPosition(
          data,
          COMMON_FIELD_NAMES.STAT_LABEL,
          1
        ) || "Brokerage Firms",
    },
    {
      value: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_VALUE, 2) || "12+",
      label:
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_LABEL, 2) || "Developers",
    },
    {
      value: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_VALUE, 3) || "20+",
      label:
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_LABEL, 3) ||
        "Years of Property Expertise",
    },
    {
      value:
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_VALUE, 4) || "15000+",
      label:
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_LABEL, 4) ||
        "Real Estate Blocks",
    },
    {
      value: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_VALUE, 5) || "2000+",
      label:
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_LABEL, 5) ||
        "No. of Units Sold",
    },
    {
      value: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_VALUE, 6) || "11+",
      label:
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_LABEL, 6) ||
        "BN AED in Sales",
    },
    {
      value: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_VALUE, 7) || "2200+",
      label:
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_LABEL, 7) ||
        "Units in Pipeline",
    },
    {
      value: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_VALUE, 8) || "20+",
      label:
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.STAT_LABEL, 8) || "Brands",
    },
  ];

  // console.log('data', data);

  // Filter out stats that don't have values
  const stats = statsData.filter(
    (stat) =>
      stat.value &&
      stat.value !== "undefined" &&
      stat.label &&
      stat.label !== "undefined"
  );

//   console.log("data", data);
  return (
    <section className="relative bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-16">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/3 flex justify-center">
      <img
  src={`${Image_URL}/${image}`}
  alt="Tower"
  width={400}
  height={500}
  className="rounded-2xl object-cover w-full max-w-sm lg:max-w-full"
/>

        </div>

        {/* Right Content */}
        <div className="w-full lg:w-2/3 lg:pr-20 text-center lg:text-left">
          <p className="text-base sm:text-lg md:text-xl font-semibold text-[#26326A] uppercase tracking-wide">
            {sectionSubtitle}
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900">
            {sectionTitle}
          </h2>

          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-center items-center text-center ${
                  (idx + 1) % 3 === 2 ? "sm:border-x border-gray-300" : ""
                }`}
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                  {item.value}
                </span>
                <span className="mt-1 text-sm sm:text-base md:text-lg text-gray-600">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

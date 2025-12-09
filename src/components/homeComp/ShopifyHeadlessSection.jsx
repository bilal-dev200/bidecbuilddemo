// import React from "react";
// import { Image_URL } from "@/config/constants";
// import {
//   COMMON_FIELD_NAMES,
//   getFieldValue,
//   getRobustFieldValuesByName,
// } from "@/lib/utils/sectionDataHelpers";

// const ShopifyHeadlessSection = ({data,color}) => {
//       const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "";
//       const mainimage = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE) || "";

//       const featureTitles = getRobustFieldValuesByName(
//         data,
//         COMMON_FIELD_NAMES.FEATURE_TITLE
//       );
//       const featureImages = getRobustFieldValuesByName(
//         data,
//         COMMON_FIELD_NAMES.FEATURE_ICON_WHITE
//       );
//       const featureDescs = getRobustFieldValuesByName(
//         data,
//         COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
//       );

//   return (
//     <section className="py-16 max-w-[1200px] mx-auto bg-white">
//       {/* Heading */}
//       <div className="text-center mb-14 px-4">
//         <h2 className="text-3xl md:text-5xl font-semibold text-gray-900"
//                     dangerouslySetInnerHTML={{ __html: heading }}
// >
//           {/* Our Shopify Headless Commerce */}
//         </h2>
//       </div>

//       {/* Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 items-left mx-auto gap-10 px-4">
//         {/* Left Column */}
//         <div className="flex flex-col gap-8">
//           {[
//             {
//               icon: "fas fa-code",
//               title: "Headless Storefront Development",
//               desc: "Custom frontends built with React, Vue, or Next.js for fast, tailored experiences.",
//             },
//             {
//               icon: "fas fa-network-wired",
//               title: "API-Driven Architecture",
//               desc: "Leverage Shopify APIs for smooth integrations with CRMs, ERPs, and third-party tools.",
//             },
//             {
//               icon: "fas fa-tachometer-alt",
//               title: "Performance Optimization",
//               desc: "Enhance speed, SEO rankings, and conversions with decoupled architecture.",
//             },
//           ].map((card, i) => (
//             <div
//               key={i}
//               className="border border-gray-200 rounded-2xl p-6 h-[200px] flex flex-col items-start text-left justify-center "
//             >
//               <span className="text-[#65B32E] text-4xl mb-3">
//                 <i className={card.icon}></i>
//               </span>
//               <h4 className="text-lg font-semibold text-gray-900 mb-2">
//                 {card.title}
//               </h4>
//               <p className="text-gray-600 text-sm">{card.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Center Image */}
//         <div className="flex justify-center items-center">
//           <img
//             src="/head.png"
//             alt="Shopify Headless Mockup"
//             className="rounded-xl w-full max-w-sm md:max-w-md"
//           />
//         </div>

//         {/* Right Column */}
//         <div className="flex flex-col gap-8">
//           {[
//             {
//               icon: "fas fa-cogs",
//               title: "Headless CMS Integration",
//               desc: "Seamlessly connect Shopify with content platforms like Contentful or Sanity for dynamic publishing.",
//             },
//             {
//               icon: "fas fa-project-diagram",
//               title: "Omnichannel Experience Delivery",
//               desc: "Extend Shopify across mobile apps, kiosks, IoT, and in-store digital screens.",
//             },
//             {
//               icon: "fas fa-chart-line",
//               title: "Enterprise-Grade Headless with Shopify Plus",
//               desc: "Unlock scalability and automation for high-growth brands using Shopify Plus headless commerce.",
//             },
//           ].map((card, i) => (
//             <div
//               key={i}
//               className="border border-gray-200 rounded-2xl p-6 h-[200px] flex flex-col items-start text-left justify-center"
//             >
//               <span className="text-[#65B32E] text-4xl mb-3">
//                 <i className={card.icon}></i>
//               </span>
//               <h4 className="text-lg font-semibold text-gray-900 mb-2">
//                 {card.title}
//               </h4>
//               <p className="text-gray-600 text-sm">{card.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Button */}
//       <div className="text-center mt-16">
//         <button className="bg-[#65B32E] hover:bg-[#529b24] text-white px-8 py-3 rounded-full font-semibold shadow-md transition">
//           Hire Shopify Headless Experts Now
//         </button>
//       </div>
//     </section>
//   );
// };

// export default ShopifyHeadlessSection;
import React from "react";
import { Image_URL } from "@/config/constants";
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  getRobustFieldValuesByName,
} from "@/lib/utils/sectionDataHelpers";

const ShopifyHeadlessSection = ({ data, color }) => {
  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "";
  const mainimage = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE) || "";

  // ✅ Get all feature fields dynamically
  const featureTitles = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_TITLE
  );
  const featureImages = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_ICON_WHITE
  );
  const featureDescs = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
  );

  // ✅ Combine all into a single array for rendering
  const services = featureTitles.map((title, index) => ({
    title: title?.value || "",
    desc: featureDescs[index]?.value || "",
    icon: featureImages[index]?.value
      ? `${Image_URL}${featureImages[index]?.value}`
      : "/default-icon.png", // fallback icon
  }));

  return (
    <section className="py16 max-w-[1200px] mx-auto bg-white">
      {/* Heading */}
      <div className="text-center mb-14 px-4">
        <h2
          className="text-3xl md:text-5xl font-semibold text-gray-900"
          dangerouslySetInnerHTML={{ __html: heading }}
        />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 items-left mx-auto gap-10 px-4">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          {services.slice(0, 3).map((service, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-6 h-[200px] flex flex-col items-start text-left justify-center"
            >
              {service.icon && (
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-14 h-14 mb-3 object-contain"
                />
              )}
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center items-center">
          <img
            src={mainimage ? `${Image_URL}${mainimage}` : "/head.png"}
            alt="Shopify Headless Mockup"
            className="rounded-xl w-full max-w-sm md:max-w-md"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8">
          {services.slice(3, 6).map((service, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-6 h-[200px] flex flex-col items-start text-left justify-center"
            >
              {service.icon && (
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-14 h-14 mb-3 object-contain"
                />
              )}
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16">
        <button className="bg-[#1A7D85] hover:bg-[#1A7D85] text-white px-8 py-3 rounded-full font-semibold shadow-md transition">
          Hire Shopify Headless Experts Now
        </button>
      </div>
    </section>
  );
};

export default ShopifyHeadlessSection;

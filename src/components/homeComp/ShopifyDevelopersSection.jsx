
// import React from "react";
// import {
//   FaCogs,
//   FaHeadSideVirus,
//   FaRocket,
//   FaExchangeAlt,
// } from "react-icons/fa";
// import {
//   MdSpeed,
//   MdSupportAgent,
//   MdOutlineIntegrationInstructions,
// } from "react-icons/md";
// import { RiFlowChart } from "react-icons/ri";
// import { Image_URL } from "@/config/constants";
// import {
//   COMMON_FIELD_NAMES,
//   getFieldValue,
//   getRobustFieldValuesByName,
// } from "@/lib/utils/sectionDataHelpers";

// const ShopifyDevelopersSection = ({ data, color }) => {
//   // ✅ Fallback static data
//   const fallbackServices = [
//     {
//       icon: <FaCogs className="text-green-700 text-3xl" />,
//       title: "Theme Development & Customization",
//       desc: "Build stunning, conversion-focused Shopify themes tailored to your brand identity.",
//     },
//     {
//       icon: <MdOutlineIntegrationInstructions className="text-green-700 text-3xl" />,
//       title: "App Development & Integrations",
//       desc: "Design and integrate custom apps to extend your store’s functionality.",
//     },
//     {
//       icon: <FaRocket className="text-green-700 text-3xl" />,
//       title: "Shopify Plus Development",
//       desc: "Enterprise-grade Shopify Plus development for fast-growing businesses.",
//     },
//     {
//       icon: <FaExchangeAlt className="text-green-700 text-3xl" />,
//       title: "Migration Experts",
//       desc: "Secure migrations from platforms like Magento, WooCommerce, and BigCommerce.",
//     },
//     {
//       icon: <FaHeadSideVirus className="text-green-700 text-3xl" />,
//       title: "Headless Commerce Developers",
//       desc: "API-driven headless Shopify solutions for modern businesses.",
//     },
//     {
//       icon: <MdSupportAgent className="text-green-700 text-3xl" />,
//       title: "Ongoing Maintenance & Support",
//       desc: "Dedicated support to keep your Shopify store running smoothly.",
//     },
//     {
//       icon: <MdSpeed className="text-green-700 text-3xl" />,
//       title: "Performance Optimization",
//       desc: "Enhance speed, SEO, and performance for better conversions.",
//     },
//     {
//       icon: <RiFlowChart className="text-green-700 text-3xl" />,
//       title: "Custom Workflow Automation",
//       desc: "Automate business workflows and reduce manual operations.",
//     },
//   ];

//   // ✅ Get CMS data
//   const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "";
//   const featureTitles = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.FEATURE_TITLE
//   );
//   const featureImages = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.FEATURE_ICON_BLACK
//   );
//   const featureDescs = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
//   );

//   // ✅ Build service data — even if no images exist
//   const services =
//     featureTitles.length > 0
//       ? featureTitles.map((title, i) => ({
//           img:
//             featureImages[i]?.value && featureImages[i]?.value !== ""
//               ? `${Image_URL}${featureImages[i]?.value}`
//               : null, // no image
//           title: title?.value || "",
//           desc: featureDescs[i]?.value || "",
//         }))
//       : [];

//   return (
//     <section className="w-full bg-white py-12 px-6 md:px-12 text-center">
//       {/* Section Heading */}
//       <h2 className="text-2xl md:text-5xl font-semibold text-gray-900"
//                     dangerouslySetInnerHTML={{ __html: heading }}
// >
//       </h2>

//       {/* Grid Section */}
//       <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
//         {(services.length > 0 ? services : fallbackServices).map(
//           (service, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-start text-left p-6 hover:shadow-xl rounded-xl transition duration-300"
//             >
//               {(service.img || service.icon) && (
//                 <div
//                   className="p-4 rounded-full mb-4 flex items-center justify-center"
//                   style={{
//                     background: "linear-gradient(to top, #95BF47, #F8F8F8)",
//                   }}
//                 >
//                   {service.img ? (
//                     <img
//                       src={service.img}
//                       alt={service.title}
//                       className="w-10 h-10 object-contain"
//                     />
//                   ) : (
//                     service.icon
//                   )}
//                 </div>
//               )}

//               {/* Title */}
//               <h3 className="font-semibold h-14 text-lg mb-2">
//                 {service.title}
//               </h3>

//               {/* Description */}
//               <p className="text-sm text-[13px] leading-relaxed">
//                 {service.desc}
//               </p>
//             </div>
//           )
//         )}
//       </div>
//     </section>
//   );
// };

// export default ShopifyDevelopersSection;
import React from "react";
import {
  FaCogs,
  FaHeadSideVirus,
  FaRocket,
  FaExchangeAlt,
} from "react-icons/fa";
import {
  MdSpeed,
  MdSupportAgent,
  MdOutlineIntegrationInstructions,
} from "react-icons/md";
import { RiFlowChart } from "react-icons/ri";
import { Image_URL } from "@/config/constants";
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  getRobustFieldValuesByName,
} from "@/lib/utils/sectionDataHelpers";

const ShopifyDevelopersSection = ({ data, color }) => {
  // ✅ Fallback static data
  const fallbackServices = [
    {
      icon: <FaCogs className="text-green-700 text-3xl" />,
      title: "Theme Development & Customization",
      desc: "Build stunning, conversion-focused Shopify themes tailored to your brand identity.",
    },
    {
      icon: (
        <MdOutlineIntegrationInstructions className="text-green-700 text-3xl" />
      ),
      title: "App Development & Integrations",
      desc: "Design and integrate custom apps to extend your store’s functionality.",
    },
    {
      icon: <FaRocket className="text-green-700 text-3xl" />,
      title: "Shopify Plus Development",
      desc: "Enterprise-grade Shopify Plus development for fast-growing businesses.",
    },
    {
      icon: <FaExchangeAlt className="text-green-700 text-3xl" />,
      title: "Migration Experts",
      desc: "Secure migrations from platforms like Magento, WooCommerce, and BigCommerce.",
    },
    {
      icon: <FaHeadSideVirus className="text-green-700 text-3xl" />,
      title: "Headless Commerce Developers",
      desc: "API-driven headless Shopify solutions for modern businesses.",
    },
    {
      icon: <MdSupportAgent className="text-green-700 text-3xl" />,
      title: "Ongoing Maintenance & Support",
      desc: "Dedicated support to keep your Shopify store running smoothly.",
    },
    {
      icon: <MdSpeed className="text-green-700 text-3xl" />,
      title: "Performance Optimization",
      desc: "Enhance speed, SEO, and performance for better conversions.",
    },
    {
      icon: <RiFlowChart className="text-green-700 text-3xl" />,
      title: "Custom Workflow Automation",
      desc: "Automate business workflows and reduce manual operations.",
    },
  ];

  // ✅ Get CMS data
  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "";
  const featureTitles = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_TITLE
  );
  const featureImages = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_ICON_BLACK
  );
  const featureDescs = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
  );

  // ✅ Combine CMS + fallback
  const services =
    featureTitles.length > 0
      ? featureTitles.map((title, i) => ({
          img:
            featureImages[i]?.value && featureImages[i]?.value !== ""
              ? `${Image_URL}${featureImages[i]?.value}`
              : null,
          title: title?.value || "",
          desc: featureDescs[i]?.value || "",
        }))
      : [];

  return (
    <section className="w-full bg-gradient-to-b from-[#F8FFF0] to-white py16 px-6 md:px12 text-center">
      {/* Heading */}
      <h2
        className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
        dangerouslySetInnerHTML={{ __html: heading }}
      ></h2>

      <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
        We specialize in building, scaling, and optimizing high-performance
        Shopify stores that convert.
      </p>

      {/* Services Grid */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {(services.length > 0 ? services : fallbackServices).map(
          (service, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-100 rounded-2xl p-6 text-left shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#95BF47]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon / Image */}
              <div
                className="p-4 rounded-full mb-5 flex items-center justify-center transition-transform duration-500 group-hover:rotate-6"
                style={{
                  background: "linear-gradient(135deg, #95BF47, #1A7D85)",
                }}
              >
                {service.img ? (
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <div className="text-white text-3xl">{service.icon}</div>
                )}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-800 mb-3 group-hover:text-[#1A7D85] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.desc}
              </p>

              {/* Hover line */}
              <span className="block h-[2px] w-0 bg-gradient-to-r from-[#1A7D85] to-[#95BF47] mt-4 transition-all duration-500 group-hover:w-16"></span>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ShopifyDevelopersSection;

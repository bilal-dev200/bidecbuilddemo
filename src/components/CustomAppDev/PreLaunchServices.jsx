// // // "use client";
// // // import Image from "next/image";
// // // import {
// // //   FaChartLine,
// // //   FaMobileAlt,
// // //   FaVials,
// // //   FaRocket,
// // //   FaBolt,
// // //   FaShieldAlt,
// // // } from "react-icons/fa";

// // // // 🔹 Dynamic content
// // // const sectionData = {
// // //   heading: "Pre-Launch Services We Offer",
// // //   description:
// // //     "Launching a mobile app requires more than just development. At Bidea, a trusted mobile app development company in Dubai, we prepare your app for success with a complete pre-launch strategy. Our custom app development services focus on performance, security, and market readiness to give your business a strong entry point.",
// // //   midTitle: "Pre-Launch Services & Use Cases",
// // //   image: "/prelaunch.png",
// // //   services: [
// // //     {
// // //       title: "Market & Competitor Research",
// // //       useCase:
// // //         "Benchmarking mobile apps in Dubai’s fintech, healthcare, and retail industries.",
// // //       solution:
// // //         "We identify gaps and leverage big data insights to ensure your app launches with a competitive edge.",
// // //       icon: <FaChartLine size={22} />,
// // //       position: "left",
// // //     },
// // //     {
// // //       title: "App Store Optimization (ASO) Strategy",
// // //       useCase: "Maximizing visibility on Apple App Store and Google Play.",
// // //       solution:
// // //         "We create optimized metadata, keywords, and visuals that help your app stand out in the UAE digital market.",
// // //       icon: <FaMobileAlt size={22} />,
// // //       position: "left",
// // //     },
// // //     {
// // //       title: "Beta Testing & User Feedback",
// // //       useCase: "Collecting real-world feedback on app usability and performance.",
// // //       solution:
// // //         "Controlled beta releases and AI-driven analytics to refine app design before launch.",
// // //       icon: <FaVials size={22} />,
// // //       position: "left",
// // //     },
// // //     {
// // //       title: "Go-to-Market Strategy",
// // //       useCase:
// // //         "Travel or retail apps entering Dubai’s mobile-first market environment.",
// // //       solution:
// // //         "Marketing strategies and launch campaigns that ensure fast adoption across the UAE.",
// // //       icon: <FaRocket size={22} />,
// // //       position: "right",
// // //     },
// // //     {
// // //       title: "Performance & Load Testing",
// // //       useCase:
// // //         "Ensuring apps perform under heavy usage, such as e-commerce and fintech apps.",
// // //       solution:
// // //         "Stress testing servers and load-systems to guarantee stability at scale.",
// // //       icon: <FaBolt size={22} />,
// // //       position: "right",
// // //     },
// // //     {
// // //       title: "Security & Compliance Checks",
// // //       useCase: "Fintech or healthcare apps requiring regulatory compliance.",
// // //       solution:
// // //         "Pre-launch audits aligned with UAE data regulations to ensure your custom app is secure.",
// // //       icon: <FaShieldAlt size={22} />,
// // //       position: "right",
// // //     },
// // //   ],
// // // };

// // // export default function PreLaunchServices({ data }) {
// // //   console.log("postlaunchservices", data);

// // //   const leftServices = sectionData.services.filter((s) => s.position === "left");
// // //   const rightServices = sectionData.services.filter(
// // //     (s) => s.position === "right"
// // //   );

// // //   // 🔹 Make last two words teal
// // //   const words = sectionData.heading.split(" ");
// // //   const lastTwo = words.slice(-2).join(" ");
// // //   const rest = words.slice(0, -2).join(" ");

// // //   return (
// // //     <section
// // //       className="w-full flex justify-center px-4 py-12 relative"
// // //     >
// // //       {/* Mobile Background Image */}
// // //       <div
// // //         className="absolute inset-0 block md:hidden"
// // //         style={{
// // //           backgroundImage: "url('/prelaunch.png')",
// // //           backgroundSize: "cover",
// // //           backgroundPosition: "center",
// // //         }}
// // //       >
// // //         <div className="absolute inset-0 bg-white/80"></div>
// // //       </div>

// // //       <div className="w-full max-w-[1400px] relative z-10">
// // //         {/* Top Heading */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 text-center md:text-left">
// // //           <h2 className="text-4xl md:text-6xl font-bold">
// // //             {rest}{" "}
// // //             <span className="text-teal-700">{lastTwo}</span>
// // //           </h2>
// // //           <p className="text-gray-600 text-sm leading-relaxed">
// // //             {sectionData.description}
// // //           </p>
// // //         </div>

// // //         {/* Middle Title */}
// // //         <h3 className="text-center font-semibold text-2xl md:text-4xl mb-10">
// // //           {sectionData.midTitle}
// // //         </h3>

// // //         {/* Desktop Grid */}
// // //         <div className="hidden md:grid grid-cols-3 gap-8 items-center">
// // //           {/* Left Features */}
// // //           <div className="flex flex-col space-y-12">
// // //             {leftServices.map((service, index) => (
// // //               <div key={index} className="text-center">
// // //                 <div className="flex flex-col items-center space-y-3">
// // //                   <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1ba7a5] text-white">
// // //                     {service.icon}
// // //                   </div>
// // //                   <h4 className="font-extrabold text-2xl">{service.title}</h4>
// // //                   <p className="text-sm text-gray-600">
// // //                     <span className="font-semibold text-black">Use Case:</span>{" "}
// // //                     {service.useCase}
// // //                   </p>
// // //                   <p className="text-sm text-gray-600">
// // //                     <span className="font-semibold text-black">
// // //                       Our Solution:
// // //                     </span>{" "}
// // //                     {service.solution}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* Center Image (only desktop) */}
// // //           <div className="flex justify-center items-baseline">
// // //             <Image
// // //               src={sectionData.image}
// // //               alt="Prelaunch Rocket"
// // //               width={300}
// // //               height={300}
// // //               className="object-contain hidden md:block"
// // //             />
// // //           </div>

// // //           {/* Right Features */}
// // //           <div className="flex flex-col space-y-12">
// // //             {rightServices.map((service, index) => (
// // //               <div key={index} className="text-center">
// // //                 <div className="flex flex-col items-center space-y-3">
// // //                   <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1ba7a5] text-white">
// // //                     {service.icon}
// // //                   </div>
// // //                   <h4 className="font-extrabold text-2xl">{service.title}</h4>
// // //                   <p className="text-sm text-gray-600">
// // //                     <span className="font-semibold text-black">Use Case:</span>{" "}
// // //                     {service.useCase}
// // //                   </p>
// // //                   <p className="text-sm text-gray-600">
// // //                     <span className="font-semibold text-black">
// // //                       Our Solution:
// // //                     </span>{" "}
// // //                     {service.solution}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Mobile Cards */}
// // //         <div className="grid grid-cols-1 gap-6 md:hidden">
// // //           {sectionData.services.map((service, index) => (
// // //             <div
// // //               key={index}
// // //               className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-6 text-center"
// // //             >
// // //               <div className="flex flex-col items-center space-y-3">
// // //                 <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1ba7a5] text-white">
// // //                   {service.icon}
// // //                 </div>
// // //                 <h4 className="font-extrabold text-xl">{service.title}</h4>
// // //                 <p className="text-sm text-gray-600">
// // //                   <span className="font-semibold text-black">Use Case:</span>{" "}
// // //                   {service.useCase}
// // //                 </p>
// // //                 <p className="text-sm text-gray-600">
// // //                   <span className="font-semibold text-black">Our Solution:</span>{" "}
// // //                   {service.solution}
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }
// // "use client";
// // import Image from "next/image";
// // import { Image_URL } from "@/config/constants";
// // import { COMMON_FIELD_NAMES, getFieldValue, getRobustFieldValuesByName } from "@/lib/utils/sectionDataHelpers";
// // // import {
// // //   COMMON_FIELD_NAMES,
// // //   getFieldValue,
// // //   getRobustFieldValuesByName,
// // // } from "@/lib/utils/sectionDataHelpers";

// // export default function PostLaunchServices({ data }) {
// //   if (!data) return null;

// //   // ✅ Extract dynamic heading fields
// //   const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
// //   const subHeading = getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING);
// //   const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION);
// //   const mainImage = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE);

// //   // ✅ Get all feature-related dynamic fields
// //   const featureIcons = getRobustFieldValuesByName(data, "feature_icon_white");
// //   const featureTitles = getRobustFieldValuesByName(data, "feature_title");
// //   const featureDes1 = getRobustFieldValuesByName(data, "feature_description1");
// //   const featureDes2 = getRobustFieldValuesByName(data, "feature_description2");
// //   const featureNames = getRobustFieldValuesByName(data, "feature_name");

// //   // ✅ Merge services dynamically
// //   const services = featureTitles.map((title, index) => ({
// //     icon: featureIcons[index]?.value || null,
// //     title: title?.value || "",
// //     useCase: featureDes1[index]?.value || "",
// //     solution: featureDes2[index]?.value || "",
// //     name: featureNames[index]?.value || "",
// //   }));

// //   // ✅ Split heading for teal last two words
// //   const words = heading?.split(" ") || [];
// //   const lastTwo = words.slice(-2).join(" ");
// //   const rest = words.slice(0, -2).join(" ");

// //   return (
// //     <section className="w-full flex justify-center px-4 py-12 relative">
// //       {/* ✅ Mobile Background Image */}
// //       <div
// //         className="absolute inset-0 block md:hidden"
// //         style={{
// //           backgroundImage: `url(${mainImage ? Image_URL + mainImage : "/prelaunch.png"})`,
// //           backgroundSize: "cover",
// //           backgroundPosition: "center",
// //         }}
// //       >
// //         <div className="absolute inset-0 bg-white/80"></div>
// //       </div>

// //       <div className="w-full max-w-[1400px] relative z-10">
// //         {/* ✅ Top Heading */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 text-center md:text-left">
// //           <h2 className="text-4xl md:text-6xl font-bold">
// //             {rest} <span className="text-teal-700">{lastTwo}</span>
// //           </h2>
// //           <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
// //         </div>

// //         {/* ✅ Middle Title */}
// //         <h3 className="text-center font-semibold text-2xl md:text-4xl mb-10">
// //           {subHeading}
// //         </h3>

// //         {/* ✅ Desktop Layout */}
// //         <div className="hidden md:grid grid-cols-3 gap-8 items-center">
// //           {/* Left Column */}
// //           <div className="flex flex-col space-y-12">
// //             {services.slice(0, Math.ceil(services.length / 2)).map((service, index) => (
// //               <ServiceCard key={index} service={service} />
// //             ))}
// //           </div>

// //           {/* Center Image */}
// //           <div className="flex justify-center items-baseline">
// //             <Image
// //               src={mainImage ? `${Image_URL}${mainImage}` : "/prelaunch.png"}
// //               alt="Post Launch Image"
// //               width={320}
// //               height={320}
// //               className="object-contain rounded-3xl"
// //             />
// //           </div>

// //           {/* Right Column */}
// //           <div className="flex flex-col space-y-12">
// //             {services.slice(Math.ceil(services.length / 2)).map((service, index) => (
// //               <ServiceCard key={index} service={service} />
// //             ))}
// //           </div>
// //         </div>

// //         {/* ✅ Mobile Layout */}
// //         <div className="grid grid-cols-1 gap-6 md:hidden">
// //           {services.map((service, index) => (
// //             <ServiceCard key={index} service={service} mobile />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // // ✅ Reusable Card Component
// // function ServiceCard({ service }) {
// //   return (
// //     <div className="text-center bg-white/90 md:bg-transparent backdrop-blur-md shadow-lg md:shadow-none rounded-2xl md:rounded-none p-6 md:p-0">
// //       <div className="flex flex-col items-center space-y-3">
// //         {/* ✅ Dynamic Icon */}
// //         {service.icon && (
// //           <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1ba7a5] p-2">
// //             <Image
// //               src={`${Image_URL}${service.icon}`}
// //               alt={service.title}
// //               width={40}
// //               height={40}
// //               className="object-contain"
// //             />
// //           </div>
// //         )}

// //         {/* ✅ Feature Title */}
// //         <h4 className="font-extrabold text-2xl">{service.title}</h4>

// //         {/* ✅ Use Case */}
// //         {service.useCase && (
// //           <p className="text-sm text-gray-600">
// //             <span className="font-semibold text-black">Use Case:</span> {service.useCase}
// //           </p>
// //         )}

// //         {/* ✅ Our Solution */}
// //         {service.solution && (
// //           <p className="text-sm text-gray-600">
// //             <span className="font-semibold text-black">Our Solution:</span> {service.solution}
// //           </p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import Image from "next/image";
// import { Image_URL } from "@/config/constants";
// import {
//   COMMON_FIELD_NAMES,
//   getFieldValue,
//   getRobustFieldValuesByName,
// } from "@/lib/utils/sectionDataHelpers";

// export default function PostLaunchServices({ data }) {
//   if (!data) return null;

//   const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
//   const subHeading = getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING);
//   const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION);
//   const mainImage = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE);

//   const featureIcons = getRobustFieldValuesByName(data, "feature_icon_white");
//   const featureTitles = getRobustFieldValuesByName(data, "feature_title");
//   const featureDes1 = getRobustFieldValuesByName(data, "feature_description1");
//   const featureDes2 = getRobustFieldValuesByName(data, "feature_description2");
//   const featureNames = getRobustFieldValuesByName(data, "feature_name");

//   const services = featureTitles.map((title, index) => ({
//     icon: featureIcons[index]?.value || null,
//     title: title?.value || "",
//     useCase: featureDes1[index]?.value || "",
//     solution: featureDes2[index]?.value || "",
//     name: featureNames[index]?.value || "",
//   }));

//   const words = heading?.split(" ") || [];
//   const lastTwo = words.slice(-2).join(" ");
//   const rest = words.slice(0, -2).join(" ");

//   return (
//     <section className="w-full flex justify-center px-4 bg-white relative">
//       {/* ✅ Mobile/Tablet Background Image */}
//       <div
//         className="absolute inset-0 block lg:hidden"
//         style={{
//           backgroundImage: `url(${mainImage ? Image_URL + mainImage : "/prelaunch.png"})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-white/85"></div>
//       </div>

//       <div className="w-full max-w-[1400px] p-6 sm:p-8 md:p-10 relative z-10 text-center md:text-left">
//         {/* ✅ Top Heading Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center mb-10 md:mb-12">
//           <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
//             {rest} <span className="text-[#1A7D85] ebrima-bold">{lastTwo}</span>
//           </h2>
//           <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
//             {description}
//           </p>
//         </div>

//         {/* ✅ Subheading */}
//         <h3 className="text-center text-xl sm:text-2xl font-bold mb-8 md:mb-10">
//           {subHeading}
//         </h3>

//         {/* ✅ Desktop Layout */}
//         <div className="hidden lg:flex flex-col items-center">
//           {/* Top Part */}
//           <div className="grid grid-cols-3 gap-8 items-center">
//             {/* Left Column */}
//             <div className="flex flex-col justify-between space-y-12 h-full py-10">
//               {services.slice(0, 2).map((service, index) => (
//                 <ServiceCard key={index} service={service} />
//               ))}
//             </div>

//             {/* Center Image */}
//             <div className="flex justify-center relative">
//               <Image
//                 src={mainImage ? `${Image_URL}${mainImage}` : "/prelaunch.png"}
//                 alt="Post Launch Image"
//                 width={350}
//                 height={350}
//                 className="object-contain rounded-[44px] relative z-10"
//               />
//             </div>

//             {/* Right Column */}
//             <div className="flex flex-col justify-between space-y-12 h-full py-10">
//               {services.slice(2, 4).map((service, index) => (
//                 <ServiceCard key={index} service={service} />
//               ))}
//             </div>
//           </div>

//           {/* Bottom Row */}
//           <div className="grid grid-cols-2 gap-8 mt-16">
//             {services.slice(4, 6).map((service, index) => (
//               <ServiceCard key={index} service={service} />
//             ))}
//           </div>
//         </div>

//         {/* ✅ Tablet Layout */}
//         <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
//           {services.map((service, index) => (
//             <ServiceCard key={index} service={service} />
//           ))}
//         </div>

//         {/* ✅ Mobile Layout */}
//         <div className="grid grid-cols-1 gap-6 md:hidden">
//           {services.map((service, index) => (
//             <ServiceCard key={index} service={service} mobile />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ✅ Reusable Card Component
// function ServiceCard({ service }) {
//   return (
//     <div className="text-center  md:bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[200px]">
//       <div className="flex flex-col items-center space-y-3">
//         {service.icon && (
//           <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[#1A7D85] p-2">
//             <Image
//               src={`${Image_URL}${service.icon}`}
//               alt={service.title}
//               width={40}
//               height={40}
//               className="object-contain"
//             />
//           </div>
//         )}
//         <h4 className="font-extrabold text-lg sm:text-xl md:text-2xl leading-snug text-center">
//           {service.title}
//         </h4>
//         {service.useCase && (
//           <p className="text-[12px] sm:text-[13px] w-[90%] sm:w-[350px]">
//             <span className="font-semibold text-black">Use Case:</span>{" "}
//             {service.useCase}
//           </p>
//         )}
//         {service.solution && (
//           <p className="text-[12px] sm:text-[13px] w-[90%] sm:w-[350px]">
//             <span className="font-semibold text-black">Our Solution:</span>{" "}
//             {service.solution}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { Image_URL } from "@/config/constants";
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  getRobustFieldValuesByName,
  getValueByFieldNameAndPosition,
  highlightText,
} from "@/lib/utils/sectionDataHelpers";
import AppButton from "../homeComp/AppButton";

export default function PostLaunchServices({ data }) {
  if (!data) return null;

  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
  const subHeading = getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING);
  const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION);
  const mainImage = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE);
   const btn =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
        "";
    const buttoncolor =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
        "";
    const btnlink =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
        "";
  const featureIcons = getRobustFieldValuesByName(data, "feature_icon_white");
  const featureTitles = getRobustFieldValuesByName(data, "feature_title");
  const featureDes1 = getRobustFieldValuesByName(data, "feature_description1");
  const featureDes2 = getRobustFieldValuesByName(data, "feature_description2");
  const featureNames = getRobustFieldValuesByName(data, "feature_name");

  const services = featureTitles.map((title, index) => ({
    icon: featureIcons[index]?.value || null,
    title: title?.value || "",
    useCase: featureDes1[index]?.value || "",
    solution: featureDes2[index]?.value || "",
    name: featureNames[index]?.value || "",
  }));

  // const words = heading?.split(" ") || [];
  // const lastTwo = words.slice(-2).join(" ");
  // const rest = words.slice(0, -2).join(" ");


  return (
    <>
    <section className="w-full flex justify-center px-4 bg-white relative">
      {/* ❌ Hide background image on mobile */}
      {/* <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: `url(${mainImage ? Image_URL + mainImage : "/prelaunch.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05,
        }}
      /> */}

      <div className="w-full max-w-[1400px] px6 sm:px-8 md:px-10 relative z-10 text-center md:text-left">
        {/* ✅ Heading Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 items-center mb-10 md:mb-12">
          <h2 className="text-2xl lg:w-[500px] sm:text-4xl md:text-6xl  leading-tight"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
            {/* {rest} <span className="text-[#1A7D85] ebrima-bold">{lastTwo}</span> */}
            {/* {highlightText(heading, 20, 30, "text-[#1A7D85]")}
          </h2> */}
          <h3 className="md:hidden text-center text-[14px] md:text-2xl font-bold">
            {subHeading}
          </h3>
          <p className=" text-[11px] md:text-base px-7 md:px-0 lg:w-[480px] md:text-[14px] leading-relaxed">
            {description}
          </p>
        </div>

        <h3   dangerouslySetInnerHTML={{ __html: subHeading }} className="hidden md:block text-center text-[14px] md:text-2xl font-bold mb-4"/>
          {/* {subHeading}
        </h3> */}

        {/* ✅ Desktop Layout */}
        <div className="hidden lg:flex flex-col items-center">
          {/* Top Row */}
          <div className="grid grid-cols-3 gap-8 items-center">
            {/* Left  */}
            <div className="flex flex-col justify-between space-y-6 h-full py-6">
              {services.slice(0, 2).map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>

            <div className="flex justify-start items-start relative h-[550px] w-[390px] rounded-[100px] overflow-hidden">
              <Image
                src={mainImage ? `${Image_URL}${mainImage}` : "/rounded.png"}
                alt="Post Launch Image"
                fill
                className="object-cover"
              />
            </div>



            {/* Right Column */}
            <div className="flex flex-col justify-between space-y-10 h-full py-6">
              {services.slice(2, 4).map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-2 gap-8 -mt-8">
            {services.slice(4, 6).map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* ✅ Tablet Layout */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} mobile />
          ))}
        </div>

        {/* ✅ Mobile Layout */}
        <div className="grid grid-cols-2 gap-6 md:hidden">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} mobile />
          ))}
        </div>
      </div>
    </section>
      <AppButton
                    text={btn}
                    color={buttoncolor}
                    link={btnlink}
                // onClick={() => console.log("Button clicked")} 
                />
    </>
  );
}

// ✅ Reusable Card Component
function ServiceCard({ service }) {
  function splitTitle(title) {
    if (!title) return "";

    const words = title.split(" ");
    const half = Math.ceil(words.length / 2);
    const firstLine = words.slice(0, half).join(" ");
    const secondLine = words.slice(half).join(" ");

    return (
      <>
        {firstLine}
        <br />
        {secondLine}
      </>
    );
  }
  return (
    <div
      className="
      text-center 
      bg-white 
      rounded-2xl 
      md:p-6 pl-2
      flex flex-col items-left justify- 
      min-h-[180px] sm:min-h-[200px]
     lg:shadow-none
      "
    >
      <div className="flex flex-col items-start md:items-center space-y-3">
        {service.icon && (
          <div className="w-10 h-10 md:w-14 md:h-14 flex md:items-center md:justify-center rounded-full bg-[#1A7D85] p-2">
            <Image
              src={`${Image_URL}${service.icon}`}
              alt={service.title}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        )}
        <h4 className="font-extrabold md:h-auto h-[24px] text-[12px] sm:text-xl md:text-2xl leading-snug text-left md:text-center">
          {splitTitle(service.title)}
        </h4>
        {service.useCase && (
          <p className="text-[11px] mt-2 h-[60px]  md:mt-0 text-left md:text-center  sm:text-[13px]  sm:w-[350px]">
            <span className="font-semibold text-black">Use Case:</span>{" "}
            {service.useCase}
          </p>
        )}
        {service.solution && (
          <p className="text-[11px] text-left md:text-center sm:text-[13px] sm:w-[350px]">
            <span className="font-semibold text-black">Our Solution:</span>{" "}
            {service.solution}
          </p>
        )}
      </div>
    </div>
  );
}

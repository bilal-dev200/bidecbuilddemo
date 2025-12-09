// // "use client";

// // import React, { useEffect, useState } from "react";
// // import axiosClient from "@/lib/api/axiosClient";
// // import { SkeletonLoader } from "@/components/SkeletonLoader";
// // import Hero from "@/components/Hero";
// // import Testimonials from "@/components/homeComp/Testimonials";
// // import BlogsSection from "@/components/homeComp/BlogsSection";
// // import IndustriesSection from "@/components/homeComp/IndustriesSection";
// // import MobileAppServices from "@/components/homeComp/MobileAppServices";
// // import Appsec from "@/components/homeComp/Appsec";
// // import AppCostSection from "@/components/homeComp/AppCostSection";
// // import Process from "@/components/homeComp/Process";
// // import BannerSlider from "@/components/homeComp/BannerSlider";
// // import BrandsSection from "@/components/homeComp/BrandsSection";
// // import CaseStudiesSection from "@/components/homeComp/CaseStudiesSection";
// // import Achievements from "@/components/homeComp/Achievements";
// // import AiPoweredDevelopment from "@/components/CustomAppDev/AiPoweredDevelopment";
// // import WhatsNew from "@/components/CustomAppDev/WhatsNew";
// // import MobileAppInnovation from "@/components/CustomAppDev/MobileAppInnovation";
// // import PreLaunchServices from "@/components/CustomAppDev/PreLaunchServices";
// // import EmergingEcosystems from "@/components/CustomAppDev/EmergingEcosystems";
// // import TechnologiesWeMaster from "@/components/CustomAppDev/TechnologiesWeMaster";
// // import PostLaunchSupport from "@/components/CustomAppDev/PostLaunchSupport";

// // // 🧩 Import all possible service page components
// // // import Hero from "@/components/homeComp/Hero";
// // // import Testimonials from "@/components/homeComp/Testimonials";
// // // import BlogsSection from "@/components/homeComp/BlogsSection";
// // // import IndustriesSection from "@/components/homeComp/IndustriesSection";
// // // import MobileAppServices from "@/components/homeComp/MobileAppServices";
// // // import Appsec from "@/components/homeComp/Appsec";
// // // import AppCostSection from "@/components/homeComp/AppCostSection";
// // // import Process from "@/components/homeComp/Process";

// // export default function ServiceSections({ initialData, slug }) {
// //     const [pageData, setPageData] = useState(
// //         initialData || { sections: [], results: [] }
// //     );
// //     const [loading, setLoading] = useState(!initialData);
// //     console.log("initialData", initialData);

// //     // ✅ Fetch sections dynamically if no initialData is provided
// //     useEffect(() => {
// //         if (!initialData) {
// //             const fetchSections = async () => {
// //                 try {
// //                     const { data } = await axiosClient.get(`/website/services${slug}/detail`);
// //                     setPageData({
// //                         sections: data.sections || [],
// //                         results: data.results || [],
// //                     });
// //                 } catch (error) {
// //                     console.error("❌ Error fetching services sections:", error);
// //                 } finally {
// //                     setLoading(false);
// //                 }
// //             };
// //             fetchSections();
// //         }
// //     }, [initialData]);

// //     if (loading) {
// //         return <SkeletonLoader aligin="center" />;
// //     }
// //     console.log("pageDataasas", pageData);

// //     const getSectionData = (sectionId) =>
// //         pageData.results.filter((item) => item.section_id === sectionId);

// //     // ✅ Dynamic component selector
// //     const renderSection = (type = "", data) => {
// //         const normalizedType = type?.toLowerCase().replace(/[-_]/g, "");
// //                     console.log("section.type", normalizedType);

// //         switch (normalizedType) {
// //             case "singlebannerwithvideo":
// //                 return <BannerSlider data={data} />;

// //             case "textwithbrandslider":
// //                 return <BrandsSection data={data} />;

// //             case "testimonials":
// //                 return <Testimonials data={data} />;

// //             case "blogssection":
// //             case "latestblogs":
// //                 return <BlogsSection data={data} />;


// //             // case "textwithfourcards":
// //             case "topcontentwithfourcards":
// //                 // case "achievements":
// //                 return <Achievements data={data} />;

// //             case "lefttextrightslider":
// //                 // case "casestudiessection":
// //                 return <CaseStudiesSection data={data} />;

// //             // case "industriessection":
// //             //     return <IndustriesSection data={data} />;

// //             // case "mobileappservices":
// //             // case "bannerbgwithrightcontext":
// //             case "leftimagewithrightcontent":
// //                 return <AiPoweredDevelopment data={data} />;

// //             case "bannerbgwithleftcontext":
// //                 return <WhatsNew data={data} />;

// //             case "contentwitheightstatscard":
// //                 return <MobileAppInnovation data={data} />;

// //             case "contentwithninefeaturescard":
// //                 return <MobileAppServices data={data} />;

// //             case "costofmobileappdevelopment":
// //                 return <Appsec data={data} />;

// //             case "postlaunchservices":
// //                 return <PreLaunchServices data={data} />;

// //             case "developmentcosts":
// //                 return <AppCostSection data={data} />;

// //             case "horizontalcontent":
// //                 return <Process data={data} />;

// //             case "leftcontentwiththreecards":
// //                 return <EmergingEcosystems data={data} />;

// //             case "technologieswemaster":
// //                 return <TechnologiesWeMaster data={data} />;

// //             case "post_launch_services":
// //                 return <PostLaunchSupport data={data} />;

// //             default:
// //                 // ✅ Fallback detection
// //                 if (normalizedType.includes("hero")) return <Hero data={data} />;
// //                 if (normalizedType.includes("testimonial")) return <Testimonials data={data} />;
// //                 if (normalizedType.includes("blog")) return <BlogsSection data={data} />;
// //                 // if (normalizedType.includes("industr")) return <IndustriesSection data={data} />;
// //                 if (normalizedType.includes("mobile") || normalizedType.includes("service"))
// //                     return <MobileAppServices data={data} />;
// //                 // if (normalizedType.includes("appsec")) return <Appsec data={data} />;
// //                 if (normalizedType.includes("cost")) return <AppCostSection data={data} />;
// //                 if (normalizedType.includes("process")) return <Process data={data} />;
// //                 if (normalizedType.includes("post")) return <PostLaunchSupport data={data} />;

// //                 console.warn(`⚠️ No matching component for type: ${type}`);
// //                 return null;
// //         }
// //     };
// //     return (
// //         <div className="w-full flex flex-col gap-4">
// //             {[...pageData.sections]
// //                 .sort((a, b) => a.sort_order - b.sort_order)
// //                 .map((section) => {
// //                     const sectionResults = getSectionData(section.id);
// //                     const sectionData = { ...section, results: sectionResults };

// //                     return (
// //                         <div key={section.id}>
// //                             {renderSection(section.type, sectionData)}
// //                         </div>
// //                     );
// //                 })}
// //             {/* <PostLaunchSupport /> */}
// //         </div>
// //     );

// //     // return (
// //     //     <div className="w-full flex flex-col gap-4">
// //     //         {pageData.sections.map((section) => {
// //     //             const sectionResults = getSectionData(section.id);
// //     //             const sectionData = { ...section, results: sectionResults };

// //     //             return (
// //     //                 <div key={section.id}>
// //     //                     {renderSection(section.type, sectionData)}
// //     //                 </div>
// //     //             );
// //     //         })}
// //     //         {/* <AiPoweredDevelopment /> */}
// //     //         <Process />
// //     //         <AppCostSection />
// //     //         <Appsec />
// //     //         <MobileAppServices />
// //     //     </div>
// //     // );
// // }

// "use client";

// import React, { useEffect, useState } from "react";
// import axiosClient from "@/lib/api/axiosClient";
// import { SkeletonLoader } from "@/components/SkeletonLoader";

// // Components
// import Hero from "@/components/Hero";
// import Testimonials from "@/components/homeComp/Testimonials";
// import BlogsSection from "@/components/homeComp/BlogsSection";
// import IndustriesSection from "@/components/homeComp/IndustriesSection";
// import MobileAppServices from "@/components/homeComp/MobileAppServices";
// import Appsec from "@/components/homeComp/Appsec";
// import AppCostSection from "@/components/homeComp/AppCostSection";
// import Process from "@/components/homeComp/Process";
// import BannerSlider from "@/components/homeComp/BannerSlider";
// import BrandsSection from "@/components/homeComp/BrandsSection";
// import CaseStudiesSection from "@/components/homeComp/CaseStudiesSection";
// import Achievements from "@/components/homeComp/Achievements";
// import AiPoweredDevelopment from "@/components/CustomAppDev/AiPoweredDevelopment";
// import WhatsNew from "@/components/CustomAppDev/WhatsNew";
// import MobileAppInnovation from "@/components/CustomAppDev/MobileAppInnovation";
// import PreLaunchServices from "@/components/CustomAppDev/PreLaunchServices";
// import EmergingEcosystems from "@/components/CustomAppDev/EmergingEcosystems";
// import TechnologiesWeMaster from "@/components/CustomAppDev/TechnologiesWeMaster";
// import PostLaunchSupport from "@/components/CustomAppDev/PostLaunchSupport";
// import FaqSection from "@/components/homeComp/FAQSection";
// import ShopifyChallenges from "@/components/Shopify/ShopifyChallenges";
// import { WhyBusinesses } from "@/components/Services/WhyBusinesses";
// import AIEfficiencySection from "@/components/homeComp/AIEfficiencySection";
// import Sectors from "@/components/homeComp/Sectors";
// import ProductSolutions from "@/components/homeComp/ProductSolution";
// // import HiringModels from "@/components/homeComp/HiringModels";
// import ShopifyFourStepProcess from "@/components/ShopifyFourStep/ShopifyFourStepProcess";
// import ShopifyAppTypes from "@/components/AppTypesWeCover/ShopifyAppTypes";
// import ShopifySupportServices from "@/components/Shopify/ShopifySupportServices";
// import AIE from "@/components/CustomAppDev/AIE";
// // import HiringModels from "@/components/homeComp/HiringModels";
// // import HiringShopifyCompany from "@/components/homeComp/HiringShopifyCompany";
// import ServicesSection from "@/components/homeComp/ServicesSection";
// import HiringShopifyCompany from "@/components/homeComp/HiringShopifyCompany";
// import HiringModels from "@/components/homeComp/HiringModels";

// export default function ServiceSections({ initialData, slug, service }) {
//     const [pageData, setPageData] = useState(
//         initialData || { sections: [], results: [] }
//     );
//     const [loading, setLoading] = useState(!initialData);
//     console.log("initialData_page", initialData);

//     // Fetch sections dynamically if no initialData
//     useEffect(() => {
//         if (!initialData) {
//             const fetchSections = async () => {
//                 try {
//                     const { data } = await axiosClient.get(
//                         `/website/services${slug}/detail`
//                     );
//                     console.log("AdddPI response data:", data);

//                     setPageData({
//                         sections: data.sections || [],
//                         results: data.results || [],
//                     });
//                 } catch (error) {
//                     console.error("❌ Error fetching services sections:", error);
//                 } finally {
//                     setLoading(false);
//                 }
//             };
//             fetchSections();
//         }
//     }, [initialData, slug]);

//     if (loading) {
//         return <SkeletonLoader aligin="center" />;
//     }

//     useEffect(() => {
//         console.log("📌 pageData state updsddated:", pageData);
//     }, [pageData]);



//     const getSectionData = (sectionId) =>
//         pageData.results.filter((item) => item.section_id === sectionId);

//     // Map normalized type to component
//     const componentMap = {
//         singlebannerwithvideo: BannerSlider,
//         textwithbrandslider: BrandsSection,
//         testimonials: Testimonials,
//         blogssection: BlogsSection,
//         latestblogs: BlogsSection,
//         // topcontentwithfourcards: Achievements,
//         textwithfourcards: Achievements,
//         lefttextrightslider: CaseStudiesSection,
//         leftimagewithrightcontent: AiPoweredDevelopment,
//         bannerbgwithleftcontext: WhatsNew,
//         contentwitheightstatscard: MobileAppInnovation,
//         contentwithninefeaturescard: MobileAppServices,
//         costofmobileappdevelopment: Appsec,
//         prelaunchservices: PreLaunchServices,
//         postlaunchservices: PostLaunchSupport,
//         developmentcosts: AppCostSection,
//         horizontalcontent: Process,
//         leftcontentwiththreecards: EmergingEcosystems,
//         technologieswemaster: TechnologiesWeMaster,
//         // postlaunchsupport: PostLaunchSupport,
//         estimatedmobileappdevelopmentcost: AppCostSection,
//         faqsection: FaqSection,
//         // testimonialssection: Testimonials,
//         tabbedfeaturesection: ServicesSection,
//         whybuisinessindubai: WhyBusinesses,
//         twocolumnherosection: AIEfficiencySection,
//         contentwitheightgridslider: Sectors,
//         bannerwithlefttextlist: ProductSolutions,
//         industriesandusecases: IndustriesSection,
//         whyecommercestore: ShopifyChallenges,
//         contentwithjsonanimation: HiringModels,
//         fourstepsprocess: ShopifyFourStepProcess,
//         typeswecover: ShopifyAppTypes,
//         shopifyservices: ShopifySupportServices,
//         developmentcosts: AIE,


//     };
//     // contentwithninefeaturescard: Sectors,

//     // const renderSection = (type = "", data) => {
//     //     const normalizedType = type?.toLowerCase().replace(/[-_]/g, "");
//     //     const Component = componentMap[normalizedType];

//     //     if (Component) return <Component data={data} />;

//     //     // Optional fallback
//     //     console.warn(`⚠️ No matching component for type: ${type}`);
//     //     return null;
//     // };
//     const renderSection = (type = "", data) => {
//         if (!type) return null; // skip empty types

//         const normalizedType = type.toLowerCase().replace(/[-_]/g, "");
//         const Component = componentMap[normalizedType];
//         console.log("Section_type:", normalizedType);

//         if (!Component) {
//             console.warn(`⚠️ Skipping section. No matching component for type: "${type}"`);
//             return null; // skip non-matching sections
//         }

//         return <Component data={data} color={service?.color} />;
//     };

//     return (
//         <div className="w-full flex flex-col gap-32">
//             {/* // <div className="w-full flex flex-col gap-4"> */}
//             {/* {[...pageData.sections]
//                 .sort((a, b) => a.sort_order - b.sort_order)
//                 .map((section) => {
//                     const sectionResults = getSectionData(section.id);
//                     const sectionData = { ...section, results: sectionResults };

//                     return <div key={section.id}>{renderSection(section.type, sectionData)}</div>;
//                 })} */}
//             {pageData.sections.map((section, index) => {
//                 const sectionResults = getSectionData(section.id);
//                 const sectionData = { ...section, results: sectionResults };

//                 return (
//                     <div key={section.id || index}>
//                         {renderSection(section.type, sectionData)}
//                     </div>
//                 );
//             })}

//             {/* <WhyBusinesses /> */}
//             {/* <Testimonials /> */}
//         </div>
//     );
// }
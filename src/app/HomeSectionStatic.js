// "use client"; // mark this as client component

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// // Import all section components
// import NewsSection from "@/components/aboutcomp/NewsSection";
// import BannerSlider from "@/components/homeComp/BannerSlider";
// import BrokerForm from "@/components/homeComp/BrokerForm";
// import Brokers from "@/components/homeComp/Brokers";
// import HeroSlider from "@/components/homeComp/HeroSlider";
// import OurPartners from "@/components/homeComp/OurPartners";
// import ProjectsSection from "@/components/homeComp/ProjectsSection";
// import PromotionSection from "@/components/homeComp/PromotionSection";
// import StatsSection from "@/components/homeComp/StatsSection";
// import Testimonials from "@/components/homeComp/Testimonials";
// import VisionMeetsValue from "@/components/homeComp/VisionMeetsValue";
// import WhyParkGroup from "@/components/homeComp/WhyParkGroup";
// import axiosClient from "@/lib/api/axiosClient";

// // A constant map for better readability and a single source of truth
// const SECTION_COMPONENTS = {
//     section_one: BannerSlider,
//     section_two: VisionMeetsValue,
//     section_three: HeroSlider,
//     section_four: PromotionSection,
//     section_five: ProjectsSection,
//     section_six: WhyParkGroup,
//     section_seven: Brokers,
//     section_eight: StatsSection,
//     section_nine: BrokerForm,
//     section_ten: OurPartners,
//     section_eleven: NewsSection,
//     section_twelve: Testimonials,
// };

// const HomeSectionStatic = () => {
//     const [pageData, setPageData] = useState({ sections: [], results: [] });
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchSections = async () => {
//             try {
//                 const { data } = await axiosClient.get("/website/home/show");
//                 if (data) {
//                     setPageData({
//                         sections: data.sections || [],
//                         results: data.results || [],
//                     });
//                 }
//             } catch (error) {
//                 console.error("Error fetching homepage sections:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchSections();
//     }, []);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     // Filter and group results by section_id
//     const getSectionData = (sectionId) => {
//         return pageData.results.filter(
//             (item) => item.section_id === sectionId
//         );
//     };

//     return (
//         <div className="w-full flex flex-col gap-10">
//             {pageData.sections.map((section) => {
//                 const Component = SECTION_COMPONENTS[section.type];
//                 if (!Component) {
//                     console.warn(`No component found for type: ${section.type}`);
//                     return null;
//                 }

//                 // Get the filtered data for the current section
//                 const sectionResults = getSectionData(section.id);
//                 console.log('sectionResults', sectionResults);

//                 return (
//                     <Component
//                         key={section.id}
//                         data={{
//                             ...section,
//                             results: sectionResults,
//                         }}
//                     />
//                 );
//             })}
//         </div>
//     );
// };

// export default HomeSectionStatic;



"use client";

import React from "react";

// Import all section components
import NewsSection from "@/components/aboutcomp/NewsSection";
import BannerSlider from "@/components/homeComp/BannerSliderOld";
import BrokerForm from "@/components/homeComp/BrokerForm";
import Brokers from "@/components/homeComp/Brokers";
import HeroSlider from "@/components/homeComp/HeroSlider";
import OurPartners from "@/components/homeComp/OurPartners";
import ProjectsSection from "@/components/homeComp/ProjectsSection";
import PromotionSection from "@/components/homeComp/PromotionSection";
import StatsSection from "@/components/homeComp/StatsSection";
import Testimonials from "@/components/homeComp/Testimonials";
import VisionMeetsValue from "@/components/homeComp/VisionMeetsValue";
import WhyParkGroup from "@/components/homeComp/WhyParkGroup";

const HomeSectionStatic = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <BannerSlider />
      <VisionMeetsValue />
      <HeroSlider />
      <PromotionSection />
      <ProjectsSection />
      <WhyParkGroup />
      <Brokers />
      <StatsSection />
      <BrokerForm />
      <OurPartners />
      <NewsSection />
      <Testimonials />
    </div>
  );
};

export default HomeSectionStatic;

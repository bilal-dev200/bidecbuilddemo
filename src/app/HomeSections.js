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
// import { SkeletonLoader } from "@/components/SkeletonLoader";
// import AIEfficiencySection from "@/components/homeComp/AIEfficiencySection";
// import BrandsSection from "@/components/homeComp/BrandsSection";
// import Achievements from "@/components/homeComp/Achievements";
// import ProductSolutions from "@/components/homeComp/ProductSolution";
// import Sectors from "@/components/homeComp/Sectors";
// import LeadershipSection from "@/components/homeComp/LeadershipSection";
// import FAQSection from "@/components/homeComp/FAQSection";
// import CaseStudiesSection from "@/components/homeComp/CaseStudiesSection";
// import ServicesSection from "@/components/homeComp/ServicesSection";


// // A constant map for better readability and a single source of truth
// const SECTION_COMPONENTS = {
//   section_one: BannerSlider,
//   section_two: AIEfficiencySection,
//   section_three: CaseStudiesSection,
//   section_four: ServicesSection,
//   section_five: BrandsSection,
//   section_six: Achievements,
//   section_seven: ProductSolutions,
//   section_eight: Sectors,
//   section_nine: LeadershipSection,
//   section_ten: OurPartners,
//   section_eleven: FAQSection,
// };

// const HomeSections = () => {
//   const [pageData, setPageData] = useState({ sections: [], results: [] });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSections = async () => {
//       try {
//         const { data } = await axiosClient.get("/website/home/show");
//         if (data) {
//           setPageData({
//             sections: data.sections || [],
//             results: data.results || [],
//           });
//         }
//       } catch (error) {
//         console.error("Error fetching homepage sections:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSections();
//   }, []);


//   if (loading) {
//     return <SkeletonLoader aligin="center" />;
//   }

//   // console.log('sections', pageData.sections);

//   // Filter and group results by section_id
//   const getSectionData = (sectionId) => {
//     return pageData.results.filter((item) => item.section_id === sectionId);
//   };

//   return (
//     <div className="w-full flex flex-col gap-4">
//       {pageData.sections.map((section) => {
//         // console.log('section', section.type);
//         const Component = SECTION_COMPONENTS[section.type];
//         if (!Component) {
//           console.warn(`No component found for type: ${section.type}`);
//           return null;
//         }

//         // Get the filtered data for the current section
//         const sectionResults = getSectionData(section.id);
//         // console.log('sectionResults', sectionResults);

//         return (
//           <Component
//             key={section.id}
//             data={{
//               ...section,
//               results: sectionResults,
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default HomeSections;
// "use client";

// import React, { useEffect, useState } from "react";
// import axiosClient from "@/lib/api/axiosClient";
// import { SkeletonLoader } from "@/components/SkeletonLoader";

// // Import components
// import BannerSlider from "@/components/homeComp/BannerSlider";
// import AIEfficiencySection from "@/components/homeComp/AIEfficiencySection";
// import CaseStudiesSection from "@/components/homeComp/CaseStudiesSection";
// import ServicesSection from "@/components/homeComp/ServicesSection";
// import BrandsSection from "@/components/homeComp/BrandsSection";
// import Achievements from "@/components/homeComp/Achievements";
// import ProductSolutions from "@/components/homeComp/ProductSolution";
// import Sectors from "@/components/homeComp/Sectors";
// import LeadershipSection from "@/components/homeComp/LeadershipSection";
// import OurPartners from "@/components/homeComp/OurPartners";
// import FAQSection from "@/components/homeComp/FAQSection";
// import HiringModels from "@/components/homeComp/HiringModels";

// // Section map
// const SECTION_COMPONENTS = {
//   single_banner_with_video: BannerSlider,
//   two_column_hero_section: AIEfficiencySection,
//   left_text_right_slider: CaseStudiesSection,
//   tabbed_feature_section: ServicesSection,
//   text_with_brand_slider: BrandsSection,
//   text_with_four_cards: Achievements,
//   banner_with_left_text_list: ProductSolutions,
//   content_with_eight_grid_slider: Sectors,
//   content_with_three_grid_cards: LeadershipSection,
//   content_with_json_animation: HiringModels,
//   faq_section: FAQSection,
// };

// export default function HomeSections({ initialData }) {
//   const [pageData, setPageData] = useState(
//     initialData || { sections: [], results: [] }
//   );
//   const [loading, setLoading] = useState(!initialData);

//   useEffect(() => {
//     if (!initialData) {
//       const fetchSections = async () => {
//         try {
//           const data = await axiosClient.get("/website/home/show"); // client side fetch
//           setPageData({
//             sections: data.sections || [],
//             results: data.results || [],
//           });
//         } catch (error) {
//           console.error("Error fetching homepage sections:", error);
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchSections();
//     }
//   }, [initialData]);

//   if (loading) {
//     return <SkeletonLoader aligin="center" />;
//   }
//   console.log("pageData", pageData);


//   const getSectionData = (sectionId) =>
//     pageData.results.filter((item) => item.section_id === sectionId);

//   return (
//     <div className="w-full flex flex-col gap-4">
//       {pageData.sections.map((section) => {
//         const Component = SECTION_COMPONENTS[section.type];
//         if (!Component) {
//           console.warn(`⚠️ No component found for type: ${section.type}`);
//           return null;
//         }

//         const sectionResults = getSectionData(section.id);

//         return (
//           <Component
//             key={section.id}
//             data={{
//               ...section,
//               results: sectionResults,
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import axiosClient from "@/lib/api/axiosClient";
import { SkeletonLoader } from "@/components/SkeletonLoader";

// Import components
import BannerSlider from "@/components/homeComp/BannerSlider";
import AIEfficiencySection from "@/components/homeComp/AIEfficiencySection";
import CaseStudiesSection from "@/components/homeComp/CaseStudiesSection";
import ServicesSection from "@/components/homeComp/ServicesSection";
import BrandsSection from "@/components/homeComp/BrandsSection";
import Achievements from "@/components/homeComp/Achievements";
import ProductSolutions from "@/components/homeComp/ProductSolution";
import Sectors from "@/components/homeComp/Sectors";
import LeadershipSection from "@/components/homeComp/LeadershipSection";
import OurPartners from "@/components/homeComp/OurPartners";
import FAQSection from "@/components/homeComp/FAQSection";
import HiringModels from "@/components/homeComp/HiringModels";
import Reduce from "@/components/homeComp/Reduce";
import Whatsupper from "@/components/homeComp/Whatsupper";
import SoftwareSolutions from "@/components/CustomAppDev/SoftwareSolutions";
import GetInTouch from "@/components/WebsiteComponents/GetInTouch";

export default function HomeSections({ initialData }) {
  const [pageData, setPageData] = useState(
    initialData || { sections: [], results: [] }
  );
  const [loading, setLoading] = useState(!initialData);
  console.log("initialData", initialData);

  useEffect(() => {
    if (!initialData) {
      const fetchSections = async () => {
        try {
          const data = await axiosClient.get("/website/home/show");
          setPageData({
            sections: data.sections || [],
            results: data.results || [],
          });
        } catch (error) {
          console.error("Error fetching homepage sections:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchSections();
    }
  }, [initialData]);

  if (loading) {
    return <SkeletonLoader aligin="center" />;
  }
  const color =
    initialData?.color?.toUpperCase() === "#FFFFFF"
      ? "#1A7D85"
      : initialData?.color;

  const getSectionData = (sectionId) =>
    pageData.results.filter((item) => item.section_id === sectionId);
  // ✅ Dynamic component selector with fallback matching
  const renderSection = (type = "", data) => {
    const normalizedType = type?.toLowerCase().replace(/[-_]/g, "");

    switch (normalizedType) {
      case "singlebannerwithvideo":
        return <BannerSlider data={data} color={initialData?.color} />;

      // case "twocolumnherosection":
      //   return <AIEfficiencySection data={data} color={color} />;
      case "whatsupper":
        return <Whatsupper data={data} color={color} />;

        case "reducesection":
        return <Reduce data={data} color={color} />;

      case "lefttextrightslider":
        // case "casestudiessection":
        return <CaseStudiesSection data={data}
          color={color}
        />;

      case "tabbedfeaturesection":
        // case "servicessection":
        return <ServicesSection data={data} color={color} />;

      case "textwithbrandslider":
        return <BrandsSection data={data} color={color} />;

      case "textwithfourcards":
        // case "achievements":
        return <Achievements data={data} color={color} />;

      case "bannerwithlefttextlist":
        // case "productsolution":
        // return <Whatsupper data={data} color={color} />;
        return <ProductSolutions   data={data} color={color} />;

      case "contentwitheightgridslider":
        // case "sectors":
        return <SoftwareSolutions data={data} color={color} />;

      case "contentwiththreegridcards":
        // case "leadershipsection":
        return <LeadershipSection data={data} color={color} />;

      case "contentwithjsonanimation":
        // case "hiringmodels":
        return <HiringModels data={data} color={color} />;

      case "faqsection":
        return <FAQSection data={data} color={color} />;
   case "getintouch":
        return <GetInTouch data={data} color={color} />;
      default:
        // ✅ Fallback keyword-based matching if API type is slightly different
        if (normalizedType.includes("banner")) return
        <BannerSlider data={data}
        />;
        if (normalizedType.includes("reduce"))
  return <Reduce data={data} color={color} />;
        // if (normalizedType.includes("hero")) return <AIEfficiencySection data={data} />;
        if (normalizedType.includes("case") || normalizedType.includes("slider"))
          return <CaseStudiesSection data={data} />;
        if (normalizedType.includes("service") || normalizedType.includes("feature"))
          return <ServicesSection data={data} />;
        if (normalizedType.includes("brand")) return <BrandsSection data={data} />;
        if (normalizedType.includes("achievement") || normalizedType.includes("card"))
          return <Achievements data={data} />;
        if (normalizedType.includes("product")) return <ProductSolutions data={data} />;
        if (normalizedType.includes("sector") || normalizedType.includes("grid"))
          return <Sectors data={data} />;
        if (normalizedType.includes("leader")) return <LeadershipSection data={data} />;
        if (normalizedType.includes("hiring") || normalizedType.includes("json"))
          return <HiringModels data={data} />;
        if (normalizedType.includes("faq")) return <FAQSection data={data} />;

        console.warn(`⚠️ No matching component for type: ${type}`);
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col md:pb-6 pb-2 md:gap-10 gap-10">
          {[...pageData.sections]
                .sort((a, b) => a.sort_order - b.sort_order)
                .map((section) => {
                    const sectionResults = getSectionData(section.id);
                    const sectionData = { ...section, results: sectionResults };

                    return <div key={section.id}>{renderSection(section.type, sectionData)}</div>;
                })}
      {/* {pageData.sections.map((section) => {
        const sectionResults = getSectionData(secti on.id);
        const sectionData = { ...section, results: sectionResults };

        return (
          <div key={section.id}>
            {renderSection(section.type, sectionData)}
          </div>
        );
      })} */}
    </div>
  );
}

// section_one: BannerSlider,
// section_two: AIEfficiencySection,
// section_three: CaseStudiesSection,
// section_four: ServicesSection,
// section_five: BrandsSection,
// section_six: Achievements,
// section_seven: ProductSolutions,
// section_eight: Sectors,
// section_nine: LeadershipSection,
// section_ten: HiringModels,

// import NewsSection from '@/components/aboutcomp/NewsSection'
// import BannerSlider from '@/components/homeComp/BannerSliderOld'
// import BrokerForm from '@/components/homeComp/BrokerForm'
// import Brokers from '@/components/homeComp/Brokers'
// import HeroSlider from '@/components/homeComp/HeroSlider'
// import OurPartners from '@/components/homeComp/OurPartners'
// import ProjectsSection from '@/components/homeComp/ProjectsSection'
// import PromotionSection from '@/components/homeComp/PromotionSection'
// import StatsSection from '@/components/homeComp/StatsSection'
// import Testimonials from '@/components/homeComp/Testimonials'
// import VisionMeetsValue from '@/components/homeComp/VisionMeetsValue'
// import WhyParkGroup from '@/components/homeComp/WhyParkGroup'

// import React from 'react'
// import HomeSections from './HomeSections'
// import PropertyListings from './propertylisting'
// import Hero from '@/components/Hero'
// import AIEfficiencySection from '@/components/homeComp/AIEfficiencySection'
// import CaseStudiesSection from '@/components/homeComp/CaseStudiesSection'
// import ServicesSection from '@/components/homeComp/ServicesSection'
// import ProductSolutions from '@/components/homeComp/ProductSolution'
// import Sectors from '@/components/homeComp/Sectors'
// import LeadershipSection from '@/components/homeComp/LeadershipSection'
// import HiringModels from '@/components/homeComp/HiringModels'
// import FAQSection from '@/components/homeComp/FAQSection'
// import BrandsSection from '@/components/homeComp/BrandsSection'
// import Achievements from '@/components/homeComp/Achievements'

// const page = () => {
//     return (
//         <div className="w-full bg-white flex pb-40 flex-col gap-4">
//             {/* <CaseStudiesSection /> */}
//             <HomeSections />
//             {/* <Hero/>
//             <AIEfficiencySection/>
//             <CaseStudiesSection/>
//             <ServicesSection/>
//             <BrandsSection/>
//             <Achievements/>
//             <ProductSolutions/>
//             <Sectors/>
//             <LeadershipSection/>
//             <HiringModels/>
//             <FAQSection/> */}
//         </div>
//     )
// }

// // export default page
// import React from "react";
// import HomeSections from "./HomeSections";
// import axiosServerClient from "@/lib/api/axiosServerClient";

// // Server-side API call
// async function getHomeData() {
//     try {
//         const data = await axiosServerClient.get("/website/home/show");
//         return data.data;
//     } catch (error) {
//         console.error("Error fetching homepage:", error);
//         return { sections: [], results: [], seo: {} };
//     }
// }

// // Dynamic SEO
// export async function generateMetadata() {
//     const data = await getHomeData();

//     return {
//         title: data?.seo?.meta_title || "Default Title",
//         description: data?.seo?.meta_description || "Default description",
//         openGraph: {
//             title: data?.seo?.og_title || data?.seo?.meta_title,
//             description: data?.seo?.og_description || data?.seo?.meta_description,
//             images: [
//                 {
//                     url: data?.seo?.og_image || "/default-og.jpg",
//                     width: 1200,
//                     height: 630,
//                     alt: data?.seo?.meta_title || "OG Image",
//                 },
//             ],
//         },
//         twitter: {
//             card: "summary_large_image",
//             title: data?.seo?.twitter_title || data?.seo?.meta_title,
//             description: data?.seo?.twitter_description || data?.seo?.meta_description,
//             images: [data?.seo?.twitter_image || "/default-og.jpg"],
//         },
//     };
// }

// // Page component
// export default async function Page() {
//     const data = await getHomeData();
//     console.log("datasasawq",data);

//     return (
//         <div className="w-full bg-white flex pb-40 flex-col gap-4">
//             <HomeSections initialData={data} />
//         </div>
//     );
// }
import { pageApi } from "@/lib/api/pageApi";
import React from "react";
import HomeSections from "./HomeSections";
// import HomeSections from "../HomeSections";
// import { pageApi } from "@/lib/api/pageApi";

// ✅ Fetch page data (server side)
async function getPageData(slug) {
    try {
        const res = await pageApi.getPageData(slug);
        return res?.data?.data || { sections: [], results: [], seo: {} };
    } catch (error) {
        console.error(`❌ Error fetching ${slug} page:`, error);
        return { sections: [], results: [], seo: {} };
    }
}

// ✅ Dynamic SEO Metadata
export async function generateMetadata({ params }) {
    // const { slug } = params;
    const data = await getPageData("home");
  const schema = JSON.stringify(data?.seo?.extra_tags?.[0] || {}, null, 2);
//   console.log("JSON", schema);

    return {
        title: data?.seo?.meta_title || "Default Title",
        description: data?.seo?.meta_description || "Default description",
        // schema: data?.seo?.extra_tags[0],
    schema, // include if you plan to inject it in the page


        // openGraph: {
        //     title: data?.seo?.og_title || data?.seo?.meta_title,
        //     description: data?.seo?.og_description || data?.seo?.meta_description,

        //     images: [
        //         {
        //             url: data?.seo?.og_image || "/default-og.jpg",
        //             width: 1200,
        //             height: 630,
        //             alt: data?.seo?.meta_title || "OG Image",
        //         },
        //     ],
        // },
        // twitter: {
        //     card: "summary_large_image",
        //     title: data?.seo?.twitter_title || data?.seo?.meta_title,
        //     description: data?.seo?.twitter_description || data?.seo?.meta_description,
        //     images: [data?.seo?.twitter_image || "/default-og.jpg"],
        // },
    };
}

// ✅ Dynamic Page Component
export default async function Page({ params }) {
    // const { slug } = params;
    // const data = await getPageData(slug);
    const data = await getPageData("home");
  const schema = JSON.stringify(data?.seo?.extra_tags?.[0] || {}, null, 2);
//   console.log("JSON", schema);
    return (
        <div className="w-full bg-white flex md:pb20 pb10 flex-col gap-4">
            <HomeSections initialData={data} />
        </div>
    );
}

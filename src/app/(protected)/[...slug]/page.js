
// import React from "react";
// import { servicePageApi } from "@/lib/api/servicePageApi";
// import ServiceSections from "./ServiceSections";

// // ✅ Fetch page data (server side)
// async function getPageData(slug) {
//   try {
//     const res = await servicePageApi.getPageData(slug);
//     return res?.data || { sections: [], results: [], seo: {} };
//   } catch (error) {
//     console.error(`❌ Error fetching ${slug} page:`, error);
//     return { sections: [], results: [], seo: {} };
//   }
// }

// // ✅ Dynamic SEO Metadata
// export async function generateMetadata({ params }) {
//   const slugArray = params?.slug || [];
//   const lastSlug = Array.isArray(slugArray)
//     ? slugArray[slugArray.length - 1]
//     : slugArray;

//     const data = await getPageData(lastSlug);

//     console.log("slugArray", data);
//   return {
//     title: data?.service?.seo?.meta_title || "Our Services",
//     description: data?.service?.seo?.meta_description || "Explore our services.",
//   };
// }

// // ✅ Page Component
// export default async function Page({ params }) {
//   const slugArray = params?.slug || [];
//   const lastSlug = Array.isArray(slugArray)
//     ? slugArray[slugArray.length - 1]
//     : slugArray;

//   const data = await getPageData(lastSlug);

//   return (
//     <div className="w-full bg-white flex flex-col gap-4 pb-40">
//       <ServiceSections
//         slug={lastSlug}
//         initialData={data.page}
//         service={data.service}
//       />
//     </div>
//   );
// }
// // import Testimonials from '@/components/homeComp/Testimonials'
// import Hero from '@/components/Hero'
// import AppCostSection from '@/components/homeComp/AppCostSection'
// import AppDevelopmentCosts from '@/components/homeComp/AppCostSection'
// import Appsec from '@/components/homeComp/Appsec'
// import BlogsSection from '@/components/homeComp/BlogsSection'
// import IndustriesSection from '@/components/homeComp/IndustriesSection'
// import MobileAppServices from '@/components/homeComp/MobileAppServices'
// import Process from '@/components/homeComp/Process'
// import Testimonials from '@/components/homeComp/Testimonials'
// import React from 'react'

// const page = () => {
//   return (
//     <div className='mb-30'>

//         <Hero/>
//          <Testimonials/>
//          <BlogsSection/>
//          <IndustriesSection/>
//          <MobileAppServices/>
//          {/* <AppDevelopmentCosts/> */}
//          {/* <AppDevelopmentCosts/> */}
//          {/* <AppDevelopmentCosts/> */}
//          <Appsec/>
//          <AppCostSection/>
//          <Process/>

//     </div>
//   )
// }

// // export default page
// import React from "react";
// import { servicePageApi } from "@/lib/api/servicePageApi";
// import ServiceSections from "./ServiceSections";

// // ✅ Fetch page data (server side)
// async function getPageData(slug) {
//   try {
//     const res = await servicePageApi.getPageData(slug);
//     // console.log(`fetching page:`, res.data);
//     return res?.data || { sections: [], results: [], seo: {} };
//   } catch (error) {
//     console.error(`❌ Error fetching ${slug} page:`, error);
//     return { sections: [], results: [], seo: {} };
//   }
// }

// // ✅ Dynamic SEO Metadata
// export async function generateMetadata({ params }) {
//   const { slug } = params; // ✅ extract slug from URL params
//   const data = await getPageData(slug);
//   console.log("slug", slug);

//   return {
//     title: data?.service?.seo?.meta_title || "Our Services",
//     description: data?.service?.seo?.meta_description || "Explore our services.",
//   };
// }

// // ✅ Page Component
// export default async function Page({ params }) {
//   const { slug } = params; // ✅ extract slug from URL params
//   const data = await getPageData(slug);
//   console.log("data_page", data);
//   console.log("slug", slug);

//   return (
//     <div className="w-full bg-white flex flex-col gap-4 pb-40">
//       <ServiceSections slug={slug} initialData={data.page} service={data.service} />
//     </div>
//   );
// }
// import React from "react";
// // import { servicePageApi } from "@/lib/api/servicePageApi";
// // import ServiceSections from "./PageSections";
// import { pageApi } from "@/lib/api/pageApi";
// import PageSections from "./PageSections";

// // ✅ Fetch page data (server side)
// async function getPageData(slug) {
//   try {
//     const res = await pageApi.getPageData(slug);
//     console.log("reskawhq", res);

//     return res?.data?.data || { sections: [], results: [], seo: {} };
//   } catch (error) {
//     console.error(`❌ Error fetching ${slug} page:`, error);
//     return { sections: [], results: [], seo: {} };
//   }
// }

// // ✅ Dynamic SEO Metadata
// export async function generateMetadata({ params }) {
//   const slugArray = params?.slug || [];
//   const lastSlug = Array.isArray(slugArray)
//     ? slugArray[slugArray.length - 1]
//     : slugArray;

//   const data = await getPageData(lastSlug);

//   // console.log("slugArray", data);
//   return {
//     title: data?.seo?.meta_title || "Our Services",
//     description: data?.seo?.meta_description || "Explore our services.",
//   };
// }

// // ✅ Page Component
// export default async function Page({ params }) {
//   const slugArray = params?.slug || [];
//   const lastSlug = Array.isArray(slugArray)
//     ? slugArray[slugArray.length - 1]
//     : slugArray;

//   const data = await getPageData(lastSlug);
//   // console.log("datawiuqjwn", data);

//   return (
//     <div className="w-full bg-white flex pb-20 flex-col gap-4">
//       <PageSections
//         slug={lastSlug}
//         initialData={data}
//       // service={data.service}
//       />
//     </div>
//   );
// }
import { notFound, redirect } from "next/navigation";
import { pageApi } from "@/lib/api/pageApi";
import PageSections from "./PageSections";

// Fetch page data
async function getPageData(slug) {
  try {
    const res = await pageApi.getPageData(slug);

    // Server error → redirect to home
    if (res?.status === 500) {
      redirect("/");
    }

    const data = res?.data?.data;

    // 404 / no data → notFound
    if (!data || (!data.sections?.length && !data.results?.length)) {
      notFound();
    }

    // Return destructured data with defaults
    return {
      sections: data.sections || [],
      results: data.results || [],
      seo: data.seo || {},
    };
  } catch (error) {
    console.error("API fetch error:", error);

    // If API response is 500 → redirect
    if (error?.status === 500) {
      redirect("/");
    }

    // Otherwise treat as 404
    notFound();
  }
}

// SEO
export async function generateMetadata({ params }) {
  const slugArray = params?.slug || [];
  const lastSlug = Array.isArray(slugArray)
    ? slugArray[slugArray.length - 1]
    : slugArray;

  const { seo } = await getPageData(lastSlug);

  return {
    title: seo?.meta_title || "Our Services",
    description: seo?.meta_description || "Explore our services.",
  };
}

// PAGE
export default async function Page({ params }) {
  const slugArray = params?.slug || [];
  const lastSlug = Array.isArray(slugArray)
    ? slugArray[slugArray.length - 1]
    : slugArray;

  const { sections, results, seo } = await getPageData(lastSlug);

  return (
    <div className="w-full bg-white flex pb-20 flex-col gap-4">
      <PageSections slug={lastSlug} initialData={{ sections, results, seo }} />
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import axiosClient from "@/lib/api/axiosClient";
import { SkeletonLoader } from "@/components/SkeletonLoader";

// Components
import Hero from "@/components/Hero";
import Testimonials from "@/components/homeComp/Testimonials";
import BlogsSection from "@/components/homeComp/BlogsSection";
import IndustriesSection from "@/components/homeComp/IndustriesSection";
import MobileAppServices from "@/components/homeComp/MobileAppServices";
import Appsec from "@/components/homeComp/Appsec";
import AppCostSection from "@/components/homeComp/AppCostSection";
import Process from "@/components/homeComp/Process";
import BannerSlider from "@/components/homeComp/BannerSlider";
import BrandsSection from "@/components/homeComp/BrandsSection";
import CaseStudiesSection from "@/components/homeComp/CaseStudiesSection";
import Achievements from "@/components/homeComp/Achievements";
import AiPoweredDevelopment from "@/components/CustomAppDev/AiPoweredDevelopment";
import WhatsNew from "@/components/CustomAppDev/WhatsNew";
import MobileAppInnovation from "@/components/CustomAppDev/MobileAppInnovation";
import PreLaunchServices from "@/components/CustomAppDev/PreLaunchServices";
import EmergingEcosystems from "@/components/CustomAppDev/EmergingEcosystems";
import TechnologiesWeMaster from "@/components/CustomAppDev/TechnologiesWeMaster";
import PostLaunchSupport from "@/components/CustomAppDev/PostLaunchSupport";
import FaqSection from "@/components/homeComp/FAQSection";
import ShopifyChallenges from "@/components/Shopify/ShopifyChallenges";
import { WhyBusinesses } from "@/components/Services/WhyBusinesses";
import AIEfficiencySection from "@/components/homeComp/AIEfficiencySection";
import Sectors from "@/components/homeComp/Sectors";
import ProductSolutions from "@/components/homeComp/ProductSolution";
// import HiringModels from "@/components/homeComp/HiringModels";
import ShopifyFourStepProcess from "@/components/ShopifyFourStep/ShopifyFourStepProcess";
import ShopifyAppTypes from "@/components/AppTypesWeCover/ShopifyAppTypes";
import ShopifySupportServices from "@/components/Shopify/ShopifySupportServices";
import AIE from "@/components/CustomAppDev/AIE";
// import HiringModels from "@/components/homeComp/HiringModels";
// import HiringShopifyCompany from "@/components/homeComp/HiringShopifyCompany";
import ServicesSection from "@/components/homeComp/ServicesSection";
import HiringShopifyCompany from "@/components/homeComp/HiringShopifyCompany";
import HiringModels from "@/components/homeComp/HiringModels";
import Reduce from "@/components/homeComp/Reduce";
import ReadNumbersSection from "@/components/homeComp/ReadNumbersSection";
import { Qahiri } from "next/font/google";
import QuickTakeaways from "@/components/Shopify/QuickTakeaways";
import ScenarioGuide from "@/components/homeComp/ScenarioGuide";
import HiddenCostsSection from "@/components/Shopify/HiddenCostsSection";
import ShopifyDevelopersSection from "@/components/homeComp/ShopifyDevelopersSection";
import SoftwareSolutions from "@/components/CustomAppDev/SoftwareSolutions";
import ShopifyHeadlessSection from "@/components/homeComp/ShopifyHeadlessSection";
import ChooseBidecSection from "@/components/homeComp/ChooseBidecSection";
import Whatsupper from "@/components/homeComp/Whatsupper";
import ShopifyOptimizationSection from "@/components/CustomAppDev/ShopifyOptimizationSection";
import EcommerceSolution from "@/components/Shopify/EcommerceSolution";
import MigrateSection from "@/components/homeComp/MigrateSection";
import MigrationServices from "@/components/MigrationServices";
import BombayBanner from "@/components/WebsiteComponents/Bombaychoconuts/BombayBanner";
import BombayAbout from "@/components/WebsiteComponents/Bombaychoconuts/BombayAbout";
import BombayChallenges from "@/components/WebsiteComponents/Bombaychoconuts/BombayChallenges";
import BombayImpact from "@/components/WebsiteComponents/Bombaychoconuts/BombayImpact";
import ToolsTechnologies from "@/components/WebsiteComponents/Bombaychoconuts/ToolsTechnologies";
import CaseStudyBanner from "@/components/WebsiteComponents/Gleegeather/CaseStudyBanner";
import BackgroundSection from "@/components/WebsiteComponents/Gleegeather/BackgroundSection";
import MobileAppSection from "@/components/WebsiteComponents/Gleegeather/MobileAppSection";
import TestimonialSection from "@/components/WebsiteComponents/Gleegeather/TestimonialSection";
import CareBanner from "@/components/WebsiteComponents/Care/CareBanner";
import GetInTouch from "@/components/WebsiteComponents/GetInTouch";
import ShopifyDynamicsSection from "@/components/homeComp/ShopifyDynamicsSection";
import AboutCaviar from "@/components/WebsiteComponents/Care/AboutCaviar";
import PremiumExperience from "@/components/WebsiteComponents/Care/PremiumExperience";
import Brandss from "@/components/WebsiteComponents/Care/Brandss";
import ChallengesSection from "@/components/WebsiteComponents/Gleegeather/ChallengesSection";
import ImpactSection from "@/components/WebsiteComponents/Gleegeather/ImpactSection";

export default function PageSections({ initialData, slug }) {
    const [pageData, setPageData] = useState(
        initialData || { sections: [], results: [] }
    );
    const [loading, setLoading] = useState(!initialData);
    // console.log("initialData_page", initialData);

    // Fetch sections dynamically if no initialData
    useEffect(() => {
        if (!initialData) {
            const fetchSections = async () => {
                try {
                    const { data } = await axiosClient.get(
                        `/website/${slug}/show`
                    );
                    console.log("AdddPI response data:", data);

                    setPageData({
                        sections: data.sections || [],
                        results: data.results || [],
                    });
                } catch (error) {
                    console.error("❌ Error fetching services sections:", error);
                } finally {
                    setLoading(false);
                }
            };
            fetchSections();
        }
    }, [initialData, slug]);

    if (loading) {
        return <SkeletonLoader aligin="center" />;
    }

    useEffect(() => {
        console.log("pageData state updsddated:", pageData);
    }, [pageData]);



    const getSectionData = (sectionId) =>
        pageData.results.filter((item) => item.section_id === sectionId);

    // Map normalized type to component
    // const componentMap = {
    //     singlebannerwithvideo: BannerSlider,
    //     textwithbrandslider: BrandsSection,
    //     testimonials: Testimonials,
    //     blogssection: BlogsSection,
    //     latestblogs: BlogsSection,
    //     // topcontentwithfourcards: Achievements,
    //     textwithfourcards: Achievements,
    //     lefttextrightslider: CaseStudiesSection,
    //     leftimagewithrightcontent: AiPoweredDevelopment,
    //     bannerbgwithleftcontext: WhatsNew,
    //     contentwitheightstatscard: MobileAppInnovation,
    //     contentwithninefeaturescard: MobileAppServices,
    //     costofmobileappdevelopment: Appsec,
    //     prelaunchservices: PreLaunchServices,
    //     postlaunchservices: PostLaunchSupport,
    //     developmentcosts: AppCostSection,
    //     horizontalcontent: Process,
    //     leftcontentwiththreecards: EmergingEcosystems,
    //     technologieswemaster: TechnologiesWeMaster,
    //     // postlaunchsupport: PostLaunchSupport,
    //     estimatedmobileappdevelopmentcost: AppCostSection,
    //     faqsection: FaqSection,
    //     // testimonialssection: Testimonials,
    //     tabbedfeaturesection: ServicesSection,
    //     whybuisinessindubai: WhyBusinesses,
    //     twocolumnherosection: AIEfficiencySection,
    //     contentwitheightgridslider: Sectors,
    //     bannerwithlefttextlist: ProductSolutions,
    //     industriesandusecases: IndustriesSection,
    //     whyecommercestore: ShopifyChallenges,
    //     contentwithjsonanimation: HiringModels,
    //     fourstepsprocess: ShopifyFourStepProcess,
    //     typeswecover: ShopifyAppTypes,
    //     shopifyservices: ShopifySupportServices,
    //     developmentcosts: AIE,


    // };
     const componentMap = {
        singlebannerwithvideo: BannerSlider,
        textwithbrandslider: BrandsSection,
        testimonials: Testimonials,
        blogssection: BlogsSection,
        latestblogs: BlogsSection,
        // topcontentwithfourcards: Achievements,
        textwithfourcards: Achievements,
        lefttextrightslider: CaseStudiesSection,
        leftimagewithrightcontent: AiPoweredDevelopment,
        bannerbgwithleftcontext: WhatsNew,
        contentwitheightstatscard: MobileAppInnovation,
        contentwithninefeaturescard: MobileAppServices,
        costofmobileappdevelopment: Appsec,
        prelaunchservices: PreLaunchServices,
        postlaunchservices: PostLaunchSupport,
        developmentcosts: AppCostSection,
        horizontalcontent: Process,
        leftcontentwiththreecards: EmergingEcosystems,
        technologieswemaster: TechnologiesWeMaster,
        // postlaunchsupport: PostLaunchSupport,
        estimatedmobileappdevelopmentcost: AppCostSection,
        faqsection: FaqSection,
        // testimonialssection: Testimonials,
        tabbedfeaturesection: ServicesSection,
        whybuisinessindubai: WhyBusinesses,
        twocolumnherosection: AIEfficiencySection,
        contentwitheightgridslider: SoftwareSolutions,
        bannerwithlefttextlist: ProductSolutions,
        industriesandusecases: IndustriesSection,
        whyecommercestore: ShopifyChallenges,
        contentwithjsonanimation: HiringModels,
        fourstepsprocess: ShopifyFourStepProcess,
        typeswecover: ShopifyAppTypes,
        shopifyservices: ShopifySupportServices,
        developmentcosts: AIE,
        reducesection:Reduce,
       readnumber:ReadNumbersSection,
       quicktake:QuickTakeaways,
       scenarioguide:ScenarioGuide,
       hiddencost:HiddenCostsSection,
       shopifydeveloper:ShopifyDevelopersSection,
       shopifyheadless:ShopifyHeadlessSection,
       choosebidecsolution:ChooseBidecSection,
       whatsupper:Whatsupper,
      shopifyoptimizationsection:ShopifyOptimizationSection,
      ecommerce:EcommerceSolution,
      migrate:MigrateSection,
      migrationservices:MigrationServices,
      bombaybanner:BombayBanner,
      bombayabout:BombayAbout,
      bombaychallanges:BombayChallenges,
      bombayimpact:BombayImpact,
      tooltechnologies:ToolsTechnologies,
     casestudybanner:CaseStudyBanner,
     backgroundsection:BackgroundSection,
     mobileappsection:MobileAppSection,
     testimonialssection:TestimonialSection,
     carebanner:CareBanner,
     getintouch:GetInTouch,
     shopifydynamic:ShopifyDynamicsSection,
     aboutcavier:AboutCaviar,
     premiumexperience:PremiumExperience,
     brandss:Brandss,
     challangessection:ChallengesSection,
     impactsection:ImpactSection
    };
    // contentwithninefeaturescard: Sectors,

    // const renderSection = (type = "", data) => {
    //     const normalizedType = type?.toLowerCase().replace(/[-_]/g, "");
    //     const Component = componentMap[normalizedType];

    //     if (Component) return <Component data={data} />;

    //     // Optional fallback
    //     console.warn(`⚠️ No matching component for type: ${type}`);
    //     return null;
    // };
    const color =
        initialData?.color?.toUpperCase() === "#FFFFFF"
            ? "#1A7D85"
            : initialData?.color;

    const renderSection = (type = "", data) => {
        if (!type) return null; // skip empty types

        const normalizedType = type.toLowerCase().replace(/[-_]/g, "");
        const Component = componentMap[normalizedType];
        console.log("Section_type:", normalizedType);

        if (!Component) {
            console.warn(`⚠️ Skipping section. No matching component for type: "${type}"`);
            return null; // skip non-matching sections
        }
        // ✅ Don't apply color to BannerSlider (singlebannerwithvideo)
        if (normalizedType === "singlebannerwithvideo") {
            return <Component data={data} color={initialData?.MobileAppServicescolor} />;
        }

        return <Component data={data} color={color} />;
    };

    return (
        <div className="w-full flex flex-col md:pb-24 pb-2 md:gap-32 gap-10">
            {[...pageData.sections]
                .sort((a, b) => a.sort_order - b.sort_order)
                .map((section) => {
                    const sectionResults = getSectionData(section.id);
                    const sectionData = { ...section, results: sectionResults };
               console.log(sectionResults,"result")
                console.log(sectionData,"ult")

                    return <div key={section.id}>{renderSection(section.type, sectionData)}</div>;
                })}
            {/* {pageData.sections.map((section, index) => {
                const sectionResults = getSectionData(section.id);
                const sectionData = { ...section, results: sectionResults };

                return (
                    <div key={section.id || index}>
                        {renderSection(section.type, sectionData)}
                    </div>
                );
            })} */}

            {/* <WhyBusinesses /> */}
            {/* <Testimonials /> */}
        </div>
    );
}
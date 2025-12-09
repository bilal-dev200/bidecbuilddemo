"use client";
import Image from "next/image";
import { getValueByFieldNameAndPosition, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function InvestmentOpportunity({ data }) {
  console.log('InvestmentOpportunity data:', data);

  // Extract dynamic values using position-based approach
  const title = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || 'Investment Overview';
  const subtitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) || 'A Smart Investment Choice';
  const description = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) || 'Discover exceptional investment opportunities with guaranteed returns and long-term value appreciation in Dubai\'s thriving real estate market.';

  // Extract investment highlights - supporting multiple highlights
  // const highlightItems = [];
  // for (let i = 0; i < 6; i++) { // Support up to 6 investment highlights
  //   const highlightTitle = getValueByFieldNameAndPosition(data, 'investment_highlight_title', i);
  //   const highlightValue = getValueByFieldNameAndPosition(data, 'investment_highlight_value', i);
  //   const highlightIcon = getValueByFieldNameAndPosition(data, 'investment_highlight_icon', i);

  //   if (highlightTitle && highlightValue) {
  //     highlightItems.push({
  //       title: highlightTitle,
  //       value: highlightValue,
  //       icon: highlightIcon || '/ico1.png'
  //     });
  //   }
  // }

  // // Fallback highlights if no dynamic data
  // const highlights = highlightItems.length > 0 ? highlightItems : [
  //   { title: 'Expected ROI', value: '8-10% annually', icon: '/ico1.png' },
  //   { title: 'Capital Appreciation', value: '15-20% over 5 years', icon: '/ico2.png' },
  //   { title: 'Rental Yield', value: '6-8% per annum', icon: '/ico3.png' },
  //   { title: 'Payment Plan', value: 'Flexible options available', icon: '/ico4.png' }
  // ];

  // Extract additional investment info
  const imageOne = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) || '/investment-bg.png';
  const imageTwo = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 1) || '/investment-bg.png';
  const buttonText = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) || 'Download Investment Guide';

  return (
    // <section className="py-16 px-4 bg-gray-900 text-white relative overflow-hidden">
    //   {/* Background Image */}
    //   <div className="absolute inset-0 opacity-20">
    //     <Image
    //       src={backgroundImage}
    //       alt="Investment Background"
    //       fill
    //       className="object-cover"
    //     />
    //   </div>
    <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 flex flex-col md:flex-row items-center gap-8 sm:gap-[10rem] relative">

      {/* Left images container */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
        {/* Large image */}
        <div className="rounded-lg overflow-hidden max-w-[500px] w-full">
          <img
            src={`${Image_URL}${imageOne}`}
            alt="Main Visual"
            // width={400}
            // height={450}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Smaller image on bottom right */}
        <div className="absolute md:block hidden bottom-0 right-0 translate-x-10 translate-y-1/4 rounded-lg overflow-hidden w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 shadow-lg border-4 border-white bg-white z-20">
          <img
            src={`${Image_URL}${imageTwo}`}
            alt="Secondary Visual"
            // width={224}
            // height={224}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">{title}</h2>
          <p className="text-xl text-gray-300 mb-4">{subtitle}</p>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">{description}</p>
        </div>
        {/* Call to Action */}
        <div className="">
          <button className="bg-[#26326A] hover:bg-[#1E2A78] text-white px-8 py-4 rounded-full text-md font-medium transition-colors duration-300 inline-flex items-center gap-3">
            {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg> */}
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import { getValueByFieldNameAndPosition, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function OverviewHighlights({ data }) {
  console.log('OverviewHighlights data:', data);

  // Extract dynamic values using position-based approach
  const heading = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || 'Overview & Highlights';
  const subHeading = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) || 'Experience luxury living at its finest';

  // Extract feature data - supporting multiple features using position-based approach
  const leftFeatures = [
    {
      icon: "/ico1.png",
      title: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, 0) || 'Location',
      value: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION, 0) || 'Prime waterfront location'
    },
    {
      icon: "/ico2.png",
      title: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, 1) || 'Size Range',
      value: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION, 1) || '850 - 2,500 sq ft'
    },
    {
      icon: "/ico3.png",
      title: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, 2) || 'Units',
      value: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION, 2) || '450 residential units'
    }
  ];

  const rightFeatures = [
    {
      icon: "/ico4.png",
      title: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, 3) || 'Completion',
      value: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION, 3) || 'Q4 2025'
    },
    {
      icon: "/ico1.png",
      title: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, 4) || 'Payment Plan',
      value: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION, 4) || 'Flexible payment options'
    },
    {
      icon: "/ico2.png",
      title: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, 5) || 'Developer',
      value: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION, 5) || 'Park Home Developers'
    }
  ];

  // Blue section data
  const SectionBg = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) || '/bluebg.png';
  const blueSectionBg = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 1) || '/bluebg.png';
  const blueSectionTitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 1) || 'Luxury Redefined';
  const blueSectionDesc = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) || 'Where modern architecture meets timeless elegance, creating spaces that inspire and elevate your lifestyle.';
  const blueSectionPrice = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 1) || 'Aed ';
  const blueSectionButton = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) || 'get the best price ';

  return (
    <section className="md:py-16 py-5 relative">
      {/* Heading */}
      <div className="relative max-w-3xl mx-auto text-center mb-14">
        <h1 className="md:text-4xl text-2xl font-normal mb-2">{heading}</h1>
        <p className="text-sm text-gray-600">{subHeading}</p>
      </div>

      {/* Building + Left/Right Content */}
      <div className="relative">
        <div className="relative flex justify-between items-start max-w-[1200px] mx-auto gap-6 sm:gap-10 px-4">
          {/* Left side */}
          <div className="flex flex-col space-y-6 gap-5 sm:space-y-10 flex-[1] text-gray-900 text-left">
            {leftFeatures.map((item, i) => (
              <div className="flex  items-center gap-3 mb-1" key={i}>
                <Image src={item.icon} alt={item.title} width={20} height={20} />
                <div className="">
                  <h2 className="md:text-xl text-lg font-normal">{item.title}</h2>
                  <p className="text-sm text-gray-600">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center (Building Image, wider) */}
          <div className="flex-[2] md:flex hidden flex justify-center">
            <img
              src={`${Image_URL}${SectionBg}`}
              alt="Building"
              className="object-contain opacity-90 md:opacity-100 w-full max-w-[500px] h-auto"
              draggable={false}
            />
          </div>

          {/* Right side */}
          <div className="flex flex-col space-y-6 sm:space-y-10 gap-6 flex-[1] text-gray-900 text-right">
            {rightFeatures.map((item, i) => (
              <div className="flex  items-center gap-3 mb-1" key={i}>
                <div className="">
                  <h2 className="md:text-xl text-lg font-normal">{item.title}</h2>
                  <p className="text-sm text-gray-600">{item.value}</p>
                </div>
                <Image src={item.icon} alt={item.title} width={20} height={20} />
              </div>
            ))}
          </div>
        </div>


        {/* Blue Section */}
        <div
          className="z-10 text-white md:pt-40 px-8 bg-cover bg-center w-full"
          style={{ backgroundImage: `url(${`${Image_URL}${blueSectionBg}`})` }}
        >

          <div className="relative">
            <div className="absolute inset-0"></div>
            <div className="relative z-10 text-start py-16">
              <h2 className="text-4xl font-bold mb-4">{blueSectionTitle}</h2>
              <p className="text-lg max-w-2xl mxauto leading-relaxed">
                {blueSectionDesc}
              </p>
              <h2 className="md:text-4xl text-2xl my-8 font-bold mb-4">{blueSectionPrice}</h2>
              {/* <h2 className="text-4xl font-bold mb-4"></h2> */}
              <button className="w-full mt-5 max-w-xl p-2 text-black rounded-full bg-white">{blueSectionButton}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

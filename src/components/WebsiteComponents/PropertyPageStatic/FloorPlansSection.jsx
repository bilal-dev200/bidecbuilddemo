"use client";
import { useState } from "react";
import Image from "next/image";
import { getValueByFieldNameAndPosition, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function FloorPlansSection({ data }) {
  console.log('FloorPlansSection data:', data);

  // Extract dynamic values using position-based approach
  const title = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || 'Explore the Floor Plans & Layout Options';
  const description = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) || 'Discover a range of intelligently designed layouts that combine space, style, and functionality to complement modern coastal living.';

  // Extract floor plan items - supporting multiple floor plans
  const floorPlanItems = [];
  for (let i = 0; i < 6; i++) { // Support up to 6 floor plans
    const floorType = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, i);
    const floorSize = getValueByFieldNameAndPosition(data, 'suite_area', i);
    const balconySize = getValueByFieldNameAndPosition(data, 'balcony_area', i);
    const totalSize = getValueByFieldNameAndPosition(data, 'total_area', i);
    const floorImage = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_IMAGE, i);

    if (floorType && floorImage) {
      floorPlanItems.push({
        type: floorType,
        floorSize: floorSize || 'Size available on request',
        balconySize: balconySize || 'Size available on request',
        totalSize: totalSize || 'Size available on request',
        image: floorImage
      });
    }
  }

  // Fallback floor plans if no dynamic data
  const floorPlans = floorPlanItems.length > 0 ? floorPlanItems : [
    {
      type: "Studios",
      size: "450 - 650 sq ft",
      image: "/pplan.png"
    },
    {
      type: "1 Bedroom",
      size: "750 - 950 sq ft",
      image: "/pplan.png"
    },
    {
      type: "2 Bedroom",
      size: "1100 - 1400 sq ft",
      image: "/pplan.png"
    },
    {
      type: "3 Bedroom",
      size: "1600 - 2000 sq ft",
      image: "/pplan.png"
    }
  ];

  // First floor plan by default
  const [selectedFloor, setSelectedFloor] = useState(floorPlans[0]);

  return (
    <section className="w-full bgblack pt-20 px-6 pb-0 relative overflow-visible" style={{ backgroundImage: "url('/floor_bg.png')" }}>
      <div className="max-w-[1200px] mx-auto text-center text-white z-10 relative">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-normal uppercase">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed">
          {description}
        </p>

        {/* Main Content */}
        <div className="mt-16 flex flex-col lg:flex-row items-start gap-10 justify-center relative z-10">
          {/* Left Floor Plan Image */}
          <div className="relative w-full lg:w-[35%] flex justify-center items-start rounded-t-2xl p-6 bg-white">
            <div className="relative w-full max-w-md aspect-square">
              <img
                src={`${Image_URL}${selectedFloor.image}`}
                alt={`${selectedFloor.type} Floor Plan`}
                // fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Floor Plan Details */}
          <div className="w-full lg:w-[35%] text-left space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                {selectedFloor.type}
              </h3>
              <p className="text-lg text-gray-300">
                Size: {selectedFloor.floorSize}
              </p>
            </div>

            {/* Floor Plan Options */}
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-gray-200">Available Floor Plans:</h4>
              <div className="grid grid-cols-1 gap-3">
                {floorPlans.map((plan, index) => {
                  const isActive = selectedFloor?.type === plan.type;

                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedFloor(plan)}
                      className={`p-3 transition-all duration-300 text-left w-full
        ${isActive
                          ? "rounded-[9px] bg-[#26326A] text-white"
                          : "border-b border-b-gray-300 text-white hover:border-[#26326A] hover:rounded-[9px] hover:bg-[#26326A]/80 hover:text-white"
                        }`}
                    >
                      <div className="font-medium uppercase">{plan.type}</div>
                      <div className="text-sm opacity-80">{plan.floorSize}</div>
                    </button>
                  );
                })}

              </div>
            </div>

            {/* Download Button */}
            {/* <div className="pt-4">
              <button className="bg-[#26326A] hover:bg-[#1E2A78] text-white px-8 py-3 rounded-full transition-colors duration-300 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Floor Plan
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}


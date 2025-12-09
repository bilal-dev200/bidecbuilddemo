
import React from "react";
import Image from "next/image";
import AppButton from "@/components/homeComp/AppButton";
import {
  COMMON_FIELD_NAMES,
  getValueByFieldNameAndPosition,
  getFieldValuesByNameWithPosition
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function DigitalMarketingSection({ data }) {
  const heading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";

  const featureTitles = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_TITLE 
  );
   const image =
     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
      "/bombaybanner.png";
  return (
    <>
      <div className="relative w-full py-20 px-6 md:px-12">


        <div
          className="
    absolute left-1/2 top-1/2 
    -translate-x-1/2 -translate-y-1/2
    w-[300px] h-[250px]
    z-0
  "
        >
          <img
            src="/ornage.png"
            alt="background shape"
            className="w-full h-full object-contain opacity-90"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-2">

          {/* ============================
            🔹 FIRST ROW (Text Left / Image Right)
           ============================ */}
          <div className="grid md:grid-cols-[40%_60%] gap-10 items-center">

            {/* LEFT TEXT */}
            <div className="pr-6">
              <h2 className="text-5xl font-bold text-[#0b2d39]">Digital Marketing</h2>

              <p className="text-gray-600 text-4xl mt-3">
                Lorem Ipsum is simply dummy
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <Image
                src="/gleedigita.png"
                alt="Dashboard"
                width={900}   // 🔥 BIGGER
                height={700}  // 🔥 BIGGER
                className="w-[95%] md:w-[100%] h-auto"
              />
            </div>

          </div>



          <div className="grid md:grid-cols-[60%_40%] gap-6 items-center">

            {/* LEFT IMAGE */}
            <div className="flex justify-center">
              <Image
                src="/gleedigita.png"
                alt="Analytics"
                width={700}     // ↑ bigger width
                height={500}    // ↑ bigger height
                className="w-[90%] md:w-[100%] h-auto"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="pr-6 px-4">
              <ul className="mt-6 space-y-3 text-gray-700 text-[17px] leading-[1.7]">
                <li>• Executed multi-channel campaigns across social media and search, reaching 500,000+ targeted parents in Karachi.</li>
                <li>• Generated 5,000+ qualified leads through SEO, paid ads, and retargeting.</li>
                <li>• Impact: 70% more inquiries, first-page STEM rankings, stronger engagement</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
      <AppButton />
    </>
  );
}

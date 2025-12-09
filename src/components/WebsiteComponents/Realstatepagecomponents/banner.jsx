// import React from 'react'
// // bg-[url('/aboutBannerImg.png')]
// const Banners = () => {
//     return (
//         <div className="bgblack bg-[url('/contactBanner.png')] bg-center w-full flex justify-start items-center text-white bg-no-repeat bg-cover min-h-screen">
//             <div className="xl:w-2/6 md:w-2/3 w-full pl-10 text-start flex flex-col gap-3">
//                 <h2 className='lg:leading-20 leading-13 lg:text-7xl text-5xl'></h2>
//                 <p className='px-5'></p>
//             </div>
//         </div>
//     )
// }

// export default Banners
// import React from "react";
// import Button from "@/components/ui/button";

// const Banners = ({main , head, des, bg }) => {
//     return (
//         <div
//             className="w-full flex justify-start items-center text-white bg-no-repeat bg-cover min-h-screen"
//             style={{ backgroundImage: `url(${bg})` }}
//         >
//             <div className="xl:w-2/4 w-full pl-10 text-start flex flex-col gap-3">
//             <span className="text-base mb-3">{main}</span>
//                 <h2 className="lg:leading-[5rem] leading-[3.5rem] lg:text-7xl text-5xl">
//                     {head}
//                 </h2>
//                 <p className="text-xl">{des}</p>
//                 <Button text="Explore Project" className="text-lg w-fit mt-6 bg-[#26326A] text-white px-10 py-2 rounded-full" />
//             </div>
//         </div>
//     );
// };

// export default Banners;
"use client";
import React from "react";
import Button from "@/components/ui/button";
import { getFieldValue } from "@/lib/utils/sectionDataHelpers";

const Banners = ({ data }) => {
  // Extract values dynamically from API data
  const main = getFieldValue(data, "banner_main") || "Newly launched";
  const head = getFieldValue(data, "banner_head") || "ALBERTO AT DUBAI HARBOUR";
  const des = getFieldValue(data, "banner_description") || "Unfold a New Life";
  const bg = getFieldValue(data, "banner_bg") || "/projectpage.png";
  console.log(data);

  return (
    <div
      className="w-full flex items-center text-white bg-no-repeat bg-cover min-h-screen relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 xl:w-2/4 w-full pl-10 text-start flex flex-col gap-4">
        <span className="uppercase tracking-widest text-sm font-light text-gray-200">
          {main}
        </span>

        <h2 className="lg:leading-[5rem] leading-[3.5rem] lg:text-7xl text-5xl">
          {head}
        </h2>

        <p className="text-lg font-light text-gray-200">{des}</p>

        <Button
          text="Learn more"
          className="text-sm w-fit mt-4 bg-[#26326A] hover:bg-[#1c254d] text-white px-6 py-2 rounded-full shadow-md transition-all"
        />
      </div>
    </div>
  );
};

export default Banners;


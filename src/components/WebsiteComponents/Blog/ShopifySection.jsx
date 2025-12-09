
// "use client";
// import React from "react";
// import Link from "next/link";
// import { Image_URL } from "@/config/constants";

// export default function ShopifySection({ title, cards }) {
//   return (
//     <div className="max-w-[1200px] mxauto md:px-0 px-5 py-16 max-w[] mx-auto container">
//       {/* Heading */}
//       <h1 className="text-3xl font-semibold text-[#0b2d39] mb-10">
//         {title}
//       </h1>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {cards?.map((card, index) => (
//           <Link href={`/blog/${card.slug}`}>
//             <div
//               key={index}
//               className="bg-white  overflow-hidden transition-all"
//             >
//               {/* <img src={card.img} className="w-full rounded-xl shadow-md h-60 object-cover" /> */}
//               <img src={`${Image_URL}${card.img}`} className="w-full rounded-[10px] shadowmd h-48" />

//               <div className="p-2">
//                 <p className="text-[#00a8a8] text-sm font-medium">{card.category}</p>

//                 <h2 className="text-base h-14 line-clamp-2 font-semibold text-gray-800 mt-2">
//                   {card.title}
//                 </h2>

//                 <p className="text-sm h-24 line-clamp-2 00 mt-2 leading-relaxed">
//                   {card.desc}
//                 </p>

//                 <div className="flex justify-between items-center mt-4 text-xs text-gray-600">
//                   <span>{card.author}</span>
//                   <span>|</span>
//                   <span>{card.date}</span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       <div className="w-full flex justify-center mt-10">
//         <button className="bg-[#0b7a7a] text-white px-8 py-2 rounded-full shadow-md hover:bg-[#095f5f] transition-all">
//           Explore More
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Image_URL } from "@/config/constants";

export default function ShopifySection({ title, cards }) {
  const [showAll, setShowAll] = useState(false);

  // Pehle 4 cards show honge, button click par sab
  const visibleCards = showAll ? cards : cards.slice(0, 4);

  return (
    <div className="max-w-[1200px] mx-auto md:px-0 px-5 py-16 container">
      
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-[#0b2d39] mb-10">
        {title}
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleCards?.map((card, index) => (
          <Link href={`/blog/${card.slug}`} key={index}>
            <div className="bg-white overflow-hidden transition-all cursor-pointer">

              <img
                src={`${Image_URL}${card.img}`}
                className="w-full rounded-[10px] shadow-md h-48 object-cover"
              />

              <div className="p-2">
                <p className="text-[#00a8a8] text-sm font-medium">{card.category}</p>

                <h2 className="text-base h-14 line-clamp-2 font-semibold text-gray-800 mt-2">
                  {card.title}
                </h2>

                <p className="text-sm h-24 line-clamp-2 mt-2 leading-relaxed">
                  {card.desc}
                </p>

                <div className="flex justify-between items-center mt-4 text-xs text-gray-600">
                  <span>{card.author}</span>
                  <span>|</span>
                  <span>{card.date}</span>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>

      {/* Explore More Button (4 se zyada ho to hi show hoga) */}
      {cards.length > 4 && !showAll && (
        <div className="w-full flex justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#0b7a7a] text-white px-8 py-2 rounded-full shadow-md hover:bg-[#095f5f] transition-all"
          >
            Explore More
          </button>
        </div>
      )}
    </div>
  );
}

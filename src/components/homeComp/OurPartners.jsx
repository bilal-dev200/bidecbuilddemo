// import React from "react";
// import "./OurPartners.css";
// import { getFieldValue, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";

// const OurPartners = ({ data }) => {
//     // Extract dynamic values
//     const sectionTitle = getFieldValue(data, 'section_title') || 'Our Partners';

//     // Extract partner images - support up to 6 partners
//     const partnerImages = [
//         getFieldValue(data, 'partner_1_image') || '/meydan.png',
//         getFieldValue(data, 'partner_2_image') || '/omniyat.png',
//         getFieldValue(data, 'partner_3_image') || '/nshama.png',
//         getFieldValue(data, 'partner_4_image'),
//         getFieldValue(data, 'partner_5_image'),
//         getFieldValue(data, 'partner_6_image'),
//     ].filter(img => img && img !== 'undefined'); // Filter out undefined/empty images

//     // If no dynamic data, use default partners
//     const defaultPartners = [
//         { img: "/meydan.png" },
//         { img: "/omniyat.png" },
//         { img: "/nshama.png" },
//         { img: "/meydan.png" },
//         { img: "/omniyat.png" },
//         { img: "/nshama.png" },
//     ];

//     const partnersData = partnerImages.length > 0 
//         ? partnerImages.map(img => ({ img }))
//         : defaultPartners;

//     // Duplicate the data so the slider loops seamlessly
//     const loopData = partnersData.concat(partnersData);

//     return (
//         <div className="partners-slider text-center">
//             <h2 className="text-3xl md:text-5xl font-bold pt-20 pb-14 mb-4">
//                 {sectionTitle}
//             </h2>

//             <div className="partners-track">
//                 {loopData.map((d, i) => (
//                     <div key={i} className="partners-slide">
//                         <img src={d.img} alt="partner logo" />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default OurPartners;

import React from "react";
import "./OurPartners.css";
import { getRobustFieldValuesByName } from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

const OurPartners = ({data}) => {
    const images = getRobustFieldValuesByName(data, "image");
    const partners = images.map((imgField, index) => ({
    img: imgField?.value || "meydan.png",
  }));


  // Duplicate for seamless slider loop
  const loopData = partners.concat(partners);

  return (
    <div className="partners-slider text-center py-10 sm:py-14">
      <h2  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
        Our Partners
      </h2>

      <div className="partners-track">
        {loopData.map((d, i) => (
          <div key={i} className="partners-slide">
            <img src={`${Image_URL}/${d.img}`} alt="partner logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;

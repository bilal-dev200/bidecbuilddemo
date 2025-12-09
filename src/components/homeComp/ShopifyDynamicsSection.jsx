
// import Image from "next/image";
// import {
//   COMMON_FIELD_NAMES,
//   getFieldValuesByNameWithPosition,
//   getValueByFieldNameAndPosition,
// } from "@/lib/utils/sectionDataHelpers";
// import { Image_URL } from "@/config/constants";

// export default function ShopifyDynamicsSection({data}) {


//     const heading =
//         getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";
    
//       const title =
//         getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TITLE, 0) || "";
    
     
    
//       const featureTitles = getFieldValuesByNameWithPosition(
//         data,
//         COMMON_FIELD_NAMES.FEATURE_TITLE
//       );
//      const featureimage = getFieldValuesByNameWithPosition(
//         data,
//         COMMON_FIELD_NAMES.FEATURE_IMAGE
//       );
    
//       const featureDescriptions = getFieldValuesByNameWithPosition(
//         data,
//         COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
//       );
       
    
//   const items = [
//     {
//       title: "Error-Free Data Sync",
//       desc: "Automated synchronization eliminates manual data entry between Shopify and Dynamics 365. This reduces costly human errors while keeping information consistent across all systems.",
//       img: "/mii.png",
//     },
//     {
//       title: "Unified Operations",
//       desc: "Centralize sales, finance, inventory, and CRM into one connected system. With real-time insights, businesses can make smarter decisions and streamline daily operations.",
//       img: "/mii.png",
//     },
//     {
//       title: "Faster Order Fulfillment",
//       desc: "Orders from Shopify flow directly into Dynamics 365 without delays. This enables quicker processing, accurate inventory updates, and faster shipping for customers.",
//       img: "/mii.png",
//     },
//     {
//       title: "Cost Efficiency",
//       desc: "Automation reduces IT overhead and minimizes manual work. Businesses save valuable time and resources while improving overall operational efficiency.",
//       img: "/mii.png",
//     },
//     {
//       title: "Global Expansion",
//       desc: "Dynamics 365 supports multi-currency, tax compliance, and multi-language features. This empowers Shopify stores to expand internationally with confidence and regulatory readiness.",
//       img: "/mii.png",
//     },
//     {
//       title: "Future-Ready Scalability",
//       desc: "The integration is designed to grow with your business. As new workflows, sales channels, or global markets emerge, your ERP and eCommerce stay aligned.",
//       img: "/mii.png",
//     },
//   ];

//   return (
//     <section className="w-full py16 bg-white">
//       {/* Heading */}
//       <div className="text-center max-w-3xl mx-auto px-4">
//         <p className="font-semibold text-black text-lg">Book a Free Consultation</p>
//         <h2 className="text-4xl font-semibold mt-3">
//           Reasons{" "}
//           <span className="text-green-600">Businesses Integrate Shopify</span>{" "}
//           with Dynamics 365
//         </h2>
//       </div>

//       {/* Cards Grid */}
//       <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-2">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="bg-gray-100 p-3 h-[110px] rounded-lg flex gap-5 items-start"
//           >
//             {/* Icon */}
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-20 h-24 object-contain"
//             />

//             {/* Text */}
//             <div>
//               <h3 className="text-lg font-semibold text-black mb-1">{item.title}</h3>
//               <p className="text-sm line-clamp-3 leading-relaxed">{item.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import Image from "next/image";
import {
  COMMON_FIELD_NAMES,
  getFieldValuesByNameWithPosition,
  getValueByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";
import AppButton from "./AppButton";

export default function ShopifyDynamicsSection({ data }) {
  // MAIN HEADING
  const heading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";

  // SUB HEADING / TITLE
  const title =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TITLE, 0) || "";

  // FEATURES
  const featureTitles = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_TITLE
  );

  const featureDescriptions = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
  );

  const featureImages = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_IMAGE
  );
  const btn =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
    "";
  const buttoncolor =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
    "";
  const btnlink =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
    "";

  // MERGED ITEMS FROM BACKEND
  const items = featureTitles?.map((feature, index) => ({
    title: feature?.value || "No Title",
    desc: featureDescriptions[index]?.value || "",
    img:
      featureImages[index]?.value
        ? `${Image_URL}${featureImages[index].value}`
        : "/placeholder.png",
  }));

  return (
    <section className="w-full py16 bg-white">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <p className="font-semibold text-black text-lg">
          {title || "Book a Free Consultation"}
        </p>

        <h2 className="text-5xl mt-3">
          {heading ? (
            <span dangerouslySetInnerHTML={{ __html: heading }} />
          ) : (
            <>
              Reasons{" "}
              <span className="text-green-600">
                Businesses Integrate Shopify
              </span>{" "}
              with Dynamics 365
            </>
          )}
        </h2>
      </div>

      {/* Cards */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-2">
        {items?.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-3 h-[110px] rounded-lg flex gap-5 items-start"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-24 object-contain"
            />

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-1">
                {item.title}
              </h3>

              <p
                className="text-sm line-clamp-3 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: item.desc || "",
                }}
              />
            </div>
          </div>
        ))}
      </div>

        <AppButton
              text={btn}
              color={buttoncolor}
              link={btnlink}
            // onClick={() => console.log("Button clicked")} 
            />
    </section>
  );
}

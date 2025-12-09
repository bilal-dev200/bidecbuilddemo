// // import React from "react";

// // const migrationData = [
// //   {
// //     item: "Products",
// //     dataWeMigrate: [
// //       "Product information",
// //       "Product Variants",
// //       "SEO metadata",
// //     ],
// //     details: [
// //       "Titles, descriptions, tags, product images, categories",
// //       "Stock control, multi-location, custom options, variants",
// //       "Meta title, meta description, handles, URLs",
// //     ],
// //   },
// //   {
// //     item: "Customers",
// //     dataWeMigrate: [
// //       "Customer information",
// //       "Customer group / tags",
// //       "Login credentials",
// //     ],
// //     details: [
// //       "Names, emails, phones, shipping & billing addresses",
// //       "Group tags for loyalty, segmentation",
// //       "Encrypted password migration where possible",
// //     ],
// //   },
// //   {
// //     item: "Orders",
// //     dataWeMigrate: ["Order history", "Transactional emails", "Order notes"],
// //     details: [
// //       "Order IDs, purchased products, quantities, totals, payment status",
// //       "Email templates, status updates, confirmations",
// //       "Special instructions and comments",
// //     ],
// //   },
// //   {
// //     item: "Content",
// //     dataWeMigrate: ["Pages", "Blogs", "SEO content"],
// //     details: [
// //       "About Us, Contact, FAQs, Policy pages",
// //       "Blog posts and authors",
// //       "Meta titles, descriptions, URLs",
// //     ],
// //   },
// //   {
// //     item: "Other Data",
// //     dataWeMigrate: ["Reviews & Discounts", "Coupons & Gift Cards"],
// //     details: [
// //       "Product & store reviews, customer testimonials",
// //       "Coupon rules and promo codes",
// //     ],
// //   },
// //   {
// //     item: "Store Settings",
// //     dataWeMigrate: ["Shipping & Payments", "Tax Settings", "Currencies"],
// //     details: [
// //       "Shipping rules, payment gateways, integration methods",
// //       "Tax configuration and regional rules",
// //       "Supported currencies and exchange formats",
// //     ],
// //   },
// // ];

// // export default function MigrationTable() {
// //   return (
// //     <section className="bg-[#052826] text-white py-16 px-6">
// //       <div className="max-w-5xl mx-auto text-center mb-10">
// //         <h2 className="text-3xl font-semibold">
// //           Data We Migrate
// //         </h2>
// //         <p className="text-lg text-[#95BF47] font-medium mt-1">
// //           From BigCommerce to Shopify
// //         </p>
// //         <p className="text-gray-300 text-sm mt-3 max-w-3xl mx-auto">
// //           We ensure seamless data migration with zero downtime, preserving all
// //           your essential eCommerce information during the switch to Shopify.
// //         </p>
// //       </div>

// //       <div className="overflow-x-auto">
// //         <table className="w-full border-collapse bg-white text-black rounded-lg overflow-hidden">
// //           <thead className="bg-[#1A7D85] text-white text-left">
// //             <tr>
// //               <th className="py-3 px-5 text-sm font-semibold">Item</th>
// //               <th className="py-3 px-5 text-sm font-semibold">Data We Migrate</th>
// //               <th className="py-3 px-5 text-sm font-semibold">Details</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {migrationData.map((row, index) => (
// //               <tr
// //                 key={index}
// //                 className={`border-b border-gray-200 hover:bg-gray-50 transition`}
// //               >
// //                 <td className="py-4 px-5 font-medium text-gray-800 align-top">
// //                   {row.item}
// //                 </td>
// //                 <td className="py-4 px-5 text-gray-700 align-top">
// //                   <ul className="list-disc ml-4">
// //                     {row.dataWeMigrate.map((data, i) => (
// //                       <li key={i}>{data}</li>
// //                     ))}
// //                   </ul>
// //                 </td>
// //                 <td className="py-4 px-5 text-gray-700 align-top">
// //                   <ul className="list-disc ml-4">
// //                     {row.details.map((detail, i) => (
// //                       <li key={i}>{detail}</li>
// //                     ))}
// //                   </ul>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </section>
// //   );
// // }
// import React from "react";

// const migrationData = [
//   {
//     item: "Products",
//     dataWeMigrate: [
//       "Product information",
//       "Product Variants",
//       "SEO metadata",
//     ],
//     details: [
//       "Titles, descriptions, tags, product images, categories",
//       "Stock control, multi-location, custom options, variants",
//       "Meta title, meta description, handles, URLs",
//     ],
//   },
//   {
//     item: "Customers",
//     dataWeMigrate: [
//       "Customer information",
//       "Customer group / tags",
//       "Login credentials",
//     ],
//     details: [
//       "Names, emails, phones, shipping & billing addresses",
//       "Group tags for loyalty, segmentation",
//       "Encrypted password migration where possible",
//     ],
//   },
//   {
//     item: "Orders",
//     dataWeMigrate: ["Order history", "Transactional emails", "Order notes"],
//     details: [
//       "Order IDs, purchased products, quantities, totals, payment status",
//       "Email templates, status updates, confirmations",
//       "Special instructions and comments",
//     ],
//   },
//   {
//     item: "Content",
//     dataWeMigrate: ["Pages", "Blogs", "SEO content"],
//     details: [
//       "About Us, Contact, FAQs, Policy pages",
//       "Blog posts and authors",
//       "Meta titles, descriptions, URLs",
//     ],
//   },
//   {
//     item: "Other Data",
//     dataWeMigrate: ["Reviews & Discounts", "Coupons & Gift Cards"],
//     details: [
//       "Product & store reviews, customer testimonials",
//       "Coupon rules and promo codes",
//     ],
//   },
//   {
//     item: "Store Settings",
//     dataWeMigrate: ["Shipping & Payments", "Tax Settings", "Currencies"],
//     details: [
//       "Shipping rules, payment gateways, integration methods",
//       "Tax configuration and regional rules",
//       "Supported currencies and exchange formats",
//     ],
//   },
// ];

// export default function MigrationTable() {
//   return (
//     <section className="bg-[#052826] text-white py-16 px-6">
//       <div className="max-w-5xl mx-auto text-center mb-10">
//         <h2 className="text-3xl font-semibold">Data We Migrate</h2>
//         <p className="text-lg text-[#95BF47] font-medium mt-1">
//           From BigCommerce to Shopify
//         </p>
//         <p className="text-gray-300 text-sm mt-3 max-w-3xl mx-auto">
//           We ensure seamless data migration with zero downtime, preserving all
//           your essential eCommerce information during the switch to Shopify.
//         </p>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse bg-white text-black rounded-lg overflow-hidden">
//           <thead className="bg-[#1A7D85] text-white text-left">
//             <tr>
//               <th className="py-3 px-5 text-sm font-semibold">Item</th>
//               <th className="py-3 px-5 text-sm font-semibold">Data We Migrate</th>
//               <th className="py-3 px-5 text-sm font-semibold">Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             {migrationData.map((row, index) => (
//               <tr
//                 key={index}
//                 className="border-b mt-10 rounded-2xl border-gray-200 hover:bg-gray-50 transition"
//               >
//                 <td className="py-4 px-5 font-medium text-gray-800 align-top w-[20%]">
//                   {row.item}
//                 </td>
//                 <td className="py-4 px-5 text-gray-700 align-top w-[30%]">
//                   {row.dataWeMigrate.map((data, i) => (
//                     <div key={i} className="flex items-start">
//                       <span className="text-[#1A7D85] font-bold mx-2">|</span>
//                       <span>{data}</span>
//                     </div>
//                   ))}
//                 </td>
//                 <td className="py-4 px-5 text-gray-700 align-top w-[50%]">
//                   {row.details.map((detail, i) => (
//                     <div key={i} className="flex items-start">
//                       <span className="text-[#1A7D85] font-bold mx-2">|</span>
//                       <span>{detail}</span>
//                     </div>
//                   ))}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// }
import React from "react";

const migrationData = [
  {
    item: "Products",
    dataWeMigrate: [
      "Product information",
      "Product Variants",
      "SEO metadata",
    ],
    details: [
      "Titles, descriptions, tags, product images, categories",
      "Stock control, multi-location, custom options, variants",
      "Meta title, meta description, handles, URLs",
    ],
  },
  {
    item: "Customers",
    dataWeMigrate: [
      "Customer information",
      "Customer group / tags",
      "Login credentials",
    ],
    details: [
      "Names, emails, phones, shipping & billing addresses",
      "Group tags for loyalty, segmentation",
      "Encrypted password migration where possible",
    ],
  },
  {
    item: "Orders",
    dataWeMigrate: ["Order history", "Transactional emails", "Order notes"],
    details: [
      "Order IDs, purchased products, quantities, totals, payment status",
      "Email templates, status updates, confirmations",
      "Special instructions and comments",
    ],
  },
  {
    item: "Content",
    dataWeMigrate: ["Pages", "Blogs", "SEO content"],
    details: [
      "About Us, Contact, FAQs, Policy pages",
      "Blog posts and authors",
      "Meta titles, descriptions, URLs",
    ],
  },
  {
    item: "Other Data",
    dataWeMigrate: ["Reviews & Discounts", "Coupons & Gift Cards"],
    details: [
      "Product & store reviews, customer testimonials",
      "Coupon rules and promo codes",
    ],
  },
  {
    item: "Store Settings",
    dataWeMigrate: ["Shipping & Payments", "Tax Settings", "Currencies"],
    details: [
      "Shipping rules, payment gateways, integration methods",
      "Tax configuration and regional rules",
      "Supported currencies and exchange formats",
    ],
  },
];

export default function MigrationTable() {
  return (
    <div className="max-w-[1200px] mx-auto mt-5">
<section className="bg-[#052826] text-white py-16 px-6 rounded-2xl">
  <div className="max-w-[1200px] mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-semibold">Data We Migrate</h2>
      <p className="text-lg text-[#95BF47] font-medium mt-1">
        From BigCommerce to Shopify
      </p>
      <p className="text-gray-300 text-sm mt-3 max-w-3xl mx-auto">
        We ensure seamless data migration with zero downtime, preserving all
        your essential eCommerce information during the switch to Shopify.
      </p>
    </div>

    {/* Custom table layout */}
    <div className="max-w-[1150px] mx-auto space-y-5">
      {/* Header */}
      <div className="grid grid-cols-[120px_300px_auto] bg-[#1A7D85] text-white rounded-t-2xl py-3 px-5 font-semibold text-sm">
        <div>Item</div>
        <div>Data We Migrate</div>
        <div>Details</div>
      </div>

      {/* Rows */}
      {migrationData.map((row, index) => (
        <div
          key={index}
          className="grid grid-cols-[120px_300px_auto] bg-white text-black rounded-2xl shadow-sm hover:shadow-md transition p-5 gap-5"
        >
          {/* Item */}
          <div className="font-medium text-gray-800">{row.item}</div>

          {/* Data We Migrate */}
          <div className="text-gray-700 space-y-2">
            {row.dataWeMigrate.map((data, i) => (
              <div key={i} className="flex items-start">
                <span className="text-[#1A7D85] font-bold mx-2">|</span>
                <span>{data}</span>
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="text-gray-700 space-y-2">
            {row.details.map((detail, i) => (
              <div key={i} className="flex items-start">
                <span className="text-[#1A7D85] font-bold mx-2">|</span>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
</div>




  );
}

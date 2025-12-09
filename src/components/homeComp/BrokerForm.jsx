// "use client";

// import Image from "next/image";
// import { getFieldValue, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";

// export default function BrokerForm({ data }) {
//   // Extract dynamic values
//   const sectionSubtitle = getFieldValue(data, 'section_subtitle') || 'Become an';
//   const sectionTitle = getFieldValue(data, 'section_title') || 'OFFICIAL PARK HOMES BROKER';
//   const image = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE) || '/brokerImage.png';
//   const submitButtonText = getFieldValue(data, 'submit_button_text') || 'Submit';
//   const confirmationText = getFieldValue(data, 'confirmation_text') || 'I Confirm That All Information Is Accurate And Documents Are Valid.';

//   return (
//     <section className="w-full flex flex-col lg:flex-row items-center justify-between min-h-screen bg-white">
//       {/* Left Side - Form */}
//       <div className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-12 flex flex-col">
//         {/* Heading */}
//         <p className="uppercase tracking-widest text-gray-600 text-sm mb-2">
//           {sectionSubtitle}
//         </p>
//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//           {sectionTitle}
//         </h2>

//         {/* Form */}
//         <form className="mt-8 space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Full Name */}
//             <div className="flex flex-col">
//               <label className="font-semibold text-gray-800 text-lg  mb-2">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Type Here"
//                 className="w-full border rounded-md px-4 py-3 text-gray-700 outline-none focus:border-[#26326A] transition-colors duration-300"
//               />
//             </div>

//             {/* Phone Number */}
//             <div className="flex flex-col">
//               <label className="text-gray-800 text-lg font-semibold mb-2">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 placeholder="Type Here"
//                 className="w-full border rounded-md px-4 py-3 text-gray-700 outline-none focus:border-[#26326A] transition-colors duration-300"
//               />
//             </div>

//             {/* Email Address */}
//             <div className="flex flex-col">
//               <label className="text-gray-800 text-lg font-semibold mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 placeholder="Type Here"
//                 className="w-full border rounded-md px-4 py-3 text-gray-700 outline-none focus:border-[#26326A] transition-colors duration-300"
//               />
//             </div>

//             {/* Country */}
//             <div className="flex flex-col">
//               <label className="text-gray-800 text-lg font-semibold mb-2">
//                 Country
//               </label>
//               <select className="w-full border rounded-md px-4 py-3 text-gray-700 outline-none focus:border-[#26326A] transition-colors duration-300">
//                 <option>Select One</option>
//                 <option>Pakistan</option>
//                 <option>USA</option>
//                 <option>UK</option>
//                 <option>Canada</option>
//               </select>
//             </div>
//           </div>

//           {/* Message */}
//           <div className="flex flex-col">
//             <label className="text-gray-800 text-lg font-semibold  mb-2">
//               Message
//             </label>
//             <textarea
//               rows={4}
//               placeholder="Type Here"
//               className="w-full border rounded-md px-4 py-3 text-gray-700 outline-none focus:border-[#26326A] transition-colors duration-300"
//             ></textarea>
//           </div>

//           {/* Checkbox */}
//           <div className="flex items-center space-x-2">
//             <input type="checkbox" className="w-4 h-4 border-gray-400" />
//             <p className="text-gray-600 text-sm">
//               {confirmationText}
//             </p>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-[#26326A] hover:bg-[#1E2A78] text-white px-8 py-3 rounded-full transition-colors duration-300"
//           >
//             {submitButtonText}
//           </button>
//         </form>
//       </div>

//       {/* Right Side - Image */}
//       <div className="w-full lg:w-1/2 relative h-[600px] sm:h-[400px] lg:h-auto min-h-[800px]">
//         <Image
//           src={image}
//           alt="Broker"
//           fill
//           priority
//           className="object-contain lg:rounded-l-2xl"
//         />
//       </div>
//     </section>
//   );
// }
"use client";

import { Image_URL } from "@/config/constants";
import { COMMON_FIELD_NAMES, getValueByFieldNameAndPosition } from "@/lib/utils/sectionDataHelpers";
import Image from "next/image";

export default function BrokerForm({ data }) {
  // Extract dynamic values using position-based approach
  const sectionSubtitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) || 'Become an';
  const sectionTitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || 'OFFICIAL PARK HOMES BROKER';
  const image = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) || '/brokerImage.png';
  const submitButtonText = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON, 0) || 'Submit';
  const confirmationText = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.CONFIRMATION_TEXT, 0) || 'I Confirm That All Information Is Accurate And Documents Are Valid.';

  // console.log('data', data);

  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between min-h-screen bg-white">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-12 flex flex-col">
        {/* Heading */}
        <p className="uppercase tracking-widest text-gray-600 text-sm mb-2">
          {sectionSubtitle}
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          {sectionTitle}
        </h2>

        {/* Form */}
        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-800 text-lg  mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Type Here"
                className="w-full border rounded-md px-4 py-3 text-gray-700 outline-none focus:border-[#26326A] transition-colors duration-300"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label className="text-gray-800 text-lg font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Type Here"
                className="w-full border rounded-md px-4 py-3 text-gray-700 outline-none focus:border-[#26326A] transition-colors duration-300"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col">
              <label className="text-gray-800 text-lg font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Type Here"
                className="w-full border rounded-md px-4 py-3 text-gray-700 outline-none focus:border-[#26326A] transition-colors duration-300"
              />
            </div>

            {/* Country */}
            <div className="flex flex-col">
              <label className="text-gray-800 text-lg font-semibold mb-2">
                Country
              </label>
              <select className="w-full border rounded-md px-4 py-3 text-gray-700 outline-none focus:border-[#26326A] transition-colors duration-300">
                <option>Select One</option>
                <option>Pakistan</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-gray-800 text-lg font-semibold  mb-2">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Type Here"
              className="w-full border rounded-md px-4 py-3 text-gray-700 outline-none focus:border-[#26326A] transition-colors duration-300"
            ></textarea>
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 border-gray-400" />
            <p className="text-gray-600 text-sm">{confirmationText}</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#26326A] hover:bg-[#1E2A78] text-white px-8 py-3 rounded-full transition-colors duration-300"
          >
            {submitButtonText}
          </button>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="w-full flex flex-col items-end lg:w-1/2 relative h-[600px] sm:h-[400px] lg:h-[800px] min-h-[600px]">
        <img
          src={`${Image_URL}/${image}`}
          alt="Broker"
          className="object-contain lg:rounded-l-2xl w-full h-full"
        />

      </div>
    </section>
  );
}

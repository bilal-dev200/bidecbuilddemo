// "use client";
// import Image from "next/image";
// import { FaLinkedin } from "react-icons/fa";
// import { Image_URL } from "@/config/constants";

// export default function LeadershipSection({ data }) {
//   const results = data?.results || [];

//   // 👉 Heading & Description
//   const heading =
//     results.find((r) => r.section_form_field_id === 49)?.value ||
//     "Meet Our Leadership";

//   const description =
//     results.find((r) => r.section_form_field_id === 50)?.value ||
//     "At Bidec, our leadership team is the driving force behind our vision and innovation...";

//   // 👉 Leaders (IDs: 51 = name, 52 = role, 53 = image, 54 = linkedin)
//   const leaderNames = results.filter((r) => r.section_form_field_id === 51);
//   const leaderRoles = results.filter((r) => r.section_form_field_id === 52);
//   const leaderImages = results.filter((r) => r.section_form_field_id === 53);
//   const leaderLinks = results.filter((r) => r.section_form_field_id === 54);

//   const leaders = leaderNames.map((n, i) => ({
//     name: n.value,
//     role: leaderRoles[i]?.value || "Role goes here",
//     img: leaderImages[i]?.value || "/leader1.png",
//     linkedin: leaderLinks[i]?.value || "#",
//   }));

//   return (
//     <section className="py-12 mt-10 px6mdpx-12 text-center mx-auto container max-w-[1200px]">
//       <h2 className="text-6xl font-bold">
//         {heading.split(" ")[0]}{" "}
//         <span className="text-teal-600">{heading.split(" ").slice(1).join(" ")}</span>
//       </h2>
//       <p className="mt-4 text-gray-600 max-w-4xl text-sm sm:text-base md:text-lg mx-auto">
//         {description}
//       </p>

//       {/* Leader Cards */}
//       <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {leaders.map((leader, idx) => {
//           const nameParts = leader.name.split(" ");
//           return (
//             <div
//               key={idx}
//               className="rounded-xl bg-white transition overflow-hidden flex flex-col"
//             >
//               {/* Leader Image */}
//               <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
//                 <Image
//                   src={`${Image_URL}/${leader.img}`}
//                   alt={leader.name}
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </div>

//               {/* Name + LinkedIn */}
//               <div className="flex justify-between items-center p-4">
//                 <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-left">
//                   {nameParts[0]}{" "}
//                   {nameParts[1] && <span className="font-bold">{nameParts[1]}</span>}{" "}
//                   {nameParts.slice(2).join(" ")}
//                 </h3>
//                 <a
//                   href={leader.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 flex items-center justify-center rounded-full border border-black hover:bg-teal-600 hover:text-white transition"
//                 >
//                   <FaLinkedin size={20} />
//                 </a>
//               </div>

//               {/* Role */}
//               <p className="text-gray-700 text-sm sm:text-base md:text-base lg:text-lg px-4 pb-4 text-left">
//                 {leader.role}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
"use client";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { Image_URL } from "@/config/constants";
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  getFieldValuesByNameWithPosition,
  getValueByFieldNameAndPosition
} from "@/lib/utils/sectionDataHelpers";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AppButton from "./AppButton";

export default function LeadershipSection({ data }) {
  if (!data) return null;

  // Heading & Description dynamically
  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "Meet Our Leadership";
  const description =
    getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION) ||
    "At Bidec, our leadership team is the driving force behind our vision and innovation...";

  // Extract leader fields dynamically
  const leaderNames = getFieldValuesByNameWithPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE);
  const leaderRoles = getFieldValuesByNameWithPosition(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION);
  const leaderImages = getFieldValuesByNameWithPosition(data, COMMON_FIELD_NAMES.FEATURE_IMAGE);
  const leaderLinks = getFieldValuesByNameWithPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK);
  const btn =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
    "";
  const buttoncolor =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
    "";
  const btnlink =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
    "";
  // Map objects to plain strings using `.value`
  const leaders = leaderNames.map((nameObj, i) => ({
    name: nameObj?.value || "Leader Name",
    role: leaderRoles[i]?.value || "Role goes here",
    img: leaderImages[i]?.value || "/leader1.png",
    linkedin: leaderLinks[i]?.value || "#",
  }));
  console.log("leaders", leaders);

  return (
    <section id="about" className="p- mdmt-28 px6mdpx-12 text-center mx-auto container max-w-[1150px]">
      <div className="md:block hidden">
      <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl "  dangerouslySetInnerHTML={{ __html: heading }}
>
        {/* {heading.split(" ").slice(0, -1).join(" ")}{" "}
        <span className="ebrima-bold text-[#1A7D85]">
          {heading.split(" ").slice(-1).join(" ")}
        </span> */}

      </h2>

      <p className="mt-4 mb-8 font-medium max-w-5xl text-sm sm:text-base md:text-[16px] mx-auto">
        {description}
      </p>

      <div className="mt md:grid  hidden md:grid-cols-3 md:px-7 px-14 lg:grid-cols-3 gap-4">
        {leaders.map((leader, idx) => (
          <div key={idx} className="rounded-xl bg-white transition overflow-hidden flex flex-col">
            <div className="relative w-full  h64 smh-72 md:h[400px] lg: h-[450px]">
              <Image
                src={`${Image_URL}/${leader.img}`}
                alt={leader.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className="flex justify-between md:items-center lg:mt-3 mt-3 mx-auto w-[220px] lg:w-[300px] w11/12">
              {/* Left side: Name + Role stacked vertically */}
              <div className="lg:block md:block  flex flex-col text-left  leading-none">
                <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium">
                  {(() => {
                    const words = leader.name?.split(" ") || [];
                    return (
                      <>
                        {words[0]}{" "}
                        {words[1] && <strong className="font-semibold">{words[1]}</strong>}{" "}
                        {words.slice(2).join(" ")}
                      </>
                    );
                  })()}
                </h2>

                <p className="text-gray-700 text-sm sm:text-base md:text-base lg:text-lg mt-1">
                  {leader.role}
                </p>
              </div>

              {/* Right side: LinkedIn icon center aligned */}
              <div className="lg:block md:block  flex items-center justify-center">
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-black hover:bg-[#1A7D85] hover:text-white transition"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>

              {/* <div className="block md:hidden  lg:hidden items-center mt-4 mb-6 text-center px-10">
              <h3 className="text-lg sm:text-xl font-semibold">{leader.name}</h3>
              <p className="text-gray-700 text-sm sm:text-base mt-1">
                {leader.role}
              </p>
              {leader.linkedin && (
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[#1A7D85]"
                >
                  <FaLinkedin size={20} />
                </a>
              )}
            </div> */}
            </div>



            {/* <p className="text-gray-700 lg:ml-6 text-sm sm:text-base md:text-base lg:text-lg   text-left">
              {leader.role}
            </p> */}
          </div>
        ))}
      </div>
      </div>
   {/* mobile layout */}
   {/* <div className="block md:hidden bg-white p-4 text-center">
        <h2 className="text-2xl mb-2">
          {heading.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="ebrima-bold text-[#1A7D85]">
            {heading.split(" ").slice(-1).join(" ")}
          </span>
        </h2>

        <p className="text-[11px] leading-relaxed mb-4">{description}</p>

        <div className="flex justify-between text-left items-center">
          {leaders.map((leader, idx) => (
            <div key={idx} className="p-2 w-[33.33%]">
             <div className="w-full h-44 mx-auto rounded-xl overflow-hidden">
  <img
    src={`${Image_URL}/${leader.img}`}
    alt={leader.name}
    className="w-full h-full object-cover"
  />
</div>

              <div className="flex items-center justify-between mt-2">
                <h3 className="text-[11px] font-semibold">{leader.name}</h3>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex items-center justify-center rounded-full border border-black hover:bg-[#1A7D85] hover:text-white transition"
                >
                  <FaLinkedin size={12} />
                </a>
              </div>
              <p className="text-gray-500 text-[8px]">{leader.role}</p>
            </div>
          ))}
        </div>
      </div> */}
       <div className="block md:hidden text-center px-4 py-6 bg-transparent">
      {/* Heading */}
      <h2 className="text-2xl mb-2             dangerouslySetInnerHTML={{ __html: heading }}">
        {/* {heading.split(" ").slice(0, -1).join(" ")}{" "}
        <span className="ebrima-bold text-[#1A7D85]">
          {heading.split(" ").slice(-1).join(" ")}
        </span> */}

      </h2>

      {/* Description */}
      <p className="text-[11px] leading-relaxed mb-5">{description}</p>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={16}
        slidesPerView={1}
        className="w-full"
      >
        {leaders.map((leader, idx) => (
          <SwiperSlide key={idx}>
            {/* Image Section */}
            <div className="mx-auto w-[98%] ml-4 h-[550px] sm:h[460px] rounded-xl overflow-hidden">
              <img
                src={`${Image_URL}/${leader.img}`}
                alt={leader.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Section (Below Image) */}
            <div className="text-left px-3 mt-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl px-2 font-semibold">{leader.name}</h3>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-black hover:bg-[#1A7D85] hover:text-white transition"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
              <p className="text-gray-500 px-2 text-[13px]">{leader.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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

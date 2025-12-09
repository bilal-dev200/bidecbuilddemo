// import Image from "next/image";
// import {
//   COMMON_FIELD_NAMES,
//   getValueByFieldNameAndPosition,
//   getFieldValuesByNameWithPosition,
// } from "@/lib/utils/sectionDataHelpers";
// import { Image_URL } from "@/config/constants";

// export default function ChallengesSection({data}) {
//         const featureTitles = getFieldValuesByNameWithPosition(
//             data,
//             COMMON_FIELD_NAMES.FEATURE_TITLE
//         );
    
//         const featureDescriptions = getFieldValuesByNameWithPosition(
//             data,
//             COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
//         );
    
//         const heading =
//             getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";
    
//         const title =
//             getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TITLE, 0) || "";

//       const image =
//                     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
//                     "/bombaybanner.png";
//     const challenges = [
//         {
//             title: "Outdated Website:",
//             desc: "A basic website with poor UX and low visibility, limiting reach and engagement."
//         },
//         {
//             title: "Manual Processes:",
//             desc: "Student and parent management was handled manually, causing missed follow-ups and inefficiencies."
//         },
//         {
//             title: "Lack of Mobile Engagement:",
//             desc: "No mobile app existed to connect parents and learners effectively."
//         },
//         {
//             title: "Weak Marketing Presence:",
//             desc: "Minimal digital marketing reduced visibility and slowed new enrollments."
//         }
//     ];

//     return (
//         <section className="w-full py-16 px-6 md:px-16">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

//                 {/* LEFT SIDE TEXT */}
//                 <div>
//                     <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
//                         Challenges Faced by{" "}
                       
//                     </h2>

//                     <p className=" font-bold text-lg mb-6">
//                         Before partnering with Bidec Solutions, GleeGather was struggling with:
//                     </p>

//                     {/* RENDER FROM ARRAY */}
//                     <ul className="space-y-4  ml-6">
//                         {challenges.map((item, index) => (
//                             <li key={index}>
//                                 <span className="font-semibold">{item.title}</span><br />
//                                 <span className="text-sm">{item.desc}</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* RIGHT SIDE IMAGE */}
//                 <div className="flex justify-center relative">
//                     <Image
//                         src="/gleegeather.png"
//                         alt="GleeGather UI Screens"
//                         width={500}
//                         height={600}
//                     />
//                 </div>

//             </div>
//         </section>
//     );
// }
import Image from "next/image";
import {
  COMMON_FIELD_NAMES,
  getValueByFieldNameAndPosition,
  getFieldValuesByNameWithPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function ChallengesSection({ data }) {
  // Dynamic heading and title
  const heading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";
  const title =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TITLE, 0) || "";

  // Dynamic image
  const image =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
    "/gleegeather.png";

  // Dynamic features (challenges)
  const featureTitles = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_TITLE
  );
  const featureDescriptions = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
  );

  // Combine titles and descriptions into an array
  const challenges = featureTitles.map((titleItem, index) => ({
    title: titleItem.value,
    desc: featureDescriptions[index]?.value || "",
  }));

  return (
    <section className="w-full py16 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE TEXT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight"dangerouslySetInnerHTML={{ __html: heading }}/>
            {/* {heading || "Challenges Faced"}
          </h2> */}

          <p className="font-bold text-lg mb-6">
            {title || "Before partnering with Bidec Solutions, GleeGather was struggling with:"}
          </p>

          {/* RENDER DYNAMIC CHALLENGES */}
          <ul className="space-y-4 ml-6">
            {challenges.map((item, index) => (
              <li key={index}>
                <span className="font-semibold">{item.title}</span>
                <br />
                <span className="text-sm">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center relative">
          <Image
                          src={`${Image_URL}/${image}`}
            // alt={heading || "Challenge Image"}
            width={500}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}

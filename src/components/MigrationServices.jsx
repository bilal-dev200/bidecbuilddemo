import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaStar } from "react-icons/fa"; // example icon
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  getRobustFieldValuesByName,
  getFieldValuesByNameWithPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function MigrationServices(data) {
      const section = data.data; 

  const scrollRef = useRef(null);
console.log(data,"nahi ahr ahai ")
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  const cards = [
    {
      title: "Pre-Migration Audit & Strategy",
      description:
        "Every successful migration begins with a clear roadmap. Our team conducts a comprehensive audit of your existing WooCommerce store.",
      bullets: [
        "No features or functionalities are missed",
        "Proper mapping of collections, menus, redirects",
        "Compatibility check with Shopify integrations",
      ],
    },
    {
      title: "Store Migration",
      description:
        "We carefully transfer your online store from WooCommerce to Shopify without downtime. Your Shopify store will retain the same structure.",
      bullets: [
        "Complete store migration",
        "Product & category migration",
        "Redirect setup to maintain SEO value",
        "Shopify store setup & assistance",
      ],
    },
    {
      title: "Shopify Theme Development",
      description:
        "We build custom Shopify themes optimized for conversions, SEO and performance.",
      bullets: [
        "Pixel-perfect theme",
        "Fully responsive layouts",
        "Shopify-native UI enhancements",
        "Speed & SEO optimization",
      ],
    },
    {
      title: "Shopify Theme Development",
      description:
        "We build custom Shopify themes optimized for conversions, SEO and performance.",
      bullets: [
        "Pixel-perfect theme",
        "Fully responsive layouts",
        "Shopify-native UI enhancements",
        "Speed & SEO optimization",
      ],
    },
    {
      title: "Shopify Theme Development",
      description:
        "We build custom Shopify themes optimized for conversions, SEO and performance.",
      bullets: [
        "Pixel-perfect theme",
        "Fully responsive layouts",
        "Shopify-native UI enhancements",
        "Speed & SEO optimization",
      ],
    },
  ];
  const heading = getFieldValue(section, COMMON_FIELD_NAMES.HEADING) || "";
  const description =
    getFieldValue(section, COMMON_FIELD_NAMES.DESCRIPTION) || "";
const list1 = getRobustFieldValuesByName(
    section,
    COMMON_FIELD_NAMES.LIST1
  );
  console.log("LIST 1", list1);

  const list2 = getRobustFieldValuesByName(
    section,
    COMMON_FIELD_NAMES.LIST2
  );

  const list3 = getRobustFieldValuesByName(
    section,
    COMMON_FIELD_NAMES.LIST3
  );

  const list4 = getRobustFieldValuesByName(
    section,
    COMMON_FIELD_NAMES.LIST4
  );
  const list5 = getRobustFieldValuesByName(
    section,
    COMMON_FIELD_NAMES.LIST5
  );
  const list6 = getRobustFieldValuesByName(
    section,
    COMMON_FIELD_NAMES.LIST6
  );
  // ⭐ Feature Fields (Dynamic)
  const featureTitles = getFieldValuesByNameWithPosition(
    section,
    COMMON_FIELD_NAMES.FEATURE_TITLE
  );
    const featureIcons = getFieldValuesByNameWithPosition(
    section,
    COMMON_FIELD_NAMES.FEATURE_IMAGE
  );

  const featureDescriptions = getFieldValuesByNameWithPosition(
    section,
    COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
  );
const dynamicCards = featureTitles.map((title, idx) => ({
  title: title?.value || "No Title",
  description: featureDescriptions[idx]?.value || "No Description",
  icon: featureIcons[idx]?.value || null, // ⭐ ICON ADDED
  bullets:
    idx === 0
      ? list1
      : idx === 1
      ? list2
      : idx === 2
      ? list3
      : idx === 3
      ? list4
      : idx === 4
      ? list5
      : list6,
}));

  return (
    <div className="w-full py16 max-w-[1200px] mx-auto  bg-white">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-black" dangerouslySetInnerHTML={{ __html: heading }}>
        </h2>
      </div>

    <div
  ref={scrollRef}
  className="flex gap-6 overflow-x-auto px-10 mt-10 scroll-smooth migration-scrollbar-hide"
>
  {/* {cards.map((card, idx) => (
    <div
      key={idx}
      className="group bg-white text-black w-[360px] mb-10 flex-shrink-0 p-8 rounded-2xl shadow-lg hover:bg-[#95BF47] hover:text-white transition-all duration-300"
      style={{ minHeight: "400px" }}
    >
      <div className="mb-4 text-3xl text-[#95BF47] group-hover:text-white flex justify-left">
        {card.icon || <FaStar />}
      </div>

      <h3 className="text-xl font-bold mb-3 text-left">{card.title}</h3>

      <p className="text-sm opacity-90 text-left">{card.description}</p>

      <ul className="mt-4 text-sm space-y-2 list-disc list-inside">
        {card.bullets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  ))} */}
  {dynamicCards.map((card, idx) => (
  <div
    key={idx}
    className="group bg-white text-black w-[360px] mb-10 flex-shrink-0 p-8 rounded-2xl shadow-lg hover:bg-[#95BF47] hover:text-white transition-all duration-300"
    style={{ minHeight: "400px" }}
  >
 <div className="mb-4 text-3xl text-[#95BF47] group-hover:text-white flex justify-left">
  {card.icon ? (
    <img
      src={`${Image_URL}${card.icon}`}
      alt="feature icon"
      className="w-10 h-10 object-contain"
    />
  ) : (
    <FaStar />
  )}
</div>


    <h3 className="text-xl font-bold mb-3 text-left">{card.title}</h3>

    <p className="text-sm opacity-90 text-left">{card.description}</p>

    <ul className="mt-4 text-sm space-y-2 list-disc list-inside">
      {card.bullets?.map((item, i) => (
        <li key={i}>{item?.value}</li>
      ))}
    </ul>
  </div>
))}

</div>
{/* Arrow Buttons */}
<div className="flex justify-center gap-4 mt-6">
  <button
    onClick={scrollLeft}
    className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-200 transition"
  >
    <ChevronLeft className="w-5 h-5 text-black" />
  </button>

  <button
    onClick={scrollRight}
    className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-200 transition"
  >
    <ChevronRight className="w-5 h-5 text-black" />
  </button>
</div>

    </div>
  );
}

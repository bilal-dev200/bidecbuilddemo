import { FaHandshake, FaBullhorn, FaListOl, FaUsersCog } from "react-icons/fa";

export default function PartnerSection() {
  const features = [
    {
      icon: <FaHandshake className="text-3xl md:text-4xl text-[#1e2b50]" />,
      title: "Trusted Real Estate Brand",
      desc: "Built on transparency and credibility, we’ve earned the confidence of investors and developers alike. Our name adds value.",
    },
    {
      icon: <FaBullhorn className="text-3xl md:text-4xl text-[#1e2b50]" />,
      title: "Marketing-First Approach",
      desc: "From online visibility to offline campaigns — we support you with digital ads, content strategy, event promotions, and brand positioning tailored to the Dubai market.",
    },
    {
      icon: <FaListOl className="text-3xl md:text-4xl text-[#1e2b50]" />,
      title: "No Listing, Just Strategy",
      desc: "We help drive inquiries through curated promotions, landing pages, and marketing funnels — without listing your property directly on our website.",
    },
    {
      icon: <FaUsersCog className="text-3xl md:text-4xl text-[#1e2b50]" />,
      title: "Dedicated Support Team",
      desc: "Get guidance from our experienced real estate and marketing experts who are ready to assist you at every step — from planning to execution.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 max-w-[1200px] mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-10 sm:mb-12">
        <h4 className="text-xs sm:text-sm tracking-widest text-[#3949ab] font-semibold mb-2">
          YOUR GROWTH, OUR STRATEGY
        </h4>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e2b50] mb-4">
          Why Partner With ParkHome
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          We're not just promoters — we're your marketing partners in real estate success.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {features.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-start text-left bg-white p-4 sm:p-5 rounded-lg hover:shadow-md transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-[#1e2b50] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

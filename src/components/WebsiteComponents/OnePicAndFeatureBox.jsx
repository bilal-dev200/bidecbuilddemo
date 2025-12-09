import Image from "next/image";
import { FaGift, FaChartLine, FaHandsHelping, FaLandmark } from "react-icons/fa";

export default function OnePicAndFeatureBox() {
  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-[1200px] mx-auto px-6 py-12 relative">
      {/* Left Image with Overlay */}
      <div className="relative w-full md:w-full h-72 md:h-[420px] rounded-lg ">
        <Image
          src="/careerImage.png"
          alt="Skyscrapers"
          fill
          className="object-cover"
        />

        {/* Feature Box Overlay */}
        <div
          className="absolute bottom-[-60px] left-1/2 
                flex gap-6 bg-[#F8F8F8] shadow-lg rounded-xl p-6 
                max-w-full w-full z-10"
        >
          {[
            {
              icon: <FaGift className="text-xl" />,
              title: "Competitive Packages",
              desc: "From mentorship to continuous learning, we invest in your professional development every step of the way.",
            },
            {
              icon: <FaChartLine className="text-xl" />,
              title: "Growth-Oriented Environment",
              desc: "Opportunities to excel and expand your skills.",
            },
            {
              icon: <FaHandsHelping className="text-xl" />,
              title: "Flexible & Supportive Culture",
              desc: "We support you in balancing work and life.",
            },
            {
              icon: <FaLandmark className="text-xl" />,
              title: "Work on Landmark Projects",
              desc: "Be part of projects that shape skylines.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex text-black flex-col items-start gap-2 flex-1"
            >
              {item.icon}
              <h2 className="font-medium text-black text-lg">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full z-2 md:w-full mt-16 md:mt-0">
        <h4 className="text-sm tracking-widest text-gray-500 font-semibold mb-2">
          WORK, GROW, SUCCEED.
        </h4>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e2b50] mb-4">
          Why Choose a Career at Park Home?
        </h2>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          We don’t just develop properties — we develop people. At Park Home,
          you’ll thrive in a culture that values curiosity, collaboration, and
          continuous growth.
        </p>
      </div>
    </div>
  );
}

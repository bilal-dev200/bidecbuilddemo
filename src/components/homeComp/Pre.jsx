import React from "react";
import { FaChartBar, FaBullhorn, FaPlay, FaTachometerAlt, FaUserCheck, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaChartBar size={28} />,
    title: "Market & Competitor Research",
    desc: "Our Solution: Conduct in-depth insights to help you highlight key differentiators and identify opportunities.",
  },
  {
    icon: <FaBullhorn size={28} />,
    title: "Go-to-Market Strategy",
    desc: "Use Case: Define marketing and acquisition tactics before launch to maximize early user traction.",
  },
  {
    icon: <FaPlay size={28} />,
    title: "App Store Optimization (ASO) Strategy",
    desc: "Use Case: Ensure visibility with keyword strategies and engaging visuals for your app listing.",
  },
  {
    icon: <FaTachometerAlt size={28} />,
    title: "Performance & Load Testing",
    desc: "Use Case: Ensure stability and performance under real-world load to guarantee quality user experience.",
  },
  {
    icon: <FaUserCheck size={28} />,
    title: "Beta Testing & User Feedback",
    desc: "Use Case: Collect valuable insights and fix usability issues before full public release.",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Security & Compliance Checks",
    desc: "Use Case: Verify data safety, app compliance, and adherence to regional regulations.",
  },
];

const Pre = () => {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Pre-Launch Services <span className="text-teal-600">We Offer</span>
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          Launching a mobile app requires more than just development. At this
          stage, our holistic pre-launch approach combines in-depth research,
          strategy, and optimization services to ensure app performance,
          quality, and market readiness.
        </p>
      </div>

      {/* Center image */}
      <div className="relative flex flex-col items-center justify-center mb-16">
        <img
          src="/prelaunch.png" // replace with your image path
          alt="Phone Mockup"
          className="w-56 md:w-72 drop-shadow-2xl"
        />
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-5 rounded-xl hover:shadow-lg transition-shadow"
          >
            <div className="bg-teal-600 text-white w-14 h-14 flex items-center justify-center rounded-full mb-4">
              {service.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pre;

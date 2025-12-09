"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function ServiceModels() {
  const controls = useAnimation();

  useEffect(() => {
    const loop = async () => {
      while (true) {
        await controls.start("visible");
        await new Promise((r) => setTimeout(r, 4000));
        await controls.start("hidden");
      }
    };
    loop();
  }, [controls]);

  // Variants
  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.4, type: "spring", stiffness: 200 },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4 + 0.4, duration: 0.6, ease: "easeOut" },
    }),
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: i * 0.4 + 0.5,
        duration: 1.2,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white overflow-hidden px-4">
      <div className="relative w-full max-w-[800px] flex justify-center items-center flex-col lg:flex-row lg:h-[500px]">
        {/* Center Circle */}
        <motion.div
          className="relative z-10 w-50 h-50 border-[10px] border-[#1A7D85] rounded-full flex justify-center items-center text-[#1A7D85] shadow-xl"
          variants={circleVariants}
          initial="hidden"
          animate={controls}
          custom={0}
        >
          <img src="/setting.png" className="w-20" alt="settings" />
        </motion.div>

        {/* SVG CONNECTORS — only show on desktop */}
        <div className="hidden lg:block">
          {/* LEFT THREAD */}
          <motion.svg
            className="absolute -left-[1rem] top-[200px] rotate-[180deg]"
            width="330"
            height="118"
            viewBox="0 0 530 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={pathVariants}
            initial="hidden"
            animate={controls}
            custom={1}
          >
            <motion.path
              d="M4.8252 115C28.4684 62.247 118.997 -30.5838 236.825 20.1201C384.11 83.5 476.363 84.1018 524.825 8.551"
              stroke="url(#paint0_linear_left)"
              strokeWidth="10"
              variants={pathVariants}
              custom={1}
            />
            <defs>
              <linearGradient
                id="paint0_linear_left"
                x1="-5.6748"
                y1="106.5"
                x2="492.825"
                y2="34"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1A7D85" />
                <stop offset="0.27" stopColor="#1A7D85" />
                <stop offset="0.45" stopColor="#030D0E" />
                <stop offset="0.6" stopColor="#1A7D85" />
                <stop offset="0.9" stopColor="#030D0E" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* RIGHT THREAD */}
          <motion.svg
            className="absolute right-[0.5rem] top-[228px]"
            width="330"
            height="118"
            viewBox="0 0 530 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={pathVariants}
            initial="hidden"
            animate={controls}
            custom={2}
          >
            <motion.path
              d="M4.8252 115C28.4684 62.247 118.997 -30.5838 236.825 20.1201C384.11 83.5 476.363 84.1018 524.825 8.551"
              stroke="url(#paint0_linear_right)"
              strokeWidth="10"
              variants={pathVariants}
              custom={2}
            />
            <defs>
              <linearGradient
                id="paint0_linear_right"
                x1="-5.6748"
                y1="106.5"
                x2="492.825"
                y2="34"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1A7D85" />
                <stop offset="0.27" stopColor="#1A7D85" />
                <stop offset="0.45" stopColor="#030D0E" />
                <stop offset="0.6" stopColor="#1A7D85" />
                <stop offset="0.9" stopColor="#030D0E" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* BOTTOM THREAD */}
          <motion.svg
            className="absolute left-[23rem] top-[21.25rem] rotate-180"
            width="67"
            height="100"
            viewBox="0 0 67 163"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={pathVariants}
            initial="hidden"
            animate={controls}
            custom={3}
          >
            <motion.path
              d="M0.325195 157.5C29.9827 155.558 77.2143 89.5695 55.8252 1.5"
              stroke="url(#paint0_linear_bottom)"
              strokeWidth="10"
              variants={pathVariants}
              custom={3}
            />
            <defs>
              <linearGradient
                id="paint0_linear_bottom"
                x1="61.8252"
                y1="41"
                x2="-3.67479"
                y2="161"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.02" stopColor="#1A7D85" />
                <stop offset="0.36" stopColor="#030D0E" />
                <stop offset="0.65" stopColor="#1A7D85" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* CIRCLES */}
        {/* LEFT (Top in mobile) */}
        <motion.div
          className="flex flex-col items-center lg:absolute lg:-left-[6rem] lg:top-[18rem] mt-10 lg:mt-0"
          variants={circleVariants}
          initial="hidden"
          animate={controls}
          custom={1}
        >
          <div className="w-24 h-24 border-[6px] border-[#1A7D85] rounded-full flex justify-center items-center text-[#1A7D85]">
            <img src="/animatedImg1.png" className="w-10" alt="Fixed Model" />
          </div>
          <motion.p
            className="text-sm font-semibold mt-3 text-gray-900 text-center"
            variants={textVariants}
            initial="hidden"
            animate={controls}
            custom={1}
          >
            Fixed Project Model
          </motion.p>
          <motion.p
            className="text-xs text-gray-600 text-center w-[180px]"
            variants={textVariants}
            initial="hidden"
            animate={controls}
            custom={1.5}
          >
            Best for small companies with clear requirements, scope, and delivery timelines.
          </motion.p>
        </motion.div>

        {/* RIGHT (Middle in mobile) */}
        <motion.div
          className="flex flex-col items-center lg:absolute lg:-right-[6.28rem] lg:top-[15rem] mt-10 lg:mt-0"
          variants={circleVariants}
          initial="hidden"
          animate={controls}
          custom={2}
        >
          <div className="w-24 h-24 border-[6px] border-[#1A7D85] rounded-full flex justify-center items-center text-[#1A7D85]">
            <img src="/animatedImg2.png" className="w-10" alt="Time Model" />
          </div>
          <motion.p
            className="text-sm font-semibold mt-3 text-gray-900 text-center"
            variants={textVariants}
            initial="hidden"
            animate={controls}
            custom={2}
          >
            Time & Material Model
          </motion.p>
          <motion.p
            className="text-xs text-gray-600 text-center w-[160px]"
            variants={textVariants}
            initial="hidden"
            animate={controls}
            custom={2.5}
          >
            Pay only for hours used, ideal for evolving apps.
          </motion.p>
        </motion.div>

        {/* BOTTOM (Last in mobile) */}
        <motion.div
          className="flex flex-col items-center lg:absolute lg:top-[27rem] mt-10 lg:mt-0"
          variants={circleVariants}
          initial="hidden"
          animate={controls}
          custom={3}
        >
          <div className="w-24 h-24 border-[6px] border-[#1A7D85] rounded-full flex justify-center items-center text-[#1A7D85]">
            <img src="/animatedImg3.png" className="w-10" alt="Dedicated Model" />
          </div>
          <motion.p
            className="text-sm font-semibold mt-3 text-gray-900 text-center"
            variants={textVariants}
            initial="hidden"
            animate={controls}
            custom={3}
          >
            Dedicated Team Model
          </motion.p>
          <motion.p
            className="text-xs text-gray-600 text-center w-[180px]"
            variants={textVariants}
            initial="hidden"
            animate={controls}
            custom={3.5}
          >
            A full-time team of developers working as an extension of your company.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

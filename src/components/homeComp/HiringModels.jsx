
"use client";

import { COMMON_FIELD_NAMES, getFieldValue, getValueByFieldNameAndPosition, highlightLastWords } from "@/lib/utils/sectionDataHelpers";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import AppButton from "./AppButton";

export default function HiringModels({ data, color = "#1A7D85" }) {
  const controls = useAnimation();


  // ✅ Extract dynamic field values
  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
  const subHeading = getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING);
  const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION);
  const feature_title_1 = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, 0);
  const feature_title_2 = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, 1);
  const feature_title_3 = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, 2);
  const feature_description_1 = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION, 0);
  const feature_description_2 = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION, 1);
  const feature_description_3 = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION, 2);
    const btn =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
        "";
         const buttoncolor =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
        "";
      const btnlink =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
        "";
  console.log("heading", feature_title_1);

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
    <>
    <div className="flex flex-col justify-center items-center bg-white overflow-hidden px-4 lg:pb-14 pb-5">
      {/* <img
        src="/layer4.png"
        alt="decor"
        className="absolute -top-24 right-10 w-32 md:w-48 lg:w-20 opacity-90 pointer-events-none"
      /> */}

      {/* 🔹 Heading Section */}
      <div className="text-center flex flex-col items-center mb-12 relative z-10">
        {/* {subHeading && <h2 className="md:text-xl text-[16px] ebrima-bold">{subHeading}</h2>} */}

        {/* {heading && (
          <h1 className="text-2xl md:text-6xl text-center max-w-2xl">
            {highlightLastWords(heading, 2, `text-[${color}]`)}
          </h1>
        )} */}
        {/* {heading && (
          <h1 className="text-2xl md:text-6xl text-center max-w-2xl">
           {heading}
          </h1>
        )} */}
        {/* {subHeading && (
  <h2 className="md:text-xl text-[16px] ebrima-bold">{subHeading}</h2>
)} */}
{subHeading && (
  <h2
    className="md:text-xl text-[16px] ebrima-bold"
    dangerouslySetInnerHTML={{ __html: subHeading }}
  ></h2>
)}
{heading && (
  <h1
    className="text-2xl md:text-6xl text-center mx-auto"
    dangerouslySetInnerHTML={{ __html: heading }}
  ></h1>
)}


        {description && (
          <p className="mt-4 tex00 text-[11px] xl:text-md md:text-[16px] lg:text-xs max-w-3xl mx-auto">{description}</p>
        )}
      </div>
      <div className="relative w-full max-w-[800px] flex justify-center lg:items-start items-center flex-col lg:flex-row lg:h-[500px]">
        {/* Center Circle */}
        <motion.div
          className="relative z-10 w-60 h-60 border-[10px] border-[#1A7D85] rounded-full flex justify-center items-center text-[#1A7D85] shadow-xl"
          variants={circleVariants}
          initial="hidden"
          animate={controls}
          custom={0}
        >
          <img src="/setting.png" className="w-28" alt="settings" />
        </motion.div>

        {/* SVG CONNECTORS — only show on desktop */}
        <div className="hidden lg:block">
          {/* LEFT THREAD */}
          <motion.svg
            className="absolute -left-[1.2rem] top-[71px] rotate-[170deg]"
            width="330"
            height="118"
            viewBox="0 0 500 118"
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
            className="absolute -right-[0.8rem] top-[100px]"
            width="330"
            height="118"
            viewBox="0 0 480 118"
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
            className="absolute left-[23rem] top-[14.5rem] rotate-180"
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
          className="flex flex-col items-center lg:absolute lg:-left-[10.2rem] lg:top-[10.55rem] mt-10 lg:mt-0"
          variants={circleVariants}
          initial="hidden"
          animate={controls}
          custom={1}
        >
          <div className="w-28 h-28 border-8 [12px] border-[#1A7D85] rounded-full flex justify-center items-center text-[#1A7D85]">
            <img src="/animatedImg1.png" className="w-10" alt="Fixed Model" />
          </div>
          <motion.p
            className="xl:text-xl lg:text-lg text-[16px] font-semibold mt-3 mb-1 0 text-center"
            variants={textVariants}
            initial="hidden"
            animate={controls}
            custom={1}
          >
            {feature_title_1}
            {/* Fixed Project Model */}
          </motion.p>
          <motion.p
            className="xl:text-md lg:text-xs text-[11px] mb-10 text-center w-[320px]"
            variants={textVariants}
            initial="hidden"
            animate={controls}
            custom={1.5}
          >
            {feature_description_1}
            {/* Best for small companies with clear requirements, scope, and delivery timelines. */}
          </motion.p>
        </motion.div>

        {/* RIGHT (Middle in mobile) */}
        <motion.div
          className="flex flex-col items-center lg:absolute lg:-right-[11.4rem] lg:top-[9.3rem] mt-10 lg:mt-0"
          variants={circleVariants}
          initial="hidden"
          animate={controls}
          custom={2}
        >
          <div className="w-28 h-28 border-8 [12px] border-[#1A7D85] rounded-full flex justify-center items-center text-[#1A7D85]">
            <img src="/animatedImg2.png" className="w-10" alt="Time Model" />
          </div>
          <motion.p
            className="xl:text-xl lg:text-lg text-[16px] font-semibold mt-3 mb-1 t900 text-center"
            variants={textVariants}
            initial="hidden"
            animate={controls}
            custom={2}
          >
            {feature_title_2}
            {/* Time & Material Model */}
          </motion.p>
          <motion.p
            className="xl:text-md lg:text-xs text-[11px] 600 mb-10 text-center w-[320px]"
            variants={textVariants}
            initial="hidden"
            animate={controls}
            custom={2.5}
          >
            {feature_description_2}
            {/* Pay only for hours used, ideal for evolving apps. */}
          </motion.p>
        </motion.div>

        {/* BOTTOM (Last in mobile) */}
        <motion.div
          className="flex flex-col items-center lg:absolute lg:top-[20.3rem] mt-10 lg:mt-0"
          variants={circleVariants}
          initial="hidden"
          animate={controls}
          custom={3}
        >
          <div className="w-28 h-28 border-8 [12px] border-[#1A7D85] rounded-full flex justify-center items-center text-[#1A7D85]">
            <img src="/animatedImg3.png" className="w-10" alt="Dedicated Model" />
          </div>
          <motion.p
            className="xl:text-xl lg:text-lg text-[16px] font-semibold mt-3 mb-1 0 text-center"
            variants={textVariants}
            initial="hidden"
            animate={controls}
            custom={3}
          >
            {feature_title_3}
            {/* Dedicated Team Model */}
          </motion.p>
          <motion.p
            className="xl:text-md lg:text-xs  text-[11px] mb-10 text-center w-[340px]"
            variants={textVariants}
            initial="hidden"
            animate={controls}
            custom={3.5}
          >
            {feature_description_3}
            {/* A full-time team of developers working as an extension of your company. */}
          </motion.p>
        </motion.div>
      </div>
    </div>
    <AppButton
          text={btn} 
          color={buttoncolor} 
          link={btnlink} 
          // onClick={() => console.log("Button clicked")} 
        />
    </>
  );
}

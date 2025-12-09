"use client";
import React, { useState } from "react";

const FaqSection = ({ data, color }) => {
  if (!data) return null;
  console.log("color", color);

  // Map form_fields to their results
  const structuredData = data.form_fields.map((field) => {
    const matchedResults = data.results.filter(
      (res) => res.section_form_field_id === field.id
    );

    return {
      ...field,
      values: matchedResults.map((res) => res.value),
    };
  });

  // Extract heading, questions, answers
  const heading = structuredData.find((f) => f.name === "heading")?.values[0];
  const questions =
    structuredData.find((f) => f.name === "faq_question")?.values || [];
  const answers =
    structuredData.find((f) => f.name === "faq_answer")?.values || [];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto container max-w-[1200px] py8 mdpy16 px-4 md:px-14 w-full">
      {/* Heading with last 2 words on new line */}
      {/* <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-gray-800 mb-8 sm:mb-12 leading-snug sm:leading-tight text-center md:text-left">
       
        {heading}
      </h2> */}
      <h2
  className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-gray-800 mb-8 sm:mb-12 leading-snug sm:leading-tight text-center md:text-left"
  dangerouslySetInnerHTML={{ __html: heading }}
></h2>


      {/* FAQs */}
      <div className="space-y-4sm:space-y-6 w-full md:px-10">
        {questions.map((q, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl p-3 md:p-6 transition-all duration-300 w-full ${isOpen ? "bg-[#0C1A16] text-white" : "bg-white text-black"
                }`}
            >

              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex items-center justify-between w-full text-left text-base sm:text-lg font-medium "
              >
                {/* Number Box */}
                <div
                  className={`hidden md:flex items-center justify-center w-12 h-12 smw10 s10 rounded-full sm:mr-4 ${isOpen ? "bg-white -mb-10  text-black font-semibold" : `bg-[#1A7D85] text-white`
                    }`}
                >
                  {index + 1}
                </div>

                {/* Question */}
                <span
                  className={`flex-1 font-[700]  ${index === 0 ? "" : ""
                    } text-sm sm:text-base  font-bold md:text-lg lg:text-xl `}
                >
                  {q}
                </span>

                {/* Toggle Symbol */}
                <span className="ml-3 sm:ml-4">{isOpen ? "" : "+"}</span>
              </button>

              {/* Answer */}
              {isOpen && answers[index] && (
                <div className="mt-3 md:pl-16 smpl-16 mb-2 text-xs lg:w-[45.625rem]
 sm:text-sm md:text-[12px] xl:text-base text-white">
                  {answers[index]}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;

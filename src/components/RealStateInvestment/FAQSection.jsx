"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  getFieldValue,
  getMultipleFieldValuesByName,
  isValidSectionData,
} from "@/lib/utils/sectionDataHelpers";

export default function FAQSection({ data }) {
  if (!isValidSectionData(data)) return null;
  // console.log("FAQ data:", data);

  // --- Dynamic heading/description ---
  const heading =
    getFieldValue(data, "heading") || "Frequently Asked Questions";
  const description =
    getFieldValue(data, "description") ||
    "Got questions? We've got answers. Everything you need to know before placing your order, all in one place.";

  // --- Dynamic FAQs ---
  const faqQuestions = getMultipleFieldValuesByName(data, "faq_question");
  const faqAnswers = getMultipleFieldValuesByName(data, "faq_answer");

  const faqs = faqQuestions.map((q, i) => ({
    question: q,
    answer: faqAnswers[i] || "",
  }));

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-white py-16 px-6 md:px-12 max-w-[1200px] mx-auto transition duration-1000">
      {/* Background image */}
      <div className="absolute left-0 top-0 h-full w-40 opacity-10">
        <img
          src="/FAQ-Bg.png"
          alt="FAQ Background"
          className="h-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-2xl mb-2 md:text-3xl font-semibold text-gray-900">
          {heading}
        </h2>
        <p className="uppercase text-gray-500 text-xs tracking-widest">
          {description}
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4 relative z-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-3 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between">
              <h3
                className={`text-sm md:text-base font-medium ${openIndex === index ? "text-gray-900" : "text-gray-700"
                  }`}
              >
                {index + 1}. {faq.question}
              </h3>
              {openIndex === index ? (
                <FiMinus className="text-gray-600" />
              ) : (
                <FiPlus className="text-gray-600" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-500 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

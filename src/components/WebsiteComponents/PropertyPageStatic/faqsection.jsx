"use client";
import { useState } from "react";
import { getValueByFieldNameAndPosition, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";

export default function FAQSection({ data }) {
  console.log('FAQSection data:', data);

  // Extract dynamic values using position-based approach
  const title = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || 'Frequently Asked Questions';
  const subtitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) || 'Get answers to common questions about our properties';

  // Extract FAQ items - supporting multiple FAQs
  const faqItems = [];
  for (let i = 0; i < 10; i++) { // Support up to 10 FAQs
    const question = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FAQ_QUESTION, i);
    const answer = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FAQ_ANSWER, i);
    
    if (question && answer) {
      faqItems.push({
        question: question,
        answer: answer
      });
    }
  }

  // Fallback FAQs if no dynamic data
  const faqs = faqItems.length > 0 ? faqItems : [
    {
      question: "What are the payment plans available?",
      answer: "We offer flexible payment plans including 10% down payment, 40% during construction, 10% on handover, and 40% post handover over 2 years."
    },
    {
      question: "When is the expected completion date?",
      answer: "The project is expected to be completed by Q4 2025, with handover scheduled shortly after completion."
    },
    {
      question: "What amenities are included?",
      answer: "Our development includes world-class amenities such as swimming pools, fitness center, children's play area, landscaped gardens, and 24/7 security."
    },
    {
      question: "Are there any service charges?",
      answer: "Yes, there are annual service charges for maintenance of common areas and amenities. Details will be provided upon booking."
    },
    {
      question: "Can I get a site visit?",
      answer: "Absolutely! We offer guided site visits and virtual tours. Please contact our sales team to schedule your visit."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">{title}</h2>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-gray-800 pr-4">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-[#26326A] hover:bg-[#1E2A78] text-white px-8 py-3 rounded-full transition-colors duration-300">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}

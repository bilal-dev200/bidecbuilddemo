"use client";
import Image from "next/image";
import { getValueByFieldNameAndPosition, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";

export default function PaymentPlansSection({ data }) {
  console.log('PaymentPlansSection data:', data);

  // Extract dynamic values using position-based approach
  const title = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || 'Flexible Payment Plans for Seamless Ownership';
  const description = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) || 'Park Beach Residence offers thoughtfully structured payment plans designed to make luxury ownership both accessible and convenient. With options tailored to meet the needs of discerning buyers, these plans provide the perfect balance of flexibility and exclusivity.';
  const image = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) || '/payment-section-house.png';

  // Extract payment plan items - supporting multiple payment milestones
  const paymentPlanItems = [];
  for (let i = 0; i < 8; i++) { // Support up to 8 payment milestones
    const milestone = getValueByFieldNameAndPosition(data, 'payment_milestone', i);
    const percentage = getValueByFieldNameAndPosition(data, 'payment_percentage', i);
    
    if (milestone && percentage) {
      paymentPlanItems.push({
        milestone: milestone,
        percentage: percentage
      });
    }
  }

  // Fallback payment plans if no dynamic data
  const paymentPlans = paymentPlanItems.length > 0 ? paymentPlanItems : [
    { milestone: "Downpayment", percentage: "10%" },
    { milestone: "During Construction", percentage: "40%" },
    { milestone: "On Handover", percentage: "10%" },
    { milestone: "Post Handover", percentage: "40%" }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="w-full flex flex-col lg:flex-row items-start gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-md relative z-0">
          <Image
            src={image}
            alt="Property Payment Plans"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col relative z-10">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4 leading-snug">
            {title}
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* White Box Container with all Installments */}
      <div className="w-full flex justify-start mt-[-140px] pl-[35%] pr-4 relative z-20">
        <div className="bg-white rounded-xl px-4 py-4 w-auto shadow-lg">
          <div className="flex lg:flex-nowrap gap-4 overflow-x-auto scrollbar-hide">
            {paymentPlans.map((plan, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-50 rounded-lg p-4 min-w-[140px] hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-2xl font-bold text-[#26326A] mb-2">
                  {plan.percentage}
                </div>
                <div className="text-sm text-gray-700 text-center font-medium">
                  {plan.milestone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

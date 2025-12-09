import React from "react";
import { FaComments, FaClipboardList, FaStore, FaLock } from "react-icons/fa";

export default function ShopifyProcess() {
  const steps = [
    {
      icon: <FaComments className="text-white text-2xl" />,
      title: "Initial Consultation",
      desc: "We begin with a detailed consultation to understand your business goals, current e-commerce setup, and expectations. This allows us to design a Shopify migration strategy tailored to your unique needs.",
      bg: "bg-[#1A7D85] text-white",
    },
    {
      icon: <FaClipboardList className="text-[#1A7D85] text-2xl" />,
      title: "Data Assessment & Planning",
      desc: "Our team carefully reviews your existing store data, products, categories, customers, orders, and content. We then map out a precise migration plan to ensure every detail is transferred seamlessly, without errors or loss.",
      bg: "bg-white text-gray-800",
    },
    {
      icon: <FaStore className="text-[#1A7D85] text-2xl" />,
      title: "Shopify Store Setup & Customization",
      desc: "We set up your new Shopify store with the right theme, payment gateways, and design elements. From layouts to brand styling, every detail is customized to match your identity and provide an upgraded shopping experience.",
      bg: "bg-white text-gray-800",
    },
    {
      icon: <FaLock className="text-[#1A7D85] text-2xl" />,
      title: "Secure Data Migration",
      desc: "This is the core of the process, transferring your store data safely into Shopify. Using best practices and secure tools, we migrate products, customers, orders, and all vital information with complete accuracy and integrity.",
      bg: "bg-white text-gray-800",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Switch to Shopify with Our
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-[#6FB52B] mb-6">
          Proven 4-Step Process
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We’ve refined a proven migration process that ensures data security, 
          zero downtime, and 100% preservation of your search rankings, so your 
          business transitions to Shopify smoothly and successfully.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md p-6 flex flex-col items-start ${step.bg}`}
            >
              <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-md bg-opacity-20">
                {step.icon}
              </div>
              <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
              <p className="text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

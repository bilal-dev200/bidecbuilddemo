import React from "react";

const MigrationProcessSection = () => {
  const steps = [
    {
      number: "Step 1",
      title: "Plan Your Migration Strategy",
      text: "We begin by analyzing your current BigCommerce store, its structure, data, and integrations. Based on your business goals, we create a customized migration roadmap to ensure a safe and efficient transfer.",
    },
    {
      number: "Step 2",
      title: "Set Up Your Shopify Store",
      text: "We configure your new Shopify environment. This includes selecting the right Shopify plan, setting up store design, settings, currencies, languages, and preparing the foundation for migration.",
    },
    {
      number: "Step 3",
      title: "Migrate Your Data",
      text: "Our team securely transfers all your BigCommerce data including products, categories, customers, orders, reviews, and inventory details to Shopify while ensuring complete data accuracy and integrity.",
    },
    {
      number: "Step 4",
      title: "Set Up Your Shopify Store’s Functionality",
      text: "We configure apps, payment gateways, shipping methods, taxes, and third-party integrations (CRMs, ERPs, analytics, etc.) to replicate and enhance your store’s functionality on Shopify.",
    },
    {
      number: "Step 5",
      title: "Test and Go Live",
      text: "Before launch, we thoroughly test your new Shopify store experience, review configurations, and ensure everything runs smoothly. Once everything is perfect, we launch your Shopify store without disrupting your business.",
    },
    
  ];

  return (
   <div className="max-w-[1200px] mx-auto rounded-[10px] overflow-hidden">
  <section className="bg-[#0f1c16] rounded-[10px] text-gray-300 py-16 px-6 md:px-12 lg:px-20">
    <div className="mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        <span className="text-[#8cc63f]">BigCommerce</span> to Shopify Migration Process We Follow
      </h2>
      <p className="text-gray-400 max-w-3xl mx-auto mb-12">
        Migrating your store from BigCommerce to Shopify requires careful planning and execution to ensure nothing is lost and everything works perfectly. Here’s the structured process our experts follow to deliver a smooth transition.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
      {steps.map((step, i) => (
        <div key={i} className="border-t border-gray-600 pt-6">
          <p className="text-sm uppercase text-[#8cc63f] font-semibold mb-1">
            {step.number}
          </p>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
            {step.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {step.text}
          </p>
        </div>
      ))}
    </div>
  </section>
</div>

    

  );
};

export default MigrationProcessSection;

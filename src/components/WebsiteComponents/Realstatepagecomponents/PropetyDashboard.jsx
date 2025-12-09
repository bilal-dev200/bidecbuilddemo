// PropertyDashboard.jsx
import React from "react";

const PropertyDashboard = () => {
  // Yahan pehi sara data rakha hai
  const stats = [
    {
      id: 1,
      label: "Sales Volume",
      value: "122,983",
      change: "59.9%",
      changeType: "up", // "up" ya "down"
    },
    {
      id: 2,
      label: "Sales Volume (AED)",
      value: "305.6 B",
      change: "43.8%",
      changeType: "up",
    },
    {
      id: 3,
      label: "Average Price (AED)",
      value: "1848/sqf",
      change: "-2.3%",
      changeType: "down",
    },
  ];

  return (
    <div className="bg-white max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left Side - Heading & Description */}
        <div className="md:flex-1">
          <h1 className="text-3xl font-normal text-gray-900 mb-6 leading-tight tracking-tight">
            MAKE TRANSACTION OF OFF
            <br />
            PLAN PROPERTIES
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Right Side - Stats */}
        <div className="md:w-[320px] space-y-10">
          {stats.map(({ id, label, value, change, changeType }) => (
            <div key={id}>
              {/* Top: Label */}
              <div className="text-sm text-gray-500 mb-2">{label}</div>

              {/* Bottom: Value | Line | Change */}
              <div className="flex items-center">
                {/* Value */}
                <div className="text-4xl font-extrabold text-gray-900">
                  {value}
                </div>

                {/* Line */}
                <div className="flex-grow mx-4 h-px bg-gray-300"></div>

                {/* Change with Arrow */}
                <div
                  className={`flex items-center text-base font-semibold ${
                    changeType === "up" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  <span className="mr-1 text-xl">
                    {changeType === "up" ? "↑" : "↓"}
                  </span>
                  <span>{change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDashboard;

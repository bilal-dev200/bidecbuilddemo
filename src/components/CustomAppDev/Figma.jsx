import React, { useState } from "react";

// Simplified Image component for public URLs, or Next.js Image if preferred.
// Using a standard <img> tag for direct public URL usage without Next.js Image optimization overhead.
const Image = ({ src, alt, width, height, className }) => (
    <img 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        className={className} 
        // For Next.js <Image>, you'd use 'layout="fill" objectFit="cover"' for similar effect
        // and ensure the parent has 'position: relative' and defined dimensions.
        // For simple <img>, objectFit: 'cover' is a good default for responsive images.
        style={{ objectFit: 'cover' }}
    />
);

const Figma = () => {
  const [active, setActive] = useState(2); // Mobile App Development is active by default

  const tabs = [
    { id: 1, title: "Web Development", icon: "/random1.png" },
    { id: 2, title: "Mobile App Development", icon: "/random1.png" },
    { id: 3, title: "Software Development", icon: "/random1.png" },
    { id: 4, title: "AI Development & Consultation", icon: "/random1.png" },
    { id: 5, title: "Big Data Analytics", icon: "/random1.png" },
  ];

  // Mock content data and **public random image URLs** for the active tab
  const currentContent = {
    title: "Mobile App Development",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    // Main background image (person holding wireframes) from Unsplash or similar
    bgImageUrl: "https://images.unsplash.com/photo-1593642532781-03004a4e1e07?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // Foreground layered image (hands on tablet with apps) from Unsplash
    fgImageUrl: "https://images.unsplash.com/photo-1551817929-87c2c9939e60?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  };

  return (
    <div className="p-4 md:hidden min-h-screen font-sans">
      {/* Main Container: Dark Teal Background with Rounded Edges */}
      <div className="max-w-xl mx-auto bg-[#0A757A] text-white rounded-md  pt-10 pb-12  relative overflow-hidden">
        
        {/* Header Section */}
        <div className="relative z-10 text-center space-y-3 mb-8 px-4">
          <h1 className="text-3xl font-extrabold leading-tight">
            Your One-Stop Digital <br />
            Transformation Partner
          </h1>
          <p className="text-sm text-gray-200">
            From concept to scale, we deliver full-stack solutions tailored to your needs:
          </p>
        </div>

       

		 {/* Scrollable Tabs */}
      <div className="flex overflow-x-auto mt-4 gap-3 w-full scrollbar-hide">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex-shrink-0 h-24 flex flex-col items-center justify-center text-center rounded-[10px]  py-2 min-w-[116px] border 
            ${active === tab.id ? "bg-black text-white border-black" : "bg-white text-gray-800 border-gray-200"}`}
          >
            <Image src={tab.icon} alt={tab.title} width={28} height={32} />
            <p className="text-[9px] w-14 font-medium mt-1">{tab.title}</p>
          </div>
        ))}
      </div>

        {/* --- Content Section: DITTO COPY LAYOUT with Public Images --- */}
        <div className="relative z-10 w-full px-4">
          
          {/* FIX: Changed 'flex-col md:flex-row' to just 'flex' (which defaults to row) 
            to ensure side-by-side layout on ALL screens, matching the mobile design.
          */}
          <div className="flex   rounded-[1.5rem] overflow-hidden">
              
              {/* Left Column: Text Content (Now w-1/2 on all sizes) */}
              <div className="w-1/2 flex flex-col justify-center p-4 space-y-2">
                  <h2 className="text-xl font-extrabold text-white">
                      {currentContent.title}
                  </h2>
                  <p className="text-[11px] w-[200px] text-gray-100 leading-snug pr-2">
                      {currentContent.description}
                  </p>
                  <a 
                    href="#" 
                    className="inline-block self-start px-4 py-1 text-xs font-semibold border-2 border-white text-white rounded-full hover:bg-white hover:text-[#0C8B8F] transition duration-300 shadow-md mt-1"
                  >
                      Read More
                  </a>
              </div>

              {/* Right Column: Layered Image Content (Now w-1/2 on all sizes) */}
              <div className="w-3/4 mt-5 pr-2 relative">
                  
                  {/* Background Image (Person with Wireframe) */}
                  <Image
					src="./random.png"
                      alt="Wireframe Planning"
                 
                      className="w-full h-full object-cover"
                  />
                  
                 
              </div>
          </div>
        </div>
        {/* --- End Content Section --- */}

      </div>
    </div>
  );
};

export default Figma;

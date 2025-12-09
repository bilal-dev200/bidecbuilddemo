import React from "react";

const Banners = ({ head, des, bg, align = "center" }) => {
    // Tailwind alignment class set
    const alignmentClass =
        align === "start" ? "text-left items-start" : "text-center items-center";

    return (
        <div
            className="w-full flex justify-center text-white bg-no-repeat bg-cover min-h-screen"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div
                className={`xl:w-2/4 md:w-2/3 w-full flex flex-col gap-3 ${alignmentClass}`}
            >
                <h2 className="lg:leading-[5rem] leading-[3.5rem] lg:text-7xl text-5xl">
                    {head}
                </h2>
                <p className="text-xl px-5">{des}</p>
            </div>
        </div>
    );
};

export default Banners;

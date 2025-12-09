export const SkeletonLoader = ({ aligin }) => {
  return (
    <div className="w-full animate-pulse">
      {/* Banner Container */}
      <div className="relative w-full h-screen bg-gray-200 overflow-hidden">
        {/* Image placeholder */}
        <div className="absolute inset-0 bg-gray-200"></div>

        {/* Overlay text block */}
        <div
          className={`absolute inset-0 flex flex-col space-y-6 max-w-2xl ${
            aligin === "center"
              ? "items-center justify-center text-center mx-auto"
              : "justify-center pl-12"
          }`}
        >
          {/* Headline (multi-line title) */}
          <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-8 w-2/3 bg-gray-300 rounded"></div>
          <div className="h-8 w-1/2 bg-gray-300 rounded"></div>

          {/* Description (2–3 lines) */}
          <div className="h-4 w-4/5 bg-gray-300 rounded"></div>
          <div className="h-4 w-3/5 bg-gray-300 rounded"></div>

          {/* Bold text highlight (like price) */}
          <div className="h-5 w-40 bg-gray-400 rounded"></div>

          {/* CTA button */}
          <div className="h-10 w-36 bg-gray-300 rounded-md mt-6"></div>
        </div>
      </div>
    </div>
  );
};

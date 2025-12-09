import Image from "next/image";

export default function OnePicAndDescription({
  subtitle,
  title,
  description,
  imageSrc,
  reverse = false,
}) {
  return (
    <section
      className={`max-w-[1200px] mx-auto px-4 py-16 flex flex-col gap-12 items-center md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        {/* <Image
          src={imageSrc}
          alt="Section Image"
          width={600}
          height={700}
          className="rounded-2xl shadow-lg object-contain w-full h-auto max-w-[500px]"
        /> */}
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        {subtitle && (
          <p className="text-lg md:text-xl font-semibold tracking-wide text-[#26326A] uppercase mb-2">
            {subtitle}
          </p>
        )}
        {title && (
          <h2 className="text-2xl md:text-5xl font-bold leading-tight mb-4">
            {title}
          </h2>
        )}
        {Array.isArray(description)
          ? description.map((para, i) => (
              <p
                key={i}
                className="text-base md:text-xl text-gray-600 leading-relaxed mb-4"
              >
                {para}
              </p>
            ))
          : (
              <p className="text-base md:text-xl text-gray-600 leading-relaxed mb-4">
                {description}
              </p>
            )}
      </div>
    </section>
  );
}

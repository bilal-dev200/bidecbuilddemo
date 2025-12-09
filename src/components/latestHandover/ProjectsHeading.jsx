export default function ProjectsHeading() {
  return (
    <div className="border-t border-[#D9D9D9] py-20 mt-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side */}
        <div>
          <p className="uppercase tracking-widest text-xl text-blue-900 font-semibold">
            From Vision to Reality
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Recently Delivered Projects
          </h2>
        </div>

        {/* Right Side */}
        <div>
          <p className="text-gray-600 text-xl leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
      </div>
    </div>
  );
}

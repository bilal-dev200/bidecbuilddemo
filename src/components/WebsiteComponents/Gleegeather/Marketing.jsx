import Image from "next/image";

const Marketing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-center">

        {/* --- ONE SINGLE IMAGE (GROUPED FROM FIGMA) --- */}
        <div className="flex justify-center">
          <Image
            src="/images/digital-group.png" // yahan apni grouped image lagao
            width={900}
            height={650}
            alt="Digital Marketing Group Image"
            className="rounded-xl shadow-xl w-full h-auto"
          />
        </div>

        {/* --- RIGHT SIDE CONTENT --- */}
        <div>
          <h2 className="text-3xl font-bold text-black">Digital Marketing</h2>
          <p className="text-lg text-gray-600 mt-2">Lorem Ipsum is simply dummy</p>

          <ul className="space-y-3 mt-6 text-gray-700">
            <li className="flex gap-2">
              <span className="text-orange-500 font-bold">•</span>
              Executed multi-channel campaigns reaching 500,000+ parents.
            </li>

            <li className="flex gap-2">
              <span className="text-orange-500 font-bold">•</span>
              Generated 5,000+ qualified leads via SEO + PAID ads.
            </li>

            <li className="flex gap-2">
              <span className="text-orange-500 font-bold">•</span>
              Impact: 70% more inquiries & stronger engagement.
            </li>
          </ul>

          <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600">
            Get In Touch
          </button>
        </div>

      </div>
    </section>
  );
};

export default Marketing;

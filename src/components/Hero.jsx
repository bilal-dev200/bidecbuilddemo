// import Layout from "@/components/Layout";

export default function Hero() {
    return (
        // <Layout>
        <>
            <section
                className="relative flex items-start justify-start text-left text-white px-6 pt-32 pb-20"
                style={{
                    backgroundImage: "url('/hero.png')", // Replace with your actual image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="max-w-2xl md:p-1">
                    <span className="inline-block bg-white text-black px-4 py-1 rounded-r-full text-[11px] mb-4">
                        Custom Software Development Company with AI-Powered Innovation
                    </span>


                    <h1 className="text-5xl md:text-7xl font-bold leading-none mb-2">
                        <span className="text-[#1A7D85]">Full-Stack</span> Tech
                        <br />
                        Enablement
                    </h1>


                    <p className="text-[24px] text-white mb-4">
                        & AI Consulting for Future-Ready Businesses
                    </p>

                    <p className="text-gray-300 text-[14px]  mb-8">
                        From seamless adoption to scalable expansion, we’re your trusted
                        digital transformation accelerators. Our expertise spans cloud, AI,
                        data, mobile apps, eCommerce, chatbots and full-stack development,
                        helping you unlock efficiency and innovation at every stage of your
                        journey.
                    </p>

                    <a
                        href="#"
                        className="inline-block bg-teal-500 hover:bg-teal-400 text-white px-6 py-3 rounded-full font-semibold transition"
                    >
                        Schedule a Call →
                    </a>
                </div>
            </section>
        </>
        // </Layout>
    );
}

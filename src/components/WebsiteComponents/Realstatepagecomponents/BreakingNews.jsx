import Image from "next/image";
import Link from "next/link";

export default function BreakingNewsSection() {
  const articles = [
    {
      id: 1,
      image: "/c1.png",
      title: "Importance of Custom Stamps for Your Business",
      description:
        "Custom stamps are more than just office tools – they're a mark of identity and efficiency.",
      link: "#",
    },
    {
      id: 2,
      image: "/c2.png",
      title: "Importance of Custom Stamps for Your Business",
      description:
        "Custom stamps are more than just office tools – they're a mark of identity and efficiency.",
      link: "#",
    },
    {
      id: 3,
      image: "/c3.png",
      title: "Importance of Custom Stamps for Your Business",
      description:
        "Custom stamps are more than just office tools – they're a mark of identity and efficiency.",
      link: "#",
    },
  ];

  return (
    <section className="relative max-w-[1200px] mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-2">
          IN THE SPOTLIGHT
        </p>
        <h2 className="text-4xl font-normal text-gray-900">
          BREAKING NEWS & INSIGHTS
        </h2>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative h-64">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {article.description}
              </p>
              <Link
                href={article.link || "#"}
                className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors inline-flex items-center"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center py-6">
        <Link
          href="/news"
          className="bg-[#26326A] hover:bg-[#1E2A78] text-white px-6 py-2 rounded-full text-xs"
        >
          View More
        </Link>
      </div>
    </section>
  );
}

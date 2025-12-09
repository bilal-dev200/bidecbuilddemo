// import SectionHeader from "./SectionHeader";
// import ProjectCard from "./ProjectCard";

import ProjectCard from "./ProjectCard";
import ProjectsHeading from "./ProjectsHeading";
// import SectionHeader from "./SectionHeader";

export default function ProjectsSection() {
    const projects = [
        {
            images: ["/projectsImg.png", "/projectsImg.png", "/projectsImg.png"],
            location: "Oslo, Norway",
            title: "Elegant Contemporary Villa with Garden",
            beds: 4,
            baths: 3,
            size: "3120 sq. ft.",
            price: "284,220",
        },
        {
            images: ["/projectsImg.png"],
            location: "Oslo, Norway",
            title: "Luxury Modern House",
            beds: 5,
            baths: 4,
            size: "4120 sq. ft.",
            price: "350,000",
        },
        {
            images: ["/projectsImg.png", "/projectsImg.png", "/projectsImg.png"],
            location: "Oslo, Norway",
            title: "Elegant Contemporary Villa with Garden",
            beds: 4,
            baths: 3,
            size: "3120 sq. ft.",
            price: "284,220",
        },
        {
            images: ["/projectsImg.png"],
            location: "Oslo, Norway",
            title: "Luxury Modern House",
            beds: 5,
            baths: 4,
            size: "4120 sq. ft.",
            price: "350,000",
        },
        {
            images: ["/projectsImg.png", "/projectsImg.png", "/projectsImg.png"],
            location: "Oslo, Norway",
            title: "Elegant Contemporary Villa with Garden",
            beds: 4,
            baths: 3,
            size: "3120 sq. ft.",
            price: "284,220",
        },
        {
            images: ["/projectsImg.png"],
            location: "Oslo, Norway",
            title: "Luxury Modern House",
            beds: 5,
            baths: 4,
            size: "4120 sq. ft.",
            price: "350,000",
        },
    ];


    return (
        <section className="container mx-auto py-16">
           
            <ProjectsHeading />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>


            <div className="flex justify-center mt-10">
                <button className="px-6 py-2 bg-[#1e3a8a] text-white rounded-full hover:bg-[#162b67]">
                    Load More
                </button>
            </div>
        </section>
    );
}

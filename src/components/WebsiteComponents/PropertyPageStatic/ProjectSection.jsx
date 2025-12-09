"use client";
import Image from "next/image";
import { getValueByFieldNameAndPosition, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";

export default function ProjectSection({ data }) {
  console.log('ProjectSection data:', data);

  // Extract dynamic values using position-based approach
  const title = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || 'Related Projects';
  const subtitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) || 'Discover more exceptional developments';

  // Extract project items - supporting multiple projects
  const projectItems = [];
  for (let i = 0; i < 6; i++) { // Support up to 6 projects
    const projectTitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.PROJECT_TITLE, i);
    const projectImage = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.PROJECT_IMAGE, i);
    const projectDescription = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.PROJECT_DESCRIPTION, i);
    const projectLocation = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.PROJECT_LOCATION, i);
    const projectPrice = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.PROJECT_PRICE, i);
    
    if (projectTitle && projectImage) {
      projectItems.push({
        title: projectTitle,
        image: projectImage,
        description: projectDescription || 'Luxury development with modern amenities',
        location: projectLocation || 'Dubai, UAE',
        price: projectPrice || 'Starting from AED 1M'
      });
    }
  }

  // Fallback projects if no dynamic data
  const projects = projectItems.length > 0 ? projectItems : [
    {
      title: "Marina Heights",
      image: "/l1.png",
      description: "Luxury waterfront apartments with stunning marina views",
      location: "Dubai Marina",
      price: "Starting from AED 1.2M"
    },
    {
      title: "Downtown Residences",
      image: "/l2.png", 
      description: "Premium apartments in the heart of downtown",
      location: "Downtown Dubai",
      price: "Starting from AED 1.5M"
    },
    {
      title: "Palm Villa Collection",
      image: "/l3.png",
      description: "Exclusive villas with private beach access",
      location: "Palm Jumeirah",
      price: "Starting from AED 3.5M"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">{title}</h2>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-[#26326A] font-semibold">
                    {project.price}
                  </div>
                  <button className="text-[#26326A] hover:text-[#1E2A78] font-medium text-sm transition-colors duration-300">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="bg-[#26326A] hover:bg-[#1E2A78] text-white px-8 py-3 rounded-full transition-colors duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

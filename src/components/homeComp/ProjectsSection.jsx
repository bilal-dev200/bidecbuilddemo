// "use client";
// import { useState } from "react";
// import ProjectCardModule from "../Cards/ProjectCardModule";
// import ProjectCard from "../latestHandover/ProjectCard";
// import { getFieldValue, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";

// export default function ProjectsSection({ data }) {
//   const [selectedProject, setSelectedProject] = useState(null);

//   // Extract dynamic values for section header
//   const sectionSubtitle = getFieldValue(data, 'section_subtitle') || 'Explore Our Projects';
//   const sectionTitle = getFieldValue(data, 'section_title') || 'The Future is Built Here';
//   const sectionDescription = getFieldValue(data, 'section_description') || 'Discover our active inventory through a curated collection of featured developments — filtered by type, status, or location.';
//   const loadMoreText = getFieldValue(data, 'load_more_text') || 'Load More';

//   // Extract project data - you might want to make this more dynamic with multiple project fields
//   const project1Data = {
//     images: [getFieldValue(data, 'project_1_image') || '/projectsImg.png'],
//     location: getFieldValue(data, 'project_1_location') || 'Oslo, Norway',
//     title: getFieldValue(data, 'project_1_title') || 'Elegant Contemporary Villa with Garden',
//     beds: parseInt(getFieldValue(data, 'project_1_beds')) || 4,
//     baths: parseInt(getFieldValue(data, 'project_1_baths')) || 3,
//     size: getFieldValue(data, 'project_1_size') || '3120 sq. ft.',
//     price: getFieldValue(data, 'project_1_price') || '284,220',
//     description: getFieldValue(data, 'project_1_description') || 'This elegant villa combines modern architecture with a lush garden for peaceful living.'
//   };

//   const project2Data = {
//     images: [getFieldValue(data, 'project_2_image') || '/projectsImg.png'],
//     location: getFieldValue(data, 'project_2_location') || 'Oslo, Norway',
//     title: getFieldValue(data, 'project_2_title') || 'Luxury Modern House',
//     beds: parseInt(getFieldValue(data, 'project_2_beds')) || 5,
//     baths: parseInt(getFieldValue(data, 'project_2_baths')) || 4,
//     size: getFieldValue(data, 'project_2_size') || '4120 sq. ft.',
//     price: getFieldValue(data, 'project_2_price') || '350,000',
//     description: getFieldValue(data, 'project_2_description') || 'A luxury modern house with open spaces and premium finishings for family comfort.'
//   };

//   // Filter out projects without titles (so you can control how many projects show)
//   const projects = [
//     project1Data,
//     project2Data
//   ].filter(project => project.title && project.title !== 'undefined');

//   return (
//     <section className="container mx-auto py-16">
//       {/* Heading */}
//       <div className="pb-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//           <div>
//             <p className="uppercase tracking-widest text-xl text-blue-900 font-semibold">
//               {sectionSubtitle}
//             </p>
//             <h2 className="text-3xl md:text-5xl font-bold mt-2">
//               {sectionTitle}
//             </h2>
//           </div>
//           <div>
//             <p className="text-gray-600 text-xl leading-relaxed">
//               {sectionDescription}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {projects.map((p, i) => (
//           <ProjectCard
//             key={i}
//             {...p}
//             onViewDetail={() => setSelectedProject(p)}
//           />
//         ))}
//       </div>

//       {projects.length > 0 && (
//         <div className="flex justify-center mt-10">
//           <button className="px-6 py-2 bg-[#1e3a8a] hover:bg-[#162b67] text-white rounded-full transition-colors duration-300">
//             {loadMoreText}
//           </button>
//         </div>
//       )}

//       {/* Modal */}
//       {selectedProject && (
//         <ProjectCardModule
//           image={selectedProject.images[0]}
//           location={selectedProject.location}
//           title={selectedProject.title}
//           description={selectedProject.description}
//           price={selectedProject.price}
//           onClose={() => setSelectedProject(null)}
//         />
//       )}
//     </section>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import ProjectCardModule from "../Cards/ProjectCardModule";
import ProjectCard from "../latestHandover/ProjectCard";
import { COMMON_FIELD_NAMES, getValueByFieldNameAndPosition } from "@/lib/utils/sectionDataHelpers";
import ProjectCardNew from "../WebsiteComponents/ProjectCardNew";
import { useProjectStore } from "@/lib/stores/projectsStore";

export default function ProjectsSection({ data }) {
  const [selectedProject, setSelectedProject] = useState(null);
  console.log('data asas', data);

  const { projects, isLoading, error, getAllprojects } = useProjectStore();

  // Fetch projects on mount
  useEffect(() => {
    getAllprojects();
  }, [getAllprojects]);

  console.log('projects', projects);
  console.log('selectedProject', selectedProject);
  // Extract dynamic values for section header
  const sectionSubtitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) || 'Explore Our Projects';
  const sectionTitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || 'The Future is Built Here';
  const sectionDescription = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) || 'Discover our active inventory through a curated collection of featured developments — filtered by type, status, or location.';
  const loadMoreText = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON, 0) || 'Load More';

  // // Extract project data using position-based approach
  // const project1Data = {
  //   images: [getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.PROJECT_1_IMAGE, 0) || '/projectsImg.png'],
  //   location: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.PROJECT_1_LOCATION, 0) || 'Oslo, Norway',
  //   title: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.PROJECT_1_TITLE, 0) || 'Elegant Contemporary Villa with Garden',
  //   beds: parseInt(getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.PROJECT_1_BEDS, 0)) || 4,
  //   baths: parseInt(getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.PROJECT_1_BATHS, 0)) || 3,
  //   size: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.PROJECT_1_SIZE, 0) || '3120 sq. ft.',
  //   price: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.PROJECT_1_PRICE, 0) || '284,220',
  //   description: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.PROJECT_1_DESCRIPTION, 0) || 'This elegant villa combines modern architecture with a lush garden for peaceful living.'
  // };

  // const project2Data = {
  //   images: [getValueByFieldNameAndPosition(data, 'project_2_image', 0) || '/projectsImg.png'],
  //   location: getValueByFieldNameAndPosition(data, 'project_2_location', 0) || 'Oslo, Norway',
  //   title: getValueByFieldNameAndPosition(data, 'project_2_title', 0) || 'Luxury Modern House',
  //   beds: parseInt(getValueByFieldNameAndPosition(data, 'project_2_beds', 0)) || 5,
  //   baths: parseInt(getValueByFieldNameAndPosition(data, 'project_2_baths', 0)) || 4,
  //   size: getValueByFieldNameAndPosition(data, 'project_2_size', 0) || '4120 sq. ft.',
  //   price: getValueByFieldNameAndPosition(data, 'project_2_price', 0) || '350,000',
  //   description: getValueByFieldNameAndPosition(data, 'project_2_description', 0) || 'A luxury modern house with open spaces and premium finishings for family comfort.'
  // };

  // Static Project Data
  // const projects = [
  //   project1Data,
  //   project2Data
  // ].filter(project => project.title && project.title !== 'undefined');

  // console.log('data', data);

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-20">
      {/* Heading */}
      <div className="mb-12 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start text-center md:text-start">
          <div>
            <p className="uppercase tracking-widest text-sm md:text-base text-blue-900 font-semibold">
              {sectionSubtitle}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2">
              {sectionTitle}
            </h2>
          </div>
          <div>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
              {sectionDescription}
            </p>
          </div>
        </div>
      </div>

      {isLoading && <p className="text-center">Loading projects...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Projects Cards */}
      {!isLoading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.length > 0 ? (
            projects.slice(0, 6).map((p) => (
              <ProjectCardNew
                key={p.id}
                slug={p.slug}
                images={p.media_with_files || "/Exterior/image13.png"}
                location={p.location}
                title={p.name}
                description={p.description}
                beds={p.bedrooms}
                size={`${p.square_feet} sq. ft.`}
                price={`AED ${p.price}`}
                // onViewDetail={() => handleNavigate(p)}
                onViewDetail={() => setSelectedProject(p)}
                isButtonView={1}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No projects found
            </p>
          )}
        </div>
      )}
      {/* Projects Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCardNew
            key={i}
            {...p}
            onViewDetail={() => setSelectedProject(p)}
          />
        ))}
      </div> */}

      {/* Load More Button */}
      {projects.length > 0 && (
        <div className="flex justify-center mt-10">
          <button className="px-6 py-2 bg-[#1e3a8a] hover:bg-[#162b67] text-white rounded-full transition-colors duration-300">
            {loadMoreText}
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedProject && (
        // <ProjectCardModule
        //   image={selectedProject.media_with_files[0]}
        //   location={selectedProject.location}
        //   title={selectedProject.title}
        //   description={selectedProject.description}
        //   price={selectedProject.price}
        //   onClose={() => setSelectedProject(null)}
        // />
        <ProjectCardModule
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

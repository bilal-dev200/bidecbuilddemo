"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useProjectStore } from "@/lib/stores/projectsStore";
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  isValidSectionData,
} from "@/lib/utils/sectionDataHelpers";
import ProjectCard from "../latestHandover/ProjectCard";
import ProjectCardNew from "./ProjectCardNew";
import ProjectCardModule from "../Cards/ProjectCardModule";

const ProjectsOnDetailPage = ({ data }) => {
  console.log("ProjectsOnDetailPage", data);

  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState(null)
  if (!isValidSectionData(data)) return null;

  const { projects, isLoading, error, getAllprojects } = useProjectStore();

  // Fetch projects on mount
  useEffect(() => {
    getAllprojects();
  }, [getAllprojects]);

  // --- Dynamic heading + subheading ---
  const subHeading =
    getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING) ||
    "Where Luxury Meets Architectural Brilliance";

  const heading =
    getFieldValue(data, COMMON_FIELD_NAMES.HEADING) ||
    "Premium Luxury Development";

  const handleNavigate = (project) => {
    if (project?.slug) {
      router.push(`/update-all-properties/${project.slug}`);
    }
  };
  console.log('selectedProject', selectedProject);

  return (
    <div className="max-w-[1200px] mx-auto py-16 px-6 md:px-12">
      {/* Heading Section */}
      <div className="text-start mb-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">{heading}</h1>
        <h6 className="text-sm text-gray-600 font-semibold max-w-2xl tracking-wide uppercase">
          {subHeading}
        </h6>
        {/* <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded"></div> */}
      </div>

      {/* Loading / Error States */}
      {isLoading && <p className="text-center">Loading projects...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Projects Cards */}
      {!isLoading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCardNew
            key={i}
            slug={p.slug}
            images={p.images}
            location={p.location}
            title={p.title}
            beds={p.beds}
            size={p.size}
            price={p.price}
            description={p.description}
          />
        ))}
      </div> */}
      {/* Modal */}
      {selectedProject && (
        <ProjectCardModule
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
};

export default ProjectsOnDetailPage;

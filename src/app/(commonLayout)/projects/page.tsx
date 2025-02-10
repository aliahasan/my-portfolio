import AboutMyProject from "@/components/AboutMyProject";
import ProjectCard from "@/components/ProjectCard";
import { TProject } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | My Portfolio",
  description: "Explore my latest projects built with modern technologies.",
};

const ProjectsPage = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/project/projects`,
    {
      cache: "no-store",
    }
  );
  const projectsData = await response.json();

  return (
    <div className="min-h-screen bg-white dark:bg-[#030712] text-gray-900 dark:text-gray-200 transition-colors duration-300">
      {/* Header Section */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="mt-2 text-lg text-my-light  dark:text-my-dark">
          Here are some of the projects I have built with modern technologies.
        </p>
      </section>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData?.data?.map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
      {/* About My Projects Section */}
      <section className="py-12 text-center mt-12">
        <AboutMyProject />
      </section>
    </div>
  );
};

export default ProjectsPage;

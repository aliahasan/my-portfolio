import ProjectCard from "@/components/ProjectCard";
import { TProject } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nabin's | Projects",
  description:
    "Discover my latest projects, built with cutting-edge technologies such as React, Next.js, Node.js, and more. Explore my journey in web development.",
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
    <div className="transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-10">
        <div className="">
          <h1 className="text-3xl text-center md:text-start font-bold text-black dark:text-white underline underline-offset-8">
            My Projects
          </h1>
          <div className="text-center md:text-start">
            <p className="mt-4 text-lg text-my-light dark:text-my-dark">
              Explore a collection of my personal and professional projects,
              showcasing my expertise in front-end and full-stack development.
            </p>
            <p className="text-lg text-my-light  dark:text-my-dark mt-2">
              A collection of my completed projects, demonstrating my skills in
              building scalable and efficient applications.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {projectsData?.data?.map((project: TProject) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </section>

      {/* About My Projects Section */}
      {/* <section className="dark:bg-my-bg my-10 rounded-md bg-[#F3F4F6] py-16  text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-my-light dark:text-my-dark">
            About My Projects
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            My projects range from simple UI components to full-fledged web
            applications, including e-commerce platforms, SaaS products, and
            custom admin dashboards. I constantly improve my skills and
            integrate the latest trends in web development.
          </p>
        </div>
        <div className="mt-8">
          <AboutMyProject />
        </div>
      </section> */}
    </div>
  );
};

export default ProjectsPage;

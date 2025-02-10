import { TProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  project: TProject;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div>
      <div
        key={project._id}
        className="bg-[#F3F4F6] dark:bg-my-bg rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300"
      >
        <Image
          src={project?.image_url}
          alt="project image"
          width={400}
          height={250}
          className="rounded-lg object-cover w-full h-40"
        />
        <h3 className="text-xl font-semibold mt-4">{project?.name}</h3>
        <p className="text-sm text-my-light dark:text-my-dark mt-2">
          {project.description}
        </p>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project?.technologies?.map((tech: string, index: number) => (
            <span
              key={index}
              className="bg-gray-300 dark:bg-gray-700 text-sm px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between mt-4">
          <Link href={project.live_url}>
            <div className="flex items-center gap-2 text-blue-500 hover:text-blue-700 dark:hover:text-blue-300">
              <FaExternalLinkAlt /> Live Demo
            </div>
          </Link>
          <Link href={`/projects/${project._id}`}>
            <div className="flex items-center gap-2 text-blue-500 hover:text-blue-700 dark:hover:text-blue-300">
              <FaExternalLinkAlt /> View Details
            </div>
          </Link>
          <Link href={project.github_url}>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FaGithub /> GitHub
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

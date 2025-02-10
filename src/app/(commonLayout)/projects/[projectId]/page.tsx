import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type ProjectDetailsProps = {
  params: { projectId: string };
};

const ProjectDetailsPage = async ({ params }: ProjectDetailsProps) => {
  const { projectId } = params;
  const res = await fetch(
    `${process.env.base_url}/project/project/${projectId}`
  );
  const data = await res.json();
  const project = data?.data;

  if (!project) {
    return (
      <div className="text-center text-red-500 text-lg">Project not found.</div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Hero Section - Project Image */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden">
        <Image
          src={project.image_url}
          alt={project.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Project Details */}
      <div className="mt-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {project.name}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {project.description}
        </p>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, index: number) => (
            <Badge
              key={index}
              className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-4 mt-4">
          <Button asChild variant="default" className="flex items-center gap-2">
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          </Button>
          <Button asChild variant="outline" className="flex items-center gap-2">
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </Button>
        </div>

        {/* Additional Project Info */}
        <Card className="mt-6">
          <CardContent className="p-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Project ID:</strong> {project._id}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Created At:</strong>{" "}
              {new Date(project.createdAt).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Last Updated:</strong>{" "}
              {new Date(project.updatedAt).toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;

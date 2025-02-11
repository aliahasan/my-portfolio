import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TProject } from "@/types";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/project/project/${projectId}`
  );
  const data = await res.json();
  const project: TProject = data?.data;
  return {
    title: project?.name,
    description: project?.description,
  };
}

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/project/project/${projectId}`
  );

  const data = await res.json();
  const project = data?.data;

  if (!project) {
    return (
      <div className="text-center text-red-500 text-lg">Project not found.</div>
    );
  }

  return (
    <div className="py-5">
      {/* Hero Section - Project Image */}
      <div className="relative w-full h-[50vh] sm:h-[400px] md:h-[75vh] rounded-md overflow-hidden">
        <Image
          src={project.image_url}
          alt={project.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg object-cover bg-center"
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
          <Button
            asChild
            className="flex items-center gap-2 bg-my-bg dark:bg-white"
          >
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
        <Card className="mt-6 dark:bg-my-bg">
          <CardContent className="py-5">
            <p className="text-sm text-my-light dark:text-my-dark">
              <strong>Project ID:</strong> {project._id}
            </p>
            <p className="text-sm text-my-light dark:text-my-dark">
              <strong>Created At:</strong>{" "}
              {new Date(project.createdAt).toLocaleDateString()}
            </p>
            <p className="text-sm text-my-light dark:text-my-dark">
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

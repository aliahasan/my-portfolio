import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  project: TProject;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="hover:shadow-sm transition-shadow bg-[#F3F4F6] dark:bg-my-bg duration-300">
      <CardHeader>
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={project?.image_url}
            alt="project image"
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardTitle className="text-2xl font-bold">{project?.name}</CardTitle>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
          {project?.description?.length > 100
            ? `${project.description.slice(0, 100)}...`
            : project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {project?.technologies?.map((tech: string, index: number) => (
            <Badge key={index} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex sm:flex-row justify-between gap-x-4">
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link href={project?.live_url} className="flex items-center gap-2">
            <FaExternalLinkAlt /> Live Demo
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link
            href={`/projects/${project._id}`}
            className="flex items-center gap-2"
          >
            <FaExternalLinkAlt /> View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

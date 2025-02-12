/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { deleteProject } from "@/actions/project/project";
import { TProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaEdit, FaExternalLinkAlt, FaGithub, FaTrash } from "react-icons/fa";
import { DeleteAlertDialog } from "./DeleteAlertDialog";
import { Button } from "./ui/button";
import { TableCell, TableRow } from "./ui/table";
import UpdateProjectDialog from "./UpdateProjectDialog";

const ProjectTable = ({ project }: { project: TProject }) => {
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteProject(id);
      if (res?.success) {
        toast.success("Blog deleted successfully");
      }
    } catch (error) {
      toast.error("Failed to delete blog");
    }
  };
  return (
    <TableRow key={project._id}>
      <TableCell className="hidden sm:table-cell">
        <Image
          src={project?.image_url}
          alt={project?.name}
          className="w-16 h-16 rounded-md object-cover"
          width={100}
          height={100}
        />
      </TableCell>

      <TableCell className="max-w-[150px] truncate sm:max-w-none">
        {project?.name}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        <Link
          href={project.live_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 flex items-center gap-1 hover:underline"
        >
          <FaExternalLinkAlt className="text-sm" /> <span>Live Preview</span>
        </Link>
      </TableCell>

      <TableCell className="hidden md:table-cell">
        <Link
          href={project.github_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 flex items-center gap-1 hover:underline"
        >
          <FaGithub className="text-lg" /> <span>GitHub Repo</span>
        </Link>
      </TableCell>

      <TableCell>
        <div className="flex flex-col sm:flex-row gap-2">
          <UpdateProjectDialog project={project}>
            <Button
              variant="default"
              size="sm"
              className="w-full sm:w-auto flex items-center gap-1"
            >
              <FaEdit className="text-sm" /> <span>Update</span>
            </Button>
          </UpdateProjectDialog>
          <DeleteAlertDialog
            text="project"
            onConfirm={() => handleDelete(project._id)}
          >
            <Button
              variant="destructive"
              size="sm"
              className="w-full sm:w-auto flex items-center gap-1"
            >
              <FaTrash className="text-sm" /> <span>Delete</span>
            </Button>
          </DeleteAlertDialog>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default ProjectTable;

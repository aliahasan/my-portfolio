/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateProject } from "@/actions/project/project";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PForm from "@/form/PForm";
import PInput from "@/form/PInput";
import PTextarea from "@/form/PTextArea";
import { TProject } from "@/types";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "./ui/button";

interface UpdateDialogProps {
  children: React.ReactNode;
  project: TProject;
}

const UpdateProjectDialog = ({ children, project }: UpdateDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleUpdate: SubmitHandler<FieldValues> = async (data) => {
    const updatedData = {
      name: data.name,
      image_url: data.image_url,
      live_url: data.live_url,
      github_url: data.github_url,
      technologies: data.technologies
        .split(",")
        .map((tech: string) => tech.trim()),
      description: data.description,
      id: project?._id,
    };

    try {
      const res = await updateProject(updatedData);
      if (res?.success) {
        toast.success("Project updated successfully");
        setOpen(false);
      }
    } catch (error: any) {
      toast.error("Failed to update project");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-full max-w-3xl md:w-4/5">
        <DialogHeader>
          <DialogTitle>Update Project</DialogTitle>
          <DialogDescription>
            Make changes to the project here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <PForm onSubmit={handleUpdate}>
            {/* Grid Layout for Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PInput
                name="name"
                type="text"
                label="Project Name"
                defaultValue={project.name}
              />
              <PInput
                name="image_url"
                type="url"
                defaultValue={project.image_url}
                label="Project Image URL"
              />
              <PInput
                name="live_url"
                type="url"
                defaultValue={project.live_url}
                label="Live URL"
              />
              <PInput
                name="github_url"
                type="text"
                defaultValue={project.github_url}
                label="GitHub URL"
              />
              <PInput
                name="technologies"
                defaultValue={project.technologies?.join(", ")}
                type="text"
                label="Technologies (comma-separated)"
              />
            </div>

            {/* Description - Full Width */}
            <div className="mt-6">
              <PTextarea
                name="description"
                label="Description"
                placeholder="Describe your project"
                defaultValue={project.description}
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <Button type="submit" className="w-full mt-4">
                Update
              </Button>
            </div>
          </PForm>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProjectDialog;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createProject } from "@/actions/project/project";
import PForm from "@/form/PForm";
import PInput from "@/form/PInput";
import PTextarea from "@/form/PTextArea";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const AddProject = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const projectData = {
      name: data.name,
      image_url: data.image_url,
      live_url: data.live_url,
      github_url: data.github_url,
      description: data.description,
      technologies: data.technologies
        .split(",")
        .map((tech: string) => tech.trim()),
    };

    setLoading(true);
    const id = toast.loading("Creating project...");
    try {
      const res = await createProject(projectData);
      console.log(res);
      if (res?.success) {
        toast.success("Project created successfully", { id });
      }
    } catch (error: any) {
      toast.error(
        error?.message || "An error occurred while creating the project",
        { id }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center  px-4">
      <div className="w-full max-w-3xl bg-[#F3F4F6] dark:bg-my-bg shadow-sm rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-black dark:text-white mb-6">
          Add a New Project
        </h2>
        <PForm onSubmit={handleSubmit}>
          {/* Grid Layout for Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PInput name="name" type="text" label="Project Name" required />
            <PInput
              name="image_url"
              type="url"
              label="Project Image URL"
              required
            />
            <PInput name="live_url" type="url" label="Live URL" required />
            <PInput name="github_url" type="text" label="GitHub URL" required />
            <PInput
              name="technologies"
              type="text"
              label="Technologies (comma-separated)"
              required
            />
          </div>

          {/* Description - Full Width */}
          <div className="mt-6">
            <PTextarea
              name="description"
              label="Description"
              placeholder="Describe your project"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className={`w-full py-2 font-bold rounded-lg transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Project"}
            </button>
          </div>
        </PForm>
      </div>
    </div>
  );
};

export default AddProject;

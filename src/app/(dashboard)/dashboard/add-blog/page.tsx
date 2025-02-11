/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createBlog } from "@/actions/blogs/blogs";
import PForm from "@/form/PForm";
import PInput from "@/form/PInput";
import PTextarea from "@/form/PTextArea";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const AddBlog = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const blogData = {
      title: data.title,
      image: data.image,
      category: data.category,
      content: data.content,
    };
    setLoading(true);
    const id = toast.loading("creating blog..");
    try {
      const res = await createBlog(blogData);
      console.log(res);
      if (res?.success) {
        toast.success("Blog created successfully", {
          id,
        });
      }
    } catch (error: any) {
      toast.error(
        error?.message || "An error occurred while creating the blog",
        {
          id,
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center text-black dark:text-white mb-6">
          Add a New Blog
        </h2>
        <PForm onSubmit={handleSubmit}>
          <PInput
            name="title"
            type="text"
            label="Title"
            disabled={loading}
            required
          />
          <PInput
            name="image"
            type="text"
            label="Image URL"
            disabled={loading}
            required
          />
          <PInput
            name="category"
            type="text"
            label="Category"
            disabled={loading}
            required
          />
          <PTextarea name="content" label="Content" disabled={loading} />
          <button
            type="submit"
            className={`w-full py-2 font-bold rounded-lg transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Blog"}
          </button>
        </PForm>
      </div>
    </div>
  );
};

export default AddBlog;

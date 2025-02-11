/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateBlog } from "@/actions/blogs/blogs";
import { Button } from "@/components/ui/button";
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
import { TBlog } from "@/types";
import { useState } from "react"; // Import useState
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface UpdateDialogProps {
  children: React.ReactNode;
  blog: TBlog;
}

export const UpdateDialog = ({ children, blog }: UpdateDialogProps) => {
  const [open, setOpen] = useState(false);
  const handleUpdate: SubmitHandler<FieldValues> = async (data) => {
    const updatedData = {
      title: data.title,
      category: data.category,
      content: data.content,
      image: data.image,
      id: blog?._id,
    };
    try {
      const res = await updateBlog(updatedData);
      if (res?.success) {
        toast.success("Blog updated successfully");
        setOpen(false);
      }
    } catch (error: any) {
      toast.error("Failed to update blog");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-full max-w-xl md:w-4/5">
        <DialogHeader>
          <DialogTitle>Update Blog</DialogTitle>
          <DialogDescription>
            Make changes to the blog here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <PForm onSubmit={handleUpdate}>
            <PInput
              name="title"
              type="text"
              label="Title"
              defaultValue={blog?.title}
            />
            <PInput
              name="category"
              type="text"
              label="Category"
              defaultValue={blog?.category}
            />
            <PInput
              name="image"
              type="text"
              label="Image Url"
              defaultValue={blog?.image}
            />
            <PTextarea
              name="content"
              label="Content"
              defaultValue={blog?.content}
            />
            <Button type="submit" className="w-full mt-4">
              {" "}
              Update
            </Button>
          </PForm>
        </div>
      </DialogContent>
    </Dialog>
  );
};

/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { deleteBlog } from "@/actions/blogs/blogs";
import { TBlog } from "@/types";
import Image from "next/image";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import { DeleteAlertDialog } from "./DeleteAlertDialog";
import { Button } from "./ui/button";
import { TableCell, TableRow } from "./ui/table";
import { UpdateDialog } from "./UpdateDialog";

const BlogTable = ({ blog }: { blog: TBlog }) => {
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteBlog(id);
      if (res?.success) {
        toast.success("Blog deleted successfully");
      }
    } catch (error) {
      toast.error("Failed to delete blog");
    }
  };

  return (
    <TableRow key={blog._id}>
      <TableCell className="hidden sm:table-cell">
        <Image
          src={blog?.image}
          alt={blog?.title}
          className="w-16 h-16 rounded-md object-cover"
          width={100}
          height={100}
        />
      </TableCell>

      <TableCell className="max-w-[150px] truncate sm:max-w-none">
        {blog?.title}
      </TableCell>

      <TableCell className="hidden md:table-cell">{blog?.category}</TableCell>

      <TableCell>
        <div className="flex flex-col sm:flex-row gap-2">
          {/* Delete Button with Alert Dialog */}
          <DeleteAlertDialog
            text="blog"
            onConfirm={() => handleDelete(blog._id)}
          >
            <Button
              variant="destructive"
              size="sm"
              className="w-full sm:w-auto flex items-center gap-1"
            >
              <FaTrash className="text-sm" /> <span>Delete</span>
            </Button>
          </DeleteAlertDialog>

          {/* Update Button */}
          <UpdateDialog blog={blog}>
            <Button
              variant="default"
              size="sm"
              className="w-full sm:w-auto flex items-center gap-1"
            >
              <FaEdit className="text-sm" /> <span>Update</span>
            </Button>
          </UpdateDialog>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default BlogTable;

import BlogTable from "@/components/BlogTable";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TBlog } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Blogs | Portfolio",
  description: "View all my blog posts",
};

const AllBlogs = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blog/blogs`,
    {
      next: {
        tags: ["blogs"],
      },
    }
  );

  const data = await response.json();
  const blogs = data?.data;

  return (
    <div className="container mx-auto   py-6">
      <h1 className="text-2xl font-bold mb-4">All Blogs</h1>
      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="hidden sm:table-cell">Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.length > 0 ? (
              blogs.map((blog: TBlog) => (
                <BlogTable key={blog._id} blog={blog} />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-4">
                  No blogs found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllBlogs;

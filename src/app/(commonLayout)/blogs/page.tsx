import BlogCard from "@/components/BlogCard";
import { TBlog } from "@/types";
import { Metadata } from "next";

// Corrected: Use `metadata` instead of `metaData`
export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Check out the latest blogs on my portfolio website. Explore quantum computing, programming, and more.",
};

const BlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/blogs`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blogs = data?.data;

  if (!blogs)
    return (
      <div>
        <h1 className="text-center caret-red-400">NO Blogs found</h1>
      </div>
    );

  return (
    <div>
      <h1 className="text-3xl text-center my-5 font-bold">
        Explore all blogs <span className="text-teal-600">Blogs</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 max-w-[90%] mx-auto">
        {blogs?.map((blog: TBlog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;

import { getAllBlogs } from "@/actions/blogs/blogs";
import { TBlog } from "@/types";
import BlogCard from "./BlogCard";

const FeaturedBlog = async () => {
  const { data: blogs } = await getAllBlogs();

  return (
    <section className="my-20">
      <div className="w-full max-w-7xl px-4">
        <h2 className="text-3xl font-bold mb-10 underline underline-offset-8 text-center md:text-start">
          Explore my latest blog
        </h2>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 ">
          {blogs?.slice(0, 3)?.map((blog: TBlog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;

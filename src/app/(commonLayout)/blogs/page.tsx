import BlogCard from "@/components/BlogCard";
import { TBlog } from "@/types";
import { Metadata } from "next";

// Updated metadata with a more detailed title and description
export const metadata: Metadata = {
  title: "Blogs | Portfolio",
  description:
    "Explore insightful articles on programming, technology, quantum computing, and much more. Stay updated with the latest trends in the tech world.",
};

const BlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/blogs`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blogs = data?.data;

  if (!blogs)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl text-red-600 font-bold">No blogs found</h1>
      </div>
    );

  return (
    <div>
      {/* Updated heading */}
      <h1 className="text-4xl text-center my-6 font-bold text-my-light  dark:text-my-dark">
        Discover My Latest Insights <span className="">Blogs</span>
      </h1>

      {/* Updated introductory text */}
      <p className="text-center text-my-light  dark:text-my-dark max-w-3xl mx-auto mb-8">
        <i>
          Join me on a journey through the world of technology, programming, and
          quantum computing. In these blogs, I share my thoughts, experiences,
          and knowledge on various topics, aiming to educate and inspire both
          beginners and professionals.
        </i>
      </p>

      {/* New section for featured blog */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold ext-my-light text-my-light  dark:text-my-dark mb-4">
          Featured Blog
        </h2>
        <p className="text-lg text-my-light dark:text-my-dark">
          Check out the latest featured blog that covers a deep dive into the
          future of quantum computing and its implications for the tech
          industry.
        </p>
        <div className="mt-6">
          {/* Add your BlogCard component here for featured content */}
        </div>
      </div>

      {/* Grid layout for the rest of the blogs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 max-w-7xl mx-auto">
        {blogs?.map((blog: TBlog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;

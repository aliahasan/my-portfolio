import { TBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="w-full bg-white dark:bg-my-bg shadow-md rounded-lg overflow-hidden">
      <figure>
        <Image
          src={blog.image}
          width={600}
          height={100}
          alt="blog image"
          className="rounded-t-lg h-64 object-cover"
        />
      </figure>
      <div className="p-6">
        <p className="flex items-center justify-center text-teal-600 bg-teal-100 w-32 rounded-full py-1 text-sm">
          <FaCalendar className="mr-2" />
          {new Date(blog.createdAt).toLocaleDateString()}
        </p>
        <h2 className="text-xl font-bold mt-4">
          {blog.title.length > 30
            ? blog.title.slice(0, 30) + "..."
            : blog.title}
        </h2>
        <p className="text-gray-400 mt-2">
          {blog.content.length > 100
            ? blog.content.slice(0, 60) + "..."
            : blog.content}
          <Link
            href={`/blogs/${blog._id}`}
            className="text-blue-600 ml-1 underline underline-offset-2 "
          >
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;

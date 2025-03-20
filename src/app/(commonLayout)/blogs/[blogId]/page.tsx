import { getAllBlogs } from "@/actions/blogs/blogs";
import MarkDownText from "@/components/MarkDownText";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TBlog } from "@/types";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blogId}`);
  const data = await res.json();
  const blog: TBlog = data?.data;
  return {
    title: blog?.title,
    description: blog?.content,
  };
}

export const generateStaticParams = async () => {
  const { data: blogs } = await getAllBlogs();
  return blogs.slice(0, 3).map((blog: TBlog) => ({
    blogId: blog._id,
  }));
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blogId}`);
  const data = await res.json();
  const blog: TBlog = data?.data;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="dark:bg-my-bg dark:text-white shadow-sm rounded-lg">
        <CardHeader className="flex flex-row items-center space-x-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="https://i.ibb.co.com/xz3wGRw/1702104881729-01-1-1.jpg"
              alt="Author"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>

          <div>
            <CardTitle className="text-lg font-semibold">
              Ali Ahasan Nabin
            </CardTitle>
            <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(blog?.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </CardDescription>
          </div>
        </CardHeader>

        <div className="relative w-full h-96">
          <Image
            src={blog?.image}
            alt={blog?.title}
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>

        {/* Blog Content */}
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-4">{blog?.title}</h1>
          <div className="prose dark:prose-invert max-w-none">
            <MarkDownText text={blog?.content} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogDetailsPage;

"use server";
const backendUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

export const getAllBlogs = async () => {
  const res = await fetch(`${backendUrl}/blog/blogs`, {
    cache: "no-store",
  });
  const blogData = await res.json();
  return blogData;
};

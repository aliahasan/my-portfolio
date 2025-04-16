/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
const backendUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${backendUrl}/blog/blogs`, {
      next: {
        revalidate: 10,
      },
    });
    const blogData = await res.json();
    return blogData;
  } catch (error: any) {
    return Error(error);
  }
};

/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { revalidateTag } from "next/cache";
const backendUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

export const createBlog = async (data: any) => {
  const res = await fetch(`${backendUrl}/blog/create-blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const blogInfo = await res.json();
  revalidateTag("blogs");
  return blogInfo;
};

export const deleteBlog = async (id: string) => {
  const res = await fetch(`${backendUrl}/blog/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await res.json();
  revalidateTag("blogs");
  return response;
};

export const updateBlog = async (data: any) => {
  const { id, ...rest } = data;
  const response = await fetch(`${backendUrl}/blog/update/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rest),
  });
  const result = await response.json();
  console.log(result);
  revalidateTag("blogs");
  return result;
};

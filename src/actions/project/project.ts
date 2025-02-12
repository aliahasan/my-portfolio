/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { revalidateTag } from "next/cache";
const backendUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

export const createProject = async (data: any) => {
  console.log(data);
  const res = await fetch(`${backendUrl}/project/create-project`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  revalidateTag("projects");
  return result;
};

export const updateProject = async (data: any) => {
  console.log(data);
  const { id, ...rest } = data;
  const res = await fetch(`${backendUrl}/project/update/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rest),
  });
  const result = await res.json();
  revalidateTag("projects");
  return result;
};

export const deleteProject = async (id: string) => {
  const res = await fetch(`${backendUrl}/project/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();
  revalidateTag("projects");
  return result;
};

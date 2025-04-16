/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
const url = process.env.NEXT_PUBLIC_BASE_URL as string;
export const getAllProjects = async () => {
  try {
    const res = await fetch(`${url}/project/projects`);
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

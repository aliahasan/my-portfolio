/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
export const sendMessage = async (data: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/messages/send-message`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const response = await res.json();
  return response;
};

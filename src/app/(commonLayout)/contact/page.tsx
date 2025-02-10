/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Card, CardContent } from "@/components/ui/card";
import PForm from "@/form/PForm";
import PInput from "@/form/PInput";
import PTextarea from "@/form/PTextArea";
import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    const id = toast.loading("Sending...");
    setLoading(true);
    try {
      const { data: responseData } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/messages/send-message`,
        formData,
        {
          withCredentials: true,
        }
      );
      if (responseData?.success === true) {
        toast.success("Message sent successfully!", { id });
      }
    } catch (error: any) {
      toast.error("Something went wrong. Please try again later.", { id });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 flex items-center justify-center p-4  transition-colors duration-300">
      <Card className="w-full max-w-lg shadow-sm rounded-lg bg-[#F3F4F6]  transition-colors duration-300 dark:bg-my-bg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-black dark:text-white text-center">
            Contact with Me
          </h2>
          <PForm onSubmit={handleSubmit}>
            <PInput
              type="text"
              name="name"
              placeholder="Your name"
              label="Name"
            />
            <PInput
              type="email"
              name="email"
              placeholder="Your email"
              label="Email"
            />
            <PTextarea placeholder="Message" name="message" label="Message" />
            <button
              type="submit"
              className={`w-full p-2 mt-4 rounded-md bg-blue-500 text-white ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </PForm>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPage;

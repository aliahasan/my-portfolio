import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Portfolio",
  description:
    "Get in touch with me for any inquiries or collaboration opportunities.",
};

const ContactPage = () => {
  return (
    <div className="py-20 flex items-center justify-center p-4  transition-colors duration-300">
      <ContactForm />
    </div>
  );
};

export default ContactPage;

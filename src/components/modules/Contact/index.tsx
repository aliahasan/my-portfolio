import ContactForm from "@/components/ContactForm";
import ContactInfo from "./ContactInfo";

const ContactWithMe = () => {
  return (
    <div className="my-20">
      <div>
        <h3 className="text-center text-3xl font-bold py-8 underline underline-offset-8">
          Contact With me
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactWithMe;

import ContactForm from "@/components/ContactForm";
import ContactInfo from "./ContactInfo";

const ContactWithMe = () => {
  return (
    <div className="my-20">
      <div>
        <h3 className="text-3xl text-center md:text-start font-bold underline underline-offset-8 mb-10">
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

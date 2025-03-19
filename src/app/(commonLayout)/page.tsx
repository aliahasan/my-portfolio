import Education from "@/components/Education";
import Hero from "@/components/Hero";
import ContactWithMe from "@/components/modules/Contact";
import Skills from "@/components/Skills";
import ProjectsPage from "./projects/page";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Education />
      <Skills />
      {/* <FeaturedProject /> */}
      <ProjectsPage />
      <ContactWithMe />
    </div>
  );
};

export default Homepage;

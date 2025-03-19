import Image from "next/image";
import css from "../assets/css-3.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import mongodb from "../assets/mongodb.png";
import nextjs from "../assets/Next.js.png";
import { default as node } from "../assets/node-js.png";
import react from "../assets/react2.png";
import redux from "../assets/redux.png";
import typescript from "../assets/typescript.png";
import SoftSkill from "./Skills/SoftSkill";

const skills = [
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "JavaScript", logo: js },
  { name: "TypeScript", logo: typescript },
  { name: "React.js", logo: react },
  { name: "Next.js", logo: nextjs },
  { name: "Redux", logo: redux },
  { name: "Node.js", logo: node },
  { name: "MongoDB", logo: mongodb },
];

const Skills = () => {
  return (
    <section className="py-12 lg:py-20">
      <div>
        {/* Section Title */}
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-10 underline underline-offset-8">
          My Skills
        </h2>

        {/* Responsive Layout */}
        <div className="flex  flex-col-reverse lg:flex-row gap-5">
          {/* Soft Skills Section */}
          <div className="md:w-full lg:w-1/2 ">
            <SoftSkill />
          </div>
          <div className="lg:border-2 border-gray-400"></div>
          {/* Skills Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3  gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-xl shadow-sm bg-[#F3F4F6] dark:bg-my-bg transition-transform hover:scale-105 border"
                >
                  {/* Icon */}
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={50}
                    height={50}
                    className="mb-4"
                  />
                  {/* Name */}
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

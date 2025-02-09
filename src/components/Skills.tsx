import { Progress } from "@/components/ui/progress";
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
const skills = [
  { name: "HTML", logo: html, progress: 90 },
  { name: "CSS", logo: css, progress: 85 },
  { name: "JavaScript", logo: js, progress: 80 },
  { name: "TypeScript", logo: typescript, progress: 80 },
  { name: "React.js", logo: react, progress: 80 },
  { name: "Next.js", logo: nextjs, progress: 85 },
  { name: "Redux", logo: redux, progress: 85 },
  { name: "Node.js", logo: node, progress: 75 },
  { name: "MongoDB", logo: mongodb, progress: 70 },
];

const Skills = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto ">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-10">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-xl shadow-sm bg-gray-200 dark:bg-my-bg transition-transform hover:scale-105 border"
            >
              {/* Icon */}
              <Image
                src={skill?.logo}
                alt={skill.name}
                width={50}
                height={50}
                className="mb-4"
              />
              {/* Name */}
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {skill.name}
              </h3>
              {/* Progress Bar */}
              <Progress value={skill.progress} className="w-full" />
              <span className="text-sm text-my-light dark:text-my-dark mt-2">
                {skill.progress}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

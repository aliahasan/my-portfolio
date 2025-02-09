"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const myProjects = [
  {
    id: 1,
    name: "Gym Wave",
    image_url: "https://i.ibb.co/4nnk04VM/Screenshot-4.png",
    live_url: "https://gym-wave-client.vercel.app",
    github_url: "https://github.com/aliahasan/Gym-wave-client",
    description:
      "A modern gym management and fitness tracking application. Users can book workout sessions, track progress, and explore fitness plans.",
    tech_stack: [
      "React.js",
      "Tailwind CSS",
      "Redux",
      "ShadCN",
      "MongoDB",
      "Express.js",
    ],
  },
  {
    id: 2,
    name: "The Dragon News",
    image_url: "https://i.ibb.co.com/r2gGDnZj/Screenshot-3.png",
    live_url: "https://the-dragon-news-mu.vercel.app",
    github_url: "https://github.com/aliahasan/react-dragon-news-auth",
    description:
      "A fully responsive newspaper website where users can read the latest news, filter articles by category, and stay updated on global events.",
    tech_stack: ["Next.js", "Tailwind CSS", "ShadCN", "MongoDB", "Express.js"],
  },
  {
    id: 3,
    name: "RideHaven",
    image_url: "https://i.ibb.co.com/5Ny4sw7/Screenshot-2.png",
    live_url: "https://car-shop-olive.vercel.app",
    github_url: "https://github.com/aliahasan/car-shop-frontend",
    description:
      "An online car dealership platform where users can browse, compare, and purchase cars. Includes advanced filtering, user authentication, and a secure checkout system.",
    tech_stack: [
      "React.js",
      "Tailwind CSS",
      "Redux",
      "ShadCN",
      "MongoDB",
      "Express.js",
    ],
  },
  {
    id: 4,
    name: "RideHaven",
    image_url: "https://i.ibb.co.com/5Ny4sw7/Screenshot-2.png",
    live_url: "https://car-shop-olive.vercel.app",
    github_url: "https://github.com/aliahasan/car-shop-frontend",
    description:
      "An online car dealership platform where users can browse, compare, and purchase cars. Includes advanced filtering, user authentication, and a secure checkout system.",
    tech_stack: [
      "React.js",
      "Tailwind CSS",
      "Redux",
      "ShadCN",
      "MongoDB",
      "Express.js",
    ],
  },
];

const FeaturedProject = () => {
  return (
    <div className=" mx-auto  py-12">
      <h1 className="text-4xl text-black dark:text-white text font-bold text-center  mb-12">
        Featured Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {myProjects.map((project) => (
          <Card
            key={project.id}
            className="bg-gray-50 dark:bg-my-bg text-my-light rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image_url}
                alt={project.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-black dark:text-my-dark mb-2">
                {project.name}
              </h2>
              {/* <p className="text-gray-300 mb-4">{project.description}</p> */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech_stack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-my-bg dark:bg-gray-50 dark:text-black text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProject;

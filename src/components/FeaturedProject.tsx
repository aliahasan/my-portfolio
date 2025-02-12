"use client";

import Image from "next/image";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const myProjects = [
  {
    id: 1,
    name: "RideHaven",
    image_url: "https://i.ibb.co.com/5Ny4sw7/Screenshot-2.png",
    live_url: "https://car-shop-olive.vercel.app",
    github_url: "https://github.com/aliahasan/car-shop-frontend",
    description:
      "RideHaven is a comprehensive online car dealership platform designed to provide users with a seamless car-buying experience. Users can browse, compare, and purchase cars with ease. The platform includes advanced filtering options to help users find their perfect vehicle based on make, model, price range, and more. " +
      "I implemented **Shurjopay**, a secure payment gateway, to handle transactions efficiently. Users can purchase cars directly through the platform, with real-time payment confirmation. " +
      "The platform also features a robust order management system where users can view their **order list**, track their **order status**, and **cancel orders** if needed. Additionally, RideHaven includes user authentication, a secure checkout system, and an admin dashboard for managing inventory and orders.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Redux",
      "ShadCN",
      "MongoDB",
      "Express.js",
      "Shurjopay",
    ],
  },
];

const FeaturedProject = () => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <div className="mx-auto py-10 ">
      <h1 className="text-4xl text-black dark:text-white font-bold text-center mb-10">
        Featured Project
      </h1>
      {myProjects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-8 bg-[#F3F4F6] dark:bg-my-bg p-6 rounded-lg shadow-sm"
        >
          {/* Project Image */}
          <div className="w-full lg:w-1/2 h-80 relative rounded-lg overflow-hidden">
            <Image
              src={project.image_url}
              alt={project.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Project Details */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              {project.name}
            </h2>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-300 dark:bg-gray-500 text-sm px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="relative">
              <p
                className={`text-black dark:text-my-dark transition-all ${
                  showFullDesc ? "h-auto" : "h-24 overflow-hidden"
                }`}
              >
                {project.description}
              </p>
              {!showFullDesc && (
                <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#F3F4F6] dark:from-my-bg to-transparent"></div>
              )}
              <button
                onClick={() => setShowFullDesc(!showFullDesc)}
                className="text-blue-500 mt-2"
              >
                {showFullDesc ? "Show Less" : "Read More"}
              </button>
            </div>

            {/* Links with Icons */}
            <div className="flex space-x-4">
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </a>
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProject;

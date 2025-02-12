import { FaExternalLinkAlt, FaGithub, FaLaptopCode } from "react-icons/fa";

const AboutMyProject = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-my-light dark:text-my-dark">
        Why These Projects?
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400 px-6 sm:px-16 lg:px-32">
        These projects demonstrate my expertise in **React.js, Next.js, MongoDB,
        Express.js**, and modern UI frameworks like **Tailwind CSS & ShadCN**.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <FaLaptopCode className="text-blue-500 text-3xl" />
          <span>Modern Web Development</span>
        </div>
        <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <FaGithub className="text-gray-700 dark:text-gray-300 text-3xl" />
          <span>Open Source Contributions</span>
        </div>
        <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <FaExternalLinkAlt className="text-green-500 text-3xl" />
          <span>Live Deployed Apps</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMyProject;

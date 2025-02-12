"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profile from "../assets/profile.png";
import SocialIcons from "./SocialIcons";

const Hero = () => {
  return (
    <section>
      <section className="flex py-10 md:py-20 items-center justify-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <motion.h1
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            >
              Hi, I am Ali Ahasan Nabin
            </motion.h1>

            <h2 className="text-2xl sm:text-3xl mb-6 text-my-light dark:text-my-dark">
              MERN Stack Developer
            </h2>

            <p className="dark:text-my-dark text-my-light text-base sm:text-lg mb-8 leading-relaxed">
              Building digital experiences that matter. Full-stack developer
              specializing in modern web applications with MongoDB, Express.js,
              React, Next.js, and Node.js. Turning ideas into scalable and
              efficient solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start text-center w-full">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/uc?export=download&id=1anmYg2zSkfDjv0hXmCj_toZgizek0MA3"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors duration-300 inline-flex items-center px-8 md:px-4 lg:px-8"
              >
                Get Resume
                <span className="pl-2">
                  <Download />
                </span>
              </motion.a>

              <Link href="/projects">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="sm:w-auto border border-blue-600 text-my-light dark:text-my-dark hover:bg-blue-600/10 px-8 py-3 rounded-lg transition-colors duration-300"
                >
                  View Projects
                </motion.div>
              </Link>
            </div>

            <div className="py-6">
              <SocialIcons />
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative rounded-full w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] overflow-hidden border-4 border-blue-500/50 hover:border-blue-500 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-r opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <Image
                src={profile}
                alt="nabin"
                width={600}
                height={600}
                className="object-contain w-full h-full rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Hero;

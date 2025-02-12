// components/Education.js
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      title: "Secondary School Certificate",
      institution: "Nandail Road High School",
      duration: "2018",
      description:
        "The foundation of my academic journey! Here, I built the discipline and curiosity that led me to the tech world. Countless memories of friends, exams, and the joy of achieving milestones.",
    },
    {
      title: "Higher Secondary Certificate",
      institution: "Gurudayal Government College",
      duration: "Jun 2018 - Dec 2020",
      description:
        "A transformative period filled with deep learning, self-discovery, and unforgettable friendships. Late-night study sessions, group projects, and the thrill of preparing for the future.",
    },
    {
      title: "Bachelor of Arts",
      institution: "Gurudayal Government College",
      duration: "2021 - Present",
      description:
        "A journey of higher learning and personal growth. Exploring new perspectives, expanding my knowledge, and working towards a bright future. Every day is a step toward achieving my dreams.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-center ">Education</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {educationData.map((edu, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-300 dark:bg-my-bg"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {edu.title}
              </CardTitle>
              <p className="text-sm text-my-light dark:text-my-dark">
                {edu.institution}
              </p>
              <p className="text-sm text-my-light dark:text-my-dark">
                {edu.duration}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-my-light dark:text-white">
                {edu.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}

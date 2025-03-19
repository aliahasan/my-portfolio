const SoftSkill = () => {
  const softSkills = [
    {
      title: "Problem Solving",
      description:
        "I enjoy finding solutions to complex problems. I break down big challenges into smaller, manageable parts.",
      icon: "🧩",
    },
    {
      title: "Team Work",
      description:
        "I work well with others and believe good communication makes teams stronger. I value everyone's ideas and contributions.",
      icon: "👥",
    },
    {
      title: "Time Management",
      description:
        "I plan my work carefully and deliver projects on time. I can handle multiple tasks without missing deadlines.",
      icon: "⏱️",
    },
    {
      title: "Communication",
      description:
        "I explain technical ideas in simple ways. I listen carefully and make sure everyone understands each other.",
      icon: "💬",
    },
    {
      title: "Adaptability",
      description:
        "I learn new technologies quickly and adjust to changing project needs. I stay calm when plans change suddenly.",
      icon: "🔄",
    },
    {
      title: "Attention to Detail",
      description:
        "I notice small things that matter. I check my work carefully to avoid mistakes and create high-quality code.",
      icon: "🔍",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {softSkills.map((skill, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border bg-white dark:bg-my-bg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{skill.icon}</span>
              <div>
                <h4 className="font-medium text-black dark:text-white mb-1">
                  {skill.title}
                </h4>
              </div>
            </div>
            <div className="pl-2">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftSkill;

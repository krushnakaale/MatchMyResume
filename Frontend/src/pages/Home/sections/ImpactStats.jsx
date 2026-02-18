import React from "react";

const ImpactStats = () => {
  // Online tech stack logos
  const techs = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
  ];

  return (
    <section className="bg-white border-t border-b border-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-extrabold text-blue-900 text-center mb-10">
          Our Tech Stack
        </h2>

        {techs.length === 0 ? (
          <p className="text-center py-16 text-slate-500">
            No technologies listed yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
            {techs.map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                {tech.logo ? (
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-12 h-12 object-contain"
                  />
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center bg-slate-100 rounded-full text-slate-700 font-bold text-sm">
                    {tech.name[0]}
                  </div>
                )}
                <span className="text-sm font-mono text-slate-600">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ImpactStats;

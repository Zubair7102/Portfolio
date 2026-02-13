import React from "react";

const groupedSkills = [
  { title: "Programming Languages", items: ["Java", "C++", "JavaScript", "HTML", "CSS"] },
  { title: "Frameworks", items: ["Spring Boot", "ReactJS", "ExpressJS", "NodeJS", "Tailwind CSS", "Material UI"] },
  { title: "Databases", items: ["MySQL", "MongoDB", "Redis"] },
  { title: "Testing & Automation", items: ["Selenium", "Postman", "JUnit", "TestNG", "JMeter"] },
  { title: "DevOps & Cloud", items: ["Git", "GitHub", "Docker", "Jenkins", "AWS (EC2, S3, Lambda)"] },
  { title: "Design & Tools", items: ["Figma", "Firebase", "Linux (Ubuntu)"] }
];

const Skills = () => {
  return (
    <section id="skills" name="skills" className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Toolkit</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Technologies I work with</h2>
          </div>
          <p className="hidden text-sm text-gray-400 sm:block">{skills.length}+ practical tools</p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="group rounded-2xl border border-white/10 bg-gray-900/60 p-4 text-center transition hover:-translate-y-1 hover:border-cyan-300/50"
            >
              <img
                src={skill.imageUrl}
                className="mx-auto h-14 w-14 rounded-lg object-contain"
                alt={skill.name}
                loading="lazy"
              />
              <p className="mt-3 text-sm font-semibold text-gray-200">{skill.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

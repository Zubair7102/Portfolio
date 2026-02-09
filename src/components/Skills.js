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
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Skill Matrix</p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Backend, automation, and product engineering stack</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groupedSkills.map((group) => (
            <article key={group.title} className="rounded-2xl border border-white/10 bg-gray-900/60 p-5">
              <h3 className="font-semibold text-cyan-200">{group.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">{group.items.join(" • ")}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <section
      name="projects"
      className="w-full bg-gradient-to-b from-[#0a192f] via-[#122445] to-[#0a192f] text-gray-200 py-24"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="inline-block text-4xl font-bold border-b-4 border-cyan-400 pb-2">
            Major Projects
          </p>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            Selected full-stack projects focused on scalable backend systems,
            interactive user experiences, and production-style engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="rounded-xl border border-cyan-400/20 bg-[#112240]/70 p-4 text-center shadow-lg shadow-black/20">
            <p className="text-2xl font-bold text-cyan-300">3</p>
            <p className="text-sm text-gray-300">Featured Projects</p>
          </div>
          <div className="rounded-xl border border-cyan-400/20 bg-[#112240]/70 p-4 text-center shadow-lg shadow-black/20">
            <p className="text-2xl font-bold text-cyan-300">10+</p>
            <p className="text-sm text-gray-300">Core Technologies</p>
          </div>
          <div className="rounded-xl border border-cyan-400/20 bg-[#112240]/70 p-4 text-center shadow-lg shadow-black/20">
            <p className="text-2xl font-bold text-cyan-300">Production</p>
            <p className="text-sm text-gray-300">Security, APIs & DevOps Focus</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl border border-cyan-300/20 bg-[#112240]/90 p-6 shadow-xl shadow-[#040c16]/60 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/50"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                <span className="text-xs rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-cyan-200">
                  Featured
                </span>
              </div>

              <p className="mt-2 text-cyan-200 text-sm font-medium">{project.tagline}</p>
              <p className="mt-4 text-sm leading-6 text-gray-300">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#0a192f] border border-cyan-300/20 text-cyan-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-5 space-y-2 text-sm text-gray-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="px-0 flex items-start gap-2">
                    <span className="text-cyan-300 mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-cyan-400"
                  >
                    View Project
                  </a>
                )}
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-500 px-4 py-2 text-sm font-semibold text-gray-200 transition-colors duration-300 hover:border-cyan-300 hover:text-cyan-100"
                >
                  Source Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

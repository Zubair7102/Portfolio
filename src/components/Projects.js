import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <section id="projects" name="projects" className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Projects</p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Resume featured projects</h2>

        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-gray-900/60 transition hover:-translate-y-1 hover:border-cyan-300/50"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={project.backgroundImageUrl} alt={project.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/10 to-transparent" />
              </div>

              <div className="space-y-4 p-5">
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <p className="text-sm text-gray-300">{project.tagline}</p>
                <p className="text-xs text-cyan-200">{project.techStack.join(" • ")}</p>

                <ul className="space-y-2 text-sm text-gray-400">
                  {project.highlights.map((point) => (
                    <li key={point} className="!px-0">• {point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 pt-1">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-cyan-400/20 px-3 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/30">
                      Live <FiExternalLink />
                    </a>
                  )}
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-3 py-2 text-sm font-semibold text-gray-200 transition hover:border-gray-400">
                    GitHub <FiGithub />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

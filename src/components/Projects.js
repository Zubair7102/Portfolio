import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <section id="projects" name="projects" className="relative px-6 py-24 md:px-12">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff0a,transparent_55%),linear-gradient(to_bottom,#02061780,transparent_40%)]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
          Projects
        </div>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Things I&apos;ve built</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gray-900/70 shadow-[0_18px_60px_rgba(15,23,42,0.9)] transition-transform duration-300 hover:-translate-y-2 hover:-rotate-1 hover:border-cyan-300/60 hover:shadow-[0_28px_90px_rgba(8,47,73,0.9)]"
            >
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/10 to-blue-500/10">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl transition-all duration-300 group-hover:-right-6 group-hover:-top-6 group-hover:blur-[28px]" />
                {project.backgroundImageUrl ? (
                  <img
                    src={project.backgroundImageUrl}
                    alt={project.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Case Study</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{project.name}</h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-5">
                <div className="space-y-3">
                  {project.tagline && <p className="text-sm text-gray-300">{project.tagline}</p>}

                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-gray-800/80 px-2.5 py-1 text-xs font-medium text-gray-200 ring-1 ring-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="mt-2 space-y-1.5 text-xs text-gray-400">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-cyan-400/20 px-3 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/30"
                    >
                      Live <FiExternalLink />
                    </a>
                  )}
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-3 py-2 text-sm font-semibold text-gray-200 transition hover:border-gray-400"
                  >
                    Source <FiGithub />
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

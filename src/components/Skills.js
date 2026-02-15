import React from "react";
import { SiCanva } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import skills from "../data/skills.json";

const Skills = () => {
  return (
    <section id="skills" name="skills" className="relative px-6 py-24 md:px-12">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff08,transparent_55%)]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Toolkit</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Technologies I work with</h2>
            <p className="mt-2 text-sm text-gray-400">
              A focused mix of Java backend, testing, DevOps, and frontend tools that I use day to day.
            </p>
          </div>
          <p className="hidden text-sm text-gray-400 sm:block">{skills.length}+ practical tools</p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((skill) => {
            const isCanva = skill.name.toLowerCase() === "canva";
            const isDsa = skill.name.toLowerCase() === "dsa";

            return (
              <article
                key={skill.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900/70 p-4 text-center shadow-[0_16px_40px_rgba(15,23,42,0.9)] transition-transform duration-300 hover:-translate-y-2 hover:border-cyan-300/60 hover:shadow-[0_24px_70px_rgba(8,47,73,0.9)]"
              >
                <div className="pointer-events-none absolute inset-x-8 -top-10 h-24 rounded-full bg-gradient-to-br from-cyan-400/20 via-fuchsia-400/10 to-blue-400/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 ring-1 ring-white/10">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                  {isCanva ? (
                    <SiCanva className="relative h-10 w-10 text-[#00C4CC]" aria-hidden />
                  ) : isDsa ? (
                    <FaProjectDiagram className="relative h-10 w-10 text-amber-400" aria-hidden />
                  ) : (
                    <img
                      src={skill.imageUrl}
                      className="relative h-10 w-10 rounded-lg object-contain"
                      alt={skill.name}
                      loading="lazy"
                    />
                  )}
                </div>

                <p className="mt-3 text-sm font-semibold text-gray-200">{skill.name}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

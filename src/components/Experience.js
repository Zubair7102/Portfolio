import React from "react";
import resume from "../data/resume.json";

const Experience = () => {
  return (
    <section id="experience" name="experience" className="relative px-6 py-24 md:px-12">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff08,transparent_55%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-gray-900/70 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.9)]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Experience</p>
          <h3 className="mt-2 text-2xl font-bold text-white">
            {resume.experience.role} · {resume.experience.company}
          </h3>
          <p className="mt-1 text-sm text-gray-400">{resume.title}</p>

          <ul className="mt-5 space-y-3 text-gray-300">
            {resume.experience.points.map((point) => (
              <li key={point} className="flex gap-2 text-sm sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-300" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-cyan-300/25 bg-cyan-400/5 p-7 shadow-[0_18px_60px_rgba(8,47,73,0.7)]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Education &amp; Publication</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{resume.education.college}</h3>
          <p className="mt-1 text-sm font-medium text-cyan-100">{resume.education.degree}</p>
          <p className="text-sm text-gray-300">
            {resume.education.location} · {resume.education.duration}
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-400/5 p-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">Publication</h4>
            <p className="mt-2 text-sm text-gray-100">{resume.publication}</p>
            <a
              href="https://ijsrem.com/download/a-generative-approach-to-argument-structure-extraction/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-cyan-200 underline underline-offset-4"
            >
              View publication
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import resume from "../data/resume.json";

const Experience = () => {
  return (
    <section id="experience" name="experience" className="px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-gray-900/60 p-7">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Experience</p>
          <h3 className="mt-2 text-2xl font-bold text-white">{resume.experience.role} · {resume.experience.company}</h3>
          <ul className="mt-4 space-y-3 text-gray-300">
            {resume.experience.points.map((point) => (
              <li key={point} className="!px-0">• {point}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-cyan-300/20 bg-cyan-400/5 p-7">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Education & Publication</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{resume.education.college}</h3>
          <p className="mt-2 text-gray-300">{resume.education.degree}</p>
          <p className="text-gray-400">{resume.education.location} · {resume.education.duration}</p>

          <div className="mt-6">
            <h4 className="font-semibold text-white">Publication</h4>
            <p className="mt-2 text-gray-300">{resume.publication}</p>
            <a
              href="https://ijsrem.com/download/a-generative-approach-to-argument-structure-extraction/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-cyan-200 underline"
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

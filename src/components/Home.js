import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { FiDownload, FiMail, FiPhone } from "react-icons/fi";
import zubair from "../assets/zubair1.jpg";
import resume from "../data/resume.json";

const Home = () => {
  return (
    <section id="home" name="home" className="relative flex min-h-screen items-center px-6 pb-16 pt-32 md:px-12">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-1 text-sm font-semibold tracking-wide text-cyan-200">
            {resume.title}
          </p>
          <h1 className="text-4xl font-black leading-tight text-gray-100 sm:text-5xl lg:text-6xl">{resume.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300 sm:text-xl">
            Backend-focused engineer with hands-on experience in Spring Boot APIs, CI/CD, automation
            testing, Dockerized deployments, and scalable cloud workflows.
          </p>

          <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-300">
            <a href={`mailto:${resume.email}`} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-gray-900/60 px-3 py-2"><FiMail /> {resume.email}</a>
            <a href={`tel:${resume.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-gray-900/60 px-3 py-2"><FiPhone /> {resume.phone}</a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="projects" smooth duration={500}>
              <button className="group inline-flex items-center gap-3 rounded-xl border border-cyan-300/70 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-100 transition hover:-translate-y-1 hover:bg-cyan-400/20">
                View Major Projects
                <HiArrowNarrowRight className="text-lg transition group-hover:translate-x-1" />
              </button>
            </Link>
            <a
              href="https://drive.google.com/file/d/19dLD-44U3-TPC4WO8ylb5HmGQl6eS_a7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-600 px-6 py-3 font-semibold text-gray-200 transition hover:-translate-y-1 hover:border-gray-400"
            >
              Resume <FiDownload />
            </a>
          </div>
        </div>

        <div className="relative mx-auto max-w-sm">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-300/30 via-violet-300/20 to-fuchsia-300/20 blur-2xl" />
          <img
            src={zubair}
            alt="Mohd Zubair Ahmed"
            loading="lazy"
            className="aspect-square w-full rounded-[2rem] border border-white/20 object-cover shadow-2xl shadow-cyan-900/60"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

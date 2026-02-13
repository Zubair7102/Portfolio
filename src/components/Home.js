import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { FiDownload, FiServer, FiGitBranch } from "react-icons/fi";
import { SiSpringboot, SiAwsamplify } from "react-icons/si";
import zubair from "../assets/zubair1.jpg";
import resume from "../data/resume.json";

const Home = () => {
  const [typedName, setTypedName] = useState("");
  const [typedRole, setTypedRole] = useState("");

  const name = "Mohd Zubair Ahmed";
  const role = "Java Backend Developer & Automation Engineer building reliable services and platforms.";

  useEffect(() => {
    let isMounted = true;

    const typeLine = async (text, setter, delay) => {
      for (let i = 0; i <= text.length; i += 1) {
        if (!isMounted) {
          return;
        }
        setter(text.slice(0, i));
        // eslint-disable-next-line no-await-in-loop
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    };

    const startTyping = async () => {
      await typeLine(name, setTypedName, 70);
      await typeLine(role, setTypedRole, 32);
    };

    startTyping();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="home" name="home" className="relative flex min-h-screen items-center px-6 pb-16 pt-32 md:px-12">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-1 text-sm font-semibold tracking-wide text-cyan-200">
            Software Engineer · Java Backend Developer &amp; Automation Engineer
          </p>
          <h1 className="text-4xl font-black leading-tight text-gray-100 sm:text-5xl lg:text-6xl">
            {typedName}
            <span className="ml-1 inline-block h-10 w-[3px] animate-pulse bg-cyan-300 align-middle" />
          </h1>
          <h2 className="mt-4 max-w-2xl text-lg text-gray-300 sm:text-2xl">{typedRole}</h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-gray-400">
            I design and ship Java Spring Boot backends with clean REST APIs, strong testing practices, and CI/CD pipelines,
            while staying comfortable across the stack whenever it makes the overall product better.
          </p>

          <div className="mt-6 grid gap-3 text-xs text-gray-300 sm:grid-cols-3">
            <div className="flex items-start gap-2 rounded-2xl border border-white/10 bg-gray-900/70 px-3 py-3">
              <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <FiServer />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200">Backend</p>
                <p className="mt-1 text-[11px]">Java, Spring Boot, REST APIs, multithreading</p>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-2xl border border-white/10 bg-gray-900/70 px-3 py-3">
              <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                <SiSpringboot />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-200">Automation</p>
                <p className="mt-1 text-[11px]">JUnit, TestNG, Selenium, Postman, JMeter</p>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-2xl border border-white/10 bg-gray-900/70 px-3 py-3">
              <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
                <FiGitBranch />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-200">DevOps &amp; Cloud</p>
                <p className="mt-1 text-[11px]">Git, Jenkins, Docker, AWS (EC2, S3, Lambda)</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="projects" smooth duration={500}>
              <button className="group inline-flex items-center gap-3 rounded-xl border border-cyan-300/70 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-100 transition hover:-translate-y-1 hover:bg-cyan-400/20">
                Explore Projects
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

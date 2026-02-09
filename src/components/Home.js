import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { FiDownload } from "react-icons/fi";
import zubair from "../assets/zubair1.jpg";

const Home = () => {
  const [typedName, setTypedName] = useState("");
  const [typedRole, setTypedRole] = useState("");

  const name = "Mohd Zubair Ahmed";
  const role = "Full Stack Developer crafting polished digital products.";

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
            Open to internships & freelance collaborations
          </p>
          <h1 className="text-4xl font-black leading-tight text-gray-100 sm:text-5xl lg:text-6xl">
            {typedName}
            <span className="ml-1 inline-block h-10 w-[3px] animate-pulse bg-cyan-300 align-middle" />
          </h1>
          <h2 className="mt-4 max-w-2xl text-lg text-gray-300 sm:text-2xl">{typedRole}</h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-gray-400">
            I build performant React experiences with strong UX thinking, clean architecture,
            and scalable backend integrations.
          </p>

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

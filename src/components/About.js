import React from "react";
import { FaAws, FaDocker, FaJava, FaJenkins } from "react-icons/fa";
import { SiSelenium, SiSpringboot } from "react-icons/si";
import resume from "../data/resume.json";

const focus = [
  { icon: FaJava, label: "Java + Spring Boot", detail: "REST APIs, multithreading, backend architecture" },
  { icon: SiSelenium, label: "Automation Testing", detail: "Selenium, JUnit, TestNG, Postman" },
  { icon: FaJenkins, label: "CI/CD", detail: "Pipelines with Git + Jenkins" },
  { icon: FaDocker, label: "Containerization", detail: "Dockerized deployments for consistency" },
  { icon: FaAws, label: "Cloud Ops", detail: "AWS EC2, S3, Lambda deployments" },
  { icon: SiSpringboot, label: "Performance", detail: "JMeter-driven optimization and reliability" }
];

const About = () => {
  return (
    <section id="about" name="about" className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Professional Summary</p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Java Backend Developer &amp; Automation Engineer</h2>

        <article className="mt-8 rounded-3xl border border-white/10 bg-gray-900/60 p-7 backdrop-blur">
          <p className="leading-relaxed text-gray-300">
            I&apos;m a Computer Science graduate (2025) and Software Engineer at To The New, focused on building high-performance
            Java Spring Boot services, reliable REST APIs, and automation-first delivery pipelines. I work end-to-end on
            backend architecture, from database design and multithreaded logic to API testing with JUnit, TestNG, Selenium,
            Postman, and performance tuning with JMeter.
          </p>
          <p className="mt-4 text-sm text-gray-400">
            I also integrate CI/CD with Git and Jenkins, containerize services with Docker, and deploy to AWS (EC2, S3, Lambda)
            so that releases are fast, observable, and scalable. A strong CS foundation in {resume.education.coursework.join(", ")}
            guides how I design data models, handle concurrency, and keep systems robust in production.
          </p>
        </article>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focus.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-gray-900/70 p-5">
              <item.icon className="text-2xl text-cyan-300" />
              <h3 className="mt-3 font-semibold text-white">{item.label}</h3>
              <p className="mt-2 text-sm text-gray-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

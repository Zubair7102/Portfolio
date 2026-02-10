import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaServer, FaUserGraduate } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

const highlights = [
  { icon: FaUserGraduate, title: "CS Foundation", detail: "Strong in DSA, OOP, and problem-solving." },
  { icon: FaReact, title: "Frontend Craft", detail: "Reusable React UI with Tailwind and animation." },
  { icon: FaServer, title: "Backend Logic", detail: "Node, Express, API integration, and data modeling." },
  { icon: MdDesignServices, title: "Product Design", detail: "Figma-led UI flows focused on usability." }
];

const About = () => {
  return (
    <section id="about" name="about" className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">About</p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Design-minded engineering.</h2>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-gray-900/60 p-7 backdrop-blur"
          >
            <p className="leading-relaxed text-gray-300">
              I&apos;m Mohd Zubair Ahmed, a developer focused on building intuitive web apps that are
              fast, accessible, and visually clear. I enjoy taking products from idea to launch—
              from wireframes and interfaces to API integration and deployment.
            </p>
            <p className="mt-4 leading-relaxed text-gray-400">
              My workflow combines structured engineering with modern design practices to create
              experiences users can trust and enjoy.
            </p>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-cyan-300/20 bg-cyan-400/5 p-7"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">What I bring</p>
            <ul className="mt-4 space-y-3 text-gray-300">
              <li className="!px-0">• Responsive, component-driven frontend systems</li>
              <li className="!px-0">• Clean code and consistent UI hierarchy</li>
              <li className="!px-0">• Collaborative communication and ownership</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-gray-900/70 p-5"
            >
              <item.icon className="text-2xl text-cyan-300" />
              <h3 className="mt-3 font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

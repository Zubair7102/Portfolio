import React from "react";
import links from "../data/links.json";

const Contact = () => {
  return (
    <section id="contact" name="contact" className="px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-3xl border border-white/10 bg-gray-900/60 p-7">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Contact</p>
          <h2 className="mt-2 text-3xl font-bold text-white">Let&apos;s talk backend &amp; automation.</h2>
          <p className="mt-4 text-gray-400">
            I&apos;m open to roles and collaborations where I can design Java Spring Boot backends, automate testing, and help
            ship reliable services with solid CI/CD.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            {links.map((link) => (
              <a
                key={link.platform}
                href={link.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-gray-800/80 p-3 text-center transition hover:border-cyan-300/50"
              >
                <img src={link.imageUrl} className="mx-auto h-10 w-10 object-contain" alt={link.platform} loading="lazy" />
                <p className="mt-2 text-xs font-semibold text-gray-300">{link.platform}</p>
              </a>
            ))}
          </div>
        </div>

        <form
          method="POST"
          action="https://getform.io/f/arolrjvb"
          className="rounded-3xl border border-cyan-300/20 bg-cyan-400/5 p-7"
        >
          <label className="mb-2 block text-sm font-semibold text-cyan-100" htmlFor="name">Name</label>
          <input id="name" className="mb-4 w-full rounded-xl border border-white/10 bg-gray-900/80 p-3 text-gray-100" type="text" name="name" required />

          <label className="mb-2 block text-sm font-semibold text-cyan-100" htmlFor="email">Email</label>
          <input id="email" className="mb-4 w-full rounded-xl border border-white/10 bg-gray-900/80 p-3 text-gray-100" type="email" name="email" required />

          <label className="mb-2 block text-sm font-semibold text-cyan-100" htmlFor="message">Message</label>
          <textarea id="message" rows="6" name="message" className="w-full rounded-xl border border-white/10 bg-gray-900/80 p-3 text-gray-100" required />

          <button className="mt-5 inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-gray-900 transition hover:bg-cyan-300" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

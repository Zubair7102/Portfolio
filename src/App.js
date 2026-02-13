import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 selection:bg-cyan-300/30 selection:text-cyan-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,#22d3ee26,transparent_50%),radial-gradient(circle_at_bottom_left,#a855f726,transparent_50%)]" />
      <Navbar />
      <main className="relative z-10">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;

import React from "react";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-gradient-to-b from-[#0a192f] to-[#1c2a4c] text-gray-300 mt-72 py-20"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center mb-10">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Projects
          </p>
          <p className="py-4 text-lg text-gray-400">
            Here are some of my projects that showcase my skills and creativity.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
          {projects.map((project) => (
            <div
              key={project.id} // Ensure each card has a unique key
              style={{
                backgroundImage: `url(${project.backgroundImageUrl})`,
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-lg flex flex-col justify-center items-center mx-auto content-div bg-cover bg-center h-80 transition-transform duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="bg-gradient-to-t from-[#0a192f] to-transparent h-full w-full flex flex-col justify-end items-center p-4 transition-opacity duration-500 group-hover:opacity-90">
                <h3 className="font-bold text-2xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                <div className="pt-4 flex space-x-4">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <button className="text-center rounded-lg px-4 py-2 bg-cyan-500 text-white font-bold text-lg transition-colors duration-300 hover:bg-cyan-600">
                        Demo
                      </button>
                    </a>
                  )}
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <button className="text-center rounded-lg px-4 py-2 bg-gray-800 text-white font-bold text-lg transition-colors duration-300 hover:bg-gray-700">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import skills from "../data/skills.json";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-max bg-[#0a192f] text-gray-300 mt-40">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-max">
        <div className="my-4">
          <p className="text-4xl font-bold border-b-4 border-cyan-800 inline">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-6 text-center py-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="shadow-lg shadow-[#040c16] hover:scale-105 duration-300 transition-transform flex flex-col justify-center items-center rounded-lg p-4 bg-[#112240] border-2 border-transparent hover:border-cyan-800"
            >
              <img
                src={skill.imageUrl}
                className="w-20 mx-auto mb-2"
                alt={skill.name}
              />
              <p className="mt-2 text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

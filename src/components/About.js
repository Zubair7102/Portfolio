import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-800">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold sm:text-right">
            <p>Hi, know more about me</p>
          </div>
          <div className="text-justify font-semibold ">
          I am a motivated Computer Science student with a strong foundation in ReactJS, UI/UX design, and full-stack development. I also have expertise in C++ and Data Structures & Algorithms, allowing me to create efficient, scalable solutions. I am passionate about creating seamless user experiences and web apps by combining technical skills with design, ensuring that each project is both functional and visually appealing. Committed to continuous learning, I am eager to apply my skills to solve real-world challenges and bring innovative ideas to life.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

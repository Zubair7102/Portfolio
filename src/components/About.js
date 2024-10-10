import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full bg-[#0a192f] text-gray-300 py-16">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4">
          {/* Heading Section */}
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-playfair font-bold inline border-b-4 border-cyan-800">
              About Me
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-playfair font-semibold sm:text-right sm:pr-8">
            <p>Hi, know more about me!</p>
          </div>
          <div className="text-justify font-poppins font-medium leading-relaxed bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-500 transform hover:scale-105">
            <p>
              I am a motivated Computer Science student with a strong foundation in ReactJS, UI/UX design, and full-stack development. My expertise in C++ and Data Structures & Algorithms allows me to build efficient and scalable solutions. I am passionate about creating seamless user experiences by combining technical skills with design, ensuring that each project is both functional and visually appealing. Committed to continuous learning, I strive to apply my skills to solve real-world challenges and bring innovative ideas to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

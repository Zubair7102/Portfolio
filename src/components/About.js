import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaReact, FaPalette, FaServer } from "react-icons/fa";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] text-gray-300 py-16">
      <div className="max-w-[1000px] mx-auto px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-playfair font-bold inline-block relative">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500 rounded-full"></span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-playfair font-semibold mb-4 text-cyan-300">
              Hi, I'm Mohd Zubair Ahmed
            </h3>
            <p className="text-lg font-poppins leading-relaxed">
              A passionate Computer Science student with a knack for creating seamless digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#1c2c4c] rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <p className="text-justify font-poppins text-lg leading-relaxed">
              I am a motivated Computer Science student with a strong foundation in ReactJS, UI/UX design, and full-stack development. My expertise in C++ and Data Structures & Algorithms allows me to build efficient and scalable solutions. I am passionate about creating seamless user experiences by combining technical skills with design, ensuring that each project is both functional and visually appealing. Committed to continuous learning, I strive to apply my skills to solve real-world challenges and bring innovative ideas to life.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: FaUserGraduate, text: "Computer Science Student" },
            { icon: FaReact, text: "React Developer" },
            { icon: FaPalette, text: "UI/UX Designer" },
            { icon: FaServer, text: "Full Stack Developer" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-[#1c2c4c] rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <item.icon className="text-4xl mb-2 text-cyan-400" />
              <p className="text-center font-poppins font-medium">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
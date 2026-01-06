import React, { useEffect, useState } from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import zubair from "../assets/zubair1.jpg";

const Home = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);

  const name = "Mohd Zubair Ahmed";
  const title = "I'm a Full Stack Web Developer";

  // Function to type text one character at a time
  const typeText = async (text, setter, delay) => {
    for (let i = 0; i <= text.length; i++) {
      setter(text.slice(0, i));
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  };

  useEffect(() => {
    const type = async () => {
      await typeText(name, setDisplayedText, 100);
      await typeText(title, setDisplayedTitle, 100);
      setTypingComplete(true);
    };
    type();
  }, []);

  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen flex flex-col justify-center items-center relative">
      {/* Container */}
      <div className="max-w-[1000px] w-full px-8 flex flex-col justify-center items-start h-full z-10">
        <p className="font-bold text-cyan-800 text-lg md:text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#cfd7f0]">
          {displayedText}
          {typingComplete && <span className="animate-blink">|</span>}
        </h1>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#8892b0] mt-2">
          {displayedTitle}
          {typingComplete && <span className="animate-blink">|</span>}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-sm md:text-lg">
          I specialize in building high-quality web applications with modern technologies. Check out my projects or download my resume below!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row">
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-800 hover:border-cyan-800 group rounded transition-all duration-300">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
          <a
            href="https://drive.google.com/file/d/19dLD-44U3-TPC4WO8ylb5HmGQl6eS_a7/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-white border-2 px-6 py-3 my-2 sm:ml-4 flex items-center hover:bg-cyan-800 hover:border-cyan-800 group rounded transition-all duration-300">
              View Resume
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="hidden md:block absolute right-0 top-56 sm:top-48 lg:top-36 mr-8 z-10">
        <img
          src={zubair}
          alt="Profile"
          width={280}
          height={280}
          loading="lazy"
          className="rounded-full object-cover border-4 border-[#0a192f] shadow-lg transition-transform duration-500 transform hover:scale-105"
        />
      </div>
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;

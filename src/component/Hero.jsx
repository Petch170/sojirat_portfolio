import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const Hero = () => {
  return (
    <div id="main">
      <img
        className=" w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="/"
      />
      <div className=" w-full h-screen top-0 left-0 bg-white/70 absolute">
      <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
        <h1 className=" sm:text-5xl text-4xl font-bold text-gray-800 "> I'm Sojirat</h1>
        <h2 className=" flex sm:text-3xl text-2xl pt-4 text-gray-800">
          {" "}
          I'm a
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Full Stack Developer",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "Software Developer",
              2000,
              "Coder",
              2000,
            ]}
            wrapper="span"
            //   cursor={true}
            speed={50}
            style={{
              fontSize: "1em",
              paddingLeft: "5px",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
        </h2>
        <div className="flex justify-between pt-6 max-w-[70px] w-full">
          <FaGithub className=" cursor-pointer" size={20} />
          <FaLinkedinIn className=" cursor-pointer" size={20} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
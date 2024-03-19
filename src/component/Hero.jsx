import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn, FaCloudDownloadAlt } from "react-icons/fa";
import mypic from "../assets/mypic.jpg";
import CV from "../assets/CV_Sojirat.p.pdf";

const Hero = () => {
  return (
    <div id="main">
      <img
        className=" w-full h-screen object-cover object-left scale-x-[-1] "
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="/"
      />
      <div className=" w-full h-screen top-0 left-0 bg-white/60 absolute  ">
        <div className=" flex justify-between items-center h-full m-auto md:px-20 p-4 py-16 flex-col-reverse md:flex-row ">
          {/* max-w-[1040px] */}
          {/* <div className=" max-w-[700px] m-auto h-full w-full flex flex-col  justify-center lg:items-start items-center "> */}
          <div className=" max-w-[700px] h-full w-full flex justify-center items-center flex-col ">
            <h1 className=" flex justify-center sm:text-5xl text-4xl font-bold text-gray-800 ">
              {" "}
              I'm Sojirat.P
            </h1>
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
            <div className="flex justify-between pt-6 max-w-[70px] md:max-w-[100px] w-full">
              <a href="https://github.com/Petch170">
                <FaGithub className=" cursor-pointer size-5 lg:size-7" />
              </a>
              <a href="https://www.linkedin.com/in/sojirat/">
                <FaLinkedinIn className=" cursor-pointer size-5 lg:size-7" />
              </a>
            </div>
            <div className="flex items-center pt-6 max-w-[200px] px-5">
              <a
                href={CV}
                download="CV"
                className=" flex justify-between items-center gap-3 p-2 rounded-xl border border-blue-900 bg-blue-300 text-gray-800 sm:tex-xl text-md font-semibold"
              >
                <FaCloudDownloadAlt className=" cursor-pointer size-5 lg:size-7 items-center" />
                My CV
              </a>
            </div>
          </div>
          <div className="max-w-[700px] h-[80%] w-[80%] justify-center items-center flex pt-16 sm:pt-0 ">
            <img
              src={mypic}
              alt="myPic"
              className=" rounded-full w-full h-full object-cover object-top scale-y-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

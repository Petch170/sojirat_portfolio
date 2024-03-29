import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handle = () => {
    setNav(!nav);
    // console.log('stare changed')
  };

  return (
    <div>
      {/* <p className=" text-blue-800 font-mono">1111</p> */}
      <AiOutlineMenu
        onClick={handle}
        className=" fixed top-4 right-4 z-[99] md:hidden bg-blue-200 rounded-md size-6"
      />
      {nav ? (
        <div className=" fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 ">
          <a
            onClick={handle}
            href="#main"
            className=" w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-auto hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className=" pl-4">Home</span>
          </a>
          <a
            onClick={handle}
            href="#skill"
            className=" w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-auto hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className=" pl-4">Skill</span>
          </a>
          <a
            onClick={handle}
            href="#work"
            className=" w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-auto hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className=" pl-4">Work</span>
          </a>
          <a
            onClick={handle}
            href="#project"
            className=" w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-auto hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className=" pl-4">Project</span>
          </a>
          <a
            onClick={handle}
            href="#contact"
            className=" w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-auto hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className=" pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className=" md:block hidden fixed top-[25%] z-10">
        <div className=" flex flex-col">
          <a
            href="#main"
            className=" rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#skill"
            className=" rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#work"
            className=" rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#project"
            className=" rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#contact"
            className=" rounded-full shadow-lg shadow-gray-400 bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;

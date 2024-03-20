import React from "react";
import { SkillData } from "./SkillData";

const Skill = () => {
  return (
    <div id='skill' className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className=" text-4xl font-bold text-center text-blue-300">Skill</h1>
      <div className=" grid grid-cols-4 lg:grid-cols-8 gap-2 justify-center">
        {SkillData.map((item, i) => {
          return (
            <div key={i} className="border border-gray-300 flex flex-col justify-center items-center  shadow-gray-400 rounded-xl group">
              <div className="p-2 h-max-[87px] w-full">
                <img src={item.image} alt={item.name} className=" w-full h-full object-cover"/>
              </div>
              <div className="pb-2 items-center text-wrap ">
              <p className=" font-semibold text-sm md:text-lg">{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;

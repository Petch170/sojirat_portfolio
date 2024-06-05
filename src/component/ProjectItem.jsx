import React from "react";

const ProjectItem = ({ img, title,url,demo,framework,CSS }) => {
  return (
    <div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-blue-900">
      <img src={img} alt="/" className=" rounded-xl group-hover:opacity-10" />
      <div className=" hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className=" text-2xl font-bold text-white tracking-wider text-center">{title}</h3>
    
    <p className=" pb-4 pt-2 text-white text-center">{framework},{CSS}</p> 
    <div className="flex max-w-[200px] gap-5">
    <a href={demo} ><p className=" text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg ">&nbsp;DEMO&nbsp;</p></a> 
    <a href={url} ><p className=" text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg ">SOURCE</p></a> </div>
    </div>
    </div>
  );
};

export default ProjectItem;

import React from 'react'
import ProjectItem from './ProjectItem'
import imove from '../assets/imove.png'
import reactwork from '../assets/reactwork.png'

const Project = () => {
  return (
    <div id='project' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className=' text-4xl font-bold text-center text-blue-300'>Projects  </h1>
    <p className=' text-center py-8'>Welcome to my project! Here, you'll discover the fruits of my passion and dedication. Join me in exploring my abilities and creative insights!</p>
   <div className=' grid sm:grid-cols-2 gap-12'>
    <ProjectItem img={imove} title='imove App'/>
    <ProjectItem img={reactwork} title='react Assignment'/>
    <ProjectItem/>
   </div>
    </div>
    

  )
}

export default Project
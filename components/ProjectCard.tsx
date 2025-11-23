import React from 'react'

interface ProjectCardProps {
  projectName: string;
  pageLink: string;
  projectDesc: string;
  thumbnail: string;
  tech: string[];
} 

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, pageLink, projectDesc, thumbnail, tech }) => {
  return (

    <a href={pageLink} className="p-6 sm:w-full group md:max-w-sm  border border-gray-300 rounded-sm shadow-sm bg-gray">
    <div className="overflow-hidden rounded-sm overflow-hidden drop-shadow-sm mb-2 h-40">
      <img
        src={thumbnail}
        alt={projectName + " Thumbnail"}
        className=""
      ></img>
    </div>
    <h5 className="mb-2 text-2xl tracking-tight text-gray-900 text-black pt-1">{projectName}</h5>
    <p className="font-normal text-gray-600">{projectDesc}</p>
    <div className="">
    {
      
      tech.map((item, index) => (
      <span 
      key={index}
      className="me-1 inline-flex items-center rounded-md bg-gray px-2 py-1 mt-3 text-xs font-medium text-gray-700 inset-ring inset-ring-gray-800/20">
        {item}
      </span>
      ))
    }
    </div>
    {/* <div className="flex items-end justify-end hover:scale-102 transition" >
      <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
      </svg>
    </div> */}
    </a>



  )
}

export default ProjectCard
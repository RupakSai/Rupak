import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SS1 from './SS1.png'
import { FaSquareGithub } from "react-icons/fa6";
import { TbExternalLink } from "react-icons/tb";

const projects = [
  {
    id: 1,
    title: 'Portfolio website using React',
    desc: 'Crafted with React, my portfolio site showcases my diverse skill set, leveraging useState, useRef, and custom animations for a dynamic user experience. Explore my projects, delve into my expertise, and connect with me through this interactive platform.',
    weblink:'https://rupaksai.github.io./Rupak',
    gitlink: 'https://github.com/RupakSai',
    img: SS1,

  }
]

const Projects = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      once:false,
      mirror:true,
    });
  }, [])
  return (
    <div className='projects'>
      <span className="projects-title">
      Sleek Project Displays
      </span>
      <div className="projects-div">
        {projects.map(project=>(
        <div className="projects-card" key={project.id}>
          <img src={project.img} alt="" />
          <span className='card-det'>
            <span style={{'color':'blue', 'fontSize':'20px'}}>{project.title}</span>
            <span style={{'fontSize':'15px'}}>{project.desc}</span>
            <span><a href={project.weblink}>Visit <TbExternalLink className='ext-icon'/></a><a href={project.gitlink}><FaSquareGithub className='git-icon' /></a></span>
          </span>
        </div>
        ))}
        <span>Much more on the way...</span>
      </div>
    </div>
  )
}

export default Projects

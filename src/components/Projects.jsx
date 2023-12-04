import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


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
    </div>
  )
}

export default Projects

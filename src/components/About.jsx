import React from 'react'
import './Style.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import boy3 from './boy3.jpg';
import boy4 from './boy4.jpg';

import { FiExternalLink } from "react-icons/fi";
import { FaAnglesDown } from "react-icons/fa6";


const About = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      once:false,
      mirror:true,
    });
  }, [])
  return (
    <div className='about'>
      <img src={boy3} alt="" data-aos="fade-right" data-aos-duration="1000"/>
      <span>
        <span className='about-title' data-aos="fade-up" data-aos-duration="1000">About me</span>
        <span style={{'fontSize':'30px'}} data-aos="fade-up" data-aos-duration="1300">Hey there,
          <span style={{'fontSize':'20px'}} data-aos="fade-up" data-aos-duration="1600">I am Rupak Sai, I am a freelance Web Developer skilled in crafting dynamic and user-centric websites. Proficient in React, HTML, CSS, and JavaScript to build responsive, intuitive interfaces. Experienced in backend development with Django, Node.js, and MongoDB, ensuring robust functionality and seamless user experiences. Passionate about transforming ideas into visually appealing and efficient web solutions. Committed to delivering high-quality projects that exceed client expectations. Adaptable, detail-oriented, and dedicated to staying updated with the latest web technologies. A problem-solver who thrives on challenges and enjoys collaborating to bring visions to life.</span>
        </span>
        <a href='#' data-aos="fade-up" data-aos-duration="1000">Resume <FiExternalLink /></a>
        <a href='#contact' data-aos="fade-up" data-aos-duration="1300">Contact <FaAnglesDown /></a>
      </span>
      <img src={boy4} alt=""data-aos="fade-left" data-aos-duration="1000" />
    </div>
  )
}

export default About

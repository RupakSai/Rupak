import React, { useState } from 'react';
import './Style.css';
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Nav = () => { 
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      once:false,
      mirror:false,
    });
  }, [])
  return (
    <div className='nav-bar'>
      <span data-aos="fade-down" data-aos-duration="1500">Rupak.</span>
      <span className='nav-list'>
        <ul>
            <li data-aos="fade-down" data-aos-duration="1300"><a href="https://github.com/RupakSai" target='_blank'><FaSquareGithub /></a></li>
            <li data-aos="fade-down" data-aos-duration="1600"><a href="https://www.linkedin.com/in/rupak-sai-2168b6261/" target='_blank'><FaLinkedin /></a></li>
            <li data-aos="fade-down" data-aos-duration="1900"><a href="https://wa.me/918688487581" target='_blank'><IoLogoWhatsapp /></a></li>
        </ul>
      </span>
    </div>
  );
};

export default Nav;

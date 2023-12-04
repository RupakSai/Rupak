import React from 'react'
import './Style.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import boy2 from './boy2.jpg'
import { LuExternalLink } from "react-icons/lu";


const Home = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      once:false,
      mirror:true,
    });
  }, [])
  return (
    <div className='home'>
      <span>
        <span className='home-title'>
          <span className='home-title'  data-aos="flip-up" data-aos-duration="2000">Freelancing</span>
          <span className='home-title'  data-aos="flip-up" data-aos-duration="2500">Website Developer.</span>
        </span>
        <span data-aos="flip-up" data-aos-duration="3000">Working with ideas. Growing with skills.</span>
      </span>
      <img src={boy2} alt="" data-aos="flip-up" data-aos-duration="1000" />
    </div>
  )
}

export default Home

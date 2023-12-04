import React from 'react'
import './Style.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      once:false,
      mirror:true,
      duration:1000,
    });
  }, [])
  return (
    <div className='contact' id='contact'>
      
    </div>
  )
}

export default Contact

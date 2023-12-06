import React from 'react'
import './Style.css';
import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import boyc from'./boyc.jpg'
import { LuMailOpen } from "react-icons/lu";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {
  const [showNotification, setShowNotification] = useState(false);
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      once:false,
      mirror:true,
    });
  }, [])
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Your form submission logic here

    // If the submission is successful, show a notification
    setShowNotification(true);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    emailjs.sendForm('service_jqqmub9', 'template_8ohizwd', form.current, 'AqJny55V0V7pXWRAN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact' id='contact'>
      <div className="contact-1">
        <span className="contact-title" data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="false">
          Contact me
        </span>
        <form ref={form} onSubmit={sendEmail}>
        <span className='contact-item-name' data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="false">Name:</span>
        <span className="contact-item">
          <input type="text" data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="false" name='user_name' required />
        </span>
        <span className='contact-item-name' data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="false">Email:</span>
        <span className="contact-item">
          <input type="email" data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="false" name='user_email'  required/>
        </span>
        <span className='contact-item-name' data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="false">Message:</span>
        <span className="contact-item">
          <input type="text" className='contact-inp' data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="false" name='message' required />
        </span>
        <button type='submit' className='c-submit' >Submit!</button>
        </form>
        {showNotification && (
        <div className="notification">Submitted successfully</div>
      )}
      </div>
      <div className="contact-2">
        <img src={boyc} alt="" data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="false" />
        <a href="mailto:rupaksai2809@gmail.com" className='contact-a' data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="false">Mail to me! <LuMailOpen /></a>
        <span>
        <a href="https://github.com/RupakSai" target='_blank' data-aos="fade-left" data-aos-duration="1400" data-aos-mirror="false"><FaSquareGithub /></a>
        <a href="https://www.linkedin.com/in/rupak-sai-2168b6261/" target='_blank' data-aos="fade-left" data-aos-duration="1200" data-aos-mirror="false"><FaLinkedin /></a>
        <a href="https://wa.me/918688487581" target='_blank' data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="false"><IoLogoWhatsapp /></a>
        </span>

      </div>
    </div>
  )
}

export default Contact

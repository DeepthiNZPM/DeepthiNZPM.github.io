import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiLinkedinLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7xhz1er', 'template_47qwjzf', form.current, 'CgEYGjhd--xlaJTHk')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <p>Get In Touch</p>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h3>Email</h3>
            <h4 style={{ color: 'var(--color-light)' }}>sivasaideepthin@gmail.com</h4>
            <a href="mailto:sivasaideepthi@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiLinkedinLine className='contact__option-icon'/>
            <h3>LinkedIn</h3>
            <h4 style={{ color: 'var(--color-light)' }}>Siva Nizampatnam</h4>
            <a href="https://www.linkedin.com/in/siva-nnamizampat/" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='from_name' placeholder='Your Full Name' required />
          <input type="email" name='reply_to' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <div className='contact__button'>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
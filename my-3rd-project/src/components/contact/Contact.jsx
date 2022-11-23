import React from 'react';
import './contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {ImWhatsapp} from 'react-icons/im';
import { useRef } from 'react';
import emailjs from 'emailjs-com'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
  
  useEffect(() => {
    AOS.init();
  }, [])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2uo3oha', 'template_izoqwjf', form.current, 'xvfYKeMhs-Elx9Dfa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>&lt;Contact Me&#47;&gt;</h2>


      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-offset="150"
          >
            <MdOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>aarondb124@gmail.com</h5>
            <a target="_blank" rel="noreferrer" href="mailto:aarondb124@gmail.com">Send a message</a>
          </article>

          <article className='contact_option'
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-offset="150"
          >
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Aaron</h5>
            <a target="_blank" rel="noreferrer" href="https://m.me/michel.andrew.5015/">Send a message</a>
          </article>

          <article className='contact_option'
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="50"
          >
            <ImWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+8801918617195</h5>
            <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone+8801918617195">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-offset="250"
        >
          <input type="text" name='name'  placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button  type='submit'  className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      
    </section>
  )
}

export default Contact
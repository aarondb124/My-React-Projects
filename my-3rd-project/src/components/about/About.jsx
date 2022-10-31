import React from 'react';
import './about.css';
import Me from '../../assets/About-Me.jpeg'
import { RiAwardFill } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { VscFolderActive } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about' >
       
       <h5>Get to know</h5>
       <h2>About Me</h2>

       <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
                  < RiAwardFill className='about_icon' />
              <h5>Experiences</h5>
              <small>No Experience</small>
            </article>

            <article className='about_card'>
                  < FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>20+</small>
            </article>

            <article className='about_card'>
                  < VscFolderActive className='about_icon' />
              <h5>Projects</h5>
              <small>2+ Completed</small>
            </article>
          </div>
          <p>
          I am a man of ambition. No matter how dififcult the task is, I will try my best to complete it. If I don't know the way to do it, I will find a way to accomplish it. Working hard is my only character. I truly believe in god. By his gress I can manage any dififcult situation.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
       </div>
    </section>
  )
}

export default About
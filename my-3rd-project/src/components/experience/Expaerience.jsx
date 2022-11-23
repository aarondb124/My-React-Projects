import React from 'react';
import './experience.css';
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt } from 'react-icons/fa'
import { DiJavascript } from 'react-icons/di'
import { BsBootstrapFill } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { SiPhp } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { SiCplusplus } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { GrNode } from 'react-icons/gr'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Expaerience = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (

    <section id='Experience'>

      <h5>What Skills I Have</h5>
      <h2>&lt;My Experience&#47;&gt;</h2>
     
      <div className="container experience_container">
        
        <div className="experience_frontend" 
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-offset="250"
     data-aos-easing="ease-in-sine"
        >
          <h3>&lt;Frontend Development&#47;&gt;</h3>
          <div className="experience_content">
            <article className='experience_details'>
            < AiFillHtml5 className='experience_details-icons'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experieced</small>
            </div>
            </article>
            <article className='experience_details'>
            < FaCss3Alt className='experience_details-icons'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experieced</small>
            </div>
            </article>
            <article className='experience_details'>
            < DiJavascript className='experience_details-icons'/>
            <div>
            <h4>Java Script</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            < BsBootstrapFill className='experience_details-icons'/>
            <div>
            <h4>Boot Strap</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            < FaReact className='experience_details-icons'/>
            <div>
            <h4>React Js</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>
        

        
        <div className="experience_backend"
         data-aos="fade-left"
         data-aos-duration="800"
         data-aos-offset="250"
         data-aos-easing="ease-in-sine"
         >
          <h3>&#36;Backend Development&#36;</h3>
          <div className="experience_content">
          <article className='experience_details'>
            < SiPhp className='experience_details-icons'/>
            <div>
            <h4>PHP</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className='experience_details'>
            < GrMysql className='experience_details-icons'/>
            <div>
            <h4>Mysql</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            < SiCplusplus className='experience_details-icons'/>
            <div>
            <h4>C++</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            < SiPython className='experience_details-icons'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className='experience_details'>
            < GrNode className='experience_details-icons'/>
            <div>
            <h4>Node Js</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>
          </div>
        </div>
        
      </div>


    </section>
  )
}

export default Expaerience
import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer_logo'>AD</a>


      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Experience">Experiment</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>

      <div className="portfolio_socials"
      
      >
        <a 
        href="https://m.me/michel.andrew.5015/"
          
        ><FaFacebookF/></a>
        <a
         href="https://www.instagram.com/aaron_debakor_biswas/"
          
          ><FiInstagram/></a>
        <a href="https://twitter.com"
        
        ><BsTwitter/></a>
      </div>

      <div className="footer_copyright">
        <h5>This website is created with the help of <span style={{color: "green"}}>HTML</span>,
        <span style={{color: "red"}}>CSS</span>,
        <span style={{color: "yellow"}}>JSX</span>,
        <span style={{color: "lightblue"}}>Reactjs</span>,
        <span style={{color: "pink"}}>Emailjs</span>.
        </h5>
        <small>
          &copy;Aaron_Debakor.All right reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer
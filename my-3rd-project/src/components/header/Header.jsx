import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Header.css';
import CTA from './CTA';
import Me from '../../assets/pp.png';
import HeaderSocials from './HeaderSocials';
import {FaCloudMoon} from 'react-icons/fa'
import {FaSun} from 'react-icons/fa'

const Header = () => {

  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    if(theme === "dark-theme") {
      setTheme("light-theme")
      
    }else{
      setTheme("dark-theme")
    }
  };

  const icon = theme === "light-theme" ? < FaCloudMoon /> : < FaSun />;

  const mode = theme === "light-theme" ?  "Night Mode"  :  "Day Mode" ;

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <header id='header'>
      <div classname="container header_container">
        <a href="#header" className='change_theme' onClick={() => toggleTheme()}>
          {icon} <span><h5>{mode}</h5></span> 
        </a>
        <h5 className="hello">Hello I'm</h5>
        <h1 className="name">Aaron Debakor</h1>
        <h5 className="text-light">&lt;Frontend Developer&#47;&gt;</h5>
        < CTA />
        < HeaderSocials />

        <div className='me'
        
        
        >
          <img src={Me} alt="me" />
        </div>
        <div className="scroll">
        <a href="#contact" >Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header
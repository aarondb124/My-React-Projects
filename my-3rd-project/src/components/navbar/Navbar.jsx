import React from 'react';
import './navbar.css';
import { AiOutlineHome } from "react-icons/ai";
import {useState} from 'react';
import { RiContactsBook2Fill } from "react-icons/ri";
import { AiOutlineExperiment } from "react-icons/ai";
import { MdHomeRepairService } from "react-icons/md";
import { IoMdContact } from "react-icons/io";


const Navbar = () => {
  const[activeNav, setActiveNav] = useState('#header')
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiContactsBook2Fill/></a>
      <a href="#Experience" onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ''}><AiOutlineExperiment/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdHomeRepairService/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoMdContact/></a>
    </nav>
  )
}

export default Navbar
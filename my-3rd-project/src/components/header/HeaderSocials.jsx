import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aaron-d-angshu-3b2228193/" >< BsLinkedin /></a>
      <a target="_blank" rel="noreferrer" href="https://github.com/aarondb124" >< BsGithub /></a>
      <a target="_blank" rel="noreferrer" href="https://m.me/michel.andrew.5015/" ><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials
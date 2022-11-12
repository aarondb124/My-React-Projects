import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/aaron-d-angshu-3b2228193/" target="_self">< BsLinkedin /></a>
      <a href="https://github.com" target="_self">< BsGithub /></a>
      <a href="https://facebook.com" target="_self"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials
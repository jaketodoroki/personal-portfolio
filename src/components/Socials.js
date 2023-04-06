// import { dividerClasses } from "@mui/material";
import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Socials = () => {
  return ( 
    <div className="socials">
      <a href="https://github.com/jaketodoroki"><BsGithub /></a>
      <a href="https://www.linkedin.com/in/jake-todoroki/"><BsLinkedin /></a>
    </div>  
  );
}
 
export default Socials;
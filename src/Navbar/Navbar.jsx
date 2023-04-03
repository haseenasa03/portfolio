import React, { useEffect } from 'react'
import { Link } from 'react-scroll';
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import {faHome,faComputer,faMoon,faSun,faUser,faBriefcase,faAddressCard} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
const Navbar = (props) => {

    let[click,setClick]=useState(true)
useEffect(()=>{
  props.method(click)
},[click])

  
/*scroll part*/
const [scrolled,setScrolled]= useState(false)
const scrollToActive=()=>{
  if(window.scrollY>=75){
    setScrolled (true);
  } else { setScrolled(false)}
}
window.addEventListener("scroll", scrollToActive);

  return<>
  <div className="nav-wrap">
  <nav className={scrolled?"nav-bar-scrolled":'nav-bar'}>
      <Link to="header" spy={true} smooth={true} offset={-200} duration={100}><FontAwesomeIcon icon={faHome}/></Link> 
      <Link to="aboutme" spy={true} smooth={true} offset={-200} duration={100}><FontAwesomeIcon icon={faUser}/></Link> 
      <Link to="skill" spy={true} smooth={true} offset={-200} duration={100} ><FontAwesomeIcon icon={faComputer}/></Link> 
      <Link to="project" spy={true} smooth={true} offset={-200} duration={100} ><FontAwesomeIcon icon={faBriefcase}/></Link> 
      <Link to="contact" spy={true} smooth={true} offset={-200} duration={100} ><FontAwesomeIcon icon={faAddressCard}/></Link> 
     <div onClick={()=>{setClick(!click)}}><FontAwesomeIcon className={click?"faSun":"faMoon"} icon={click?faSun:faMoon}/> </div> 
  </nav>
  </div>
  
  </>
}

export default Navbar
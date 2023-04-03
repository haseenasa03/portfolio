import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skill from './components/Skill/Skill';
import Certificate from './components/Certificate/Certificate';
import Footer from './components/Footer/Footer';
import Project from './components/Project/Project';
import Education from './components/Education/Education';
import React,{ useState } from 'react';
function App() {
  let [click, setClick] = useState(false)
  let trigger = (boolean) => {
    setClick(boolean)
  }

  /* Reveal animation function */
  let reveal=()=>{
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
/**************************************************************** */  
  return <>
    <div className={click ? "dark-theme body-dark" : ""}>
  
      <Router>
        <Navbar method={trigger} />
      </Router>
      <Header />
      <AboutMe />
      <Skill />
      <Certificate />
      <Project />
      <Education />
      <Footer />
    </div>
  </>
}

export default App;

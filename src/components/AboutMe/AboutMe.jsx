import React from 'react'
import img from '../../asset/pk1.jpg'
const AboutMe = () => {
  return <>
  <div id='aboutme' className="container about-container reveal">
  <div className="img-wrap">
    <img className='aboutImg' src={img} alt="" />
  </div>
  <div className="about-text-wrap">
   <h1 className='aboutHeading'>About me</h1>
  <h3>Hi, I'm a MERN stack web developer with a passion for 
    coding and problem-solving. I have strong knowledge in HTML, 
    CSS, and JavaScript, as well as with Node.js, React.js, and MongoDB. 
    I'm eager to put my knowledge to use in a professional environment and 
    look forward to contributing to the success of the team. I'm a fast 
    learner who loves to challenge myself and take on new projects, always 
    looking for ways to improve my development skills.</h3>
  </div>
  </div>
  </>
}

export default AboutMe
import React from 'react'
// import ProgressBar from 'react-bootstrap/ProgressBar';
import html from '../../asset/skillLogo/html.png'
import css from '../../asset/skillLogo/css.png'
import bootstrap from '../../asset/skillLogo/bootstrap.png'
import javascript from '../../asset/skillLogo/javascript.png'
import react from '../../asset/skillLogo/react.png'
import redux from '../../asset/skillLogo/redux.png'
import node1 from '../../asset/skillLogo/nodejs1.png'
import node from '../../asset/skillLogo/nodejs.png'
import expressjs from '../../asset/skillLogo/expressjs.png'
import npm from '../../asset/skillLogo/npm.png'
import git from '../../asset/skillLogo/git.png'
import github from '../../asset/skillLogo/github.png'
import mongodb from '../../asset/skillLogo/mongodb.png'
import figma from '../../asset/skillLogo/figma.png'
import insomnia from '../../asset/skillLogo/insomnia.png'
import postman from '../../asset/skillLogo/postman.png'
import vscode from '../../asset/skillLogo/vscode.png'
const Skill = () => {
  return <>
    <div id="skill" className='skill-wrap reveal'>
      <center><h1 className='skill-heading'>Technical skills</h1></center>
      <div className="skill-logo-container">
         <img src={html} className="skill-logo" alt="no data"/>
         <img src={css} className="skill-logo" alt="no data"/> 
         <img src={bootstrap} className="skill-logo" alt="no data"/>
         <img src={javascript} className="skill-logo" alt="no data"/>
         <img src={react} className="skill-logo" alt="no data"/>
         <img src={redux} className="skill-logo" alt="no data"/>
         <img src={node} className="skill-logo" alt="no data"/>
         <img src={expressjs} className="skill-logo" alt="no data"/>
         <img src={node1} className="skill-logo" alt="no data"/>
          <img src={npm} className="skill-logo" alt="no data"/>
         <img src={git} className="skill-logo" alt="no data"/>
         <img style={{backgroundColor:"white",borderRadius:"50%",border:"1px solid white"}} src={github} className="skill-logo" alt="no data"/>
         <img src={mongodb} className="skill-logo" alt="no data"/>
         <img src={figma} className="skill-logo" alt="no data"/>  
         <img src={insomnia} className="skill-logo" alt="no data"/>  
         <img src={postman} className="skill-logo" alt="no data"/>  
         <img src={vscode} className="skill-logo" alt="no data"/>  
      </div>
      
      
    </div>
  </>
}

export default Skill
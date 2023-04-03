import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faWhatsapp, faTelegram, faGithub,faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return <>
    <div id='contact' className="footer-wrap">
      <div className="contact-wrap">
        <a href="mailto:haseenasuban.01@gmail.com" target='_blank'><FontAwesomeIcon icon={faEnvelope} className="contactIcons gmail" /></a>
        <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B7XEPu7p9SpW%2B6ourCor7LQ%3D%3D" target='_blank'><FontAwesomeIcon icon={faLinkedin} className="contactIcons linkedin" /></a>
        <a href="https://wa.me/6360927560" target='_blank'><FontAwesomeIcon icon={faWhatsapp} className="contactIcons whatsapp" /></a>
        <a href="https://github.com/haseenasa03" target='_blank'><FontAwesomeIcon icon={faGithub} className="contactIcons github" /></a>
       
      </div>

    </div>
    <center><h4 className='copyright'>Copyright &copy; Haseena 2023</h4></center>
  </>
}

export default Footer
import React from 'react'
import certificate from '../../asset/certificate.jpg'
const Certificate = () => {
  return <>
      <div className="container certificate-container reveal">
       <center><h1 className='certificate-heading'>Certificate</h1></center> 
        <img className='certificateImg' src={certificate} alt="no data" />
      </div>
  </>
}

export default Certificate
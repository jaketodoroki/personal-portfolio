import React from 'react'
import '../styles/Footer.css'
import Socials from './Socials';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Socials />
      </div>
      <p> &copy; 2023 jake.t@usmedicalglove.com</p>
    </div>
  )
}

export default Footer
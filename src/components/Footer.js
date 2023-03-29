import React from 'react'
import { Instagram } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Instagram />
        <LinkedIn />
        <GitHub />
      </div>
      <p> &copy; 2022 JakeTodoroki.com</p>
    </div>
  )
}

export default Footer
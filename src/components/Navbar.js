import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [expandNavBar, setExpandNavBar]= useState(false);
  return (
    <div className='navbar'>
       <div className='toggleButton'>
        <button onClick={() => {
          setExpandNavBar((prev) => !prev);
        }}
          >
          <ReorderIcon />
        </button>
       </div>
      <div className='links'>
        <Link to={'/'}> Home </Link>
        <Link to={'/projects'}> Project </Link> 
        <Link to={'/experience'}> Experience </Link>
      </div>
    </div>
  )
}

export default Navbar
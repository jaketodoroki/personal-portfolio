import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [expandNavBar, setExpandNavBar]= useState(false);
    
    const location = useLocation();

    useEffect(() => {
      setExpandNavBar(false);
    }, [location])

  return (
    <div className='navbar' id={expandNavBar ? 'open' : 'close'}>
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
        <Link to={'/projects'}> Projects </Link> 
        <Link to={'/experience'}> Experience </Link>
        <Link to={'/contact'}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
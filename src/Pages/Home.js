import React from 'react'
import { Link } from 'react-router-dom'
import { Email } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi! My name is Jake.</h2>
        <div className='prompt'>
          <p> 
            An ambitious software developer from Denver, Colorado.
          </p>
          <Email>
          </Email>
          <LinkedIn />
          <GitHub />
        </div>
      </div>
      <div className='skills'> 
        <h1> Skills </h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End </h2>
            <span>
              ReactJS, HTML, CSS, NPM
            </span>
          </li>
          <li className='item'>
            <h2> Backend-End </h2>
            <span>
              NodeJs, MongoDB, JSON API, PostgreSQL
            </span>
          </li>
          <li className='item'>
            <h2> Languages </h2>
            <span>
              JavaScript, Python, Typescript, EJS
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
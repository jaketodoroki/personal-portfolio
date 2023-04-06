import React from 'react'
import '../styles/Home.css'
import Socials from '../components/Socials'

function Home() {
  // const handlePageChange() {
  //   window.location.href="pagelink"
  //   }
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi! My name is Jake.</h2>
        <div className='prompt'>
          <p> 
            An ambitious software developer from Denver, Colorado.
          </p>
          <div className='info-links'>
            <Socials />
          </div>
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
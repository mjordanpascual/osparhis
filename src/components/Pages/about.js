import React from 'react'
import { Link } from 'react-router-dom'
import logo from './ospar1logo.png';

const About = () => {
  return (
    <>
      <div className='Navbar-header'>
          <div className='Navbar-logo'>
              <img src={logo} alt="Ospar 1 Logo" />
              <h1 className='Navbar-title'>Ospital ng Parañaque-District 1</h1>
          </div>
          <div className='Navbar-menu'>
            <ul>
              <li><Link to="/policies">Policies</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/home">Home</Link></li>
            </ul>
          </div>
      </div>
          <div className='main-body'>
            <h1>ABOUT</h1>
          </div>
    </> 
  )
}

export default About
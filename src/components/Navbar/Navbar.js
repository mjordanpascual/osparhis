import React from 'react'
import { Link } from 'react-router-dom'
import logo from './ospar1logo.png';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className='Navbar-container'>
        <div className='Navbar-logo'>
          <img src={ logo } alt="Ospar Logo" />
        </div>
        <div id="iconTrigger" class="icon-container hide-desktop">
          <i id="icon" class="fa fa-bars"></i>
        </div>
        <div className='Navbar-title'>
          <h2>Ospital ng Parañaque</h2>
        </div>
          <ul className='Navbar-menu'>
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/about">About</Link></li> */}
            <li><Link to="/policies">Policies</Link></li>
          </ul>
      </div>
    </>
  )
}

export default Navbar
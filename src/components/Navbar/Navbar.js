import React from 'react'
import logo from './ospar1logo.png';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar-header'>
        <div className='Navbar-logo'>
            <img src={logo} alt="Ospar 1 Logo" />
            <h1 className='Navbar-title'>Ospital ng Parañaque-District 1</h1>
        </div>
        <div className='Navbar-menu'>
          <ul>
            <li><a href="/policies">Policies</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/home">Home</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import logo from './ospar1logo.png';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className='Navbar-header'>
            <div className='Navbar-logo'>
                <img src={logo} alt="Ospar 1 Logo" />
            </div>
            <div>
                <h1 className='Navbar-title'>Ospital ng Parañaque-District 1</h1>
            </div>
            <div className='Navbar-menu'>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/policies">Policies</Link></li>
              </ul>
            </div>
      </div>  
    </>
  )
}

export default Navbar
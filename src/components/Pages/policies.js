import React from 'react'
import { Link } from 'react-router-dom'
import logo from './ospar1logo.png';
import './policies.css'
import osparpolicy from '../pdffiles/Admin/OSPARPOLICY.pdf';
import moa from '../pdffiles/Admin/MOA.pdf';


const Policies = () => {
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
      <div className='pol'>
        <h1>POLICIES</h1>
      </div>
      <div className='pol1'>
        <ul>
          <li>
            <a href={osparpolicy} target="_blank" rel="noreferrer"><h1>Medical Division</h1></a>
          </li>
          <li>
            <a href={moa} target="_blank" rel="noreferrer"><h1>Nursing Division</h1></a>
          </li>
          <li>
            <a href={moa} target="_blank" rel="noreferrer"><h1>Business Division</h1></a>
          </li>
          <li>
            <a href={moa} target="_blank" rel="noreferrer"><h1>Administrative Division</h1></a>
          </li>
        </ul>
      </div>
    </> 
  )
}

export default Policies
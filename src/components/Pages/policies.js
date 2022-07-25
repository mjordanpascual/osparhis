import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './policies.css'
import Navbar from '../Navbar/Navbar';

const Policies = () => {
  return (
    <>
      <Navbar />
      <div className='pol'>
        <h1>POLICIES</h1>
      </div>
      <div className='pol1'>
            <ul>
              <li>
                <a href="/meddiv" target="_self"><h1>Medical Division</h1></a>
              </li>
              <li>
                <a href="/nurdiv" target="_self"><h1>Nursing Division</h1></a>
              </li>
              <li>
                <a href="/busdiv" target="_self"><h1>Business Division</h1></a>
              </li>
              <li>
                <a href="/addiv" target="_self"><h1>Administrative Division</h1></a>
              </li>
            </ul>
      </div>
    </> 
  )
}

export default Policies
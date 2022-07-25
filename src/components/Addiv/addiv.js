import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './addiv.css'
import Sao  from './sao';

const Addiv = () => {
  return (
    <>
      <Navbar />
      <div className='main-body'>
        <h1>Administrative Division Policies</h1>
      </div>
      <div className='main-meddiv'>
        <ul>
          <li>
            <Link to="/sao" element={<Sao />}target="_self"><h1>Arnaldo S. Cortez, RN</h1></Link>
            <h3>Supervising Administrative Office</h3>
          </li>
          <li>
            <a href="#">
             <h2>Kerry Anne M. Requiero, RPm - OIC</h2>
            </a>
            <h3>Human Resource</h3>
          </li>
          <li>
            <a href="#">
             <h2>Dianne B. Bernas - OIC</h2>
            </a>
            <h3>Admitting</h3>
          </li>
          <li>
            <a href="#">
             <h2>Joel R. Lombos - OIC</h2>
            </a>
            <h3>Civilian Security Unit</h3>
          </li>
          <li>
            <a href="#">
             <h2>Imelda H. Velasquez - OIC</h2>
            </a>
            <h3>Linen / Laundry</h3>
          </li>
          <li>
            <a href="#">
             <h2>Frederick C. Dacanay - OIC</h2>
            </a>
            <h3>Medical Records</h3>
          </li>
          <li>
            <a href="#">
             <h2>Jerric B. Gosim - OIC</h2>
            </a>
            <h3>Information Technology</h3>
          </li>
          <li>
            <a href="#">
             <h2>Lindsay T. San Miguel - OIC</h2>
            </a>
            <h3>Property</h3>
          </li>
          <li>
            <a href="#">
             <h2>Carmi S. Torio - OIC</h2>
            </a>
            <h3>Telephone Operator - OIC</h3>
          </li>
          <li>
            <a href="#">
             <h2>Quintin A. Opaco - OIC</h2>
            </a>
            <h3>Maintenance</h3>
          </li>
          <li>
            <a href="#">
             <h2>Marlorey D. Villamaria - OIC</h2>
            </a>
            <h3>Transportation</h3>
          </li>
          <li>
            <a href="#">
             <h2>Engr. Mark Louie A. Ona - OIC</h2>
            </a>
            <h3>WMO / Housekeeping / DRRMO - OIC</h3>
          </li>
        </ul>
      </div>  
    </> 
  )
}

export default Addiv
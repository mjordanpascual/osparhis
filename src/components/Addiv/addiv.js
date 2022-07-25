import React from 'react'
import { Link } from 'react-router-dom'
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
            <a href="/">
             <h1>Kerry Anne M. Requiero, RPm - OIC</h1>
            </a>
            <h3>Human Resource</h3>
          </li>
          <li>
            <a href="/">
             <h1>Dianne B. Bernas - OIC</h1>
            </a>
            <h3>Admitting</h3>
          </li>
          <li>
            <a href="/">
             <h1>Joel R. Lombos - OIC</h1>
            </a>
            <h3>Civilian Security Unit</h3>
          </li>
          <li>
            <a href="/">
             <h1>Imelda H. Velasquez - OIC</h1>
            </a>
            <h3>Linen / Laundry</h3>
          </li>
          <li>
            <a href="/">
             <h1>Frederick C. Dacanay - OIC</h1>
            </a>
            <h3>Medical Records</h3>
          </li>
          <li>
            <a href="/">
             <h1>Michael John S. Vallido - OIC</h1>
            </a>
            <h3>Information Technology</h3>
          </li>
          <li>
            <a href="/">
             <h1>Lindsay T. San Miguel - OIC</h1>
            </a>
            <h3>Property</h3>
          </li>
          <li>
            <a href="/">
             <h1>Carmi S. Torio - OIC</h1>
            </a>
            <h3>Telephone Operator - OIC</h3>
          </li>
          <li>
            <a href="/">
             <h1>Quintin A. Opaco - OIC</h1>
            </a>
            <h3>Maintenance</h3>
          </li>
          <li>
            <a href="/">
             <h1>Marlorey D. Villamaria - OIC</h1>
            </a>
            <h3>Transportation</h3>
          </li>
          <li>
            <a href="/">
             <h1>Engr. Mark Louie A. Ona - OIC</h1>
            </a>
            <h3>WMO / Housekeeping / DRRMO - OIC</h3>
          </li>
        </ul>
      </div>  
    </> 
  )
}

export default Addiv
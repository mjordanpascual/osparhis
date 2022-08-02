import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './addiv.css'
import Sao  from './Sao/sao';

const Addiv = () => {
  return (
    <>
      <Navbar />
      <div className='main-body'>
        <h1>Administrative Division Policies</h1>
      </div>
      <div className='main-meddiv'>
        <ul className='divisionPolicies'>
          <li>
            <Link to="/sao" element={<Sao />}target="_self"><h2>Arnaldo S. Cortez</h2></Link>
            <h3>Supervising Administrative Office</h3>
          </li>
          <li>
            <a href="/hr">
             <h2>Kerry Anne M. Requiero, RPm - OIC</h2>
            </a>
            <h3>Human Resource</h3>
          </li>
          <li>
            <a href="/admitting">
             <h2>Dianne B. Bernas - OIC</h2>
            </a>
            <h3>Admitting</h3>
          </li>
          <li>
            <a href="/cwu">
             <h2>Joel R. Lombos - OIC</h2>
            </a>
            <h3>Civilian Security Unit</h3>
          </li>
          <li>
            <a href="/linen">
             <h2>Imelda H. Velasquez - OIC</h2>
            </a>
            <h3>Linen / Laundry</h3>
          </li>
          <li>
            <a href="/mrd">
             <h2>Frederick C. Dacanay - OIC</h2>
            </a>
            <h3>Medical Records</h3>
          </li>
          <li>
            <a href="/it">
             <h2>Michael John S. Vallido - OIC</h2>
            </a>
            <h3>Information Technology</h3>
          </li>
          <li>
            <a href="/property">
             <h2>Lindsay T. San Miguel - OIC</h2>
            </a>
            <h3>Property</h3>
          </li>
          <li>
            <a href="/to">
             <h2>Carmi S. Torio - OIC</h2>
            </a>
            <h3>Telephone Operator - OIC</h3>
          </li>
          <li>
            <a href="/maintenance">
             <h2>Quintin A. Opaco - OIC</h2>
            </a>
            <h3>Maintenance</h3>
          </li>
          <li>
            <a href="/transpo">
             <h2>Marlorey D. Villamaria - OIC</h2>
            </a>
            <h3>Transportation</h3>
          </li>
          <li>
            <a href="/wmo">
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

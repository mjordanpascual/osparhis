import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './addiv.css'
// import Sao  from './Sao/sao';

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
            <Link to="/sao" target="_self"><h2>Arnaldo S. Cortez</h2></Link>
            <h3>Supervising Administrative Office</h3>
          </li>
          <li>
            <Link to="/hr">
             <h2>Kerry Anne M. Requiero, RPm - OIC</h2>
            </Link>
            <h3>Human Resource</h3>
          </li>
          <li>
            <Link to="/admitting">
             <h2>Dianne B. Bernas - OIC</h2>
            </Link>
            <h3>Admitting</h3>
          </li>
          <li>
            <Link to="/cwu">
             <h2>Joel R. Lombos - OIC</h2>
            </Link>
            <h3>Civilian Security Unit</h3>
          </li>
          <li>
            <Link to="/linen">
             <h2>Imelda H. Velasquez - OIC</h2>
            </Link>
            <h3>Linen / Laundry</h3>
          </li>
          <li>
            <Link to="/mrd">
             <h2>Frederick C. Dacanay - OIC</h2>
            </Link>
            <h3>Medical Records</h3>
          </li>
          <li>
            <Link to="/it">
             <h2>Michael John S. Vallido - OIC</h2>
            </Link>
            <h3>Information Technology</h3>
          </li>
          <li>
            <Link to="/property">
             <h2>Lindsay T. San Miguel - OIC</h2>
            </Link>
            <h3>Property</h3>
          </li>
          <li>
            <Link to="/to">
             <h2>Carmi S. Torio - OIC</h2>
            </Link>
            <h3>Telephone Operator - OIC</h3>
          </li>
          <li>
            <Link to="/maintenance">
             <h2>Quintin A. Opaco - OIC</h2>
            </Link>
            <h3>Maintenance</h3>
          </li>
          <li>
            <Link to="/transpo">
             <h2>Marlorey D. Villamaria - OIC</h2>
            </Link>
            <h3>Transportation</h3>
          </li>
          <li>
            <Link to="/wmo">
             <h2>Engr. Mark Louie A. Ona - OIC</h2>
            </Link>
            <h3>WMO / Housekeeping / DRRMO - OIC</h3>
          </li>
        </ul>
      </div>  
    </> 
  )
}

export default Addiv

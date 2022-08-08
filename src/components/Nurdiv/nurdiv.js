import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './nurdiv.css'

const Nurdiv = () => {
  return (
    <>
      <Navbar />
      <div className='main-body'>
        <h1>Nursing Division Policies</h1>
      </div>
      <div className='main-meddiv'>
        <ul className='divisionPolicies'>
          <li>
            <Link to="/chiefnurse">
             <h2>Meda M. Calderon, RN, MAN</h2>
            </Link>
            <h3>Division Head</h3>
            <h4>Chief Nurse</h4>
          </li>
          <li>
            <Link to="/asstchiefnurse">
             <h2>Angeline L. Brillantes RN</h2>
            </Link>
            <h3>Assistant Chief Nurse</h3>
          </li>
          <li>
            <Link to="/infeccont">
             <h2>Georgina L. Rodriguez, RN</h2>
            </Link>
            <h3>Infection Control</h3>
          </li>
          <li>
            <Link to="/superv">
             <h2>Supervisors</h2>
            </Link>
          </li>
          <li>
            <Link to="/headnurse">
             <h2>Head Nurses</h2>
            </Link>
          </li>
          <li>  
            <Link to="/asstheadnurse">
             <h2>Assistant Head Nurses</h2>
            </Link>
          </li>
          <li>
            <Link to="/chargenurse">
             <h2>Charge Nurses</h2>
            </Link>
          </li>
          <li>
            <Link to="/staffnurse">
             <h2>Staff Nurses</h2>
            </Link>
          </li>
          <li>
            <Link to="/midwives">
             <h2>Midwives</h2>
            </Link>
          </li>
          <li>
            <Link to="/naclerks">
             <h2>Nursing Attendant / Clerks</h2>
            </Link>
          </li>
          <li>
            <Link to="/csr">
             <h2>CSR</h2>
            </Link>
          </li>
        </ul>
      </div>
    </> 
  )
}

export default Nurdiv
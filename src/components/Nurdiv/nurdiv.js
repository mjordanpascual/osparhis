import React from 'react'
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
            <a href="/chiefnurse">
             <h2>Meda M. Calderon, RN, MAN</h2>
            </a>
            <h3>Division Head</h3>
            <h4>Chief Nurse</h4>
          </li>
          <li>
            <a href="/asstchiefnurse">
             <h2>Angeline L. Brillantes RN</h2>
            </a>
            <h3>Assistant Chief Nurse</h3>
          </li>
          <li>
            <a href="/infeccont">
             <h2>Georgina L. Rodriguez, RN</h2>
            </a>
            <h3>Infection Control</h3>
          </li>
          <li>
            <a href="/superv">
             <h2>Supervisors</h2>
            </a>
          </li>
          <li>
            <a href="/headnurse">
             <h2>Head Nurses</h2>
            </a>
          </li>
          <li>  
            <a href="/asstheadnurse">
             <h2>Assistant Head Nurses</h2>
            </a>
          </li>
          <li>
            <a href="/chargenurse">
             <h2>Charge Nurses</h2>
            </a>
          </li>
          <li>
            <a href="/staffnurse">
             <h2>Staff Nurses</h2>
            </a>
          </li>
          <li>
            <a href="/midwives">
             <h2>Midwives</h2>
            </a>
          </li>
          <li>
            <a href="/naclerks">
             <h2>Nursing Attendant / Clerks</h2>
            </a>
          </li>
          <li>
            <a href="/csr">
             <h2>CSR</h2>
            </a>
          </li>
        </ul>
      </div>
    </> 
  )
}

export default Nurdiv
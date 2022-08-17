import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './nurdiv.css'

const Nurdiv = () => {
  return (
    <>
      <Navbar />
      <div className='pol'>
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
             <h2>Dr / Lr / Er / Ward</h2>
            </Link>
          </li>
          <li>  
            <Link to="/asstheadnurse">
             <h2>Delivery Room/ Labor Room</h2>
            </Link>
          </li>
          <li>
            <Link to="/chargenurse">
             <h2>Dr / Ob Ward / Opd</h2>
            </Link>
          </li>
          <li>
            <Link to="/staffnurse">
             <h2>Intensive Care Unit</h2>
            </Link>
          </li>
          <li>
            <Link to="/midwives">
             <h2>Lactation And Breastfeeding</h2>
            </Link>
          </li>
          <li>
            <Link to="/naclerks">
             <h2>Medical Surgical Ward</h2>
            </Link>
          </li>
          <li>
            <Link to="/Obgyne">
             <h2>Obstetric And Gynecology Unit</h2>
            </Link>
          </li>
          <li>
            <Link to="/csr">
             <h2>C.S.S.U.</h2>
            </Link>
          </li>
        </ul>
      </div>
    </> 
  )
}

export default Nurdiv
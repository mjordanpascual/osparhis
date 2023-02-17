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
             {/* <h2>Meda M. Calderon, RN, MAN</h2> */}
             <h2>Chief Nurse</h2>
            </Link>
            {/* <h3>Division Head</h3> */}
            {/* <h4>Chief Nurse</h4> */}
          </li>
          <li>
            <Link to="/asstchiefnurse">
             {/* <h2>Angeline L. Brillantes RN</h2> */}
             <h2>Assistant Chief Nurse</h2>
            </Link>
            {/* <h3>Assistant Chief Nurse</h3> */}
          </li>
          <li>
            <Link to="/infeccont">
             {/* <h2>Georgina L. Rodriguez, RN</h2> */}
             <h2>Infection Control</h2>
            </Link>
            {/* <h3>Infection Control</h3> */}
          </li>
          <li>
            <Link to="/superv">
             <h2>Supervisors</h2>
            </Link>
          </li>
          <li>
            <Link to="/drlrer">
             <h2>Dr / Lr / Er / Ward</h2>
            </Link>
          </li>
          <li>  
            <Link to="/midwife">
             <h2>Midwife</h2>
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
            <Link to="/obgyne">
             <h2>Obstetric And Gynecology Unit</h2>
            </Link>
          </li>
          <li>
            <Link to="/or">
             <h2>Operating Room</h2>
            </Link>
          </li>
          <li>
            <Link to="/pedia">
             <h2>PEDIATRIC WARD</h2>
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
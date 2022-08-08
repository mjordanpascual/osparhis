import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './meddiv.css';

const Meddiv = () => {
  return (
    <>
      <Navbar /> 
      <div className='main-body'>
        <h1>Medical Division Policies</h1>
      </div>
      <div className='main-meddiv'>
        <ul className='divisionPolicies'>
          <li>
            <Link to="/coc" target="_self">
             <h2>Dr. Lemuel Lee</h2>
            </Link>
            <h3>Division Head</h3>
            <h4>Chief of Clinics</h4>
          </li>
          <li>
            <Link to="/dietary" target="_self">
             <h2>Kara Angelica L. Benavente, RND</h2>
            </Link>
            <h3>Dietary</h3>
          </li>
          <li>
            <Link to="/labecg" target="_self">
             <h2>Julito F. Santos, RMT</h2>
            </Link>
            <h3>Laboratory / ECG</h3>
          </li>
          <li>
            <Link to="/mss" target="_self">
             <h2>Crisolim C. Villasin, RSW</h2>
            </Link>
            <h3>Medical Social Services / Malasakit</h3>
          </li>
          <li>
            <Link to="/pharma" target="_self">
             <h2>Geraldine L. Ang , Rph</h2>
            </Link>
            <h3>Pharmacy</h3>
          </li>
          <li>
            <Link to="/radio" target="_self">
             <h2>Rosinante C. Garcia, RRT</h2>
            </Link>
            <h3>X-Ray / Ultrasound</h3>
          </li>
          <li>
            <Link to="/pt" target="_self">
             <h2>Nico Ryan C. Garcia, RRT</h2>
            </Link>
            <h3>Physical Therapy</h3>
          </li>
          <li>
            <Link to="/rt" target="_self">
             <h2>Jemma Mae A. Aguilar, RTRP, RN</h2>
            </Link>
            <h3>Respiratory Therapy</h3>
          </li>
        </ul>
      </div>
    </> 
  )
}

export default Meddiv
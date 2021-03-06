import React from 'react'
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
            <a href="/coc" target="_self">
             <h2>Dr. Lemuel Lee</h2>
            </a>
            <h3>Division Head</h3>
            <h4>Chief of Clinics</h4>
          </li>
          <li>
            <a href="/dietary" target="_self">
             <h2>Kara Angelica L. Benavente, RND</h2>
            </a>
            <h3>Dietary</h3>
          </li>
          <li>
            <a href="/labecg" target="_self">
             <h2>Julito F. Santos, RMT</h2>
            </a>
            <h3>Laboratory / ECG</h3>
          </li>
          <li>
            <a href="/mss" target="_self">
             <h2>Crisolim C. Villasin, RSW</h2>
            </a>
            <h3>Medical Social Services / Malasakit</h3>
          </li>
          <li>
            <a href="/pharma" target="_self">
             <h2>Geraldine L. Ang , Rph</h2>
            </a>
            <h3>Pharmacy</h3>
          </li>
          <li>
            <a href="/radio" target="_self">
             <h2>Rosinante C. Garcia, RRT</h2>
            </a>
            <h3>X-Ray / Ultrasound</h3>
          </li>
          <li>
            <a href="/pt" target="_self">
             <h2>Nico Ryan C. Garcia, RRT</h2>
            </a>
            <h3>Physical Therapy</h3>
          </li>
          <li>
            <a href="/rt" target="_self">
             <h2>Jemma Mae A. Aguilar, RTRP, RN</h2>
            </a>
            <h3>Respiratory Therapy</h3>
          </li>
        </ul>
      </div>
    </> 
  )
}

export default Meddiv
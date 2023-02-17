import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './meddiv.css';

const Meddiv = () => {
  return (
    <>
      <Navbar />
      <div className='pol'>
        <h1>Medical Division Policies</h1>
      </div>
      <div className='main-meddiv'>
        <ul className='divisionPolicies'>
          <li>
            <Link to="/coc" target="_self">
             {/* <h2>Dr. Lemuel Lee</h2> */}
             <h2>Chief of Clinics</h2>
            {/* <h3>Division Head</h3> */}
            {/* <h3>Chief of Clinics</h3> */}
            </Link>   
          </li>
          <li>
            <Link to="/dietary" target="_self">
             {/* <h2>Kara Angelica L. Benavente, RND</h2> */}
             <h2>Dietary</h2>
            {/* <h3>Dietary</h3> */}
            </Link>
          </li>
          <li>
            <Link to="/labecg" target="_self">
             {/* <h2>Julito F. Santos, RMT</h2> */}
             <h2>Laboratory / ECG</h2>
            {/* <h3>Laboratory / ECG</h3> */}
            </Link>
          </li>
          <li>
            <Link to="/mss" target="_self">
             {/* <h2>Crisolim C. Villasin, RSW</h2> */}
             <h2>Medical Social Services / Malasakit</h2>
            {/* <h3>Medical Social Services / Malasakit</h3> */}
            </Link>
          </li>
          <li>
            <Link to="/pharma" target="_self">
             {/* <h2>Geraldine L. Ang , Rph</h2> */}
             <h2>Pharmacy</h2>
            {/* <h3>Pharmacy</h3> */}
            </Link>
          </li>
          <li>
            <Link to="/radio" target="_self">
             {/* <h2>Rosinante C. Garcia, RRT</h2> */}
             <h2>X-Ray / Ultrasound</h2>
            {/* <h3>X-Ray / Ultrasound</h3> */}
            </Link>
          </li>
          <li>
            <Link to="/pt" target="_self">
             {/* <h2>Nico Ryan C. Garcia, RRT</h2> */}
             <h2>PT and Rehabilitation Medicine</h2>
            {/* <h3>PT and Rehabilitation Medicine</h3> */}
            </Link>
          </li>
          <li>
            <Link to="/rt" target="_self">
             {/* <h2>Jemma Mae A. Aguilar, RTRP, RN</h2> */}
             <h2>Respiratory Therapy</h2>
            {/* <h3>Respiratory Therapy</h3> */}
            </Link>
          </li>
        </ul>
      </div>
    </> 
  )
}

export default Meddiv
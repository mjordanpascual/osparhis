import React from 'react'
import { Link } from 'react-router-dom'
import './policies.css'
import Navbar from '../Navbar/Navbar';
// import Lee from '../Heads/Lee.jpg'
// import Cortez from '../Heads/Cortez.jpg'
// import Lavarias from '../Heads/Lavarias.jpg'
// import Meda from '../Heads/Meda.jpg'

const Policies = () => {
  return (
    <>
    <Navbar />
      <div className='pol'>
        <h1>POLICIES</h1>
      </div>
      <div className='onp-home'></div>
      <div className='policy-heads'>
        <ul>
          <li>
              <Link to="/meddiv" target="_self">
                <h1 style={{color: 'white'}}>Medical Division</h1>
                {/* <img src={Lee} alt="Dr. Lemuel Lee" className="Heads" /> */}
                <h1><u>Alquiroz Redentor, MD</u></h1>
              </Link>
              <h3>Division Head</h3>
              <h4>Chief of Clinics</h4>
          </li>
          <li>
            <Link to="/nurdiv" target="_self">
              <h1 style={{color: 'white'}}>Nursing Division</h1>
              {/* <img src={Meda} alt="Dr. Lemuel Lee" className="Heads" /> */}
              <h1><u>Meda M. Calderon, RN</u></h1>
            </Link>
              <h3>Division Head</h3>
              <h4>Chief Nurse</h4>
          </li>
          <li>
            <Link to="/busdiv" target="_self">
              <h1 style={{color: 'white'}}>Finance Division</h1>
              {/* <img src={Lavarias} alt="Dr. Lemuel Lee" className="Heads" /> */}
              <h1><u>Rizalina S. Lavarias, CPA</u></h1>
            </Link>
              <h3>Division Head</h3>
              <h4>OIC-In Charge</h4>
          </li>
          <li>
            <Link to="/addiv" target="_self">
              <h1 style={{color: 'white'}}>Administrative Division</h1>
              {/* <img src={Cortez} alt="Dr. Lemuel Lee" className="Heads" /> */}
              <h1><u>Arnaldo S. Cortez, RN</u></h1>
            </Link>
              <h3>Division Head</h3>
              <h4>Supervising Administrative Office</h4>
          </li>
        </ul>  
      </div>
    </> 
  )
}

export default Policies
import React from 'react'
import { Link } from 'react-router-dom'
import './policies.css'
import Navbar from '../Navbar/Navbar';
import Lee from '../Heads/Lee.jpg'
import Cortez from '../Heads/Cortez.jpg'
import Lavarias from '../Heads/Lavarias.jpg'
import Meda from '../Heads/Meda.jpg'

const Policies = () => {
  return (
    <>

      <Navbar />
      <div className='pol'>
        <h1>POLICIES</h1>
      </div>

      <div className='policy-heads'>
        <ul>
          <li>
            <Link to="/meddiv" target="_self">
              <h1>Medical Division</h1>
               <img src={Lee} alt="Dr. Lemuel Lee" className="Heads" />
              <h1><u>Dr. Lemuel Lee, MD</u></h1>
            </Link>
              <h3>Division Head</h3>
              <h4><i>Chief of Clinics</i></h4>
          </li>
          <li>
            <Link to="/nurdiv" target="_self"><h1>Nursing Division</h1>
              <img src={Meda} alt="Dr. Lemuel Lee" className="Heads" />
              <h1><u>Meda M. Calderon, RN</u></h1>
            </Link>
              <h3>Division Head</h3>
              <h4><i>Chief Nurse</i></h4>
          </li>
          <li>
            <Link to="/busdiv" target="_self"><h1>Business Division</h1>
              <img src={Lavarias} alt="Dr. Lemuel Lee" className="Heads" />
              <h1><u>Rizalina S. Lavarias, CPA</u></h1>
            </Link>
              <h3>Division Head</h3>
              <h4><i>Chief of Clinics</i></h4>
          </li>
          <li>
            <Link to="/addiv" target="_self"><h1>Administrative Division</h1>
              <img src={Cortez} alt="Dr. Lemuel Lee" className="Heads" />
              <h1><u>Arnaldo S. Cortez, RN</u></h1>
            </Link>
              <h3>Division Head</h3>
              <h4><i>Supervising Administrative Office</i></h4>
          </li>
        </ul>  
      </div>

    </> 
  )
}

export default Policies
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './busdiv.css'

const Busdiv = () => {
  return (
    <>
      <Navbar />
      <div className='pol'>
        <h1>Business Division Policies</h1>
      </div>
      <div className='main-meddiv'>
        <ul className='divisionPolicies'>
          <li>
            <Link to="/accounting">
             <h2>Rizalina S. Lavarias, CPA</h2>
            </Link>
            <h3>Division Head</h3>
            <h3>Accounting</h3>
          </li>
          <li>
            <Link to="/billing">
             <h2>Gichelle Anne A. Dell Valle  - OIC</h2>
            </Link>
            <h3>Billing Claims & Philhealth</h3>
          </li>
          <li>
            <Link to="/cashier">
             <h2>Martha J. Jose - OIC</h2>
            </Link>
            <h3>Cashier</h3>
          </li>
        </ul>
      </div>
    </> 
  )
}

export default Busdiv
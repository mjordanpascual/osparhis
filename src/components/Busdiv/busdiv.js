import React from 'react'
import Navbar from '../Navbar/Navbar';
import './busdiv.css'

const Busdiv = () => {
  return (
    <>
      <Navbar />
      <div className='main-body'>
        <h1>Business Division Policies</h1>
      </div>
      <div className='main-meddiv'>
        <ul>
          <li>
            <a href="/">
             <h2>Rizalina S. Lavarias, CPA</h2>
            </a>
            <h3>Division Head</h3>
            <h4>Accounting</h4>
          </li>
          <li>
            <a href="/">
             <h2>Gichelle Anne A. Dell Valle  - OIC</h2>
            </a>
            <h3>Billing Claims & Philhealth</h3>
          </li>
          <li>
            <a href="/">
             <h2>Martha J. Jose - OIC</h2>
            </a>
            <h3>Cashier</h3>
          </li>
        </ul>
      </div>
    </> 
  )
}

export default Busdiv
import React from 'react'
import Navbar from '../../Navbar/Navbar'
import MRD  from '../../pdffiles/Mrd/MRD.pdf'
import './mrd.css'

const Mrd = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Medical Records</h1>
        </div>

        <div className='table-policy'>
            <h2>Hospital Policies</h2>
            <table className='table-meddiv'>
                <tr>
                    <th>Department</th>
                    <th>Date</th>
                    <th>Subject</th>
                </tr>
                <tr>
                    <td><i>Medical Records Section</i></td>
                    <td>01-05-2019</td>
                    <td><a href={ MRD } rel="noreferrer" target="_blank">Medical Records Policy 1.2</a></td>
                </tr>
            </table>
        </div>

    </>
  )
}

export default Mrd
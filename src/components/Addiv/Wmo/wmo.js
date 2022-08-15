import React from 'react'
import Navbar from '../../Navbar/Navbar'
import HK  from '../../pdffiles/Hk/HOUSEKEEPING.pdf'
import './wmo.css'

const Wmo = () => {
  return (
    <>
        <Navbar />
        <div className='pol' style={{fontSize: "22px"}}>
            <h1>Waste Management / Housekeeping / DRRMO</h1>
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
                        <td><i>Housekeeping Section</i></td>
                        <td>07-01-2018</td>
                        <td><a href={ HK } rel="noreferrer" target="_blank">Housekeeping Policy 1.1</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Wmo
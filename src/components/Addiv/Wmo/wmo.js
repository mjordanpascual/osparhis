import React from 'react'
import Navbar from '../../Navbar/Navbar'
import HK001  from '../../pdffiles/Hk/POLICY ON BASIC TECHNIQUE ON CLEANING.pdf'
import HK002  from '../../pdffiles/Hk/POLICY ON ON-SITE COLLECTION OF HEALTH CARE WASTE.pdf'
import HK004  from '../../pdffiles/Hk/POLICY ON WASTE MANAGEMENT.pdf'
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
                        <td>August 2022</td>
                        <td><a href={ HK001 } rel="noreferrer" target="_blank">POLICY ON BASIC TECHNIQUE ON CLEANING</a></td>
                    </tr>
                    <tr>
                        <td><i>Housekeeping Section</i></td>
                        <td>August 2022</td>
                        <td><a href={ HK002 } rel="noreferrer" target="_blank">POLICY ON ON-SITE COLLECTION OF HEALTH CARE WASTE</a></td>
                    </tr>
                    <tr>
                        <td><i>Housekeeping Section</i></td>
                        <td>August 2022</td>
                        <td><a href={ HK004 } rel="noreferrer" target="_blank">POLICY ON WASTE MANAGEMENT</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Wmo
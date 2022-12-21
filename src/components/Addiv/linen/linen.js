import React from 'react'
import Navbar from '../../Navbar/Navbar'
import LINEN004  from '../../pdffiles/Linen/POLICY AND GUIDELINES ON COLLECTION OF SOILED LINEN BY PROTECTING THE WORKER FROM INFECTIOUS DISEASES.pdf'
import LINEN003  from '../../pdffiles/Linen/POLICY ON CUTTING AND SEWING.pdf'
import LINEN001  from '../../pdffiles/Linen/POLICY ON DISTRIBUTION OF LINEN TO ALL AREAS CONCERNED.pdf'
import LINEN002  from '../../pdffiles/Linen/POLICY ON ENSURING LINEN FROM OUTSOURCED SERVICES ARE CLEAN.pdf'
import './linen.css'

const Linen = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Linen</h1>
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
                        <td><i>Linen Section</i></td>
                        <td>March 2022</td>
                        <td><a href={ LINEN004 } rel="noreferrer" target="_blank">POLICY AND GUIDELINES ON COLLECTION OF SOILED LINEN BY PROTECTING THE WORKER FROM INFECTIOUS DISEASES</a></td>
                    </tr>
                    <tr>
                        <td><i>Linen Section</i></td>
                        <td>March 2022</td>
                        <td><a href={ LINEN003 } rel="noreferrer" target="_blank">POLICY ON CUTTING AND SEWING</a></td>
                    </tr>
                    <tr>
                        <td><i>Linen Section</i></td>
                        <td>March 2022</td>
                        <td><a href={ LINEN001 } rel="noreferrer" target="_blank">POLICY ON DISTRIBUTION OF LINEN TO ALL AREAS CONCERNED</a></td>
                    </tr>
                    <tr>
                        <td><i>Linen Section</i></td>
                        <td>March 2022</td>
                        <td><a href={ LINEN002 } rel="noreferrer" target="_blank">POLICY ON ENSURING LINEN FROM OUTSOURCED SERVICES ARE CLEAN</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Linen
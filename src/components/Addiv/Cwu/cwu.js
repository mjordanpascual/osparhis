import React from 'react'
import Navbar from '../../Navbar/Navbar'
import CWUIT0001  from '../../pdffiles/Cwu/POLICY ON CCTV.pdf'
import CWU0002  from '../../pdffiles/Cwu/POLICY ON PARKING SERVICES.pdf'
import CWU0001  from '../../pdffiles/Cwu/POLICY ON SECURITY SERVICES.pdf'
import './cwu.css'

const Cwu = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Civilian Watchman Unit</h1>
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
                        <td><i>Civilian Watchman Unit / Information Technology</i></td>
                        <td>2022</td>
                        <td><a href={ CWUIT0001 } rel="noreferrer" target="_blank">POLICY ON CCTV</a></td>
                    </tr>
                    <tr>
                        <td><i>Civilian Watchman Unit</i></td>
                        <td>September 2022</td>
                        <td><a href={ CWU0002 } rel="noreferrer" target="_blank">POLICY ON PARKING SERVICES</a></td>
                    </tr>
                    <tr>
                        <td><i>Civilian Watchman Unit</i></td>
                        <td>September 2022</td>
                        <td><a href={ CWU0001 } rel="noreferrer" target="_blank">POLICY ON SECURITY SERVICES</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Cwu
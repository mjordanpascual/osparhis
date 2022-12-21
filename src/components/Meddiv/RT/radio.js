import React from 'react'
import Navbar from '../../Navbar/Navbar'
import RTS001  from '../../pdffiles/Pulmonary/MISSION and VISION and Duties and Responsibilities.pdf'
import RTS002  from '../../pdffiles/Pulmonary/POLICY ON ARTERIAL BLOOD GAS ANALYSIS (ABG).pdf'
import RTS002a  from '../../pdffiles/Pulmonary/POLICY ON PREPARATION, USAGE, AND MANAGEMENT OF MECHANICAL VENTILATORS FOR PATIENT USE.pdf'

const Rt = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Respiratory Therapy</h1>
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
                        <td><i>Respiratory Therapy</i></td>
                        <td>-</td>
                        <td><a href={ RTS001 } rel="noreferrer" target="_blank">MISSION and VISION and Duties and Responsibilities</a></td>
                    </tr>
                    <tr>
                        <td><i>Respiratory Therapy</i></td>
                        <td>-</td>
                        <td><a href={ RTS002 } rel="noreferrer" target="_blank">POLICY ON ARTERIAL BLOOD GAS ANALYSIS(ABG)</a></td>
                    </tr>
                    <tr>
                        <td><i>Respiratory Therapy</i></td>
                        <td>-</td>
                        <td><a href={ RTS002a } rel="noreferrer" target="_blank">POLICY ON PREPARATION, USAGE, AND MANAGEMENT OF MECHANICAL VENTILATORS FOR PATIENT USE</a></td>
                    </tr>
                </table>
            </div>
    </>
  )
}

export default Rt
import React from 'react'
import Navbar from '../../Navbar/Navbar'
import TRANS002  from '../../pdffiles/Transpo/POLICY ON AMBULANCE CONDUCTION AND PATIENT TRANSFER.pdf'
import TRANS006  from '../../pdffiles/Transpo/POLICY ON AMBULANCE DECONTAMINATION AND INFECTION CONTROL GUIDELINES.pdf'
import TRANS008  from '../../pdffiles/Transpo/POLICY ON AMBULANCE REFERRAL.pdf'
import TRANS001  from '../../pdffiles/Transpo/POLICY ON CLEANING AND MAINTAINING OF HOSPITAL VEHICLE.pdf'
import TRANS003  from '../../pdffiles/Transpo/POLICY ON DRIVING THE AMBULANCE.pdf'
import TRANS004  from '../../pdffiles/Transpo/POLICY ON PLANNED PREVENTIVE MAINTENANCE(PPM).pdf'
import TRANS007  from '../../pdffiles/Transpo/POLICY ON RECORDS MANAGEMENT AND DATA PRIVACY.pdf'
import TRANS005  from '../../pdffiles/Transpo/POLICY ON VEHICLE COMMUNICATION AND SECURITY.pdf'
import './transpo.css'

const Transpo = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Transportation</h1>
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
                        <td><i>Transportation Section</i></td>
                        <td>-</td>
                        <td><a href={ TRANS002 } rel="noreferrer" target="_blank">POLICY ON AMBULANCE CONDUCTION AND PATIENT TRANSFER</a></td>
                    </tr>
                    <tr>
                        <td><i>Transportation Section</i></td>
                        <td>2022</td>
                        <td><a href={ TRANS006 } rel="noreferrer" target="_blank">POLICY ON AMBULANCE DECONTAMINATION AND INFECTION CONTROL GUIDELINES </a></td>
                    </tr>
                    <tr>
                        <td><i>Transportation Section</i></td>
                        <td>2022</td>
                        <td><a href={ TRANS008 } rel="noreferrer" target="_blank">POLICY ON AMBULANCE REFERRAL</a></td>
                    </tr>
                    <tr>
                        <td><i>Transportation Section</i></td>
                        <td>June 2022</td>
                        <td><a href={ TRANS001 } rel="noreferrer" target="_blank">POLICY ON CLEANING AND MAINTAINING OF HOSPITAL VEHICLE</a></td>
                    </tr>
                    <tr>
                        <td><i>Transportation Section</i></td>
                        <td>-</td>
                        <td><a href={ TRANS003 } rel="noreferrer" target="_blank">POLICY ON DRIVING THE AMBULANCE</a></td>
                    </tr>
                    <tr>
                        <td><i>Transportation Section</i></td>
                        <td>2022</td>
                        <td><a href={ TRANS004 } rel="noreferrer" target="_blank">POLICY ON PLANNED PREVENTIVE MAINTENANCE(PPM)</a></td>
                    </tr>
                    <tr>
                        <td><i>Transportation Section</i></td>
                        <td>2022</td>
                        <td><a href={ TRANS007 } rel="noreferrer" target="_blank">POLICY ON RECORDS MANAGEMENT AND DATA PRIVACY</a></td>
                    </tr>
                    <tr>
                        <td><i>Transportation Section</i></td>
                        <td>2022</td>
                        <td><a href={ TRANS005 } rel="noreferrer" target="_blank">POLICY ON VEHICLE COMMUNICATION AND SECURITY</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Transpo
import React from 'react'
import Navbar from '../../Navbar/Navbar'
import ADMITTING  from '../../pdffiles/Admitting/POLICIES ON ADMITTING SECTION.pdf'
import ADMITTING004  from '../../pdffiles/Admitting/POLICY ON DISCHARGE OF PATIENT.pdf'
import ADMITTING008  from '../../pdffiles/Admitting/POLICY ON DISCIPLINARY ACTION.pdf'
import ADMITTING007  from '../../pdffiles/Admitting/POLICY ON NOTICE OF DEATH.pdf'
import ADMITTING002  from '../../pdffiles/Admitting/POLICY ON PATIENT REGISTRATION.pdf'
import ADMITTING003  from '../../pdffiles/Admitting/POLICY ON PATIENT’S ADMISSION.pdf'
import ADMITTING005  from '../../pdffiles/Admitting/POLICY ON REPORTING OF EMERGENCY TRANSFERS.pdf'
import ADMITTING006  from '../../pdffiles/Admitting/POLICY ON REPORTING OF RECLASSIFIED PATIENTS.pdf'
import './admitting.css'

const Admitting = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Admitting</h1>
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
                        <td><i>Admitting Section</i></td>
                        <td>-</td>
                        <td><a href={ ADMITTING } rel="noreferrer" target="_blank">POLICIES ON ADMITTING SECTION</a></td>
                    </tr>
                    <tr>
                        <td><i>Admitting Section</i></td>
                        <td>July 2018</td>
                        <td><a href={ ADMITTING004 } rel="noreferrer" target="_blank">POLICY ON DISCHARGE OF PATIENT</a></td>
                    </tr>
                    <tr>
                        <td><i>Admitting Section</i></td>
                        <td>-</td>
                        <td><a href={ ADMITTING008 } rel="noreferrer" target="_blank">POLICY ON DISCIPLINARY ACTION</a></td>
                    </tr>
                    <tr>
                        <td><i>Admitting Section</i></td>
                        <td>July 2018</td>
                        <td><a href={ ADMITTING007 } rel="noreferrer" target="_blank">POLICY ON NOTICE OF DEATH</a></td>
                    </tr>
                    <tr>
                        <td><i>Admitting Section</i></td>
                        <td>-</td>
                        <td><a href={ ADMITTING002 } rel="noreferrer" target="_blank">POLICY ON PATIENT REGISTRATION</a></td>
                    </tr>
                    <tr>
                        <td><i>Admitting Section</i></td>
                        <td>-</td>
                        <td><a href={ ADMITTING003 } rel="noreferrer" target="_blank">POLICY ON PATIENT’S ADMISSION</a></td>
                    </tr>
                    <tr>
                        <td><i>Admitting Section</i></td>
                        <td>July 2018</td>
                        <td><a href={ ADMITTING005 } rel="noreferrer" target="_blank">POLICY ON REPORTING OF EMERGENCY TRANSFERS</a></td>
                    </tr>
                    <tr>
                        <td><i>Admitting Section</i></td>
                        <td>July 2018</td>
                        <td><a href={ ADMITTING006 } rel="noreferrer" target="_blank">POLICY ON REPORTING OF RECLASSIFIED PATIENTS</a></td>
                    </tr>
                </table>
            </div>
    </>
  )
}

export default Admitting
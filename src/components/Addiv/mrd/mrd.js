import React from 'react'
import Navbar from '../../Navbar/Navbar'
import HIM0008  from '../../pdffiles/Mrd/POLICY ON ATTENDANCE TO COURT ORDERED BY SUBPOENA DUCES TECUM.pdf'
import HIM0007  from '../../pdffiles/Mrd/POLICY ON ISSUANCE OF DEATH CERTIFICATE.pdf'
import HIM0006  from '../../pdffiles/Mrd/POLICY ON LATE REGISTRATION OF  BIRTH CERTIFICATE.pdf'
import HIM0005  from '../../pdffiles/Mrd/POLICY ON RELEASE OF  BIRTH CERTIFICATE.pdf'
import HIM0004  from '../../pdffiles/Mrd/POLICY ON RELEASE OF INFORMATION  TO A THIRD PARTY.pdf'
import HIM0003  from '../../pdffiles/Mrd/POLICY ON RELEASE OF INFORMATION  TO NURSES.pdf'
import HIM0002  from '../../pdffiles/Mrd/POLICY ON RELEASE OF INFORMATION TO DOCTORS.pdf'
import HIM0010  from '../../pdffiles/Mrd/POLICY ON RETENTION OF MEDICAL RECORDS.pdf'
import HIM009  from '../../pdffiles/Mrd/POLICY ON RETRIEVAL OF PATIENT’S CHART.pdf'
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
                    <td>August 2022</td>
                    <td><a href={ HIM0008 } rel="noreferrer" target="_blank">POLICY ON ATTENDANCE TO COURT ORDERED BY SUBPOENA DUCES TECUM</a></td>
                </tr>
                <tr>
                    <td><i>Medical Records Section</i></td>
                    <td>August 2022</td>
                    <td><a href={ HIM0007 } rel="noreferrer" target="_blank">POLICY ON ISSUANCE OF DEATH CERTIFICATE</a></td>
                </tr>
                <tr>
                    <td><i>Medical Records Section</i></td>
                    <td>August 2022</td>
                    <td><a href={ HIM0006 } rel="noreferrer" target="_blank">POLICY ON LATE REGISTRATION OF  BIRTH CERTIFICATE</a></td>
                </tr>
                <tr>
                    <td><i>Medical Records Section</i></td>
                    <td>August 2022</td>
                    <td><a href={ HIM0005 } rel="noreferrer" target="_blank">POLICY ON RELEASE OF  BIRTH CERTIFICATE</a></td>
                </tr>
                <tr>
                    <td><i>Medical Records Section</i></td>
                    <td>August 2022</td>
                    <td><a href={ HIM0004 } rel="noreferrer" target="_blank">POLICY ON RELEASE OF INFORMATION  TO A THIRD PARTY</a></td>
                </tr>
                <tr>
                    <td><i>Medical Records Section</i></td>
                    <td>August 2022</td>
                    <td><a href={ HIM0003 } rel="noreferrer" target="_blank">POLICY ON RELEASE OF INFORMATION TO NURSES</a></td>
                </tr>
                <tr>
                    <td><i>Medical Records Section</i></td>
                    <td>August 2022</td>
                    <td><a href={ HIM0002 } rel="noreferrer" target="_blank">POLICY ON RELEASE OF INFORMATION TO DOCTORS</a></td>
                </tr>
                <tr>
                    <td><i>Medical Records Section</i></td>
                    <td>August 2022</td>
                    <td><a href={ HIM0010 } rel="noreferrer" target="_blank">POLICY ON RETENTION OF MEDICAL RECORDS</a></td>
                </tr>
                <tr>
                    <td><i>Medical Records Section</i></td>
                    <td>August 2022</td>
                    <td><a href={ HIM009 } rel="noreferrer" target="_blank">POLICY ON RETRIEVAL OF PATIENT’S CHART</a></td>
                </tr>
            </table>
        </div>

    </>
  )
}

export default Mrd
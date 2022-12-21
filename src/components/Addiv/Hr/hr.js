import React from 'react'
import Navbar from '../../Navbar/Navbar'
import HR0014  from '../../pdffiles/Hr/POLICY ON CREDENTIAL AND PRIVILEGING COMMITTEE.pdf'
import HR0013  from '../../pdffiles/Hr/POLICY ON OVERTIME.pdf'
import HR0012  from '../../pdffiles/Hr/POLICY ON COMPLAINT AND GRIEVANCE COMMITTEE.pdf'
import HR0011  from '../../pdffiles/Hr/POLICY ON HIRING SELECTION PROCESS.pdf'
import HR0010  from '../../pdffiles/Hr/POLICY ON SERVICE REWARDS.pdf'
import HR0009  from '../../pdffiles/Hr/POLICY ON REQUEST FOR CERTIFICATION.pdf'
import HR0008  from '../../pdffiles/Hr/POLICY ON PERFORMANCE EVALUATION.pdf'
import HR0007  from '../../pdffiles/Hr/POLICY ON RENEWAL OF APPOINTMENTS.pdf'
import HR0006  from '../../pdffiles/Hr/POLICY ON  UNIFORMS.pdf'
import HR0005  from '../../pdffiles/Hr/POLICY ON  SCHEDULE AND EXTRA-OFF.pdf'
import HR0004  from '../../pdffiles/Hr/POLICY ON SLIP OUT.pdf'
import HR0003  from '../../pdffiles/Hr/POLICY ON EMERGENCY LEAVE.pdf'
import HR0002  from '../../pdffiles/Hr/POLICY ON  ABSENTEEISM, TARDINESS AND ABSENCES WITHOUT NOTIFICATION.pdf'
import HR0001  from '../../pdffiles/Hr/POLICY ON LEAVE.pdf'
import './hr.css'

const Hr = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Human Resources</h1>
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
                        <td><i>Human Resource Section</i></td>
                        <td>2022</td>
                        <td><a href={ HR0014 } rel="noreferrer" target="_blank">POLICY ON CREDENTIAL AND PRIVILEGING COMMITTEE</a></td>
                    </tr>
                    <tr>
                        <td><i>Human Resource Section</i></td>
                        <td>2022</td>
                        <td><a href={ HR0013 } rel="noreferrer" target="_blank">POLICY ON OVERTIME</a></td>
                    </tr>
                    <tr>
                        <td><i>Human Resource Section</i></td>
                        <td>2022</td>
                        <td><a href={ HR0012 } rel="noreferrer" target="_blank">POLICY ON COMPLAINT AND GRIEVANCE COMMITTEE</a></td>
                    </tr>
                    <tr>
                        <td><i>Human Resource Section</i></td>
                        <td>2022</td>
                        <td><a href={ HR0011 } rel="noreferrer" target="_blank">POLICY ON HIRING SELECTION PROCESS</a></td>
                    </tr>
                    <tr>
                        <td><i>Human Resource Section</i></td>
                        <td>2022</td>
                        <td><a href={ HR0010 } rel="noreferrer" target="_blank">POLICY ON SERVICE REWARDS</a></td>
                    </tr>
                    <tr>
                        <td><i>Human Resource Section</i></td>
                        <td>-</td>
                        <td><a href={ HR0009 } rel="noreferrer" target="_blank">POLICY ON REQUEST FOR CERTIFICATION</a></td>
                    </tr>
                    <tr>
                        <td><i>Human Resource Section</i></td>
                        <td>2022</td>
                        <td><a href={ HR0008 } rel="noreferrer" target="_blank">POLICY ON PERFORMANCE EVALUATION</a></td>
                    </tr>
                    <tr>
                        <td><i>Human Resource Section</i></td>
                        <td>2022</td>
                        <td><a href={ HR0007 } rel="noreferrer" target="_blank">POLICY ON RENEWAL OF APPOINTMENTS</a></td>
                    </tr>
                    <tr>
                        <td><i>Human Resource Section</i></td>
                        <td>2022</td>
                        <td><a href={ HR0006 } rel="noreferrer" target="_blank">POLICY ON  UNIFORMS</a></td>
                    </tr>
                    <tr>
                        <td><i>Human Resource Section</i></td>
                        <td>2022</td>
                        <td><a href={ HR0005 } rel="noreferrer" target="_blank">POLICY ON  SCHEDULE AND EXTRA-OFF</a></td>
                    </tr>
                    <tr>
                        <td><i>Human Resource Section</i></td>
                        <td>2022</td>
                        <td><a href={ HR0004 } rel="noreferrer" target="_blank">POLICY ON SLIP OUT</a></td>
                    </tr>
                    <tr>
                        <td><i>Human Resource Section</i></td>
                        <td>2022</td>
                        <td><a href={ HR0003 } rel="noreferrer" target="_blank">POLICY ON EMERGENCY LEAVE</a></td>
                    </tr>
                    <tr>
                        <td><i>Human Resource Section</i></td>
                        <td>2022</td>
                        <td><a href={ HR0002 } rel="noreferrer" target="_blank">POLICY ON  ABSENTEEISM, TARDINESS AND ABSENCES WITHOUT NOTIFICATION</a></td>
                    </tr>
                    <tr>
                        <td><i>Human Resource Section</i></td>
                        <td>2022</td>
                        <td><a href={ HR0001 } rel="noreferrer" target="_blank">POLICY ON LEAVE</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Hr
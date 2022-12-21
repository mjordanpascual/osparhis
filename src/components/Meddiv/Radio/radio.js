import React from 'react'
import Navbar from '../../Navbar/Navbar'
import RAD004  from '../../pdffiles/Radiology/APPENDICES.pdf'
import RAD003  from '../../pdffiles/Radiology/CITIZEN CHARTER.pdf'
import RAD008  from '../../pdffiles/Radiology/Continuing Education Program of Staff.pdf'
import RAD007  from '../../pdffiles/Radiology/Disaster Contingency Plan.pdf'
import RAD002  from '../../pdffiles/Radiology/EXPANDED STANDARD OPERATING PROCEDURES DURING PANDEMIC.pdf'
import RAD006  from '../../pdffiles/Radiology/Personnel Monitoring.pdf'
import RAD009  from '../../pdffiles/Radiology/POLICY ON CLINICAL EDUCATION TRAINING PROGRAM.pdf'
import RAD001  from '../../pdffiles/Radiology/Policy on the Standard Operational Procedures in the Radiology Department.pdf'
import RAD005  from '../../pdffiles/Radiology/Radiation Protection Procedures.pdf'

const Radio = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Radiology Section</h1>
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
                        <td><i>Radiology Section</i></td>
                        <td>2022</td>
                        <td><a href={ RAD004 } rel="noreferrer" target="_blank">APPENDICES</a></td>
                    </tr>
                    <tr>
                        <td><i>Radiology Section</i></td>
                        <td>2022</td>
                        <td><a href={ RAD003 } rel="noreferrer" target="_blank">CITIZEN CHARTER</a></td>
                    </tr>
                    <tr>
                        <td><i>Radiology Section</i></td>
                        <td>2022</td>
                        <td><a href={ RAD008 } rel="noreferrer" target="_blank">CONTINUING EDUCATION PROGRAM OF STAFF</a></td>
                    </tr>
                    <tr>
                        <td><i>Radiology Section</i></td>
                        <td>2022</td>
                        <td><a href={ RAD007 } rel="noreferrer" target="_blank">Disaster Contingency Plan</a></td>
                    </tr>
                    <tr>
                        <td><i>Radiology Section</i></td>
                        <td>2022</td>
                        <td><a href={ RAD002 } rel="noreferrer" target="_blank">EXPANDED STANDARD OPERATING PROCEDURES DURING PANDEMIC</a></td>
                    </tr>
                    <tr>
                        <td><i>Radiology Section</i></td>
                        <td>2022</td>
                        <td><a href={ RAD006 } rel="noreferrer" target="_blank">Personnel Monitoring</a></td>
                    </tr>
                    <tr>
                        <td><i>Radiology Section</i></td>
                        <td>2022</td>
                        <td><a href={ RAD009 } rel="noreferrer" target="_blank">POLICY ON CLINICAL EDUCATION TRAINING PROGRAM</a></td>
                    </tr>
                    <tr>
                        <td><i>Radiology Section</i></td>
                        <td>2022</td>
                        <td><a href={ RAD001 } rel="noreferrer" target="_blank">Policy on the Standard Operational Procedures in the Radiology Department</a></td>
                    </tr>
                    <tr>
                        <td><i>Radiology Section</i></td>
                        <td>2022</td>
                        <td><a href={ RAD005 } rel="noreferrer" target="_blank">Radiation Protection Procedures</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Radio
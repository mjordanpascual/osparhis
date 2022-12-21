import React from 'react'
import Navbar from '../../Navbar/Navbar'
import PTRM016  from '../../pdffiles/Pt/CHARTING FORMS.pdf'
import PTRM008  from '../../pdffiles/Pt/DUTIES AND RESPONSIBILITIES.pdf'
import PTRM006  from '../../pdffiles/Pt/GUIDELINE ON THE USE OF PTRM TREATMENT FACILITY.pdf'
import PTRM001  from '../../pdffiles/Pt/INTRODUCTION.pdf'
import PTRM004  from '../../pdffiles/Pt/LIST OF SERVICES AND PERSONNEL.pdf'
import PTRM002  from '../../pdffiles/Pt/MISSION AND VISION.pdf'
import PTRM007  from '../../pdffiles/Pt/ORGANIZATIONAL CHART.pdf'
import PTRM011  from '../../pdffiles/Pt/POLICY AND GUIDELINES  ON REFERRAL SYSTEM.pdf'
import PTRM014  from '../../pdffiles/Pt/POLICY AND PROTOCOL DURING DISASTER AND EMERGENCY.pdf'
import PTRM012  from '../../pdffiles/Pt/POLICY ON ADMINISTERING THERAPY.pdf'
import PTRM010  from '../../pdffiles/Pt/POLICY ON DECKING OF PATIENT.pdf'
import PTRM009  from '../../pdffiles/Pt/POLICY ON DUTIES OF COMPANION OF PATIENT.pdf'
import PTRM013  from '../../pdffiles/Pt/POLICY ON HANDLING OF PATIENT WITH MEDICAL EMERGENCY CONDITION.pdf'
import PTRM015  from '../../pdffiles/Pt/POLICY ON MANAGEMENT, STORAGE AND DISPOSAL OF RECORDS.pdf'
import PTRM006a  from '../../pdffiles/Pt/PROCESS MAP.pdf'
import PTRM003 from '../../pdffiles/Pt/SCOPE & LOCATION.pdf'
import PTRM016a from '../../pdffiles/Pt/TABLE OF CONTENTS.pdf'

const Pt = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>PT AND REHABILITATION MEDICINE</h1>
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
                        <td><i>PT and Rehabilitation Medicine</i></td>
                        <td>-</td>
                        <td><a href={ PTRM001 } rel="noreferrer" target="_blank">INTRODUCTION</a></td>
                    </tr>
                    <tr>
                        <td><i>PT and Rehabilitation Medicine</i></td>
                        <td>-</td>
                        <td><a href={ PTRM016a } rel="noreferrer" target="_blank">TABLE OF CONTENTS</a></td>
                    </tr>
                    <tr>
                        <td><i>PT and Rehabilitation Medicine</i></td>
                        <td>-</td>
                        <td><a href={ PTRM002 } rel="noreferrer" target="_blank">MISSION AND VISION</a></td>
                    </tr>
                    <tr>
                        <td><i>PT and Rehabilitation Medicine</i></td>
                        <td>-</td>
                        <td><a href={ PTRM007 } rel="noreferrer" target="_blank">ORGANIZATIONAL CHART</a></td>
                    </tr>
                    <tr>
                        <td><i>PT and Rehabilitation Medicine</i></td>
                        <td>-</td>
                        <td><a href={ PTRM004 } rel="noreferrer" target="_blank">LIST OF SERVICES AND PERSONNEL</a></td>
                    </tr>
                    <tr>
                        <td><i>PT and Rehabilitation Medicine</i></td>
                        <td>-</td>
                        <td><a href={ PTRM008 } rel="noreferrer" target="_blank">DUTIES AND RESPONSIBILITIES</a></td>
                    </tr>
                    <tr>
                        <td><i>PT and Rehabilitation Medicine</i></td>
                        <td>-</td>
                        <td><a href={ PTRM006a } rel="noreferrer" target="_blank">PROCESS MAP</a></td>
                    </tr>
                    <tr>
                        <td><i>PT and Rehabilitation Medicine</i></td>
                        <td>-</td>
                        <td><a href={ PTRM003 } rel="noreferrer" target="_blank">SCOPE & LOCATION</a></td>
                    </tr>
                    <tr>
                        <td><i>PT and Rehabilitation Medicine</i></td>
                        <td>-</td>
                        <td><a href={ PTRM016 } rel="noreferrer" target="_blank">POLICY ON CHARTING FORMS</a></td>
                    </tr>
                    <tr>
                        <td><i>PT and Rehabilitation Medicine</i></td>
                        <td>-</td>
                        <td><a href={ PTRM006 } rel="noreferrer" target="_blank">POLICY ON GUIDELINE ON THE USE OF PTRM TREATMENT FACILITY</a></td>
                    </tr>
                    <tr>
                        <td><i>PT and Rehabilitation Medicine</i></td>
                        <td>-</td>
                        <td><a href={ PTRM011 } rel="noreferrer" target="_blank">POLICY AND GUIDELINES  ON REFERRAL SYSTEM</a></td>
                    </tr>
                    <tr>
                        <td><i>PT and Rehabilitation Medicine</i></td>
                        <td>-</td>
                        <td><a href={ PTRM014 } rel="noreferrer" target="_blank">POLICY AND PROTOCOL DURING DISASTER AND EMERGENCY </a></td>
                    </tr>
                    <tr>
                        <td><i>PT and Rehabilitation Medicine</i></td>
                        <td>-</td>
                        <td><a href={ PTRM012 } rel="noreferrer" target="_blank">POLICY ON ADMINISTERING THERAPY</a></td>
                    </tr>
                    <tr>
                        <td><i>PT and Rehabilitation Medicine</i></td>
                        <td>-</td>
                        <td><a href={ PTRM010 } rel="noreferrer" target="_blank">POLICY ON DECKING OF PATIENT</a></td>
                    </tr>
                    <tr>
                        <td><i>PT and Rehabilitation Medicine</i></td>
                        <td>-</td>
                        <td><a href={ PTRM009 } rel="noreferrer" target="_blank">POLICY ON DUTIES OF COMPANION OF PATIENT</a></td>
                    </tr>
                    <tr>
                        <td><i>PT and Rehabilitation Medicine</i></td>
                        <td>-</td>
                        <td><a href={ PTRM013 } rel="noreferrer" target="_blank">POLICY ON HANDLING OF PATIENT WITH MEDICAL EMERGENCY CONDITION</a></td>
                    </tr>
                    <tr>
                        <td><i>PT and Rehabilitation Medicine</i></td>
                        <td>-</td>
                        <td><a href={ PTRM015 } rel="noreferrer" target="_blank">POLICY ON MANAGEMENT, STORAGE AND DISPOSAL OF RECORDS</a></td>
                    </tr>
                </table>
                {/* <div style={{padding: "25px"}}>
                        <h3 style={{color: 'yellow', backgroundColor: 'red'}}>
                            No File's Submitted !
                        </h3>
                </div> */}
            </div>

    </>
  )
}

export default Pt
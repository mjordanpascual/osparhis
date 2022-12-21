import React from 'react'
import Navbar from '../../Navbar/Navbar'
import LAB014  from '../../pdffiles/Laboratory/BLOOD TRANSFUSION COMMITTEE GENERAL POLICY AND PROCEDURE.pdf'
import LAB019  from '../../pdffiles/Laboratory/FLOW CHART FOR THE ISSUANCE OF A DUPLICATE COPY.pdf'
import LAB008  from '../../pdffiles/Laboratory/POLICY AND GUIDELINES ON LABORATORY BIOSAFETY AND BIO SECURITY.pdf'
import LAB006  from '../../pdffiles/Laboratory/POLICY AND PROCEDURE FOR DISCIPLINE, SUSPENSION, DEMOTION AND TERMINATION OF PERSONNEL AT ALL LEVELS.pdf'
import LAB002  from '../../pdffiles/Laboratory/POLICY AND PROCEDURE FOR HANDLING COMPLAINTS CLIENT FEEDBACK.pdf'
import LAB003  from '../../pdffiles/Laboratory/POLICY AND PROCEDURE FOR HIRING, ORIENTATION AND PROMOTION FOR ALL LEVELS OF PERSONNEL.pdf'
import LAB009  from '../../pdffiles/Laboratory/POLICY AND PROCEDURE FOR THE PROPER DISPOSAL OF WASTE AND HAZARDOUS INFECTIOUS SUBSTANCES.pdf'
import LAB004  from '../../pdffiles/Laboratory/POLICY AND PROCEDURE ON CONTINUING PROGRAM FOR STAFF DEVELOPMENT AND TRAINING.pdf'
import LAB012  from '../../pdffiles/Laboratory/POLICY AND PROCEDURE ON THE RECEIPT, PERFORMANCE AND REPORTING OF RESULTS.pdf'
import LAB007  from '../../pdffiles/Laboratory/POLICY AND PROGRAM FOR PROPER MAINTENANCE AND MONITORING OF PHYSICAL PLANT AND FACILITIES 2.pdf'
import LAB010  from '../../pdffiles/Laboratory/POLICY AND PROGRAM FOR PROPER MAINTENANCE AND MONITORING OF PHYSICAL PLANT AND FACILITIES.pdf'
import LAB021  from '../../pdffiles/Laboratory/POLICY GUIDELINE ON THE USE OF AUTHENTICATED ELECTRONIC DIGITAL SIGNATURE.pdf'
import LAB013  from '../../pdffiles/Laboratory/POLICY ON BLOOD BANK.pdf'
import LAB015  from '../../pdffiles/Laboratory/POLICY ON CLINICAL CHEMISTRY TESTING.pdf'
import LAB016  from '../../pdffiles/Laboratory/POLICY ON CLINICAL MICROSCOPY  TESTING.pdf'
import LAB017  from '../../pdffiles/Laboratory/POLICY ON HEMATOLOGY TESTING.pdf'
import LAB018  from '../../pdffiles/Laboratory/POLICY ON HISTOPATHOLOGY TESTING.pdf'
import LAB001  from '../../pdffiles/Laboratory/POLICY ON MANAGEMENT REVIEW.pdf'
import LAB026  from '../../pdffiles/Laboratory/POLICY ON POINT OF CARE TESTING.pdf'
import LAB023  from '../../pdffiles/Laboratory/POLICY ON REPORTING, INVESTIGATION AND ANALYSIS OF INCIDENTS, ADVERSE EVENTS AND OTHER RELATED PROCESSES.pdf'
import LAB011  from '../../pdffiles/Laboratory/POLICY ON SECURITY OF  SUPPLIES , SPECIMENS AND CONFIDENTIALITY OF RECORDS.pdf'
import LAB024  from '../../pdffiles/Laboratory/POLICY ON THE RETENTION OF RECORDS OBJECTIVES.pdf'
import LAB022  from '../../pdffiles/Laboratory/PROCEDURES FOR REPORTING OF WORKLOAD, QUALITY CONTROL AND INVENTORY CONTROL.pdf'
import LAB020  from '../../pdffiles/Laboratory/PROCEDURES FOR THE REPORTING OF LABORATORY RESULTS.pdf'
import LAB005  from '../../pdffiles/Laboratory/PROGRAM FOR CONTINUING PROFESSIONAL DEVELOPMENT.pdf'
import LAB025  from '../../pdffiles/Laboratory/QUALITY ASSURANCE PROGRAM.pdf'

const LabEcg = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Laboratory / ECG</h1>
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
                        <td><i>Laboratory / ECG</i></td>
                        <td>March 2022</td>
                        <td><a href={ LAB014 } rel="noreferrer" target="_blank">BLOOD TRANSFUSION COMMITTEE GENERAL POLICY AND PROCEDURE</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>-</td>
                        <td><a href={ LAB019 } rel="noreferrer" target="_blank">FLOW CHART FOR THE ISSUANCE OF A DUPLICATE COPY</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>April 2022</td>
                        <td><a href={ LAB008 } rel="noreferrer" target="_blank">POLICY AND GUIDELINES ON LABORATORY BIOSAFETY AND BIO SECURITY</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>April 2022</td>
                        <td><a href={ LAB006 } rel="noreferrer" target="_blank">POLICY AND PROCEDURE FOR DISCIPLINE, SUSPENSION, DEMOTION AND TERMINATION OF PERSONNEL AT ALL LEVELS</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>April 2022</td>
                        <td><a href={ LAB002 } rel="noreferrer" target="_blank">POLICY AND PROCEDURE FOR HANDLING COMPLAINTS CLIENT FEEDBACK</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>-</td>
                        <td><a href={ LAB003 } rel="noreferrer" target="_blank">POLICY AND PROCEDURE FOR HIRING, ORIENTATION AND PROMOTION FOR ALL LEVELS OF PERSONNEL</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>-</td>
                        <td><a href={ LAB009 } rel="noreferrer" target="_blank">POLICY AND PROCEDURE FOR THE PROPER DISPOSAL OF WASTE AND  HAZARDOUS INFECTIOUS SUBSTANCES</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>April 2022</td>
                        <td><a href={ LAB004 } rel="noreferrer" target="_blank">POLICY AND PROCEDURE ON CONTINUING PROGRAM FOR STAFF DEVELOPMENT AND TRAINING</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>-</td>
                        <td><a href={ LAB012 } rel="noreferrer" target="_blank">POLICY AND PROCEDURE ON THE RECEIPT, PERFORMANCE AND REPORTING OF RESULTS</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>April 2022</td>
                        <td><a href={ LAB007 } rel="noreferrer" target="_blank">POLICY AND PROGRAM FOR PROPER MAINTENANCE AND MONITORING OF PHYSICAL PLANT AND FACILITIES 2</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>April 2022</td>
                        <td><a href={ LAB010 } rel="noreferrer" target="_blank">POLICY AND PROGRAM FOR PROPER MAINTENANCE AND MONITORING OF PHYSICAL PLANT AND FACILITIES</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>-</td>
                        <td><a href={ LAB021 } rel="noreferrer" target="_blank">POLICY GUIDELINE ON THE USE OF AUTHENTICATED ELECTRONIC DIGITAL SIGNATURE</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>-</td>
                        <td><a href={ LAB013 } rel="noreferrer" target="_blank">POLICY ON BLOOD BANK</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>-</td>
                        <td><a href={ LAB015 } rel="noreferrer" target="_blank">POLICY ON CLINICAL CHEMISTRY TESTING</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>-</td>
                        <td><a href={ LAB016 } rel="noreferrer" target="_blank">POLICY ON CLINICAL MICROSCOPY  TESTING</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>-</td>
                        <td><a href={ LAB017 } rel="noreferrer" target="_blank">POLICY ON HEMATOLOGY TESTING</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>-</td>
                        <td><a href={ LAB018 } rel="noreferrer" target="_blank">POLICY ON HISTOPATHOLOGY TESTING</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>April 2022</td>
                        <td><a href={ LAB001 } rel="noreferrer" target="_blank">POLICY ON MANAGEMENT REVIEW</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>-</td>
                        <td><a href={ LAB026 } rel="noreferrer" target="_blank">POLICY ON POINT OF CARE TESTING</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>-</td>
                        <td><a href={ LAB023 } rel="noreferrer" target="_blank">POLICY ON REPORTING, INVESTIGATION AND ANALYSIS OF INCIDENTS, ADVERSE EVENTS AND OTHER RELATED PROCESSES</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>-</td>
                        <td><a href={ LAB011 } rel="noreferrer" target="_blank">POLICY ON SECURITY OF  SUPPLIES , SPECIMENS AND CONFIDENTIALITY OF RECORDS</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>-</td>
                        <td><a href={ LAB024 } rel="noreferrer" target="_blank">POLICY ON THE RETENTION OF RECORDS OBJECTIVES</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>-</td>
                        <td><a href={ LAB022 } rel="noreferrer" target="_blank">POLICY ON  PROCEDURES FOR REPORTING OF WORKLOAD, QUALITY CONTROL AND INVENTORY CONTROL</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>-</td>
                        <td><a href={ LAB020 } rel="noreferrer" target="_blank">POLICY ON  PROCEDURES FOR THE REPORTING OF LABORATORY RESULTS</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>April 2022 </td>
                        <td><a href={ LAB005 } rel="noreferrer" target="_blank">POLICY ON PROGRAM FOR CONTINUING PROFESSIONAL DEVELOPMENT</a></td>
                    </tr>
                    <tr>
                        <td><i>Laboratory / ECG</i></td>
                        <td>April 2022 </td>
                        <td><a href={ LAB025 } rel="noreferrer" target="_blank">POLICY ON QUALITY ASSURANCE PROGRAM</a></td>
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

export default LabEcg
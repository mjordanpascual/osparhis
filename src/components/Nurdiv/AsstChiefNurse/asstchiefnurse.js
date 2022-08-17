import React from 'react'
import Navbar from '../../Navbar/Navbar'
import NSO001 from '../../pdffiles/Nursing/assistantchiefnurse/NSO-001.pdf'
import NSO021 from '../../pdffiles/Nursing/assistantchiefnurse/NSO-021.pdf'

const AsstChiefNurse = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Assistant Chief Nurse</h1>
        </div>

        <div className='table-policy'>
            <h2>Hospital Policies</h2>
            <table className='table-meddiv'>
                <tr>
                    <th>Section</th>
                    <th>Date</th>
                    <th>Subject</th>
                </tr>
                <tr>
                    <td><i>Assistant Chief Nurse</i></td>
                    <td>July 12, 2016</td>
                    <td><a href={ NSO001 } rel="noreferrer" target="_blank">POLICY ON TRAINING PROGRAM OF NURSE TRAINEES</a></td>
                </tr>
                <tr>
                    <td><i>CQI Committee Chair</i></td>
                    <td>July 12, 2016</td>
                    <td><a href={ NSO021 } rel="noreferrer" target="_blank">POLICY ON DOCUMENTATION</a></td>
                </tr>
            </table>
        </div>
    </>
  )
}

export default AsstChiefNurse
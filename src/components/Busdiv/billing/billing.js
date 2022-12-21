import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Moa  from '../../pdffiles/Admin/MOA.pdf'
import Billphic002  from '../../pdffiles/Billphic/POLICY ON PROCESSING OF PHIC.pdf'
import Billphic003  from '../../pdffiles/Billphic/POLICY ON REPORTING OF OVERSTAYING PATIENTS.pdf'
import Billphic001  from '../../pdffiles/Billphic/PROCEDURE FOR BILLING OF EXPIRED AND DECEASED PATIENTS.pdf'

const Billing = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Billing Claims & Philhealth Section</h1>
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
                        <td><i>Billing</i></td>
                        <td>-</td>
                        <td><a href={ Billphic002 } rel="noreferrer" target="_blank">POLICY ON PROCESSING OF PHIC</a></td>
                    </tr>
                    <tr>
                        <td><i>Billing</i></td>
                        <td>-</td>
                        <td><a href={ Billphic003 } rel="noreferrer" target="_blank">POLICY ON REPORTING OF OVERSTAYING PATIENTS</a></td>
                    </tr>
                    <tr>
                        <td><i>Billing</i></td>
                        <td>-</td>
                        <td><a href={ Billphic001 } rel="noreferrer" target="_blank">PROCEDURE FOR BILLING OF EXPIRED AND DECEASED PATIENTS</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Billing
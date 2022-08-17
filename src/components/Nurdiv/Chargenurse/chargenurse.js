import React from 'react'
import Navbar from '../../Navbar/Navbar'
import NSO019 from '../../pdffiles/Nursing/headnurse/NSO-019.pdf'
import opd from '../../pdffiles/Nursing/opd/opd.pdf'

const Chargenurse = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>DR/ OB WARD/ OPD</h1>
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
                        <td><i>DR / OB WARD / OPD</i></td>
                        <td>July 12, 2016</td>
                        <td><a href={ NSO019 } rel="noreferrer" target="_blank">POLICY ON HEPA B AND BCG VACCINATION</a></td>
                    </tr>
                    <tr>
                        <td><i>OUT-PATIENT</i></td>
                        <td>August 10, 2022</td>
                        <td><a href={ opd } rel="noreferrer" target="_blank">STANDARD OPERATING PROCEDURE AT THE OUT PATIENT DEPARTMENT</a></td>
                    </tr>
                </table>
            </div>
    </>
  )
}

export default Chargenurse
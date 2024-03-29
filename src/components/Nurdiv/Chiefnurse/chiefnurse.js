import React from 'react'
import Navbar from '../../Navbar/Navbar'
import NursingPolicy  from '../../pdffiles/Nursing/NursingPolicy.pdf'

const ChiefNurse = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Chief Nurse</h1>
        </div>
        <div className='table-policy'>
            <div>
                <h2>Hospital Policies</h2>
            </div>
            <table className='table-meddiv'>
                    <tr>
                        <th>Section</th>
                        <th>Policy No.</th>
                        <th>Date</th>
                        <th>Subject</th>
                    </tr>
                    <tr>
                        <td><i>Chief Nurse</i></td>
                        <td><i>-</i></td>
                        <td>07-25-2016</td>
                        <td><a href={ NursingPolicy } rel="noreferrer" target="_blank">Nursing Policy</a></td>
                    </tr>
            </table>
        </div>

    </>
  )
}

export default ChiefNurse
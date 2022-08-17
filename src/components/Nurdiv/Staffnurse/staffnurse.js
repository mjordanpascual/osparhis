import React from 'react'
import Navbar from '../../Navbar/Navbar'
import NSO  from '../../pdffiles/Nursing/icu/NSO-.pdf'

const Staffnurse = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>INTENSIVE CARE UNIT</h1>
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
                        <td><i>INTENSIVE CARE UNIT</i></td>
                        <td>-</td>
                        <td><a href={ NSO } rel="noreferrer" target="_blank">INTENSIVE CARE UNIT STANDARD OPERATING PROCEDURE</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Staffnurse
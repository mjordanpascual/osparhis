import React from 'react'
import Navbar from '../../Navbar/Navbar'
import NSO015 from '../../pdffiles/Nursing/headnurse/NSO-015.pdf'

const Midwife = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Midwife</h1>
        </div>

        <div className='table-policy'>
                <h2>Hospital Policies</h2>
                <table className='table-meddiv'>
                    <tr>
                        <th>Section</th>
                        <th>Policy No.</th>
                        <th>Date</th>
                        <th>Subject</th>
                    </tr>
                    <tr>
                        <td><i>DELIVERY ROOM / LABOR ROOM</i></td>
                        <td>NSO-015</td>
                        <td>May 22, 2014</td>
                        <td><a href={ NSO015 } rel="noreferrer" target="_blank">DELIVERY ROOM / LABOR ROOM STANDARD OPERATING PROCEDURE </a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Midwife
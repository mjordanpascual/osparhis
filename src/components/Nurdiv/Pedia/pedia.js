import React from 'react'
import Navbar from '../../Navbar/Navbar'
import NSO011  from '../../pdffiles/Nursing/pedia/NSO-011.pdf'

const Pedia = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>PEDIATRIC WARD</h1>
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
                    <td><i>PEDIATRIC WARD</i></td>
                    <td>July 12, 2016</td>
                    <td><a href={ NSO011 } rel="noreferrer" target="_blank">POLICY ON ADMISSION AND DISCHARGES AT PEDIATRIC WARD</a></td>
                </tr>
            </table>
        </div>
    </>
  )
}

export default Pedia
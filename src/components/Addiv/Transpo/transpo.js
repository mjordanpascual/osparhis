import React from 'react'
import Navbar from '../../Navbar/Navbar'
import TRANSPO  from '../../pdffiles/Transpo/TRANSPO.pdf'
import './transpo.css'

const Transpo = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Transportation</h1>
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
                        <td><i>Transportation Section</i></td>
                        <td>07-01-2018</td>
                        <td><a href={ TRANSPO } rel="noreferrer" target="_blank">Transportation Policy 1.2</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Transpo
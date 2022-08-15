import React from 'react'
import Navbar from '../../Navbar/Navbar'
import CWU  from '../../pdffiles/Cwu/CWU.pdf'
import './cwu.css'

const Cwu = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Civilian Watchman Unit</h1>
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
                        <td><i>Civilian Watchman Unit Section</i></td>
                        <td>07-01-2018</td>
                        <td><a href={ CWU } rel="noreferrer" target="_blank">Civilan Watchman Unit Policy 1.2</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Cwu
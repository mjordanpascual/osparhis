import React from 'react'
import Navbar from '../../Navbar/Navbar'
import MAINTENANCE  from '../../pdffiles/Maintenance/MAINTENANCE.pdf'
import './maintenance.css'

const Maintenance = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Maintenance</h1>
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
                        <td><i>Maintenance</i></td>
                        <td>01-05-2019</td>
                        <td><a href={ MAINTENANCE } rel="noreferrer" target="_blank">Maintenance Policy 1.2</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Maintenance
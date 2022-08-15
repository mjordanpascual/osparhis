import React from 'react'
import Navbar from '../../Navbar/Navbar'
import ADMITTING  from '../../pdffiles/Admitting/ADMITTING.pdf'
import './admitting.css'

const Admitting = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Admitting</h1>
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
                        <td><i>Admitting Division</i></td>
                        <td>01-05-2019</td>
                        <td><a href={ ADMITTING } rel="noreferrer" target="_blank">Admitting Policy 1.2</a></td>
                    </tr>
                </table>
            </div>
    </>
  )
}

export default Admitting
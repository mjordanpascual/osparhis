import React from 'react'
import Navbar from '../../Navbar/Navbar'
import HR  from '../../pdffiles/Hr/HR.pdf'
import './hr.css'

const Hr = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Human Resources</h1>
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
                        <td><i>Human Resource Section</i></td>
                        <td>07-05-2018</td>
                        <td><a href={ HR } rel="noreferrer" target="_blank">Human Resource Policy 1.2</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Hr
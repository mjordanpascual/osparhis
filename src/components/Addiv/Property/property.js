import React from 'react'
import Navbar from '../../Navbar/Navbar'
import PROPERTY  from '../../pdffiles/Property/PROPERTY.pdf'
import './property.css'

const Property = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Property</h1>
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
                        <td><i>Property Section</i></td>
                        <td>07-01-2018</td>
                        <td><a href={ PROPERTY } rel="noreferrer" target="_blank">Property Policy 1.2</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Property
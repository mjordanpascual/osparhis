import React from 'react'
import Navbar from '../../Navbar/Navbar'
import TO  from '../../pdffiles/To/TO.pdf'
import './to.css'

const To = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Telephone Operator</h1>
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
                        <td><i>Telephone Operator Section</i></td>
                        <td>07-01-2018</td>
                        <td><a href={ TO } rel="noreferrer" target="_blank">Telephone Operator Policy 1.2</a></td>
                    </tr>
                </table>
            </div>
    </>
  )
}

export default To
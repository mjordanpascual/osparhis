import React from 'react'
import Navbar from '../../Navbar/Navbar'
import NSO015 from '../../pdffiles/Nursing/headnurse/NSO-015.pdf'

const Asstheadnurse = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Assistant Head Nurse's</h1>
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
                        <td><i>DELIVERY ROOM / LABOR ROOM</i></td>
                        <td>May 22, 2014</td>
                        <td><a href={ NSO015 } rel="noreferrer" target="_blank">DELIVERY ROOM / LABOR ROOM STANDARD OPERATING PROCEDURE </a></td>
                    </tr>
                    {/* <tr>
                        <td><i>Assistant Head Nurse</i></td>
                        <td>07-18-2020</td>
                        <td><a href={ Moa } rel="noreferrer" target="_blank">Assistant Head Nurse 1.2</a></td>
                    </tr>
                    <tr>
                        <td><i>Assistant Head Nurse</i></td>
                        <td>12-31-2021</td>
                        <td><a href={ Moa } rel="noreferrer" target="_blank">Assistant Head Nurse 1.3</a></td>
                    </tr>
                    <tr>
                        <td><i>Assistant Head Nurse</i></td>
                        <td>07-06-2022</td>
                        <td><a href={ Moa } rel="noreferrer" target="_blank">Assistant Head Nurse 1.4</a></td>
                    </tr>  */}
                </table>
            </div>

    </>
  )
}

export default Asstheadnurse
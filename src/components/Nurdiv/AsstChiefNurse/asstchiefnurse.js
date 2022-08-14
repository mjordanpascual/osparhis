import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Moa  from '../../pdffiles/Admin/MOA.pdf'

const AsstChiefNurse = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Assistant Chief Nurse</h1>
        </div>

        <div className='policy-heads'>
                <h2>Hospital Policies</h2>
                <table className='table-meddiv'>
                    <tr>
                        <th>Department</th>
                        <th>Date</th>
                        <th>Subject</th>
                    </tr>
                    {/* <tr>
                        <td><i>Assistant Chief Nurse</i></td>
                        <td>01-05-2019</td>
                        <td><a href={ Moa } rel="noreferrer" target="_blank">Assistant Chief Nurse 1.2</a></td>
                    </tr>
                    <tr>
                        <td><i>Assistant Chief Nurse</i></td>
                        <td>07-18-2020</td>
                        <td><a href={ Moa } rel="noreferrer" target="_blank">Assistant Chief Nurse 1.2</a></td>
                    </tr>
                    <tr>
                        <td><i>Assistant Chief Nurse</i></td>
                        <td>12-31-2021</td>
                        <td><a href={ Moa } rel="noreferrer" target="_blank">Assistant Chief Nurse 1.3</a></td>
                    </tr>
                    <tr>
                        <td><i>Assistant Chief Nurse</i></td>
                        <td>07-06-2022</td>
                        <td><a href={ Moa } rel="noreferrer" target="_blank">Assistant Chief Nurse 1.4</a></td>
                    </tr> */}
                </table>
                <div style={{padding: "25px"}}>
                        <h3 style={{color: 'yellow'}}>
                            No File's Submitted !
                        </h3>
                </div>
            </div>

    </>
  )
}

export default AsstChiefNurse
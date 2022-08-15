import React from 'react'
import Navbar from '../../Navbar/Navbar'
import AdminPolicy from '../../pdffiles/Admin/AdminPolicy.pdf'
import Admin from '../../pdffiles/Admin/ADMIN.pdf'
import './sao.css'

const Sao = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Supervising Administrative Office</h1>
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
                        <td><i>Administrative Division</i></td>
                        <td>07-25-2022</td>
                        <td><a href={ AdminPolicy } rel="noreferrer" target="_blank">Administrative Policy 1.1</a></td>
                    </tr>
                    <tr>
                        <td><i>Administrative Division</i></td>
                        <td>07-28-2018</td>
                        <td><a href={ Admin } rel="noreferrer" target="_blank">Administrative Policy 1.2</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Sao
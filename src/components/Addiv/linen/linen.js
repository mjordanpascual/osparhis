import React from 'react'
import Navbar from '../../Navbar/Navbar'
import LINEN  from '../../pdffiles/Linen/LINEN.pdf'
import './linen.css'

const Linen = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Linen</h1>
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
                        <td><i>Linen Section</i></td>
                        <td>07-01-2018</td>
                        <td><a href={ LINEN } rel="noreferrer" target="_blank">Linen Policy 1.2</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Linen
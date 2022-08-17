import React from 'react'
import Navbar from '../../Navbar/Navbar'
import NSO010  from '../../pdffiles/Nursing/msward/NSO-010.pdf'

const Naclerk = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>MEDICAL SURGICAL WARD</h1>
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
                        <td><i>MEDICAL SURGICAL WARD</i></td>
                        <td>01-05-2019</td>
                        <td><a href={ NSO010 } rel="noreferrer" target="_blank">POLICY ON ADMISSION AND DISCHARGE AT MEDICAL/ SURGICAL WARD </a></td>
                    </tr>
                    {/* <tr>
                        <td><i>Nursing Attendant's / CSR</i></td>
                        <td>07-18-2020</td>
                        <td><a href={ Moa } rel="noreferrer" target="_blank">Nursing Attendant's / CSR 1.2</a></td>
                    </tr>
                    <tr>
                        <td><i>Nursing Attendant's / CSR</i></td>
                        <td>12-31-2021</td>
                        <td><a href={ Moa } rel="noreferrer" target="_blank">Nursing Attendant's / CSR 1.3</a></td>
                    </tr>
                    <tr>
                        <td><i>Nursing Attendant's / CSR</i></td>
                        <td>07-06-2022</td>
                        <td><a href={ Moa } rel="noreferrer" target="_blank">Nursing Attendant's / CSR 1.4</a></td>
                    </tr> */}
                </table>
            </div>

    </>
  )
}

export default Naclerk
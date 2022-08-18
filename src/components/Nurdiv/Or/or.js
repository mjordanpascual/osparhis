import React from 'react'
import Navbar from '../../Navbar/Navbar'
import NSO012  from '../../pdffiles/Nursing/or/NSO-012.pdf'
import NSO014  from '../../pdffiles/Nursing/or/NSO-014.pdf'

const Or = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Operating Room</h1>
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
                        <td><i>Operating Room</i></td>
                        <td>July 12, 2016</td>
                        <td><a href={ NSO012 } rel="noreferrer" target="_blank">OPERATING ROOM AND POST ANESTHESIA RECOVERY ROOM</a></td>
                    </tr>
                    <tr>
                        <td><i>Operating Room</i></td>
                        <td>July 12, 2016</td>
                        <td><a href={ NSO014 } rel="noreferrer" target="_blank">OPERATING ROOM AND POST ANESTHESIA RECOVERY ROOM</a></td>
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

export default Or
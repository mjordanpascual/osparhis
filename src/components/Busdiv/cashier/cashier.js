import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Moa  from '../../pdffiles/Admin/MOA.pdf'
import Cash001  from '../../pdffiles/Cash/POLICY ON CASH DISBURSEMENTS.pdf'
import Cash002  from '../../pdffiles/Cash/POLICY ON COLLECTIONS.pdf'

const Cashier = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Cashier Section</h1>
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
                        <td><i>Cashier</i></td>
                        <td>-</td>
                        <td><a href={ Cash001 } rel="noreferrer" target="_blank">POLICY ON CASH DISBURSEMENTS</a></td>
                    </tr>
                    <tr>
                        <td><i>Cashier</i></td>
                        <td>-</td>
                        <td><a href={ Cash002 } rel="noreferrer" target="_blank">POLICY ON COLLECTIONS</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Cashier
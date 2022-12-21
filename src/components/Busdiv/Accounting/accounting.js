import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Acct002  from '../../pdffiles/Accounting/POLICY ON OVERTIME PAY.pdf'
import Acct001  from '../../pdffiles/Accounting/POLICY ON PREPARATION OF NIGHT SHIFT DIFFERENTIAL & JOB ORDER PAYROLL.pdf'
import Acct03  from '../../pdffiles/Accounting/POLICY ON PREPARATION OF PAYROLL DEDUCTIONS.pdf'
import Acct04  from '../../pdffiles/Accounting/POLICY ON VOUCHER PREPARATION.pdf'

const Accounting = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Accounting Section</h1>
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
                        <td><i>Accounting</i></td>
                        <td>-</td>
                        <td><a href={ Acct002 } rel="noreferrer" target="_blank">POLICY ON OVERTIME PAY</a></td>
                    </tr>
                    <tr>
                        <td><i>Accounting</i></td>
                        <td>-</td>
                        <td><a href={ Acct001 } rel="noreferrer" target="_blank">POLICY ON PREPARATION OF NIGHT SHIFT DIFFERENTIAL & JOB ORDER PAYROLL</a></td>
                    </tr>
                    <tr>
                        <td><i>Accounting</i></td>
                        <td>-</td>
                        <td><a href={ Acct03 } rel="noreferrer" target="_blank">POLICY ON PREPARATION OF PAYROLL DEDUCTIONS</a></td>
                    </tr>
                    <tr>
                        <td><i>Accounting</i></td>
                        <td>-</td>
                        <td><a href={ Acct04 } rel="noreferrer" target="_blank">POLICY ON VOUCHER PREPARATION</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Accounting
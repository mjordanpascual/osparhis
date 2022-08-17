import React from 'react'
import Navbar from '../../Navbar/Navbar'
import NSO013 from '../../pdffiles/Nursing/cssu/NSO-013.pdf'

const Csr = () => {
  return (
    <>
        <Navbar />
        <div className='pol' style={{fontSize: "16px",height:"65px"}}>
            <h1>CENTRAL STERILE SUPPLY AND STERILIZATION UNIT (CSSU)</h1>
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
                        <td><i>CSSU</i></td>
                        <td>July 12, 2016 </td>
                        <td><a href={ NSO013 } rel="noreferrer" target="_blank">POLICY ON REQUISITION OF SUPPLIES STANDARD OPERATING PROCEDURES </a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Csr
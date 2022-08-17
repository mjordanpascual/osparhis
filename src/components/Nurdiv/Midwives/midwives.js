import React from 'react'
import Navbar from '../../Navbar/Navbar'
import COM001  from '../../pdffiles/Nursing/lactationandbreastfeeding/COM-001.pdf'
import COM002  from '../../pdffiles/Nursing/lactationandbreastfeeding/COM-002.pdf'
import COM0010  from '../../pdffiles/Nursing/lactationandbreastfeeding/COM-0010.pdf'

const Midwives = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>LACTATION AND BREASTFEEDING</h1>
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
                        <td><i>LACTATION AND BREASTFEEDING</i></td>
                        <td>01-05-2019</td>
                        <td><a href={ COM001 } rel="noreferrer" target="_blank">POLICY ON BREASTFEEDING</a></td>
                    </tr>
                    <tr>
                        <td><i>LACTATION AND BREASTFEEDING</i></td>
                        <td>01-05-2019</td>
                        <td><a href={ COM002 } rel="noreferrer" target="_blank">POLICY ON TRAINING OF HEALTH CARE STAFF ON LACTATION AND BREASTFEEDING</a></td>
                    </tr>
                    <tr>
                        <td><i>LACTATION AND BREASTFEEDING</i></td>
                        <td>01-05-2019</td>
                        <td><a href={ COM0010 } rel="noreferrer" target="_blank">POLICY ON REFERRAL SYSTEM</a></td>
                    </tr>
                </table>
            </div>
    </>
  )
}

export default Midwives
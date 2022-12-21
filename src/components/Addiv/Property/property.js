import React from 'react'
import Navbar from '../../Navbar/Navbar'
import PRO004  from '../../pdffiles/Property/POLICY ON ACCEPTANCE AND RETURN OF GOODS UPON DELIVERY.pdf'
import PRO005  from '../../pdffiles/Property/POLICY ON INVENTORY OF CONSUMABLES AND EQUIPMENTS.pdf'
import PRO002  from '../../pdffiles/Property/POLICY ON ISSUANCE OF REQUESTED SUPPLIES, MATERIALS AND EQUIPMENTS.pdf'
import PRO003  from '../../pdffiles/Property/POLICY ON PREPARATION FOR ANNUAL BUDGET FOR SUPPLIES, MATERIALS AND EQUIPMENTS.pdf'
import PRO001  from '../../pdffiles/Property/POLICY ON PROCUREMENT OF MEDICINES, SUPPLIES, MATERIALS AND EQUIPMENTS.pdf'
import './property.css'

const Property = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Property</h1>
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
                        <td><i>Property Section</i></td>
                        <td>November 2022</td>
                        <td><a href={ PRO004 } rel="noreferrer" target="_blank">POLICY ON ACCEPTANCE AND RETURN OF GOODS UPON DELIVERY</a></td>
                    </tr>
                    <tr>
                        <td><i>Property Section</i></td>
                        <td>November 2022</td>
                        <td><a href={ PRO005 } rel="noreferrer" target="_blank">POLICY ON INVENTORY OF CONSUMABLES AND EQUIPMENTS</a></td>
                    </tr>
                    <tr>
                        <td><i>Property Section</i></td>
                        <td>November 2022</td>
                        <td><a href={ PRO002 } rel="noreferrer" target="_blank">POLICY ON ISSUANCE OF REQUESTED SUPPLIES, MATERIALS AND EQUIPMENTS</a></td>
                    </tr>
                    <tr>
                        <td><i>Property Section</i></td>
                        <td>November 2022</td>
                        <td><a href={ PRO003 } rel="noreferrer" target="_blank">POLICY ON PREPARATION FOR ANNUAL BUDGET FOR SUPPLIES, MATERIALS AND EQUIPMENTS</a></td>
                    </tr>
                    <tr>
                        <td><i>Property Section</i></td>
                        <td>November 2022</td>
                        <td><a href={ PRO001 } rel="noreferrer" target="_blank">POLICY ON PROCUREMENT OF MEDICINES, SUPPLIES, MATERIALS AND EQUIPMENTS</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Property
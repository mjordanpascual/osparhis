import React from 'react'
import Navbar from '../../Navbar/Navbar'
import ENGMAINT001  from '../../pdffiles/Maintenance/POLICY AND GUIDELINES REGARDING MAINTENANCE OF EQUIPMENT.pdf'
import ENGMAINT002  from '../../pdffiles/Maintenance/POLICY AND PROCEDURE ON REPAIRS AND RENOVATION.pdf'
import ENGMAINT004  from '../../pdffiles/Maintenance/POLICY ON CLEANING OF AIRCON.pdf'
import ENGMAINT005  from '../../pdffiles/Maintenance/POLICY ON CLEANING OF ELECTRIC FANS & EXHAUST FANS.pdf'
import ENGMAINT003  from '../../pdffiles/Maintenance/POLICY ON ELECTRICAL MONITORING AND REPAIRS.pdf'
import ENGMAINT006  from '../../pdffiles/Maintenance/POLICY ON HANDLING HOSPITAL GENERATOR.pdf'
import './maintenance.css'

const Maintenance = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Maintenance</h1>
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
                        <td><i>Maintenance</i></td>
                        <td>-</td>
                        <td><a href={ ENGMAINT001 } rel="noreferrer" target="_blank">POLICY AND GUIDELINES REGARDING MAINTENANCE OF EQUIPMENT</a></td>
                    </tr>
                    <tr>
                        <td><i>Maintenance</i></td>
                        <td>-</td>
                        <td><a href={ ENGMAINT002 } rel="noreferrer" target="_blank">POLICY AND PROCEDURE ON REPAIRS AND RENOVATION</a></td>
                    </tr>
                    <tr>
                        <td><i>Maintenance</i></td>
                        <td>-</td>
                        <td><a href={ ENGMAINT004 } rel="noreferrer" target="_blank">POLICY ON CLEANING OF AIRCON</a></td>
                    </tr>
                    <tr>
                        <td><i>Maintenance</i></td>
                        <td>-</td>
                        <td><a href={ ENGMAINT005 } rel="noreferrer" target="_blank">POLICY ON CLEANING OF ELECTRIC FANS & EXHAUST FANS</a></td>
                    </tr>
                    <tr>
                        <td><i>Maintenance</i></td>
                        <td>-</td>
                        <td><a href={ ENGMAINT003 } rel="noreferrer" target="_blank">POLICY ON ELECTRICAL MONITORING AND REPAIRS</a></td>
                    </tr>
                    <tr>
                        <td><i>Maintenance</i></td>
                        <td>-</td>
                        <td><a href={ ENGMAINT006 } rel="noreferrer" target="_blank">POLICY ON HANDLING HOSPITAL GENERATOR</a></td>
                    </tr>
                </table>
            </div>

    </>
  )
}

export default Maintenance
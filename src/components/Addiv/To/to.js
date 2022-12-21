import React from 'react'
import Navbar from '../../Navbar/Navbar'
import TO001  from '../../pdffiles/To/POLICY ON PROPER GUIDELINES THE PROPER HANDLING OF THE TELEPHONE AS A TOOL OF COMMUNICATION.pdf'
import TO003   from '../../pdffiles/To/POLICY ON EMERGENCY OPERATION CENTER.pdf'
import TO002   from '../../pdffiles/To/POLICY ON HANDLING OF TELEPHONE MESSAGES.pdf'
import './to.css'

const To = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Telephone Operator</h1>
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
                        <td><i>Telephone Operator Section</i></td>
                        <td>-</td>
                        <td><a href={ TO001 } rel="noreferrer" target="_blank">POLICY ON  PROPER GUIDELINES THE PROPER HANDLING OF THE TELEPHONE AS A TOOL OF COMMUNICATION</a></td>
                    </tr>
                    <tr>
                        <td><i>Telephone Operator Section</i></td>
                        <td>September 2022</td>
                        <td><a href={ TO003 } rel="noreferrer" target="_blank">POLICY ON EMERGENCY OPERATION CENTER</a></td>
                    </tr>
                    <tr>
                        <td><i>Telephone Operator Section</i></td>
                        <td>September 2022</td>
                        <td><a href={ TO002 } rel="noreferrer" target="_blank">POLICY ON HANDLING OF TELEPHONE MESSAGES</a></td>
                    </tr>
                </table>
            </div>
    </>
  )
}

export default To
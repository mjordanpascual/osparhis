import React from 'react'
import Navbar from '../../Navbar/Navbar'
import IT004  from '../../pdffiles/It/OSPAR-ADM-IT.pdf'
import IT005  from '../../pdffiles/It/POLICY ON IHOMIS.pdf'
import IT001  from '../../pdffiles/It/POLICY ON PURCHASING.pdf'
import IT003  from '../../pdffiles/It/POLICY ON SECURITY POLICY.pdf'
import IT002  from '../../pdffiles/It/POLICY USE OF OWNED EQUIPMENTS.pdf'

const It = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Information Technology</h1>
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
                        <td><i>Information Technology</i></td>
                        <td>2022</td>
                        <td><a href={ IT004 } rel="noreferrer" target="_blank">ADMINISTRATION POLICY</a></td>
                    </tr>   
                    <tr>
                        <td><i>Information Technology</i></td>
                        <td>2022</td>
                        <td><a href={ IT005 } rel="noreferrer" target="_blank">POLICY ON IHOMIS</a></td>
                    </tr>    
                    <tr>
                        <td><i>Information Technology</i></td>
                        <td>2022</td>
                        <td><a href={ IT001 } rel="noreferrer" target="_blank">POLICY ON PURCHASING</a></td>
                    </tr>    
                    <tr>
                        <td><i>Information Technology</i></td>
                        <td>2022</td>
                        <td><a href={ IT003 } rel="noreferrer" target="_blank">POLICY ON SECURITY POLICY</a></td>
                    </tr>    
                    <tr>
                        <td><i>Information Technology</i></td>
                        <td>2022</td>
                        <td><a href={ IT002 } rel="noreferrer" target="_blank">POLICY USE OF OWNED EQUIPMENTS</a></td>
                    </tr>    
                </table>
            </div>
            {/* <div style={{padding: "15px", display: 'flex', justifyContent: 'center'}}>
                        <h3 style={{color: 'yellow', backgroundColor: 'green'}}>
                            In Progress...
                        </h3>
            </div> */}
    </>
  )
}

export default It
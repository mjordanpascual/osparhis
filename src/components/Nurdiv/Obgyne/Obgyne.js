import React from 'react'
import Navbar from '../../Navbar/Navbar'
import NSO017  from '../../pdffiles/Nursing/obgyne/NSO-017.pdf'
import NSO018  from '../../pdffiles/Nursing/obgyne/NSO-018.pdf'
import NSO019  from '../../pdffiles/Nursing/obgyne/NSO-019.pdf'

const Obgyne = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Obstetric and Gynecology Unit</h1>
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
                        <td><i>Obstetric and Gynecology Unit</i></td>
                        <td>July 12, 2016</td>
                        <td><a href={ NSO017 } rel="noreferrer" target="_blank">POLICY ON OBSTETRIC AND GYNECOLOGY UNIT</a></td>
                    </tr>
                    <tr>
                        <td><i>Obstetric and Gynecology Unit</i></td>
                        <td>July 12, 2016</td>
                        <td><a href={ NSO018 } rel="noreferrer" target="_blank">POLICY ON HUMAN MILK BANKING</a></td>
                    </tr>
                    <tr>
                        <td><i>NICU / OB / GYNE Ward / OPD</i></td>
                        <td>February 21, 2015</td>
                        <td><a href={ NSO019 } rel="noreferrer" target="_blank">POLICY ON NEWBORN SCREENING</a></td>
                    </tr>
                </table>
            </div>
    </>
  )
}

export default Obgyne
import React from 'react'
import Navbar from '../../Navbar/Navbar'
// import Moa  from '../../pdffiles/Admin/MOA.pdf'
import PHARMA  from '../../pdffiles/Pharma/TABLE OF CONTENTS.pdf'
import PHARMAa  from '../../pdffiles/Pharma/ORGANIZATION AND PERSONNEL.pdf'
import PHARMA01  from '../../pdffiles/Pharma/POLICY ON SELECTION OF MEDICINES.pdf'
import PHARMA01a  from '../../pdffiles/Pharma/POLICY ON PROCUREMENT OF MEDICINES.pdf'
import PHARMA003  from '../../pdffiles/Pharma/POLICY ON ACCEPTANCE OF DONATIONS OF DRUGS AND MEDICAL SUPPLIES AND EQUIPMENT.pdf'
import PHARMA004  from '../../pdffiles/Pharma/POLICY ON STORAGE OF MEDICINE.pdf'
import PHARMA005  from '../../pdffiles/Pharma/POLICY ON INVENTORY STOCKS.pdf'
import PHARMA006  from '../../pdffiles/Pharma/POLICY ON PRODUCT RECALL.pdf'
import PHARMA007  from '../../pdffiles/Pharma/EXCHANGED DRUGS.pdf'
import PHARMA008  from '../../pdffiles/Pharma/POLICY ON DISPOSAL OF EXPIRED, SPOILED, DAMAGED MEDICINES.pdf'
import PHARMA009  from '../../pdffiles/Pharma/POLICY ON DRUGS DISTRIBUTION (IN PATIENT and OUT PATIENT).pdf'
import PHARMA010  from '../../pdffiles/Pharma/POLICY ON DANGEROUS DRUGS AND THEIR CONTROL.pdf'
import PHARMA011  from '../../pdffiles/Pharma/POLICY ON ADVERSE DRUGS REACTION AND MEDICAL RECORDS.pdf'
import PHARMA012  from '../../pdffiles/Pharma/POLICY ON MEDICATIONS BROUGHT TO THE HOSPITAL BY THE PATIENT.pdf'
import appendixes  from '../../pdffiles/Pharma/APPENDIXES.pdf'
import references  from '../../pdffiles/Pharma/REFERENCES.pdf'

const Pharma = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Pharmacy</h1>
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
                        <td><i>Pharmacy Section</i></td>
                        <td>-</td>
                        <td><a href={ PHARMA } rel="noreferrer" target="_blank">TABLE OF CONTENTS</a></td>
                    </tr>
                    <tr>
                        <td><i>Pharmacy Section</i></td>
                        <td>-</td>
                        <td><a href={ PHARMAa } rel="noreferrer" target="_blank">ORGANIZATION AND PERSONNEL</a></td>
                    </tr>
                    <tr>
                        <td><i>Pharmacy Section</i></td>
                        <td>-</td>
                        <td><a href={ PHARMA01 } rel="noreferrer" target="_blank">POLICY ON SELECTION OF MEDICINES</a></td>
                    </tr>
                    <tr>
                        <td><i>Pharmacy Section</i></td>
                        <td>-</td>
                        <td><a href={ PHARMA01a } rel="noreferrer" target="_blank">POLICY ON PROCUREMENT OF MEDICINES</a></td>
                    </tr>
                    <tr>
                        <td><i>Pharmacy Section</i></td>
                        <td>-</td>
                        <td><a href={ PHARMA003 } rel="noreferrer" target="_blank">POLICY ON ACCEPTANCE OF DONATIONS OF DRUGS AND MEDICAL SUPPLIES AND EQUIPMENT</a></td>
                    </tr>
                    <tr>
                        <td><i>Pharmacy Section</i></td>
                        <td>-</td>
                        <td><a href={ PHARMA004 } rel="noreferrer" target="_blank">POLICY ON STORAGE OF MEDICINE</a></td>
                    </tr>
                    <tr>
                        <td><i>Pharmacy Section</i></td>
                        <td>-</td>
                        <td><a href={ PHARMA005 } rel="noreferrer" target="_blank">POLICY ON INVENTORY STOCKS</a></td>
                    </tr>
                    <tr>
                        <td><i>Pharmacy Section</i></td>
                        <td>-</td>
                        <td><a href={ PHARMA006 } rel="noreferrer" target="_blank">POLICY ON PRODUCT RECALL</a></td>
                    </tr>
                    <tr>
                        <td><i>Pharmacy Section</i></td>
                        <td>-</td>
                        <td><a href={ PHARMA007 } rel="noreferrer" target="_blank">POLICY ON EXCHANGED DRUGS</a></td>
                    </tr>
                    <tr>
                        <td><i>Pharmacy Section</i></td>
                        <td>-</td>
                        <td><a href={ PHARMA008 } rel="noreferrer" target="_blank">POLICY ON DISPOSAL OF EXPIRED, SPOILED, DAMAGED MEDICINES</a></td>
                    </tr>
                    <tr>
                        <td><i>Pharmacy Section</i></td>
                        <td>-</td>
                        <td><a href={ PHARMA009 } rel="noreferrer" target="_blank">POLICY ON DRUGS DISTRIBUTION (IN PATIENT and OUT PATIENT)</a></td>
                    </tr>
                    <tr>
                        <td><i>Pharmacy Section</i></td>
                        <td>-</td>
                        <td><a href={ PHARMA010 } rel="noreferrer" target="_blank">POLICY ON DANGEROUS DRUGS AND THEIR CONTROL</a></td>
                    </tr>
                    <tr>
                        <td><i>Pharmacy Section</i></td>
                        <td>-</td>
                        <td><a href={ PHARMA011 } rel="noreferrer" target="_blank">POLICY ON ADVERSE DRUGS REACTION AND MEDICAL RECORDS</a></td>
                    </tr>
                    <tr>
                        <td><i>Pharmacy Section</i></td>
                        <td>-</td>
                        <td><a href={ PHARMA012 } rel="noreferrer" target="_blank">POLICY ON MEDICATIONS BROUGHT TO THE HOSPITAL BY THE PATIENT</a></td>
                    </tr>
                    <tr>
                        <td><i>Pharmacy Section</i></td>
                        <td>-</td>
                        <td><a href={ appendixes } rel="noreferrer" target="_blank">APPENDIXES</a></td>
                    </tr>
                    <tr>
                        <td><i>Pharmacy Section</i></td>
                        <td>-</td>
                        <td><a href={ references } rel="noreferrer" target="_blank">REFERENCES</a></td>
                    </tr>
                </table>
            </div>
    </>
  )
}

export default Pharma
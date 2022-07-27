import React from 'react'
import Navbar from '../../Navbar/Navbar'
// import Moa  from '../../pdffiles/Admin/MOA.pdf'
import MeddivTable from '../meddivTable'

const LabEcg = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Laboratory / ECG</h1>
        </div>
        <MeddivTable />        
    </>
  )
}

export default LabEcg
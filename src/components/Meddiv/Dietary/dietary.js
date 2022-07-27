import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Moa  from '../../pdffiles/Admin/MOA.pdf'
import MeddivTable from '../meddivTable'

const Dietary = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Dietary</h1>
        </div>
        <MeddivTable />
    </>
  )
}

export default Dietary
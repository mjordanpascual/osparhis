import React from 'react'
import Navbar from '../../Navbar/Navbar'
import './coc.css'
// import Moa  from '../../pdffiles/Admin/MOA.pdf'
import MeddivTable from '../meddivTable'
import Policies from '../../Pages/policies'

const Coc = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>Chief of Clinics</h1>
        </div>
        <MeddivTable />
    </>
  )
}

export default Coc
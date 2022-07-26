import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Moa  from '../../pdffiles/Admin/MOA.pdf'

const Dietary = () => {
  return (
    <>
        <Navbar />

        <div className='pol'>
            <h1>Dietary</h1>
        </div>

        <div className='policy-heads'>
            <table className='table-coc'>
                <tr>
                    <th>Issuance</th>
                    <th>Date</th>
                    <th>Title</th>
                </tr>
                <tr>
                    <td><i>Dietary 1.1</i></td>
                    <td>01-05-2019</td>
                    <td><a href={ Moa } rel="noreferrer" target="_blank">Dietary 1.2</a></td>
                </tr>
                <tr>
                    <td><i>Dietary 1.2</i></td>
                    <td>07-18-2020</td>
                    <td><a href={ Moa } rel="noreferrer" target="_blank">Dietary 1.3</a></td>
                </tr>
                <tr>
                    <td><i>Dietary 1.3</i></td>
                    <td>12-31-2021</td>
                    <td><a href={ Moa } rel="noreferrer" target="_blank">Dietary 1.4</a></td>
                </tr>
                <tr>
                    <td><i>Dietary 1.4</i></td>
                    <td>07-06-2022</td>
                    <td><a href={ Moa } rel="noreferrer" target="_blank">Dietary 1.5</a></td>
                </tr>
            </table>
        </div>
    </>
  )
}

export default Dietary
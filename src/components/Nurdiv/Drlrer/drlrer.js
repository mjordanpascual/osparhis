import Navbar from '../../Navbar/Navbar'
import NSO005 from '../../pdffiles/Nursing/headnurse/NSO-005.pdf'
// import NSO007 from '../../pdffiles/Nursing/headnurse/NSO-007.pdf'

const Headnurse = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>DR / LR / ER / WARD</h1>
        </div>

        <div className='table-policy'>
            <h2>Hospital Policies</h2>
            <table className='table-meddiv'>
                <tr>
                    <th>Section</th>
                    <th>Policy No.</th>
                    <th>Date</th>
                    <th>Subject</th>
                </tr>
                <tr>
                    <td><i>DR / LR / ER / WARD</i></td>
                    <td>NSO-005</td>
                    <td>July 12, 2016</td>
                    <td><a href={ NSO005 } rel="noreferrer" target="_blank">POLICY ON EXPANDED ROLE OF MIDWIVES</a></td>
                </tr>
            </table>
        </div>
    </>
  )
}

export default Headnurse
import React from 'react'
import Navbar from '../../Navbar/Navbar'
import NDS01  from '../../pdffiles/Nutrition/GOALS AND OBJECTIVES.pdf'
import NDS03  from '../../pdffiles/Nutrition/JOB DESCRIPTION OF PERSONNEL WITH QUALIFICATIONS ATTACHMENT  PERSONNEL WITH FUNCTIONS DUTIES AND RESPONSIBILITIES AND WORKING HOURS.pdf'
import diet  from '../../pdffiles/Nutrition/SERVICE JOB DESCRIPTION OF PERSONNEL WITH QUALIFICATIONS.pdf'
import NDS02  from '../../pdffiles/Nutrition/ORGANIZATION AND STAFFING.pdf'
import NDS04  from '../../pdffiles/Nutrition/PERSONNEL WORKING SCHEDULES AND ATTENDANCE.pdf'
import NDS05  from '../../pdffiles/Nutrition/POLICY ON ATTENDANCE TO SEMINAR AND CONVENTION AND TRAINING.pdf'
import NDS025  from '../../pdffiles/Nutrition/POLICY ON BLENDERIZED FEEDING.pdf'
import NDS007  from '../../pdffiles/Nutrition/POLICY ON CASH ADVANCEMENT.pdf'
import NDS029  from '../../pdffiles/Nutrition/POLICY ON CLINICAL NUTRITION SERVICES.pdf'
import NDS031  from '../../pdffiles/Nutrition/POLICY ON CONTINUOUS EDUCATION PROGRAM.pdf'
import NDS028  from '../../pdffiles/Nutrition/POLICY ON COUNSELING ROOM AND SPECIAL DIET ROOM.pdf'
import NDS010  from '../../pdffiles/Nutrition/POLICY ON CREDIT PURCHASE.pdf'
import NDS015  from '../../pdffiles/Nutrition/POLICY ON DELIVERY OF FOOD TO IN-PATIENTS.pdf'
import NDS014  from '../../pdffiles/Nutrition/POLICY ON DIETARY DIET LIST.pdf'
import NDS016  from '../../pdffiles/Nutrition/POLICY ON DISHWASHING OF PLATES AND UTENSILS AND EQUPMENTS.pdf'
import NDS027  from '../../pdffiles/Nutrition/POLICY ON EMERGENCY FEEDING.pdf'
import NDS020  from '../../pdffiles/Nutrition/POLICY ON FACILITIES, EQUIPMENTS AND MAINTENANCE.pdf'
import NDS011  from '../../pdffiles/Nutrition/POLICY ON FOOD PREPARATION AND STORAGE.pdf'
import NDS009  from '../../pdffiles/Nutrition/POLICY ON FOOD SUPPLIER.pdf'
import NDS013  from '../../pdffiles/Nutrition/POLICY ON FOOD WASTAGE AND SYSTEM ON PILFERAGE.pdf'
import NDS018  from '../../pdffiles/Nutrition/POLICY ON HAND HYGIENE.pdf'
import NDS017  from '../../pdffiles/Nutrition/POLICY ON HEALTH, PERSONAL HYGIENE AND SANITATION.pdf'
import NDS012  from '../../pdffiles/Nutrition/POLICY ON INVENTORY MANAGEMENT.pdf'
import NDS008  from '../../pdffiles/Nutrition/POLICY ON MEAL PLANNING AND CYCLE MENU.pdf'
import NDS023  from '../../pdffiles/Nutrition/POLICY ON NUTRITION COUNSELING AND DIET COUNSELING.pdf'
import NDS030  from '../../pdffiles/Nutrition/POLICY ON NUTRITION EDUCATION.pdf'
import NDS024  from '../../pdffiles/Nutrition/POLICY ON NUTRITIONALS.pdf'
import NDS022  from '../../pdffiles/Nutrition/POLICY ON PEST CONTROL MANAGEMENT.pdf'
import NDS006  from '../../pdffiles/Nutrition/POLICY ON PROMOTION  HIRING  REPLACEMENT  UPGRADE OF PERSONNEL.pdf'
import NDS026  from '../../pdffiles/Nutrition/POLICY ON SPECIAL MEAL REQUEST.pdf'
import NDS019  from '../../pdffiles/Nutrition/POLICY ON UNIFORM AND PERSONAL PROTECTIVE EQUIPMENTS.pdf'
import NDS021  from '../../pdffiles/Nutrition/POLICY ON WATER TESTING.pdf'

const Dietary = () => {
  return (
    <>
        <Navbar />
        <div className='pol'>
            <h1>NUTRITION AND DIETETICS SERVICE</h1>
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
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS01 } rel="noreferrer" target="_blank">GOALS AND OBJECTIVES</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS03 } rel="noreferrer" target="_blank">JOB DESCRIPTION OF PERSONNEL WITH QUALIFICATIONS ATTACHMENT  PERSONNEL WITH FUNCTIONS DUTIES AND RESPONSIBILITIES AND WORKING HOURS</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ diet } rel="noreferrer" target="_blank">SERVICE JOB DESCRIPTION OF PERSONNEL WITH QUALIFICATIONS</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS02 } rel="noreferrer" target="_blank">ORGANIZATION AND STAFFING</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS04 } rel="noreferrer" target="_blank">PERSONNEL WORKING SCHEDULES AND ATTENDANCE</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS05 } rel="noreferrer" target="_blank">POLICY ON ATTENDANCE TO SEMINAR AND CONVENTION AND TRAINING</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS025 } rel="noreferrer" target="_blank">POLICY ON BLENDERIZED FEEDING</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS007 } rel="noreferrer" target="_blank">POLICY ON CASH ADVANCEMENT</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS029 } rel="noreferrer" target="_blank">POLICY ON CLINICAL NUTRITION SERVICES</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS031 } rel="noreferrer" target="_blank">POLICY ON CONTINUOUS EDUCATION PROGRAM</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS028 } rel="noreferrer" target="_blank">POLICY ON COUNSELING ROOM AND SPECIAL DIET ROOM</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS010 } rel="noreferrer" target="_blank">POLICY ON CREDIT PURCHASE</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS015 } rel="noreferrer" target="_blank">POLICY ON DELIVERY OF FOOD TO IN-PATIENTS</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS014 } rel="noreferrer" target="_blank">POLICY ON DIETARY DIET LIST</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS016 } rel="noreferrer" target="_blank">POLICY ON DISHWASHING OF PLATES AND UTENSILS AND EQUPMENTS</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS016 } rel="noreferrer" target="_blank">POLICY ON DISHWASHING OF PLATES AND UTENSILS AND EQUPMENTS</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS027 } rel="noreferrer" target="_blank">POLICY ON EMERGENCY FEEDING</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS020 } rel="noreferrer" target="_blank">POLICY ON FACILITIES, EQUIPMENTS AND MAINTENANCE</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS011 } rel="noreferrer" target="_blank">POLICY ON FOOD PREPARATION AND STORAGE</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS009 } rel="noreferrer" target="_blank">POLICY ON FOOD SUPPLIER</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS013 } rel="noreferrer" target="_blank">POLICY ON FOOD WASTAGE AND SYSTEM ON PILFERAGE</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS018 } rel="noreferrer" target="_blank">POLICY ON HAND HYGIENE</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS017 } rel="noreferrer" target="_blank">POLICY ON HEALTH, PERSONAL HYGIENE AND SANITATION</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS012 } rel="noreferrer" target="_blank">POLICY ON INVENTORY MANAGEMENT</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS008 } rel="noreferrer" target="_blank">POLICY ON MEAL PLANNING AND CYCLE MENU</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS023 } rel="noreferrer" target="_blank">POLICY ON NUTRITION COUNSELING AND DIET COUNSELING</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS030 } rel="noreferrer" target="_blank">POLICY ON NUTRITION EDUCATION</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS024 } rel="noreferrer" target="_blank">POLICY ON NUTRITIONALS</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS022 } rel="noreferrer" target="_blank">POLICY ON PEST CONTROL MANAGEMENT</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS006 } rel="noreferrer" target="_blank">POLICY ON PROMOTION  HIRING  REPLACEMENT  UPGRADE OF PERSONNEL</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS026 } rel="noreferrer" target="_blank">POLICY ON SPECIAL MEAL REQUEST</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS019 } rel="noreferrer" target="_blank">POLICY ON UNIFORM AND PERSONAL PROTECTIVE EQUIPMENTS</a></td>
                    </tr>
                    <tr>
                        <td><i>Dietary Section</i></td>
                        <td>2019</td>
                        <td><a href={ NDS021 } rel="noreferrer" target="_blank">POLICY ON WATER TESTING</a></td>
                    </tr>
                </table>
            </div>
    </>
  )
}

export default Dietary
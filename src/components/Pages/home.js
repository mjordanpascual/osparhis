import React from 'react'
// import { Link } from 'react-router-dom'
import './home.css'
import Navbar from '../Navbar/Navbar';
import '../../osparfront.jpg';

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      {/* <div className='pol'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/policies">Policies</Link></li>
      </div> */}
        <div className='onp-home'></div>
          <div className='onp-mvission'>
            <div className='onp-vision'>
                <h2>
                  Vision
                </h2>
                <p>
                  To be Parañaque city's best healthcare provider.
                </p>
            </div>  
            <div className='onp-vision'>  
              <h2>
                Mission
              </h2>
              <p>
              to offer comprehensive healthcare services to the constituents of parañaque city in an environment which is innovative, safe and caring, reflecting the city government's advocacy to serve its people.
              </p>
            </div>
            <div className='onp-vision'>
              <h2>
                Core Values
              </h2>
              <p>
                <ul>
                  <li>social responsibility</li>
                  <li>professionalism</li>
                  <li>quality service</li>
                  <li>competence</li>
                  <li>compassion</li>
                  <li>excellence</li>
                  <li>excellence</li>
                  <li>teamwork</li>
                  <li>dignity</li>
                  <li>safety</li>
                </ul>
              </p>
            </div>
        </div>
    </> 
  )
}

export default Home
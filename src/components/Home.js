import React from 'react'
import {Link } from "react-router-dom";
import "./Home.css"
import HomeSec from './HomeSec';


function Home() {
    return (
      <div>
        <div className="home">
            <div className="navbar">
              <div className="nav-wrap">
                   <div className="nav-item">
                      <Link to='/' className="nav-links">HOME</Link>
                   </div>
                    <div className="nav-item">
                      <Link to='/about' className="nav-links">ABOUT</Link>
                    </div>
                    <Link to='/' className="nav-logo">CAM<i className="fas fa-camera-retro"/>ERA</Link>
                   <div className="nav-item">
                      <Link to='/gallery' className="nav-links">GALLERY</Link>
                    </div>
                    <div className="nav-item">
                       <Link to='/contact' className="nav-links">CONTACT</Link>
                    </div>
                </div>
            </div>
            <h1 className="main"><span className="heading">CAM-ERA</span> photography</h1>
            <p className="para">photographer based in New York</p>
        </div>
        <HomeSec/>
      </div>
    )
    
}

export default Home;

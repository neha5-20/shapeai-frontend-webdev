import React from 'react';
import {Link } from "react-router-dom";
import "./Contact.css"


function Contact() {
    return (
        <div className="contact">
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
            <section>
                <div className="image"></div>
                <div className="form">
                    <h1>GET IN TOUCH!</h1>
                    <div className="form_con">
                        <h5>First Name</h5>
                        <input type="text" id="fname" name="firstname" placeholder="First name.."/>
                        <h5>Last Name</h5>
                        <input type="text" id="lname" name="lastname" placeholder="Last name.."/>
                        <h5>Email</h5>
                        <input type="email" id="email" name="email" placeholder="Email.."/>
                        <h5>Tell me more!</h5>
                        <input type="text" id="tell" name="tell"/>
                        <button className="button">Submit</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact

import React from 'react'
import PhotoGallery from './PhotoGallery';
import "./Gallery.css"
import {Link } from "react-router-dom";

function Gallery() {
    return (
      <div className="container">
        <div className="gallery">
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
          </div>
          <PhotoGallery
            img1="https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            img2="https://images.pexels.com/photos/2106687/pexels-photo-2106687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            img3="https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            img4="https://images.pexels.com/photos/161709/newborn-baby-feet-basket-161709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            img5="https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            img6="https://images.pexels.com/photos/8739391/pexels-photo-8739391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            img7="https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            img8="https://images.pexels.com/photos/1682497/pexels-photo-1682497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            img9="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>
    )
}

export default Gallery

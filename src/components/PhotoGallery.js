import React from 'react'
import "./PhotoGallery.css"

function PhotoGallery(props) {
    return (
        <div className="container">
            <div className="G-row">
                <div className="G-col">
                    <img src={props.img1} alt='img1'/>
                    <img src={props.img2} alt='img2'/>
                </div>
                <div className="G-col">
                    <img src={props.img3} alt='img3'/>
                    <img src={props.img4} alt='img4'/>
                    <img src={props.img5} alt='img5'/>
                </div>
                <div className="G-col">
                    <img src={props.img6} alt='img6'/>
                    <img src={props.img7} alt='img7'/>
                </div>
                <div className="G-col">
                    <img src={props.img8} alt='img6'/>
                    <img src={props.img9} alt='img7'/>
                </div>
            </div>
        </div>
    )
}

export default PhotoGallery

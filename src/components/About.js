import React from 'react'
import {Link } from "react-router-dom";
import "./About.css"

function About() {
    return (
        <div className="A_container">
            <div className="about">
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
               <h1 className="A_heading">ABOUT ME</h1>
            </div>
            <section className="section1">
               <div className="A_sec1">
                  <div className="sec1_heading">
                     <h1>HELLO</h1>
                     <h3>I'M REALLY HAPPY YOU'RE HERE</h3>
                  </div>
                  <div className="sec1_para">
                       <p>As a professionally trained photographer and creative visual artist, my job of telling the most beautiful love stories brings me so much fulfillment and joy. I’m hard-working, yet light-hearted. I love music, movies and most of all, my adorable family. I’m powered by Intelligentsia coffee, green juices filled with crazy superfood concoctions and the thrill of my last mountain bike ride. I love luminous light, beautiful architecture and couples who are deeply in love and who care about creating a magical experience for their wedding day.</p>
                        <p>What does all of this mean for you? With over nine years of experience documenting beautiful weddings around the globe, you can trust me to never miss those important details, candids and spontaneous moments. You can be sure I’ll direct you effortlessly with a guided approach, to allow for a refined, fine art look that always displays authentic emotion.</p>
                  </div>
               </div>
               <div className="A_sec2"></div>
            </section>
            <section className="section2">
                <div className="A_sec3"></div>
                <div className="A_sec4">
                   <div className="sec4_heading">
                      <h1>About the images</h1>
                   </div>
                   <div className="sec4_para">
                      <p>Images don’t just happen, they’re crafted. Whether it’s being in-the-moment to capture that perfect candid, or saying just the right thing to evoke the ideal reaction, my years of experience have taught me how to navigate all the different aspects of a wedding day so I never miss a moment.</p>
                      <p>When a bride is getting ready, I’ll sometimes clear the room to help her feel more comfortable. We’ll talk about the couple’s history, a story that makes her smile every time she thinks of him. The first time they held hands and the overwhelming emotion that came with his proposal. As she opens up about their history, I quietly shoot to get the most authentic smile and joy possible.</p>
                      <p>When you fly half-way across the world to exchange your vows in the hills of Tuscany and it rains the entire day, I promise I won’t miss the 15 seconds where the sun peeks out. We’ll chase the light. We’ll make the most of it. And I’ll work harder than you can imagine to capture magical images of your whole celebration, rain or shine.</p>
                   </div>
                </div>
            </section>
        </div>

    )
}

export default About;

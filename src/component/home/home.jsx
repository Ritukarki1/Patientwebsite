import React from 'react'
import '../home/home.css'
import one from '../home/one.jpg';
import two from '../home/record.png'
import three from '../home/1.png';
import four from'../home/wait.jpg';
import five from '../home/cal.png';
import six from '../home/report.png';
import seven from '../home/ste.jpg';

import pts from '../home/pts.jpg';

const Home = () => {
    return (
        <div className="header">
            <div className="container-top">
       <img src={one} alt="hey"/>
       <h1>Patient Tracking System</h1>
       <h2>MANAGING PATIENT JOURNEY THROUGHOUT<br/>
      <span>VISIT</span> </h2>
      <h3>P <span1>T </span1> <span2>S </span2></h3>
      <button><a href="/login">LOGIN</a></button>
            </div>
             <div className="container-middle">
           <div className="information">
           <div className="row-1">
           <div className="one">
               <a href="/login"><img src={two} alt="two"/></a>
           </div>
           <div className="two">
           <a href="/login"> <img src={three} alt="two"/></a>
           </div>
           <div className="three">
           <a href="/login"> <img src={four} alt="two"/></a>
           </div>
           </div>
<div className="row-2">
           <div className="one1">
           <a href="/login"> <img src={five} alt="two"/></a>
           </div>
           <div className="two1">
           <a href="/login"> <img src={six} alt="two"/></a>
           </div>
           <div className="three1">
           <a href="/login"> <img src={seven} alt="two"/></a>
           </div>
</div>
           </div>
     </div>
    <div className="container-bottom">
    <div className="text-pts">
    <h1>ABOUT</h1>
    <h2>Patient Tracking System</h2>
    <p>Patient Tracking System is a tracking system which,tracks record of 
patient inside the hospital. Patient Tracking system is generally designed for the hospital or health care
center wherepeople or patient can be easily tracked through record of their activities so that the staff can 
clearly know everything.</p>
<p>Patient Tracking system is latest need of hospital and other health care center though it helps to make things
eus earum ut molestias abrchitecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia.</p>
    </div>
    <div className="img">
        <img src={pts} alt="two"/>
    </div>
    </div>
    <div className="footer">
    <p>Copyright PTS 2019 All Right Reserved by <span>@PTS</span>.</p>
    </div>
     </div>
     
            
        
    )
}

export default Home

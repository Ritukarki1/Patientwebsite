import React from 'react'
import '../home/home.css'
import one from '../home/one.jpg';
import two from '../home/record.png'
import three from '../home/1.png';
import four from'../home/wait.jpg';
import five from '../home/cal.png';
import six from '../home/report.png';
import seven from '../home/ste.jpg';


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
               <img src={two} alt="two"/>
           </div>
           <div className="two">
           <img src={three} alt="two"/>
           </div>
           <div className="three">
           <img src={four} alt="two"/>
           </div>
           </div>
<div className="row-2">
           <div className="one1">
           <img src={five} alt="two"/>
           </div>
           <div className="two1">
           <img src={six} alt="two"/>
           </div>
           <div className="three1">
           <img src={seven} alt="two"/>
           </div>
</div>
           </div>
     </div>
    <div className="container-bottom">
    <div className="text-pts">
    <h1>ABOUT</h1>
    <h2>Patient Tracking System</h2>
    <p>Patient Tracking System is a tracking system which,tracks record of 
patient inside the hospital. Patient Trackign system is generally <br/>designed for the hospital or health care
center wherepeople or patient can be easily tracked through record <br/>of their activities so that the staff can 
clearly know everything.</p>
<p>Patient Tracking system is latest need of hospital and other health care center though it helps to make things<br/>
eus earum ut molestias abrchitecto voluptate<br/> aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat,<br/> odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,<br/>
quia.</p>
    </div>
    </div>
    <div className="footer">
    <p>Copyright PTS 2019 All Right Reserved by <span>@PTS</span>.</p>
    </div>
     </div>
     
            
        
    )
}

export default Home

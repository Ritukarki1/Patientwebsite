import React from 'react'
import { useState, useEffect} from 'react'
import '../patient/patient.css'

const VisitDetail = (props) => {

    
    const initialFieldValues = {
        fullName:'',
        checkin: '',
        department: '',
        doctor: '',
        appointmenttime: '',
        day: '',
        patienttype: '',
        checkout: ''    
    }
    var [values, setValues] = useState(initialFieldValues)

    useEffect (() => {
        if(props.currentId=='')
        setValues({
            ...initialFieldValues
        })
        else
        setValues({
            ...props.detailObjects[props.currentId]
        })
    }, [props.currentId, props.detailObjects])
    const handleInputChange = e=>{
        var {name, value} = e.target

setValues({
    ...values,
[name]: value})    }

const handleFormSubmit = e =>{
e.preventDefault();
props.addorEdit(values)
}





    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
<div className="form-group input-group">
<div className="detailtable">
             <div className="d">
                 <div className="d1">
        <label htmlFor="FirstName">Patient Name</label><br/>
        
        <input className="form-control"
        name="name" value={values.fullName}
        onChange={handleInputChange} required/>
    </div> 
<div className="d2">
            
        <label htmlFor="FirstName">Check-In Time?</label><br/>
        
        <input className="form-control" type="time"
        name="checkin" value={values.checkin}
        onChange={handleInputChange} required/>
    </div> </div>
    <div className="">
             <div>
        <label htmlFor="FirstName">Appointment to</label><br/>
        
       <select name="department" value={values.department}  onChange={handleInputChange} required>
       <option></option>
       <option>Gynoecology Department</option>
       <option>Psychology Department</option>
       <option>Orthopedic Department</option>
       <option>Neurology Department</option>
       
       </select>
    </div> </div>
    
    <div className="">
        <label htmlFor="FirstName">Doctor Name</label><br/>
        
        <input className="form-control" placeholder="Dr."
        name="doctor" value={values.doctor}
        onChange={handleInputChange} required/>
    </div>
    <div className="d">
        <div className="d1">
        <label htmlFor="FirstName">Appointment Time</label><br/>
        
        <input className="form-control" type="time"
        name="appointmenttime" value={values.appointmenttime}
        onChange={handleInputChange} required/>
    </div>
    <div className="d3">
        <label htmlFor="FirstName">Appointment Day</label><br/>
        
        <select name="day" value={values.day}
        onChange={handleInputChange} required >
       <option>Sunday</option>
       <option>Monday</option>
       <option>Tuesday</option>
       <option>Wednesday</option>
       <option>Thursday</option>
       <option>Friday</option>
       <option>Saturday</option>
       
       </select>
    </div></div>
    <div className="">
        <label htmlFor="FirstName">Patient Type</label><br/>
        
        <select name="patienttype" value={values.patienttype}
         onChange={handleInputChange} required>
       <option>Regular</option>
       <option>New</option>
       </select>
    </div>
   
    <div className="d">
             <div className="d1">
        <label htmlFor="FirstName">Check-Out Time?</label><br/>
        
        <input className="form-control" type="time"
        name="checkout" value={values.checkout}
        onChange={handleInputChange} required/>
    </div> 
    <div className="d3">
        <label htmlFor="FirstName">Patient Wait For?</label><br/>
        
        <input className="form-control" type="text"
        name="wait" value={values.wait}
        onChange={handleInputChange} required/>
    </div>
    </div>
                <div className="form-control">
    <input type="submit" value={props.currentId==''?"Save":"Update"} className="but "/>
    <button className="but"> <a href="/patient">Ok</a></button>
  </div></div> </div>
        </form>
    )
}

export default VisitDetail;

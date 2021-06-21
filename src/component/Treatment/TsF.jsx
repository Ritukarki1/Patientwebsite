import React from 'react'
import { useState, useEffect } from 'react';

const TsF = (props) => {
    
        const initialFieldValues = {
            fullName:'',
            mname: '',
           Lname: '',
          date: '',
           sex:'',
           id: "",
           date1: '',
        }
        var [values, setValues] = useState(initialFieldValues)
    
        useEffect (() => {
            if(props.currentId=='')
            setValues({
                ...initialFieldValues
            })
            else
            setValues({
                ...props.tsObjects[props.currentId]
            })
        }, [props.currentId, props.tsObjects])
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
    <div className="form-oddetail">
    <div className="hi1">
            <label htmlFor="FirstName"> Patient ID</label><br/>
            
            <input className="form-control" type="number"
            name="id" value={values.id}
            onChange={handleInputChange} required/>
        </div>
    <div className="hi1">
               
            <label htmlFor="FirstName">Patient Name</label><br/>
            
            <input className="form-control"
            name="fullName" value={values.fullName}
            onChange={handleInputChange} required/>
        </div>
        
        <div className="hi1">
            <label htmlFor="MiddleName">Case</label><br/>
              
            <input className="form-control"  
            name="mname" value={values.mname}
            onChange={handleInputChange} /></div>
    
        <div className="hi1">
            <label htmlFor="lastName">Status</label><br/>
              
            <select name="Lname" value={values.Lname} onChange={handleInputChange}required>
    <option>Badly Wound</option>
    <option>Normal</option>
    <option>Emergency</option>
    </select>
       </div>
       <div className="hi1">
            <label htmlFor="MiddleName">Any Exception</label><br/>
              
            <input className="form-control"  
            name="sex" value={values.sex}
            onChange={handleInputChange} /></div>
              <div className="hi1">
            <label htmlFor="MiddleName">Cause</label><br/>
              
            <select name="date" value={values.date} onChange={handleInputChange}required>
    <option>Accident</option>
    <option>Snake Bite</option>
    <option>Internal </option>
    <option>Burn</option>
    <option>other</option>
    </select>
</div>
<div className="hi1">
<label htmlFor="MiddleName">Treat Status</label><br/>
<select name="date2" value={values.date2} onChange={handleInputChange}required>
    <option>Instant Treatment</option>
    <option>Wait and Treat</option>
    </select></div>
    <div className="hi1">
            <label htmlFor="lastName">Date</label><br/>
            <input className="form-control"  type="date"
            name="date1" value={values.date1}
            onChange={handleInputChange} />
    
       </div>
<div className="form-control">
    <input type="submit"  value={props.currentId==''?"Save":"Update"} className="btn-1"/>
   
</div></div>
           </form>
        )
   
}

export default TsF;

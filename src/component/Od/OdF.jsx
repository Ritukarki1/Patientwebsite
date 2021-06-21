import React from 'react'
import { useState, useEffect } from 'react';

const OdF = (props) => {
    
        const initialFieldValues = {
            fullName:'',
            mname: '',
           Lname: '',
          date: '',
           sex:'',
           id: ""
        }
        var [values, setValues] = useState(initialFieldValues)
    
        useEffect (() => {
            if(props.currentId=='')
            setValues({
                ...initialFieldValues
            })
            else
            setValues({
                ...props.odObjects[props.currentId]
            })
        }, [props.currentId, props.odObjects])
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
            <label htmlFor="MiddleName">Ward No</label><br/>
              
            <input className="form-control"  
            name="mname" value={values.mname}
            onChange={handleInputChange} /></div>
    
        <div className="hi1">
            <label htmlFor="lastName">Ward Type</label><br/>
              
            <select name="Lname" value={values.Lname} onChange={handleInputChange}required>
    <option>Regular</option>
    <option>First Class</option>
    <option>Emergency</option>
    </select>
       </div>
       <div className="hi1">
            <label htmlFor="MiddleName">Ward Incharge</label><br/>
              
            <input className="form-control"  
            name="sex" value={values.sex}
            onChange={handleInputChange} /></div>
              <div className="hi1">
            <label htmlFor="MiddleName">Abort-In Date</label><br/>
              
            <input className="form-control"  type="date"
            name="date" value={values.date}
            onChange={handleInputChange} /></div>
</div>
<div className="form-control">
    <input type="submit"  value={props.currentId==''?"Save":"Update"} className="btn-1"/>
   
</div>
           </form>
        )
   
}

export default OdF;

import React from 'react'
import { useState, useEffect} from 'react'
import '../detail/detail.css'

const HistoryForm = (props) => {

    
    const initialFieldValues = {
        id: '',
        allergy: '',
        name: '',
        dose: '',
        diagnosis: '',
        frequency: '',
        duration: ''
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
        <div className="historyid">
        <form autoComplete="off" onSubmit={handleFormSubmit}>
<div className="form-group input-group">
   
    <div className="id">
             <div>
        <label htmlFor="FirstName">Patient ID:</label>
        <input className="form-control" type="number"
        name="id" value={values.id}
        onChange={handleInputChange} required/>
    </div> </div>
    <h3>Allergies</h3>
<div className="hi1">
             <div>
        <label htmlFor="FirstName">Do you have any allergies ?</label><br/>
        
        <input className="form-control" placeholder="(i.e. food $ drink)"
        name="allergy" value={values.allergy}
        onChange={handleInputChange}/>
    </div> </div>
    <h3>Medication</h3>
    <div className="hi">
             <div>
        <label htmlFor="FirstName">Name</label><br/>
        
        <input className="form-control" placeholder="(include close if known)"
        name="name" value={values.name}
        onChange={handleInputChange}/>
    </div> 
    <div className="hi1">
        <label htmlFor="FirstName">Dose</label><br/>
        
        <input className="form-control" placeholder="(estimated dose)"
        name="dose" value={values.dose}
        onChange={handleInputChange}/>
    </div>
    <div className="hi1">
        <label htmlFor="FirstName">Frequency</label><br/>
        
        <input className="form-control" 
        name="frequency" value={values.frequency}
        onChange={handleInputChange}/>
    </div>
    <div className="hi1">
        <label htmlFor="FirstName">Duration of use</label><br/>
        
        <input className="form-control" placeholder=""
        name="duration" value={values.duration}
        onChange={handleInputChange}/>
    </div>
    </div>
    <h3>Current Diagnosis</h3>
    <div className="hi1">
             <div>
        <label htmlFor="FirstName">Current Diagnosis</label><br/>
        
        <input className="form-control" placeholder="any recent diagnosis"
        name="diagnosis" value={values.diagnosis}
        onChange={handleInputChange}/>
    </div> </div></div>
                <div className="form-control">
    <input type="submit" value={props.currentId==''?"Save":"Update"} className="btn-1"/>
    <button className="btn-1"><a href="/patient">Ok</a></button>
  
</div>
        </form></div>
    )
}

export default HistoryForm;

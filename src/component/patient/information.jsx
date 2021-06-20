import React from 'react'
import '../patient/information.css'
import {useState, useEffect} from 'react'


const Information = (props) => {
    const initialFieldValues = {
        fname:'',
        mname: '',
       lnane: '',
       birthday: '',
       age: '',
       weight: '',
       mobile: '',
       tphone: '',
       address: '',
       district: '',
       province: ''
    }
    var [values, setValues] = useState(initialFieldValues)

    useEffect (() => {
        if(props.currentId=='')
        setValues({
            ...initialFieldValues
        })
        else
        setValues({
            ...props.newObjects[props.currentId]
        })
    }, [props.currentId, props.newObjects])
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
        <div className="inform">
        <h3>Patient Information</h3>
       
   
        <form action="">
         <div className="hi">
             <div>
                <label htmlFor="FirstName">First Name</label><br/>
                <input type="text" autoComplete="off" 
                name="fname" id="name"  value={values.fname}
                onChange={handleInputChange}/>
            </div> 
              <div className="hi1">
                <label htmlFor="MiddleName">Middle Name</label><br/>
                <input type="text" autoComplete="off" 
                name="mnane" id="name"  value={values.fmname}
                onChange={handleInputChange}/>
            </div>
            <div className="hi1">
                <label htmlFor="LastName">Last Name</label><br/>
                <input type="text" autoComplete="off" 
                name="lnane" id="name"  value={values.lnane}
                onChange={handleInputChange}/>
            </div>
            </div>
            <div className="number">
                <div >
                <label htmlFor="Birthday">Birth Date</label><br/>
                <input type="date" autoComplete="off" 
                name="birthday"  id="name" value={values.birthday}
                onChange={handleInputChange}/>
            </div>
          
                <div className="hi1">
                <label htmlFor="Age">Age</label><br/>
                <input type="number" autoComplete="off" 
                name="age" value={values.age}
                onChange={handleInputChange}/>
                </div>
                <div className="hi1">
                  <label htmlFor="Sex">Sex:   </label><br/>
                  <label htmlFor="male">Male</label>
                <input type="radio" autoComplete="off" 
                name="male" id="male"/><br/>
                <label htmlFor="female">Female</label>
                 <input type="radio" autoComplete="off" 
                name="female" id="female"/>
            </div>
            <div className="hi1">
                <label htmlFor="weight">Weight(in kg)</label><br/>
                <input type="number" autoComplete="off" 
                name="weight" id="weight"  value={values.weight}
                onChange={handleInputChange}/>
                </div>    
            </div>
            <div className="num1">
                <div >
                <label htmlFor="mobile">Mobile Number</label><br/>
                <input type="text" autoComplete="off" 
                name="mobile" id="mobile"  value={values.mobile}
                onChange={handleInputChange}/>
            </div>
                <div className="hi1">
                <label htmlFor="tphone">Telephone Number</label><br/>
                <input type="text" autoComplete="off" 
                name="tphone" id="tphone"  value={values.tphone}
                onChange={handleInputChange}/>
                </div></div>
                <div className="hi1">
                <label htmlFor="address">Address</label><br/>
                <input type="text" autoComplete="off" 
                name="address" id="address"  value={values.address}
                onChange={handleInputChange}/>
                </div>
                <div className="num1">
                <div >
                <label htmlFor="district">District</label><br/>
                <input type="text" autoComplete="off" 
                name="district" id="district"  value={values.district}
                onChange={handleInputChange}/>
                </div>
                <div className="hi1">
                <label htmlFor="province">Province</label><br/>
                <input type="text" autoComplete="off" 
                name="province" id="province"  value={values.province}
                onChange={handleInputChange}/>
                </div>
                </div>
                <h3>History</h3>
                <hr className="line"/>
                <div className="history">
                    <div>
                <label htmlFor="site">Site</label><br/>
                <input type="text" autoComplete="off" 
                name="site" id="site"/>
                </div>
                <div className="hi1">
                <label htmlFor="source">Source</label><br/>
                <input type="text" autoComplete="off" 
                name="source" id="source"/>
                </div>
                <div className="hi1 ">
                <label htmlFor="date">Date Of Incident</label><br/>
                <input type="date" autoComplete="off" 
                name="date" id="date"/>
                </div>
                </div>
                <div className="history">
                    <div>
                <label htmlFor="place">Place</label><br/>
                <input type="text" autoComplete="off" 
                name="place" id="place"/>
                </div>
                <div className="hi1">
                <label htmlFor="category">Category</label><br/>
                <select id="category" name="category">
                    <option value="hand">Select</option>
                    <option value="hand">Hand</option>
                    <option value="hand">Hand</option>
                    <option value="hand">Hand</option>
                    <option value="hand">Hand</option></select>
                </div>
                <div className="hi1 ">
                <label htmlFor="type">Type</label><br/>
                <select id="category" name="category">
                    <option value="hand">Select</option>
                    <option value="hand">Hand</option>
                    <option value="hand">Hand</option>
                    <option value="hand">Hand</option>
                    <option value="hand">Hand</option></select>
                </div>
                </div>
               
           <button type="submit" value={props.currentId==''?"Save":"Update"} className="btn "></button>
           <button type="next"><a href="./History">Next</a></button>
        </form>
        
       
        </div>
       
    )
}

export default Information;

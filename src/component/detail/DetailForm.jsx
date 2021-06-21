import React from 'react'
import { useState, useEffect} from 'react'
import '../patient/information.css'

const DetailForm = (props) => {

    
    const initialFieldValues = {
        fullName:'',
        mname: '',
       lnane: '',
       birthday: '',
       age: '',
       weight: '',
       mobile: '',
       tphone: '',
       address: '',
       district: '',
       province: '',
       id: '',
      
       sex:''
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
<div className="form-groupdetail">
<div className="hi1">
        <label htmlFor="FirstName"> Patient ID</label><br/>
        
        <input className="form-control" type="number"
        name="id" value={values.id}
        onChange={handleInputChange} required/>
    </div>
<div className="hi">
             <div>
        <label htmlFor="FirstName">First Name</label><br/>
        
        <input className="form-control" placeholder="Full Name"
        name="fullName" value={values.fullName}
        onChange={handleInputChange} required/>
    </div>
    
    <div className="hi1">
        <label htmlFor="MiddleName">Middle Name</label><br/>
          
        <input className="form-control"  placeholder="Middle Name"
        name="mname" value={values.mname}
        onChange={handleInputChange} /></div>

    <div className="hi1">
        <label htmlFor="lastName">Last Name</label><br/>
          
        <input className="form-control"   placeholder="last Name"
        name="lnane" value={values.lnane}
        onChange={handleInputChange} required/></div>
   </div>
    

   <div className="number">
   <div >
        
        <label htmlFor="birth date">Birth Date</label><br/>
          
        <input className="form-control"  type="date"
        name="birthday" value={values.birthday}
        onChange={handleInputChange} required/></div>
  
  
<div className="hi1">
        <label htmlFor="Age">Age</label><br/>
       
        <input className="form-control" type="number" placeholder="Age"
        name="age" value={values.age} onChange={handleInputChange} required
        /> </div>

        
 
<div className="hi1">
        <label htmlFor="Weight">Weight</label><br/>
       
        <input className="form-control" type="number" placeholder="in kgs"
        name="weight" value={values.weight} onChange={handleInputChange}
        /> </div>
       

        <div className="hi1">
<label htmlFor="Age">Sex</label><br/>
<select name="sex" value={values.sex} onChange={handleInputChange}required>
<option>Male</option>
<option>Female</option>
</select>
</div>
 </div>

<div className="num1">
    <div className="fourty">
        <label htmlFor="Address">Address</label><br/>

<input className="form-control" placeholder="Address"
        name="address" value={values.address} onChange={handleInputChange}
        required  />
</div></div>


<div className="num1">

               
               <div >
        <label htmlFor="Mobile">Mobile</label><br/>
          
        <input className="form-control"  type="number" placeholder="Mobile"
        name="mobile" value={values.mobile}
        onChange={handleInputChange}/>
        </div>
               
                <div className="hi1" >
        <label htmlFor="tphone">Tel. Number</label><br/>
       
        <input className="form-control" type="number" placeholder="in kgs"
        name="tphone" value={values.tphone} onChange={handleInputChange}
        /> </div></div>


<div className="num1">
<div >
        <label htmlFor="District">District</label><br/>
          
        <input className="form-control"  placeholder="District"
        name="district" value={values.district}
        onChange={handleInputChange} required/></div>
  
  <div className="hi1">
        <label htmlFor="Province">Province</label><br/>
          
        <input className="form-control"  type="number" placeholder="province"
        name="province" value={values.province}
        onChange={handleInputChange} required/></div>
    </div>
</div>

                <div className="form-control">
    <input type="submit"  value={props.currentId==''?"Save":"Update"} className="btn-1"/>
    <button className="btn-1"><a href ="./History">Next</a></button>
</div>
        </form>
    )
}

export default DetailForm;

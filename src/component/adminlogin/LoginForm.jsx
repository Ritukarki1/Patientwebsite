import React from 'react'
import  {useState} from 'react';
import '../adminlogin/login.css'

const LoginForm = ({Login, error}) => {
   const [details, setDetails] = useState({name: "", email: "", password: ""});
   
const submitHandler = e => {
    e.preventDefault();

    Login(details);
}

    return (
       <form onSubmit={submitHandler} >
           
           <div className="form-inner">
           <div className="formhead">
               <h2>Login</h2>
               {(error !="") ? ( <div className="error">{error}</div>) : ""}
               <div className="form-group">
                   <label htmlFor="email">Name:</label>
                   <input type="text" name="name" id="name" autoComplete="off"
                   value={details.name} onChange={e => setDetails({...details, name: e.target.value}) }/>
               </div></div>
               <div className="form-group">
                   <label htmlFor="email">Email:</label>
                   <input type="email" name="email" id="email" autoComplete="off"
                    value={details.email} onChange={e => setDetails({...details,email: e.target.value}) } required/>
               </div>
               <div className="form-group">
                   <label htmlFor="password">Password:</label>
                   <input type="password" name="password" id="password" autoComplete="off"
                   value={details.password} onChange={e => setDetails({...details, password: e.target.value}) } required/>
               </div>
              <input type="submit" value="LOGIN"/>
           </div>
       </form>
    )
}

export default LoginForm;

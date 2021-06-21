import React from 'react'
import {useState} from 'react';
import LoginForm from '../adminlogin/LoginForm';
import '../adminlogin/login.css'


const Logina = () => {
 const adminUser = {
     email: "admin@admin.com",
     password: "admin123"
 }
 const [user, setUser] = useState({name: "''", email: ""});
 const [error, setError] = useState("");

 const Login = details => {
     console.log(details);

     if (details.email == adminUser.email && details.password == adminUser.password){
     console.log("Logged in");
     setUser({
         name: details.name,
         email: details.email
     });
 } else {
     console.log("Details donot match!");
     setError("Please enter valid email & password");
 }}

 const Logout = ()=> {
     setUser({name: "", email: ""});
     console.log("Logout");
 }
    return (
        <div className="loginform">
        <div className="login">
            {(user.email !="") ? (
                <div className="welcome">
                   <h2 >Welcome, <span>{user.name}</span> </h2>
                   <button className="addbutton" ><a href="/patient">OK lets enter. Click Here</a></button>
                </div>
            ) : (
<LoginForm  Login={Login} error={error} />
            )}
           
            
        </div>
        </div>
    )
}

export default Logina ;

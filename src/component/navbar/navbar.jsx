import React from 'react'
import {Route, Switch} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {FaHeartbeat} from 'react-icons/fa'
import '../navbar/navbar.css';

const Navbar = () => {
    return (
        <div >
        <div className="navbar">
            <div className="logo">
                <h2><FaHeartbeat/>PTS</h2>
            </div>
             <NavLink className="linka" exact activeClassName="a"  to = "/patient">Dashboard</NavLink>
            <NavLink className="link" exact activeClassName="a"  to = "/patient">Patient</NavLink>
            <NavLink className="link" exact activeClassName="a"  to = "/treatment">Appointment</NavLink>
            <NavLink className="linkb" exact activeClassName="a"  to = "/new">History</NavLink>
            
        
            
        </div>
        </div>
    )
}

export default Navbar;

import React from 'react';
import './App.css';
import Home from './component/home/home';
//import Login from './component/login/login';
import {Route, Switch} from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import Appointment from './component/appointment/appointment';
import Patient from './component/patient/patient';
import Dash from './component/Dashboard/dash';
//import Information from './component/patient/information';
import Treatment from './component/patient/treatment';
import New from './component/new/new';
import Detail from './component/detail/Detail';
import History from './component/History/History'
import Visit from './component/visit Detail/Visit'
import Logina from './component/adminlogin/login'

function App() {

     return ( 
      <div >
<switch>
  <Route exact path ="/" component={Home}/>
 

  <div className="nav">
  <Navbar/>

  <Route exact path ="/login" component={Logina}/>
  <Route exact path ="/new" component={New}/>
  <Route exact path ="/Dashboard" component={Dash }/>
  <Route exact path ="/treatment" component={Treatment}/>
  <Route exact path ="/Appointment" component={Appointment}/>
  <Route exact path ="/Patient" component={Patient}/>
  <Route exact path ="/detail" component={Detail}/>
  <Route exact path ="/History" component={History}/>
  <Route exact path ="/Visit" component={Visit}/>
 
 
  
  </div>
</switch>

   </div>
            
  );
}

export default App;

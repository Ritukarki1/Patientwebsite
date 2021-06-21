import React from 'react'
import '../patient/patient.css';
import Fire from '../Firebase';
import { useState, useEffect} from 'react'
import Visit from '../visit Detail/Visit'
import VisitDetail from '../visit Detail/VisitDetail';



const Treatment = () => {
    
    var[visitObjects, setVisitObjects] = useState({})
var[currentId, setcurrentId] = useState('')
const[searchTerm, setSearchTerm]= useState('');
    useEffect(()=>{
        Fire.child('visit Detail').on('value', snapshot=>{
    if(snapshot.val()!=null)
    setVisitObjects({
        ...snapshot.val()
    })
    else
    setVisitObjects({})
})
    },[])




    const addorEdit = obj =>{
        if(currentId=='')
        Fire.child('visit Detail').push(
            obj,
            err => {
                if (err)
                console.log(err)
                else
                setcurrentId = ('')
            
            }
        )
        else
        Fire.child('visit Detail/'+currentId).set(
            obj,
            err => {
                if (err)
                console.log(err)
                else
                setcurrentId = ('')
            }
        )
        }

   const onDelete = key=>{
       if(window.confirm('Are you sure to delete this record')){
        Fire.child('visit Detail/'+key).remove(
        
            err => {
                if (err)
                console.log(err)
                else
                setcurrentId = ('')
            }
        )
       }
   }
        
    return (
        <div className="treatment">
            <h3>Appointment Detail</h3>
            <div className="tabletreat">
        <table  >
            <thead >
               <tr>
               <th>Patient ID</th>
                   <th>Check-In Time</th>
                 <th>Appointment To</th>
                 <th>Doctor Name</th>
                 <th>Department</th>
                 <th>Day</th>
                 <th>Patient Type</th>
                 <th>Wait for</th>
                 <th>Check-out Time</th>
                 <th>Action</th>
               </tr>
            </thead>
            <tbody>
                {
                    Object.keys(visitObjects).map(id=> {
                        return<tr key={id}>
                             <td>{visitObjects[id].full}</td>
                              <td>{visitObjects[id].checkin}</td>
                            <td>{visitObjects[id].department}</td>
                            <td>{visitObjects[id].doctor}</td>
                             <td>{visitObjects[id].appointmenttime}</td>
                              <td>{visitObjects[id].day}</td> 
                              <td>{visitObjects[id].patienttype}</td>
                              <td>{visitObjects[id].wait}</td>
                              <td>{visitObjects[id].checkout}</td>  
                            <td>
                                
                                <a className="btn text-danger" >
                                    <i className="fas fa-trash-alt" onClick={()=> {onDelete(id)}}></i>
                                </a>
                            </td>
                            </tr>
                          
                       
                    })
                }
            </tbody>
        </table>
     </div></div>

    )
}

export default Treatment;

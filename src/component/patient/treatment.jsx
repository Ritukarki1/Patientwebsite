import React from 'react'
import '../patient/patient.css';
import Fire from '../Firebase';
import { useState, useEffect} from 'react'
import Visit from '../visit Detail/Visit'
import VisitDetail from '../visit Detail/VisitDetail';



const Treatment = () => {
    var[detailObjects, setDetailObjects] = useState({})
    var[currentId, setcurrentId] = useState('')
        useEffect(()=>{
            Fire.child('detail').on('value', snapshot=>{
        if(snapshot.val()!=null)
        setDetailObjects({
            ...snapshot.val()
        })
        else
        setDetailObjects({})
    })
        },[])
        const addorEdit = obj =>{
            if(currentId=='')
            Fire.child('detail').push(
                obj,
                err => {
                    if (err)
                    console.log(err)
                    else
                    setcurrentId = ('')
                
                }
            )
            else
            Fire.child('detail/'+currentId).set(
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
             Fire.child('detail/'+key).remove(
             
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
                    Object.keys(detailObjects).map(id=> {
                        return<tr key={id}>
                             <td>{detailObjects[id].full}</td>
                              <td>{detailObjects[id].checkin}</td>
                            <td>{detailObjects[id].department}</td>
                            <td>{detailObjects[id].doctor}</td>
                             <td>{detailObjects[id].appointmenttime}</td>
                              <td>{detailObjects[id].day}</td> 
                              <td>{detailObjects[id].patienttype}</td>
                              <td>{detailObjects[id].wait}</td>
                              <td>{detailObjects[id].checkout}</td>  
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

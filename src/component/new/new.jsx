import React from 'react'
import '../patient/patient.css';
import Fire from '../Firebase';
import { useState, useEffect} from 'react'
import History from '../History/History'
import HistoryForm from '../History/HistoryForm'
import DetailForm from '../detail/DetailForm'


const New = () => {
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
        <div className=" med">
            <h3>Medical History Of Patient</h3>
            <div className="medical">
        <table striped bordered hover size="sm">
            <thead >
               <tr>
                   <th>Patient ID</th>
                 <th>Allergy</th>
                 <th>Medicine Name</th>
                 <th >Dose</th>
                
                 <th>Duration</th>
                 <th >Frequency</th>
                 <th>Diagnosis</th>
                
                 <th>Action</th>
               </tr>
            </thead>
            <tbody>
                {
                    Object.keys(detailObjects).map(id=> {
                        return<tr key={id}>
                               <td>{detailObjects[id].id}</td>
                              <td>{detailObjects[id].allergy}</td>
                              <td>{detailObjects[id].name}</td>
                            <td>{detailObjects[id].dose}</td>
                            <td>{detailObjects[id].duration}</td>
                             <td>{detailObjects[id].frequency}</td>
                              <td>{detailObjects[id].diagnosis}</td> 
                               
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

export default New;

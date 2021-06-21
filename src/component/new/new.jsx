import React from 'react'
import '../patient/patient.css';
import Fire from '../Firebase';
import { useState, useEffect} from 'react'
import History from '../History/History'
import HistoryForm from '../History/HistoryForm'
import DetailForm from '../detail/DetailForm'


const New = () => {
    var[historyObjects, setHistoryObjects] = useState({})
    var[currentId, setcurrentId] = useState('')
    const[searchTerm, setSearchTerm]= useState('');
        useEffect(()=>{
            Fire.child('History').on('value', snapshot=>{
        if(snapshot.val()!=null)
        setHistoryObjects({
            ...snapshot.val()
        })
        else
        setHistoryObjects({})
    })
        },[])
    
    
    
    
        const addorEdit = obj =>{
            if(currentId=='')
            Fire.child('History').push(
                obj,
                err => {
                    if (err)
                    console.log(err)
                    else
                    setcurrentId = ('')
                
                }
            )
            else
            Fire.child('History/'+currentId).set(
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
            Fire.child('History/'+key).remove(
            
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
                    Object.keys(historyObjects).map(id=> {
                        return<tr key={id}>
                               <td>{historyObjects[id].id}</td>
                              <td>{historyObjects[id].allergy}</td>
                              <td>{historyObjects[id].name}</td>
                            <td>{historyObjects[id].dose}</td>
                            <td>{historyObjects[id].duration}</td>
                             <td>{historyObjects[id].frequency}</td>
                              <td>{historyObjects[id].diagnosis}</td> 
                               
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

import React from 'react'
import TsF from '../Treatment/TsF';
import { useState, useEffect } from 'react';
import Fire from '../Firebase';
import {ImCross} from 'react-icons/im'
import '../detail/detail.css';

const Ts = () => {
   
     var[tsObjects, setTsObjects] = useState({})
var[currentId, setcurrentId] = useState('')
const[searchTerm, setSearchTerm]= useState('');
    useEffect(()=>{
        Fire.child('Treatment').on('value', snapshot=>{
    if(snapshot.val()!=null)
    setTsObjects({
        ...snapshot.val()
    })
    else
    setTsObjects({})
})
    },[])




    const addorEdit = obj =>{
        if(currentId=='')
        Fire.child('Treatment').push(
            obj,
            err => {
                if (err)
                console.log(err)
                else
                setcurrentId = ('')
            
            }
        )
        else
        Fire.child('Treatment/'+currentId).set(
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
       if(window.confirm('Are you really want to delete?')){
        Fire.child('Treatment/'+key).remove(
        
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
        <React.Fragment>
            <div className="ts">

            <div className="od">
        <div className="hello">
            <a href="/visit"><ImCross className="cross"/></a>
            <div className="hello-1">
        <h1>Treatment Detail</h1>
       
        <div className="row">
            <div className="row1">
            <TsF {...({addorEdit, currentId, tsObjects})} term={searchTerm}
           /></div>
           
         
           <div className="detailtable">
           <div className=" tablecontainer">
              <table striped bordered hover size="sm">
                  <thead >
                     <tr>
                     <th>ID</th>
                     <th>Patient Name</th>
                         
                         <th>Case</th>
                         <th>Status</th>
                         <th>Exception</th>
                         <th>Cause</th>
                         <th>Treat Status</th>
                         <th>Date</th>
                         <th>Actions</th>
                       
                     </tr>
                  </thead>
                  <tbody>
                      {
                          Object.keys(tsObjects).map(id=> {
                              return<tr key={id}>
                                  <td>{tsObjects[id].id}</td>
                                    <td>{tsObjects[id].fullName}</td>
                                  <td>{tsObjects[id].mname}</td>
                                  <td>{tsObjects[id].Lname}</td>
                                   <td>{tsObjects[id].sex}</td>
                                   <td>{tsObjects[id].date}</td>
                                   <td>{tsObjects[id].date2}</td>
                                   <td>{tsObjects[id].date1}</td>
                                     <td>
                                      <a className="btn btn-primary"   onClick={()=> {setcurrentId(id)}}>
                                          <i className="fas fa-pencil-alt"></i>
                                      </a>
                                      <a className="btn text-danger" >
                                          <i className="fas fa-trash-alt" onClick={()=> {onDelete(id)}}></i>
                                      </a>
                                  </td>
                                  </tr>
                                
                             
                          })
                      }
                  </tbody>
              </table> 
           </div>
           </div>
        </div>
        </div>
        </div></div></div>
        </React.Fragment>
    )
}
export default Ts;



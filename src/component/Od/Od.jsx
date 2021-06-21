import React from 'react'
import OdF from '../Od/OdF';
import { useState, useEffect } from 'react';
import Fire from '../Firebase';
import {ImCross} from 'react-icons/im'
import '../detail/detail.css';

const Od = () => {
   
     var[odObjects, setOdObjects] = useState({})
var[currentId, setcurrentId] = useState('')
const[searchTerm, setSearchTerm]= useState('');
    useEffect(()=>{
        Fire.child('Od').on('value', snapshot=>{
    if(snapshot.val()!=null)
    setOdObjects({
        ...snapshot.val()
    })
    else
    setOdObjects({})
})
    },[])




    const addorEdit = obj =>{
        if(currentId=='')
        Fire.child('Od').push(
            obj,
            err => {
                if (err)
                console.log(err)
                else
                setcurrentId = ('')
            
            }
        )
        else
        Fire.child('Od/'+currentId).set(
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
        Fire.child('od/'+key).remove(
        
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
        <h1>Ward Detail</h1>
       
        <div className="row">
            <div className="row1">
            <OdF {...({addorEdit, currentId, odObjects})} term={searchTerm}
           /></div>
           
         
           <div className="detailtable">
           <div className=" tablecontainer">
              <table striped bordered hover size="sm">
                  <thead >
                     <tr>
                     <th>ID</th>
                     <th>Patient Name</th>
                         
                         <th>Ward NO</th>
                         <th>Ward Type</th>
                         <th>Ward Incharge</th>
                         <th>Abort-In Date</th>
                         <th>Actions</th>
                       
                     </tr>
                  </thead>
                  <tbody>
                      {
                          Object.keys(odObjects).map(id=> {
                              return<tr key={id}>
                                  <td>{odObjects[id].id}</td>
                                    <td>{odObjects[id].fullName}</td>
                                  <td>{odObjects[id].mname}</td>
                                  <td>{odObjects[id].Lname}</td>
                                   <td>{odObjects[id].sex}</td>
                                   <td>{odObjects[id].date}</td>
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
export default Od;

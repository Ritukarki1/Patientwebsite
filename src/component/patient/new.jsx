import React from 'react'
import Information from './information';
import Fire from '../Firebase';
import '../detail/detail.css'
import { useState, useEffect} from 'react'

const New = () => {

    var[newObjects, setNewObjects] = useState({})
var[currentId, setcurrentId] = useState('')
    useEffect(()=>{
        Fire.child('New').on('value', snapshot=>{
    if(snapshot.val()!=null)
    setNewObjects({
        ...snapshot.val()
    })
    else
    setNewObjects({})
})
    },[])




    const addorEdit = obj =>{
        if(currentId=='')
        Fire.child('New').push(
            obj,
            err => {
                if (err)
                console.log(err)
                else
                setcurrentId = ('')
            
            }
        )
        else
        Fire.child('New/'+currentId).set(
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
        Fire.child('New/'+key).remove(
        
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
        <div className="hello">
        <div className="row">
            <div className="col-md-8 offset-md-2">
            <Information {...({addorEdit, currentId, newObjects})}  />
            </div>
           <div className="col-md-7">
              <table className="table table-borderless table-stripped">
                  <thead className="thead-light">
                     <tr>
                         <th>First Name</th>
                         <th>Middle Name</th>
                         <th>Last Name</th>
                         <th>Age</th>
                         <th>Weight</th>
                         <th>Telephone Number</th>
                         <th>Mobile</th>
                         <th>District</th>
                         <th>Province</th>
                         <th>Address</th>
                         <th>Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                      {
                          Object.keys(newObjects).map(id=> {
                              return<tr key={id}>
                                  <td>{newObjects[id].fname}</td>
                                  <td>{newObjects[id].mname}</td>
                                  <td>{newObjects[id].lnane}</td>
                                   <td>{newObjects[id].age}</td>
                                    <td>{newObjects[id].weight}</td>
                                     <td>{newObjects[id].tphone}</td>
                                     <td>{newObjects[id].mobile}</td>
                                     <td>{newObjects[id].district}</td>
                                     <td>{newObjects[id].province}</td>
                                     <td>{newObjects[id].address}</td>     
                                  <td>
                                      <a className="btn btn-primary" onClick={()=> {setcurrentId(id)}}>
                                          <i className="fas fa-pencil-alt"></i>
                                      </a>
                                      <a className="btntext-danger">
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
        </React.Fragment>
    )
}

export default New;

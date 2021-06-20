import React from 'react'
import DetailForm from './DetailForm';
import Fire from '../Firebase';
import '../detail/detail.css'
import { useState, useEffect} from 'react'
import { GiCrossMark} from 'react-icons/gi'

const Detail = () => {

    var[detailObjects, setDetailObjects] = useState({})
var[currentId, setcurrentId] = useState('')
const[searchTerm, setSearchTerm]= useState('');
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
       if(window.confirm('Are you really want to delete?')){
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
        <React.Fragment>
        <div className="hello">
            <div className="hello-1">
        <h1>Personal Information</h1>
       
        <div className="row">
            <div className="row1">
            <DetailForm {...({addorEdit, currentId, detailObjects})} term={searchTerm}
           />
            </div>
           <div className="col-md-7">
           <div className="detailtable">
           <div className=" tablecontainer">
              <table striped bordered hover size="sm">
                  <thead >
                     <tr>
                     <th>First Name</th>
                         <th rowSpan="10">Middle Name</th>
                         <th>Last Name</th>
                         <th>Age</th>
                         <th>Sex</th>
                         <th>Weight</th>
                         
                         <th>Telephone Number</th>
                         
                       
                         <th>Mobile</th>
                         <th>District</th>
                         <th>Province</th>
                         <th>Address</th>
                         <th>Birth Date</th>
                         <th>Actions</th>
                       
                     </tr>
                  </thead>
                  <tbody>
                      {
                          Object.keys(detailObjects).map(id=> {
                              return<tr key={id}>
                                    <td>{detailObjects[id].fullName}</td>
                                  <td>{detailObjects[id].mname}</td>
                                  <td>{detailObjects[id].lnane}</td>
                                   <td>{detailObjects[id].age}</td>
                                   <td>{detailObjects[id].sex}</td>
                                   
                                    <td>{detailObjects[id].weight}</td> 
                                     <td>{detailObjects[id].tphone}</td>
                                     <td>{detailObjects[id].mobile}</td>
                                     <td>{detailObjects[id].district}</td>
                                     <td>{detailObjects[id].province}</td>
                                     <td>{detailObjects[id].address}</td> 
                                     <td>{detailObjects[id].birthday}</td> 
                                     <td>
                                      <a className="btn btn-primary"   onClick={()=> {setcurrentId(id)}}>
                                          <i className="fas fa-pencil-alt"></i>
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
        </div></div>
        </React.Fragment>
    )
}

export default Detail;

import React from 'react'
import VisitDetail from './VisitDetail';
import Fire from '../Firebase';
import '../patient/patient.css'
import { useState, useEffect} from 'react'

const Visit = () => {

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
        <React.Fragment>
        <div className="hello">
            <div className="hello-1">
           <div className="visit">
       <h2>Patient Visit Detail</h2></div>
        <div className="row ">
            <div className="col-md-8 offset-md-2">
            <VisitDetail {...({addorEdit, currentId, detailObjects})} term={searchTerm}
           />
            </div>
           <div className="col-md-7">
              <table className="table table-borderless table-stripped">
                
                 
              </table>
           </div>
        </div>
        </div>
        </div>
        </React.Fragment>
    )
}

export default Visit;

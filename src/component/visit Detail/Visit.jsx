import React from 'react'
import VisitDetail from './VisitDetail';
import Fire from '../Firebase';
import '../patient/patient.css'
import { useState, useEffect} from 'react'
import {ImCross} from 'react-icons/im'
const Visit = () => {

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
        <React.Fragment>
        <div className="hello">
          
            <div className="navone">
                    <button className="a"><a href="/Od">Wait Detail</a></button>
                    <button className="b"><a href="/ts">Emergency</a> </button>
                    </div>
                    <a href="/patient"><ImCross className="cross"/></a>    
            <div className="hello-1">
                
             
           <div className="visit">
       <h2>Patient Visit Detail</h2></div>
        <div className="row ">
            <div className="col-md-8 offset-md-2">
            <VisitDetail {...({addorEdit, currentId, visitObjects})} term={searchTerm}
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

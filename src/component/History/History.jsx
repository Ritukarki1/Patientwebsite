import React from 'react'
import HistoryForm from './HistoryForm';
import Fire from '../Firebase';
import '../detail/detail.css'
import { useState, useEffect} from 'react'
import {ImCross} from 'react-icons/im'

const History = () => {

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
        <React.Fragment>
        <div className="hello">
        <a href="/patient"><ImCross  className="cross"/></a>
            <div className="hello-1">
           
        <h1>Medical History</h1>
        <div className="row">
            <div className="col-md-8 offset-md-2">
            <HistoryForm {...({addorEdit, currentId, historyObjects})} term={searchTerm}
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

export default History;

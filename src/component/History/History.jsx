import React from 'react'
import HistoryForm from './HistoryForm';
import Fire from '../Firebase';
import '../detail/detail.css'
import { useState, useEffect} from 'react'

const History = () => {

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
           
        <h1>Medical History</h1>
        <div className="row">
            <div className="col-md-8 offset-md-2">
            <HistoryForm {...({addorEdit, currentId, detailObjects})} term={searchTerm}
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

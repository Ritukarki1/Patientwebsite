import React from 'react'
import '../patient/patient.css';
import Information from '../patient/information';
import Fire from '../Firebase';
import { useState, useEffect} from 'react'
import Detail from '../detail/Detail'
import DetailForm from '../detail/DetailForm'
import { AiOutlinePlus} from 'react-icons/ai'
import {component} from 'react'
import {MdSystemUpdateAlt} from 'react-icons/md'
import axios from 'axios';
import {ImCross} from 'react-icons/im'



const Patient = () => {
    var[detailObjects, setDetailObjects] = useState({})
    var[currentId, setcurrentId] = useState('')

    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);

    const handleSearch = (event) =>{
        let value = event.targetvalue.toLowerCase();
        let result = [];
        result = allData.filter
        result = allData.filter((data) => {
        return data.title.search(value) != -1;
    });
    }

    useEffect(() => {
        axios('https://fir-crud-1d865-default-rtdb.firebaseio.com/.json')
        .then(response => {
            console.log(response.data)
            setAllData(response.data);
            setFilteredData(response.data);
            })
            .catch(error => {
            console.log('Error getting fake data: ' + error);
            })
    }, []);
    const styles = {
        display:'inline',
        width: '20%',
        height:50,
        float:'left',
        padding:5,
        border:'0.5px solid black',
        marginBottom:10,
        marginRight:10
        }

   
   
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
       /* const addorEdit = obj =>{
            if(currentId=='')
            Fire.child('detail').push(
                obj,
                err => {
                    if (err)
                    console.log(err)
                    else
                    setcurrentId = ('')
                
                }
            );
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
            }*/
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
       <div> <div className="picture">
           
            <button className="btn"><a href="/">Logout</a></button>
       </div>
            <div className="patient-container">
        
      
   
 <div className="first-one">
              
               <button className="btn" ><a href="../detail">Add Patient</a><AiOutlinePlus className="icon"/>
             </button>
             <button className="btn-a" ><a href="../visit">Add Visit Detail</a><AiOutlinePlus className="icon"/>
               
              
             </button></div>
             <div className="App">
<div style={{ margin: '0 auto' }}>

</div>
<div style={{padding:10}}>
{filteredData && ((value,index)=>{
return(
<div key={value.id}>
<div style={styles}>
{value.title}
</div>
</div>

)
})}
</div></div>
        
        <div className=" tablecontainer">   
              <table id="myTable" class="sortable">
                  <thead >
                     <tr>
                     <th>ID</th>
                     <th>First Name</th>
                         <th >Middle Name</th>
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
                                   <td>{detailObjects[id].id}</td>
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
                                      <a className="btn text-danger" >
                                          <i className="fas fa-trash-alt" onClick={()=> {onDelete(id)}}></i>
                                      </a>
                                    <a href="/detail"><MdSystemUpdateAlt /></a>
                                  </td>
                                  </tr>
                                
                             
                          })
                      }
                       
                  </tbody>
              </table>
           </div>
          
     
</div></div>
         
    )
}

export default Patient;


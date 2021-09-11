import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {add,del} from './Store/todoslice'
import  './Input.css'


function Input() {
  
  const [task,setTask]=useState('')
  const [descrip,setDescrip]=useState('')
  const [date,setDate]=useState('')
  const state=useSelector(state=>state.todoSlice)
  const dispatch=useDispatch()

  return (
    <>
  <div className="la1" >
  <h1>To-Do List</h1>
       <div>
           <label>Task</label>
           <div>
             <input type="text" onChange={(event)=>{setTask(event.target.value)}}/> 
           </div> 
     </div> 
     <div>
           <label>Task Description</label>
           <div>
            <input type="text" onChange={(event)=>{setDescrip(event.target.value)}}/>  
           </div> 
     </div>
     <div>
           <label>Date</label>
           <div>
            <input type="Date" onChange={(event)=>{setDate(event.target.value)}}/>  
           </div> 
     </div>
     <div>
     <button onClick={()=>{dispatch(add({t:task,de:descrip,dt:date}))}}>Add</button>
     </div>
  </div>
    </>
  );
}

export default Input;

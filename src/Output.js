import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {del} from './Store/todoslice'
import './Output.css'


function Output(){

  const state=useSelector(state=>state.todoSlice)
  const dispatch=useDispatch()
   let dateCheck = "";

    let current_date = new Date();
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    dateCheck = year + month + day;

    return [ month, day,year].join("-");
  }

  let currentDate = formatDate(current_date);

  return(
      <>
      <div className="la2">
{state.list.map((item,index)=>{return (
<div className="la5"> 
<div >
{item.t}
<button  className="la3" onClick={()=>dispatch(del(index))}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button>
</div>
<div>{item.de}</div>
<div>{item.dt}</div>
 <div>
              {item.dt.replace(/-/g, "") === dateCheck ? (
                alert('due date is today')
              ) : item.dt.replace(/-/g, "") <= dateCheck ? (
                alert('due date is passed')
              ) : null}
            </div>

     </div>)
})}
</div>
      </>
  );
}
export default Output;
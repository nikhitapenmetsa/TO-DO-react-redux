import {createSlice} from '@reduxjs/toolkit'

const initialState={
  list:[]
}


const todoSlice=createSlice({name:"first",initialState,reducers:{
  add:(state,action)=>{
    state.list=[...state.list,action.payload]
  },
    del:(state,action)=>{
     var dellist=state.list.filter((item,index)=>{return index!=action.payload}) 
     state.list=dellist
  }
}})
export const {add,del}=todoSlice.actions
export default todoSlice.reducer
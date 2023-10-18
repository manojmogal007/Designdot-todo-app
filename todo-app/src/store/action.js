
import axios from 'axios'
import { alltodos,deletefromlist } from './slice';

const url="http://localhost:6060"

export const fetchtodos = (todo) => async (dispatch) => {
  let updatedurl=url  
    if(todo){
      updatedurl=`${url}/task/gettasks?todo=${todo}`
    }else{
      updatedurl=`${url}/task/gettasks`
    }
    // console.log(url)
    try {
      const res = await axios.get(updatedurl);
          dispatch(alltodos(res.data.todos))
    } catch (err) {
      console.log(err);
    }
  };

  export const addtodo=(data)=>async(dispatch)=>{
    try{
      const res=await axios.post(`${url}/task/addtask`,data)
      // console.log('adding')
    }catch(err){
      console.log(err)
    }
  }
  export const updatetodo=(data)=>async(dispatch)=>{
    try{
      const res=await axios.patch(`${url}/task/updatetask/${data._id}`,data)

    }catch(err){
      console.log(err)
    }
  }
  export const deletetodo=(todoid)=>async(dispatch)=>{
    try{
      const res=await axios.delete(`${url}/task/deletetask/${todoid}`)
      // dispatch(deletefromlist(todoid))
    }catch(err){
      console.log(err)
    }
  }
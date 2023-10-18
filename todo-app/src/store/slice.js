import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    todos:[]
};
export const counterSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        alltodos: (state,action)=>{
          state.todos=action.payload
        },
      },
      deletefromlist:(state,action)=>{
        let temp=[]
        for(let i=0;i<state.todos.length;i++){
          if(state.todos[i]._id!==payload){
            temp.push(state.todos)
          }
        }
        console.log(state.todos[i]._id,action.payload,temp)
        state.todos=temp
      }
});

export const { alltodos,deletefromlist } = counterSlice.actions;
export default counterSlice.reducer;
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { fetchtodos,addtodo,updatetodo,deletetodo } from '../store/action';
import styles from './Todos.module.css'

const Todos = () => {

  const state = useSelector((store) => store.todos.todos);
  const dispatch = useDispatch();
  const [newtodo,setNewtodo]=useState({todo:'',isCompleted:false})
  const [call,setCall]=useState(false)
  const [search,setSearch]=useState('')

// console.log(state)

  const handlechange=(e)=>{
    const {name,value}=e.target
    setNewtodo({...newtodo,[name]:value})
  }

  const handleclick=()=>{
    if(newtodo.todo===''){
      return;
    }
    dispatch(addtodo(newtodo))
    .then(()=>{
      setNewtodo({todo:'',isCompleted:false})
      dispatch(fetchtodos())
    })
    .catch((err)=>{
      console.log('error')
    })
  }

  const handledelete=(id)=>{
    dispatch(deletetodo(id))
    .then(()=>{
      dispatch(fetchtodos())
    })
    .catch((err)=>{
      console.log('error')
    })
  }

  const handletodoupdate=()=>{
    dispatch(updatetodo(newtodo))
    .then(()=>{
      setCall(false)
      setNewtodo({todo:'',isCompleted:false})
      dispatch(fetchtodos())
    })
    .catch((err)=>{
      console.log('error')
    })
    // console.log(newtodo)
  }

  const handleupdate=(item)=>{
    setCall(true)
    setNewtodo(item)
  }
console.log(search)

  const handlesearchtext=(e)=>{
    setSearch(e.target.value)
  }

  const handlesearch=()=>[
    dispatch(fetchtodos(search))
    .then(()=>{
      setSearch('')
    })
    .catch((err)=>{
      console.log('error')
    })
  ]
  

  useEffect(()=>{
    dispatch(fetchtodos())
  },[])

const {todo}=newtodo
  return (
    <div className={styles.container}>
      <h2>Todo App</h2>
      <div className={styles.search}>
        <input placeholder='Search todo here...' type='text' value={search} onChange={handlesearchtext} ></input>
        <button onClick={handlesearch} >Search</button>
      </div>
        <div className={styles.add}>
          <input placeholder='Add new todo here...' name='todo' type='text' value={todo} onChange={handlechange}></input>
          <button onClick={call?handletodoupdate:handleclick}>{call?'Update':'Add todo'}</button>
        </div>
        <div className={styles.alltodos}>
            {
              state.length!==0&& state.map((el)=>(
                <div key={el._id}>
                  <p>{el.todo}</p>
                  <div>
                    <button className={styles.update} onClick={()=>handleupdate(el)}>Update</button>
                    <button className={styles.delete} onClick={()=>handledelete(el._id)}>Delete</button>
                  </div>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Todos
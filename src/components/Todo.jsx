import { useEffect, useRef, useState } from 'react'
import './css/Todo.css'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const add = () =>{
        console.log("ADD");
    }
  return (
    <div className='todo'>
        <div className="todo-header">To-Do List</div>
        <div className="todo-add">
            <input ref={inputRef} type="text" placeholder='Add Your Task' className='todo-input' />
            <div onClick={()=>{add()}} className="todo-add-btn">Add</div>
        </div>
        <div className="todo-list"></div>
    </div>
  )
}

export default Todo
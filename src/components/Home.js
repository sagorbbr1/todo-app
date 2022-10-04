import React, { useState } from 'react';
import NewTodos from './NewTodos';
import Todos from './Todos';
import style from './home.module.css';
import {v4 as uuidv4} from 'uuid';


export default function Home() {
    const onRemoveTodo = (id) => {
        setTodos((prevTodos => {
            const filtered = prevTodos.filter(todo=> todo.id !==id );
            return filtered
        }))
    }
    const addTodoHandler = (todo) => {
        setTodos((oldTodos)=> {
            return [...oldTodos, {id: uuidv4(), todo}]
        })
    }
    const [todos, setTodos] = useState([])

  
  return (
    <div className={style.container}>
        <h1 style={{color: 'white', marginBottom: '1rem'}}>Todo APP</h1>
        <NewTodos onAddTodo={addTodoHandler} />
        <Todos onRemoveTodo={onRemoveTodo} todos={todos}/>
    </div>
  )
}

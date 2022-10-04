import React, { useState } from 'react';

import style from './newtodos.module.css'

function NewTodos(props) {
    const [todo, setTodo] = useState({title: '', desc: ''});
    const {title, desc} = todo;
    
    const inputChangeHandler = (e) => {
        const name = e.target.name;
        setTodo((oldTodo => {
            return {
                ...oldTodo, [name] : e.target.value,
            }
        }))
    }
    const submitChangeHandler = (event) => {
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({
            title: '',
            desc: ''
        })
    }
  return (
    <form className={style.form} onSubmit={submitChangeHandler}>
        <div className={style['form-field']}>
            <label htmlFor='title'>Title: </label>
            <input type='text' value={title} onChange={inputChangeHandler} id='title' name='title'/>
        </div>
        <div className={style['form-field']}>
            <label htmlFor='desc'>Description: </label>
            <textarea type='text' value={desc} onChange={inputChangeHandler} id='desc' name='desc'/>
        </div>
        <button type='submit'>Click to add</button>
    </form>
  )
}

export default NewTodos;
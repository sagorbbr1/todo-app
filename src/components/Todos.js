import React from 'react';

import style from './todos.module.css';
import Todo from './Todo';

function Todos(props) {
    
  return (
    <section className={style.todos}>
        {props.todos.map( todo => <Todo onRemoveTodo={props.onRemoveTodo} key={todo.id} todo={todo.todo} id={todo.id} />)}
    </section>
  )
}

export default Todos;
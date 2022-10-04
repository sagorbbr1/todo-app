import React from 'react'

import style from './todo.module.css'

function Todo(props) {
    const { title, desc} = props.todo;
    const {id} = props;
   
 const handleClick = (id) => {
  props.onRemoveTodo(id);
 }
  return (
    <article className={style.todo}>
        <div >
            <h2 >{title}</h2>
            <p>{desc}</p>
            

        </div>
        <div>
        <button className={style.btn} onClick={()=> handleClick(id)} type='submit'>
          <i className='fa fa-trash fa-2x'></i>
        </button>
        </div>
    </article>
  )
}

export default Todo
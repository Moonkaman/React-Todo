import React from 'react';

import './Todo.css';

function Todo(props) {
  return (
    <h1 onClick={_ => props.completeTodo(props.myID)}>-{props.todo.task}</h1>
  )
}

export default Todo;
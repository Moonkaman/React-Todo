import React from 'react';

import './Todo.css';

function Todo(props) {
  return (
    <h1 className="todo">-{props.todo.task}</h1>
  )
}

export default Todo;
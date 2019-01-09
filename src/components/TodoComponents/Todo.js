import React from 'react';

import './Todo.css';

function Todo(props) {
  return (
    <div className="todo">{props.todo.task}</div>
  )
}

export default Todo;
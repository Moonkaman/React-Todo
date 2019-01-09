import React from 'react';
import Todo from './Todo';

import './Todo.css';

function TodoList(props) {
  console.log(props)
  return (
    props.todos.map(todo => {
      return <Todo todo={todo} key={todo.id} completeTodo={props.completeTodo} myID={todo.id} className={todo.completed === true ? 'todo-item completed' : 'todo-item'} />
    })
  )
}

export default TodoList;
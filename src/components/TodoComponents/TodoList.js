import React from 'react';
import Todo from './Todo';

import './Todo.css';

function TodoList(props) {
  return (
    props.todos.map(todo => {
      return <Todo todo={todo} key={todo.id} />
    })
  )
}

export default TodoList;
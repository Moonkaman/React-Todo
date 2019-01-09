import React from 'react';

import './Todo.css';

function TodoForm(props) {
  return (
    <form>
      <input value={props.todoInputText} type="text" onChange={props.handleInput} placeholder='Add a Todo' />
      <button onClick={props.addTodo}>Add Item</button>
      <button onClick={props.removeCompleted}>Clear Done</button>
    </form>
  )
}

export default TodoForm;
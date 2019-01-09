import React from 'react';

import './Todo.css';

function TodoForm(props) {
  return (
    <form>
      <input value={props.todoInputText} type="text" onChange={props.handleInput} />
      <button>Add Item</button>
      <button>Clear Done</button>
    </form>
  )
}

export default TodoForm;
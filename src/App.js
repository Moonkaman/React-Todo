import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
const todoData = [
{
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false
},
{
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: false
}
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: todoData,
      todoInputText: ''
    }
  }

  handleInput = e => {
    this.setState({
      todoInputText: e.target.value
    })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm 
        todoInputText={this.state.todoInputText}
        handleInput={this.handleInput} 
        />
      </div>
    );
  }
}

export default App;

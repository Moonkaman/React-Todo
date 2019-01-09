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

  addTodo = e => {
    e.preventDefault();

    this.setState({
      todos: [...this.state.todos, {
        task: this.state.todoInputText,
        id: this.getID(),
        completed: false
      }],
      todoInputText: ''
    });
  }

  getID() {
    let newID = '';
    for(let i=0; i<13; i++) {
      newID += String(Math.floor(Math.random()*10));
    }
    return Number(newID);
  }

  completeTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(id === todo.id) {
          return todo.completed === false ? {...todo, completed: true} : {...todo, completed: false}
        } else {
          return todo;
        }
      })
    })
  }

  removeCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed === false)
    });
  }

  render() {
    return (
      <div>
        <TodoList 
        todos={this.state.todos}
        completeTodo={this.completeTodo}
        />
        <TodoForm 
        todoInputText={this.state.todoInputText}
        handleInput={this.handleInput}
        addTodo={this.addTodo}
        removeCompleted={this.removeCompleted} 
        />
      </div>
    );
  }
}

export default App;

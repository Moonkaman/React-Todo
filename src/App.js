import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Moment from 'moment';

import './App.css'

const todoData = [
{
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false,
  posted: '10-20-2018 2:45pm'
},
{
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: false,
  posted: '6-05-2018 4:03pm'
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
        completed: false,
        posted: Moment().format('M-D-YYYY h:mma')
      }],
      todoInputText: ''
    });
  }

  getID() {
    return Date.now();
  }

  completeTodo = id => {
    console.log('click');
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
      <div className="todo-list-cont">
        <h1 className="title">My Todo List</h1>
        <div className="arrow-down"></div>
        <div className="main-cont">
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
      </div>
    );
  }
}

export default App;

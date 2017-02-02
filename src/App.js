import React, { Component } from 'react';
import {TodoForm, TodoList} from './components/todo';
import {addTodo, generateId, findById, toogleTodo, updateTodo} from './lib/todoHelpers'
import './App.css';

class App extends Component {
  state = {
    todos: [
      {id: 1, name: 'Item for todo 1', isComplete: false },
      {id: 2, name: 'Item for todo 2', isComplete: true },
      {id: 3, name: 'Item for todo 3', isComplete: false }
    ],
    currentItem: '',
    errorMessage: ''
  }

  handleToogle = (id) => {
    const todo = findById(id, this.state.todos)
    const toogled = toogleTodo(todo)
    const updatedTodos = updateTodo(this.state.todos, toogled)
    this.setState({
      todos: updatedTodos
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    const newId = generateId()
    const newItem = {id: newId, name: this.state.currentItem, isComplete: false};
    const updatedTodos = addTodo(this.state.todos, newItem)
    this.setState({
      todos: updatedTodos,
      currentItem: '',
      errorMessage: ''
    })
  }

  handleEmptySubmit = (event) => {
    event.preventDefault()
    this.setState({
      errorMessage: 'Please provide some todo'
    })
  }

  handleCurrentItem = (event) => {
    this.setState({
      currentItem: event.target.value
    })
  }

  render() {
    const submitHandler = (this.state.currentItem) ? this.handleSubmit : this.handleEmptySubmit

    return (
      <div className="App">
        <div className="App-header">
          <h2>To Do</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="errorMessage">{this.state.errorMessage}</span>}
          <TodoForm
            handleCurrentItem={this.handleCurrentItem}
            currentItem={this.state.currentItem}
            handleSubmit={submitHandler}
            />

          <TodoList handleToogle={this.handleToogle} todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;

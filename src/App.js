import React, { Component } from 'react';
import logo from './logo.svg';
import {TodoForm, TodoList} from './components/todo';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      todos: [
        {id: 1, name: 'Item for todo 1', isComplete: false },
        {id: 2, name: 'Item for todo 2', isComplete: true },
        {id: 3, name: 'Item for todo 3', isComplete: false }
      ],
      currentItem: ''
    }
    this.handleCurrentItem = this.handleCurrentItem.bind(this)
  }

  handleCurrentItem(event){
    this.setState({
      currentItem: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo React</h2>
        </div>
        <div className="Todo-App">

          <TodoForm handleCurrentItem={this.handleCurrentItem} currentItem={this.state.currentItem} />

          <TodoList todos={this.state.todos} />

        </div>
      </div>
    );
  }
}

export default App;

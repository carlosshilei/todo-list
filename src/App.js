import React, { Component } from 'react';
import 'normalize.css'
import './App.css';
import './reset.css'
import TodoInput from './TodoInput';
import TodoItem from './TodoItem'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: 'test',
      todoList: [
        {id:1,title:'第一个代办'},
        {id:2,title:'第二个代办'}
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item,index) => {
      return (
        <li key={index}>
          <TodoItem todo={item} />
        </li>
      )
    })
    return (
      <div className="App">
        <h1>我的代办</h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo} />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )
  }
}

export default App;

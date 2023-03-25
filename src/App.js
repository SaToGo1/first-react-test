import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      taskArray: []
    }
  }

  render(){
    return (
      <div className="App">
        <div className="inputDiv">
          <input type="text" className="input"></input>
          <button className="button">Add Task</button>
        </div>
        <h2>Tasks</h2>
      </div>
    );
  }
}

export default App;

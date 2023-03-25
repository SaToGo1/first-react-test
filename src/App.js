import React, { Component } from 'react'
//import './App.css';

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
        <input type="text"></input>
        <button>Add Task</button>
        <h2>Tasks</h2>
      </div>
    );
  }
}

export default App;

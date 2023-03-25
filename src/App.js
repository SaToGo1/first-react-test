import React, { Component } from 'react';
import './App.css';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      taskArray: []
    }

    this.clickAddTask = this.clickAddTask.bind(this); 
  }

  clickAddTask(){
    let input = document.getElementById('input').value;
    this.setState({
      taskArray: [...this.state.taskArray, input]
    });
    console.log(this.state.taskArray);
  }

  render(){
    return (
      <div className="App">
        <div className="inputDiv">
          <input type="text" className="input" id="input"></input>
          <button className="button" onClick={this.clickAddTask}>Add Task</button>
        </div>
        <h2>Tasks</h2>
        <Overview tasks = {this.taskArray} />
      </div>
    );
  }
}

export default App;
